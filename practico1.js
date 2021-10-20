

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

/*3 promedio*/

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

/*  4  perimetro*/
var numero1 = prompt ("Ingrese lado A");
var numero2 = prompt ("ingrese  lado B");

var num1 = parseInt(numero1);
var num2 = parseInt(numero2);

var perimetro = (2*num2)+(2*num1);
alert (perimetro)

/* 5  area */
var numero1 = prompt ("Ingrese base del triangulo");
var numero2 = prompt ("ingrese altura del trinagulo");

var num1 = parseInt(numero1);
var num2 = parseInt(numero2);

var area = (num1*num2)/2;
alert (area);
 
/*  6  Datos completos*/

var nombre = prompt ("Ingrese su nombre");
var apellido = prompt ("Ingrese su apellido");
var edad = parseInt(prompt ("Ingrese su edad"));

alert(nombre.toLowerCase() + "\n" + apellido.toUpperCase()  + "\n" +  edad);

 /*  7   conversión moneda */

var pesos = prompt ("ingrese pesos uruguayos");
var num1 = parseInt(pesos);

var conversión = num1 * 0.023; 

alert(conversión);

document.write("El resultado de la suma es " + suma)

/*    8  numero par ,impar */

var par = prompt ("ingrese número");
var num1 = parseInt(par);

     if (num1 % 2 == 0)

    {
         document.write('El numero introducido es par');
    }
    else {document.write('El numero introducido es impar');}
 alert ();

/* 9   votantes*/
var fechanacimiento = prompt ("ingrese año de nacimiento");
var num1 = parseInt(fechanacimiento);
if (fechanacimiento >= 18)
        {
            document.write('Puedes votar')
        }
        
        else (fechanacimiento < 18) 
        {
            document.write('No puedes votar')
        }




