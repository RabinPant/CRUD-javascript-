var empService = new EmployeeService();

function $(key){
	return document.getElementById(key);
}

function clearFields(){
	$("first_name").value="";
	$("lastName").value = "";
	$("email").value = "";
	$("contact").value = "";
	$("status").checked = false;
}

function mapEmpData(){
	var emp = new Employee();
		emp.id=empService.getInsertId();
		emp.firstName = $("first_name").value;
		emp.lastName = $("lastName").value;
		emp.email = $("email").value;
		emp.contact = $("contact").value;
		emp.status =$("status").checked;

		return emp;

} 

function loadEmployees(){
	var content = "<ul>";
	for(var i = 0;i<empService.count();i++)
	{
		var emp = empService.getByIndex(i);
		content+="<li>" + emp.getFullName()+"</li>";
	}
	content+="</ul>";
	$("content").innerHTML = content;
}
window.onload = function(){

	loadEmployees();
	
	$("save-btn").onclick = function(){
		var emp = mapEmpData();	
		empService.insert(emp);	
		$("message").innerHTML ="Employee Data Added successfully";
		clearFields();
		$("employee-dialog").style.display = "none";
		$("content").style.display = "block";
		loadEmployees();	
		return false;
	};
}

$("add-btn").onclick = function(){
	$("employee-dialog").style.display = "block";
	$("content").style.display = "none";
}

$("cancel-btn").onclick = function(){
	$("employee-dialog").style.display = "none";
	$("content").style.display = "block";
}