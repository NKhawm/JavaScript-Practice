
/*function ftext()
{
  var n = parseInt(document.getElementById('text').value)
  var sum =10;
  sum= sum + n;
  document.getElementById('demo').innerHTML=sum;

}
//return value
function sum (a,b)
{
  var sum;
  sum = a+b;
  return sum;
}
var result = sum(12,23)
document.write(result)*/


//local variables
/*function myFunction(){
  var carName = 'Mini Cooper'
  carName = 'Mini Copper'+'Series 5'
}
document.write(carName);*/


//Reverse a number *try at home again***


function reverseNum(number) {
  var result = 0,
    counter = 0;
  for (i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
    counter = i % 10;
    result = result * 10 + counter;
  }
  return result;
}

document.write(reverseNum(547793));