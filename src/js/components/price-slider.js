const slider = document.getElementById('slider');
if(slider){
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });
}

console.log(slider)

