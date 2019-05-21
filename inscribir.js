const fs = require ('fs');

const opciones = {
    idCurso:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    }
};

let crearArchivo = (nombre, cedula, idCurso) => {
    texto = 'El Señor ' + nombre + '\n' +
            ' con cédula Nro ' + cedula  
            ' esta interesado en inscribirse al curso con id ' + idCurso;
            
    fs.writeFile('Inscrito' + cedula + '.txt',texto,(err) => {
        if (err) throw (err);
        console.log('¡La informacion del aspirante ha sido guardada exitosamente!')
    });
}



module.exports = {
    crearArchivo,
    opciones
};
