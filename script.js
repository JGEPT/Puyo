const LetterButton = document.querySelector(".open");
const prev = document.querySelector(".carousel-button.prev");
const next = document.querySelector(".carousel-button.next");
const PensButton = document.querySelector(".take");
const CloseButton1 = document.querySelector(".close1");
const CloseButton2 = document.querySelector(".close2");
const ReadDesc = document.querySelector(".ReadDesc");
const WriteDesc = document.querySelector(".WriteDesc");
const Help = document.querySelector(".help");
const Volume = document.querySelector(".volume");
const Container = document.querySelector(".container");
const Message = document.querySelector(".Message");
const Start = document.querySelector(".start");
const Current = document.querySelector("[data-slides]");
let music = document.getElementById("player");
let slider = document.getElementById("slider");
let number = document.getElementById("number");

LetterButton.addEventListener("click", () => {
    prev.classList.toggle('active');
    next.classList.toggle('active');
    LetterButton.classList.toggle('active');
    PensButton.classList.toggle('active');
    CloseButton1.classList.toggle('active');
    Help.classList.toggle('active');
    ReadDesc.classList.toggle('hide');
    WriteDesc.classList.toggle('hide');
    Current.children[0].dataset.active = true;
})

LetterButton.addEventListener("mouseover", () => {
  ReadDesc.classList.toggle('active');
})

LetterButton.addEventListener("mouseout", () => {
  ReadDesc.classList.toggle('active');
})

PensButton.addEventListener("mouseover", () => {
  WriteDesc.classList.toggle('active');
})

PensButton.addEventListener("mouseout", () => {
  WriteDesc.classList.toggle('active');
})

Help.addEventListener("click", () => {
  ReadDesc.classList.toggle('activer');
  WriteDesc.classList.toggle('activer');
})

Volume.addEventListener("click", () => {
  Container.classList.toggle('active');
})

CloseButton1.addEventListener("click", () => {
  prev.classList.toggle('active');
  next.classList.toggle('active');
  LetterButton.classList.toggle('active');
  PensButton.classList.toggle('active');
  CloseButton1.classList.toggle('active');
  Help.classList.toggle('active');
  ReadDesc.classList.toggle('hide');
  WriteDesc.classList.toggle('hide');
  const activeSlide = Current.querySelector("[data-active]");
  delete activeSlide.dataset.active;
})

PensButton.addEventListener("click", () => {
  LetterButton.classList.toggle('active');
  PensButton.classList.toggle('active');
  CloseButton2.classList.toggle('active');
  Help.classList.toggle('active');
  Message.classList.toggle('active');
  ReadDesc.classList.toggle('hide');
  WriteDesc.classList.toggle('hide');
})

CloseButton2.addEventListener("click", () => {
  LetterButton.classList.toggle('active');
  PensButton.classList.toggle('active');
  CloseButton2.classList.toggle('active');
  Help.classList.toggle('active');
  ReadDesc.classList.toggle('hide');
  WriteDesc.classList.toggle('hide');
  Message.classList.toggle('active');
})

Start.addEventListener("click", () => {
  Start.classList.toggle('hide');
})

slider.oninput = function(){
  number.innerHTML = slider.value;
  music.volume = (slider.value/100);
}

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })
})