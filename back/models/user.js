var mongoose= require('mongoose'); 
var Schema= mongoose.Schema; 

var userSchema= Schema({
    nombre: String,
    email: String,
    password: String,
    imagen: String,
    telefono: String,
    bio: String,
    curso: String,
    estado: Boolean  
});

module.exports= mongoose.model('user', userSchema)