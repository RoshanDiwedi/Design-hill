$(document).ready(function(){
    // $(window).on("scroll",function(){
    //     if(detectViewPort(".ele1")){
    //         console.log("lfkk");
    //     }
    // })

    // function detectViewPort(selector){
        $(window).on("scroll", function(){
            if($(window).scrollTop() + $(window).height() - 100 >= $(".ele1").offset().top){
              console.log("On viewport");
            }
          })
    // }
  });

