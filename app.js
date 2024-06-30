//Write a JavaScript program to remove a character at the specified 
//position in a given string and return the modified string.

function remove(str , pos){    //str=input string and // pos = position charactor to remove
    return str.slice(0 , pos)+str.slice(pos + 1);  
}

var string = "Hello World";
var position = 5    ;
var modifiedstring = remove(string , position);
console.log(modifiedstring);
