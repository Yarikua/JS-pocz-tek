'use strict'

var jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName":"Dziopa"},
        {"firstName": "Anna", "lastName":"Szapiel"},
        {"firstName": "Piotr", "lastName":"Zmuda"},
    ] 
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach( function (element, index) {
    console.log(element, index);
    console.log(element.firstName+" "+element.lastName+" "+index);
}
)

