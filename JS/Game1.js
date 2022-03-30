/*const randomNumber = Math.floor(Math.random() * 100) +1
console.log('Random number',randomNumber);

function checkGuess(){
    let myGuess = document.getElementById('guess').value
    
    if (myGuess === randomNumber){
        document.getElementById('result').innerHTML = "Welldone, You got that right!"
     
    }
    else if (myGuess > randomNumber){
        document.getElementById('result').innerHTML =( "Your guess was" + myGuess + ". That's too high. Try again!")
      
    }
    else if (myGuess < randomNumber){
        document.getElementById('result').innerHTML =( "Your guess was" + myGuess + ". That's too low. Try again!")
        
    }


}
submitGuess.addEventlistener('click',checkGuess());*/

//window ==> button ==> to open a new tab
var openedWindow;
var mywindow;
function wdopen(){
   openedWindow = window.open('https://www.google.com/') //open in a new tab
    //window.open('https://www.google.com/','_parent')//open in the same tab
   mywindow = window.open('https://www.google.com/',"","width=500px,height=700px")
}
function closeOpenedWindow(){ //close the tab
    openedWindow = openedWindow.close();

}
//scroll window
function scrollWindow(){
    window.scrollBy(0,20); //scroll
    //scrollTo // top ^
}