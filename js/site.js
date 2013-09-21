$('a#sizes').click(function(){

    $(this).find('span').toggleClass('on');
    $(this).toggleClass('txtOff');

    if( ($('#d240').html() == "240px") && ($('#d480').html() == "480px") && ($('#d320').html() == "320px") && ($('#d768').html() == "768px") && ($('#d1024').html() == "1024px") )
    {
        $('#d240').html("240 x 320");
        $('#d320').html("320 x 240");
        $('#d480').html("480 x 560");
        $('#d768').html("768 x 1024");
        $('#d1024').html("1024 x 768");
    }else
    {
        $('#d240').html("240px");
        $('#d320').html("320px");
        $('#d480').html("480px");
        $('#d768').html("768px");
        $('#d1024').html("1024px");
    }

    $('.w240px').toggleClass('vp240');
    $('.w240px iframe').toggleClass('vp240');    

    $('.w320px').toggleClass('vp320');
    $('.w320px iframe').toggleClass('vp320'); 

    $('.w480px').toggleClass('vp480');
    $('.w480px iframe').toggleClass('vp480'); 

    $('.w768px').toggleClass('vp768');
    $('.w768px iframe').toggleClass('vp768');

    $('.w1024px').toggleClass('vp1024');
    $('.w1024px iframe').toggleClass('vp1024'); 

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
});

$('#colors li a#color2').click(function(){
	$('#colors li a span').removeClass('on');
	$('#colors li a#color2 span').attr('class','on');
    $('body').attr('class','color2');
});

$('#colors li a#color3').click(function(){
	$('#colors li a span').removeClass('on');
	$('#colors li a#color3 span').attr('class','on');
    $('body').attr('class','color3');
});

$('#colors li a#color4').click(function(){
    $('#colors li a span').removeClass('on');
    $('#colors li a#color4 span').attr('class','on');
    $('body').attr('class','color4');
    //$('.color4 .device span').attr('class','color3');
});

$('#colors li a#color5').click(function(){
	$('#colors li a span').removeClass('on');
	$('#colors li a#color5 span').attr('class','on');
    $('body').attr('class','color5');
    //$('.color5 .device span').attr('class','color3');
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