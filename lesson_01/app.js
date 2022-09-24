// für die Comment. Es ist gleich wie JAVA

// Hier erscheint im Consol


console.log("JavaScript erste Code. Wir verwenden um etwas zu drucken")

alert("Warnung!")

console.warn("Fehlerschreibung mit Gelbe Farbe")

console.error("Warnungshcreiben mit Rote Farbe")

prompt("Kunden um Dinge bitten")


var name11= "Michael";
console.log(typeof name11)


//===== Const --Neue Variable--

const nummer=3.10;
// nummer="sery";   Man kann Type nicht wechseln
// nummer = 3.5;    Das geht auch nicht

const text="Weinachten";

const nummer5=3;
number5=1;


//==== Let --Neue Variable--

let fiyat = 24
console.log(typeof fiyat);


// String icin 3 farkli karakter kullanilabilir


let name1="Ali"
let name2='Mehmet'
let name3='Oguzhan';

console.log(name3);


// Aritmethic

const nm1=5;
const nm2=5;
const nm3=5;

console.log(nm1+nm2+nm3);

console.log("toplam fiyat",nm1+nm2+nm3);

const s1=5
let s2="5"
console.log(s1+s2); // Es entscheidet sich,  ob es String oder Int wird


// Template Literal

console.log(`mein name ${name11} mein Alt ${s1}`);  // mein name Michael mein Alt 5


const unter=5;
const oben=3;
console.log(unter**oben); // 3 mal 5 = 125



// Modulus

const nummerM=121;
const nummerMin=nummerM%10;
console.log(nummerMin);   // Modulus --> "wie wiel gibt noch??"



// ==     Gleich
// ===    Type und Value Gleich
const sy1="128"
const sy2=128
console.log(sy1==sy2)
console.log(sy1===sy2) // weil Type anders ist!


// todo Type anders

const geld= "150"
console.log(geld+10)
console.log(Number(geld)+10) 

const number7=17
console.log( String(number7) + sy1 )









