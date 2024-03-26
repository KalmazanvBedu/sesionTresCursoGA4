// Ejercicios if y switch

// const enlace1 = document.getElementById("enlace1");

// var decision = 4;

// Bloque 1
// if(decision == 1){
//     enlace1.addEventListener('click',
//     function(){

//         alert("Click en enlace 1 por camino 1");

//     }
// )
// }

//********** Bloque switch *********

// switch(decision) {
//     case 1:
//         enlace1.addEventListener('click',
//             function(){
        
//                 alert("Click en enlace 1 por camino 1");
        
//             }
//         )
//       break;
//     case 2:
//         enlace1.addEventListener('click',
//             function(){
        
//                 alert("Click en enlace 1 por camino 2");
        
//             }
//         )
//       break;
//     default:
//         enlace1.addEventListener('click',
//             function(){
        
//                 alert("Click en otro camino");
        
//             }
//         )
//   }

// const enlace1 = document.getElementById("enlace1");

// var listaNombres = ["Karla","Tián","Mario","Keny","Erick","Vale","Juls"];

// for(let i = 0; i<=6; i++){

//     enlace1.addEventListener('click',
//             function(){
        
//                 alert("Hola " + listaNombres[i]);
        
//             }
//         )

// }


// var i=1;
// while (i <= 10) {
//     console.log("Vuelta" + i);
//     i++;
//   }

const enlaceUno = document.getElementById('enlace1');

enlaceUno.addEventListener('click',
    function(){
        gtag('event', 'click_opcion_menu_1')
    }
)

const enlaceDos = document.getElementById('enlace2');

enlaceDos.addEventListener('click',
    function(){
        gtag('event', 'click_opcion_menu_2');
    }
)

const enlaceTres = document.getElementById('enlace3');

enlaceTres.addEventListener('click',
    function(){
        gtag('event', 'click_opcion_menu_3');
    }
)

const enlaceCuatro = document.getElementById('enlace4');

enlaceCuatro.addEventListener('click',
    function(){
        gtag('event', 'click_opcion_menu_4');
    }
)

const enlaceCinco = document.getElementById('enlace5');

enlaceCinco.addEventListener('click',
    function(){
        gtag('event', 'click_boton_contacto',
        {
            'seccion_boton': 'seccionHeader',
            'ocurrencia_click_boton_contacto': 1
        }
        )

        localStorage.setItem('seccion_boton', 'seccionHeader');
    }
)

const botonSeccionUno = document.getElementById('botonSeccionUno');

botonSeccionUno.addEventListener('click',
    function(){
        gtag('event', 'click_boton_contacto', 
        {
            'seccion_boton': 'seccionUno',
            'ocurrencia_click_boton_contacto': 1
        }
        )

        localStorage.setItem('seccion_boton', 'seccionUno');
    }
)

var botonSeccionDos = document.getElementById('botonSeccionDos');

botonSeccionDos.addEventListener('click',
    function(){
        gtag('event', 'click_boton_contacto',
        {
            'seccion_boton': 'seccionDos',
            'ocurrencia_click_boton_contacto': 1
        }
        )

        localStorage.setItem('seccion_boton', 'seccionDos');
    }
)

var botonSeccionTres = document.getElementById('botonconocenos');

botonSeccionTres.addEventListener('click',
    function(){
        gtag('event', 'click_boton_contacto',
        {
            'seccion_boton': 'seccionTres',
            'ocurrencia_click_boton_contacto': 1
        }
        )

        localStorage.setItem('seccion_boton', 'seccionTres');
    }
)

var botonSeccionCuatro = document.getElementById('botonSeccion');

botonSeccionCuatro.addEventListener('click',
    function(){
        gtag('event', 'click_boton_contacto',
        {
            'seccion_boton': 'seccionCuatro',
            'ocurrencia_click_boton_contacto': 1
        }
        )

        localStorage.setItem('seccion_boton', 'seccionCuatro');
    }
)

window.addEventListener("message", function(event) {
    if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
        let seccion_boton = this.localStorage.getItem('seccion_boton')
        gtag('event', 'form_success',
        {
            'hs-form-guid': event.data.id,
            'ocurrencia_form_succes': 1,
            'seccion_boton_form': seccion_boton 
        }
        )
    }
  }
  );

//   var botonForm = document.querySelector("input[class='hs-button primary large']")

//   botonForm.addEventListener('click',
//     function()
//     {
//         alert("Clic en el botón del formulario");
//     }
//     )

