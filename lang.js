// Picks EN/TR from ?lang=, the saved choice, or the browser language. Without JS both languages are shown.
(function () {
  var d = document.documentElement, q = /[?&]lang=(en|tr)/.exec(location.search), s = null;
  try { s = localStorage.getItem('lang'); } catch (e) {}
  var lang = (q && q[1]) || s || (/^tr/i.test(navigator.language || '') ? 'tr' : 'en');
  function set(l) {
    d.setAttribute('data-lang', l); d.lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    document.querySelectorAll('.langs button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.l === l)); });
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.langs button').forEach(function (b) { b.onclick = function () { set(b.dataset.l); }; });
    set(lang);
  });
})();
