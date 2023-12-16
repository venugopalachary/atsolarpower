const tb1 = document.getElementById("btn-1");
const tb2 = document.getElementById("btn-2");
const tb3 = document.getElementById("btn-3");
const tb4 = document.getElementById("btn-4");
const tb5 = document.getElementById("btn-5");
const tb6 = document.getElementById("btn-6");
const tb7 = document.getElementById("btn-7");
const tb8 = document.getElementById("btn-8");
const tb9 = document.getElementById("btn-9");

function toggleAttribute() {
  if (window.innerWidth <= 990) {
    tb1.setAttribute("data-bs-target", "#navbarNavAltMarkup");
    tb2.setAttribute("data-bs-target", "#navbarNavAltMarkup");
    tb3.setAttribute("data-bs-target", "#navbarNavAltMarkup");
    tb4.setAttribute("data-bs-target", "#navbarNavAltMarkup");
    tb5.setAttribute("data-bs-target", "#navbarNavAltMarkup");
    tb6.setAttribute("data-bs-target", "#navbarNavAltMarkup");
    tb7.setAttribute("data-bs-target", "#navbarNavAltMarkup");
    tb8.setAttribute("data-bs-target", "#navbarNavAltMarkup");
    tb9.setAttribute("data-bs-target", "#navbarNavAltMarkup");

    tb1.setAttribute("data-bs-toggle", "collapse");
    tb2.setAttribute("data-bs-toggle", "collapse");
    tb3.setAttribute("data-bs-toggle", "collapse");
    tb4.setAttribute("data-bs-toggle", "collapse");
    tb5.setAttribute("data-bs-toggle", "collapse");
    tb6.setAttribute("data-bs-toggle", "collapse");
    tb7.setAttribute("data-bs-toggle", "collapse");
    tb8.setAttribute("data-bs-toggle", "collapse");
    tb9.setAttribute("data-bs-toggle", "collapse");

  } else {
    tb1.removeAttribute("data-bs-target");
    tb2.removeAttribute("data-bs-target");
    tb3.removeAttribute("data-bs-target");
    tb4.removeAttribute("data-bs-target");
    tb5.removeAttribute("data-bs-target");
    tb6.removeAttribute("data-bs-target");
    tb7.removeAttribute("data-bs-target");
    tb8.removeAttribute("data-bs-target");
    tb9.removeAttribute("data-bs-target");
    
    tb1.removeAttribute("data-bs-toggle");
    tb2.removeAttribute("data-bs-toggle");
    tb3.removeAttribute("data-bs-toggle");
    tb4.removeAttribute("data-bs-toggle");
    tb5.removeAttribute("data-bs-toggle");
    tb6.removeAttribute("data-bs-toggle");
    tb7.removeAttribute("data-bs-toggle");
    tb8.removeAttribute("data-bs-toggle");
    tb9.removeAttribute("data-bs-toggle");
  }
}

// Initial check on page load
toggleAttribute();

// Event listener for window resize
window.addEventListener("resize", toggleAttribute);

let frame = document.getElementById("my_frame");
frame.addEventListener("scroll", changeBg());
var h = window.innerHeight;
console.log(h);
var temp1 = document.getElementById("sp1").offsetHeight;
let temp2 = document.getElementById("border").offsetHeight;
console.log(temp1, temp2);
let total_height = h - (temp1 + temp2);
console.log(total_height);
frame.style.height = total_height + "px";
function changeBg() {
  var navbar = document.getElementById("border");
  var scrollValue = frame.scrollY;
  console.log(scrollValue);
  if (scrollValue < 70) {
    navbar.classList.remove("bor");
  } else {
    navbar.classList.add("bor");
  }
}

