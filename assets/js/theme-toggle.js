// Theme toggle: manual switch + persist to localStorage
(function(){
  const btn = document.getElementById('theme-toggle');
  if(!btn) return;
  const root = document.documentElement;
  const current = localStorage.getItem('theme');
  if(current === 'dark') root.classList.add('theme-dark');
  if(current === 'light') root.classList.add('theme-light');

  btn.addEventListener('click', function(){
    if(root.classList.contains('theme-dark')){
      root.classList.remove('theme-dark');
      root.classList.add('theme-light');
      localStorage.setItem('theme','light');
    } else {
      root.classList.remove('theme-light');
      root.classList.add('theme-dark');
      localStorage.setItem('theme','dark');
    }
  });
})();
