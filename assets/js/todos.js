$(".list").on("click", "li", function(){
    $(this).toggleClass("done");
});

$(".list").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

$("#input").keypress(function(event){
    if(event.which === 13){
        var userInput = $(this).val();
        $(".list").append("<li><span>X</span> " + userInput + "</li>");
        $(this).val("");
    }
});

$(".fa-plus").on("click", function(){
    $("#input").fadeToggle();
});