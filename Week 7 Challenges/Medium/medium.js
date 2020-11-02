// Challenge medium
var words = prompt("Enter a string")

if(words === words.toUpperCase()){
    console.log("shouting");
} else if (words === words.toLowerCase()){
    console.log("Whispering");
} else{
    console.log("Speaking Normally");
}
