// Get a reference to the table
var table = document.getElementById('table');

// Function to fetch all data from Firebase and display it in the table
function fetchData() {
  var ref = firebase.database().ref('users');
  ref.on('value', function(snapshot) {
    // Clear the table first
    table.innerHTML = '';

    // Create the table headers
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var headers = ['First Name', 'Last Name', 'Username', 'Password', 'Favorite Subject'];
    for (var i = 0; i < headers.length; i++) {
      var th = document.createElement('th');
      th.innerText = headers[i];
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);

    // Create the table body
    var tbody = document.createElement('tbody');
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');
      var td4 = document.createElement('td');
      var td5 = document.createElement('td');
      td1.innerText = childData.firstname;
      td2.innerText = childData.lastname;
      td3.innerText = childData.username;
      td4.innerText = childData.password;
      td5.innerText = childData.favourite_subject;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  });
}

// Call the fetchData function to display the data when the page loads
fetchData();

