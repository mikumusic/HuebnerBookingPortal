var config = {

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
  var date = getInputVal('date');
  var time = getInputVal('time');
  var people = getInputVal('people');

  // Save message
  saveMessage(name, email, date, time, people);

  // Show alert
//document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
  //},3000);

  // Clear form
  //document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id);
}

// Save message to firebase
function saveMessage(name, email, date, time, people){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    date: date,
    time: time,
    people:people
  });
}
