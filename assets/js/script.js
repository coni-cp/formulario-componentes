/* //cambio de color de botones
let botones = document.querySelectorAll('.btn');
let colorElegido = document.getElementById('color');

colorElegido.addEventListener('input', () => {
  let color = colorElegido.value;
  botones.forEach(boton => {
    boton.style.backgroundColor = color;
    boton.style.borderColor = color;
  });
});
 */
//alerta
// lo active directamente de boostrap, solo cambie le mensaje
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) { 
  alertTrigger.addEventListener('click', () => {
    let apodo = document.getElementById('apodo').value;
    appendAlert('Hola, ' + apodo, 'info')
  })
}


 //popover
 const popoverLlamado = document.getElementById('edadPopover');
 const popover = bootstrap.Popover.getOrCreateInstance(popoverLlamado);

    popoverLlamado.addEventListener('click', () => {  
    let edad = document.getElementById('edad').value;

    popover.setContent({
        '.popover-header': 'Tu edad es:',
        '.popover-body': ` ${edad}`
    });
});


//offcanvas
const resumen= document.getElementById('offcanvasRight')

resumen.addEventListener('show.bs.offcanvas', function () {
  let nombre = document.getElementById('nombre').value;
  let apodo = document.getElementById('apodo').value;
  let edad = document.getElementById('edad').value;
  let frase = document.getElementById('celebre').value;
  let color = document.getElementById('color').value;
  const seleccionados = [];
        const checkboxes = document.querySelectorAll('input[name="temporada"]:checked');

        checkboxes.forEach(function(a) {
        if (a.checked) {
            seleccionados.push(a.value);
        }
        });

    document.querySelector('.offcanvas-body').innerHTML = `
      <hr>
      <ul style="list-style-type: none; padding-left: 0;">
        <li>👤 Nombre: ${nombre}</li>
        <li>🏷️ Apodo: ${apodo}</li>
        <li>🎂 Edad: ${edad} años</li>
        <li>💬 Frase Célebre: ${frase}</li>
        <li>🎨 Tu color favorito es: ${color}
        <span style="display:inline-block; width: 20px; height: 20px; background-color: ${color}; border: 1px solid #000; margin-left: 10px; vertical-align: center;"></span>
        </li>
        <li>🌤️ Tu estación favorita es: ${seleccionados.join('- ')}.</li>
      </ul>
    `;
  });
    


//toast
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

    toastTrigger.addEventListener('click', () => {
        const seleccionados = [];
        const checkboxes = document.querySelectorAll('input[name="temporada"]:checked');

        checkboxes.forEach(function(a) {
        if (a.checked) {
            seleccionados.push(a.value);
        }
        });

      const nuevoBody = toastLiveExample.querySelector('.toast-body');

      if (seleccionados.length > 0) {
        nuevoBody.textContent = ` ${seleccionados.join('- ')}.`;
      } else {
        nuevoBody.textContent = 'No seleccionaste ningúna opción.';
      }
      toastBootstrap.show();
    });
  }



//slider
//formulario
  const nombre = document.getElementById('nombre');
  const frase = document.getElementById('celebre');
  const apodo = document.getElementById('apodo');
  const edad = document.getElementById('edad');
  const color = document.getElementById('color');


//actualizaciones
  const title1 = document.getElementById('title1');
  const desc1 = document.getElementById('description1');
  const title2 = document.getElementById('title2');
  const desc2 = document.getElementById('description2');
  const title3 = document.getElementById('title3');


  nombre.addEventListener('input', () => {
    title1.innerText = nombre.value;
  });

  edad.addEventListener('input', () => {
    desc1.innerText = edad.value + " años";
  });

  apodo.addEventListener('input', () => {
    title2.innerText = apodo.value;
  });

  frase.addEventListener('input', () => {
    desc2.innerText = frase.value;
  });

  apodo.addEventListener('input', () => {
    title3.innerText = apodo.value;
  });

 



