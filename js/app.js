let estudio = document.getElementById('estudio');
let proyecto = document.getElementById('proyecto');
document.getElementById('estudios').addEventListener("click", mostrarEstudios())


function mostrarEstudios() {
    if (estudio.style.display == "none") {
        estudio.style.display = "block";

    }
    else {
        estudio.style.display = "none";
    }

}


document.getElementById('proyectos').addEventListener('click',mostrarProyectos())

function mostrarProyectos() {
    

    if (proyecto.style.display=="none") {
        proyecto.style.display="block";
    }
    else{
        proyecto.style.display="none";
    }

}




    
