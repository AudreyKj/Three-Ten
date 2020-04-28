//Modals
const popup1 = document.getElementById("modal");
const popup2 = document.getElementById("modal2");

const button1 = document.getElementsByClassName("close")[0];
const button2 = document.getElementsByClassName("close2")[0];

//closing modals
button1.onclick = function() {
  popup1.style.display = "none";
};

button2.onclick = function() {
  popup2.style.display = "none";
};

//display pop up 1 and 2
function displayPopUp2() {
  popup2.style.display = "inline-block";
}

function displayPopUp1() {
  popup1.style.display = "inline-block";
}

const intervalID2 = window.setTimeout(displayPopUp2, 1500);
const intervalID = window.setTimeout(displayPopUp1, 5000);
