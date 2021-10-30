/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

//BP
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

//MS
function betterThanAverage2(classPoints, yourPoints) {
  const sumClassPoints = classPoints.reduce((t,c) => t + c, 0);
  const average = sumClassPoints / classPoints.length;
  // const myLvl = (sumClassPoints + yourPoints) / classPoints.length + 1
  return yourPoints > average;
}
betterThanAverage([2, 4, 6], 5)
betterThanAverage2([2, 4, 6], 5)
