const cursos = require("./datoscursos");
const aspirantes = require('./inscribir');

const argv = require ('yargs')
	            .command('inscribir','Realizar proceso de inscripcion',aspirantes.opciones)
                .argv;

if (typeof(argv.nombre) != 'undefined' ) {
    if ( typeof(cursos.buscarCurso(argv.i)) == 'undefined' ) {
        aspirantes.cursoErroneo();
        cursos.descripcionCursos();
        //process.exit();
    } else {
        cursos.describirCurso(cursos.buscarCurso(argv.i));
        aspirantes.crearArchivo(argv.n, argv.c, cursos.buscarCurso(argv.i));
    }
    
} else {
    cursos.descripcionCursos();
}      





