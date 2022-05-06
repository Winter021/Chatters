
// header('Access-Control-Allow-Origin: *');  
const io = require('socket.io')(8000) ;
const users = {};


io.on('connection' , socket => 
{   
   
    
    socket.on('new-user-joined' , name =>{
       
        console.log("New User : ",name)
        
        users[socket.id] = name ;
        socket.broadcast.emit('user-joined' , name ); 
    })

    socket.on('send' , message =>{
        socket.broadcast.emit('receive',{message , name : users[socket.id]}); 
    })
})
// A node server which will handle socket.io connections

// io.on object reading socket ,
// socket with event connection ; 

 //defining functions for socket

 // socket.on accepts the event user-joined and name as parameters

 // calling user joined event

 // receive - event , {...} -> object