function b1() {
  document.getElementById("btn-1").style.borderBottomColor = "#00a759";
  document.getElementById("btn-2").style.borderBottomColor = "transparent";
  document.getElementById("btn-3").style.borderBottomColor = "transparent";
  document.getElementById("btn-4").style.borderBottomColor = "transparent";
  document.getElementById("btn-5").style.borderBottomColor = "transparent";
  document.getElementById("btn-6").style.borderBottomColor = "transparent";
  document.getElementById("btn-7").style.borderBottomColor = "transparent";
  document.getElementById("btn-8").style.borderBottomColor = "transparent";
  document.getElementById("btn-9").style.borderBottomColor = "transparent";
  document.getElementById("my_frame").setAttribute('src','Home.html');
}
function b2() {
  document.getElementById("btn-1").style.borderBottomColor = "transparent";
  document.getElementById("btn-2").style.borderBottomColor = "#00a759";
  document.getElementById("btn-3").style.borderBottomColor = "transparent";
  document.getElementById("btn-4").style.borderBottomColor = "transparent";
  document.getElementById("btn-5").style.borderBottomColor = "transparent";
  document.getElementById("btn-6").style.borderBottomColor = "transparent";
  document.getElementById("btn-7").style.borderBottomColor = "transparent";
  document.getElementById("btn-8").style.borderBottomColor = "transparent";
  document.getElementById("btn-9").style.borderBottomColor = "transparent";
  document.getElementById("my_frame").setAttribute('src','Product.html');
}
function b3() {
  document.getElementById("btn-1").style.borderBottomColor = "transparent";
  document.getElementById("btn-2").style.borderBottomColor = "transparent";
  document.getElementById("btn-3").style.borderBottomColor = "#00a759";
  document.getElementById("btn-4").style.borderBottomColor = "transparent";
  document.getElementById("btn-5").style.borderBottomColor = "transparent";
  document.getElementById("btn-6").style.borderBottomColor = "transparent";
  document.getElementById("btn-7").style.borderBottomColor = "transparent";
  document.getElementById("btn-8").style.borderBottomColor = "transparent";
  document.getElementById("btn-9").style.borderBottomColor = "transparent";
  document.getElementById("my_frame").setAttribute('src','Distribution.html');
}
function b4() {
  document.getElementById("btn-1").style.borderBottomColor = "transparent";
  document.getElementById("btn-2").style.borderBottomColor = "transparent";
  document.getElementById("btn-3").style.borderBottomColor = "transparent";
  document.getElementById("btn-4").style.borderBottomColor = "#00a759";
  document.getElementById("btn-5").style.borderBottomColor = "transparent";
  document.getElementById("btn-6").style.borderBottomColor = "transparent";
  document.getElementById("btn-7").style.borderBottomColor = "transparent";
  document.getElementById("btn-8").style.borderBottomColor = "transparent";
  document.getElementById("btn-9").style.borderBottomColor = "transparent";
  document.getElementById("my_frame").setAttribute('src','Services_consultancy.html');
}
function b5() {
  document.getElementById("btn-1").style.borderBottomColor = "transparent";
  document.getElementById("btn-2").style.borderBottomColor = "transparent";
  document.getElementById("btn-3").style.borderBottomColor = "transparent";
  document.getElementById("btn-4").style.borderBottomColor = "transparent";
  document.getElementById("btn-5").style.borderBottomColor = "#00a759";
  document.getElementById("btn-6").style.borderBottomColor = "transparent";
  document.getElementById("btn-7").style.borderBottomColor = "transparent";
  document.getElementById("btn-8").style.borderBottomColor = "transparent";
  document.getElementById("btn-9").style.borderBottomColor = "transparent";
  document.getElementById("my_frame").setAttribute('src','Knowledge-center.html');
}
function b6() {
  document.getElementById("btn-1").style.borderBottomColor = "transparent";
  document.getElementById("btn-2").style.borderBottomColor = "transparent";
  document.getElementById("btn-3").style.borderBottomColor = "transparent";
  document.getElementById("btn-4").style.borderBottomColor = "transparent";
  document.getElementById("btn-5").style.borderBottomColor = "transparent";
  document.getElementById("btn-6").style.borderBottomColor = "#00a759";
  document.getElementById("btn-7").style.borderBottomColor = "transparent";
  document.getElementById("btn-8").style.borderBottomColor = "transparent";
  document.getElementById("btn-9").style.borderBottomColor = "transparent";
  document.getElementById("my_frame").setAttribute('src','Media.html');
}
function b7() {
  document.getElementById("btn-1").style.borderBottomColor = "transparent";
  document.getElementById("btn-2").style.borderBottomColor = "transparent";
  document.getElementById("btn-3").style.borderBottomColor = "transparent";
  document.getElementById("btn-4").style.borderBottomColor = "transparent";
  document.getElementById("btn-5").style.borderBottomColor = "transparent";
  document.getElementById("btn-6").style.borderBottomColor = "transparent";
  document.getElementById("btn-7").style.borderBottomColor = "#00a759";
  document.getElementById("btn-8").style.borderBottomColor = "transparent";
  document.getElementById("btn-9").style.borderBottomColor = "transparent";
  document.getElementById("my_frame").setAttribute('src','Carrers.html');
}
function b8() {
  document.getElementById("btn-1").style.borderBottomColor = "transparent";
  document.getElementById("btn-2").style.borderBottomColor = "transparent";
  document.getElementById("btn-3").style.borderBottomColor = "transparent";
  document.getElementById("btn-4").style.borderBottomColor = "transparent";
  document.getElementById("btn-5").style.borderBottomColor = "transparent";
  document.getElementById("btn-6").style.borderBottomColor = "transparent";
  document.getElementById("btn-7").style.borderBottomColor = "transparent";
  document.getElementById("btn-8").style.borderBottomColor = "#00a759";
  document.getElementById("btn-9").style.borderBottomColor = "transparent";
  document.getElementById("my_frame").setAttribute('src','Blogs.html');
}
function b9() {
  document.getElementById("btn-1").style.borderBottomColor = "transparent";
  document.getElementById("btn-2").style.borderBottomColor = "transparent";
  document.getElementById("btn-3").style.borderBottomColor = "transparent";
  document.getElementById("btn-4").style.borderBottomColor = "transparent";
  document.getElementById("btn-5").style.borderBottomColor = "transparent";
  document.getElementById("btn-6").style.borderBottomColor = "transparent";
  document.getElementById("btn-7").style.borderBottomColor = "transparent";
  document.getElementById("btn-8").style.borderBottomColor = "transparent";
  document.getElementById("btn-9").style.borderBottomColor = "#00a759";
  document.getElementById("my_frame").setAttribute('src','Contact_Us.html');
}
