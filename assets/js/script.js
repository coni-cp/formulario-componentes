// Contenido dinámico
/* let modal = document.getElementById('miModal')

modal.addEventListener('show.bs.modal', function(event){
    // reconozco el botón que activa el evento
    let boton = event.relatedTarget
    // genero instancia para leer el atributo del botón
    console.log(boton.getAttribute('data-bs-encabezado'))
    
    document.querySelector('.modal-body').innerHTML = boton.getAttribute('data-bs-encabezado')
    document.querySelector('.modal-title').textContent = boton.getAttribute('data-bs-titulo')
    //document.querySelector('.modal-header').classList.add(boton.getAttribute('data-bs-clase'))
    let modalHeader = document.querySelector('.modal-header')
    modalHeader.classList.add('text-white')
    modalHeader.classList.add(boton.getAttribute('data-bs-clase'))
})


modal.addEventListener('hide.bs.modal', function(event){
    let modalHeader = document.querySelector('.modal-header')
    if(modalHeader.classList.contains('bg-primary') || modalHeader.classList.contains('bg-danger') || modalHeader.classList.contains('bg-warning')|| modalHeader.classList.contains('bg-success') || modalHeader.classList.contains('bg-secundary')){
        modalHeader.classList.remove('bg-primary')
        modalHeader.classList.remove('bg-danger')
        modalHeader.classList.remove('bg-warning')
        modalHeader.classList.remove('bg-success') 
        modalHeader.classList.remove('bg-secundary')
    }
}) */
