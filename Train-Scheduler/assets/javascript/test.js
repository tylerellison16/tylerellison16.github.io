<<<<<<< HEAD

// initializes Firebase databse
// use snippet from firebase's web app option
var config = {
    apiKey: "AIzaSyAOq79L5Bx5nuCcu8UwPJwLJ0Dhyz66n5U",
    authDomain: "train-scheduler-4914c.firebaseapp.com",
    databaseURL: "https://train-scheduler-4914c.firebaseio.com",
    projectId: "train-scheduler-4914c",
    storageBucket: "train-scheduler-4914c.appspot.com",
    messagingSenderId: "291440899936"
    };

  firebase.initializeApp(config);

  var database = firebase.database();

  var timeTillTrain = 0;

  //current time function
  function displayCurrentTime() {
      setInterval(function() {
          $('#current-time').html(moment().format('hh:mm A'))

      }, 1000);
  }
  displayCurrentTime();

  




=======

// initializes Firebase databse
// use snippet from firebase's web app option
var config = {
    apiKey: "AIzaSyAOq79L5Bx5nuCcu8UwPJwLJ0Dhyz66n5U",
    authDomain: "train-scheduler-4914c.firebaseapp.com",
    databaseURL: "https://train-scheduler-4914c.firebaseio.com",
    projectId: "train-scheduler-4914c",
    storageBucket: "train-scheduler-4914c.appspot.com",
    messagingSenderId: "291440899936"
    };

  firebase.initializeApp(config);

  var database = firebase.database();

  var timeTillTrain = 0;

  //current time function
  function displayCurrentTime() {
      setInterval(function() {
          $('#current-time').html(moment().format('hh:mm A'))

      }, 1000);
  }
  displayCurrentTime();

  




>>>>>>> 37c463bcf5e77962809ab9c600aeef1287a1efac
