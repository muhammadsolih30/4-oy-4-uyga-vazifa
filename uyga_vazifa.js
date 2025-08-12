
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


function getStringStars(str, N) {
  if (typeof str !== 'string') {
    throw new Error("Birinchi argument satr bo‘lishi kerak");
  }
  if (!Number.isInteger(N) || N < 0) {
    throw new Error("Ikkinchi argument musbat butun son bo‘lishi kerak");
  }

  if (str.length <= 1 || N === 0) {
    return str;
  }

  const stars = '*'.repeat(N);
  return str.split('').join(stars);
}

console.log(getStringStars("salom", 6)); 
 

