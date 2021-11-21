var winWidth = $(window).width();

function makeBackgroundImage() {

    $('.bgImg').each(function () {
        var Img = $(this).find('img') 
        Img.css({ 'display': 'none' });
        if (winWidth > 768) {
            var height = $('.textDiv').height() ? $('.textDiv').height() : $('.bgImg').height()
            var imgSrc = Img.attr('src');
            $(this).css({
                'background-image': 'url(' + imgSrc + ')',
                'background-size': 'cover',
                height: height
            });
        }
    });
}
$(document).on('ready', function () {
    makeBackgroundImage()
});

$(document).ajaxComplete(function () {
    makeBackgroundImage()
});
$('body').on('click', '.Link', function (e) {
    console.log('clicked');
    e.preventDefault();
    var url = $(this).find('a').attr('href');
    console.log(url);
    $.ajax({
        url: url,
        type: "get",
        success: function (res) {
            console.log(res);
            $('#main-content').empty().append(res);
        },
        error: function (res) {
            console.log("error");
            console.log(res);
        }

    })
})