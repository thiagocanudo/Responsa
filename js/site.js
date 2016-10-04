$('a#sizes').click(function(){

    $(this).find('span').toggleClass('on');
    $(this).toggleClass('txtOff');

    if( ($('#d480').html() == "480px") && ($('#d320').html() == "320px") && ($('#d640').html() == "640px") && ($('#d768').html() == "768px") && ($('#d1024').html() == "1024px") )
    {
        $('#d320').html("320 x 480 (iPhone)");
        $('#d480').html("480 x 640 (small tablet)");
        $('#d640').html("640 × 1136 (Iphone 5)");
        $('#d768').html("768 x 1024 (iPad - Portrait)");
        $('#d1024').html("1024 x 768 (iPad - Landscape)");
        $('#d1280').html("1280 x 768 (14'' Notebook)");
    }else
    {
        $('#d320').html("320px");
        $('#d480').html("480px");
        $('#d640').html("640px");
        $('#d768').html("768px");
        $('#d1024').html("1024px");
        $('#d1280').html("1024px");
    }

    $('.w320px iframe').toggleClass('h480px');
    $('.w480px iframe').toggleClass('h640px');
    $('.w640px iframe').toggleClass('h1136px');
    $('.w1024px iframe').toggleClass('h768px');
    $('.w768px iframe').toggleClass('h1024px');
    $('.w1280px iframe').toggleClass('h1024px');

    $('.w320px').toggleClass('h480px');
    $('.w480px').toggleClass('h640px');
    $('.w640px').toggleClass('h1136px');
    $('.w1024px').toggleClass('h768px');
    $('.w768px').toggleClass('h1024px');
    $('.w1280px').toggleClass('h1024px');
});


/*          WRAP          */
$('a#wrap').click(function(){
    $(this).find('span').toggleClass('on');
    $(this).toggleClass('txtOff');
    $('.device').toggleClass('wrap');
    $('.container').toggleClass('noWid');
    //$(header).toggleClass('noWid');
});


/*          RESOLUÇÕES          */
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

$('#resolutions li a#bt1280').click(function(){
    $(this).find('span').toggleClass('off');
    $(this).toggleClass('txtOff');
    
    if($('.container').hasClass('noWid'))
    {
        $('.w1280px').animate({height: 'toggle'},"fast");
    }else
    {
        $('.w1280px').animate({width: 'toggle'},"fast");
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




$('#b320').click(function(e){
    e.preventDefault();$('#i320').attr('src', $('#i320').attr('src'));
});

$('#b480').click(function(e){
    e.preventDefault();
    $('#i480').attr('src', $('#i480').attr('src'));
});

$('#b640').click(function(e){
    e.preventDefault();
    $('#i640').attr('src', $('#i640').attr('src')); 
});

$('#b768').click(function(e){
    e.preventDefault();
    $('#i768').attr('src', $('#i768').attr('src')); 
});

$('#b1024').click(function(e){
    e.preventDefault();
    $('#i1024').attr('src', $('#i1024').attr('src')); 
});

$('#b1280').click(function(e){
    e.preventDefault();
    $('#i1280').attr('src', $('#i1280').attr('src')); 
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