
const mobileBtn = document.querySelector(".mobile-btn"),
headerNav = document.querySelector(".header-nav");

mobileBtn.addEventListener('click', () => {
  headerNav.classList.toggle('opacity')
})