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
y1.innerHTML = `${doomYear1}`


//2

let arrYear2str = Array.from(String(doomYear1), Number);
let arrYear2 = arrYear2str.reduce((sum, current)=>
sum + current
)
let a2 = Math.floor(arrYear2/ 10);
let b2 = arrYear2 - (a2 * 10);
let doomYear2 = a2 + b2 + Number(doomYear1);

let y2 = document.getElementById('year2')
y2.innerHTML = `${doomYear2}`

console.log (arrYear2)


//3

let arrYear3str = Array.from(String(doomYear2), Number);
let arrYear3 = arrYear3str.reduce((sum, current)=>
sum + current
)
let a3 = Math.floor(arrYear3/ 10);
let b3 = arrYear3 - (a3 * 10);
let doomYear3 = a3 + b3 + Number(doomYear2);

let y3 = document.getElementById('year3')
y3.innerHTML = `${doomYear3}`

console.log (arrYear3)


//4

let arrYear4str = Array.from(String(doomYear3), Number);
let arrYear4 = arrYear4str.reduce((sum, current)=>
sum + current
)
let a4 = Math.floor(arrYear4/ 10);
let b4 = arrYear4 - (a4 * 10);
let doomYear4 = a4 + b4 + Number(doomYear3);

let y4 = document.getElementById('year4')
y4.innerHTML = `${doomYear4}`


//5

let arrYear5str = Array.from(String(doomYear4), Number);
let arrYear5 = arrYear5str.reduce((sum, current)=>
sum + current
)
let a5 = Math.floor(arrYear5/ 10);
let b5 = arrYear5 - (a5 * 10);
let doomYear5 = a5 + b5 + Number(doomYear4);

let y5 = document.getElementById('year5')
y5.innerHTML = `${doomYear5}`

//6

let arrYear6str = Array.from(String(doomYear5), Number);
let arrYear6 = arrYear6str.reduce((sum, current)=>
sum + current
)
let a6 = Math.floor(arrYear6/ 10);
let b6 = arrYear6 - (a6 * 10);
let doomYear6 = a6 + b6 + Number(doomYear5);

let y6 = document.getElementById('year6')
y6.innerHTML = `${doomYear6}`



//7

let arrYear7str = Array.from(String(doomYear6), Number);
let arrYear7 = arrYear7str.reduce((sum, current)=>
sum + current
)
let a7 = Math.floor(arrYear7/ 10);
let b7 = arrYear7 - (a7 * 10);
let doomYear7 = a7 + b7 + Number(doomYear6);

let y7 = document.getElementById('year7')
y7.innerHTML = `${doomYear7}`


//8

let arrYear8str = Array.from(String(doomYear7), Number);
let arrYear8 = arrYear8str.reduce((sum, current)=>
sum + current
)
let a8 = Math.floor(arrYear8/ 10);
let b8 = arrYear8 - (a8 * 10);
let doomYear8 = a8 + b8 + Number(doomYear7);

let y8 = document.getElementById('year8')
y8.innerHTML = `${doomYear8}`


//9

let arrYear9str = Array.from(String(doomYear8), Number);
let arrYear9 = arrYear9str.reduce((sum, current)=>
sum + current
)
let a9 = Math.floor(arrYear9/ 10);
let b9 = arrYear9 - (a9 * 10);
let doomYear9 = a9 + b9 + Number(doomYear8);

let y9 = document.getElementById('year9')
y9.innerHTML = `${doomYear9}`


//10

let arrYear10str = Array.from(String(doomYear9), Number);
let arrYear10 = arrYear10str.reduce((sum, current)=>
sum + current
)
let a10 = Math.floor(arrYear10/ 10);
let b10 = arrYear10 - (a10 * 10);
let doomYear10 = a10 + b10 + Number(doomYear9);

let y10 = document.getElementById('year10')
y10.innerHTML = `${doomYear10}`

//11

