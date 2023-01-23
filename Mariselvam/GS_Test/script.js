

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



// 1.


