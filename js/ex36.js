/* 
* Write a JavaScript program to check if the last digit of the three given positive integers is same.
*/

let check_last_digit = (num1, num2, num3) => {
    if( num1 > 0 && num2 > 0 && num3 > 0){
        return (num1%10 == num2%10 && num2%10 == num3%10 && num3%10 == num1%10);
    } else {
        return false;
    }
}

console.log(check_last_digit(10, 20, 300)); // true
console.log(check_last_digit(10, 25, 30)); // false
console.log(check_last_digit(10, -20, 300)); // false



