var left = document.getElementById('left')
var right = document.getElementById('right')

left.style.top = '50%'
right.style.top = '50%'

window.addEventListener('mousemove', (event) => {
 var pos = event;
 document.getElementById('show').textContent = `The mouse is at (${Math.round((pos.clientX / Math.round(window.innerWidth / 2)) * 100) - 100}%, ${Math.round((pos.clientY / Math.round(window.innerHeight / 2)) * 100) - 100}%)`
 //
 left.style.left = (pos.clientX < Math.round(window.innerWidth / 9) || pos.clientX > Math.round(window.innerWidth * 0.85)) ? left.style.left: `${(Math.round((pos.clientX / Math.round(window.innerWidth / 2)) * 80) / 2.15)}%`
 //
 right.style.left = (pos.clientX < Math.round(window.innerWidth / 9) || pos.clientX > Math.round(window.innerWidth * 0.85)) ? right.style.left: `${(Math.round((pos.clientX / Math.round(window.innerWidth / 2)) * 80) / 2.15)}%`
 
 if(pos.clientY < Math.round(window.innerHeight / 4.5)){
        left.style.top =  left.style.top
        right.style.top =  right.style.top
    }else if(pos.clientY > Math.round(window.innerHeight * 0.8)){
        left.style.top =  left.style.top
        right.style.top =  right.style.top
    }else{
        //left.style.top = `${(pos.clientY / 5.8) * 0.80}%`  
        left.style.top = `${(Math.round((pos.clientY / Math.round(window.innerHeight / 2)) * 95) / 2)}%` 
        right.style.top = `${(Math.round((pos.clientY / Math.round(window.innerHeight / 2)) * 95) / 2)}%` 
    }
})