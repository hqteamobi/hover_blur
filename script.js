const body = document.documentElement
const box = document.querySelectorAll('.box')
const circle = document.querySelector('.circle')

body.addEventListener('mousemove', (e) => {
  box[1].style.clipPath = `circle(150px at ${e.clientX}px ${e.clientY}px)`
  circle.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
})
