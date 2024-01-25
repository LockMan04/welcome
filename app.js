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
contactElement.forEach((element, index) => { element.style.animation = `slipdown 0.5s ease ${index * 0.3}s forwards`; });

// Info
function changeToDay(num) {
  return Math.ceil(num / (1000 * 3600 * 24));
}
let today = new Date();
// let today = new Date(2024, 8, 25);
let birthday = new Date(2004, 6, 20);
let timeDiff = Math.abs(today.getTime() - birthday.getTime());
let daysDiff = changeToDay(timeDiff);
document.querySelectorAll('.counting p span')[0].textContent = daysDiff;
// 
let age = Math.floor(daysDiff / 365);
document.querySelectorAll('.counting p span')[1].textContent = age;
// 
let birthdaythisyear = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
if(birthdaythisyear.getTime() < today.getTime()) {
  birthdaythisyear = new Date(today.getFullYear() + 1, birthday.getMonth(), birthday.getDate());
} else {
  birthdaythisyear = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
}
let timeDiff2 = Math.abs((today.getTime() - birthdaythisyear.getTime()));
let daysDiff2 = changeToDay(timeDiff2);
document.querySelectorAll('.counting p span')[2].textContent = daysDiff2;

let startDou = new Date(2023, 4, 12);
let timeDiff3 = Math.abs(today.getTime() - startDou.getTime());
let daysDiff3 = changeToDay(timeDiff3);
document.querySelectorAll('.counting p span')[3].textContent = daysDiff3;

let startStudy = new Date(2022, 8, 29);
let timeDiff4 = Math.abs(today.getTime() - startStudy.getTime());
let daysDiff4 = changeToDay(timeDiff4) / 30;
document.querySelectorAll('.counting p span')[4].textContent = daysDiff4.toFixed(0);

let startPublic = new Date(2024, 0, 24);
let timeDiff5 = Math.abs(today.getTime() - startPublic.getTime());
let daysDiff5 = changeToDay(timeDiff5);
let hour5 = Math.floor(daysDiff5 * 24);
document.querySelectorAll('.counting p span')[5].textContent = daysDiff5;
document.querySelectorAll('.counting p span')[6].textContent = hour5;

// Get the current count from localStorage
let visitCount = localStorage.getItem('visitCount');

// If visitCount is null, this is the user's first visit
if (visitCount === null) {
  visitCount = 1;
} else {
  // If visitCount is not null, increment it
  visitCount = parseInt(visitCount) + 1;
}

// Store the new visitCount back into localStorage
localStorage.setItem('visitCount', visitCount);

// Now you can use visitCount in your code
document.querySelectorAll('.counting p span')[7].textContent = visitCount;