//Constantes
var str_sel_navList =  ".nav-tabs > li";


$(str_sel_navList).click(function(){
	$(str_sel_navList).removeClass("active");
	$(this).addClass("active");
});

