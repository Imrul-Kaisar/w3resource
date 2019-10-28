/* 
 * Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
 *
 * */

let check_char = (str, char) => {
	let ctr = 0;
	for(let i=0; i<str.length; i++){
		if(str.charAt(i) === char){
			ctr++;
		}
	}
	return (ctr >= 2 && ctr <= 4);
}

console.log(check_char("JavaScript", "a")); // ture
console.log(check_char("Python", "y")); // false
