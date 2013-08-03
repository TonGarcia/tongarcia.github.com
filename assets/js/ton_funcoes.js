
function ajax_get(url, seletor_destino){
	$.get(url, function(data) {
	  $(seletor_destino).html(data);
	});
}

function load_formacao() {
	ajax_get(str_ajax_resps_formacao_dir, str_sel_tabFormacao);
}

function load_experiencias() {
	ajax_get(str_ajax_resps_experiencias_dir, str_sel_tabExperiencias);
}

function load_projetos() {
	ajax_get(str_ajax_resps_projetos_dir, str_sel_tabProjetos);
}

function load_todos() {
	ajax_get(str_ajax_resps_todos_dir, str_sel_tabTODOs);
}