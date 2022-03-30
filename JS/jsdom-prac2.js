

function hello(){

let fName = document.getElementById('fname').value;
let lName = document.getElementById('lname').value;
let result = document.getElementById('text');
result = fName + lName;
document.write(`Hi ${result}`);

}


