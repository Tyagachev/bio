function Go() {
    let secondName = document.getElementById ('second').value
    let firstName = document.getElementById ('first').value
    let personFather = document.getElementById ('person').value

    let user = {
        firstName:firstName,
        secondName:secondName,
        personFather:personFather,
    };


    console.log (user.secondName)
    console.log (user.firstName)
    console.log (user.personFather)

    let arrFirst =[user];
    let secondNameFilter = user.secondName.replace (/[а,А, о,О, э,Э, е,Е, и,И, ы,Ы, у,У, ё,Ё, ю,Ю, я,Я]/gi, '');
    let firstNameFilter = user.firstName.replace (/[а,А, о,О, э,Э, е,Е, и,И, ы,Ы, у,У, ё,Ё, ю,Ю, я,Я]/gi, '');
    let personFatherFilter = user.personFather.replace (/[а,А, о,О, э,Э, е,Е, и,И, ы,Ы, у,У, ё,Ё, ю,Ю, я,Я]/gi, '');


    let secondNameNoFilter = user.secondName;
    let firstNameNoFilter = user.firstName;
    let personFatherNoFilter = user.personFather;

    console.log (secondNameFilter)
    console.log (firstNameFilter)
    console.log (personFatherFilter)

    var symbolsMap = {
    "а": "1",
    "б": "2",
    "в": "3",
    "г": "4",
    "д": "5",
    "е": "6",
    "ё": "7",
    "ж": "8",
    "з": "9",
    "и": "1",
    "й": "2",
    "к": "3",
    "л": "4",
    "м": "5",
    "н": "6",
    "о": "7",
    "п": "8",
    "р": "9",
    "с": "1",
    "т": "2",
    "у": "3",
    "ф": "4",
    "х": "5",
    "ц": "6",
    "ч": "7",
    "ш": "8",
    "щ": "9",
    "ъ": "1",
    "ы": "2",
    "ь": "3",
    "э": "4",
    "ю": "5",
    "я": "6",
}

var strSecondName = secondNameFilter;
var numbersSecondName = strSecondName.replace(/./gi,$0=>symbolsMap[$0.toLowerCase()]||$0);
var strFirstName = firstNameFilter ;
var numbersFirstName = strFirstName.replace(/./gi,$0=>symbolsMap[$0.toLowerCase()]||$0);
var strPersonFather = personFatherFilter;
var numbersPersonFather = strPersonFather.replace(/./gi,$0=>symbolsMap[$0.toLowerCase()]||$0);

var sumSecondName = secondNameNoFilter;
var allNumSecondName = sumSecondName.replace(/./gi,$0=>symbolsMap[$0.toLowerCase()]||$0);
var sumFirstName = firstNameNoFilter ;
var allNumFirstName = sumFirstName.replace(/./gi,$0=>symbolsMap[$0.toLowerCase()]||$0);
var sumPersonFather = personFatherNoFilter;
var allNumPersonFather = sumPersonFather.replace(/./gi,$0=>symbolsMap[$0.toLowerCase()]||$0);

console.log(numbersSecondName);
console.log(numbersFirstName);
console.log(numbersPersonFather);

console.log(allNumSecondName);
console.log(allNumFirstName);
console.log(allNumPersonFather);


let arrSecondName = Array.from(allNumSecondName).map(Number);
let arrFirstName = Array.from(allNumFirstName).map(Number);

const redSecondName = arrSecondName.reduce((sum, current)=>
sum + current
)

const redFirstName = arrFirstName.reduce((sum, current)=>
sum + current
)

console.log(arrSecondName);
console.log(arrFirstName);
console.log(redSecondName);



let secondNameId = document.getElementById('secondId');
secondNameId.innerHTML=`Фамилия: ${secondName}`
let firstNameId = document.getElementById('firstId');
firstNameId.innerHTML=`Имя: ${firstName}`
let personFatherId = document.getElementById('personId');
personFatherId.innerHTML=`Отчество: ${personFather}`


let secondNameIdReplace = document.getElementById('secondIdReplace');
secondNameIdReplace.innerHTML=`Фамилия: ${secondNameFilter}`
let firstNameIdReplace = document.getElementById('firstIdReplace');
firstNameIdReplace.innerHTML=`Имя: ${firstNameFilter}`
let personFatherIdReplace = document.getElementById('personIdReplace');
personFatherIdReplace.innerHTML=`Отчество: ${personFatherFilter}`


let secondNameIdNumber = document.getElementById('secondIdNumber');
secondNameIdNumber.innerHTML=`Фамилия: ${numbersSecondName}`
let firstNameIdNumber = document.getElementById('firstIdNumber');
firstNameIdNumber.innerHTML=`Имя: ${numbersFirstName}`
let personFatherIdNumber = document.getElementById('personIdNumber');
personFatherIdNumber.innerHTML=`Отчество: ${numbersPersonFather}`

let fTSecondNameID = document.getElementById('redSecondNameID');
fTSecondNameID.innerHTML=`Массив чисел ФТ: ${arrSecondName} || Сумма:${redSecondName}`
let iTFirstNameID = document.getElementById('redFirstNameID');
iTFirstNameID.innerHTML=`Массив чисел ИТ: ${arrFirstName} || Сумма:${redFirstName}`

}