'use strict';

/*Pętla for*/

for ( var i = 10; i>0; i--) {
    console.log(i);
}


/*Pętle while*/

var it = 0;
while (it < 10){
    console.log(it);
    it++;
}


/*Pętla do while*/

var iter = 20;
do {
    console.log(iter);
    iter++;
} while ( iter < 10)
    
    
/*Przerywanie pętli*/
    
var a = 0;
while (a < 10) {
    console.log(++a);
    
    if ( a == 5){
        break;
    }
}

/*Przeskakiwanie do kolejnej ieteracji - continue*/


for ( var b = 0; b < 10; ++b){
    
    if ( b == 5){
        continue;
    } else {
        console.log(b);
    }
    console.log("==");
}

