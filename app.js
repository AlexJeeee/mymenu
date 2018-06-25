$(document).ready(function () {
   $(".main>a").click(function () {
       var ulNode = $(this).next("ul");
       ulNode.slideToggle();
       // ulNode.toggle();
       changeInco($(this));
   });
    $(".hmain").hover(function () {
      $(this).children("ul").slideDown();
        changeInco($(this).children("a"));
    },function () {
        $(this).children("ul").slideUp();
        changeInco($(this).children("a"));
    })
});
function changeInco(mainNode) {
    if (mainNode){
        if (mainNode.css("background-image").indexOf("1.png")>=9){
            mainNode.css("background-image","url('images/12.png')");
        }
        else {
            mainNode.css("background-image","url('images/1.png')");
        }
    }
}