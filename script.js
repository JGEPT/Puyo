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
const James = document.querySelector(".wrapper.james");
const Aira = document.querySelector(".wrapper.aira");
const Summi = document.querySelector(".wrapper.summi");
const Spyke = document.querySelector(".wrapper.spyke");
const Steph = document.querySelector(".wrapper.steph");
const Edgiza = document.querySelector(".wrapper.edg");
const Raymond = document.querySelector(".wrapper.raymond");
const Andre = document.querySelector(".wrapper.andre");
const Kent = document.querySelector(".wrapper.kent");
const Desiree = document.querySelector(".wrapper.desiree");
const Hya = document.querySelector(".wrapper.hya");
const PassPrompt = document.querySelector(".passprompt");
const passform = document.getElementById("passform");
const MessageList = document.querySelector(".messagelist");
let music = document.getElementById("player");
let slider = document.getElementById("slider");
let number = document.getElementById("number");
let password;


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
  PassPrompt.classList.remove('active');
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
  PassPrompt.classList.remove('active');
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
    PassPrompt.classList.remove('active');
  })
})

let owner;

James.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "Surely";
  owner = "James";
})

Aira.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test1";
  owner = "Aira";
})

Summi.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test2";
  owner = "Summi";
})

Spyke.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test3";
  owner = "Spyke";
})

Steph.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Steph";
})

Edgiza.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Steph";
})

Raymond.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Raymond";
})

Andre.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Andre";
})

Kent.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Kent";
})

Desiree.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Desiree";
})

Hya.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Hya";
})

function submitForm(event){
  event.preventDefault();
  if(document.getElementById('password').value !== password){
       alert('Wrong Password');
       console.log('Wrong Password');
         return false
       }
  if(document.getElementById('password').value === password);{
         MessageList.classList.add("active");
       }
   }

passform.addEventListener('submit', submitForm);

const LetterData = document.querySelector(".datacol");
const readmessage = document.querySelector(".readmessage");

LetterData.addEventListener("click", () => {
  readmessage.classList.add('active');
})

const backbutton = document.querySelector(".back");

backbutton.addEventListener("click", () => {
  MessageList.classList.remove('active');
  PassPrompt.classList.remove('active');
})

const backmessagebutton = document.querySelector(".backmessage");

backmessagebutton.addEventListener("click", () => {
  readmessage.classList.remove('active');
})