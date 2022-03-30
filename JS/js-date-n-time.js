
//print out the current date
//var dd = new Date() 
//document.write(dd);
//document.write(dd.toString())

/*var today = new Date();
document.getElementById('txt').innerHTML = today;*/ //current date


// setting up the format (year, month, day,hour,mins, seconds,miliseconds)

/*const d =new Date(2018, 11, 12,30,0,0);
document.getElementById('txt').innerHTML = d;*/

//format you want  ===> new Date (date String)
/*const d = new Date("October 1, 1985 11:30");
document.write(d);*/

//Date getDate() method
/*const d = new Date();
document.write(d.getDate() + '\t');  //only give you the date 
document.write(d.getFullYear() + '\t'); // only give you the year
document.write(d.getMonth() + '\t'); // month starts form 0 = January.*/


//to print in this format ===> getDate() method
/*const months = ['January', 'Feb', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December']
const m = new Date();
document.write(m.getDate() +'\t');
document.write (months[m.getMonth(2)] + '\t');
document.write (m.getFullYear() + '\t');*/

//If you put date more than 31 it will carry forward to the next month
/*const d = new Date(2011, 12, 35); // it will print jan 4
document.write(d.getDate());*/

// getHours() method
/*const h = new Date()
document.write(h.getHours()+ '<br>'); //24 hrs ==> 0hr-23hr

//getMinutes() method
const m = new Date()
document.write(m.getMinutes() + '<br>');

//getSeconds() method
const s = new Date()
document.write(m.getSeconds() + '<br>');

//getDay() method
const dd = new Date()
document.write(dd.getDay() + '<br>');

const d = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = new Date();
document.write(d[day.getDay()] + '<br>');*/

//1. Write a JS function to get the current date

/*function current(){
    const d = new Date();
    alert('Today date is ' + d);
    
}

   

    
//2. Write a JS function to get the number of days in a month.

var daysInMonth = function (month,year){
    return new Date(year,month,0).getDate();
}
document.getElementById('day').innerHTML = 'Number of days: ' + daysInMonth(1,2022);

//document.write(daysInMonth(0,2022) + '<br>');
//document.write(daysInMonth(1,2020)+ '<br>');
//document.write(daysInMonth(2,2020)+ '<br>');

// Write a JS function to get the month name from a particular date.
var monthName =function(dt){
    let months  = ['January', 'Feb', 'March', 'April','May','June', 'July', 'August', 'September', 'October', 'November','December'];
    return months[dt.getMonth()];
};
document.getElementById('day2').innerHTML = monthName(new Date("1/11/2011"));*/

//document.getElementById('day2').innerHTML = monthName(new Date("12/11/2011"));

//4.Write a JS function to compare date.
/*var compare = function(date1, date2){
    if (date1>date2) return ("Date1 is bigger than Date2");
    else if (date1<date2) return ("Date1 is smaller than Date2");
    else return("Date1 and Date2 are equal");
}
document.getElementById('day3').innerHTML = compare(new Date('11/12/2021 00:00')),(new Date('11/12/2021 00:00'));

document.getElementById('day3').innerHTML = compare(new Date('11/12/2021 00:01')),(new Date('11/12/2021 00:00'));*/
 
//another method
/*function compareMe(){
var myDate = new Date();
var myDate2 = new Date(2011,3,13)
if(myDate.getTime() > myDate2.getTime()) // getTime convert your date to miliseconds to be able to compare.
{
    document.getElementById('day3').innerHTML = 'Current date is bigger';
    
}
else{
    document.getElementById('day3').innerHTML = 'Current date is smaller';
}
}

//5.Write a JS function to get difference between two dates in days.
 var dateDiff = function(date1, date2){
     dt1 = new Date(date1);
     dt2 = new Date (date2);
     //return Math.floor(Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) /(1000 * 60 * 60 * 24));
     return Math.floor(dt1.getTime()-dt2.getTime() / (1000*60*60*24));


 }
 document.getElementById('day4').innerHTML = dateDiff("1/11/2011" , "2/12/2012");*/


// calculate your age
/*var today = prompt ("Enter today's date");
var birthDate = prompt ("Enter your birth date");

let age = today.getFullYear() - birthDate.getFullYear();
let month = today.getMonth() - birthDate.getMonth();

if (month < 0 || (month ===0 && today.getDate() < birthDate.getDate())){
    age--;
    document.getElementById('day5').innerHTML = 'Current date is bigger';
}*/
    


//set






    





