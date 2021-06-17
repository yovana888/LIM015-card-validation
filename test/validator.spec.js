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
});