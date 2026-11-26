/* Interactive lab engine: calculators, challenges, scenario cards, word-order builder, prompt builder.
   Everything runs in the browser. Content comes from window.LAB_DEF (lab-core.js). */
(function () {
'use strict';
var D = window.LAB_DEF;
var KEY = D.slug + '-lab-v1';
function el(id) { return document.getElementById(id); }
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function load() { try { var o = JSON.parse(localStorage.getItem(KEY)); if (o && o.t) return o; } catch (e) {} return { t: {} }; }
var st = load();
function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
function T(id) { return st.t[id] || (st.t[id] = {}); }
function hs(s) { var x = 2166136261; for (var i = 0; i < s.length; i++) { x ^= s.charCodeAt(i); x = Math.imul(x, 16777619); } return x >>> 0; }
function shuffled(arr, seed) {
  var a = arr.slice(), s = hs(seed);
  for (var k = a.length - 1; k > 0; k--) { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; var j = Math.floor(s / 4294967296 * (k + 1)), t = a[k]; a[k] = a[j]; a[j] = t; }
  return a;
}
function norm(s) {
  return String(s).toLowerCase().replace(/[\u2019\u2018]/g, "'").replace(/[.,!?؟;:"]/g, '').replace(/\s+/g, ' ').trim();
}
var canSpeak = typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined';
function speak(text) {
  if (!canSpeak) return;
  try { window.speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(text); u.lang = 'es-ES'; u.rate = 0.9; window.speechSynthesis.speak(u); } catch (e) {}
}
function speakBtn(text) {
  if (!canSpeak) return '';
  return ' <button type="button" class="speak-btn" data-say="' + esc(text).replace(/"/g, '&quot;') + '" aria-label="اسمع النطق">🔊</button>';
}
document.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('.speak-btn');
  if (b) speak(b.getAttribute('data-say'));
});

var progress = {}; /* toolId -> function returning {done, text} */
var R = {};

/* ---------- calc ---------- */
R.calc = function (t, host) {
  var h = '<div class="calc-grid">';
  t.fields.forEach(function (f) {
    h += '<label class="calc-f"><span>' + esc(f.label) + '</span><input type="number" inputmode="decimal" step="any" min="0" dir="ltr" id="cf-' + t.id + '-' + f.id + '" value="' + f.value + '" aria-label="' + esc(f.label) + '"></label>';
  });
  h += '</div><div class="calc-out" id="co-' + t.id + '"></div>';
  host.innerHTML = h;
  function vals() {
    var v = {};
    t.fields.forEach(function (f) { var n = parseFloat(el('cf-' + t.id + '-' + f.id).value); v[f.id] = isFinite(n) ? n : 0; });
    return v;
  }
  function draw() {
    var v = vals(), o = '';
    t.outputs.forEach(function (x) { o += '<div class="res-row"><span>' + esc(x.label) + '</span><b dir="ltr">' + esc(x.f(v)) + '</b></div>'; });
    el('co-' + t.id).innerHTML = o;
  }
  t.fields.forEach(function (f) {
    el('cf-' + t.id + '-' + f.id).addEventListener('input', function () { T(t.id).used = 1; save(); draw(); });
  });
  draw();
  progress[t.id] = function () { var u = !!T(t.id).used; return { done: u, text: u ? 'جربت الحاسبة بأرقامك.' : 'غيّر أي رقم في الحاسبة وشوف النتيجة.' }; };
};

/* ---------- challenges ---------- */
R.challenges = function (t, host) {
  var s = T(t.id); s.solved = s.solved || [];
  t.items.forEach(function (it, i) {
    var box = document.createElement('div');
    box.className = 'challenge';
    box.innerHTML = '<div class="ch-head"><span class="ch-num">تحدي ' + (i + 1) + '</span></div>' +
      '<div class="ch-q">' + esc(it.q) + '</div>' +
      (it.hint ? '<p class="small">💡 ' + esc(it.hint) + '</p>' : '') +
      '<div class="ch-row"><input class="ch-answer" dir="ltr" type="text" inputmode="' + (typeof it.answer === 'number' ? 'decimal' : 'text') + '" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="' + (typeof it.answer === 'number' ? 'اكتب الرقم' : 'اكتب الإجابة بالإسباني') + '" aria-label="إجابة التحدي ' + (i + 1) + '"><button type="button" class="cta ch-check">تحقق</button></div><div class="ch-fb"></div>';
    var input = box.querySelector('.ch-answer'), btn = box.querySelector('.ch-check'), fb = box.querySelector('.ch-fb');
    function ok() {
      box.classList.add('done'); fb.className = 'ch-fb ok'; fb.innerHTML = '✅ صح! ' + esc(it.why);
      input.disabled = true; btn.disabled = true;
    }
    if (s.solved.indexOf(i) > -1) { input.value = String(Array.isArray(it.answer) ? it.answer[0] : it.answer); ok(); }
    function check() {
      var raw = input.value.trim();
      if (!raw) { fb.className = 'ch-fb no'; fb.textContent = 'اكتب إجابتك الأول.'; return; }
      var good = false;
      if (typeof it.answer === 'number') {
        var n = parseFloat(raw.replace(/[٠-٩]/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(d); }).replace(/,/g, '').replace('%', ''));
        good = isFinite(n) && Math.abs(n - it.answer) <= (it.tol !== undefined ? it.tol : 0.01);
      } else {
        var list = Array.isArray(it.answer) ? it.answer : [it.answer];
        good = list.some(function (a) { return norm(a) === norm(raw); });
      }
      if (good) { if (s.solved.indexOf(i) < 0) s.solved.push(i); save(); ok(); refreshMissions(); }
      else { fb.className = 'ch-fb no'; fb.textContent = '❌ لسه. ' + (it.miss || 'راجع الحساب أو التلميح وجرب تاني.'); }
    }
    btn.addEventListener('click', check);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
    host.appendChild(box);
  });
  progress[t.id] = function () { var n = s.solved.length; return { done: n === t.items.length, text: 'حليت ' + n + ' من ' + t.items.length + ' تحديات.' }; };
};

/* ---------- cards (scenario game) ---------- */
R.cards = function (t, host) {
  var s = T(t.id);
  var idx = 0, score = 0, answered = false;
  if (s.finished) { idx = t.items.length; score = s.score; }
  function draw() {
    if (idx >= t.items.length) {
      host.innerHTML = '<div class="phish-end"><div class="phish-final">' + score + ' / ' + t.items.length + '</div><p>' +
        (score === t.items.length ? '🏆 نتيجة كاملة!' : score >= t.items.length - 2 ? '👏 قريب جداً! أعد اللعبة وراجع اللي فاتك.' : '💪 بداية كويسة، أعد اللعبة بعد ما تراجع الدروس.') +
        '</p><button type="button" class="cta" id="rs-' + t.id + '">العب تاني</button></div>';
      el('rs-' + t.id).addEventListener('click', function () { idx = 0; score = 0; s.finished = 0; save(); draw(); refreshMissions(); });
      return;
    }
    var c = t.items[idx]; answered = false;
    var h = '<div class="phish-progress">سؤال ' + (idx + 1) + ' من ' + t.items.length + '</div><div class="phish-msg">' +
      (c.kind ? '<div class="phish-kind">' + esc(c.kind) + '</div>' : '') +
      '<div class="phish-body"' + (c.ltr ? ' dir="ltr" style="text-align:left"' : '') + '>' + esc(c.text) + (c.ltr ? speakBtn(c.text) : '') + '</div></div><div class="card-opts">';
    c.options.forEach(function (o, oi) { h += '<button type="button" class="opt card-opt" data-i="' + oi + '">' + esc(o) + '</button>'; });
    h += '</div><div class="phish-fb" hidden></div>';
    host.innerHTML = h;
    host.querySelectorAll('.card-opt').forEach(function (b) {
      b.addEventListener('click', function () {
        if (answered) return; answered = true;
        var pick = +b.getAttribute('data-i'), good = pick === c.answer;
        if (good) score++;
        host.querySelectorAll('.card-opt').forEach(function (x, xi) { x.disabled = true; if (xi === c.answer) x.classList.add('correct'); else if (xi === pick) x.classList.add('wrong'); });
        var fb = host.querySelector('.phish-fb'); fb.hidden = false; fb.className = 'phish-fb ' + (good ? 'ok' : 'no');
        fb.innerHTML = '<div class="phish-verdict">' + (good ? '✅ صح!' : '❌ غلط.') + '</div><p>' + esc(c.why) + '</p><button type="button" class="cta" id="nx-' + t.id + '">' + (idx + 1 >= t.items.length ? 'شوف النتيجة' : 'اللي بعده') + '</button>';
        el('nx-' + t.id).addEventListener('click', function () {
          idx++; if (idx >= t.items.length) { s.finished = 1; s.score = score; save(); }
          draw(); refreshMissions();
        });
      });
    });
  }
  draw();
  progress[t.id] = function () { return { done: !!s.finished, text: s.finished ? 'خلصت اللعبة بنتيجة ' + s.score + ' من ' + t.items.length + '.' : 'لسه ما خلصتش اللعبة.' }; };
};

/* ---------- order (word-order builder) ---------- */
R.order = function (t, host) {
  var s = T(t.id); s.solved = s.solved || [];
  t.items.forEach(function (it, i) {
    var box = document.createElement('div'); box.className = 'challenge';
    var pool = shuffled(it.words.concat(it.extra || []), t.id + i);
    /* make sure the shuffled order is not already the answer */
    if (pool.join(' ') === it.words.join(' ')) pool.reverse();
    box.innerHTML = '<div class="ch-head"><span class="ch-num">جملة ' + (i + 1) + '</span></div><div class="ch-q">' + esc(it.ar) + '</div>' +
      '<div class="ord-ans" dir="ltr" aria-label="جملتك"></div><div class="ord-pool" dir="ltr"></div>' +
      '<div class="btn-row"><button type="button" class="cta ord-check">تحقق</button><button type="button" class="solution-toggle ord-undo">امسح آخر كلمة</button></div><div class="ch-fb"></div>';
    var ans = [], ansEl = box.querySelector('.ord-ans'), poolEl = box.querySelector('.ord-pool'), fb = box.querySelector('.ch-fb');
    var used = {};
    function paint() {
      ansEl.innerHTML = ans.map(function (a) { return '<span class="ord-w in">' + esc(pool[a]) + '</span>'; }).join('') || '<span class="small">اضغط على الكلمات بالترتيب الصح</span>';
      poolEl.querySelectorAll('button').forEach(function (b) { b.disabled = !!used[b.getAttribute('data-i')] || box.classList.contains('done'); });
    }
    pool.forEach(function (w, pi) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'ord-w'; b.textContent = w; b.setAttribute('data-i', pi);
      b.addEventListener('click', function () { used[pi] = 1; ans.push(pi); paint(); });
      poolEl.appendChild(b);
    });
    function done() {
      box.classList.add('done'); ans = []; used = {};
      ansEl.innerHTML = '<span class="ord-w in">' + esc(it.words.join(' ')) + '</span>';
      fb.className = 'ch-fb ok'; fb.innerHTML = '✅ صح! ' + esc(it.why || '') + speakBtn(it.words.join(' '));
      poolEl.querySelectorAll('button').forEach(function (b) { b.disabled = true; });
    }
    if (s.solved.indexOf(i) > -1) done(); else paint();
    box.querySelector('.ord-undo').addEventListener('click', function () { if (box.classList.contains('done')) return; var l = ans.pop(); if (l !== undefined) delete used[l]; paint(); });
    box.querySelector('.ord-check').addEventListener('click', function () {
      if (box.classList.contains('done')) return;
      var got = ans.map(function (a) { return pool[a]; }).join(' ');
      if (got === it.words.join(' ')) { if (s.solved.indexOf(i) < 0) s.solved.push(i); save(); done(); refreshMissions(); }
      else { fb.className = 'ch-fb no'; fb.textContent = ans.length ? '❌ الترتيب مش صح. ' + (it.miss || 'فكر: مين الفاعل وإيه الفعل؟') : 'اختار الكلمات الأول.'; }
    });
    host.appendChild(box);
  });
  progress[t.id] = function () { var n = s.solved.length; return { done: n === t.items.length, text: 'رتبت ' + n + ' من ' + t.items.length + ' جمل.' }; };
};

/* ---------- builder (structured prompt) ---------- */
R.builder = function (t, host) {
  var h = '<div class="calc-grid one">';
  t.fields.forEach(function (f) {
    h += '<label class="calc-f"><span>' + esc(f.label) + '</span><textarea rows="2" id="bf-' + t.id + '-' + f.id + '" placeholder="' + esc(f.ph) + '" aria-label="' + esc(f.label) + '"></textarea></label>';
  });
  h += '</div><div class="builder-score" id="bs-' + t.id + '"></div><div class="builder-out" id="bo-' + t.id + '">—</div>';
  host.innerHTML = h;
  function draw() {
    var v = {}, n = 0;
    t.fields.forEach(function (f) { v[f.id] = el('bf-' + t.id + '-' + f.id).value.trim(); if (v[f.id]) n++; });
    el('bs-' + t.id).textContent = 'اكتملت ' + n + ' من ' + t.fields.length + ' عناصر (ده فحص هيكل البرومبت، مش حكم على جودته).';
    el('bo-' + t.id).textContent = n ? t.assemble(v) : '—';
    if (n >= t.fields.length - 1) { T(t.id).used = 1; save(); }
  }
  t.fields.forEach(function (f) { el('bf-' + t.id + '-' + f.id).addEventListener('input', function () { draw(); refreshMissions(); }); });
  draw();
  progress[t.id] = function () { var u = !!T(t.id).used; return { done: u, text: u ? 'بنيت برومبت كامل العناصر.' : 'املا ' + (t.fields.length - 1) + ' عناصر على الأقل في بناء البرومبت.' }; };
};

/* ---------- render all ---------- */
var root = el('lab-root');
function renderAll() {
  root.innerHTML = '';
  progress = {};
  D.tools.forEach(function (t) {
    var box = document.createElement('div'); box.className = 'tool'; box.id = 'tool-' + t.id;
    box.innerHTML = '<h3>' + esc(t.title) + '</h3><p class="small">' + esc(t.desc) + '</p><div class="tbody"></div>';
    root.appendChild(box);
    R[t.kind](t, box.querySelector('.tbody'));
  });
}
function refreshMissions() {
  var panel = el('missions-panel');
  if (panel.hidden) return;
  var html = '';
  D.tools.forEach(function (t) {
    if (!t.mission) return;
    var p = progress[t.id](); 
    html += '<div class="mission' + (p.done ? ' done' : '') + '"><div class="m-title"><span class="m-check">' + (p.done ? '✓' : '') + '</span> ' + esc(t.mission) + '</div><p>' + esc(p.text) + '</p></div>';
  });
  panel.innerHTML = html;
}
renderAll();
el('missions-toggle').addEventListener('click', function () { var p = el('missions-panel'); p.hidden = !p.hidden; refreshMissions(); });
el('reset-lab').addEventListener('click', function () {
  if (!confirm('تصفّر المعمل كله؟ التحديات والألعاب هترجع من الأول.')) return;
  st = { t: {} }; save(); renderAll(); refreshMissions();
});
var n = 0;
D.tools.forEach(function (t) { if (t.items && (t.kind === 'challenges' || t.kind === 'cards' || t.kind === 'order')) n += t.items.length; else if (t.mission) n += 1; });
window.LAB_META = { challenges: n };
window.LAB_FOCUS = function () {};
})();
