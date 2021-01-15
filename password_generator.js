function validate_input(inp){
	if (isNaN(inp.len) || isNaN(inp.min_up) || isNaN(inp.min_low) || isNaN(inp.min_num) || isNaN(inp.min_sym)){
		return "Please fill all the fields.";
	}
	if(inp.len <= 7 || inp.len >= 26){
		return "\"Length of Password\" should be within the range of 8 to 25 characters.";
	}
	if(inp.min_up < 0){
		return "\"Upper Case letter\" field can not be a negative number.";
	}                                                         
	if(inp.min_low < 0){                                     
		return "\"Lower Case letter\" field can not be a negative number.";
	}                                                         
	if(inp.min_num < 0){                                     
		return "\"Number of Digits\" field can not be a negative number.";
	}                                                         
	if(inp.min_sym < 0){                                     
		return "\"Number of Symbols\" field can not be a negative number.";
	}
	return "success";
}

function create(){
	var upper_case = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var lower_case = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var numbers = [1,2,3,4,5,6,7,8,9,0];
	var symbols = ['!','@','#','$','%','&'];
	var all = upper_case.concat(lower_case,numbers,symbols);
	
	var inp_json = {};
	inp_json["min_up"]  = document.getElementById("req_up").valueAsNumber;
	inp_json["min_low"] = document.getElementById("req_low").valueAsNumber;
	inp_json["min_num"] = document.getElementById("req_num").valueAsNumber;
	inp_json["min_sym"] = document.getElementById("req_sym").valueAsNumber;
	inp_json["len"] = document.getElementById("req_len").valueAsNumber;
	var res = "";
	
	var validation_result = validate_input(inp_json)
	
	if(validation_result !== "success"){
		document.getElementById("result").innerHTML = "<div style='background-color: rgba(255,255,255,0.9); font-size: 20px;font-weight: normal; padding: 5px;'>Error: " + validation_result + "</div>";
		document.getElementById("result").style.display = "block";
		document.getElementById("result").style.color = "#ff0000";
		return;
	}
	
	while(inp_json["min_up"] > 0){
		res = res + upper_case[(Math.floor(Math.random()*100)%upper_case.length)];
		inp_json["min_up"]--;
	}
	while(inp_json["min_low"] > 0){
		res = res + lower_case[(Math.floor(Math.random()*100)%lower_case.length)];
		inp_json["min_low"]--;
	}
	while(inp_json["min_num"] > 0){
		res = res + numbers[(Math.floor(Math.random()*100)%numbers.length)];
		inp_json["min_num"]--;
	}
	while(inp_json["min_sym"] > 0){
		res = res + symbols[(Math.floor(Math.random()*100)%symbols.length)];
		inp_json["min_sym"]--;
	}
	while(inp_json["len"] > res.length){
		res = res + all[(Math.floor(Math.random()*100)%all.length)];
	}
	
	var shuffel = [];
	
	function is_present(str, char){
		for(i=0; i < str.length; i++){
			if(str[i] == char){
				return true;
			}
		}
	}
	
	while(shuffel.length < res.length){
		var index = Math.floor(Math.random()*100)%res.length;
		if(!is_present(shuffel, index)){
			shuffel.push(index);
		}
	}
	
	final_res="";
	
	for(i=0; i < shuffel.length; i++){
		final_res = final_res + res[shuffel[i]];
	}
	
	document.getElementById("result").innerHTML = final_res;
	document.getElementById("result").style.display = "block";
	document.getElementById("result").style.color = "#000000";
}
