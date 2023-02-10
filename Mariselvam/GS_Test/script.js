

function _(id) {
    return document.getElementById(id)
}
// Question_5 : 

let str = _("Superstring").value;

let refstr = _("ref_str").value;

console.log(str)

function Count_char(str, refstr) {

    let count = 0;

    let obj = {};

    let lower_caseString = str.toLowerCase();

    let lower_case_refstr = refstr.toLowerCase().replace(" ", "");

    for (let i = 0; i < lower_case_refstr.length; i++) {

        const element = lower_case_refstr[i];

        for (let j = 0; j < lower_caseString.length; j++) {
            const element2 = lower_caseString[j];

            if (element == element2) {
                count++;
            }

        }

        obj[element] = count;

        count = 0;

    }

    console.log(obj)



}

Count_char("Mariselvam", "jaya")

// document.querySelector(".Check_count").addEventListener("click",Count_char(str,refstr));




// 3.

// Find_superStrings


function find_superStrings(X, Y) {


    let str = Y.join("");

    let Ystr = [... new Set(str)].join("")

    let count = 0;

    let total = 0;


    for (let i = 0; i < X.length; i++) {

        count = 0;

        var element = X[i];


        let Xstr = [... new Set(element)].join("");


        for (let j = 0; j < Xstr.length; j++) {

            const element2 = Xstr[j];

            !Ystr.includes(element2) ? "" : count += 1;

            if(Ystr.length == count){
                total+=1;
                
            }


        }
    }

    console.log(total)




}


find_superStrings(["ceo", "alco", "caaeio", "ceai"], ["ce", "oc", "ceo"])




// 2.


function Equal_sum(arr) {

    let count = 0;

    let After_half_count = 0;

    let newArr = [];

    let secarr = [];





    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        count += element;
    }

    let halfValue = count / 2;

    for (let j = 0; j < arr.length; j++) {
        const element2 = arr[j];


        if (After_half_count != halfValue) {

            After_half_count += element2

            newArr.push(element2);
        }
        else{

            secarr.push(element2);
        }





    }
    console.log(newArr,secarr)


}



Equal_sum([1, 2, 3, 5, 1]);



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

    console.log("Sorted_Arr",arr)
}
insertionSort([8, 4, 10, 2, 5, 13], 6)


// 2.


