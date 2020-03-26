document.addEventListener("mousemove", function (event) {
  
  const x = event.pageX
  const y = event.pageY
  
  const target = document.querySelector(".images_wrapper_madrona")
  const targetCoords = target.getBoundingClientRect()
  
  const targetX = targetCoords.left + (target.offsetWidth / 2)
  const targetY = targetCoords.top + (target.offsetHeight / 2)
  
  const angleX = (targetY - y) / 40
  const angleY = (targetX - x) / -40
  
  target.style.transform = "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)"
  
  
})

// for touch screens:
document.addEventListener("touchmove", function (event) {
  
  const x = event.touches[0].pageX
  const y = event.touches[0].pageY
  
  const target = document.querySelector(".images_wrapper_madrona")
  const targetCoords = target.getBoundingClientRect()
  
  const targetX = targetCoords.left + (target.offsetWidth / 2)
  const targetY = targetCoords.top + (target.offsetHeight / 2)
  
  const angleX = (targetY - y) / 25
  const angleY = (targetX - x) / -25
  
  target.style.transform = "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)"
})