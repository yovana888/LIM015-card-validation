import validator from './validator.js';

let hoy = new Date();
const creditCardNumber = document.querySelector('#creditCardNumber');
const formValid = document.querySelector('#formValid');
const btnEnviar = document.querySelector('#btnEnviar');
const btnVolver = document.querySelector('#btnVolver');
const viewInicial = document.querySelector('#viewInicial');
const viewFinal = document.querySelector('#viewFinal');
const textMaskify = document.querySelector('#textMaskify');
const textType = document.querySelector('#textType');
const textDate = document.querySelector('#textDate');


btnEnviar.addEventListener('click', () => {
    let respuesta = validator.isValid(creditCardNumber.value);
    switch (respuesta) {
        case true:
            {
                let maskifyCreditCardNumber = validator.maskify(creditCardNumber.value);
                let typeCreditCard = validator.getTypeCreditCard(creditCardNumber.value);
                showViewMaskify(maskifyCreditCardNumber, typeCreditCard);
                break;
            }
        case false:
            {
                alert('Tarjeta Invalida');
                break;
            }
        default:
            {
                alert('Por favor Verifique sus Datos, recuerde que el Numero de Tarjeta debe contener solo Numeros y de 12 digitos como minimo');
            }

    }
});


creditCardNumber.addEventListener('keypress', () => {
    let numero_temporal = creditCardNumber.value;
    let rawNumbers = numero_temporal.replace(/-/g, '');
    let cardLength = rawNumbers.length;
    if (cardLength !== 0 && cardLength <= 12 && cardLength % 4 == 0) {
        creditCardNumber.value = numero_temporal + '-';
    }
});



btnVolver.addEventListener("click", function() {
    formValid.reset();
    viewInicial.style = "visibility: show";
    viewFinal.style = "display:none";
});


function showViewMaskify(maskifyCreditCardNumber, typeCreditCard) {
    textMaskify.innerHTML = maskifyCreditCardNumber;
    textType.innerHTML = typeCreditCard;
    textDate.innerHTML = hoy.getDay() + '/' + hoy.getMonth() + '/' + hoy.getFullYear() + '  ' + hoy.getHours() + ':' + hoy.getMinutes();
    viewInicial.style = "display:none";
    viewFinal.style = "visibility:show";

}