//Seletor botões btn-group (UPgrade Bootstrap)
var btns_group = ".btn-group .btn";

$(btns_group).click(function(){
	$(btns_group).removeClass("active");
	$(this).addClass("active");
});