const arr = [2, 3, 4, 0, "a", 7, 8];

let even = 0,
  odd = 0;
numOfNull = 0;

arr.forEach((item) => {
  if (typeof item === "number" && item !== 0) {
    if (item % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  if (item === 0) {
    numOfNull++;
  }
});

console.log(
  `Четных элементов - ${even}, нечетных - ${odd}, количество нулей - ${numOfNull}  `
);
