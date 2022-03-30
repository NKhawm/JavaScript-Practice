$("button").click(function(){
    var target=$(this);
    if (target.hasClass("done")){
        //do nothing
    }
    else{
        target.addClass("processing");
        setTimeout(function(){
            target.removeClass("processing");
            target.addClass("done");
        
        },2200);
    }
});