// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAleu8Y7Pg3Km2IoLomBD-vYQE-DRKaC-E",
  authDomain: "resorvationdatabase.firebaseapp.com",
  databaseURL: "https://resorvationdatabase-default-rtdb.firebaseio.com",
  projectId: "resorvationdatabase",
  storageBucket: "resorvationdatabase.appspot.com",
  messagingSenderId: "662387661266"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var date = getInputVal('date');
  var time = getInputVal('time');
  var people = getInputVal('people');
  

  // Save message
  saveMessage(name, email, phone, date, time, people);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, date, time, people){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    phone:phone,
    date:date,
    time:time,
    people:people
  });
}