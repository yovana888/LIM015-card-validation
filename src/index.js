import validator from './validator.js';

const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener('click', () => {
    let creditCardNumber = document.getElementById("numero-tarjeta").value;
    let respuesta = validator.isValid(creditCardNumber);
    switch (respuesta) {
        case true:
            {
                let maskifyCreditCardNumber = validator.maskify(creditCardNumber);
                let typeCreditCard = validator.getTypeCreditCard(creditCardNumber);
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


const cardFormat = document.getElementById("numero-tarjeta");

cardFormat.addEventListener('click', () => {
    let numero_temporal = document.getElementById("numero-tarjeta").value;
    let rawNumbers = numero_temporal.replace(/-/g, '');
    let cardLength = rawNumbers.length;
    if (cardLength !== 0 && cardLength <= 12 && cardLength % 4 == 0) {
        document.getElementById("numero-tarjeta").value = numero_temporal + '-';
    }
});


const btnVolver = document.getElementById("btnVolver");

btnVolver.addEventListener("click", function() {
    document.getElementById("formValid").reset();
    document.getElementById("view_inicial").style = "visibility: show";
    document.getElementById("view_final").style = "display:none";
});


function showViewMaskify(maskifyCreditCardNumber, typeCreditCard) {
    let hoy = new Date();
    document.getElementById("text-maskify").innerHTML = maskifyCreditCardNumber;
    document.getElementById("text-type").innerHTML = typeCreditCard;
    document.getElementById("text-fecha").innerHTML = hoy.getDay() + '/' + hoy.getMonth() + '/' + hoy.getFullYear() + '  ' + hoy.getHours() + ':' + hoy.getMinutes();
    document.getElementById("view_inicial").style = "display:none";
    document.getElementById("view_final").style = "visibility: show";

}