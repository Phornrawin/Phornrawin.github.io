$(document).ready(function(){
	$("#bmr_input").hide();
	$("#total_cholesterol_input").hide();

	$("#bmr_output").hide();
	$("#chol_output").hide();
    $("#calculate").change(function(event) {
    	console.log(this.value)
    	if (this.value == "bmi") {
    		$("#bmi_input").show();
    		$("#bmr_input").hide();
			$("#total_cholesterol-input").hide();

			$("#bmi_output").show();
			$("#bmr_output").hide();
			$("#chol_output").hide();
			
    	} else if (this.value == "bmr") {
    		$("#bmi_input").hide();
    		$("#bmr_input").show();
			$("#total_cholesterol_input").hide();

			$("#bmi_output").hide();
			$("#bmr_output").show();
			$("#chol_output").hide();
    	} else if (this.value == "total_cholesterol") {
    		$("#bmi_input").hide();
    		$("#bmr_input").hide();
			$("#total_cholesterol_input").show();

			$("#bmi_output").hide();
			$("#bmr_output").hide();
			$("#chol_output").show();
    	}
    });

    $("#btn_bmi").click(function(event) {
		let w = $("#bmi_kg").val();
		let h = $("#bmi_cm").val();
		let select_cal = $("#calculate").val();
		let data = {
					bmi_kg : w,
					bmi_cm : h,
					select_cal : select_cal
					};
		console.log(data);
		$.ajax({
			url: 'action.php',
			type: 'get',
			dataType: 'json',
			data: data,
			success:function (response){
				console.log(response);
				$("#bmi_value").text(response.bmi.toFixed(2));
				$("#bmi_level").text(response.level);
			}
		});
	});

	$("#btn_bmr").click(function(event) {
		let gender ;
		console.log("male", $('#bmr_sex_male:checked').val());
		console.log("femal", $('#bmr_sex_female:checked').val());
		if ($('#bmr_sex_male:checked').val()) {
			gender = "male";
		} else {
			gender = "female";
		}
		let w = $("#bmr_kg").val();
		let h = $("#bmr_cm").val();
		let age = $("#bmr_age").val();
		let activity = $("#bmr_activity").val();
		let select_cal = $("#calculate").val();
		let data = {
					bmr_sex : gender,
					bmr_kg : w,
					bmr_cm : h,
					bmr_age : age,
					bmr_activity : activity,
					select_cal : select_cal
		}
		console.log(data);
		$.ajax({
			url: 'action.php',
			type: 'get',
			dataType: 'json',
			data: data,
			success:function (response){
				console.log(response);
				$("#bmr_value").text(response.bmr.toFixed(2));
				$("#tdee_value").text(response.tdee.toFixed(2));
			}
		});
	});

	$("#btn_chol").click(function(event){
		let ldl = $("#chol_ldl").val();
		let hdl = $("#chol_hdl").val();
		let tri = $("#chol_tri").val();
		let select_cal = $("#calculate").val();
		let data = {
					chol_ldl : ldl,
					chol_hdl : hdl,
					chol_tri : tri,
					select_cal : select_cal
		}
		console.log(data);
		$.ajax({
			url: 'action.php',
			type: 'get',
			dataType: 'json',
			data: data,
			success:function (response){
				console.log(response);
				$("#total_cholesterol_value").text(response.total.toFixed(2));
				$("#total_cholesterol_level").text(response.level);
			}
		});
	});

    
 });