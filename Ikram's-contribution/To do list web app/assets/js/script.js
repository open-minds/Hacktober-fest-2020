/*Check off a specific task by clicking*/
 $('ul').on('click','li',function(){
     $(this).toggleClass("done");
 });
 $('ul').on('mouseover', 'li', function(){
     $(this).css("cursor", "pointer");
 })
// Delete the task if X with hte fade out 
$('ul').on('click', 'span', function(event){
        $(this).parent().fadeOut(500, function (){
        $(this).remove();});
        event.stopPropagation();
    });
//the creating of a new task and append it into the list
$('input[type="text"]').keypress( function(){
    if(event.which === 13){
    var currentText = $(this).val();
    $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span>" + currentText + "</li>");
    $(this).val("")
    }
})
