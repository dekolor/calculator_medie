<?php
$note = 0;
$add = 0;

if(!empty($_POST['teza'])) {
	foreach($_POST as $nota) {
		if(intval($nota)!=0) {
			$note++;
			if($note==1) {
				continue;
			}
			$add = $add + intval($nota);
		}
	}
	$note = $note-1;
	$medie = $add/$note;
	$medie = $medie*3;
	$medie = $medie+$_POST['teza'];
	$medie = $medie/4;
} else {
	foreach($_POST as $nota) {
		if(intval($nota)!=0) {
			$note++;
			$add = $add + intval($nota);
		}
	}
	$medie = $add/$note;
}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>calculator</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">
		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
		<script src="custom.js"></script>
	</head>

	<body>
		<div class="container"><br><br><br>
			<div class="card">
			  <div class="card-body">
			    <h2>Rezultat medie</h2>
			    <hr>
			    Media ta este: <b><?php echo substr($medie,0,4); ?></b><br><br>
			    <a href="index.html" class="btn btn-info">Calculeaza o alta medie</a>
			  </div>
			</div>
		</div>
	</body>
</html>