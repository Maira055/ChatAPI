
var bodyparser=require("body-parser"); 
var mongoose= require("mongoose"); 


var port= process.env.PORT || 4201;


var express= require("express");
var app= express() 
var user_routes= require('./routes/user')
var message_routes= require('./routes/message') 




var server= require("http").createServer(app)

var io= require('socket.io')(server);


io.on('connection', function(socket){
    console.log("Usuario conectado")
})


mongoose.connect('mongodb://localhost:27017/messengerdb', (err)=>{
    if (err) { 
        throw err;
    } else { 
        console.log("Conectados a la BD")
        app.listen(port, function(){ 
            console.log("Estamos trabajando en el puerto " + port)
        })
    }
});

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.use('/api', user_routes )
app.use('/api', message_routes)
module.exports=app;



