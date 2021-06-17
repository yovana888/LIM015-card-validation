// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
    it('debería ser un objeto', () => {
        expect(typeof validator).toBe('object');
    });

    describe('validator.isValid', () => {
        it('debería ser una función', () => {
            expect(typeof validator.isValid).toBe('function');
        });

        it('debería retornar true para "4835-0812-7735-2152"', () => {
            expect(validator.isValid("4835-0812-7735-2152")).toBe(true);
        });

        it('debería retornar true para "5431-7104-3691-0147"', () => {
            expect(validator.isValid("5431-7104-3691-0147")).toBe(true);
        });

        it('debería retornar false para "5031-714-3691-014"', () => {
            expect(validator.isValid("5031-7104-3691-014")).toBe(false);
        });

        it('debería retornar error-formato para "5031-7141-123"', () => {
            expect(validator.isValid("5031-7141-123")).toBe("error-formato");
        });


    });

    describe('validator.maskify', () => {
        it('debería ser una función', () => {
            expect(typeof validator.maskify).toBe('function');
        });

        it('Debería retornar "############2152" para "4835-0812-7735-2152"', () => {
            expect(validator.maskify("4835-0812-7735-2152")).toBe("############2152");
        });

        it('Debería retornar "1" para "1"', () => {
            expect(validator.maskify("1")).toBe("1");
        });

        it('Debería retornar "######orld" para "helloworld"', () => {
            expect(validator.maskify("helloworld")).toBe("######orld");
        });
    });

    describe('validator.getTypeCreditCard', () => {
        it('debería ser una función', () => {
            expect(typeof validator.getTypeCreditCard).toBe('function');
        });

        it('Debería retornar "VISA" para "4835-0812-7735-2152"', () => {
            expect(validator.getTypeCreditCard("4835-0812-7735-2152")).toBe("VISA");
        });

        it('Debería retornar "MasterCard" para "5350-3502-8638-8461"', () => {
            expect(validator.getTypeCreditCard("5350-3502-8638-8461")).toBe("MasterCard");
        });

        it('Debería retornar "American Express" para "3727-7338-8734-123"', () => {
            expect(validator.getTypeCreditCard("3727-7338-8734-123")).toBe("American Express");
        });

        it('Debería retornar "DISCOVER" para "6011-9222-0206-3441"', () => {
            expect(validator.getTypeCreditCard("6011-9222-0206-3441")).toBe("Discover");
        });

        it('Debería retornar "JBC" para "3573-3756-0257-128"', () => {
            expect(validator.getTypeCreditCard("3573-3756-0257-128")).toBe("JBC");
        });

        it('Debería retornar "Tipo de Tarjeta no Identificada" para "0000-0000-1111-1111"', () => {
            expect(validator.getTypeCreditCard("0000-0000-1111-1111")).toBe("Tipo de Tarjeta no Identificada");
        });
    });
});