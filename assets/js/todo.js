var itemMenu = "<li><span><i class='fa fa-trash-o' aria-hidden='true'></i><i class='fa fa-check-square-o' aria-hidden='true'></i></span>";

$("ul").on("click", "i.fa-check-square-o", function(){
	$(this).parent().parent().addClass("completed");
});
$("ul").on("click", "i.fa-trash-o", function(event){
	$(this).parent().parent().fadeOut(400, function(){
		$(this).remove();          
	});
	event.stopPropagation();
});
$("input[type='text']").on("keypress", function(event){
	if (event.which === 13) {
		var newToDo = $(this).val();
		$("ul").append(itemMenu + newToDo + "</li>");
		$(this).val("");
	};
});
$(".fa-pencil").click(function(){
	$("input[type='text']").toggleClass("hidden");
});