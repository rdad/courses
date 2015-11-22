
var draw = false;

function save_pixels(){

	var resultat = '';
	var  pixels  = $('div');

	for(var j=0; j<pixels.length; j++){

		if($(pixels[j]).css('background-color') == 'rgb(255, 0, 0)'){
			resultat+= '1';
		}else{
			resultat += '0';
		};
	}	
	localStorage.setItem('pixels', resultat);

	console.log('dessin sauvegardé avec succés');
}

function load_pixels(){

	var pixels = localStorage.getItem('pixels');

	if(pixels){

		for(var j=0; j<pixels.length; j++){

			if(pixels.charAt(j) == '1'){
				$( "div" ).eq( j ).css( "background-color", "#f00" );
			}
		}
	}
}

$(document).ready(function(){

	// grille
	
	var pixel_dimension = 50;
	var grid 			= '';
	var p 				= '';
	
	for(var j=0; j<300; j++){

		p = '<div style="width:'+pixel_dimension;
		p+= 'px; height: '+pixel_dimension+'px"></div>';
		grid += p;
	}	

	$('body').append(grid);

	load_pixels();

	// draw

	$('body').on('mousedown', 'div', function(){
		draw = true;
	});

	$('body').on('mouseup', 'div', function(){
		draw = false;
	});


	$('body').on('mousemove', 'div', function(){
		if(draw == true){
			$(this).css('background-color','#f00');
		}
	});

	// gomme
	
	$('body').on('click', 'div', function(){	
		if($(this).css('background-color') == 'rgb(255, 0, 0)'){
			$(this).css('background-color', 'rgba(0, 0, 0, 0)');
		};
	});

	// bouton SAVE
	
	$('#bt_save').on('click', save_pixels );

});