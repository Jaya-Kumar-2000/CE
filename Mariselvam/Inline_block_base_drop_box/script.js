function RomantoInt(s) {

    let arr = s.split("IV");

    console.log(arr)

    // return count

};


RomantoInt("VIVL");

 /**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {

    let a = 0;
    let b = 0;
    let c = 0;

    for (let i = 0; i < s.length; i++) {


        switch (s[i]) {
            case "(":
                a -= 1
                break

            case ")":
                a += 1
                break


            case "[":
                b -= 1
                break


            case "]":
                b += 1
                break


            case "{":
                c -= 1
                break


            case "}":
                c += 1
                break



        }

        if(i>=1){
            if (((a < 0 && b < 0) || b > 0) || ((a < 0 && c < 0) || c > 0)) {
                return false;
    
    
            }
    
            if (((b < 0 && a < 0) || a > 0) || ((b < 0 && c < 0) || c > 0)) {
                return false;
    
    
            }
    
            if (((c < 0 && b < 0)  || b > 0) || ((c < 0 && a < 0) || c > 0)) {
                return false;
    
            }
    
            else {
                return true
            }
        }
    }



};

console.log(isValid("(]"));