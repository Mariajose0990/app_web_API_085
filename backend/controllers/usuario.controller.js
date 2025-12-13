
 const Usuario = require('../models/usuario');
 const usuarioCtrl = {};
 
 /**
  * DEFINO LOS MÉTODOS  */
 
 //Obtener todos los usuarios
 usuarioCtrl.getUsuario = async (req, res) => {
     const usuario = await Usuario.find();
     res.json(usuario);   
}                    
 
 // Crear usuario
 usuarioCtrl.createUsuario = async (req, res) => { 
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();    
    res.json({
        'status': 'Usuario guardado'
    });
 }

 //Conseguir un único usuario 
 usuarioCtrl.getUnicoUsuario = async (req, res) => {     
     const usuarioUnico = await Usuario.findById(req.params.id); 
     res.json(usuarioUnico);
 }
 
 //Actualizar usuario
 usuarioCtrl.editarUsuario = async (req, res) =>  {
     const { id } = req.params; 
     const usuarioEdit = {  
         nombre: req.body.nombre,
         correo: req.body.correo,
         contraseña: req.body.contraseña
     };
     await Usuario.findByIdAndUpdate(id, {$set: usuarioEdit}, {new:  true}); 
     res.json({status: 'Usuario Actualizado'});
 }

 // Eliminar usuario 
 usuarioCtrl.eliminarUsuario = async (req, res) => {
     await Usuario.findByIdAndDelete(req.params.id);
     res.json({status: 'Usuario Eliminado'});
 };

 module.exports = usuarioCtrl;