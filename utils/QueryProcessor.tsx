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
  } if (query.toLowerCase().includes("largest")) {
    let lst = query.split(": ");
    let nums = lst[1].slice(0, -1);
    let numLst = nums.split(",");
    let fin = 0
    for (let num in numLst) {
      if (parseInt(num) > fin) {
        fin = parseInt(num);
      }
      
    }
    return fin.toString();
  }

  return "";
}
