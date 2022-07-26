let slideIndex = 1;

showSlide(slideIndex);

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

  //Đảm bảo tất cả các slide đều bị ẩn
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //Đảm bảo không có dot nào active
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //Chỉ Hiển thị slide và dot hiện hành
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Next/previous controls (set value 1 and -1 in html)
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Cotrol image with dot (set value 1 to slides.lenght in html)
function currentSlide(n) {
  showSlide((slideIndex = n));
}
