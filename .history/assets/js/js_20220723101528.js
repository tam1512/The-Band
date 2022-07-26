let currentIndex = 0;
let newIndex = 0;
let autoplay = true;

//tạo một object cho việc tự động chuyển slide
let Autoplay = {
  timerID: null,
  interval: 4000,

  start: function () {
    this.timerID = setInterval(function () {
      newIndex++;
      navigateSlider();
    }, this.interval);
  },

  reset: function () {
    clearInterval(this.timerID);
    this.start();
  },
};

let slideElements = document.getElementsByClassName("slider_slide");
let slidesLength = slideElements.length;
let paginationElement = document.getElementsByClassName("slider_pagination")[0];
let prevElement = document.getElementsByClassName("prev")[0];
let nextElement = document.getElementsByClassName("next")[0];

// lấy sự kiện click của 2 nut prev và next
prevElement.addEventListener("click", function () {
  newIndex--;
  navigateSlider();
});

nextElement.addEventListener("click", function () {
  newIndex++;
  navigateSlider();
});

// tạo số dot tương ứng với số slide
paginationHTML = [];
for (let i = 0; i < slidesLength; i++) {
  paginationHTML.push(
    `<span class="slider_pagination_btn" data-index="${i}"></span>`
  );
}
// Thêm paginationHTML vào bên trong thẻ HTML
paginationElement.innerHTML = paginationHTML.join("");

//kiểm tra xem đã có phần tử chứa class="slider_pagination_btn" chưa? nếu có lấy giá trị trong data-index của nó gán cho newIndex
paginationElement.addEventListener("click", function (e) {
  let target = e.target;
  if (target.classList.contains("slider_pagination_btn")) {
    newIndex = Number(target.getAttribute("data-index"));
    navigateSlider();
  }
});

function navigateSlider() {
  if (newIndex < 0) {
    newIndex = slidesLength - 1;
  } else if (newIndex > slidesLength - 1) {
    newIndex = 0;
  }

  paginationElement.childNodes[currentIndex].classList.remove(
    "slider_pagination_btn--sel"
  );
  paginationElement.childNodes[newIndex].classList.add(
    "slider_pagination_btn--sel"
  );

  if (autoplay) {
    Autoplay.reset();
  }

  slideElements[currentIndex].style.display = "none";
  slideElements[newIndex].style.display = "block";

  currentIndex = newIndex;
}

if (autoplay) {
  Autoplay.start();
}

navigateSlider();
