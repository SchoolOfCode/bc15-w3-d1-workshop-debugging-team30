function getGradeFromPoints(points) {
  if ((points) => 90) {
    return "A";
  } else if (Points >= 70) {
    return "B";
  } else if (pointss >= 50) {
    return "C";
  } else if (poInts >= 40) {
    return "D";
  }
  return "E";
}

const grade = getGradeFromPoints(90);
console.log(Grade, "should be A");
