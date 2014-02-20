$('a#sizes').click(function(){

    $(this).find('span').toggleClass('on');
    $(this).toggleClass('txtOff');

    if( ($('#d240').html() == "240px") && ($('#d480').html() == "480px") && ($('#d320').html() == "320px") && ($('#d640').html() == "640px") && ($('#d768').html() == "768px") && ($('#d1024').html() == "1024px") )
    {
        $('#d240').html("240 x 320");
        $('#d320').html("320 x 240");
        $('#d480').html("480 x 360");
        $('#d640').html("640 x 480");
        $('#d768').html("768 x 1024");
        $('#d1024').html("1024 x 768");
    }else
    {
        $('#d240').html("240px");
        $('#d320').html("320px");
        $('#d480').html("480px");
        $('#d640').html("640px");
        $('#d768').html("768px");
        $('#d1024').html("1024px");
    }

    $('.w240px iframe').toggleClass('h320px');
    $('.w320px iframe').toggleClass('h240px');
    $('.w480px iframe').toggleClass('h360px');
    $('.w640px iframe').toggleClass('h480px');
    $('.w768px iframe').toggleClass('h1024px');
    $('.w1024px iframe').toggleClass('h768px');

    $('.w240px').toggleClass('h320px');
    $('.w320px').toggleClass('h240px');
    $('.w480px').toggleClass('h360px');
    $('.w640px').toggleClass('h480px');
    $('.w768px').toggleClass('h1024px');
    $('.w1024px').toggleClass('h768px');
});


/*          WRAP          */
$('a#wrap').click(function(){
    $(this).find('span').toggleClass('on');
    $(this).toggleClass('txtOff');
    $('.device').toggleClass('wrap');
    $('.container').toggleClass('noWid');
    $(header).toggleClass('noWid');
});


/*          RESOLUÇÕES          */
$('#resolutions li a#bt240').click(function(){
    $(this).find('span').toggleClass('off');
    $(this).toggleClass('txtOff');
    
    if($('.container').hasClass('noWid'))
    {
        $('.w240px').animate({height: 'toggle'},"fast");
    }else
    {
        $(".w240px").animate({width:'toggle'},"fast");
    }
});

$('#resolutions li a#bt320').click(function(){
    $(this).find('span').toggleClass('off');
    $(this).toggleClass('txtOff');

    if($('.container').hasClass('noWid'))
    {
        $('.w320px').animate({height: 'toggle'},"fast");
    }else
    {
        $('.w320px').animate({width: 'toggle'},"fast");
    }

});

$('#resolutions li a#bt480').click(function(){
    $(this).find('span').toggleClass('off');
    $(this).toggleClass('txtOff');
    
    if($('.container').hasClass('noWid'))
    {
        $('.w480px').animate({height: 'toggle'},"fast");
    }else
    {
        $('.w480px').animate({width: 'toggle'},"fast");
    }
});

$('#resolutions li a#bt640').click(function(){
    $(this).find('span').toggleClass('off');
    $(this).toggleClass('txtOff');
    
    if($('.container').hasClass('noWid'))
    {
        $('.w640px').animate({height: 'toggle'},"fast");
    }else
    {
        $('.w640px').animate({width: 'toggle'},"fast");
    }
});

$('#resolutions li a#bt768').click(function(){
    $(this).find('span').toggleClass('off');
    $(this).toggleClass('txtOff');
    
    if($('.container').hasClass('noWid'))
    {
        $('.w768px').animate({height: 'toggle'},"fast");
    }else
    {
        $('.w768px').animate({width: 'toggle'},"fast");
    }
});

$('#resolutions li a#bt1024').click(function(){
    $(this).find('span').toggleClass('off');
    $(this).toggleClass('txtOff');
    
    if($('.container').hasClass('noWid'))
    {
        $('.w1024px').animate({height: 'toggle'},"fast");
    }else
    {
        $('.w1024px').animate({width: 'toggle'},"fast");
    }
});



/*          CORES          */
$('#colors li a#color1').click(function(){
	$('#colors li a span').removeClass('on');
	$('#colors li a#color1 span').attr('class','on');
    $('body').attr('class','color1');
    $('.device span').css('color','#fff');
    $('.device').css('borderColor','#23272D');
});

$('#colors li a#color2').click(function(){
	$('#colors li a span').removeClass('on');
	$('#colors li a#color2 span').attr('class','on');
    $('body').attr('class','color2');
    $('.device span').css('color','#fff');
    $('.device').css('borderColor','#000');
});

$('#colors li a#color3').click(function(){
	$('#colors li a span').removeClass('on');
	$('#colors li a#color3 span').attr('class','on');
    $('body').attr('class','color3');
    $('.device span').css('color','#fff');
    $('.device').css('borderColor','#000');
});

$('#colors li a#color4').click(function(){
    $('#colors li a span').removeClass('on');
    $('#colors li a#color4 span').attr('class','on');
    $('body').attr('class','color4');
    $('.device span').css('color','#000');
    $('.device').css('borderColor','#000');
});

$('#colors li a#color5').click(function(){
	$('#colors li a span').removeClass('on');
	$('#colors li a#color5 span').attr('class','on');
    $('body').attr('class','color5');
    $('.device span').css('color','#000');
    $('.device').css('borderColor','#000');
});


// $(document).ready(function(){
//     var HeaderTop = $('header').offset().top;
//     $(window).scroll(function(){
        
//         if( $(window).scrollTop() > HeaderTop ) {
//             $('header').css({position: 'fixed', top: '0px'});
//             $('header form').css({"display": "none"});
//         } else {
//             $('header').css({position: 'static'});
//             $('header form').css({"display": "block"});
//         }
//     });
// });