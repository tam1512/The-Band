let currentSlide = 0;
let newIndex = 0;
let autoplay = true;
let length

let slideElements = document.getElementsByClassName("slider_slide");
let paginationElement = document.getElementsByClassName("slider_pagination")[0];
let prevElement = document.getElementsByClassName("prev")[0];
let nextElement = document.getElementsByClassName("next")[0];

prevElement.addEventListener(function () {
  newIndex--;
  navigateSlider();
});

nextElement.addEventListener(function () {
  newIndex++;
  navigateSlider();
});

function navigateSlider() {
   if (newIndex < 0) {
      newIndex = 
   }
}