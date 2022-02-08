function displayoff() {
    console.log("Runnning");
    document.getElementById("loginbakwas").style = 'display:none';
}

function displayshow() {
    console.log("Runnnins");
    document.getElementById("loginbakwas").style = 'display:block';
}

// Validation

// function validate() {
    
// }

function passvisible(){
    // var x = document.getElementById("pass");
    if(document.getElementById("pass").type == "password")
    document.getElementById("pass").type = "text";
    else
    document.getElementById("pass").type = "password";
}

function displaycrop(){
    removeplant()
    document.getElementById("cropdetails").style = "display:grid";
    document.getElementById("navhead").style = " background-color: #85FFBD ";
    document.getElementById("navhead").style = "background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)";
}

function removecrop(){
    document.getElementById("navhead").style = "background-image:none";
    document.getElementById("navhead").style = "background-color: #FBF8CC";
    document.getElementById("cropdetails").style = "display:none";
}

function displayplant(){
    removecrop()
    document.getElementById("plantdetails").style = "display:grid";
    document.getElementById("navhead").style = " background-color: #85FFBD ";
    document.getElementById("navhead").style = "background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)";
}

function removeplant(){
    document.getElementById("navhead").style = "background-image:none";
    document.getElementById("navhead").style = "background-color: #FBF8CC";
    document.getElementById("plantdetails").style = "display:none";
}