/* 
* Write a JavaScript program to create a new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
* 
*/


let upperLower = str => {
    if( str.length > 3 ){
      let first_part = str.substr(0, 3).toLowerCase();
      let last_part = str.substr(3); 
      return first_part + last_part;
    } else {
      return str.toUpperCase(); 
    }
}

console.log(upperLower('KAISAR')); // 'kaiSAR'
console.log(upperLower('Hi'));  // "HI" 