
//Initialize Firebase database
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAOq79L5Bx5nuCcu8UwPJwLJ0Dhyz66n5U",
    authDomain: "train-scheduler-4914c.firebaseapp.com",
    databaseURL: "https://train-scheduler-4914c.firebaseio.com",
    projectId: "train-scheduler-4914c",
    storageBucket: "",
    messagingSenderId: "291440899936"
    };
 firebase.initializeApp(config);

 //Create database variable to create reference to firebase.database().
 var database = firebase.database();

 var tMinutesTillTrain = 0;

//Show and update current time. Use setInterval method to update time.
function displayRealTime() {
setInterval(function(){
    $('#current-time').html(moment().format('hh:mm A'))
  }, 1000);
}
displayRealTime();

 var tRow = "";
 var getKey = "";

 $("#submit-button").on("click", function() {

	// Prevent form from submitting
	event.preventDefault();

    //creating variables to store each form entry submission. We grab by each form's input id or input class, 
    //or an entire form group's class at once (i think)
	var trainName = $("#train-name").val().trim();
	var destination = $("#destination").val().trim();
	var firstTrainTime = $("#first-train-time").val().trim();
	var trainFrequency = $("#frequency").val().trim();

	//log result to console
	console.log(trainName);
	console.log(destination);
	console.log(firstTrainTime);
	console.log(trainFrequency);

    //Form validation to make sure they're complete. if one of the input classes return empty,
    //the page will return and update user w/ note
	if (trainName === "" || destination === "" || firstTrainTime === "" || trainFrequency === ""){
		$("#not-military-time").empty();
		$("#missing-field").html("ALL fields are required to add a train to the schedule.");
		return false;		
	}

	//checking in addition to see if there are any null values entered aka a letter instead of a number or something similarly silly
	else if (trainName === null || destination === null || firstTrainTime === null || trainFrequency === null){
		$("#not-military-time").empty();
		$("#not-a-number").empty();
		$("#missing-field").html("ALL fields are required to add a train to the schedule.");
		return false;		
	}

	//Check firsttraintime entry for accuracy, give note if not 
	else if (firstTrainTime.length !== 5 || firstTrainTime.substring(2,3)!== ":") {
		$("#missing-field").empty();
		$("#not-a-number").empty();
		$("#not-military-time").html("Time must be in military format: HH:mm. For example, 15:00.");
		return false;
	}

	//Dispell chance of NaN occuring without failing submissionfor frequency entries
	else if (isNaN(trainFrequency)) {
    	$("#missing-field").empty();
    	$("#not-military-time").empty();
    	$("#not-a-number").html("Not a number. Enter a number (in minutes).");
    	return false;
	}

	//If form is valid, submit away
	else {
		$("#not-military-time").empty();
		$("#missing-field").empty();
		$("#not-a-number").empty();

        //Moment JS:
        //These caclulations determine train's next arrival time by adding a trains  
        //frequency by its first arrival time. We use this to determine the difference in min between
        //any current time and the train's next arrival 
	    var firstTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years");
	    console.log(firstTimeConverted);

        // moment() catches current time with momentJS and fills our variable
	    var currentTime = moment();
	    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

	    // used for more calculations
	    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

	    // obtain the what minutes are left with each train's trip
	    var tRemainder = diffTime % trainFrequency;
	    console.log(tRemainder);

	    // display the minutes until the next trip
	    var tMinutesTillTrain = trainFrequency - tRemainder;
	    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

	    // display the exact time that this next trip will occur 
	    var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm A");
	    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

		//local storage object
		var newTrain = {
			trainName: trainName,
			destination: destination,
			firstTrainTime: firstTrainTime,
			trainFrequency: trainFrequency,
			nextTrain: nextTrain,
			tMinutesTillTrain: tMinutesTillTrain,
			currentTime: currentTime.format("hh:mm A")
		};

		//Save/upload train data to the database.
		database.ref().push(newTrain);

		//Log everything to console for debugging purposes.
		console.log("train name in database: " + newTrain.trainName);
		console.log("destination in database: " + newTrain.destination);
		console.log("first train time in database: " + newTrain.firstTrainTime);
		console.log("train frequency in database: " + newTrain.trainFrequency);
		console.log("next train in database: " + newTrain.nextTrain);
		console.log("minutes away in database: " + newTrain.tMinutesTillTrain);
		console.log("current time in database: " + newTrain.currentTime);

		//Confirmation modal that appears when user submits form and train is added successfully to the schedule.
		$(".add-train-modal").html("<p>" + newTrain.trainName + " was successfully added to the current schedule.");
		$('#addTrain').modal();

		//Remove the text from the form boxes after user presses the add to schedule button.
		$("#train-name").val("");
		$("#destination").val("");
		$("#first-train-time").val("");
		$("#frequency").val("");
	}
});


// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update the page in real-time when the firebase database changes.
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
	console.log(childSnapshot.val());
	console.log(prevChildKey);

	//Set variables for form input field values equal to the stored values in firebase.
	var trainName = childSnapshot.val().trainName;
	var destination = childSnapshot.val().destination;
	var firstTrainTime = childSnapshot.val().firstTrainTime;
	var trainFrequency = childSnapshot.val().trainFrequency;
	var nextTrain = childSnapshot.val().nextTrain;
	var tMinutesTillTrain = childSnapshot.val().tMinutesTillTrain;
	var currentTime = childSnapshot.val().currentTime;

	//Train info
	console.log(trainName);
	console.log(destination);
	console.log(firstTrainTime);
	console.log(nextTrain);
	console.log(tMinutesTillTrain);
	console.log(trainFrequency);
	console.log(currentTime);

	//Moment JS math caclulations to determine train next arrival time and the number of minutes away from destination.
	// First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % trainFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = trainFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm A");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


	//Update the HTML (schedule table) to reflect the latest stored values in the firebase database.
	var tRow = $("<tr>");
	var trainTd = $("<td>").text(trainName);
    var destTd = $("<td>").text(destination);
    var nextTrainTd = $("<td>").text(nextTrain);
    var trainFrequencyTd = $("<td>").text(trainFrequency);
    var tMinutesTillTrainTd = $("<td>").text(tMinutesTillTrain);

    // Append the newly created table data to the table row.
    //Append trash can icon to each row so that user can delete row if needed.
    tRow.append("<img src='assets/images/deletetrain.png' alt='delete train line information' class='trash-train mr-3'>", trainTd, destTd, trainFrequencyTd, nextTrainTd, tMinutesTillTrainTd);
    // Append the table row to the table body
    $("#schedule-body").append(tRow);
});


//Click event for trash can icon/button. When user clicks trash can to remove a train from the schedule...
 $("body").on("click", ".trash-train", function(){
	// Prevent form from submitting
	event.preventDefault();

	//confirm with the user before he or she decides to actually delete the train data.
	var confirmDelete = confirm("Deleting a train permanently removes the train from the system. Are you sure you want to delete this train?");
	//To do: Replace alert with modal... Confirmation modal that appears when user wants to remove train from schedule.
		//$(".remove-train-modal").html("<p>" + " Deleting a train permanently removes the train from the system. Are you sure you want to delete this train?" + "</p>");
		//$('#removeTrain').modal();
	//If user confirms...
	if (confirmDelete) {
		//Remove the closest table row.
		$(this).closest('tr').remove();
		//To do: Remove train info from db.
		// getKey = $(this).parent().attr('id');
		// console.log(getKey);
		//dataRef.child(key).remove();
		//database.ref().child(getKey).remove();
	}

	else {
		return;
	}
});

//One way to initialize all tooltips on a page would be to select them by their data-toggle attribute:
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

