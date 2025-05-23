

//sacando el valor de los inputs
let nombre = document.getElementById('nombre').value;
let apodo = document.getElementById('apodo').value;
let listado = document.getElementsByClassName('checkbox').value;




    const popoverTrigger = document.getElementById('edadPopover');

    // Inicializa el popover vacío (o con contenido inicial)
    let popoverInstance = new bootstrap.Popover(popoverTrigger, {
        content: "Aquí aparecerá tu edad",
        title: "Datos"
    });//buscar 

    popoverTrigger.addEventListener('click', function () {
        // Obtener valor edad actualizado
        let edad = document.getElementById('edad').value;

        // Destruir popover viejo
        popoverInstance.dispose();

        // Actualizar atributo data-bs-content (opcional, para mantener el atributo actualizado)
        popoverTrigger.setAttribute('data-bs-content', edad || "No hay edad");

        // Crear uno nuevo con contenido actualizado
        popoverInstance = new bootstrap.Popover(popoverTrigger, {
            title: "Tu edad es",
            content: edad || "No ingresaste ningun dato"
        });

        // Mostrar popover manualmente
        popoverInstance.show();
    });




