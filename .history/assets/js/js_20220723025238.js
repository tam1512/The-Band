let slideIndex = 1;

//Show slide
function showSlide(n) {
  let i;

  //lấy 2 mảng chứa các phần tử tương thích với các slide
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  //xử lý giá trị truyền vào;
  if (n > slides.leght) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

showSlide(2);
