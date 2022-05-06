const socket = io('http://localhost:8000', { transports : ['websocket'] });


const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');

const messageContainer = document.querySelector(".container");

const append = (message , position)=>{

  // creating and configuring messageElement ;
  const messageElement = document.createElement('div');
  // console.log(position);
  messageElement.innerText = message ;
  messageElement.classList.add('message');
  messageElement.classList.add(position);
  // appending the newly created message element to messageContainer ; 
  messageContainer.append(messageElement);
  console.log("New USER JOIN SUCCESS");
  
  
}



const Name = prompt("Enter your name to join");
socket.emit('new-user-joined', Name);

socket.on('user-joined', Name =>{
  append(`${Name} joined the chat`,`right`);
})
















// predefined/standalone build exposed by the socekt.io ---> /socket.io/socket.io.js
// include this in html to use this

// CORS error resolved : 
//const socket = io('http://localhost:8000', { transports : ['websocket'] });