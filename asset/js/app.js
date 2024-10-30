let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let navigation = document.querySelector(".navigation");
let overlay = document.querySelector(".overlay");

// Menu button click event
menuBtn.addEventListener("click", function () {
  navigation.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Close button click event
closeBtn.addEventListener("click", function () {
  navigation.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Overlay click event
overlay.addEventListener("click", function () {
  navigation.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Button
function goLink(link) {
  window.location.href = link;
}

const imgElement = document.querySelector(".container-img > img");
const circleElement1 = document.getElementById("circle1");
const circleElement2 = document.getElementById("circle2");

window.addEventListener("resize", function () {
  const hSize = imgElement.clientHeight - 20;
  const wSize = imgElement.clientWidth - 20;

  circleElement1.style.height = hSize + "px";
  circleElement1.style.width = wSize + "px";
  circleElement2.style.height = hSize - 50 + "px";
  circleElement2.style.width = wSize - 50 + "px";
});

// Gọi sự kiện resize lần đầu để cài đặt kích thước ban đầu
window.dispatchEvent(new Event("resize"));

// Animation for contact
const contactElement = document.querySelectorAll(".contact-area a");
contactElement.forEach((element, index) => {
  element.style.animation = `slipdown 0.5s ease ${index * 0.3}s forwards`;
});

// Extentions
const ghost = document.querySelector(".ghost");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX / 10;
  const posY = e.clientY / 10;

  ghost.style.left = posX + "px";
  ghost.style.top = posY + "px";

  console.log(posX, posY);

});

