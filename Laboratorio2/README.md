Investigación: Estilos en React 
1.⁠ ⁠CSS tradicional (hojas de estilo externas)
1.⁠ ⁠Descripción
Es la forma clásica de agregar estilos. Se escribe el código de diseño en un archivo separado que termina en .css. Luego se conecta ese archivo al componente React usando una clase. Es como escribir una receta en una hoja aparte y luego seguirla en la cocina.
2.⁠ ⁠Ventajas
•⁠  ⁠Es fácil de entender y de usar si ya conoces CSS.
•⁠  ⁠Ayuda a mantener el código limpio en componentes pequeños.
•⁠  ⁠Funciona bien con herramientas que muchos ya conocen como SASS.
3.⁠ ⁠Desventajas
•⁠  ⁠Los estilos afectan a todo el sitio si no se tiene cuidado.
•⁠  ⁠Es fácil que dos estilos choquen si tienen el mismo nombre.
•⁠  ⁠No es bueno para hacer estilos que cambien con el tiempo o dependen del usuario.
4.⁠ ⁠Perspectiva personal
Para proyectos pequenos

Módulos 2. CSS
1.⁠ ⁠Descripción
Es como usar archivos .css normales, pero los estilos están organizados para que solo afecten al componente donde se usan. Cada clase tiene un nombre único, así que no hay confusión entre componentes.
2.⁠ ⁠Ventajas
•⁠  ⁠Evita problemas con nombres repetidos.
•⁠  ⁠Es fácil de usar si ya sabes CSS.
•⁠  ⁠Te permite tener todo ordenado por componente.
3.⁠ ⁠Desventajas
•⁠  ⁠Hay que importar los estilos de una manera especial.
•⁠  ⁠Puede ser más difícil si tienes muchos archivos.
•⁠  ⁠No puedes hacer estilos que cambien dependiendo de lo que hace el usuario fácilmente.
4.⁠ ⁠Perspectiva personal
Me parece que le da una perspectiva ordenada al codigo

3.⁠ ⁠Componentes con estilo (CSS-in-JS)
1.⁠ ⁠Descripción
Permite escribir los estilos directamente en el mismo archivo donde está el componente, usando una librería especial. Esto significa que puedes usar lógica del programa para cambiar los estilos fácilmente. Es como tener diseño y funcionalidad todo junto.
2.⁠ ⁠Ventajas
•⁠  ⁠Puedes cambiar el diseño según lo que pase en el programa.
•⁠  ⁠Cada estilo solo afecta a su componente.
•⁠  ⁠No necesitas archivos separados para el diseño.
3.⁠ ⁠Desventajas
•⁠  ⁠Hace el archivo más grande.
•⁠  ⁠Puede ser difícil de entender al principio.
•⁠  ⁠Hay que instalar una librería extra.
4.⁠ ⁠Perspectiva personal
Es mas dinamico

4.⁠ ⁠Estilos en línea
1.⁠ ⁠Descripción
Se escriben los estilos directamente en el componente, como si fueran parte del texto del mismo. Son muy útiles para cambios rápidos o estilos simples.
2.⁠ ⁠Ventajas
•⁠  ⁠Muy fácil de usar para estilos pequeños.
•⁠  ⁠No necesitas importar nada extra.
•⁠  ⁠Útil para cambiar colores o tamaños rápidamente.
3.⁠ ⁠Desventajas
•⁠  ⁠No puedes hacer efectos como cambiar color al pasar el mouse.
•⁠  ⁠No es bueno si tienes muchos estilos.
•⁠  ⁠No puedes reutilizar los estilos en otros lugares.
4.⁠ ⁠Perspectiva personal
Solo lo usaría si es algo muy rápido o para probar. No sería bueno usarlo para todo el proyecto porque se vuelve difícil de leer.

5.⁠ ⁠Frameworks CSS (Tailwind, Bootstrap, etc.)
1.⁠ ⁠Descripción
Son herramientas que ya tienen clases listas para usar, como 'hacer el texto rojo' o 'poner bordes'. No tienes que escribir CSS, solo usas las clases en los componentes.
2.⁠ ⁠Ventajas
•⁠  ⁠Te ayuda a trabajar más rápido.
•⁠  ⁠No necesitas inventar todos los estilos.
•⁠  ⁠Muy útil para proyectos donde todo debe verse parecido.
3.⁠ ⁠Desventajas
•⁠  ⁠El código se ve más largo por tantas clases.
•⁠  ⁠Al principio cuesta aprender las clases.
•⁠  ⁠Todo el estilo está mezclado con el componente.
4.⁠ ⁠Perspectiva personal
Es bastante util

6.⁠ ⁠Librerías UI con estilo integrado (Material UI, Chakra UI, etc.)
1.⁠ ⁠Descripción
Son conjuntos de botones, cuadros, menús y más, que ya vienen listos y con estilo. Solo hay que importarlos y usarlos. Es como usar piezas de LEGO ya hechas.
2.⁠ ⁠Ventajas
•⁠  ⁠Todo ya está diseñado y funciona bien.
•⁠  ⁠Hace que tu app se vea moderna sin mucho esfuerzo.
•⁠  ⁠Hay mucha documentación para aprender.
3.⁠ ⁠Desventajas
•⁠  ⁠No puedes cambiar todo fácilmente.
•⁠  ⁠Puede hacer que tu sitio pese más.
•⁠  ⁠A veces es difícil combinar con otras cosas.
4.⁠ ⁠Perspectiva personal
Se ve muy practico