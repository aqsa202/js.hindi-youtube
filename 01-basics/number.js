const score = 400

const balance = new Number(30)
console.log(balance);
console.log(score);
console.log(balance.toString().length);
console.log(balance.toFixed(3));

const othernumber = 134.6568
console.log(othernumber.toPrecision(3));

const hunderds = 100000000
console.log(hunderds.toLocaleString('en-IN'));

//************** */ Math**********
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,78,135));
console.log(Math.max(4,67,56,445));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
const min = 10 
const max = 20
console.log (Math.floor(Math.random()* (max - min + 1) ) + min)