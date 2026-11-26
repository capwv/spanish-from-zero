/* Per-level completion certificates (A1-C2) for the language academies.
   Draws in the browser with the same design as the shared cert.js. */
(function () {
  if (window.__iuaLevelCert) return; window.__iuaLevelCert = 1;
  var slug = 'spanish-from-zero', courseBase = 'Spanish From Zero';
  var site = 'https://capwv.github.io/' + slug + '/';
  var LOGO = 'https://capwv.github.io/SAMS-Hub/assets/logo.webp';
  var KN = 'iua-cert-name';
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function el(t, a, h) { var e = document.createElement(t); for (var k in a || {}) e.setAttribute(k, a[k]); if (h != null) e.innerHTML = h; return e; }
  var css = el('style', {},
    '#lvl-fab{position:fixed;inset-inline-start:18px;bottom:76px;z-index:9998;display:none;align-items:center;gap:8px;padding:12px 18px;border:1px solid #34d399;border-radius:14px;background:linear-gradient(135deg,#059669,#10b981);color:#fff;font:700 15px Cairo,sans-serif;cursor:pointer;box-shadow:0 8px 30px rgba(16,185,129,.45)}' +
    '#lvl-ov{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;background:rgba(2,4,10,.82);padding:14px;overflow:auto}' +
    '#lvl-box{width:min(920px,100%);max-height:100%;overflow:auto;background:#0f1420;border:1px solid #2a3552;border-radius:18px;padding:18px;color:#e8ecf5;font-family:Cairo,sans-serif;direction:rtl}' +
    '#lvl-box h3{font-size:1.2rem;margin-bottom:10px}#lvl-box input{width:100%;padding:12px 14px;border-radius:10px;border:1px solid #2a3552;background:#0a0e18;color:#fff;font:600 16px Cairo,sans-serif;margin:6px 0 12px}' +
    '#lvl-cv{width:100%;height:auto;border-radius:12px;border:1px solid #2a3552;display:block;margin-bottom:12px}' +
    '.lvl-row{display:flex;flex-wrap:wrap;gap:10px}.lvl-b{padding:10px 16px;border-radius:10px;border:1px solid #334968;background:#17253d;color:#cbd5e1;font:700 14px Cairo,sans-serif;cursor:pointer;text-decoration:none}' +
    '.lvl-b.p{background:linear-gradient(135deg,#2563eb,#7c5cff);border-color:#60a5fa;color:#fff}.lvl-hint{color:#9aa7c2;font-size:.85rem;margin:8px 0}');
  document.head.appendChild(css);
  var fab = el('button', { id: 'lvl-fab', type: 'button' }, '🎓 شهادة المستوى جاهزة');
  var ov = el('div', { id: 'lvl-ov', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Level certificate' });
  ov.innerHTML = '<div id="lvl-box"><h3 id="lvl-title">🎓 مبروك! خلصت المستوى</h3>' +
    '<label for="lvl-name">اكتب اسمك زي ما تحب يظهر على الشهادة</label><input id="lvl-name" maxlength="40" autocomplete="name" placeholder="Your name / اسمك">' +
    '<canvas id="lvl-cv" width="1600" height="1131"></canvas>' +
    '<div class="lvl-row"><button class="lvl-b p" id="lvl-pdf" type="button">تنزيل PDF</button><button class="lvl-b" id="lvl-png" type="button">تنزيل صورة PNG</button>' +
    '<a class="lvl-b" id="lvl-li" target="_blank" rel="noopener">أضفها على LinkedIn</a><a class="lvl-b" id="lvl-sh" target="_blank" rel="noopener">شارك بوست على LinkedIn</a><button class="lvl-b" id="lvl-x" type="button">إغلاق</button></div>' +
    '<p class="lvl-hint">الشهادة بتتعمل جوه المتصفح بتاعك واسمك مش بيتبعت لأي سيرفر.</p></div>';
  var cur = null; /* current level id */
  function KD() { return 'iua-cert-done-' + slug + '-' + cur.toLowerCase(); }
  function course() { return courseBase + ' - Level ' + cur; }
  var logo = new Image(); logo.crossOrigin = 'anonymous'; logo.onload = function () { if (ov.style.display === 'flex') render(); }; logo.src = LOGO;
  function rnd(seed) { var s = seed; return function () { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; }; }
  function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0); }
  function certId(name, date) { var s2 = slug + '-' + cur.toLowerCase(); var a = hash(s2 + '|' + name + '|' + date).toString(36).toUpperCase().padStart(7, '0').slice(-7); var b = hash(date + name + s2).toString(36).toUpperCase().padStart(4, '0').slice(-4); var p = slug.replace('-from-zero', '').replace(/[^a-z]/g, '').slice(0, 3).toUpperCase(); return 'IUA-' + p + cur + '-' + a + b; }
  function dateStr() { var d = get(KD()); if (!d) { var n = new Date(), z = function (x) { return (x < 10 ? '0' : '') + x; }; d = n.getFullYear() + '-' + z(n.getMonth() + 1) + '-' + z(n.getDate()); set(KD(), d); } return d; }
  function pretty(d) { var m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], p = d.split('-'); return +p[2] + ' ' + m[+p[1] - 1] + ' ' + p[0]; }
  function glow(c, x, y, r, col) { var g = c.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.fillRect(0, 0, 1600, 1131); }
  function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  function draw(name) {
    var cv = document.getElementById('lvl-cv'), c = cv.getContext('2d'), W = 1600, H = 1131; name = (name || '').trim() || 'Your Name';
    c.direction = 'ltr'; c.clearRect(0, 0, W, H); c.fillStyle = '#04060d'; c.fillRect(0, 0, W, H);
    glow(c, 800, -60, 1000, 'rgba(59,130,246,.38)'); glow(c, 1440, 110, 640, 'rgba(139,92,246,.22)'); glow(c, 100, 320, 640, 'rgba(56,189,248,.16)'); glow(c, 800, 1200, 800, 'rgba(59,130,246,.2)');
    var g = c.createLinearGradient(34, 34, W - 34, H - 34); g.addColorStop(0, '#60a5fa'); g.addColorStop(.35, '#1e2a47'); g.addColorStop(.65, '#1e2a47'); g.addColorStop(1, '#8b5cf6');
    rr(c, 34, 34, W - 68, H - 68, 26); c.fillStyle = g; c.fill(); rr(c, 37, 37, W - 74, H - 74, 23); c.fillStyle = '#090d18'; c.fill();
    var r = rnd(7), p = [], i, j; for (i = 0; i < 95; i++) p.push([r() * W, r() * H, .8 + r() * 1.4]);
    c.lineWidth = 1; for (i = 0; i < p.length; i++) for (j = i + 1; j < p.length; j++) { var d = Math.hypot(p[i][0] - p[j][0], p[i][1] - p[j][1]); if (d < 150) { c.strokeStyle = 'rgba(96,165,250,' + (.28 * (1 - d / 150)).toFixed(2) + ')'; c.beginPath(); c.moveTo(p[i][0], p[i][1]); c.lineTo(p[j][0], p[j][1]); c.stroke(); } }
    c.fillStyle = 'rgba(147,197,253,.75)'; p.forEach(function (q) { c.beginPath(); c.arc(q[0], q[1], q[2], 0, 7); c.fill(); });
    c.strokeStyle = 'rgba(147,197,253,.3)'; c.lineWidth = 1; rr(c, 58, 58, W - 116, H - 116, 16); c.stroke();
    c.strokeStyle = '#7dd3fc'; c.lineWidth = 3; var L = 70; [[58, 58, 1, 1], [W - 58, 58, -1, 1], [58, H - 58, 1, -1], [W - 58, H - 58, -1, -1]].forEach(function (k) { c.beginPath(); c.moveTo(k[0] + k[2] * L, k[1]); c.lineTo(k[0], k[1]); c.lineTo(k[0], k[1] + k[3] * L); c.stroke(); });
    c.textAlign = 'center'; c.textBaseline = 'alphabetic';
    if (logo.complete && logo.naturalWidth) { var lh = 120, lw = logo.naturalWidth * lh / logo.naturalHeight; c.drawImage(logo, W / 2 - lw / 2, 84, lw, lh); }
    c.fillStyle = '#93c5fd'; c.font = '700 19px Cairo,sans-serif'; if ('letterSpacing' in c) c.letterSpacing = '7px'; c.fillText('INFINITY UNIVERSITY ACTIVITY', W / 2 + 3, 240);
    var tg = c.createLinearGradient(520, 0, 1080, 0); tg.addColorStop(0, '#7dd3fc'); tg.addColorStop(.5, '#60a5fa'); tg.addColorStop(1, '#a78bfa');
    c.fillStyle = tg; c.font = '800 84px Cairo,sans-serif'; if ('letterSpacing' in c) c.letterSpacing = '8px'; c.fillText('CERTIFICATE', W / 2 + 4, 345);
    if ('letterSpacing' in c) c.letterSpacing = '2px'; c.fillStyle = '#cbd5e1'; c.font = '600 25px Cairo,sans-serif'; c.fillText('OF COMPLETION  •  شهادة إتمام مستوى', W / 2, 395);
    if ('letterSpacing' in c) c.letterSpacing = '0px';
    c.fillStyle = '#94a3b8'; c.font = '400 22px Cairo,sans-serif'; c.fillText('This certifies that', W / 2, 465);
    var fs = 80; c.font = '700 ' + fs + 'px Cairo,sans-serif'; while (c.measureText(name).width > 1000 && fs > 34) { fs -= 4; c.font = '700 ' + fs + 'px Cairo,sans-serif'; }
    c.shadowColor = 'rgba(96,165,250,.55)'; c.shadowBlur = 40; c.fillStyle = '#fff'; c.fillText(name, W / 2, 575); c.shadowBlur = 0;
    var lg = c.createLinearGradient(360, 0, 1240, 0); lg.addColorStop(0, 'rgba(96,165,250,0)'); lg.addColorStop(.3, '#60a5fa'); lg.addColorStop(.7, '#a78bfa'); lg.addColorStop(1, 'rgba(167,139,250,0)'); c.fillStyle = lg; c.fillRect(360, 606, 880, 2);
    c.fillStyle = '#94a3b8'; c.font = '400 24px Cairo,sans-serif'; c.fillText('has successfully completed 100% of level', W / 2, 660);
    var cf = 50; c.font = '700 ' + cf + 'px Cairo,sans-serif'; while (c.measureText(course()).width > 1100 && cf > 30) { cf -= 3; c.font = '700 ' + cf + 'px Cairo,sans-serif'; }
    c.fillStyle = '#7dd3fc'; c.fillText(course(), W / 2, 725);
    c.fillStyle = '#e2e8f0'; c.font = '400 28px Cairo,sans-serif'; c.direction = 'rtl'; c.fillText('أتمّ بنجاح جميع دروس وتمارين المستوى ' + cur + ' بنسبة ١٠٠٪', W / 2, 785); c.direction = 'ltr';
    c.save(); c.shadowColor = 'rgba(96,165,250,.55)'; c.shadowBlur = 50; c.beginPath(); c.arc(235, 856, 85, 0, 7); c.fillStyle = '#10172a'; c.fill(); c.restore();
    c.strokeStyle = '#60a5fa'; c.lineWidth = 3; c.beginPath(); c.arc(235, 856, 85, 0, 7); c.stroke(); c.strokeStyle = 'rgba(125,211,252,.5)'; c.lineWidth = 1; c.beginPath(); c.arc(235, 856, 74, 0, 7); c.stroke();
    c.fillStyle = '#34d399'; c.font = '700 46px Cairo,sans-serif'; c.fillText(cur, 235, 862); c.fillStyle = '#93c5fd'; c.font = '400 13px Cairo,sans-serif'; if ('letterSpacing' in c) c.letterSpacing = '3px'; c.fillText('COMPLETE', 237, 888);
    c.fillStyle = '#93c5fd'; c.font = '400 16px Cairo,sans-serif'; if ('letterSpacing' in c) c.letterSpacing = '2px'; c.fillText(site.replace('https://', ''), W / 2, 985); if ('letterSpacing' in c) c.letterSpacing = '0px';
    var d = dateStr(); c.textAlign = 'right'; c.fillStyle = '#94a3b8'; c.font = '400 17px Cairo,sans-serif'; c.fillText('Date of completion', W - 150, 933); c.fillStyle = '#e8ecf5'; c.font = '700 20px Cairo,sans-serif'; c.fillText(pretty(d), W - 150, 964);
    c.fillStyle = '#94a3b8'; c.font = '400 17px Cairo,sans-serif'; c.fillText('Certificate ID', W - 150, 998); c.fillStyle = '#e8ecf5'; c.font = '700 20px Cairo,sans-serif'; c.fillText(certId(name, d), W - 150, 1029); c.textAlign = 'center';
  }
  function links(name) {
    var d = dateStr().split('-'), id = certId(name, dateStr());
    document.getElementById('lvl-li').href = 'https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=' + encodeURIComponent(course() + ' - Certificate of Completion') + '&organizationName=' + encodeURIComponent('Infinity University Activity') + '&issueYear=' + d[0] + '&issueMonth=' + (+d[1]) + '&certUrl=' + encodeURIComponent(site) + '&certId=' + encodeURIComponent(id);
    document.getElementById('lvl-sh').href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(site);
  }
  function fname(ext) { var n = (document.getElementById('lvl-name').value || 'certificate').trim().replace(/[^\w؀-ۿ]+/g, '-'); return 'IUA-' + slug + '-' + cur.toLowerCase() + '-' + n + '.' + ext; }
  function dl(blob, name) { var a = el('a', { href: URL.createObjectURL(blob), download: name }); document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500); }
  function pdf() {
    var cv = document.getElementById('lvl-cv'), b64 = cv.toDataURL('image/jpeg', .92).split(',')[1], bin = atob(b64), jpg = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) jpg[i] = bin.charCodeAt(i);
    var PW = 842, PH = 595, enc = function (s) { var u = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u; }, parts = [], off = [], len = 0;
    function add(u) { parts.push(u); len += u.length; }
    add(enc('%PDF-1.4\n'));
    function obj(n, body, stream) { off[n] = len; add(enc(n + ' 0 obj\n' + body)); if (stream) { add(stream); add(enc('\nendstream')); } add(enc('\nendobj\n')); }
    obj(1, '<< /Type /Catalog /Pages 2 0 R >>'); obj(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
    obj(3, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + PW + ' ' + PH + '] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>');
    obj(4, '<< /Type /XObject /Subtype /Image /Width 1600 /Height 1131 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + jpg.length + ' >>\nstream\n', jpg);
    var cs = 'q ' + PW + ' 0 0 ' + PH + ' 0 0 cm /Im0 Do Q'; obj(5, '<< /Length ' + cs.length + ' >>\nstream\n' + cs + '\nendstream');
    var x = len; var t = 'xref\n0 6\n0000000000 65535 f \n'; for (var n = 1; n <= 5; n++) t += ('0000000000' + off[n]).slice(-10) + ' 00000 n \n';
    add(enc(t + 'trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n' + x + '\n%%EOF'));
    var out = new Uint8Array(len), p = 0; parts.forEach(function (u) { out.set(u, p); p += u.length; }); dl(new Blob([out], { type: 'application/pdf' }), fname('pdf'));
  }
  function render() { var n = document.getElementById('lvl-name').value; document.getElementById('lvl-name').style.borderColor = ''; set(KN, n); draw(n); links(n.trim() || 'Your Name'); }
  function shut() { ov.style.display = 'none'; document.documentElement.style.overflow = ''; }
  function accountName() { try { var a = JSON.parse(get('iua-acct') || 'null'), u = a && a.user; return u ? String(u.name || u.username || '').trim() : ''; } catch (e) { return ''; } }
  function open(level) {
    cur = level;
    document.getElementById('lvl-title').textContent = '🎓 مبروك! خلصت المستوى ' + level + ' كامل';
    ov.style.display = 'flex'; document.documentElement.style.overflow = 'hidden';
    var i = document.getElementById('lvl-name'); i.value = accountName() || get(KN) || '';
    var go = function () { render(); };
    (document.fonts && document.fonts.load ? Promise.all([document.fonts.load('700 80px Cairo'), document.fonts.load('400 24px Cairo'), document.fonts.load('800 84px Cairo')]).then(go, go) : go()); if (!i.value) i.focus();
  }
  function need() { var i = document.getElementById('lvl-name'); if (i.value.trim()) return true; i.style.borderColor = '#f87171'; i.focus(); return false; }
  function bind() {
    document.getElementById('lvl-x').onclick = shut; document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ov.style.display === 'flex') shut(); });
    ov.addEventListener('click', function (e) { if (e.target === ov) shut(); });
    document.getElementById('lvl-name').addEventListener('input', render);
    document.getElementById('lvl-png').onclick = function () { if (!need()) return; document.getElementById('lvl-cv').toBlob(function (b) { dl(b, fname('png')); }, 'image/png'); };
    document.getElementById('lvl-pdf').onclick = function () { if (need()) pdf(); };
    fab.onclick = function () { if (cur) open(cur); };
  }
  /* floating button: shows the most recent fully-completed level */
  function check() {
    var st = window.IUA_LEVELS_STATE; if (!st) return;
    var best = null;
    st.levels.forEach(function (lv) { var p = st.progress(lv); if (p.total > 0 && p.done === p.total) best = lv; });
    if (best) { cur = best; fab.textContent = '🎓 شهادة المستوى ' + best + ' جاهزة'; fab.style.display = 'flex'; }
    else fab.style.display = 'none';
  }
  function mount() {
    document.body.appendChild(fab); document.body.appendChild(ov); bind(); check();
    document.addEventListener('iua:progress', check);
  }
  window.IUA_LEVEL_CERT = { open: open };
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
