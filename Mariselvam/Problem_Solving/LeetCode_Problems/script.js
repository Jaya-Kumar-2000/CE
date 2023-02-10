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

    if (reversed.indexOf("-") == -1) {
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


productFind([3, 4, 5]);

productFind([2, 6, 8]);


// productFind([3,4,5]);




function productFind(arr) {
    let productArr = [];

    for (let i = 0; i < arr.length; i++) {
        const element1 = arr[i];

        for (let j = 0; j < arr.length; j++) {
            const element2 = arr[j]

            if (element1 != element2) {

                productArr.push(element2 * element1)

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
            total += obj[s[i + 1]] - obj[s[i]]
        }
        else {
            total += obj[s[i]]
        }
    }

    console.log(total);

};


romanToInt("MCMXCIV");



// GS_Programs

// 1.


let find_indices = function (arr) {

    document.querySelector(".Flavour_amt").addEventListener("click", () => {
        let Total_val = document.getElementById('Ice_flavor').value;


        let Total_Amount = parseInt(Total_val)


        let share = 0;


        for (let i = 0; i < arr.length; i++) {
            if (share == 1) {
                break
            }
            const element1 = arr[i];

            for (let j = 0; j < arr.length; j++) {
                const element2 = arr[j];

                if ((element1 + element2) == Total_Amount) {

                    console.log(i + 1, j + 1);

                    share = 1;

                    break

                }

            }

        }

    })


}


find_indices([1, 3, 4, 5, 6]);
find_indices([1, 7, 3, 2, 5]);





// 10.



let Find_Pair = function (arr) {

    document.querySelector(".meet_pair_send").addEventListener("click", () => {
        let k = document.getElementById("meet_pair").value;

        console.log(k, arr)

        let arr_val = [];

        if (1 <= k <= 100) {
            for (let i = 0; i < arr.length; i++) {
                const element1 = arr[i];

                if (1 <= k <= 100) {
                    for (let j = 0; j < arr.length; j++) {
                        const element2 = arr[j];


                        if (i < j) {
                            let sumVal = element1 + element2

                            if ((sumVal % k) == 0) {

                                arr_val.push([element1, element2]);
                                // console.log([element1,element2])

                            }
                        }





                    }
                }


            }


            console.log(arr_val)
        }




    })


}


Find_Pair([1, 2, 3, 4, 5, 6]);


// 7.

document.querySelector(".SubSet_Send").addEventListener("click", () => {
    let ele = document.getElementById("SubSet").value;

    let num = [...ele]

    let arr = [];

    arr.push([])



    for (let i = 0; i < num.length; i++) {
        const element1 = num[i];

        arr.push([element1]);

    }

    for (let i = 0; i < num.length; i++) {
        const element1 = num[i];

        for (let j = 0; j < num.length; j++) {
            const element2 = num[j];

            if (i < j) {
                console.log(arr.push([element1, element2]))
            }

        }

    }

    arr.push(num)

    console.log(arr)

})



// 3.
let day_find = function (arr) {
    document.querySelector(".number_Of_days").addEventListener("click", () => {

        let n_number = document.getElementById("size").value;

        let n_days = document.getElementById("day").value;

        let storeArr = []

        console.log(n_number, n_days, arr)


        for (let i = 0; i < parseInt(n_days); i++) {
            storeArr.push(arr[i])

        }

        let ind_val = 0;

        let total = 0;

        let value = 0;

        let count = 0;

        if (storeArr.length % 2 == 0) {

            ind_val = (storeArr.length) / 2

            total = (storeArr[ind_val] + storeArr[ind_val - 1]) / 2

            value = total * 2

        }
        else {
            ind_val = (storeArr.length + 1) / 2

            total = storeArr[ind_val - 1]

            value = total * 2


        }

        for (let i = n_days; i < arr.length; i++) {
            if (arr[i] >= value) {
                count += 1;
            }

        }

        console.log(count)





    })
}





day_find([1, 2, 3, 4, 4])



// 8.

function insertionSort(arr, n) {
    let i = 0;
    let key = 0;
    let j = 0;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 & arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    // console.log("Sorted_Arr",arr);

   document.write("Before_Sort : ",[8, 4, 10, 2, 5, 13],"<br>") 

   document.write("Sorted_Arr : ",arr);
    
}
insertionSort([8, 4, 10, 2, 5, 13], 6)


// 2.

