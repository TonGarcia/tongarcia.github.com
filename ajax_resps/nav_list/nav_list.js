//Constantes
var str_sel_navList =  ".nav-tabs > li";
var str_sel_scroller = '[data-spy="scroll"]';

$(str_sel_navList).click(function(){
	$(str_sel_navList).removeClass("active");
	$(this).addClass("active");
});


/*
$(".nav-tabs").scrollspy();
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

$(str_sel_navList).removeClass("active");
$("#nav_list > :first-child").addClass("active");
*/

/*
$(str_sel_scroller).scroll(function () {
  console.log("Aconteceu o Scroll!!");

});
*/