$(function() {
    var body = $("body");
    var right_page_zone = body.width() - 40;
    var page_right_div = $(".page_right");
    //var 
    
    $("body").mousemove(function(e){
        if (e.pageX > right_page_zone) {
            page_right_div.css('display','block');
        } else {
            page_right_div.css('display','none');
        }
    });
    
    page_right_div.click(function(e){
        window.location = "page1_2.html";
    });
});