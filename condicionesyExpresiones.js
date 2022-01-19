/*
Ejercicio 1
Tienes una lista de nombres: var names = ["Maria", "Antony", "Joy", "Juan"]
*/
var nombres=["Maria","Antonio","Joy","Juan"]
/*
Parte 1
Escriba una función para insertar un nombre al final de la lista. Agregue su propio nombre al final de la lista.
*/
function agregaTuNombre(tuNombre){
    nombres.push(tuNombre);
}
agregaTuNombre("Angeles")
console.log(nombres);

/*
Parte 2
Escribe una función que tome un nombre y verifique si la lista tiene ese nombre. Debería devolver un booleano - verdadero/falso.
*/
function isName(nameSearch,array){
    return array.includes(nameSearch);
}

console.log("Angeles " + isName("Angeles",nombres));

/*
parte 3
Escribe una función que tome una lista de nombres. Esta función debería comparar la lista tomada en la nameslista que tiene actualmente. La función debe devolver una matriz con los nombres que están en ambas listas.
*/
var namesList = ["Angeles","Inde","Aurea"];

function arreglo(arreglo,arreglo1){
    let filter = [];
    arreglo.forEach((elemento) => {
        arreglo1.forEach((elemento1) =>{
            if(elemento==elemento1){
                filter.push(elemento);
            }
        });
    });
    return filter;
}

console.log(arreglo(nombres,namesList));

/*
parte 4
Escriba una función que tome una lista de nombres y devuelva una lista de números enteros con la longitud de los nombres en el mismo orden en que se recibieron. Sugerencia para usar la función de empuje
*/
function longitudDeNombres(arreglo){
    let arreglo2 = [];
    arreglo.forEach(elemento=>{
        arreglo2.push(elemento.length);
    });
    return  arreglo2;
}

console.log(longitudDeNombres(nombres));
/*
Ejercicio 2
¿A qué se refieren las siguientes expresiones?
*/
console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);

/*
Ejercicio #3
Escribe una función que registre si un número está entre 0 y 25 (inclusive), entre 26 y 100 (inclusive), mayor que 100 o menor que 0.
*/

function numeroDentroDe(numero){
   var numero=parseInt("ingresa un numero del 1 al 100") 
   if(numero>=0&&numero<=25){
        console.log(numero + " is between 0 and 25");
    }
    else if(numero>=26&&numero<=100){
        console.log(numero + " is between 26 and 100");
    }
    else if(numero>100){
        console.log(numero + " is greater than 100");
    }
    else{
        console.log(numero + " is less than 0");
    }
}
numeroDentroDe(20);   
numeroDentroDe(65);   
numeroDentroDe(120);  

