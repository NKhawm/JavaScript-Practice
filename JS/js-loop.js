//if you want to print 10 times

/*for (i = 0; i <= 9; i = i + 1);
{
  document.write("SAE");
}

//if you want to print 20 times
for (i = 20; i <= 41; i = i + 1) {
  document.write("SAE");
}

for (i = 0; i < 19; i = i + 1) {
  document.write("Hallowen");
}

/*for (i=0 ; i<5; i++)
{
    var n=prompt('enter your name');
    document.write('Hi, goodmorning! How are you'+"<br>" + n +"<br></br>");
}*/


//loop with array

/*var arr=[1,2,3,4,5]
for (i=0; i<4; i++)
{
    document.write(arr + "<br></br>")
}

//Squres of numbers 1-10
for (i=1;i<=10;i++)
{
    sqrt=i*i;
    document.write(sqrt+"<br></br>")
}


//Calculate the factorial of number
fact=1;
for (i=5; i>=1; i--)
{

fact=fact*i
document.write(fact+"<br></br>")
}

//calculate Fibonacci series 0 1 1 2 3 5 8 13 21

n1 = 0;
n2 = 1;
document.write(n1 + "<br></br>");
document.write(n2 + "<br></br>");

for (var i=0;i<9;i++){
    next=n1+n2;
    n1=n2;
    n2=next;
    document.write(next + "<br></br>")
}*/


//even numbers from m to n
/*var m=1
var n=10;
 for (let i=m; i<=n;i++){
     if( i%2 !==0){
         document.write(i + "<br></br>")
     }
 }

//prime numbers from 0 to n
for (i=0; i<20; i++){
    if (i%2 === 0){
       
        document.write(i + "<br></br>")
    }
}*/

//Calculate the factorial of number
/*fact=1;
for (i=5; i>=1; i--)
{

fact=fact*i
document.write(fact+"<br></br>")
}*/

//calculate the factorial of number 1 to 10

/*var fact =1;
for (i=1 ; i<=10 ;i++)
{
    fact=fact*i
    document.write(fact+'<br></br>')
}


let array =[1,2,3,4,5,6];
var fact =1;

for (a=0;a<array.length;a++)
{
    fact=fact*array[a]
    document.write(fact+'<br></br>')
}*/

//nested for loop
/*var b =[[1,2,3,4],[10,20,30,40]]
for (g=0;g<=b.lenght;g++)
  for(l=0;l<b[g].lenght;l++)
    {
      document.write([g][l] +'<br>');
    }
*/

// Add elements of 2D array

var a = [[1,2,3,],[4,5,6]];


for (var i =0; i<a.length; i++)
{
   

document.write("Array is " + a [i][0]+'<br>');
//document.write("Array is " + a [i][1]+'<br>');
//document.write("Array is " + a [i][2]+'<br>');



}














//find largest of five numbers. Display alert box to show the result. 
//Sample numbers:-5,-2,-6,0 -1
//out put:0