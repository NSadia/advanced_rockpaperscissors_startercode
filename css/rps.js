
$( document ).ready() 
$("input").click(function(){
    var inputValue = $("#input").val();
    $("#result").append(inputValue);
});