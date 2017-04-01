"use strict"
/*
var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function() {console.log(this.imie)}
}

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function() {console.log(this.imie)}
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();
console.log(kaja.wzrost);
console.log(kaja);


*/

function Osoba(imie, nazwisko){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wzrost;
    this.oczy;
    this.wyswietlInfo = function(){
        console.log( "Imię: " + this.imie + "\n"
                   +"Nazwisko: " + this.nazwisko + "\n"
                    +"Wzrost: " + this.wzrost + "\n"
                    +"Oczy: " + this.oczy);            
    }
}
var krystian = new Osoba ('Krystian', 'Dziopa');

krystian.wzrost = 180;
krystian.oczy = "niebieskie";

krystian.wyswietlInfo();


var osoba = {
    imie: "Marcin",
    wzrost 180,
    wyswietlDetale: function(){
        console.log( this.imie + " " + this.wzrost);
    }
}

osoba["imie"] = "Kasia";
osoba.wzrost = 170;

osoba.oczy = "niebieskie":

osoba.wyswietlDetale = function () {
    console.log(this.imie + " " + this.wzrost + " " + this/oczy);
}
osoba.wyswietlDetale();
}

