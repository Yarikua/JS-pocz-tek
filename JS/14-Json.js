'use strict'

var jsonOsoby = {
    "osoby":[
        {
        imie: "Krystian", 
        nazwisko: "Dziopa",
        wzrost: 180,
        oczy: "niebieskie",
        zainteresowania: [
            {nazwa: "podroze"},
            {nazwa: "gotowanie"}
        ]
    },
    {
        imie: "Dominik", 
        nazwisko: "Gomula",
        wzrost: 170,
        oczy: "brązowe",
        zainteresowania: [
            {nazwa: "gotowanie"},
            {nazwa: "języki"}
        ]
    },
    {
        imie: "Klaudia", 
        nazwisko: "Zelazowska",
        wzrost: 167,
        oczy: "brązowe",
        zainteresowania: [
            {nazwa: "programowanie"},
            {nazwa: "języki"},
            {nazwa: "podroze"}
        ]
    }
]
}

console.log (jsonOsoby);

jsonOsoby.osoby[2].zainteresowania.forEach(function (element, index){
    console.log(element.nazwa);
})

/*console.log(jsonOsoby.osoby[2].zainteresowania);*/