//require all pakages you install
const express = require('express');
// create my application has everything has inside 
//express framework
const app = express(); 


//app.use(express.static('public'));

// routes
// send the 
//root for express is the localhost
app.get('/',(request,response,next)=>{
  //response.send('<h1> Welcome Ironhacker <h1>')
  response.sendFile(__dirname + '/views/index.html');
})

// about page
app.get('/about',(request,response,next)=>{
    //response.send('<h1> Welcome Ironhacker <h1>')
    response.sendFile(__dirname + '/views/index.html');
  })
  
// gallery page
  app.get('/gallery',(request,response,next)=>{
    //response.send('<h1> Welcome Ironhacker <h1>')
    response.sendFile(__dirname + '/views/gallery.html');
  })

//run the server
app.listen(3000 , () => {
    //confirm that the server is running
    console.log ('My first app on the port 3000');
})
