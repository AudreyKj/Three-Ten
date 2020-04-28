//MODAL
var modal = document.getElementById("modalgame");
var span = document.getElementsByClassName("close")[0];

//CLOSE MODAL
span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

modal.onclick = function() {
  modal.style.display = "none";
}

//loading
$(window).on("load", function() {
  $(".loading_wrapper").fadeOut("slow");
});

//srcoll
const pixelsScroll = document.querySelector('div.pixels')
const bodyTag = document.querySelector('body')
const sections = document.querySelectorAll('section')
const clientTag = document.querySelector('div.person')
const pageTag = document.querySelector('div.page')
const header = document.querySelector('header')


document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset
  pixelsScroll.innerHTML = pixels;
})


document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset

  sections.forEach(section => {
    if (section.offsetTop - 100 <= pixels) {
      clientTag.innerHTML = section.getAttribute('data-person')
      pageTag.innerHTML = section.getAttribute('data-page')
    }
  })
})
