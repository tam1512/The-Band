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
// variable modal
let modal = document.getElementById("ticketModal");
let headerModalOut = document.getElementsByClassName("btn-ticket-out")[0];
let footerModalOut = document.getElementsByClassName("ticket-footer-close")[0];
let btnBuyTickets = document.getElementsByClassName("btn-buy-ticket");
// SLIDER
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

// Hàm hiện thị slide
function navigateSlider() {
  // Kiểm tra để newIndex luôn nằm trong khoảng từ 0 -> slideLength
  if (newIndex < 0) {
    newIndex = slidesLength - 1;
  } else if (newIndex > slidesLength - 1) {
    newIndex = 0;
  }

  //Thêm và xóa slider_pagination_btn--sel
  paginationElement.childNodes[currentIndex].classList.remove(
    "slider_pagination_btn--sel"
  );
  paginationElement.childNodes[newIndex].classList.add(
    "slider_pagination_btn--sel"
  );

  //reset interval(khoảng thời gian) để slide không gặp vấn đề về chuyển đổi
  if (autoplay) {
    Autoplay.reset();
  }

  //Ẩn slide trước và hiện slide cần hiện
  slideElements[currentIndex].style.display = "none";
  slideElements[newIndex].style.display = "block";

  currentIndex = newIndex;
}

// thiết lập autoplay cho slider
if (autoplay) {
  Autoplay.start();
}

// khi load page sẽ bị lỗi hiển thị ban đầu, đây là cách giải quyết
navigateSlider();

// END SLIDER

// MODAL

for (let i = 0; i < btnBuyTickets.length; i++) {
  btnBuyTickets[i].addEventListener("click", () => {
    openModal();
  });
}

headerModalOut.addEventListener("click", function () {
  outMoDal();
});
footerModalOut.addEventListener("click", function () {
  outMoDal();
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    outMoDal();
  }
});

function openModal() {
  modal.style.display = "block";
}

function outMoDal() {
  modal.style.display = "none";
}
