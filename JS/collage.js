//images
const images = [
  "majla_image1_resized.png",
  "majla_image2_resized.jpg",
  "majla_image3_resized.png",
  "majla_image4_resized.png",
  "majla_image5_resized.jpg",
  "majla_image6_resized-2.jpg",
  "majla_image7_resized.jpg",
  "majla_image8_resized.png",
  "majla_image9_resized.png",
  "majla_image10_resized.jpg",
  "majla_image11_resized.jpg",
  "majla_image12_resized.png",
  "majla_image13_resized.png",
  "image14_majla.png",
  "image13_majla.png",
  "image16_majla.png",
  "majla_image17_resized.jpg",
  "majla_image18_resized.png"
];

//keep track of image
let i = 0;

function placeImage(x, y) {
  const nextSrc = images[i];

  const img = document.createElement("img");
  img.setAttribute("src", nextSrc);
  img.setAttribute("draggable", "false");

  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform =
    "translate(-50%, -50%) scale(0.5) rotate(" +
    (Math.random() * 20 - 10) +
    "deg)";

  document.querySelector("section.collage310").appendChild(img);

  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
}

document
  .querySelector("section.collage310")
  .addEventListener("click", function(event) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
  });

document.addEventListener("touched", function(event) {
  event.preventDefault();
  placeImage(event.pageX, event.pageY);
});
