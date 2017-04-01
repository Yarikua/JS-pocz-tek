'use strict'
/*1 Nigdy nie nazywamy zmiennych globalnych tak jak parametrow funkcji
2 Nigdy nie nazywamy zmiennych lokalnych jak parametry funkcji
3 Nie urzywamy miennych globalnych wewnątrz funkcji*/

var liczba1 = 3, liczba2 = 5, liczba3 = 40;

function multiply(parametr1, parametr2, parametr3){
    
    var result;
    result = parametr1 * parametr2 * parametr3;
    return result;
}

var wynik = multiply (liczba1, liczba2, liczba3);

console.log(wynik);