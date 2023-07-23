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
const readmessage = document.querySelector(".readmessage");
const info = document.querySelector(".info");
let music = document.getElementById("player");
let slider = document.getElementById("slider");
let number = document.getElementById("number");
let password;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getFirestore,
  collection,
  getDocs
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5NpXn6fMDQzUjiTIBebUn_7r9hcaqpuY",
  authDomain: "puyo-cbb18.firebaseapp.com",
  projectId: "puyo-cbb18",
  storageBucket: "puyo-cbb18.appspot.com",
  messagingSenderId: "1016111692864",
  appId: "1:1016111692864:web:caf62e1b638c971a0eb3a5",
  measurementId: "G-HRKQ0C8GFL"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();


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
  MessageList.classList.remove("active");
  readmessage.classList.remove("active");
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
    PassPrompt.classList.remove('active');
  })
})

let owner;

James.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "Surely";
  owner = "James";

  const messagejamesref = collection(db, 'MessageJames')

  getDocs(messagejamesref).then((snapshot) =>{
    const MessageData = snapshot.docs.map((doc) => {
      const data = doc.data();
  
      return `<div class="datacol">
      <p class="sender">${data.From}</p>
      <p class="Date">${data.Date}</p>
    </div>`
    })
    info.innerHTML = MessageData.join("\n");
  }).catch(err => {
    console.log(err.message);
  })
  })

Aira.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test1";
  owner = "Aira";

  const messageairaref = collection(db, 'MessageAira')

  getDocs(messageairaref).then((snapshot) =>{
    const MessageData = snapshot.docs.map((doc) => {
      const data = doc.data();
  
      return `<div class="datacol">
      <p class="sender">${data.From}</p>
      <p class="Date">${data.Date}</p>
    </div>`
    })
    info.innerHTML = MessageData.join("\n");
  }).catch(err => {
    console.log(err.message);
  })
})

Summi.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test2";
  owner = "Summi";

  const messagesummiref = collection(db, 'MessageSummi')

  getDocs(messagesummiref).then((snapshot) =>{
    const MessageData = snapshot.docs.map((doc) => {
      const data = doc.data();
  
      return `<div class="datacol">
      <p class="sender">${data.From}</p>
      <p class="Date">${data.Date}</p>
    </div>`
    })
    info.innerHTML = MessageData.join("\n");
  }).catch(err => {
    console.log(err.message);
  })
})

Spyke.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test3";
  owner = "Spyke";
  const messagespykeref = collection(db, 'MessageSpyke')

getDocs(messagespykeref).then((snapshot) =>{
  const MessageData = snapshot.docs.map((doc) => {
    const data = doc.data();

    return `<div class="datacol">
    <p class="sender">${data.From}</p>
    <p class="Date">${data.Date}</p>
  </div>`
  })
  info.innerHTML = MessageData.join("\n");
}).catch(err => {
  console.log(err.message);
})
})

Steph.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Steph";

  const messagestephref = collection(db, 'MessageSteph')

  getDocs(messagestephref).then((snapshot) =>{
    const MessageData = snapshot.docs.map((doc) => {
      const data = doc.data();
  
      return `<div class="datacol">
      <p class="sender">${data.From}</p>
      <p class="Date">${data.Date}</p>
    </div>`
    })
    info.innerHTML = MessageData.join("\n");
  }).catch(err => {
    console.log(err.message);
  })
})

Edgiza.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Edg";

  const messageedgref = collection(db, 'MessageEdg')

  getDocs(messageedgref).then((snapshot) =>{
    const MessageData = snapshot.docs.map((doc) => {
      const data = doc.data();
  
      return `<div class="datacol">
      <p class="sender">${data.From}</p>
      <p class="Date">${data.Date}</p>
    </div>`
    })
    info.innerHTML = MessageData.join("\n");
  }).catch(err => {
    console.log(err.message);
  })
})

Raymond.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Raymond";

  const messageraymondref = collection(db, 'MessageRaymond')

  getDocs(messageraymondref).then((snapshot) =>{
    const MessageData = snapshot.docs.map((doc) => {
      const data = doc.data();
  
      return `<div class="datacol">
      <p class="sender">${data.From}</p>
      <p class="Date">${data.Date}</p>
    </div>`
    })
    info.innerHTML = MessageData.join("\n");
  }).catch(err => {
    console.log(err.message);
  })
})

Andre.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Andre";

  const messageandreref = collection(db, 'MessageAndre')

  getDocs(messageandreref).then((snapshot) =>{
    const MessageData = snapshot.docs.map((doc) => {
      const data = doc.data();
  
      return `<div class="datacol">
      <p class="sender">${data.From}</p>
      <p class="Date">${data.Date}</p>
    </div>`
    })
    info.innerHTML = MessageData.join("\n");
  }).catch(err => {
    console.log(err.message);
  })
})

Kent.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Kent";

  const messagekentref = collection(db, 'MessageKent')

  getDocs(messagekentref).then((snapshot) =>{
    const MessageData = snapshot.docs.map((doc) => {
      const data = doc.data();
  
      return `<div class="datacol">
      <p class="sender">${data.From}</p>
      <p class="Date">${data.Date}</p>
    </div>`
    })
    info.innerHTML = MessageData.join("\n");
  }).catch(err => {
    console.log(err.message);
  })
})

Desiree.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Desiree";

  const messagedesireeref = collection(db, 'MessageDesiree')

  getDocs(messagedesireeref).then((snapshot) =>{
    const MessageData = snapshot.docs.map((doc) => {
      const data = doc.data();
  
      return `<div class="datacol">
      <p class="sender">${data.From}</p>
      <p class="Date">${data.Date}</p>
    </div>`
    })
    info.innerHTML = MessageData.join("\n");
  }).catch(err => {
    console.log(err.message);
  })
})

Hya.addEventListener("click", () => {
  PassPrompt.classList.toggle('active');
  password = "test";
  owner = "Hya";

  const messagehyaref = collection(db, 'MessageHya')

  getDocs(messagehyaref).then((snapshot) =>{
    const MessageData = snapshot.docs.map((doc) => {
      const data = doc.data();
  
      return `<div class="datacol">
      <p class="sender">${data.From}</p>
      <p class="Date">${data.Date}</p>
    </div>`
    })
    info.innerHTML = MessageData.join("\n");
  }).catch(err => {
    console.log(err.message);
  })
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
         const LetterData = document.querySelector(".datacol");
         LetterData.addEventListener("click", () => {
          readmessage.classList.add('active');
         })
       }
   }

passform.addEventListener('submit', submitForm);

const backbutton = document.querySelector(".back");

backbutton.addEventListener("click", () => {
  MessageList.classList.remove('active');
  PassPrompt.classList.remove('active');
})

const backmessagebutton = document.querySelector(".backmessage");

backmessagebutton.addEventListener("click", () => {
  readmessage.classList.remove('active');
})