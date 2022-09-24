// ========== Entscheidung ============


// ========== If-else ============



const s1=prompt("erste nummer");
const mat=prompt("bitte nummer geben: ")
const s2=prompt("zweite nummer")
let ergebnis=0;

if (mat=="+") {
    ergebnis=s1+s2
} else if (mat=="-") {
    if (s1>s2) {
        ergebnis=s1-s2
    } else {
        ergebnis=s2-s1
    }
} else if (mat=="*") {
     ergebnis=s1*s2
} else if (mat=="/") {
    if (s1>s2) {
        ergebnis=s1/s2
    } else {
        ergebnis=s2/s1
    }
} 
console.log(ergebnis);