let string = "helloworld please";
let refstring = "help";

for(i=0;i<refstring.length;i++){
    var store = refstring[i];
    var match = new RegExp(store, 'g');
    var count = string.match(match).length;
    console.log(store+":"+count);
}