//Seletor botões btn-group (UPgrade Bootstrap)
var btns_group = ".btn-group .btn";
var content_navegaveis = "#navegaveis > div";

$(btns_group).click(function(){
    var btn_clicado = $(this);
    if(btn_clicado.hasClass("active")) return;
	
	$(btns_group).removeClass("active");
	$(this).addClass("active");
        
    //$(content_navegaveis).addClass("hide");
    $(content_navegaveis).css("display", "none");
    var id_btn = btn_clicado.attr("id");
    var id_content = id_btn.substring(id_btn.indexOf("_")+1, id_btn.length);
    
    var content_ref = $("#"+id_content);
    content_ref.fadeIn('slow', function() {	/* Animation complete */	});
});