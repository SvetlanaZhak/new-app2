/*jslint browser:true*/
/*global console*/

/* ************************************************************************ */

console.log("*********************************");
console.log("*********** variables ***********");
console.log("*********************************");


// let
let x = 5;
if (x === 5) {
    let x = 3;
    console.log(`new let variable, expected output kolme: ` + x);
}
console.log(`old let variable, still contains viisi: ` + x);

// const
const c = 'this is constant';
console.log(c);
try {
    c = 'try new content';
    console.log('execution should never get here');
} catch (_e) {
    console.log('tried new content and got error as expected');
}





// var
function varCheck() {
    var x = 6;
    if (true) {
        var x = 5;  // same variable, just overwritten
        console.log(`Expected output viisi: ` + x);
    }
    console.log(`Expected output viisi still: ` + x);
    console.log('oh and by the way this was function varCheck() syntax');
}
varCheck();