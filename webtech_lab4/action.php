<?php
	$select = $_GET["select_cal"];

	if($select == "bmi"){
		$kg = $_GET["bmi_kg"];
		$cm = $_GET["bmi_cm"];
		$bmi;
		$level;

		if ($cm != 0){
			$bmi = $kg/($cm/100)**2;
		}else{
			$bmi = 0;
		}
		if ($bmi < 18.5) {
			$level = "Lower weight";
		}elseif ($bmi >= 18.5 and $bmi <= 23.4) {
			$level = "Normal weight";
		}elseif ($bmi >= 23.5 and $bmi <= 28.4) {
			$level = "Higher weight";
		}elseif ($bmi >= 28.5 and $bmi <= 34.9) {
			$level = "Fat level 1";
		}elseif ($bmi >= 35.0 and $bmi <= 39.9) {
			$level = "Fat level 2";
		}else{
			$level = "Ultimate Fat";
		}

		$output = array("bmi"=>$bmi, "level"=>$level);
		echo json_encode($output);
	
	}elseif ($select == "bmr") {
		$bmr = 0;
		$tdee = 0;
		$gender = $_GET["bmr_sex"];
		$activity = $_GET["bmr_activity"];
		if($gender == "Male"){
			$bmr = 66 + (13.7 * $_GET["bmr_kg"]) + (5 * $_GET["bmr_cm"]) - (6.8 * $_GET["bmr_age"]);

		}else{
			$bmr = 665 + (6.9 * $_GET["bmr_kg"]) + (1.8 * $_GET["bmr_cm"]) - (4.7 * $_GET["bmr_age"]);
		}
		switch ($activity) {
			case 0:
				$tdee = $bmr * 1.2;	
				break;
			case 1:
				$tdee = $bmr * 1.375;	
				break;
			case 2:
				$tdee = $bmr * 1.55;	
				break;
			case 4:
				$tdee = $bmr * 1.725;	
				break;
			case 5:
				$tdee = $bmr * 1.9;	
				break;
			default:
				$tdee = 0;
				break;
		}

		$output = array("bmr"=>$bmr, "tdee"=>$tdee);
		echo json_encode($output);
		
		
	}elseif ($select == "total_cholesterol"){
		$ldl = $_GET["chol_ldl"];
		$hdl = $_GET["chol_hdl"];
		$tri = $_GET["chol_tri"];
		$total = $ldl + $hdl + ($tri/5);
		$level;
		if($total < 200){
			$level = "Ideal";
		}elseif($total >= 200 and $total <240 ){
			$level = "Elevated";
		}else{
			$level = "High";
		}

		$output = array("total"=>$total, "level"=>$level);
		echo json_encode($output);


	}

?>