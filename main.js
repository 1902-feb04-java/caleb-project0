'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const canvas1 = document.querySelector('canvas');
    console.log(canvas1)

    const debounce = (func) => {
        let timer
        return (event) => {
          if (timer) { clearTimeout(timer) }
          timer = setTimeout(func, 100, event)
        }
      }
      
      window.addEventListener('resize', debounce(() => {
        //canvas.width = window.innerWidth
        //canvas.height = window.innerHeight
      }));
    
      const c = canvas1.getContext('2d');
      for (let i = 0; i < 60; i++) {
        for (let j = 0; j < 60; j++) {
          c.fillStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
          c.fillRect(j * 20, i * 20, 10, 10);
        }
      }

});

window.addEventListener('DOMContentLoaded', () => {
    
});


