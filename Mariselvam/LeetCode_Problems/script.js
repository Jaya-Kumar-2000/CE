// function createTable() {
//     rn = window.prompt("Input number of rows", 1);
//     cn = window.prompt("Input number of columns", 1);

//     for (var r = 0; r < parseInt(rn, 10); r++) {
//         var x = document.getElementById('myTable').insertRow(r);
//         for (var c = 0; c < parseInt(cn, 10); c++) {
//             var y = x.insertCell(c);
//             y.innerHTML = "Row-" + r + " Column-" + c;
//         }
//     }
// }



function pyramid() {
    n = window.prompt("Input number", 1);

    usernumber = parseInt(n)

    // let emp =  "";


    for (let i = 1; i <= usernumber; i++) {

        let count = i;

        for (let j = 1; j <= i; j++) {


            // document.write(count," ");

            console.log(document.write(count, " "))
            count = count + (usernumber - j);

        }

        document.write("<br>");


    }

}


function palindrome() {

    // let empty_string = "";

    let value_of_input = (document.querySelector(".input_box").value).toLowerCase();

    let reversed = [...value_of_input].reverse().join("");

    let answer = (reversed == value_of_input) ? alert("true") : alert("false")

}



let Nums = [1, 2, 2, 3];

  let new_arr = [...new Set(Nums)];

  console.log(new_arr)


  
let occurArray = [2, 9, 19, 91, 32, 91, 19, 11];


let obj = {};

for (let i = 0; i < occurArray.length; i++) {

    let count = 0;
    const element1 = occurArray[i];

    for (let j = 0; j < occurArray.length; j++) {
        const element2 = occurArray[j];

        if (element1 == element2) {

            count++;

        }



    }

    obj[element1] = count
    // console.log(element1,count)


}

console.log(obj)



// 8.

function reverseInt(IntVal) {

    let string_val = IntVal.toString();



    let reversed = [...string_val].reverse().join("");

    if(reversed.indexOf("-") == -1){
        let change = parseFloat(reversed)

        console.log(change)
    }


    if (reversed.indexOf("-") != -1) {

        let negative = reversed.replace("-", "")

        reversed_negative = "-" + negative

        console.log(parseInt(reversed_negative))
    }



}

reverseInt(51);
reverseInt(5000);
reverseInt(-501);


// 9.


productFind([3,4,5]);

productFind([2,6,8]);


// productFind([3,4,5]);




function productFind(arr){
    let productArr = [];

    for (let i = 0; i < arr.length; i++) {
        const element1 = arr[i];
    
        for (let j = 0; j < arr.length; j++) {
            const element2 = arr[j]
    
            if(element1 != element2){
    
                productArr.push(element2*element1)
    
            }
    
            
        }
        
    }
    
    console.log([...new Set(productArr)].reverse())
    
}



// 7.

// let oldArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let newArr = [];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


var romanToInt = function (s) {

    let total = 0;

    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    for (let i = 0; i < s.length; i++) {

        if (obj[s[i]] < obj[s[i + 1]]) {
            total += obj[s[i+1]] - obj[s[i]]
        }
        else{
            total += obj[s[i]]
        }
    }

    console.log(total);

};


romanToInt("MCMXCIV");


// Longest_Common_prefix

var longestCommonPrefix = function (strs) {

    let min_str = "";

    let count = strs[0].length;

    let result = "";

    let obj = {};

    for (let i = 0; i < strs.length; i++) {

        if (strs[i].length <= count) {
            min_str = strs[i];
            count = min_str.length;

        }

    }

    console.log(min_str, count);

    for (let i = 0; i < count; i++) {
        // let char = min_str[i];
        let char = `${i}+${min_str[i]}`;
        obj[char] = 0;

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] == min_str[i]) {

                obj[char] += 1
            }
        }

    }

    console.log(obj)
    for (let i = 0; i < count; i++) {
        let char = `${i}+${min_str[i]}`

        console.log(char);

        if (obj[char] == strs.length) {
            result += min_str[i];
        } else {

            i = count
        }
    }


    return result;



};


longestCommonPrefix(["flower","flow","flight"])