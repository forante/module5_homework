// Задание 1
let inputValue = prompt("Введите значение");

inputValue = +inputValue;

if (typeof inputValue === "number" && !Number.isNaN(inputValue)) {
  if (inputValue % 2 === 0) {
    console.log(`Число ${inputValue} - четное`);
  } else {
    console.log(`Число ${inputValue} - нечетное`);
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}
