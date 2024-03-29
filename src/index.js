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
const messageform = document.getElementById("messageform");
const backbutton = document.querySelector(".back");
let music = document.getElementById("player");
let slider = document.getElementById("slider");
let number = document.getElementById("number");
let password;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
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
const messagehyaref = collection(db, 'MessageHya');
const messagejamesref = collection(db, 'MessageJames');
const messageairaref = collection(db, 'MessageAira');
const messagesummiref = collection(db, 'MessageSummi');
const messagespykeref = collection(db, 'MessageSpyke');
const messagestephref = collection(db, 'MessageSteph');
const messageedgizaref = collection(db, 'MessageEdgiza');
const messageraymondref = collection(db, 'MessageRaymond');
const messageandreref = collection(db, 'MessageAndre');
const messagekentref = collection(db, 'MessageKent');
const messagedesireeref = collection(db, 'MessageDesiree');

function getCurrentDateAndTime() {
  const dateTime = new Date();
  return dateTime.toLocaleDateString();
}

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
  const SendDate = document.getElementById("Date");

  SendDate.value = getCurrentDateAndTime();
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

  getDocs(messagejamesref).then((snapshot) =>{
    let count = 0;
    const MessageData = snapshot.docs.map((doc) => {
      const data = doc.data();
      count++;
  
      return `<div class="datacol" value="${count}">
    <input type="hidden" name="idnum" id="idnum${count}" value="${doc.id}">
    <input type="hidden" name="reciever" id="reciever" value="${data.To}">
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
  password = "AirBlazing";
  owner = "Aira";

  getDocs(messageairaref).then((snapshot) =>{
    let count = 0;
  const MessageData = snapshot.docs.map((doc) => {
    const data = doc.data();
    count++;

    return `<div class="datacol" value="${count}">
  <input type="hidden" name="idnum" id="idnum${count}" value="${doc.id}">
  <input type="hidden" name="reciever" id="reciever" value="${data.To}">
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
  password = "Mayor Derama";
  owner = "Summi";

  getDocs(messagesummiref).then((snapshot) =>{
    let count = 0;
  const MessageData = snapshot.docs.map((doc) => {
    const data = doc.data();
    count++;

    return `<div class="datacol" value="${count}">
  <input type="hidden" name="idnum" id="idnum${count}" value="${doc.id}">
  <input type="hidden" name="reciever" id="reciever" value="${data.To}">
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
  password = "barking_boyfriendnipia";
  owner = "Spyke";

getDocs(messagespykeref).then((snapshot) =>{
  let count = 0;
  const MessageData = snapshot.docs.map((doc) => {
    const data = doc.data();
    count++;

    return `<div class="datacol" value="${count}">
  <input type="hidden" name="idnum" id="idnum${count}" value="${doc.id}">
  <input type="hidden" name="reciever" id="reciever" value="${data.To}">
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
  password = "StephenAlphonsusVillamon";
  owner = "Steph";

  getDocs(messagestephref).then((snapshot) =>{
    let count = 0;
  const MessageData = snapshot.docs.map((doc) => {
    const data = doc.data();
    count++;

    return `<div class="datacol" value="${count}">
  <input type="hidden" name="idnum" id="idnum${count}" value="${doc.id}">
  <input type="hidden" name="reciever" id="reciever" value="${data.To}">
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
  password = "ChineseBookLover69";
  owner = "Edg";

  getDocs(messageedgizaref).then((snapshot) =>{
    let count = 0;
  const MessageData = snapshot.docs.map((doc) => {
    const data = doc.data();
    count++;

    return `<div class="datacol" value="${count}">
  <input type="hidden" name="idnum" id="idnum${count}" value="${doc.id}">
  <input type="hidden" name="reciever" id="reciever" value="${data.To}">
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
  password = "StraightAlphaMale";
  owner = "Raymond";

  getDocs(messageraymondref).then((snapshot) =>{
    let count = 0;
  const MessageData = snapshot.docs.map((doc) => {
    const data = doc.data();
    count++;

    return `<div class="datacol" value="${count}">
  <input type="hidden" name="idnum" id="idnum${count}" value="${doc.id}">
  <input type="hidden" name="reciever" id="reciever" value="${data.To}">
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
  password = "Minor";
  owner = "Andre";

  getDocs(messageandreref).then((snapshot) =>{
    let count = 0;
  const MessageData = snapshot.docs.map((doc) => {
    const data = doc.data();
    count++;

    return `<div class="datacol" value="${count}">
  <input type="hidden" name="idnum" id="idnum${count}" value="${doc.id}">
  <input type="hidden" name="reciever" id="reciever" value="${data.To}">
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
  password = "Homophobic";
  owner = "Kent";

  getDocs(messagekentref).then((snapshot) =>{
    let count = 0;
  const MessageData = snapshot.docs.map((doc) => {
    const data = doc.data();
    count++;

    return `<div class="datacol" value="${count}">
  <input type="hidden" name="idnum" id="idnum${count}" value="${doc.id}">
  <input type="hidden" name="reciever" id="reciever" value="${data.To}">
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
  password = "ThumbsUp";
  owner = "Desiree";

  getDocs(messagedesireeref).then((snapshot) =>{
    let count = 0;
  const MessageData = snapshot.docs.map((doc) => {
    const data = doc.data();
    count++;

    return `<div class="datacol" value="${count}">
  <input type="hidden" name="idnum" id="idnum${count}" value="${doc.id}">
  <input type="hidden" name="reciever" id="reciever" value="${data.To}">
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
  password = "???????";
  owner = "Hya";

  getDocs(messagehyaref).then((snapshot) =>{
    let count = 0;
  const MessageData = snapshot.docs.map((doc) => {
    const data = doc.data();
    count++;

    return `<div class="datacol" value="${count}">
  <input type="hidden" name="idnum" id="idnum${count}" value="${doc.id}">
  <input type="hidden" name="reciever" id="reciever" value="${data.To}">
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
  if(document.getElementById('password').value === password){
         MessageList.classList.add("active");
         backbutton.addEventListener("click", () => {
          MessageList.classList.remove('active');
          PassPrompt.classList.remove('active');
        })
         document.querySelectorAll('.datacol').forEach((el) => el.addEventListener("click", () => {
         let index = el.getAttribute('value')
         const Reciever = document.getElementById("reciever");
         const SendTo = Reciever.value;
         const Id = document.getElementById(`idnum${index}`);
         const IdValue = Id.value;
         const docref = doc(db, `Message${SendTo}`, IdValue);
         console.log(IdValue);
         getDoc(docref).then((doc) => {
            const data = doc.data();
        
            readmessage.innerHTML = `<p class="To">To: ${data.To}</p>
            <div class="messagecontainer">
              <p class="messagedata"> ${data.message}</p>
            </div>
            <p class="From">From: ${data.From}</p>`;
          
        }).catch(err => {
          console.log(err.message);
        })
         readmessage.classList.add('active');
         }))
         }
       }

passform.addEventListener('submit', submitForm);

messageform.addEventListener('submit', (e) => {
  e.preventDefault();

  const PersonTo = document.getElementById("PersonTo");
  const Reciever = PersonTo.value;
  const SendDataTo = collection(db, `Message${Reciever}`);
  const formdata = new FormData(e.target);
  const data = Object.fromEntries(formdata.entries());
  addDoc(SendDataTo, data)
    .then(() => location.reload())
    .catch((err) => console.log(err.message));
  document.querySelector(".send").disabled = true;
})