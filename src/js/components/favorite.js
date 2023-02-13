const btn = document.querySelectorAll('.product-item__favorite');
btn.forEach(function(item){
  item.addEventListener('click', function () {
    item.classList.toggle('product-item__favorite--active');
  })
})
