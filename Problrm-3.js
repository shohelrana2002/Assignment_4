function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  let item = [];
  for (let arrays of array) {
    if (typeof arrays === "number" && !isNaN(arrays)) {
      item.push(arrays);
    }
  }
  return item;
}

const result = deleteInvalids(["1", { num: 2 }, NaN]);
console.log(result);
