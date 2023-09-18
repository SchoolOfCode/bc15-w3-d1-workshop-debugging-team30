function countNumberOfNinesInNumber(number) {


  for (let i = 0; i < number.length; i++) {
<<<<<<< HEAD
    let count = 0;
    let digit = number[i];
    if (digit === "9") {
       return count + 5;
=======
 
    let digit = number[i];
    if (digit === "9") {
      count++;
>>>>>>> 9f960c2a6887937f1eff189f4391b38ebdb241de
    }
  }
}
<<<<<<< HEAD
console.log(countNumberOfNinesInNumber("999"));

=======

console.log(countNumberOfNinesInNumber("999909"));
>>>>>>> 9f960c2a6887937f1eff189f4391b38ebdb241de
