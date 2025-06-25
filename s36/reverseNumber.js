// let num = 123;
// let hundredsDigit = num%100;
// let tensDigit = ;
// let unitsDigit = ;

function reverseNumber(num) {
  if (num >= 0 && num <= 9) {
    return num;
  }
  let reverseNum = 0;
  while (num != 0) {
    reverseNum = reverseNum * 10 + (num % 10); //3, 32, 321
    //num = parseInt(num / 10); //12, 1
    num = Math.floor(num / 10); //12, 1
  }
  return reverseNum;
}

console.log(reverseNumber(123));



function revNum(num){
  if(num>=0 && num<=9){
    return num;
  }
  let revNum = 0;
  while(num!=0){
    revNum = revNum*10 + (num%10);
    num = Math.floor(num/10);
  }
  return revNum;
}
console.log(revNum(23098));