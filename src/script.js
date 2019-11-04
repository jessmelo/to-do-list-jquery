$(document).ready(function(){
    $("#list").on("click", ".item", (function(){
        $(this).toggleClass("done");
    }));

    // function to delete a task 

    $("#list").on("click", ".del", (function(){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        $(this).event.stopPropagation();        
    }));

    // function to add a new task

    $("#input").keypress(function(){
        if(event.which === 13){
            var newTask = $(this).val();
            console.log(newTask);
            $("#list").append("<li class=\"item\"><i class=\"del far fa-trash-alt\"></i>" + newTask + "</li>");
            $(this).val("");
        }
    });
});
