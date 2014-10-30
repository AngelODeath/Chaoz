$(function() {
    var target = $("div.container");
    var right_page_zone = $(window).width() - 40;
    var page_right_div = $(".page_right");
    //var 
    
    $.ajax({
        url: 'page1_2.html',
        type: 'GET',
        dataType: 'html',
        success: function(page1_2_html) {
            $(window).mousemove(function(e){
                if (e.pageX > right_page_zone) {
                    page_right_div.css('display','block');
                } else {
                    page_right_div.css('display','none');
                }
            });

            page_right_div.click(function(e){
                //window.location = "page1_2.html";
                //$('body').html(page1_2_html);
            });
        }
    });
    
    
    //$.stratus({
    //    links: 'http://soundcloud.com/foofighters/sets/wasting-light'
    //});
});