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


//============ Switch Case ========================

var nummer = prompt("Geben sie eine nummer");
var birler = sayii % 10;
var onlar = Math.floor((sayii / 10) % 10);
rakamYaz(onlar);
rakamYaz(birler);
function rakamYaz(rakam) {
  var rakamIsmi;
  switch (rakam) {
    case 1:
      rakamIsmi = "Bir";
      break;
    case 2:
      rakamIsmi = "İki";
      break;
    case 3:
      rakamIsmi = "Üç";
      break;
    case 4:
      rakamIsmi = "Dört";
      break;
    case 5:
      rakamIsmi = "Beş";
      break;
    case 6:
      rakamIsmi = "Altı";
      break;
    case 7:
      rakamIsmi = "Yedi";
      break;
    case 8:
      rakamIsmi = "Sekiz";
      break;
    case 9:
      rakamIsmi = "Dokuz";
      break;
    case 0:
      rakamIsmi = "Sıfır";
      break;
  }
  console.log(rakamIsmi);
}
//******************************************************************** */

//************************ TERNARY ************************
// ÖRNEK
//10 yıldan fazla çalışanlara yüzde 50, 5-10 arası yüzde 20, daha az çalışanlara yüzde 10 ikramiye verilsin
const maas = prompt("Maasinizi giriniz:");
const calismaSuresi = prompt("Calisma suresini giriniz:");
const zamliMaas =
  calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;
console.log(zamliMaas);

// ! emojisense eklentisi yükle==> emoji kısayol (mac te üstte file ın yanındaki edit ->emojiler)
//eklentiden sonra alttakiler kısayol
// Mac: cmd + i;
// Linux: ctrl + alt + i;
// Windows: ctrl + i;

// ÖRNEK
const borç = 0;
const maaş = 3000;
console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir  🤑" : "Kredi Alamaz 🥺");
// !borç=> borç false ise yani mesela 0 ise
//MacOS işletim sisteminde Emoji ve Semboller penceresini açmak için; klavyeden 'control' , 'command' ve 'space' tuşlarına aynı anda basın. Ardından ilgili
//metin içeriğinde ya da sohbet penceresinde emoji klavyesi karşınıza çıkacaktır.
//Metin girişi sırasında Windows logo(pencere) tuşu + . (nokta) yazın. Emoji klavyesi görüntülenir.
//Fareyle bir emoji seçin veya kullanılabilir emojiler arasında istediğiniz emojiyi aramak için yazmaya devam edin.
// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

// ORNEK
const sayi = prompt("isminize kaç harf eklemek istediğinizi giriniz:");
let isim = "ahmet";

for (let i = 1; i <= sayi; i++) {
  // let b = String.fromCharCode(i + 64);
  isim = isim + String.fromCharCode(i + 64);
}
console.log(isim);

// for (let i = 1; i <= sayi; i++) {
//   console.log("Mehmet");
//   console.log(`${i}- Mehmet`);
// }
//${i} yazmazsak console da 10 Mehmet yazar(bir kere yazıyor yani)
//************************************ */
// ORNEK: Asal sayı tespiti
const number = 10;

let asal = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    asal = false;
    break;
  }
}
//const asalMi = asal ? "ASAL" : "ASAL DEGIL";
console.log(asal ? "ASAL" : "ASAL DEGIL");

// TODO ÖRNEK: do- while döngüsü
let not;
do {
  not = prompt("Lütfen do-while için 0-100 arasında bir not giriniz:");
} while (not < 0 || not > 100);
console.log("Giridiğiniz not 0-100 arasındadır");

// TODO ÖRNEK: while döngüsü

let not2 = prompt("0-100 arasında bir not giriniz:");
while (not2 < 0 || not2 > 100) {
  console.error("Girilen not 0-100 arasında olmalıdır.");
  not2 = prompt("0-100 arasında bir not giriniz:");
}
console.log("Girdiğiniz not 0-100 arasındadır");

// ÖRNEK: klavyeden end kelimesi girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

let adi;
let i = 1;
while (true) {
  //true yerine 1 de yazılabilir, bunlar hep true demek.0=false olur
  adi = prompt(i + ".kisinin adını giriniz:").toLowerCase;
  //adi = adi.toLowerCase(); // girilen karakteri küçük harfe çeviriyoruz.
  if (adi == "end") {
    break;
  }
  i++;
  console.log(a)


}
