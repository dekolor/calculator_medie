$(document).ready(function() {
	var suma = 0;
	var teza = 0;
	var medie = 0;
	var note = 0;
	var nume = null;

	function calculeaza() {
		teza = Number($("input[name=teza]").val());

		$("input[name^=nota]").each(function(index) {
			//console.log(index+":"+ $(this).val());
			suma = suma + Number($(this).val());
			note = note + 1;
		});

		if(teza > 0) {
			//console.log(teza);
			//console.log("Se face media cu teza.");
			medie = suma/note;
			//console.log("S-a facut suma/note, media: " + medie);
			medie = medie*3;
			//console.log("S-a facut medie*3, media: " + medie);
			medie = medie+teza;
			//console.log("S-a facut medie + teza, media: " +medie);
			medie = medie/4;
			//console.log("S-a facut medie/4, media: " + medie);
		} else {
			medie = suma/note;
		}

		//console.log("note: " + note);
		//console.log("suma: " + suma);
		//console.log("medie: " + medie);
		medie = Math.round(medie * 100) / 100;
		//return medie;
		$("#medie").html("<b>Media</b>: " + medie);
		suma = null;
		note = null;
		medie = null;
	}

	$("#submit").click(function() {
		calculeaza();
	});

	$("#add").click(function() {
		nume = $("#inputs input:last");
				nume = nume.attr('name');
				//alert(nume);
				nume = nume.split("nota_");
				nume = parseInt(nume[1])+1;
				$("#inputs").append("<input id='nota' type='text' class='form-control' name='nota_" + nume + "' placeholder='Nota " + nume + "'><br>");
				$("input").keyup(function(){
					calculeaza();
				});
	});

	$("input").keyup(function(){
		calculeaza();
	});
});