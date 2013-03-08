$(window).load(function(){
	var bh = $(window).height() - 80;
	$("#content").css("min-height",bh);
});
$(window).resize(function(){
	var bh = $(window).height() - 80;
	$("#content").css("min-height",bh);
});

//Bootstrap Plugins
$(function () {
	//tooltip
	$('.ttip').tooltip();
	$('.ttipBottom').tooltip({placement:'bottom'});
	$('.ttipRight').tooltip({placement:'right'});
	$('.ttipLeft').tooltip({placement:'left'});
	$('.ttipFocus').tooltip({trigger:'focus'});

	//alert
	$(".alert").alert();

});
