/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

// desktop script
function myFunction() {
  var ftrContent = document.getElementById("ftrContent");
  ftrContent.classList.toggle("show");
  // to rotate the caret signs
  var rotate1 = document.getElementById("rotate1");
  rotate1.classList.toggle("turnover");

// Close the dropdown if the user clicks outside of it
document.addEventListener("click", function (e) {
  var ftrContent = document.querySelector(".ftr-content");
  var ftrLink = document.querySelector(".ftr");
  // for the caret sign
  var rotate1=document.querySelector("#rotate1");
  var rotate1Link=document.querySelector(".ftr");
  if (!ftrLink.contains(e.target) && !ftrContent.contains(e.target)) {
    ftrContent.classList.remove("show");
  }
  if (!rotate1Link.contains(e.target) && !rotate1.contains(e.target)) {
    rotate1.classList.remove("turnover");
  }
});

// Custom click event for mobile devices (adjust the breakpoint as needed)
if (window.matchMedia("(max-width: 750px)").matches) {
  varotate1Link = document.querySelector(".ftr");
  ftrLink.addEventListener("click", function (e) {
    e.preventDefault();
    toggleDropdown();
  });
}}

function mySecondFunction() {
  var cpnyContent = document.getElementById("cpnyContent");
  cpnyContent.classList.toggle("show");
  // to rotate the caret signs
  var rotate2 = document.getElementById("rotate2");
  rotate2.classList.toggle("turnover");

  // Close the dropdown if the user clicks outside of it
document.addEventListener("click", function (e) {
  var cpnyContent = document.querySelector(".cpny-content");
  var cpnyLink = document.querySelector(".cpny");

  // for the caret sign
  var rotate2=document.querySelector("#rotate2");
  var rotate2Link=document.querySelector(".cpny");
  if (!cpnyLink.contains(e.target) && !cpnyContent.contains(e.target)) {
    cpnyContent.classList.remove("show");
  }
  if (!rotate2Link.contains(e.target) && !rotate2.contains(e.target)) {
    rotate2.classList.remove("turnover");
  }
});

// Custom click event for mobile devices (adjust the breakpoint as needed)
if (window.matchMedia("(max-width: 750px)").matches) {
  var cpnyLink = document.querySelector(".cpny");
  cpnyLink.addEventListener("click", function (e) {
    e.preventDefault();
    toggleDropdown();
  });
}}

//   mobile script
function myMobileFunction() {
  const hamburger = document.querySelector(".nav-icon1");
  const hamburgerEx = document.querySelector(".nav-icon2");
  const listDiv = document.querySelector(".list-div");
  const overlay = document.querySelector(".overlay");

  function toggleNavBar() {
    listDiv.classList.toggle("active");
    overlay.classList.toggle("active");
    hamburger.style.display = listDiv.classList.contains("active")
      ? "none"
      : "block";
    hamburgerEx.style.display = listDiv.classList.contains("active")
      ? "block"
      : "none";
  }

  hamburger.addEventListener("click", toggleNavBar);
  hamburgerEx.addEventListener("click", toggleNavBar);
}
