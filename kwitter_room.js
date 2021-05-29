
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAX_M5NttpilYUxzRWgqEAWJAkCZHOuYZk",
      authDomain: "kwitternew-a33aa.firebaseapp.com",
      databaseURL: "https://kwitternew-a33aa-default-rtdb.firebaseio.com",
      projectId: "kwitternew-a33aa",
      storageBucket: "kwitternew-a33aa.appspot.com",
      messagingSenderId: "20846749542",
      appId: "1:20846749542:web:1f1eae6e1d4d24cab30aa7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name;
    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child("room_name").update({purpose: "adding kwitter roomname"});
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";

    }

    function getData() 
    {firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name= "+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}