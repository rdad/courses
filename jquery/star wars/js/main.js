

$(document).ready(function(){

	$('#liste_personnage').on('click','li a', function(){

		$('#loader').show();

		var id = $(this).data('id');
		var url = 'http://swapi.co/api/people/'+id+'/';

		$('.card').fadeOut();
		
		$.getJSON(url, function(data){
			//console.log(data);

			$('h1').text(data.name);
			$('#naissance').children('.card_value').text(data.birth_year);
			$('#taille').children('.card_value').text((data.height * 0.01)+'  m');
			$('#poids').children('.card_value').text(data.mass+' kg');
			$('#cheveux').children('.card_value').text(data.hair_color);
			$('#peau').children('.card_value').text(data.skin_color);
			$('#yeux').children('.card_value').text(data.eye_color);			

			$('.card').fadeIn();
			$('#loader').hide();
		});
	});
});