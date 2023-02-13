document.addEventListener('DOMContentLoaded',() =>{
  const dropdownBtn = document.querySelectorAll('.sorting__btn');
  dropdownBtn.forEach(el =>{
    el.addEventListener('click', (e) =>{
      let currentBtn = e.currentTarget;
      let drop = document.querySelector('.dropdown');
      currentBtn.classList.toggle('sorting__btn--active')
      drop.classList.toggle('dropdown--active')
    });
  });

});


