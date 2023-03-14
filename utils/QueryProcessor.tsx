export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } if (query.toLowerCase().includes("name")) {
    return (
      "esther bae"
    );
  } if (query.toLowerCase().includes("plus")) {
    let lst = query.split(" ")
    let num1 = parseInt(lst[4].slice(0, 2));
    let num2 = parseInt(lst[2]);
    let sum = num1 + num2;
    return (
      sum.toString()
    );
  } if (query.toLowerCase().includes("minus")) {
    let lst = query.split(" ")
    let num1 = parseInt(lst[2]);
    let num2 = parseInt(lst[4].slice(0, 2));
    let minus = num1 - num2;
    return (
      minus.toString()
    );
  } if (query.toLowerCase().includes("multiplied")) {
    let lst = query.split(" ")
    let num1 = parseInt(lst[2]);
    let num2 = parseInt(lst[5].slice(0, 2));
    let mult = num1*num2;
    return (
      mult.toString()
    );
  } if (query.toLowerCase().includes("power")) {
    let lst = query.split(" ")
    let num1 = parseInt(lst[2]);
    let num2 = parseInt(lst[7].slice(0, 2));
    let pow = num1**num2;
    return (
      pow.toString()
    );
  } if (query.toLowerCase().includes("largest")) {
    let lst = query.split(": ");
    let nums = lst[1].slice(0, -1);
    let numLst = nums.split(",");
    let fin = 0
    numLst.forEach(function (value) {
      if (parseInt(value) > fin) {
        fin = parseInt(value);
      }
    }) 
    return fin.toString();
  }

  return "";
}
