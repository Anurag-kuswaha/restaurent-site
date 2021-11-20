var winWidth = $(window).width();

function makeBackgroundImage(){
    var height=0;
    if(winWidth<768){
    height= '200px';
    }
    else{
        height=  $('.textDiv').height()? $('.textDiv').height():$('.bgImg').height()
    }
    $('.bgImg').each(function () {
       var Img=  $(this).find('img')
       Img.css({'display': 'none'})
        var imgSrc = Img.attr('src');
        console.log(imgSrc);
        $(this).css({
            'background-image': 'url(' + imgSrc + ')',
            'background-size': 'cover',
            height:height
        });
    });
}
$(document).on('ready',function(){
    makeBackgroundImage()
});

$(document).ajaxComplete(function(){
    makeBackgroundImage()
});
$('body').on('click','.Link',function(e){
    console.log('clicked');
    e.preventDefault();
    var url= $(this).find('a').attr('href');
    console.log(url);
    $.ajax({
     url: url,
     type: "get",
     success:function(res){
     console.log(res);
     $('#main-content').empty().append(res);
     },
     error:function(res){
        console.log("error");
        console.log(res);
     }

    })
})