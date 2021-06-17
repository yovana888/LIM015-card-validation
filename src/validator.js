const validator = {
    isValid: function(creditCardNumber) {
        creditCardNumber = creditCardNumber.replace(/-/g, '');
        const regex = /^[0-9]*$/;

        let respuesta;

        if (regex.test(creditCardNumber) == true && creditCardNumber.length >= 12) {
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
            respuesta = (suma % 10) == 0 ? true : false;

        } else {
            respuesta = 'error-formato';
        }

        return respuesta;
    },

    maskify: function(creditCardNumber) {
        creditCardNumber = creditCardNumber.replace(/-/g, '');
        let array_num_tarjeta = Array.from(creditCardNumber);
        for (let i = 0; i < array_num_tarjeta.length - 4; i++) {
            array_num_tarjeta[i] = '#';
        }
        let maskifyCreditCardNumber = array_num_tarjeta.join("");

        return maskifyCreditCardNumber;
    },

    getTypeCreditCard: function(creditCardNumber) {
        creditCardNumber = creditCardNumber.replace(/-/g, '');
        let visaRegEx = /^4[0-9]{6,}$/; // Las Visas empiezan por 4.
        let mastercardRegEx = /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/; // Los números de las MasterCard empezaban del  51 al 55 o 222100-272099.
        let amexpRegEx = /^3[47][0-9]{5,}$/; //Los números de American Express empiezan por 34 o 37.
        let discovRegEx = /^6(?:011|5[0-9]{2})[0-9]{3,}$/; //Discover empiezan por 6011 o 65.
        let jbcRexEx = /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/; //JCB empiezan por  2131, 1800 o 35.
        let typeCreditCard;

        if (visaRegEx.test(creditCardNumber)) {
            typeCreditCard = 'VISA';
        } else if (mastercardRegEx.test(creditCardNumber)) {
            typeCreditCard = 'MasterCard';
        } else if (amexpRegEx.test(creditCardNumber)) {
            typeCreditCard = 'American Express';
        } else if (discovRegEx.test(creditCardNumber)) {
            typeCreditCard = 'Discover';
        } else if (jbcRexEx.test(creditCardNumber)) {
            typeCreditCard = 'JBC';
        } else {
            typeCreditCard = 'Tipo de Tarjeta no Identificada';
        }

        return typeCreditCard;
    }

};

export default validator;