function CalculateTotals(array) {
  const holder = {};
  const obj2 = [];
  let id = 0;

  array.forEach((d) => {
    if (Object.prototype.hasOwnProperty.call(holder, d.category)) {
      holder[d.category] += d.amount;
    } else {
      holder[d.category] = d.amount;
    }
  });

  Object.keys(holder).forEach((prop) => {
    obj2.push({ category: prop, value: holder[prop], id });
    id += 1;
  });
  return obj2;
}

export default CalculateTotals;
