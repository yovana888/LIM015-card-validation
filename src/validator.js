function isValid(creditCardNumber) {

    creditCardNumber = creditCardNumber.replace(/-/g, '');
    const regex = /^[0-9]*$/;
    let respuesta = '';
    /*^ marca el comienzo de la cadena. $ marca el final de la cadena. [0-9] indica un caracter numérico. * indica que se cumpla 0 o más veces. */
    if (regex.test(creditCardNumber) == true && creditCardNumber.length >= 12) {
        respuesta = luhn_algorithm(creditCardNumber); //Retorna true o false
    } else {
        respuesta = 'error-formato';
    }
    return respuesta;
}

function luhn_algorithm(creditCardNumber) {
    let array_num_tarjeta = Array.from(creditCardNumber); //Convierte  el numero de tarjeta en un array

    for (let i = 0; i < array_num_tarjeta.length; i++) {
        if (i % 2 == 0) {
            let valor_temporal = array_num_tarjeta[i] * 2;
            array_num_tarjeta[i] = valor_temporal;

            if (valor_temporal > 9) {
                let array_digitos = Array.from(String(valor_temporal), Number); //Convierte el Numero en un array
                let new_numero = array_digitos[0] + array_digitos[1];
                array_num_tarjeta[i] = new_numero;
            }
        }
    }

    let suma = 0;

    //Sumar Digitos del nuevo array 
    for (let i = 0; i < array_num_tarjeta.length; i++) {
        suma = suma + parseFloat(array_num_tarjeta[i]);
    }

    if (suma % 10 == 0) {
        return true;
    } else {
        return false;
    }
}

function maskify(creditCardNumber) {
    creditCardNumber = creditCardNumber.replace(/-/g, '');
    let maskifyCreditCardNumber = creditCardNumber.replace(/.(?=.{4})/g, "#");
    return maskifyCreditCardNumber;
}

function getTypeCreditCard(creditCardNumber) {
    creditCardNumber = creditCardNumber.replace(/-/g, '');
    switch (creditCardNumber) {
        case true:
            let maskifyCreditCardNumber = validator.maskify(creditCardNumber);
            let typeCreditCard = validator.getTypeCreditCard(creditCardNumber);
            showViewMaskify(maskifyCreditCardNumber);
            break;
        case false:
            alert('Tarjeta Invalida');
            break;
        default:
            alert('Por favor Verifique sus Datos, recuerde que el Numero de Tarjeta debe contener solo Numeros y de 16 digitos');
    }
}

export const validator = {
    isValid,
    maskify,
    getTypeCreditCard
}