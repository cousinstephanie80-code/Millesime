
document.addEventListener('DOMContentLoaded', ()=>{
  const intro = document.getElementById('intro');
  const enigme = document.getElementById('enigme');
  const btnStart = document.getElementById('btnStart');

  btnStart.addEventListener('click', ()=>{
    intro.style.opacity = 0;
    setTimeout(()=> intro.classList.add('hidden'), 600);
    setTimeout(()=>{
      enigme.classList.remove('hidden');
      enigme.style.opacity = 1;
    }, 650);
  });
});
