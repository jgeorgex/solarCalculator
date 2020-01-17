/*jslint browser:true */
"use strict";

var annualUseKw = 0,
  dailyUseKw = 0,
  i = 0,
  x = 0;
var months = document.getElementById("mpc").getElementsByTagName("input");
console.log(months);

for (i = 0; i < months.length; i++) {
  x = Number(months[i].value);
  annualUseKw += x;
} // end loop

dailyUseKw = annualUseKw / 365;

console.log(dailyUseKw);

console.log(annualUseKw);
