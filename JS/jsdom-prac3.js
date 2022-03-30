function calc(){
    let radius = document.getElementById('radius').value;
    let volume = document.getElementById('volume');
    let calc = 4/3 * Math.PI * Math.pow(radius, 3);
    volume.innerText = 'Volume: '+calc.toFixed(4)+'cm'

}


// method 1
document.getElementById('header').onclick = hello;
function hello (){
  
    document.getElementById('header').style.backgroundColor = 'pink'
}

// add.eventlistener
document.getElementById('myP').addEventListener('click',hello1);

function hello1(){
    document.getElementById('myP').style.backgroundColor = "aquamarine"

}

//no need to mention any function name

document.getElementById('header').addEventListener('mouseover',function()
{
    document.getElementById('header').style.border = '4px solid yellow'  
}

)