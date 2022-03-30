/*var n =document.getElementById('heading').innerHTML;
//document.write(n)
//replacing the content
document.getElementById('heading').innerHTML="Document Object Model"
document.getElementById('list-heading').innerText='Hello'
document.getElementById('list-heading').textContent='Hello,see the content'
document.getElementById('heading').style.color = "#ff0000";
document.getElementById('heading').style.backgroundColor ='yellow';*/

/*var element 
element = document.all
console.log(element);*/

/*var element = document.getElementById('heading').innerText //only grab the text inside
                                            //.innerHTML // it will grab the text and the tag.

console.log(element);*/

//Dom get method


/*var element = document.getElementsByClassName('header') // grab a collection of html/document
console.log(element[0]); //[0] ==> index name*/
/*var element = document.getElementsByTagName('ul') // return as a collection
console.log(element[0]);*/

/*var att = document.getElementById('heading').getAttribute('style') // to see info about your element

console.log(att);*/
/*var att = document.getElementById('heading').getAttributeNode('style') // to see info about your element along with the attribute

console.log(att);*/

/*var att = document.getElementById('heading').attributes // to see info about your element along with the attribute id - class - style

console.log(att[2]); //return as collection therefore mention index [].*/


//Dom set method

/*document.getElementById('heading').innerHTML = '<h1>Document Object Method</h1>'*/

//set Attribute
 /*document.getElementById('heading').setAttribute('class','sae'); // setting the class name 

var element = document.getElementById('heading').getAttribute('class')
console.log(element); // to see if it's change


//to change style attribute
document.getElementById('heading').setAttribute('style','border: 5px solid red'); // setting the class name 

var element = document.getElementById('heading').getAttribute('style')
console.log(element); // to see if it's change
*/

//remove attribute 
document.getElementById('heading').setAttribute('style','border:3px solid black');



