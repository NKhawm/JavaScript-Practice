/*function showPrice (){
    var age = document.getElementById('ageGroup').value;

    if (age==10 || age < 10)
    {
        alert('£5')

    }
    else if (age>10 && age<18)
    {
        alert("£8")

    }
    else if (age > 17 && age<65)
    {
        alert('£12')
    }
    else if (age==65 || age > 65)
    {
        alert('£8')
    }
   
}*/
//Switch case method == if you are using any operational values, use (true) statement in the switch
function showPrice(){
    var age= document.getElementById('ageGroup').value;
    switch(true)
    {
        case (age==10 || age<10):
        alert('£5')
        break;

        case (age>10 && age<18):
        case (age==65 || age > 65):
        alert('£8')
        break;

        case(age > 17 && age<65):
        alert('£12')
        break;

        default:
        alert('please enter the correct age')

        
    }
}