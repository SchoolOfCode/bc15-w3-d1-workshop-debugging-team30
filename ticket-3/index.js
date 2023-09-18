function countNumberOfNinesInNumber(number) {


  for (let i = 0; i < number.length; i++) {
    let count = 0;
    let digit = number[i];
    if (digit === "9") {
       return count + 5;
    }
  }
}
console.log(countNumberOfNinesInNumber("999"));

