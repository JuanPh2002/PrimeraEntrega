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

let buscarCurso = (idCurso) => cursos.find( curso => curso.idCurso == idCurso);

for (let i=0; i<cursos.length; i++) {
    setTimeout(function()  {
        console.log ('El nombre del curso es: ' + cursos[i].nombre);
        console.log ('El Id del curso es: ' +  cursos[i].idCurso);
        console.log ('La duracion del curso es: ' + cursos[i].duracionHoras + ' Horas');
        console.log ('El valor del curso es: ' +  cursos[i].valor);+
        console.log('----------------------');
    }, i * 2000);
}

module.exports = {
	buscarCurso
};