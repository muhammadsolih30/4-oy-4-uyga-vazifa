//! 1-masala

// let n = 90;
// let son = 65

// if(n >= 65 && n <= 90 ){
//    for (let i = 65; i <= n; i++) {
//       console.log(son,":", String.fromCharCode(i))
//       son++
//    }
// }
// else{
//    console.log(`siz 64 dan katta va 91 dan kichik bulgan son kirita olasiz`);
// }

//! 2-masala

// let n = `??:::`;

// if(!isNaN(Number(n))){
//    console.log("digit")
// }else if ((n >= 'A' && n <= 'Z') || (n >= 'a' && n <= 'z')) {
//       console.log('lotin');
// }else{
//    console.log('0');
// }

//! 3-masala

// let sas = `hello ozbekistoa`

// console.log(sas.charCodeAt(0));
// console.log(sas.charCodeAt(sas.length -1))

//! 4-masala

// let n = 5;
// let belgi = 'A ';
// let a = ''

// for (let i = 0; i < n; i++) {
//    a += belgi
// }
// console.log(`${a}`);

//! 5-masala

// let son = `ali`;
// let natija = ' '

// for (let i = son.length - 1; i >= 0; i--) {
//   natija += son[i] ;
// }

// console.log(natija);

//! 6-masala

// function getStringStars(str, N) {
//   if (typeof str !== 'string') {
//     throw new Error("Birinchi argument satr bo‘lishi kerak");
//   }
//   if (!Number.isInteger(N) || N < 0) {
//     throw new Error("Ikkinchi argument musbat butun son bo‘lishi kerak");
//   }

//   if (str.length <= 1 || N === 0) {
//     return str;
//   }

//   const stars = '*'.repeat(N);
//   return str.split('').join(stars);
// }

// console.log(getStringStars("salom", 6));

//! 7-masala

// let str = "5a10b";

// for( son of str){
//   if(""){}

//   else{
//     son++
//     if(!isNaN(son)){
//       console.log(son - 1)
//     }
//     else if (son == NaN){
//     console.log("aliqlanmadi",son)
//     }
//   }
// }

//! 8-masala

// let ali = `vali`
// let hsobla = 0

// for (let i of ali){

//   if(i <= 'a' && i >= 'z' ){
//     hsobla++
//   }

//   else if((i >= 'a' || 'a' <= 'я') || i === 'ё' ){
//     hsobla++
//   }
// }    console.log(hsobla)

//! 9-masala

// let satr = `uavHDBGDJGFxB`
// console.log(satr.toLowerCase())

//! 10-masala

// function son(satr) {
//   let yigindi = "";
//   for (let a of satr) {
//     if (`A` <= a && a >= "Z") {
//       a = a.toUpperCase();
//       yigindi += a;
//     } else if (a <= `a` || a >= `z`) {
//       a = a.toLowerCase();
//       yigindi += a;
//     } else {
//       console.log(`aniqlanmaadi`);
//     }
//   }
//   return yigindi;
// }

// let natija = son(`ALIvali`);

// console.log(natija);

//! 11-masala

// let satr =  `454.5`

// if(Number.isInteger(satr)){
//     console.log(1)
// }
// else if(Number(satr)){
//    console.log(2)
// }
// else{
//     console.log(0)
// }

//! 12-masala

// function getInverseNumber(n) {
//   let son = String(n);
//   let ali = son.split("").reverse().join("");
//   return Number(ali);
// }

// console.log(getInverseNumber(125));

//! 13-masala

// function son (a, b, c ){
//     if(b == "+"){
//         console.log(a + c)
//     }
//     else if(b == "-"){
//         console.log(a - c)
//     }
//     else if(b == "*"){
//         console.log(a * c)
//     }
//     else if(b == "/"){
//         console.log(a / c)
//     }
//     return son
// }
// let natija = son(41, "-" , 55)
// console.log(natija)

//! 14-masala

// let n1 = 1;
// let n2 = 2;
// let s1 = "salom"
// let s2 = `diniyo`

// s1.slice(0, n1)
// s2.slice(0, n2)

// console.log(s1.concat(s2))

//! 15-masala

// let C = prompt("Belgini kiriting:");
// let S = prompt("Satrni kiriting:");

// let natija = "";
// for (let belgi of S) {
//     if (belgi === C) {
//         natija += belgi.repeat(2);
//     } else {
//         natija += belgi;
//     }
// }

// console.log("Natija:", natija);
// alert("Natija: " + natija);

//! 16-masala

