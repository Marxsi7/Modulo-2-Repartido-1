/* 1 suma*/
var numero1 = prompt ("ingrese su número");
var numero2 = prompt ("ingrese  su otro número");
var num1 = parseInt(numero1);
var num2 = parseInt(numero2);

var suma = num1 + num2; 

alert("El resultado de la suma es " + suma);

document.write("El resultado de la suma es " + suma)

/* 2 multiplicacion */

var numero1 = prompt ("ingrese su número");
var numero2 = prompt ("ingrese  su otro número");
var num1 = parseInt(numero1);
var num2 = parseInt(numero2);

var multiplicacion = num1 * num2; 

alert(multiplicacion);

document.write("El resultado de la multiplicacion es " * multiplicacion);

// /*promedio*/

var numero1 = prompt ("ingrese su número");
var numero2 = prompt ("ingrese  su otro número");
var numero3 = prompt ("ingrese su número");
var numero4 = prompt ("ingrese su número");
var numero5 = prompt ("ingrese su número");
var num1 = parseInt(numero1);
var num2 = parseInt(numero2);
var num3 = parseInt(numero3);
var num4 = parseInt(numero4);
var num5 = parseInt(numero5);

 var promedio = (parseFloat(num1)+parseFloat(num2)+parseFloat(num3)+parseFloat(num4)+parseFloat(num5)) / 5
 alert(promedio);

 /*perimetro*/
var numero1 = prompt ("Ingrese lado A");
 var numero2 = prompt ("ingrese  lado B");

var num1 = parseInt(numero1);
var num2 = parseInt(numero2);

var perimetro = (2*num2)+(2*num1);
alert (perimetro)

/* area */
 var numero1 = prompt ("Ingrese base del triangulo");
var numero2 = prompt ("ingrese altura del trinagulo");

 var num1 = parseInt(numero1);
 var num2 = parseInt(numero2);

 var area = (num1*num2)/2;
 alert (area);
 
/*Datos completos*/

var nombre = prompt ("Ingrese su nombre");
var apellido = prompt ("Ingrese su apellido");
var edad = parseInt(prompt ("Ingrese su edad"));


alert(nombre.toLowerCase() + "\n" + apellido.toUpperCase()  + "\n" +  edad); 


