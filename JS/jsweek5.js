/*let day= 'Sunday'
let day=prompt('Enter day')
switch(day)
{

case 'Monday':
case 'Tuesday':
    alert ('No lecture')
    break;

case 'wednesday':
case 'thursday':
    alert('wake up you have a lecture')
    break;

case 'friday':
    alert('No lecture')
    break;

case 'Sunday':
case 'Saturday':
    alert('weekend')
    break;

default:
alert('error')
}*/

const submit = document.querySelector('input[type="submit"]');
submit.addEventListener('click', (e) => {
  let day = document.querySelector('input[type="text"]').value;
 let days = document.querySelector('.days');
 switch(day)
{

case 'Monday':
case 'Tuesday':
    days.innerHTML= 'No lecture';
    break;

case 'wednesday':
case 'thursday':
    days.innerHTML='wake up you have a lecture';
    break;

case 'friday':
    days.innerHTML='No lecture';
    break;

case 'Sunday':
case 'Saturday':
    days.innerHTML='weekend';
    break;

default:
days.innerHTML='error';

}

});
