/*$(document).ready(function() {
	window.alert("hi");
	var name = ' ';
	$("#name-button").on("click" function(e) {
		e.preventDefault();
		name = $("#first-name").val();
		console.log(name);
		$("#show-name").text(name);
	})
})*/

/*$(document).ready(function() {

  var playerName = '';

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerName = $('#player-name').val();
    console.log(playerName);
    $('#show-player-name').text(playerName);
  })

})*/

$(document).ready(function() {

  var firstName = '';
  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    firstName = $('#first-name').val();
    console.log(firstName);
    $('#show-first-name').text(firstName);
  })
  
  var middleName = '';
  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    middleName = $('#middle-name').val();
    console.log(middleName);
    $('#show-middle-name').text(middleName);
  })

  var lastName = '';
  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    lastName = $('#last-name').val();
    console.log(lastName);
    $('#show-last-name').text(lastName);
  })
  
})