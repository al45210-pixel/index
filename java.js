
alert("Esto se llama desde un archivo")

/*nombre es del tipo de dato llamado: String o cadena*/
var nombre = "Gael Hdz";
/*edad es del tipo de dato llamado: Numero enteros*/
var edad = 17;
/*altura es del tipo de dato llamado: Numero real, decimal, doble*/
var altura = 1.67;
/*casado es del tipo de dato llamado: boleano*/
var casado = false; 


var num1 = 8;
var num2 = 10;


num1 = prompt("ESCRIBE EL VALOR DEL NUMERO 1");
num2 = prompt("ESCRIBE EL VALOR DEL NUMERO 2");

var result  = Number(num1) + Number(num2)
alert("EL RESULTADO DE LA SUMA DE LOS NUMEROS ES:" + result)


/*estos prompt me ayudan capturar info para una variable*/
nombre = prompt("ESCRIBE TU NOMBRE COMPLETO:");
alert("TU NOMBRE ES:" + nombre)

edad = prompt("ESCRIBE TU EDAD")
alert("TU EDAD ES" + edad)

altura = prompt("ESCRIBE TU ALTURA")
alert("TU ALTURA ES:" + altura)

/* Estas alertas mostraron el
contenido de las variables
alert(nombre);
alert(edad);
alert(altura);
*/