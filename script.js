const LetterButton = document.querySelector(".open");
const wrapper = document.querySelector(".wrapper");
const lid_one = document.querySelector(".lid.one");
const lid_two = document.querySelector(".lid.two");
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");
const prev = document.querySelector(".carousel-button.prev");
const next = document.querySelector(".carousel-button.next");
const James = document.querySelector(".bgletter")
const PensButton = document.querySelector(".take");
const CloseButton = document.querySelector(".close");

LetterButton.addEventListener("click", () => {
    wrapper.classList.toggle('active');
    envelope.classList.toggle('active');
    letter.classList.toggle('active');
    lid_two.classList.toggle('active');
    lid_one.classList.toggle('active');
    prev.classList.toggle('active');
    next.classList.toggle('active');
    James.classList.toggle('active');
    LetterButton.classList.toggle('active');
    PensButton.classList.toggle('active');
    CloseButton.classList.toggle('active');
})

CloseButton.addEventListener("click", () => {
  wrapper.classList.toggle('active');
  envelope.classList.toggle('active');
  letter.classList.toggle('active');
  lid_two.classList.toggle('active');
  lid_one.classList.toggle('active');
  prev.classList.toggle('active');
  next.classList.toggle('active');
  James.classList.toggle('active');
  LetterButton.classList.toggle('active');
  PensButton.classList.toggle('active');
  CloseButton.classList.toggle('active');
})

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
