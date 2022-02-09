
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// disable right click on site


// document.getElementsByTagName("html")[0].setAttribute("oncontextmenu", "return false");

let darkbtn = document.querySelector("#darkbtn");
let backcolor = document.querySelector(".bgleft");
let backcolor1 = document.querySelector(".bgleft1");
let bgwhite = document.querySelector(".bg_white");
let mytime = new Date();
let doin = mytime.getHours();

if(doin >= 20){
  backcolor.classList.toggle("darkmode");
  backcolor1.classList.toggle("darkmode");
  bgwhite.classList.toggle("darkmode");
  darkbtn.textContent="Lite mode";
}else if(doin <= 20){
  backcolor.classList.remove("darkmode");
  backcolor1.classList.remove("darkmode");
  bgwhite.classList.remove("darkmode");

}

darkbtn.addEventListener("click" , () =>{
  backcolor.classList.toggle("darkmode");
  backcolor1.classList.toggle("darkmode");
  bgwhite.classList.toggle("darkmode");

  if(document.body.classList.toggle("darkmode")){
    darkbtn.textContent="Lite mode";
  
  }else{
    darkbtn.textContent="Dark mode";

  }

})






// for month
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  const d = new Date();
  let name = month[d.getMonth()];
  document.getElementById("month").innerHTML = name;
 