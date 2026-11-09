/**
 * Módulo de Calculadora Aritmética
 * Asignatura: Herramientas de Desarrollo - UTP
 * Caso Práctico: Microservicio de cálculo aritmético automatizado
 * Empresa: TIC-Solutions UTP
 */

/**
 * Realiza la adición de dos operandos numéricos.
 * @param {number} a - Primer sumando
 * @param {number} b - Segundo sumando
 * @returns {number} Resultado de la suma
 */
function sumar(a, b) {
    return a + b;
}

/**
 * Realiza la sustracción de dos operandos numéricos.
 * @param {number} a - Minuendo
 * @param {number} b - Sustraendo
 * @returns {number} Diferencia resultante
 */
function restar(a, b) {
    return a - b;
}

/**
 * Realiza la multiplicación de dos factores.
 * @param {number} a - Multiplicando
 * @param {number} b - Multiplicador
 * @returns {number} Producto obtenido
 */
function multiplicar(a, b) {
    return a * b;
}

/**
 * Realiza el cociente exacto entre dos números controlando la indeterminación por cero.
 * @param {number} a - Dividendo
 * @param {number} b - Divisor
 * @returns {number} Cociente obtenido
 * @throws {Error} Lanza una excepción si el divisor es igual a cero
 */
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No es posible dividir entre cero");
    }
    return a / b;
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
};
