function addPersonal() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    document.getElementById("rname").innerText = name;
    document.getElementById("remail").innerText = email;
    document.getElementById("rphone").innerText = phone;
    document.getElementById("raddress").innerText = address;

    document.getElementById("personal").style.display = "none";
    document.getElementById("education").style.display = "block";
}

function addEducation() {

    var degree = document.getElementById("degree").value;
    var college = document.getElementById("college").value;
    var year = document.getElementById("year").value;
    var marks = document.getElementById("marks").value;

    var educationData = degree + " from " + college + " (" + year + ") " +"CGPA - " + marks;
    document.getElementById("reducation").innerText = educationData;
    
    document.getElementById("experience").style.display = "block";
    document.getElementById("education").style.display = "none";
}


function addExperience() {

    var company = document.getElementById("company").value;
    var role = document.getElementById("role").value;
    var duration = document.getElementById("duration").value;
    var desc = document.getElementById("desc").value;
    var expData = role + " at " + company + " (" + duration + ") - " + desc;
    document.getElementById("rexperience").innerText = expData;
    document.getElementById("skills").style.display = "block";
    document.getElementById("experience").style.display = "none";
}


function addSkills() {
    var skills = document.getElementById("skill").value;
    document.getElementById("rskills").innerText = skills;
    document.getElementById("projects").style.display = "block";
    document.getElementById("skills").style.display = "none";
}


function addProject() {
    var title = document.getElementById("title").value;
    var desc = document.getElementById("pdesc").value;
    var tech = document.getElementById("tech").value;
    var projectData = title + " - " + desc + " (Used: " + tech + ")";
    document.getElementById("rprojects").innerText = projectData;
    
    document.getElementById("projects").style.display = "none";
    document.getElementById("savebtn").style.display = "block";
    
    document.getElementById("right").style.width = "100%";
    document.getElementById("left").style.width = "0";

}

function editPersonal() {

    document.getElementById("left").style.width = "45%";
    document.getElementById("right").style.width = "55%";
    document.getElementById("personal").style.display = "block";
}

function editEducation() {
    document.getElementById("left").style.width = "45%";
    document.getElementById("right").style.width = "55%";
    document.getElementById("education").style.display = "block";
}

function editExperience() {
    document.getElementById("left").style.width = "45%";
    document.getElementById("right").style.width = "55%";
    document.getElementById("experience").style.display = "block";
}

function editSkills() {
    document.getElementById("left").style.width = "45%";
    document.getElementById("right").style.width = "55%";
    document.getElementById("skills").style.display = "block";
}

function editProjects() {
    document.getElementById("left").style.width = "45%";
    document.getElementById("right").style.width = "55%";
    document.getElementById("projects").style.display = "block";
}

function saveResume() {

     var buttons = document.getElementsByClassName("editbtn");

    for(var i = 0; i < buttons.length; i++) {

        buttons[i].style.display = "none";

    }
     document.getElementById("savebtn").style.display = "none";
    window.print();
   

}