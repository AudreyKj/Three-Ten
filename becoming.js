const ball = document.querySelector("div.ball")

let mouseX = 0
let mouseY = 0

let ballX = 0
let ballY = 0

let speed = 0.01

function animate() {
  let distX = mouseX - ballX
  let distY = mouseY - ballY

  ballX = ballX + (distX * speed)
  ballY = ballY + (distY * speed)

  ball.style.left = ballX + "px"
  ball.style.top = ballY + "px"

  requestAnimationFrame(animate)
}

animate()

document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX
  mouseY = event.pageY
})

//for touch devices
document.addEventListener("touchmove", function (event) {
  mouseX = event.pageX
  mouseY = event.pageY
})

//for touch devices
window.addEventListener('load', function(){

var ball2 = document.getElementsByClassName('ball'),
    boxleft, // left position of moving box
    startx, // starting x coordinate of touch point
    dist = 0, // distance traveled by touch point
    touchobj = null // Touch object holder

document.addEventListener('touchstart', function(e){
        touchobj = e.changedTouches[0] // reference first touch point
        boxleft = parseInt(ball2.style.left) // get left position of box
        startx = parseInt(touchobj.clientX) // get x coord of touch point
        e.preventDefault() // prevent default click behavior
    }, false)

    document.addEventListener('touchmove', function(e){
        touchobj = e.changedTouches[0] // reference first touch point for this event
        var dist = parseInt(touchobj.clientX) - startx // calculate dist traveled by touch point
     e.preventDefault()
    }, false)

}, false)


//LOADING

const pixelsScroll = document.querySelector('div.pixels')
const bodyTag = document.querySelector('body')
const progressBar = document.querySelector('div.progress_becoming310')

//when we scroll the page, make a progress bar that keeps track of the distance(1_TOP)
document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = pixels / totalScrollableDistance

  progressBar.style.width = `${100 * percentage}%`
})
