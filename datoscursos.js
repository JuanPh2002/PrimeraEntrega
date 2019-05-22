let cursos = 
[
    {
        nombre: 'Programacion Orientada a Objetos',
        idCurso: 101,
        duracionHoras: 80,
        valor: 350000
    },
    {
        nombre: 'Ingles I',
        idCurso: 102,
        duracionHoras: 120,
        valor: 500000
    },
    {
        nombre: 'Introduccion a Node.js',
        idCurso: 103,
        duracionHoras: 40,
        valor: 0
    }
];

let buscarCurso = (idCurso) => cursos.find(curso => curso.idCurso == idCurso);

function descripcionCursos ()  {
	for (let i=0; i<cursos.length; i++) {
        setTimeout(function()  {
            console.log ('El nombre del curso es: ' + cursos[i].nombre + '\n' +
            ' su Id es: ' +  cursos[i].idCurso + '\n' +
            ' la duracion en horas es: ' + cursos[i].duracionHoras + '\n' +
            ' el valor del curso es: ' +  cursos[i].valor)
            console.log('----------------------');
        }, i * 2000);
    }		   
}

function describirCurso(curso) {
    console.log('\n' +
                'El curso es ' + curso.nombre + '\n' +
                ' su Id es ' + curso.idCurso + '\n' +
                ' la duracion en horas es ' + curso.duracionHoras + '\n' +
                ' y su valor es de ' + curso.valor + '\n');
}

module.exports = {
    cursos,
    buscarCurso,
    descripcionCursos,
    describirCurso
};
