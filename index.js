function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    return "Invalid Number";
  }
  const ticketSalePer = 120;
  const costDaily = 500 + 50 * 8;
  const totalCost = costDaily;
  const result = ticketSalePer * ticketSale - totalCost;
  return result;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const gdNameLast = ["a", "y", "i", "e", "o", "u", "w"];
  const convert = name[name.length - 1].toLowerCase();
  if (gdNameLast.includes(convert)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

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

function password(obj) {
  if (obj.birthYear <= 1000) {
    return "invalid";
  }
  const userName = obj.name;
  const birthDate = obj.birthYear;
  const website = obj.siteName;

  const fullName =
    website.charAt(0).toUpperCase() +
    website.slice(1) +
    "#" +
    userName +
    "@" +
    birthDate;
  return fullName;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  const income = arr.reduce((tax, payment) => tax + payment);
  const totalTax = arr.reduce((tax, payment) => {
    if (payment > 3000) {
      tax += 0.2 * payment;
    }
    return tax;
  });
  const saveTaka = income - totalTax - livingCost;
  if (saveTaka > 0) {
    return saveTaka;
  } else {
    return "earn more";
  }
}
