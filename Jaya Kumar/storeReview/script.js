let str="RamaR".toLocaleLowerCase();
let len = str.length;
let isPlaindrome = false;
for(i=0;i<len;i++){
    if(str[i]!=str[(len-1)-i]){
        isPlaindrome=false;
        break;
    }
    isPlaindrome=true;
}
isPlaindrome ? console.log(`${str} is palindrome`): console.log(`${str} is not a palindrome`); 