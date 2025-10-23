// Basic client-side language helper: sets a cookie/site.lang for client templates
(function(){
  const sel = document.getElementById('lang-switch');
  if(!sel) return;
  const lang = localStorage.getItem('site_lang') || sel.value;
  sel.value = lang;
})();
