function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
function Submit()
{
    var inpt = document.getElementById('empid');
    console.log("Emp id is --->", inpt.value);
    document.getElementById("emp_id").innerHTML = inpt.value;
    var nam = document.getElementById('name');
    
    document.getElementById("emp_name").innerHTML = nam.value;
    console.log(nam.value);
    var nam = document.getElementById('mail');
    
    document.getElementById("emp_mail").innerHTML = mail.value;
    var nam = document.getElementById('skill');
    
    document.getElementById("emp_skill").innerHTML = skill.value;
   // inpt.parentNode.appendChild(inpt.cloneNode(false));
}