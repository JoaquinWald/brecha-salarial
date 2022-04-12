# Proyecto Brecha Salarial
### Éste es el código utilizado para calcular la brecha salarial entre hombres y mujeres.
### Cabe aclarar que los datos utilizados son completamente arbitrarios de mi parte y sin investigación mediante.

## Los pasos a seguir fueron:
##### 1) Crear un archivo html que contenga la información y estructura básica para poder concretar el proyecto.
##### 2) Crear los archivos: man-salary-js y woman-salary.js en el que inventé las listas de hombres y mujeres con sus respectivos sueldos y nombres. 
##### Dichas listas fueron creadas mediante un array vacío, que posteriormente fue llenado con el método .push(), acompañado de un objeto para cada persona.
##### 3) Luego, creé el archivo brecha.js para hacer toda la lógica.
##### En brecha.js separé únicamente los salarios de ambas partes con el método .map().
##### Una vez obtenidos, los ordené mediante el método .sort() de menor a mayor (para poder buscar la mediana necesaria para llevar a cabo la fórmula de la brecha salarial)
##### Luego, creé una functión con condicionales dentro, lo que me permite saber si la cantidad de elementos dentro de los arrays es par o impar.
##### Después, hice otra function llamada medianaSalarios que recibirá la lista ordenada, ya sea de hombres o mujeres, para posteriormente calcular cuál es la mediana de cada lista de salarios.
##### Por último, tomé dichas medianas y llevé a cabo la fórmula que permite averiguar cuál es el porcentaje de la brecha salarial.
