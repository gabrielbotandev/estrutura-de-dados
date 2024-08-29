alert("Sales and Commission Calculator");

let amountMozz = parseFloat(prompt("Amount of mozzarella in KG:"));
let amountHam = parseFloat(prompt("Amount of ham in KG:"));
let amountBolog = parseFloat(prompt("Amount of bologna in KG:"));
let amountTurk = parseFloat(prompt("Amount of turkey breast in KG:"));

let totalSales,
  totalCommission,
  valueMozz,
  valueHam,
  valueBolog,
  valueTurk,
  commissionMozz,
  commissionHam,
  commissionBolog,
  commissionTurk = 0;

// calculate total sales

valueMozz = amountMozz * 55.0;
valueHam = amountHam * 33.0;
valueBolog = amountBolog * 23.0;
valueTurk = amountTurk * 85.0;

totalSales = valueMozz + valueHam + valueBolog + valueTurk;

// calculate commission

commissionMozz = valueMozz * 0.07;
commissionHam = valueHam * 0.04;
commissionBolog = valueBolog * 0.08;
commissionTurk = valueTurk * 0.02;

totalCommission =
  commissionMozz + commissionHam + commissionBolog + commissionTurk;

// results

alert(`Your total sales are $${totalSales.toFixed(2)}`);
alert(`Your commission will be $${totalCommission.toFixed(2)}`);
