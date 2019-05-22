const fs = require ('fs');

let opciones = {
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

let crearArchivo = (nombre, cedula, curso) => {
    texto = 'El Señor ' + nombre + '\n' +
            ' con cédula Nro ' + cedula + '\n' +
            ' esta interesado en inscribirse al curso ' + curso.nombre + '\n' +
            ' con id ' + curso.idCurso ;
            
    fs.writeFile('Aspirante-' + nombre + '.txt',texto,(err) => {
        if (err) throw (err);
        console.log('¡La informacion del aspirante ha sido guardada exitosamente!');
    });
}

function cursoErroneo() {
    console.log('El id que ingreso no pertenece a ninguno de nuestros cursos actuales. Ingrese uno nuevamente.'+ '\n')
}

module.exports = {
    crearArchivo,
    opciones,
    cursoErroneo
};
