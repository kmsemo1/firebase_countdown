  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCMTFK3dipSb0R6cDuEvsUXa1lijBK0UDs",
    authDomain: "clickcountdown-e38c6.firebaseapp.com",
    databaseURL: "https://clickcountdown-e38c6.firebaseio.com",
    projectId: "clickcountdown-e38c6",
    storageBucket: "clickcountdown-e38c6.appspot.com",
    messagingSenderId: "77975431364"
  };
  firebase.initializeApp(config);

  var count = 100

  firebase.database().ref().on('value', function(snapshot){
      count = snapshot.val().clicks;
      $("clickValue").html(count);
  })

  $('clickButton').on('click', function(){
      count--;
      firebase.database().ref().set({
          clicks: count
      });
  })

  $('restartButton').on('click', function(){
    firebase.database().ref().set({
        clicks: 100
    });
  })