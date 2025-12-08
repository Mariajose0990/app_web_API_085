const mongoose = require('mongoose'); 
 const URI = 'mongodb://localhost/empleados_085'; 
 mongoose.connect(URI)
     .then(db => console.log('la DB se encuentra conectada'))
     .catch(err => console.error(err));  
 module.exports = mongoose; 
