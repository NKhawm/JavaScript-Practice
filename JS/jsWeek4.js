//Task 1

/*var day = 2 ;
    
if (day==0)
      
{alert('Sunday')}

 else if(day==1)
       {alert('Monday')}
else if(day==2)
       {alert('Tuesday')}
else if(day==3)
         {alert('Wednesday')}
else if(day==4)
        {alert('Thursday')}
else if(day==5)
       {alert('Friday')}

 else (day>6)
       {alert('Ivalid')}*/

//Task 2----------------------------------------------------&&--

/*let a=5;
let b=8;
let c=15;

if (a>b && a>c)
  {
    alert(a)
  }
else if(b>a && b>c)
  {
    alert(b)
  }
else
{
  alert(c)
}*/

//Task2---------------------||-----

/*let a = prompt ('Enter a number');
let b = prompt ('Enter a number');
let c = prompt ('Enter a number');

if (a>b || a>c){
  alert('a is the greatest number')
}
else if (b>a || b>c){
  alert('b"is the greatest number"')
}
else
  {
    aler('"c" is the greatest number')
  }*/

  function date()
  {
    var day =  document.getElementById ('number').value; 
   
   if (day==0)
          
    {alert('Sunday')}
    
    else if(day==1)
           {alert('Monday')}
    else if(day==2)
           {alert('Tuesday')}
    else if(day==3)
             {alert('Wednesday')}
    else if(day==4)
            {alert('Thursday')}
    else if(day==5)
           {alert('Friday')}
    
    else (day>6)
           {alert('Ivalid')

  }
}

function number2(){
    var num = document.getElementById('num1').value;

    if (num<1 || num>10 || isNaN(num))
    {alert('not valid');
    }
    else 
    {
        alert('valid');
    }


}