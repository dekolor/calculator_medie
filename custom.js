$(document).ready(function() {
	var nume = null;
	$("#add").click(function() {
		nume = $("#inputs input:last");
		nume = nume.attr('name');
		//alert(nume);
		nume = nume.split("nota_");
		nume = parseInt(nume[1])+1;
		$("#inputs").append("<input id='nota' type='text' class='form-control' name='nota_" + nume + "' placeholder='Nota " + nume + "'><br>");
	});
});