 1. Jest

1. Descripción
Jest es un framework de pruebas unitarias desarrollado por Meta (antes Facebook). Es ampliamente usado en aplicaciones React, pero también es compatible con Node.js y otras bibliotecas. Incluye funcionalidades integradas como aserciones, mocks, cobertura de código y ejecución paralela.

2. Casos de uso y contraindicaciones
Casos de uso:

Proyectos desarrollados con React, React Native o Node.js.
Cuando se necesita una solución todo-en-uno (sin configurar herramientas externas).
Aplicaciones que requieren pruebas rápidas y cobertura integrada.
No recomendable:

Proyectos muy grandes donde se requiere un control más granular de la ejecución de pruebas.
Aplicaciones que ya usan otros runners de pruebas y no desean adoptar el entorno completo de Jest.

3. Ejemplo de prueba unitaria
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('suma 2 + 3 debe ser 5', () => {
  expect(sum(2, 3)).toBe(5);
});
//------------------------------------------------------------------------
Mocha

1. Descripción
Mocha es un framework de pruebas flexible para JavaScript. A diferencia de Jest, Mocha no viene con su propio conjunto de aserciones ni mocks, por lo que usualmente se combina con bibliotecas como Chai (para aserciones) y Sinon (para mocks y spies).

2. Casos de uso y contraindicaciones
Casos de uso:

Proyectos que requieren personalización en la configuración del entorno de pruebas.
Cuando se desea usar diferentes bibliotecas para aserciones, mocks o spies.
No recomendable:

Cuando se desea una solución "todo en uno" con mínima configuración inicial.
Equipos sin experiencia previa en pruebas, ya que requiere más configuración que Jest.
3. Ejemplo de prueba unitaria
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// test/sum.test.js
const assert = require('chai').assert;
const sum = require('../sum');

describe('Función sum()', () => {
  it('debe retornar 5 para 2 + 3', () => {
    assert.equal(sum(2, 3), 5);
  });
});
//------------------------------------------------------------------------
Vitest

1. Descripción
Vitest es un framework moderno inspirado en Jest y diseñado para integrarse directamente con Vite, un bundler de frontend moderno. Es muy rápido, soporta TypeScript nativamente y tiene una sintaxis compatible con Jest.

2. Casos de uso y contraindicaciones
Casos de uso:

Proyectos que ya usan Vite como su herramienta de construcción.
Aplicaciones modernas que necesitan pruebas rápidas y soporte nativo de ESModules y TypeScript.
No recomendable:

Proyectos que no usan Vite o que dependen de bundlers diferentes como Webpack.
Proyectos legacy o con muchas dependencias externas no compatibles con ESM.

3. Ejemplo de prueba unitaria
// sum.js
export function sum(a, b) {
  return a + b;
}
// sum.test.js
import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('suma 2 + 3 correctamente', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
