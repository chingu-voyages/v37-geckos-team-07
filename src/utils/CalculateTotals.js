function CalculateTotals(array, type) {
  const holder = {};
  const obj2 = [];
  let id = 0;
  let addElement;

  array.forEach((d) => {
    // set filter option according to passed in 'type' parameter
    if (type === 'income') {
      addElement = d.isIncome;
    } else if (type === 'expense') {
      addElement = !d.isIncome;
    } else {
      addElement = true;
    }

    if (addElement) {
      if (Object.prototype.hasOwnProperty.call(holder, d.category)) {
        holder[d.category] += d.amount;
      } else {
        holder[d.category] = d.amount;
      }
    }
  });

  Object.keys(holder).forEach((prop) => {
    obj2.push({ category: prop, value: holder[prop], id });
    id += 1;
  });
  return obj2;
}

function CalculateBalance(arr, type) {
  let result;
  if (type === 'incomes') {
    result = Number(arr.reduce((sum, el) => (el.isIncome ? sum + el.amount : sum), 0));
  } else if (type === 'expenses') {
    result = Number(arr.reduce((sum, el) => (!el.isIncome ? sum + el.amount : sum), 0));
  } else {
    result = Number(arr.reduce((sum, el) => (el.isIncome ? sum + el.amount : sum - el.amount), 0));
  }

  const TotalBalance = Number(result).toFixed(2);

  return TotalBalance;
}

export { CalculateBalance };

export default CalculateTotals;
