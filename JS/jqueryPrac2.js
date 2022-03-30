$(document).ready(function () {
    $("button").click(function () {
        $('h1').fadeToggle(2000,function () {  //this call back the function
            alert("Fade toggle is finished");
        });
        $('p:first').css('color','blue',function(){
            
        })
   
    });
   
});


