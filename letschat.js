function login(){
    username = document.getElementById("Username").value;
    localStorage.setItem("username", username);
    window.location = "letschatroom.html";
}