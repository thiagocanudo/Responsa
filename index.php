<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Responsa - Multiple Browsers Test</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/responsa.css">
        <link href='http://fonts.googleapis.com/css?family=Cuprum' rel='stylesheet' type='text/css'>
        <link rel="icon" type="image/png" href="http://www.thiagocanudo.com.br/responsa/favicon.ico"> 
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body class="color3">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

    <?php
        if(@$_POST["url"] == "")
        {
            //$url = "http://www.awwwards.com/";
            $url = "http://getbootstrap.com/2.3.2/";
        }
        else
        {
            $url=$_POST["url"];
            $url = trim($url);
            $url = urldecode($url);
        }
    ?>

    <div class="container">
        <header>
            <div id="top">
                <h1></h1>
            </div>
            <form action="index.php" method="post">
                <input type="text" name="url" placeholder="Digite seu site" value="<?php echo $url; ?>" />
            </form>

            <nav>
                <ul id="resolutions">
                    <li><a id="bt240" href="javascript:;"><span></span>240</a></li>
                    <li><a id="bt320" href="javascript:;"><span></span>320</a></li>
                    <li><a id="bt480" href="javascript:;"><span></span>480</a></li>
                    <li><a id="bt768" href="javascript:;"><span></span>768</a></li>
                    <li><a id="bt1024" href="javascript:;"><span></span>1024</a></li>
                </ul>
                <ul id="options">
                    <li><a id="sizes" href="javascript:;" class="txtOff"><span class="off"></span>size devices</a></li>
                    <li><a id="wrap" href="javascript:;" class="txtOff"><span class="off"></span>wrap</a></li>
                </ul>
                <ul id="colors">
                    <li><a id="color1" href="javascript:;"><span></span>color 1<div></div></a></li>
                    <li><a id="color2" href="javascript:;"><span></span>color 2<div></div></a></li>
                    <li><a id="color3" href="javascript:;"><span class="on"></span>color 3<div></div></a></li>
                    <li><a id="color4" href="javascript:;"><span></span>color 4<div></div></a></li>
                    <li><a id="color5" href="javascript:;"><span></span>color 5<div></div></a></li>
                </ul>               
            </nav>
        </header>

        <div id="deck" class="clearfix">
            <section class="clearfix">
                <div class="device w240px"><span id="d240">240px</span><iframe class="" width="240" height="550" src="<?php echo $url; ?>">w240px</iframe></div>
                <div class="device w320px"><span id="d320">320px</span><iframe class="" width="320" height="550" src="<?php echo $url; ?>">w320px</iframe></div>
                <div class="device w480px"><span id="d480">480px</span><iframe class="" width="480" height="550" src="<?php echo $url; ?>">w480px</iframe></div>
                <div class="device w768px"><span id="d768">768px</span><iframe class="" width="768" height="550" src="<?php echo $url; ?>">w768px</iframe></div>
                <div class="device w1024px"><span id="d1024">1024px</span><iframe class=" " width="1024" height="550" src="<?php echo $url; ?>">w1024px</iframe></div>
            </section>
        </div>

    </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
        <script src="js/site.js"></script>
        <a href="https://github.com/thiagocanudo/Responsa" target="blank"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" alt="Fork me on GitHub"></a>
        <script defer src="http://sawpf.com/1.0.js"></script>
    </body>
</html>
