let map = new Map([
  ["apple", "green"],
  ["strawberry", "red"],
  ["blueberry", "blue"],
]);

for (let key of map.keys()) {
  console.log(`Ключ - ${key}, значение - ${map.get(key)}`);
}
