
var thumb_selected;
var url_grande_image = '';

$(document).ready(function(){

	$('#gallerie').fadeIn(800);

	$('#gallerie aside').on('click','img', function(e){

		$('#gallerie aside img').removeClass('img_selected');
		$(this).addClass('img_selected');

		var url_vignette = $(this).attr('src');
		url_grande_image = url_vignette.replace('_t.', '.');

		$(this).parent()
			   .next()
			   .children()
			   .animate({
			width: 0,
			height: 0,
			opacity: 0
		},'fast', function(){

			$(this).attr('src',url_grande_image)
				   .animate({
						width: '684px',
						height: '490px',
						opacity: 1
					},'fast');
		});
	});
});