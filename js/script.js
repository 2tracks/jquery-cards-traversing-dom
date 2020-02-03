
$('document').ready(function(){

    //Traversing the DOM

    $("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); 
    });
}); 