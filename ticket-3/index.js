function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
 
    let digit = number[i];
    if (digit === "9") {
      count++;
    }
  }

  return count;
}

console.log(countNumberOfNinesInNumber("999909"));