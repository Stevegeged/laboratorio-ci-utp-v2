/**
 * Suite de Pruebas Unitarias Automatizadas
 * Asignatura: Herramientas de Desarrollo - UTP
 * Framework de pruebas: Jest
 * Cobertura: 100% de operaciones aritméticas y manejo de excepciones
 */

const { sumar, restar, multiplicar, dividir } = require('./calculator');

describe('Pruebas Unitarias del Módulo Calculadora UTP', () => {
    test('1. Prueba de Suma: 5 + 5 debe ser igual a 10', () => {
        expect(sumar(5, 5)).toBe(10);
    });

    test('2. Prueba de Resta: 10 - 4 debe ser igual a 6', () => {
        expect(restar(10, 4)).toBe(6);
    });

    test('3. Prueba de Multiplicación: 3 * 4 debe ser igual a 12', () => {
        expect(multiplicar(3, 4)).toBe(12);
    });

    test('4. Prueba de División: 20 / 5 debe ser igual a 4', () => {
        expect(dividir(20, 5)).toBe(4);
    });

    test('5. Excepción de División por Cero', () => {
        expect(() => dividir(10, 0)).toThrow('No es posible dividir entre cero');
    });
});
