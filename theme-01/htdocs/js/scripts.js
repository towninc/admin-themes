$(window).load(function(){
	var bh = $(window).height() - 80;
	$("#content").css("min-height",bh);
});
$(window).resize(function(){
	var bh = $(window).height() - 80;
	$("#content").css("min-height",bh);
});