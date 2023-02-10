// Taking the all element id //


let lengthEle = document.getElementById('lenValue');

let upperEle = document.getElementById('upperCase');

let lowerEle = document.getElementById('lowerCase');

let numberEle = document.getElementById('numbers');

let symbolEle = document.getElementById('symbols');

let passwordElement = document.getElementById('password');

let finalpasswordElement = document.getElementById('finalPassword');

let generateEle = document.getElementById('generatedPassword');

let clipEle = document.getElementById('clipBoard')

// let trueAray=[];


// get random number,alphaphets and symbols //
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return Math.floor(Math.random() * 9);
    
}

function getRandomSymbel(){
    let symbols = '!@#$%^&*';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// get the random numbers of alphaepts number and symbol

let randomCases = {
    lower : getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
    symbol : getRandomSymbel
}

// give length and check tha boxes
let passwordEle = function(){
    finalpasswordElement.value=="";
    let length = +lengthEle.value;
    // console.log(length);

    let hasUpper = upperEle.checked;
    let hasLower = lowerEle.checked;
    let hasNumber = numberEle.checked;
    let hasSymbol = symbolEle.checked;

    // console.log("checked" + hasLower);

    let arugumentArr = [hasUpper,hasLower,hasNumber,hasSymbol,length];

    // console.log(arugumentarr);

    finalpasswordElement.value = generatePassword(...arugumentArr);

}



// give the checked values to this function//
function generatePassword(upper,lower,number,symbol,length){

    let generatedPassword ="";

    let caseCount = lower+upper+number+symbol;   //count the checked boxes//

    console.log(caseCount);

    let caseArr = [{upper},{lower},{number},{symbol}].filter(item => Object.values(item)[0]);
    
    
     console.log(caseArr);    //store the values of checked boxes in key pair value 
    
    

    console.log(length);

    if (caseCount<=0){   
        alert("choose any cases !") ; // user doesn't give the cases quit the loop
        console.log("quit");
    } 

    else{

        for (let i=0; i<length; i+=caseCount){
            caseArr.forEach(element => {
                console.log(element);
                const funcName = Object.keys(element)[0];
                console.log(funcName);
                 generatedPassword += randomCases[funcName]();          // we store the values of true cases//
                 
            });
            console.log(generatedPassword);
        }

    }

    let finalPassword = generatedPassword.slice(0,length);
    console.log(finalPassword);
    return finalPassword;
}

generateEle.addEventListener('click',passwordEle);



// clipboard ///

let copyText = function(){
     text.select();

    console.log(finalpasswordElement);

    let text = finalpasswordElement.value;

    console.log(text);

    // text.execCommand('copy');
    navigator.clipboard.writeText(text);
}

clipEle.addEventListener('click',copyText);





