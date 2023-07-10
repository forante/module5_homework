let x;
let type = typeof x;

switch (type) {
  case "number":
    console.log("x - число");
    break;
  case "string":
    console.log("x - строка");
    break;
  case "boolean":
    console.log("x - логический тип");
    break;
  default:
    console.log("Тип x не определён");
    break;
}
