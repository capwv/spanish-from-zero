/* Spanish From Zero — engine: levels (A1-C2) x skills, nav, progress, quiz, exercises,
   listening dialogues (TTS) and speaking shadowing with self-recording (MediaRecorder). */
(function () {
  'use strict';

  var STORAGE_KEY = 'spanish-zero-progress-v1';

  /* Quiz option shuffle: deterministic per question so answer positions are not predictable. Migrates saved picks once. */
  (function () {
    var POS = /(اختيار|خيار)\S*\s+(الأول|التاني|التالت)|الأولى|التانية|التالتة|الثانية|الثالثة/;
    function hs(s) { var x = 2166136261; for (var i = 0; i < s.length; i++) { x ^= s.charCodeAt(i); x = Math.imul(x, 16777619); } return x >>> 0; }
    var perms = {};
    CURRICULUM.forEach(function (l) {
      (l.quiz || []).forEach(function (q, i) {
        var n = (q.options || []).length, k;
        if (n < 2 || POS.test(q.explain || '') || q.__shuf) return;
        var p = [], s = hs(l.id + ':' + i + ':v1');
        for (k = 0; k < n; k++) p.push(k);
        for (k = n - 1; k > 0; k--) { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; var j = Math.floor(s / 4294967296 * (k + 1)), t = p[k]; p[k] = p[j]; p[j] = t; }
        q.options = p.map(function (o) { return q.options[o]; });
        q.answer = p.indexOf(q.answer);
        q.__shuf = 1;
        perms[l.id + ':' + i] = p;
      });
    });
    try {
      var FK = STORAGE_KEY + '-shuf1';
      if (!localStorage.getItem(FK)) {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          var pr = JSON.parse(raw);
          if (pr && pr.answers) {
            Object.keys(pr.answers).forEach(function (key) {
              var a = pr.answers[key], p = perms[key];
              if (a && p && typeof a.picked === 'number') a.picked = p.indexOf(a.picked);
            });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(pr));
          }
        }
        localStorage.setItem(FK, '1');
      }
    } catch (e) {}
  })();

  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var p = JSON.parse(raw);
        if (p && typeof p === 'object') {
          p.answers = p.answers || {};
          p.done = p.done || {};
          return p;
        }
      }
    } catch (e) { /* corrupted storage -> start fresh */ }
    return { answers: {}, done: {} };
  }

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (e) {}
  }

  var progress = loadProgress();

  /* ---------- levels & skills metadata ---------- */
  var LEVELS = [
    { id: 'A1', name: 'مبتدئ',      desc: 'الحروف والنطق، التحيات، الأفعال الأساسية، وأول محادثة عن نفسك' },
    { id: 'A2', name: 'أساسي',      desc: 'الماضي والمستقبل، مواقف يومية، وإيميلات بسيطة' },
    { id: 'B1', name: 'متوسط',      desc: 'تعبّر عن رأيك، تحكي تجارب، وتفهم نصوص أطول' },
    { id: 'B2', name: 'فوق المتوسط', desc: 'نقاشات وحجج، إيميلات رسمية، ومقالات بأفكار مركبة' },
    { id: 'C1', name: 'متقدم',      desc: 'مواضيع مجردة، أسلوب أكاديمي، وعروض تقديمية' },
    { id: 'C2', name: 'متقدم جداً',     desc: 'تعبيرات اصطلاحية، دقة في المعنى، وتحكم في الأسلوب' }
  ];
  var SKILL_META = {
    core:      { icon: '📚', name: 'الأساس والجرامر' },
    listening: { icon: '🎧', name: 'استماع' },
    reading:   { icon: '📖', name: 'قراءة' },
    writing:   { icon: '✍️', name: 'كتابة' },
    speaking:  { icon: '🗣️', name: 'كلام' }
  };
  function levelOf(l) { return l.level || 'A1'; }
  function skillOf(l) { return l.skill || 'core'; }
  function lessonsOfLevel(lv) { return CURRICULUM.filter(function (l) { return levelOf(l) === lv; }); }
  function levelProgress(lv) {
    var ls = lessonsOfLevel(lv), d = 0;
    ls.forEach(function (l) { if (progress.done[l.id]) d++; });
    return { done: d, total: ls.length, pct: ls.length ? Math.round(d / ls.length * 100) : 0 };
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  var HL_WORDS = [];
  var KW_RE = new RegExp('\\b(' + HL_WORDS.join('|') + ')\\b', 'gi');

  function highlight(code) {
    var out = esc(code);
    var parts = out.split(/(#[^\n]*)/g);
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 1) { parts[i] = '<span class="c">' + parts[i] + '</span>'; continue; }
      var seg = parts[i].split(/('[^']*'|"[^"\n]*")/g);
      for (var j = 0; j < seg.length; j++) {
        if (j % 2 === 1) { seg[j] = '<span class="s">' + seg[j] + '</span>'; continue; }
        seg[j] = seg[j]
          .replace(/(--[a-zA-Z][\w-]*|-\w)\b/g, '<span class="n">$1</span>')
          .replace(KW_RE, '<span class="k">$1</span>');
      }
      parts[i] = seg.join('');
    }
    return '<pre><code>' + parts.join('') + '</code></pre>';
  }

  function renderInline(text) {
    return esc(text).replace(/`([^`]+)`/g, function (_, c) {
      return '<span class="kw">' + c + '</span>';
    });
  }

  /* ---------- text-to-speech (listening & shadowing) ---------- */
  var canSpeak = typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined';
  function pickVoice() {
    if (!canSpeak) return null;
    var vs = window.speechSynthesis.getVoices() || [];
    var prefs = ['es-ES', 'es-MX', 'es-AR', 'es-US', 'es'];
    for (var i = 0; i < prefs.length; i++) {
      for (var j = 0; j < vs.length; j++) {
        if (vs[j].lang && vs[j].lang.replace('_', '-').toLowerCase().indexOf(prefs[i].toLowerCase()) === 0) return vs[j];
      }
    }
    return null;
  }
  if (canSpeak) { try { window.speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged = function () {}; } catch (e) {} }
  function speak(text, rate, onend) {
    if (!canSpeak) { if (onend) onend(); return; }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'es-ES';
      var v = pickVoice(); if (v) u.voice = v;
      u.rate = rate || 0.92;
      if (onend) { u.onend = onend; u.onerror = onend; }
      window.speechSynthesis.speak(u);
    } catch (e) { if (onend) onend(); }
  }
  function stopSpeak() { if (canSpeak) try { window.speechSynthesis.cancel(); } catch (e) {} }

  /* ---------- progress ---------- */
  function totalLessons() { return CURRICULUM.length; }
  function doneCount() {
    var n = 0;
    CURRICULUM.forEach(function (l) { if (progress.done[l.id]) n++; });
    return n;
  }

  function refreshProgressUI() {
    var pct = totalLessons() ? Math.round(doneCount() / totalLessons() * 100) : 0;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').textContent = pct + '%';
    CURRICULUM.forEach(function (l) {
      var el = document.querySelector('.nav-item[data-id="' + l.id + '"]');
      if (el) { el.classList.toggle('done', !!progress.done[l.id]); el.querySelector('.check').textContent = progress.done[l.id] ? '✓' : ''; }
    });
    LEVELS.forEach(function (lv) {
      var p = levelProgress(lv.id);
      var bar = document.getElementById('lvlbar-' + lv.id);
      if (bar) { bar.style.width = p.pct + '%'; }
      var txt = document.getElementById('lvlpct-' + lv.id);
      if (txt) { txt.textContent = p.pct + '%'; }
      var card = document.getElementById('lvlcard-' + lv.id);
      if (card) {
        card.classList.toggle('complete', p.total > 0 && p.done === p.total);
        var fill = card.querySelector('.lvl-card-fill'); if (fill) fill.style.width = p.pct + '%';
        var cpct = card.querySelector('.lvl-card-pct'); if (cpct) cpct.textContent = p.pct + '%';
        var cb = card.querySelector('.lvl-cert-btn'); if (cb) cb.hidden = !(p.total > 0 && p.done === p.total);
        var go = card.querySelector('.lvl-go');
        if (go) go.textContent = p.done === 0 ? 'ابدأ المستوى' : (p.done === p.total ? 'راجع المستوى' : 'كمل من حيث وقفت');
      }
    });
    document.dispatchEvent(new CustomEvent('iua:progress'));
  }

  /* ---------- nav (grouped by level) ---------- */
  function buildNav() {
    var nav = document.getElementById('nav');
    nav.innerHTML = '';
    if (currentLevel) {
      var back = document.createElement('button');
      back.type = 'button';
      back.className = 'nav-back';
      back.textContent = '← كل المستويات';
      back.addEventListener('click', function () {
        document.getElementById('sidebar').classList.remove('open');
        exitLevel(); showHome();
      });
      nav.appendChild(back);
    }
    LEVELS.forEach(function (lv) {
      if (currentLevel && lv.id !== currentLevel) return;
      var ls = lessonsOfLevel(lv.id);
      if (!ls.length) return;
      var head = document.createElement('div');
      head.className = 'lvl-head';
      head.innerHTML = '<div class="lvl-head-row"><b>' + lv.id + '</b><span>' + esc(lv.name) + '</span><span class="lvl-pct" id="lvlpct-' + lv.id + '">0%</span></div>' +
        '<div class="lvl-bar"><i id="lvlbar-' + lv.id + '"></i></div>';
      nav.appendChild(head);
      function addItem(l, locked) {
        var sk = SKILL_META[skillOf(l)] || SKILL_META.core;
        var item = document.createElement('button');
        item.type = 'button';
        item.className = 'nav-item' + (locked ? ' locked' : '');
        item.dataset.id = l.id;
        item.innerHTML = '<span class="check">' + (progress.done[l.id] ? '✓' : '') + '</span>' +
          '<span class="num" title="' + esc(sk.name) + '">' + (locked ? '🔒' : sk.icon) + '</span><span>' + esc(l.nav) + '</span>';
        item.addEventListener('click', function () {
          if (locked) { alert('الدرس ده مقفول لحد ما تخلّص القسم اللي قبله 🔒'); return; }
          openLesson(l.id);
          document.getElementById('sidebar').classList.remove('open');
        });
        nav.appendChild(item);
      }
      if (currentLevel) {
        sectionsOfLevel(lv.id).forEach(function (sec) {
          var meta = SKILL_META[sec.skill] || SKILL_META.core;
          var unlocked = sectionUnlocked(lv.id, sec.skill);
          var sub = document.createElement('div');
          sub.className = 'sec-sub';
          sub.textContent = meta.icon + ' ' + meta.name + (unlocked ? '' : ' 🔒');
          nav.appendChild(sub);
          sec.lessons.forEach(function (l) { addItem(l, !unlocked); });
        });
      } else {
        ls.forEach(function (l) { addItem(l, lessonLocked(l)); });
      }
    });
  }

  /* ---------- hero level cards ---------- */
  function firstUndone(ls) {
    for (var i = 0; i < ls.length; i++) if (!progress.done[ls[i].id]) return ls[i];
    return ls[0];
  }
  function renderLevels() {
    var host = document.getElementById('levels-grid');
    if (!host) return;
    host.innerHTML = '';
    LEVELS.forEach(function (lv) {
      var ls = lessonsOfLevel(lv.id);
      if (!ls.length) return;
      var p = levelProgress(lv.id);
      var card = document.createElement('div');
      card.className = 'lvl-card';
      card.id = 'lvlcard-' + lv.id;
      var counts = { core: 0, listening: 0, reading: 0, writing: 0, speaking: 0 };
      ls.forEach(function (l) { counts[skillOf(l)] = (counts[skillOf(l)] || 0) + 1; });
      var chips = Object.keys(counts).filter(function (k) { return counts[k]; }).map(function (k) {
        return '<span class="lvl-chip-s">' + SKILL_META[k].icon + ' ' + counts[k] + '</span>';
      }).join('');
      card.innerHTML =
        '<div class="lvl-card-top"><span class="lvl-card-id">' + lv.id + '</span><span class="lvl-card-name">' + esc(lv.name) + '</span><span class="lvl-card-pct">' + p.pct + '%</span></div>' +
        '<p class="lvl-card-desc">' + esc(lv.desc) + '</p>' +
        '<div class="lvl-card-chips">' + chips + '</div>' +
        '<div class="lvl-card-bar"><i class="lvl-card-fill" style="width:' + p.pct + '%"></i></div>' +
        '<div class="lvl-card-actions"><button type="button" class="lvl-go cta-mini">' + (p.done === 0 ? 'ابدأ المستوى' : 'كمل') + '</button>' +
        '<button type="button" class="lvl-cert-btn" data-level="' + lv.id + '" hidden>🎓 شهادة المستوى</button></div>';
      card.querySelector('.lvl-go').addEventListener('click', function () {
        enterLevel(lv.id);
      });
      card.querySelector('.lvl-cert-btn').addEventListener('click', function () {
        if (window.IUA_LEVEL_CERT) window.IUA_LEVEL_CERT.open(lv.id);
      });
      host.appendChild(card);
    });
  }

  /* ---------- lesson rendering ---------- */
  function renderBlocks(blocks) {
    var html = '';
    blocks.forEach(function (b) {
      if (b.type === 'p') html += '<p' + (b.ltr ? ' dir="ltr" class="en-p"' : '') + '>' + renderInline(b.text) + '</p>';
      else if (b.type === 'h') html += '<h3>' + esc(b.text) + '</h3>';
      else if (b.type === 'code') html += highlight(b.code);
      else if (b.type === 'ex') html += '<div class="exs">' + b.items.map(function (i) { return '<div class="e"><div class="en">' + esc(i[0]) + (canSpeak ? ' <button type="button" class="speak-btn" data-say="' + esc(i[0]).replace(/"/g, '&quot;') + '" aria-label="اسمع النطق">🔊</button>' : '') + '</div><div class="ar">' + esc(i[1]) + '</div></div>'; }).join('') + '</div>';
      else if (b.type === 'note') html += '<div class="note' + (b.warn ? ' warn' : '') + '">' + renderInline(b.text) + '</div>';
      else if (b.type === 'list') {
        html += '<ul>' + b.items.map(function (i) { return '<li>' + renderInline(i) + '</li>'; }).join('') + '</ul>';
      } else if (b.type === 'table') {
        html += '<div class="tbl"><table class="demo' + (b.ltr ? ' ltr' : '') + '"><tr>' + b.head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr>' +
          b.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') +
          '</table></div>';
      } else if (b.type === 'dialogue') {
        html += '<div class="dlg">' +
          '<div class="dlg-actions"><button type="button" class="dlg-play-all">▶️ اسمع المحادثة كلها</button><span class="dlg-hint">اسمع أكتر من مرة، الأول من غير ما تقرأ، وبعدين مع القراءة.</span></div>' +
          b.lines.map(function (ln) {
            return '<div class="dlg-line"><div class="dlg-top"><b class="dlg-who">' + esc(ln.who) + '</b>' +
              '<span class="dlg-en" dir="ltr">' + esc(ln.en) + '</span>' +
              (canSpeak ? '<button type="button" class="speak-btn dlg-say" data-say="' + esc(ln.en).replace(/"/g, '&quot;') + '" aria-label="اسمع الجملة">🔊</button>' : '') +
              '</div><div class="dlg-ar">' + esc(ln.ar) + '</div></div>';
          }).join('') + '</div>';
      } else if (b.type === 'speak') {
        html += '<div class="spk-set"><p class="spk-tip">🗣️ اسمع الجملة، رددها بصوت عالي ورا النطق، وبعدين سجّل صوتك وقارن. التسجيل بيفضل على جهازك بس ومش بيتبعت لأي حد.</p>' +
          b.items.map(function (it) {
            return '<div class="spk-row" data-en="' + esc(it.en).replace(/"/g, '&quot;') + '">' +
              '<div class="spk-text"><span class="spk-en" dir="ltr">' + esc(it.en) + '</span>' + (it.ar ? '<span class="spk-ar">' + esc(it.ar) + '</span>' : '') + '</div>' +
              '<div class="spk-btns">' +
              '<button type="button" class="spk-b spk-listen">🔊 اسمع</button>' +
              '<button type="button" class="spk-b spk-rec">🎙️ سجّل</button>' +
              '<button type="button" class="spk-b spk-play" disabled>▶️ اسمع نفسك</button>' +
              '</div></div>';
          }).join('') + '</div>';
      }
    });
    return html;
  }

  /* ---------- dialogue & speaking interactivity ---------- */
  function wireAudio(host, lesson) {
    /* single-line speak buttons (dialogue + examples) */
    host.querySelectorAll('.speak-btn[data-say]').forEach(function (b) {
      b.addEventListener('click', function () { speak(b.getAttribute('data-say')); });
    });
    /* play whole dialogue */
    var playAll = host.querySelector('.dlg-play-all');
    if (playAll) {
      var playing = false;
      playAll.addEventListener('click', function () {
        var dlg = playAll.closest('.dlg');
        var lines = Array.prototype.map.call(dlg.querySelectorAll('.dlg-say'), function (x) { return x.getAttribute('data-say'); });
        if (playing) { stopSpeak(); playing = false; playAll.textContent = '▶️ اسمع المحادثة كلها'; return; }
        if (!lines.length) return;
        playing = true; playAll.textContent = '⏹️ وقف';
        var i = 0;
        (function next() {
          if (!playing || i >= lines.length) { playing = false; playAll.textContent = '▶️ اسمع المحادثة كلها'; return; }
          speak(lines[i++], 0.92, next);
        })();
      });
    }
    /* speaking shadowing rows */
    host.querySelectorAll('.spk-row').forEach(function (row) {
      var en = row.getAttribute('data-en');
      var recBtn = row.querySelector('.spk-rec');
      var playBtn = row.querySelector('.spk-play');
      row.querySelector('.spk-listen').addEventListener('click', function () { speak(en); });
      var mediaRec = null, chunks = [], url = null, stream = null;
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || typeof MediaRecorder === 'undefined') {
        recBtn.disabled = true;
        recBtn.textContent = '🎙️ غير متاح';
        recBtn.title = 'المتصفح ده مش بيدعم تسجيل الصوت. جرب كروم على الموبايل أو الكمبيوتر.';
        return;
      }
      recBtn.addEventListener('click', function () {
        if (mediaRec && mediaRec.state === 'recording') {
          mediaRec.stop();
          return;
        }
        recBtn.disabled = true;
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (st) {
          stream = st; chunks = [];
          mediaRec = new MediaRecorder(st);
          mediaRec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
          mediaRec.onstop = function () {
            if (stream) { stream.getTracks().forEach(function (t) { t.stop(); }); stream = null; }
            if (url) URL.revokeObjectURL(url);
            url = URL.createObjectURL(new Blob(chunks, { type: mediaRec.mimeType || 'audio/webm' }));
            playBtn.disabled = false;
            recBtn.textContent = '🎙️ سجّل تاني';
            recBtn.disabled = false;
          };
          mediaRec.start();
          recBtn.textContent = '⏹️ وقف التسجيل';
          recBtn.disabled = false;
        }).catch(function () {
          recBtn.disabled = false;
          recBtn.textContent = '🎙️ الميك مرفوض';
          setTimeout(function () { recBtn.textContent = '🎙️ سجّل'; }, 2500);
        });
      });
      playBtn.addEventListener('click', function () {
        if (!url) return;
        new Audio(url).play();
      });
    });
  }

  var currentLesson = null;
  var currentLevel = null;
  var SECTION_ORDER = ['core', 'listening', 'reading', 'writing', 'speaking'];

  function sectionsOfLevel(lvid) {
    var ls = lessonsOfLevel(lvid);
    var out = [];
    SECTION_ORDER.forEach(function (sk) {
      var sls = ls.filter(function (l) { return skillOf(l) === sk; });
      if (sls.length) out.push({ skill: sk, lessons: sls });
    });
    return out;
  }
  function sectionUnlocked(lvid, skill) {
    var secs = sectionsOfLevel(lvid);
    for (var i = 0; i < secs.length; i++) {
      if (secs[i].skill === skill) return true;
      var allDone = secs[i].lessons.every(function (l) { return progress.done[l.id]; });
      if (!allDone) return false;
    }
    return true;
  }
  function lessonLocked(l) {
    if (!currentLevel) return !sectionUnlocked(levelOf(l), skillOf(l));
    return !sectionUnlocked(currentLevel, skillOf(l));
  }

  function openLesson(id) {
    var lesson = null, idx = -1;
    CURRICULUM.forEach(function (l, i) { if (l.id === id) { lesson = l; idx = i; } });
    if (!lesson) return;
    if (lessonLocked(lesson)) { alert('الدرس ده مقفول لحد ما تخلّص القسم اللي قبله 🔒'); return; }
    stopSpeak();
    currentLesson = lesson;
    document.getElementById('lab').hidden = true;
    document.getElementById('lesson').style.display = 'block';
    progress.lastLesson = id; saveProgress();

    document.getElementById('hero').style.display = 'none';
    var host = document.getElementById('lesson');

    var sk = SKILL_META[skillOf(lesson)] || SKILL_META.core;
    var lv = levelOf(lesson);

    var html = '<div class="lesson">';
    html += '<div class="lesson-tags"><span class="lesson-tag">' + lv + '</span><span class="lesson-tag">' + sk.icon + ' ' + esc(sk.name) + '</span></div>';
    html += '<h2 class="lesson-title">' + esc(lesson.title) + '</h2>';
    html += '<div class="lesson-sub">' + esc(lesson.subtitle) + '</div>';
    html += renderBlocks(lesson.blocks);
    if (lesson.quiz.length) {
      html += '<div class="quiz-box" id="quiz-box"><h3>🧠 اختبر نفسك</h3><div id="quiz-qs"></div><div class="quiz-result" id="quiz-result"></div></div>';
    }
    if (lesson.exercises.length) {
      html += '<div class="exercise-box"><h3>✍️ تمارين عملية</h3><div id="exs"></div></div>';
    }
    html += '<div class="complete-badge" id="complete-badge">🎉 مبروك! خلصت الدرس ده. كمل اللي بعده 👇</div>';
    var seq = currentLevel ? lessonsOfLevel(currentLevel) : CURRICULUM;
    var sidx = -1; seq.forEach(function (l, i) { if (l.id === id) sidx = i; });
    if (sidx < 0) { seq = CURRICULUM; sidx = idx; }
    var atEnd = sidx === seq.length - 1;
    html += '<div class="lesson-nav">';
    html += '<button id="prev-btn"' + (sidx === 0 ? ' disabled' : '') + '>→ الدرس اللي فات</button>';
    if (atEnd && currentLevel) {
      html += '<button id="next-btn" class="next-btn">خلصت المستوى 🎓</button>';
    } else {
      html += '<button id="next-btn" class="next-btn"' + (atEnd ? ' disabled' : '') + '>الدرس اللي بعده ←</button>';
    }
    html += '</div></div>';

    host.innerHTML = html;

    wireAudio(host, lesson);
    if (lesson.quiz.length) buildQuiz(lesson);
    if (lesson.exercises.length) buildExercises(lesson);
    if (!lesson.quiz.length && !progress.done[lesson.id]) {
      progress.done[lesson.id] = true; saveProgress();
      document.getElementById('complete-badge').classList.add('show');
    }

    document.getElementById('prev-btn').addEventListener('click', function () {
      if (sidx > 0) openLesson(seq[sidx - 1].id);
    });
    document.getElementById('next-btn').addEventListener('click', function () {
      if (atEnd && currentLevel) { showHome(); return; }
      if (!atEnd) openLesson(seq[sidx + 1].id);
    });

    document.querySelectorAll('.nav-item').forEach(function (n) {
      n.classList.toggle('active', n.dataset.id === id);
    });
    refreshProgressUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------- quiz ---------- */
  function buildQuiz(lesson) {
    var qsHost = document.getElementById('quiz-qs');
    lesson.quiz.forEach(function (q, qi) {
      var box = document.createElement('div');
      box.className = 'quiz-q';
      var qid = lesson.id + ':' + qi;

      var qhtml = '<div class="q-text">' + (qi + 1) + '. ' + renderInline(q.q) + '</div>';
      if (q.code) qhtml += highlight(q.code);
      if (q.en) qhtml += '<p dir="ltr" class="en-p quiz-en">' + esc(q.en) + '</p>';
      box.innerHTML = qhtml;

      var fb = document.createElement('div');
      fb.className = 'feedback';

      q.options.forEach(function (opt, oi) {
        var btn = document.createElement('button');
        btn.className = 'opt';
        btn.innerHTML = opt.mono ? '<span class="mono">' + esc(opt.text) + '</span>' : renderInline(opt.text);
        btn.addEventListener('click', function () {
          if (progress.answers[qid] !== undefined) return;
          var correct = (oi === q.answer);
          progress.answers[qid] = { picked: oi, correct: correct };
          saveProgress();
          paint();
          checkQuizDone(lesson);
        });
        box.appendChild(btn);
      });
      box.appendChild(fb);
      qsHost.appendChild(box);

      function paint() {
        var rec = progress.answers[qid];
        var btns = box.querySelectorAll('.opt');
        btns.forEach(function (b, oi) {
          b.disabled = rec !== undefined;
          if (rec !== undefined) {
            if (oi === q.answer) b.classList.add('correct');
            else if (oi === rec.picked) b.classList.add('wrong');
          }
        });
        if (rec !== undefined) {
          fb.className = 'feedback ' + (rec.correct ? 'ok' : 'no');
          fb.innerHTML = (rec.correct ? '✅ صح! ' : '❌ مش دي. ') + renderInline(q.explain);
        }
      }
      paint();
    });
    checkQuizDone(lesson);
  }

  function checkQuizDone(lesson) {
    var total = lesson.quiz.length, answered = 0, correct = 0;
    lesson.quiz.forEach(function (q, qi) {
      var rec = progress.answers[lesson.id + ':' + qi];
      if (rec !== undefined) { answered++; if (rec.correct) correct++; }
    });
    var result = document.getElementById('quiz-result');
    if (answered === total && total > 0) {
      if (correct === total && !progress.done[lesson.id]) {
        progress.done[lesson.id] = true;
        saveProgress();
      }
      result.classList.add('show');
      result.innerHTML = '🏁 خلصت كويز الدرس: ' + correct + ' من ' + total + ' صح' +
        (correct === total ? ' : أداء مثالي 👏' : ' : راجع اللي غلطت فيه فوق وافهم ليه');
      if (correct === total) document.getElementById('complete-badge').classList.add('show');
      else { const retry = document.createElement('button'); retry.className = 'solution-toggle'; retry.textContent = 'حاول الكويز تاني'; retry.onclick = () => { lesson.quiz.forEach((q, i) => delete progress.answers[lesson.id + ':' + i]); saveProgress(); openLesson(lesson.id); }; result.appendChild(retry); }
      refreshProgressUI();
    }
  }

  /* ---------- exercises ---------- */
  function buildExercises(lesson) {
    var host = document.getElementById('exs');
    lesson.exercises.forEach(function (ex, i) {
      var box = document.createElement('div');
      box.className = 'exercise';
      var html = '<div class="task">تمرين ' + (i + 1) + ': ' + renderInline(ex.task) + '</div>';
      if (ex.hint) html += '<p style="color:var(--muted);font-size:.88rem">💡 تلميح: ' + renderInline(ex.hint) + '</p>';
      html += '<label>اكتب محاولتك قبل الحل:</label><textarea class="attempt" dir="auto" rows="4" spellcheck="false" aria-label="محاولتك"></textarea><p class="small">جرب تكتب إجابتك بنفسك الأول، وبعدين قارنها بالحل. المحاولة هنا للمذاكرة، مش تصحيح تلقائي.</p><button class="solution-toggle">أظهر الحل النموذجي</button>';
      html += '<div class="solution"><div class="sol" dir="auto">' + renderInline(ex.code) + '</div>' +
        (ex.why ? '<div class="why">' + renderInline(ex.why) + '</div>' : '') + '</div>';
      box.innerHTML = html;
      var btn = box.querySelector('.solution-toggle');
      var sol = box.querySelector('.solution');
      var attempt = box.querySelector('.attempt'); var ak = 'attempt:' + lesson.id + ':' + i; attempt.value = progress[ak] || ''; attempt.oninput = () => { progress[ak] = attempt.value; saveProgress(); };
      btn.addEventListener('click', function () {
        sol.classList.toggle('open');
        btn.textContent = sol.classList.contains('open') ? 'إخفي الحل' : 'أظهر الحل النموذجي';
      });
      host.appendChild(box);
    });
  }

  /* ---------- reset + menu ---------- */
  document.getElementById('reset-btn').addEventListener('click', function () {
    if (confirm('متأكد إنك عايز تمسح كل تقدمك وتبدأ من الأول؟')) {
      progress = { answers: {}, done: {} };
      saveProgress();
      buildNav();
      showHome();
      refreshProgressUI();
    }
  });

  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open');
  });

  document.getElementById('lab-link').onclick = () => { stopSpeak(); document.getElementById('hero').style.display = 'none'; document.getElementById('lesson').style.display = 'none'; document.getElementById('lab').hidden = false; document.getElementById('sidebar').classList.remove('open'); if (window.LAB_FOCUS) window.LAB_FOCUS(); };
  document.getElementById('home-link').onclick = () => { stopSpeak(); showHome(); };
  document.getElementById('start-btn').onclick = () => { openLesson(firstUndone(CURRICULUM).id); };

  /* ---------- hero stats (computed, never hardcoded) ---------- */
  (function fillStats() {
    var q = 0;
    CURRICULUM.forEach(function (l) { q += l.quiz.length; });
    document.getElementById('stat-lessons').textContent = CURRICULUM.length;
    document.getElementById('stat-questions').textContent = q;
    var meta = window.LAB_META || { challenges: 0 };
    document.getElementById('stat-challenges').textContent = meta.challenges;
  })();

  /* ---------- expose state for the per-level certificate script ---------- */
  window.IUA_LEVELS_STATE = {
    levels: LEVELS.map(function (lv) { return lv.id; }),
    progress: function (lv) { return levelProgress(lv); },
    total: totalLessons,
    done: doneCount
  };

  /* ---------- level view (one level at a time, skills in order) ---------- */
  function showHome() {
    document.getElementById('lab').hidden = true;
    document.getElementById('lesson').style.display = 'none';
    document.getElementById('hero').style.display = 'block';
    if (currentLevel) renderLevelView(); else { renderLevels(); }
    refreshProgressUI();
  }

  function enterLevel(lvid) {
    var lv = LEVELS.filter(function (x) { return x.id === lvid; })[0];
    if (!lv || !lessonsOfLevel(lvid).length) return;
    currentLevel = lvid;
    try { history.replaceState(null, '', '#lvl=' + lvid); } catch (e) {}
    buildNav();
    if (document.getElementById('hero').style.display !== 'none' || true) showHome();
  }

  function exitLevel() {
    currentLevel = null;
    try { history.replaceState(null, '', location.pathname); } catch (e) {}
    buildNav();
  }

  function renderLevelView() {
    var grid = document.getElementById('levels-grid');
    var view = document.getElementById('level-view');
    var hint = document.querySelector('.hero-hint');
    var startBtn = document.getElementById('start-btn');
    if (!view) return;
    grid.style.display = 'none';
    view.hidden = false;
    if (hint) hint.style.display = 'none';
    if (startBtn) startBtn.style.display = 'none';
    var lv = LEVELS.filter(function (x) { return x.id === currentLevel; })[0];
    if (!lv) return;
    var p = levelProgress(lv.id);
    document.getElementById('lv-id').textContent = lv.id;
    document.getElementById('lv-name').textContent = lv.name;
    document.getElementById('lv-desc').textContent = lv.desc;
    document.getElementById('lv-pct').textContent = p.pct + '%';
    document.getElementById('lv-bar').style.width = p.pct + '%';
    var complete = p.total > 0 && p.done === p.total;
    var cont = document.getElementById('lv-continue');
    cont.textContent = complete ? 'راجع المستوى من الأول' : (p.done === 0 ? 'ابدأ المستوى' : 'كمل من حيث وقفت');
    cont.onclick = function () {
      var ls = lessonsOfLevel(lv.id);
      var target = complete ? ls[0] : firstUndone(ls);
      openLesson(target.id);
    };
    var cert = document.getElementById('lv-cert');
    if (complete) {
      cert.disabled = false;
      cert.classList.add('ready');
      cert.textContent = '🎓 شهادة المستوى جاهزة — اضغط هنا';
      cert.onclick = function () { if (window.IUA_LEVEL_CERT) window.IUA_LEVEL_CERT.open(lv.id); };
    } else {
      cert.disabled = true;
      cert.classList.remove('ready');
      cert.textContent = '🔒 شهادة المستوى: خلّص كل الدروس الأول (' + p.done + '/' + p.total + ')';
      cert.onclick = null;
    }
    var host = document.getElementById('lv-lessons');
    host.innerHTML = '';
    var secs = sectionsOfLevel(lv.id);
    var currentSecFound = false;
    secs.forEach(function (sec) {
      var meta = SKILL_META[sec.skill] || SKILL_META.core;
      var done = sec.lessons.filter(function (l) { return progress.done[l.id]; }).length;
      var unlocked = sectionUnlocked(lv.id, sec.skill);
      var row = document.createElement('button');
      row.type = 'button';
      var isDone = done === sec.lessons.length;
      var state = isDone ? 'done' : (unlocked ? (currentSecFound ? 'open' : 'current') : 'locked');
      if (state === 'current') currentSecFound = true;
      row.className = 'lv-sec ' + state;
      var stateTxt = isDone ? '✓' : (unlocked ? done + '/' + sec.lessons.length : '🔒');
      var sub = isDone ? 'خلصان' : (unlocked ? (done ? 'شغال دلوقتي' : 'ابدأ من هنا') : 'خلّص اللي قبلها الأول');
      row.innerHTML = '<span class="s-icon">' + meta.icon + '</span>' +
        '<span><span class="s-name">' + esc(meta.name) + '</span><br><span class="s-sub">' + sub + '</span></span>' +
        '<span class="s-state">' + stateTxt + '</span>';
      row.addEventListener('click', function () {
        if (!unlocked) { alert('القسم ده مقفول لحد ما تخلّص اللي قبله 🔒'); return; }
        openLesson(firstUndone(sec.lessons).id);
      });
      host.appendChild(row);
    });
  }

  function renderLevelsWrapper() {
    var grid = document.getElementById('levels-grid');
    var view = document.getElementById('level-view');
    var hint = document.querySelector('.hero-hint');
    var startBtn = document.getElementById('start-btn');
    if (view) view.hidden = true;
    if (grid) grid.style.display = '';
    if (hint) hint.style.display = '';
    if (startBtn) startBtn.style.display = '';
    _renderLevels();
  }

  var _renderLevels = renderLevels;
  renderLevels = renderLevelsWrapper;

  document.getElementById('level-back').addEventListener('click', function () { exitLevel(); showHome(); });

  /* ---------- boot ---------- */
  buildNav();
  renderLevels();
  refreshProgressUI();
  (function () {
    var m = (location.hash || '').match(/^#lvl=(A1|A2|B1|B2|C1|C2)$/);
    if (m) enterLevel(m[1]);
  })();
})();
