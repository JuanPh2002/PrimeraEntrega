const cursos = require ('./datoscursos');
const aspirantes = require('./inscribir');


const argv = require ('yargs')
	.command('inscribir','Realizar proceso de inscripcion',aspirantes.opciones)
    .argv;
    

    crearArchivo(argv.n,argv.ced,cursos.buscarCurso(argv.c));