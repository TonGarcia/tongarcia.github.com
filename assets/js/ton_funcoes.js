
function ajax_get(url, seletor_destino){
	$.get(url, function(data) {
	  $(seletor_destino).html(data);
	});
}

function load_formacao () {
	
}