//Constantes dos diretórios
var str_ajax_resps_containers = str_ajax_resps_dir+"textos_corridos/containers/";

var str_ajax_resps_cursos = str_ajax_resps_containers+"curso_extensao.html";
var str_ajax_resps_exps = str_ajax_resps_containers+"experiencias_profissionais.html";
var str_ajax_resps_graduacao = str_ajax_resps_containers+"graduacao.html";
var str_ajax_resps_idiomas = str_ajax_resps_containers+"idiomas.html";
var str_ajax_resps_projs_open = str_ajax_resps_containers+"meus_projs_opensource.html";
var str_ajax_resps_contri_open = str_ajax_resps_containers+"minhas_contribuicoes_opensource.html";


//Constantes dos elementos DOM
var str_sel_graduacao = "#graduacao";
var str_sel_cursos_ext = "#cursos_extensao";
var str_sel_exps = "#experiencias";
var str_sel_projs_open = "#meus_opensource";
var str_sel_contribuicoes_open = "#colaboracoes_opensource";
var str_sel_idiomas = "#idiomas";

timer = 0;

function load_graduacao() {
	ajax_get(str_ajax_resps_graduacao, str_sel_graduacao);
}

function load_cursos_extensao() {
	ajax_get(str_ajax_resps_cursos, str_sel_cursos_ext);
}

function load_experiencias() {
	ajax_get(str_ajax_resps_exps, str_sel_exps);
}

function load_projs_open_source() {
	ajax_get(str_ajax_resps_projs_open, str_sel_projs_open);
}

function load_contribuicoes_open_source() {
	ajax_get(str_ajax_resps_contri_open, str_sel_contribuicoes_open);
}

function load_idiomas() {
	ajax_get(str_ajax_resps_idiomas, str_sel_idiomas);
}

$("#texto_corrido_ajax").ready(function(){
	load_graduacao();
	load_cursos_extensao();
	load_experiencias();
	load_projs_open_source();
	load_contribuicoes_open_source();
	load_idiomas();
});