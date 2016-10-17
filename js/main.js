$('document').ready(function(){

	$('#frm_url').submit(function(ev){
		inp = $(this).find('input');
		url = inp.val();
		inp.attr('readonly', true);
		inp.css('opacity', 0.5);
		setTimeout(function(){
			inp.attr('readonly', false);
			inp.css('opacity', 1);
		}, 2000);
		if (!url.match(/^https?:\/\//)){
			url = 'http://' + url;
			inp.val(url);
		}
		$('#deck iframe').attr('src', url);
		
		return false;
	});

	defaultUrl = 'http://muse.adobe.com/';
	$('#deck iframe').attr('src', defaultUrl);

});