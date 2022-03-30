
class stu{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}
const stu1 = new stu('Maya',2022);
var stu2 = new stu('Mike',2020);

document.getElementById('demo').innerHTML =stu1.name + ' ' + stu1.year;
document.getElementById('demo1').innerHTML = 'Hello' + ' ' + stu2.name +' '+stu2.year;

class carr{
    constructor(name,year,color){
        this.name = name;
        this.year = year;
        this.color = color
    }
}
var car1 = new carr('MiniCooper',2022,'darkGreen');
document.getElementById('demo2').innerHTML = 'My dream car is ' + ' ' + car1.name + ' made in '
+ car1.year + ' and '+ car1.color + ' color.';


//class method
// Calculating the age of the new employee
class employee{
    constructor(name,surname,age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    show(){                                   //a function
        let date = new Date();
        return date.getFullYear() - this.age; //current year - birthyear

    }
}
var emp1 = new employee ('Chris','Norman',1990);
var emp2 = new employee ('Amy','Norman',2000);
document.getElementById('demo3').innerHTML = emp1.name + ' '+ emp1.surname + ' is '+ emp1.show() + 'years old.';
document.getElementById('demo4').innerHTML = emp2.name + ' '+ emp2.surname + ' is '+ emp2.show() + 'years old';


class birthday {
    constructor(day,month,year){
        this.day = day;
        this.month = month;
        this.year = year
    }
    show(){
        var date = new Date(1990,10,14);
        return date.getDay()+this.day;
        
   
}
}
var dob = new birthday(30,3,2020)
document.getElementById('demo5').innerHTML = 'I am ' + dob.show() + ' years old.';

//Write a JavaScript program to calculate the addition of three numbers
class cal{
    constructor(a,b,c,e){
        this.a = a;
        this.b = b;
        this.c = c;
        this.e = e;
    }
   sum(){
    return (d.a+d.b+d.c+d.e);

   }
}
var d = new cal(21, 19, 34,90);
document.getElementById('result').innerHTML = 'The answer is..' + d.sum(); 



/*Q: Write a JavaScript program to calculate the area and the perimeter of a circle using class.
 Note: Create two methods to calculate the area and perimeter. The radius of the circle will be supplied
 by the user.*/
 

 class circle{
     constructor(radius){
         this.radius = radius;
     }
     getArea(){
         return this.radius *this.radius * Math.PI;
     }
     getPerimiter(){
         return 2*this.radius * Math.PI
     }
     }
     let area = new circle(6);
     document.getElementById('answer').innerHTML= 'Area =' + area.getArea().toFixed(2);
     document.getElementById('answer1').innerHTML= 'Perimeter =' + area.getPerimiter().toFixed(2);
     
//addition from the keyboard

// var a = parseInt(prompt('Enter your number'));
// var b = parseInt(prompt('Enter your number'));
// var c = parseInt(prompt('Enter your number'));

// class newCal {
//     constructor(a,b,c){
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     sum(){
//         return (d.a+d.b+d.c);  
//     }
// }
// let d = new newCal(a,b,c);
// document.getElementById('ans').innerHTML = 'The answer is : ' + d.sum();

//another way
$(document).ready(function(){
    $('button').click (function(){
var a = parseInt(document.getElementById('num1').value);
var b = parseInt(document.getElementById('num2').value);
var c = parseInt(document.getElementById('num3').value);

            class newCal{
            constructor(a,b,c){
                this.a = a;
                this.b = b;
                this.c = c;
            }
            sum(){
                return(d.a+d.b+d.c);
            }
            
        }
        let d = new newCal(a,b,c);
        document.getElementById('ans').innerHTML = 'The answer is: '+ d.sum();
    });
});

// Class inheritance

class car {
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'I have a ' + this.carname;
    }
}
class Model extends car{
    constructor(brand,mod){
        super(brand);
        this.mod = mod;
    }
    how(){
        return this.present() + '. It is a ' + this.mod + '.';
    }
} 
let myCar = new Model('Ford','Mustang');
document.getElementById('inher').innerHTML = myCar.how();

//adding 3 numbers in 2 classes
class num {
    constructor(a,b){
        this.a = a;
        this.b = b;
        
    }
    present(){
        return this.a + this.b;
    }
}
class no extends num{
    constructor(a,b,c){
        super(a,b);
        this.c = c;
    }
    sum(){
        return this.present() + this.c;
    }
} 
let myNum = new no (6,6,7);
document.getElementById('inher1').innerHTML = myNum.sum();
