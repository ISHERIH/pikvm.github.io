var firebaseConfig = {
	apiKey: "AIzaSyA7JX5I_BD9RgbvQj3VAN3F2RtknKkB-Js",
    authDomain: "pikvm-492d7.firebaseapp.com",
    databaseURL: "https://pikvm-492d7-default-rtdb.firebaseio.com",
    projectId: "pikvm-492d7",
    storageBucket: "pikvm-492d7.appspot.com",
    messagingSenderId: "88193656332",
    appId: "1:88193656332:web:9ed96ea7222b85a24ff029",
    measurementId: "G-T3ZQZ2J0P8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var relay;

	database.ref().on("value", function(snap){
		relay = snap.val().Relay;
		if(relay == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Relay");

		if(relay == "1"){    // post to firebase
			firebaseRef.set("0");
			relay = "0";
		} else {
			firebaseRef.set("1");
			relay = "1";
		}
	})
});