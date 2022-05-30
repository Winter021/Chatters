const socket = io('http://localhost:8000', { transports : ['websocket'] });






const messageInput = document.getElementById('messageInp');

var audio = new Audio('Sounds/ting.mp3')

const messageContainer = document.querySelector(".container");

const append = (message , position)=>{

  // creating and configuring messageElement ;
  const messageElement = document.createElement('div');
  // console.log(position);
  messageElement.innerText = message ;
  messageElement.classList.add('message'); // add class = "message";
  messageElement.classList.add(position);
  // appending the newly created message element to messageContainer ; 
  messageContainer.append(messageElement);
  // console.log("New USER JOIN SUCCESS");
  
  if(position == 'left'){
  audio.play() ;
  }
  
}

const form = document.getElementById('send-container');
form.addEventListener('submit' ,(e)=>{
  e.preventDefault(); //page wont reload
  const message = messageInput.value ;
  console.log(message);
  append( `You : ${message}` , 'right');
  socket.emit('send' , message);
  messageInput.value = '';
})


const Name = prompt("Enter your name to join");
socket.emit('new-user-joined', Name);

console.log("USER JOIN SUCESS");

// listen to the events ;

socket.on('user-joined', Name =>{
  append(`${Name} joined the chat`,`right`);
})

socket.on('receive', data =>{
  append(`${data.name} : ${data.message} ` , `left`)// may be error
})

socket.on('leave', Name =>{
  append(`${Name} left the chat`,`left`);
})
















// predefined/standalone build exposed by the socekt.io ---> /socket.io/socket.io.js
// include this in html to use this

// CORS error resolved : 
//const socket = io('http://localhost:8000', { transports : ['websocket'] });