let arrYear11str = Array.from(String(doomYear10), Number);
let arrYear11 = arrYear11str.reduce((sum, current)=>
sum + current
)
let a11 = Math.floor(arrYear11/ 10);
let b11 = arrYear11 - (a11 * 10);
let doomYear11 = a11 + b11 + Number(doomYear10);

let y11 = document.getElementById('year11')
y11.innerHTML = `${doomYear11}`

//12

let arrYear12str = Array.from(String(doomYear11), Number);
let arrYear12 = arrYear12str.reduce((sum, current)=>
sum + current
)
let a12 = Math.floor(arrYear11/ 10);
let b12 = arrYear12 - (a12 * 10);
let doomYear12 = a12 + b12 + Number(doomYear11);

let y12 = document.getElementById('year12')
y12.innerHTML = `${doomYear12}`

//13

let arrYear13str = Array.from(String(doomYear12), Number);
let arrYear13 = arrYear13str.reduce((sum, current)=>
sum + current
)
let a13 = Math.floor(arrYear13/ 10);
let b13 = arrYear13 - (a13 * 10);
let doomYear13 = a13 + b13 + Number(doomYear12);

let y13 = document.getElementById('year13')
y13.innerHTML = `${doomYear13}`

//14

let arrYear14str = Array.from(String(doomYear13), Number);
let arrYear14 = arrYear14str.reduce((sum, current)=>
sum + current
)
let a14 = Math.floor(arrYear14/ 10);
let b14 = arrYear14 - (a14 * 10);
let doomYear14 = a14 + b14 + Number(doomYear13);

let y14 = document.getElementById('year14')
y14.innerHTML = `${doomYear14}`

//15

let arrYear15str = Array.from(String(doomYear14), Number);
let arrYear15 = arrYear15str.reduce((sum, current)=>
sum + current
)
let a15 = Math.floor(arrYear15/ 10);
let b15 = arrYear15 - (a15 * 10);
let doomYear15 = a15 + b15 + Number(doomYear14);

let y15 = document.getElementById('year15')
y15.innerHTML = `${doomYear15}`

//16

let arrYear16str = Array.from(String(doomYear15), Number);
let arrYear16 = arrYear16str.reduce((sum, current)=>
sum + current
)
let a16 = Math.floor(arrYear16/ 10);
let b16 = arrYear16 - (a16 * 10);
let doomYear16 = a16 + b16 + Number(doomYear15);

let y16 = document.getElementById('year16')
y16.innerHTML = `${doomYear16}`

//17

let arrYear17str = Array.from(String(doomYear16), Number);
let arrYear17 = arrYear17str.reduce((sum, current)=>
sum + current
)
let a17 = Math.floor(arrYear17/ 10);
let b17 = arrYear17 - (a17 * 10);
let doomYear17 = a17 + b17 + Number(doomYear16);

let y17 = document.getElementById('year17')
y17.innerHTML = `${doomYear17}`

//18

let arrYear18str = Array.from(String(doomYear17), Number);
let arrYear18 = arrYear18str.reduce((sum, current)=>
sum + current
)
let a18 = Math.floor(arrYear18/ 10);
let b18 = arrYear18 - (a18 * 10);
let doomYear18 = a18 + b18 + Number(doomYear17);

let y18 = document.getElementById('year18')
y18.innerHTML = `${doomYear18}`

//19

let arrYear19str = Array.from(String(doomYear18), Number);
let arrYear19 = arrYear19str.reduce((sum, current)=>
sum + current
)
let a19 = Math.floor(arrYear19/ 10);
let b19 = arrYear19 - (a19 * 10);
let doomYear19 = a19 + b19 + Number(doomYear18);

let y19 = document.getElementById('year19')
y19.innerHTML = `${doomYear19}`

//20

let arrYear20str = Array.from(String(doomYear19), Number);
let arrYear20 = arrYear20str.reduce((sum, current)=>
sum + current
)
let a20 = Math.floor(arrYear20/ 10);
let b20 = arrYear19 - (a20 * 10);
let doomYear20 = a20 + b20 + Number(doomYear19);

let y20 = document.getElementById('year20')
y20.innerHTML = `${doomYear20}`

}
