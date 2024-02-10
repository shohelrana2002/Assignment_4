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

const result = calculateMoney(-1055);
console.log(result);
