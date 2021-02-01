<?php
	if(isset($_GET['submit'])){
		$date = $_GET['date'];
	    $month = $_GET['month'];
	    $year = $_GET['year'];
	    if (!empty($date) && !empty($month) && !empty($year)) {
	        $current_date = date_create(date('d-m-Y'));
			echo $current_date;
		} else {
			echo 'All the field required';
		}
	}

?>
	<form action="" method="GET">
		</br><label>Enter Date:</label></br> 
		<label>Date:</label></br>
		<input type="number" name="date"></br>
		<label>Month:</label></br>
		<input type="number" name="month"></br>
		<label>Year:</label></br>
		<input type="number" name="year"></br></br>
		<input type="submit" name="submit">
	</form>