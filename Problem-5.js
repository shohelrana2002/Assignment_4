// function monthlySavings(arr, livingCost) {
//   if (!Array.isArray(arr) || typeof livingCost !== "number") {
//     return "invalid input";
//   }
//   const income = arr.reduce((tax, payment) => tax + payment);
//   const totalTax = arr.reduce((tax, payment) => {
//     if (payment > 3000) {
//       tax += 0.2 * payment;
//     }
//     return tax;
//   });
//   const saveTaka = income - totalTax - livingCost;
//   if (saveTaka < 0) {
//     return saveTaka;
//   } else {
//     return "earn more";
//   }
// }
// console.log(monthlySavings[(1000, 2000, 2500)], 5000);

function monthlySavings(arr, livingCost) {
  let sum = 0;
  if (!Array.isArray(arr) == true && typeof livingCost !== "number") {
    return "invalid";
  }
  for (let income of arr) {
    if (income >= 300) {
      income = income * 0.8;
      sum += income;
    }
    sum += income;
  }
  let saveTaka = sum - livingCost;
  if (saveTaka >= 0) {
    return saveTaka;
  } else {
    return "earn more";
  }
}

const total = monthlySavings([1000, 2000, 2500], 5000);
console.log(total);