// let C = 'a';
// let S1 = 'salom aqa';
// let S2 = 'XX';

// let natija = '';
// for (let belgi of S1) {
//     if (belgi === C) {
//         natija += S2 + belgi;
//     } else {
//         natija += belgi;
//     }
// }

// console.log("C:", C);
// console.log("S1:", S1);
// console.log("S2:", S2);
// console.log("Natija:", natija);

//! 17-masala

// let S1 = 'abababa';
// let S2 = 'aba';

// let count = 0;
// let index = 0;

// while ((index = S1.indexOf(S2, index)) !== -1) {
//     count++;
//     index += S2.length;
// }

// console.log("S1:", S1);
// console.log("S2:", S2);
// console.log("Takrorlanishlar soni:", count);

//! 18-masala

// let S1 = 'salom dunyo salom';
// let S2 = 'salom';

// let index = S1.indexOf(S2);

// let natija;
// if (index !== -1) {
//     natija = S1.slice(0, index) + S1.slice(index + S2.length);
// } else {
//     natija = S1;
// }

// console.log("Natija:", natija);

//! 19-masala

// let S1 = 'salom dunyo salom hammaga salom';
// let S2 = 'salom';

// let natija;
// if (S1.includes(S2)) {
//     natija = S1.split(S2).join('');
// } else {
//     natija = S1;
// }

// console.log("Natija:", natija);

//! 20-masala

// let S1 = 'salom dunyo salom hammaga';
// let S2 = 'salom';
// let S3 = 'hello';

// let index = S1.indexOf(S2);
// let natija;
// if (index !== -1) {
//     natija = S1.slice(0, index) + S3 + S1.slice(index + S2.length);
// } else {
//     natija = S1; //
// }
// console.log("Natija:", natija);

//! 21-masala

// let S1 = 'salom dunyo salom hammaga salom';
// let S2 = 'salom';
// let S3 = 'hello';

// let index = S1.lastIndexOf(S2);

// let natija;
// if (index !== -1) {
//     natija = S1.slice(0, index) + S3 + S1.slice(index + S2.length);
// } else {
//     natija = S1;
// }

// console.log("Natija:", natija);

//! 22-masala

// let S = 'OTTO QOQ OQSOQ BOB ABBA';

// let sozlar = S.split(' ');
// let count = 0;

// for (let soz of sozlar) {
//     if (soz[0] === soz[soz.length - 1]) {
//         count++;
//     }
// }

// console.log("S:", S);
// console.log("Natija:", count);

//! 23-masala

// let S = 'SALOM ALMA ABBA ASA ARA AQA AAA';

// let sozlar = S.split(' ');
// let count = 0;

// for (let soz of sozlar) {
//     let aCount = soz.split('A').length - 1;
//     if (aCount === 2) {
//         count++;
//     }
// }

// console.log("Natija:", count);

//! 24-masala

// function getMaxOfString(str) {
//     let sozlar = str.split(' ');
//     let maxSoz = sozlar[0];
//     for (let soz of sozlar) {
//         if (soz.length > maxSoz.length) {
//             maxSoz = soz;
//         }
//     }
//     return maxSoz;
// }

// let S = "salom hammaga dunyochalar";
// console.log("Eng uzun so'z:", getMaxOfString(S));

//! 25-masala

// let S = "salom hammaga dunyo chiroyli";
// let natija = S.split(' ').join('.');
// console.log("S:", S);
// console.log("Natija:", natija);

//! 26-masala

// let S = "salom hammaga dunyo chiroyli";
// let sozlar = S.split(' ');
// let natija = sozlar.map(soz => soz.charAt(0).toUpperCase() + soz.slice(1)).join(' ');

// console.log("S:", S);
// console.log("Natija:", natija);

//! 27-masala

// let S = "Salom, dunyo! Siz nima qilyapsiz? (Men yaxshi.)";
// let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
// let count = 0;

// for (let belgi of S) {
//     if (marks.includes(belgi)) {
//         count++;
//     }
// }

// console.log("S:", S);
// console.log("Tinish belgilari soni:", count);

//! 28-masala

// let path = "D:/Qudrat_c++/books/My_book.exe";

// let fileNameWithExt = path.substring(path.lastIndexOf("/") + 1);

// let fileName = fileNameWithExt.substring(0, fileNameWithExt.lastIndexOf("."));

// console.log("Fayl yo'li:", path);
// console.log("Fayl nomi (kengaytmasiz):", fileName);

//! 29-masala
//! 30-masala
