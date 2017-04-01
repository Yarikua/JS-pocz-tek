'use strict';

var wiekMateusz = 28;
var wiekPawel = 20;


/*warunek if*/

if ( wiekPawel < wiekMateusz ){
console.log("Pawel jest mlodszy");
}

if ( wiekPawel > wiekMateusz ){
console.log("Pawel jest starszy");    
}


/*Warunek if else if*/


if ( wiekPawel > wiekMateusz )
{  
console.log("Pawel jest mlodszy");    
}
else if (wiekPawel == wiekMateusz){
console.log("Pawel jest taki samy jak Mateusz");
}
else ( wiekPawel < wiekMateusz ) {
    console.log("Pawel jest sratszy")
}


/*Warunek swich*/

var kolor = 'zielony';

switch (kolor){
    case 'czerwony':
        console.log("kolor czerwony");
        break;
    case 'niebieski':
        console.log("kolor niebieski");
        break;
    case 'zielony':
        console.log("kolor zielony");
        break;
    default:
        console.log("Kolor inny niż czerwony, zielony lub niebieski");
}
             }






