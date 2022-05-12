$(document).ready(function(){
    $("#btn-show").on("click", function(){
        $("#text-wrapper").show();
    });

    $("#btn-hide").on("click", function(){
        $("#text-wrapper").hide();
    });

    $("#btn-toggle").on("click", function(){
        $("#text-wrapper").toggle();
    });
    

});

