function Go() {
    let year = document.getElementById('yearId').value;

    let arrYear = Array.from(year).map(Number);

    console.log (arrYear)

    let arrYear1 = arrYear.reduce((sum, current)=>
sum + current
)

let a1 = Math.floor(arrYear1/ 10);
let b1 = arrYear1 - (a1 * 10);
let doomYear1 = a1 + b1 + Number(year);


let y1 = document.getElementById('year1')
y1.innerHTML = `-- ${doomYear1}`


//2

let arrYear2str = Array.from(String(doomYear1), Number);
let arrYear2 = arrYear2str.reduce((sum, current)=>
sum + current
)
let a2 = Math.floor(arrYear2 / 10);
let b2 = arrYear2 - (a2 * 10);
let doomYear2 = a2 + b2;

let doomMatchOne2;
let doomMatchTwo2;
let doomAltResult2;

if (doomYear2 >= 10) {
    doomMatchOne2 = Math.floor(doomYear2 / 10);
    doomMatchTwo2 = doomYear2 - (doomMatchOne2 * 10)
    doomAltResult2 = doomMatchOne2 + doomMatchTwo2 +Number(doomYear1);
    
} else {

    doomAltResult2 = a2 + b2 + Number(doomYear1);
}

let y2 = document.getElementById('year2')
y2.innerHTML = `-- ${doomAltResult2}`



//3

let arrYear3str = Array.from(String(doomAltResult2), Number);
let arrYear3 = arrYear3str.reduce((sum, current)=>
sum + current
)
let a3 = Math.floor(arrYear3/ 10);
let b3 = arrYear3 - (a3 * 10);
let doomYear3 = a3 + b3 + Number(doomYear2);

let doomMatchOne3;
let doomMatchTwo3;
let doomAltResult3;

if (doomYear3 >= 10) {
    doomMatchOne3 = Math.floor(doomYear3 / 10);
    doomMatchTwo3 = doomYear3 - (doomMatchOne3 * 10)
    doomAltResult3 = doomMatchOne3 + doomMatchTwo3 + Number(doomAltResult2);
    
} else {

    doomAltResult3 = a3 + b3 + Number(doomAltResult2);
}

let y3 = document.getElementById('year3')
y3.innerHTML = `-- ${doomAltResult3}`



//4

let arrYear4str = Array.from(String(doomYear3), Number);
let arrYear4 = arrYear4str.reduce((sum, current)=>
sum + current
)
let a4 = Math.floor(arrYear4/ 10);
let b4 = arrYear4 - (a4 * 10);
let doomYear4 = a4 + b4 + Number(doomYear3);


let doomMatchOne4;
let doomMatchTwo4;
let doomAltResult4;

if (doomYear4 >= 10) {
    doomMatchOne4 = Math.floor(doomYear4 / 10);
    doomMatchTwo4 = doomYear4 - (doomMatchOne4 * 10)
    doomAltResult4 = doomMatchOne4 + doomMatchTwo4 + Number(doomAltResult3);
    
} else {

    doomAltResult4 = a4 + b4 + Number(doomAltResult3);
}


let y4 = document.getElementById('year4')
y4.innerHTML = `-- ${doomAltResult4}`


//5

let arrYear5str = Array.from(String(doomYear4), Number);
let arrYear5 = arrYear5str.reduce((sum, current)=>
sum + current
)
let a5 = Math.floor(arrYear5/ 10);
let b5 = arrYear5 - (a5 * 10);
let doomYear5 = a5 + b5 + Number(doomYear4);


let doomMatchOne5;
let doomMatchTwo5;
let doomAltResult5;

if (doomYear2 >= 10) {
    doomMatchOne5 = Math.floor(doomYear5 / 10);
    doomMatchTwo5 = doomYear5 - (doomMatchOne5 * 10)
    doomAltResult5 = doomMatchOne5 + doomMatchTwo5 +Number(doomAltResult4);
    
} else {

    doomAltResult5 = a5 + b5 + Number(doomAltResult4);
}


let y5 = document.getElementById('year5')
y5.innerHTML = `-- ${doomAltResult5}`

//6

let arrYear6str = Array.from(String(doomYear5), Number);
let arrYear6 = arrYear6str.reduce((sum, current)=>
sum + current
)
let a6 = Math.floor(arrYear6/ 10);
let b6 = arrYear6 - (a6 * 10);
let doomYear6 = a6 + b6 + Number(doomYear5);


let doomMatchOne6;
let doomMatchTwo6;
let doomAltResult6;

if (doomYear6 >= 10) {
    doomMatchOne6 = Math.floor(doomYear6 / 10);
    doomMatchTwo6 = doomYear6 - (doomMatchOne6 * 10)
    doomAltResult6 = doomMatchOne6 + doomMatchTwo6 +Number(doomAltResult5);
    
} else {

    doomAltResult6 = a6 + b6 + Number(doomAltResult5);
}


let y6 = document.getElementById('year6')
y6.innerHTML = `-- ${doomAltResult6}`



//7

let arrYear7str = Array.from(String(doomYear6), Number);
let arrYear7 = arrYear7str.reduce((sum, current)=>
sum + current
)
let a7 = Math.floor(arrYear7/ 10);
let b7 = arrYear7 - (a7 * 10);
let doomYear7 = a7 + b7 + Number(doomYear6);


let doomMatchOne7;
let doomMatchTwo7;
let doomAltResult7;

if (doomYear7 >= 10) {
    doomMatchOne7 = Math.floor(doomYear7 / 10);
    doomMatchTwo7 = doomYear7 - (doomMatchOne7 * 10)
    doomAltResult7 = doomMatchOne7 + doomMatchTwo7 +Number(doomAltResult6);
    
} else {

    doomAltResult7 = a7 + b7 + Number(doomAltResult6);
}


let y7 = document.getElementById('year7')
y7.innerHTML = `-- ${doomAltResult7}`


//8

let arrYear8str = Array.from(String(doomYear7), Number);
let arrYear8 = arrYear8str.reduce((sum, current)=>
sum + current
)
let a8 = Math.floor(arrYear8/ 10);
let b8 = arrYear8 - (a8 * 10);
let doomYear8 = a8 + b8 + Number(doomYear7);


let doomMatchOne8;
let doomMatchTwo8;
let doomAltResult8;

if (doomYear8 >= 10) {
    doomMatchOne8 = Math.floor(doomYear8 / 10);
    doomMatchTwo8 = doomYear8 - (doomMatchOne8 * 10)
    doomAltResult8 = doomMatchOne8 + doomMatchTwo8 +Number(doomAltResult7);
    
} else {

    doomAltResult8 = a8 + b8 + Number(doomAltResult7);
}


let y8 = document.getElementById('year8')
y8.innerHTML = `-- ${doomAltResult8}`


//9

let arrYear9str = Array.from(String(doomYear8), Number);
let arrYear9 = arrYear9str.reduce((sum, current)=>
sum + current
)
let a9 = Math.floor(arrYear9/ 10);
let b9 = arrYear9 - (a9 * 10);
let doomYear9 = a9 + b9 + Number(doomYear8);


let doomMatchOne9;
let doomMatchTwo9;
let doomAltResult9;

if (doomYear9 >= 10) {
    doomMatchOne9 = Math.floor(doomYear9 / 10);
    doomMatchTwo9 = doomYear9 - (doomMatchOne9 * 10)
    doomAltResult9 = doomMatchOne9 + doomMatchTwo9 +Number(doomAltResult8);
    
} else {

    doomAltResult9 = a9 + b9 + Number(doomAltResult8);
}


let y9 = document.getElementById('year9')
y9.innerHTML = `-- ${doomAltResult9}`


//10

let arrYear10str = Array.from(String(doomYear9), Number);
let arrYear10 = arrYear10str.reduce((sum, current)=>
sum + current
)
let a10 = Math.floor(arrYear10/ 10);
let b10 = arrYear10 - (a10 * 10);
let doomYear10 = a10 + b10 + Number(doomYear9);


let doomMatchOne10;
let doomMatchTwo10;
let doomAltResult10;

if (doomYear10 >= 10) {
    doomMatchOne10 = Math.floor(doomYear10 / 10);
    doomMatchTwo10 = doomYear10 - (doomMatchOne10 * 10)
    doomAltResult10 = doomMatchOne10 + doomMatchTwo10 +Number(doomAltResult9);
    
} else {

    doomAltResult10 = a10 + b10 + Number(doomAltResult9);
}


let y10 = document.getElementById('year10')
y10.innerHTML = `-- ${doomAltResult10}`

//11

let arrYear11str = Array.from(String(doomYear10), Number);
let arrYear11 = arrYear11str.reduce((sum, current)=>
sum + current
)
let a11 = Math.floor(arrYear11/ 10);
let b11 = arrYear11 - (a11 * 10);
let doomYear11 = a11 + b11 + Number(doomYear10);


let doomMatchOne11;
let doomMatchTwo11;
let doomAltResult11;

if (doomYear11 >= 10) {
    doomMatchOne11 = Math.floor(doomYear11 / 10);
    doomMatchTwo11 = doomYear11 - (doomMatchOne11 * 10)
    doomAltResult11 = doomMatchOne11 + doomMatchTwo11 +Number(doomAltResult10);
    
} else {

    doomAltResult11 = a11 + b11 + Number(doomAltResult10);
}


let y11 = document.getElementById('year11')
y11.innerHTML = `-- ${doomAltResult11}`

//12

let arrYear12str = Array.from(String(doomYear11), Number);
let arrYear12 = arrYear12str.reduce((sum, current)=>
sum + current
)
let a12 = Math.floor(arrYear11/ 10);
let b12 = arrYear12 - (a12 * 10);
let doomYear12 = a12 + b12 + Number(doomYear11);


let doomMatchOne12;
let doomMatchTwo12;
let doomAltResult12;

if (doomYear12 >= 10) {
    doomMatchOne12 = Math.floor(doomYear12 / 10);
    doomMatchTwo12 = doomYear12 - (doomMatchOne12 * 10)
    doomAltResult12 = doomMatchOne12 + doomMatchTwo12 +Number(doomAltResult11);
    
} else {

    doomAltResult12 = a12 + b12 + Number(doomAltResult11);
}


let y12 = document.getElementById('year12')
y12.innerHTML = `-- ${doomAltResult12}`

//13

let arrYear13str = Array.from(String(doomYear12), Number);
let arrYear13 = arrYear13str.reduce((sum, current)=>
sum + current
)
let a13 = Math.floor(arrYear13/ 10);
let b13 = arrYear13 - (a13 * 10);
let doomYear13 = a13 + b13 + Number(doomYear12);


let doomMatchOne13;
let doomMatchTwo13;
let doomAltResult13;

if (doomYear13 >= 10) {
    doomMatchOne13 = Math.floor(doomYear13 / 10);
    doomMatchTwo13 = doomYear13 - (doomMatchOne13 * 10)
    doomAltResult13 = doomMatchOne13 + doomMatchTwo13 +Number(doomAltResult12);
    
} else {

    doomAltResult13 = a13 + b13 + Number(doomAltResult12);
}


let y13 = document.getElementById('year13')
y13.innerHTML = `-- ${doomAltResult13}`

//14

let arrYear14str = Array.from(String(doomYear13), Number);
let arrYear14 = arrYear14str.reduce((sum, current)=>
sum + current
)
let a14 = Math.floor(arrYear14/ 10);
let b14 = arrYear14 - (a14 * 10);
let doomYear14 = a14 + b14 + Number(doomYear13);


let doomMatchOne14;
let doomMatchTwo14;
let doomAltResult14;

if (doomYear14 >= 10) {
    doomMatchOne14 = Math.floor(doomYear14 / 10);
    doomMatchTwo14 = doomYear14 - (doomMatchOne14 * 10)
    doomAltResult14 = doomMatchOne14 + doomMatchTwo14 +Number(doomAltResult13);
    
} else {

    doomAltResult14 = a14 + b14 + Number(doomAltResult13);
}


let y14 = document.getElementById('year14')
y14.innerHTML = `-- ${doomAltResult14}`

//15

let arrYear15str = Array.from(String(doomYear14), Number);
let arrYear15 = arrYear15str.reduce((sum, current)=>
sum + current
)
let a15 = Math.floor(arrYear15/ 10);
let b15 = arrYear15 - (a15 * 10);
let doomYear15 = a15 + b15 + Number(doomYear14);


let doomMatchOne15;
let doomMatchTwo15;
let doomAltResult15;

if (doomYear15 >= 10) {
    doomMatchOne15 = Math.floor(doomYear15 / 10);
    doomMatchTwo15 = doomYear15 - (doomMatchOne15 * 10)
    doomAltResult15 = doomMatchOne15 + doomMatchTwo15 +Number(doomAltResult14);
    
} else {

    doomAltResult15 = a15 + b15 + Number(doomAltResult14);
}


let y15 = document.getElementById('year15')
y15.innerHTML = `-- ${doomAltResult15}`

//16

let arrYear16str = Array.from(String(doomYear15), Number);
let arrYear16 = arrYear16str.reduce((sum, current)=>
sum + current
)
let a16 = Math.floor(arrYear16/ 10);
let b16 = arrYear16 - (a16 * 10);
let doomYear16 = a16 + b16 + Number(doomYear15);


let doomMatchOne16;
let doomMatchTwo16;
let doomAltResult16;

if (doomYear16 >= 10) {
    doomMatchOne16 = Math.floor(doomYear16 / 10);
    doomMatchTwo16 = doomYear16 - (doomMatchOne16 * 10)
    doomAltResult16 = doomMatchOne2 + doomMatchTwo16 +Number(doomAltResult15);
    
} else {

    doomAltResult16 = a16 + b16 + Number(doomAltResult15);
}


let y16 = document.getElementById('year16')
y16.innerHTML = `-- ${doomAltResult16}`

//17

let arrYear17str = Array.from(String(doomYear16), Number);
let arrYear17 = arrYear17str.reduce((sum, current)=>
sum + current
)
let a17 = Math.floor(arrYear17/ 10);
let b17 = arrYear17 - (a17 * 10);
let doomYear17 = a17 + b17 + Number(doomYear16);


let doomMatchOne17;
let doomMatchTwo17;
let doomAltResult17;

if (doomYear17 >= 10) {
    doomMatchOne17 = Math.floor(doomYear17 / 10);
    doomMatchTwo17 = doomYear17 - (doomMatchOne17 * 10)
    doomAltResult17 = doomMatchOne17 + doomMatchTwo17 +Number(doomAltResult16);
    
} else {

    doomAltResult17 = a17 + b17 + Number(doomAltResult16);
}


let y17 = document.getElementById('year17')
y17.innerHTML = `-- ${doomAltResult17}`

//18

let arrYear18str = Array.from(String(doomYear17), Number);
let arrYear18 = arrYear18str.reduce((sum, current)=>
sum + current
)
let a18 = Math.floor(arrYear18/ 10);
let b18 = arrYear18 - (a18 * 10);
let doomYear18 = a18 + b18 + Number(doomYear17);


let doomMatchOne18;
let doomMatchTwo18;
let doomAltResult18;

if (doomYear18 >= 10) {
    doomMatchOne18 = Math.floor(doomYear18 / 10);
    doomMatchTwo18 = doomYear18 - (doomMatchOne18 * 10)
    doomAltResult18 = doomMatchOne18 + doomMatchTwo18 +Number(doomAltResult17);
    
} else {

    doomAltResult18 = a18 + b18 + Number(doomAltResult17);
}


let y18 = document.getElementById('year18')
y18.innerHTML = `-- ${doomAltResult18}`

//19

let arrYear19str = Array.from(String(doomYear18), Number);
let arrYear19 = arrYear19str.reduce((sum, current)=>
sum + current
)
let a19 = Math.floor(arrYear19/ 10);
let b19 = arrYear19 - (a19 * 10);
let doomYear19 = a19 + b19 + Number(doomYear18);


let doomMatchOne19;
let doomMatchTwo19;
let doomAltResult19;

if (doomYear19 >= 10) {
    doomMatchOne19 = Math.floor(doomYear19 / 10);
    doomMatchTwo19 = doomYear19 - (doomMatchOne19 * 10)
    doomAltResult19 = doomMatchOne19 + doomMatchTwo19 +Number(doomAltResult18);
    
} else {

    doomAltResult19 = a19 + b19 + Number(doomAltResult18);
}


let y19 = document.getElementById('year19')
y19.innerHTML = `-- ${doomAltResult19}`

//20

let arrYear20str = Array.from(String(doomYear19), Number);
let arrYear20 = arrYear20str.reduce((sum, current)=>
sum + current
)
let a20 = Math.floor(arrYear20/ 10);
let b20 = arrYear19 - (a20 * 10);
let doomYear20 = a20 + b20 + Number(doomYear19);


let doomMatchOne20;
let doomMatchTwo20;
let doomAltResult20;

if (doomYear20 >= 10) {
    doomMatchOne20 = Math.floor(doomYear20 / 10);
    doomMatchTwo20 = doomYear20 - (doomMatchOne20 * 10)
    doomAltResult20 = doomMatchOne20 + doomMatchTwo20 +Number(doomAltResult19);
    
} else {

    doomAltResult20 = a20 + b20 + Number(doomAltResult19);
}


let y20 = document.getElementById('year20')
y20.innerHTML = `-- ${doomAltResult20}`

}
