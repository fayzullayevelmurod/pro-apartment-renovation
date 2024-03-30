
const menuBar = document.querySelector("#menu-bar"),
  headerNav = document.querySelector(".header-nav"),
  xMark = document.querySelector("#x-mark"),
  mobileClose = document.querySelector(".mobile-close"),
  contactBtn = document.querySelectorAll(".modalShouBtn"),
  modalPege = document.querySelector(".modal-pege"),
  body = document.querySelector("body");

contactBtn.forEach(e => {
  e.addEventListener('click', () => {
    modalPege.classList.add("z-index");
    body.style.overflow = 'hidden';
  })
})

mobileClose.addEventListener("click", () => {
  modalPege.classList.remove("z-index");
  body.style.overflow = 'auto';
}
)

xMark.classList.remove('x-close')


menuBar.addEventListener('click', () => {
  headerNav.classList.add('opacity');
  menuBar.classList.remove("fa-bars");
  xMark.classList.add("x-close");
  body.style.overflow = "hidden";
})


xMark.addEventListener('click', () => {
  headerNav.classList.remove('opacity');
  menuBar.classList.add("fa-bars");
  xMark.classList.remove("x-close");
  body.style.overflow = "auto";
})

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});


// Light galery
lightGallery(document.getElementById('lightgallery'));