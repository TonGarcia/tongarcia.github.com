function inicializador_tooltips(){
    $(".tooltiper_left").attr("data-placement", "left");
    $(".tooltiper_left").tooltip();
    $(".tooltiper_left").tooltip({trigger: "hover"}); 
    
    $(".tooltiper_bottom").attr("data-placement", "bottom");
    $(".tooltiper_bottom").tooltip();
    $(".tooltiper_bottom").tooltip({trigger: "hover"});
}

var timer = 900;

function ajax_get(url, seletor_destino){
	$.get(url, function(data) {
		setTimeout(function(){  $(seletor_destino).html(data); inicializador_tooltips(); }, timer);
		timer*=1.4;
	});
}

function load_aboutMe() {
	ajax_get(str_ajax_resps_aboutMe, str_sel_about_me);
}

function load_navList() {
    ajax_get(str_ajax_resps_navList, str_sel_nav_list);   
}

function load_textoCorrido() {
    ajax_get(str_ajax_resps_construtorTextoCorrido, str_sel_texto_rolagem);   
}

