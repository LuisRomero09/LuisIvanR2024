// mimodulo.js

/**
 * Suma dos números.
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La suma de los dos números.
 */
function sumar(a, b) {
    return a + b;
}

/**
 * Resta dos números.
 * @param {number} a - El minuendo.
 * @param {number} b - El sustraendo.
 * @returns {number} La resta de los dos números.
 */
function restar(a, b) {
    return a - b;
}

module.exports = { sumar, restar };
