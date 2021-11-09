var username = localStorage.getItem("username");
var roomname = localStorage.getItem("roomname");
function send(e) {
    var mes = document.getElementById("message_heart").value;
    firebase.database().ref(roomname).update({username : username, message : mes, likes : 0});
    document.getElementById("message_heart").value = "";
}
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname")
    window.location = "index.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyDKKAzrQJ5xMspkadFPm0uF31dKbkC6Pfk",
    authDomain: "let-s-chat-d4ea0.firebaseapp.com",
    databaseURL: "https://let-s-chat-d4ea0-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-d4ea0",
    storageBucket: "let-s-chat-d4ea0.appspot.com",
    messagingSenderId: "594998970397",
    appId: "1:594998970397:web:a5c217042c07c183105ef4"
  }; 
 const app = firebase.initializeApp(firebaseConfig);
  