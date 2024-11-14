const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");
     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });
     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });


     
// $(document).ready(function(){
// $('[data-toggle="tooltip"]').tooltip();
// });

// function addRow() {
//   var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
//   var newRow = table.insertRow(table.rows.length);
//   var cell1 = newRow.insertCell(0);
//   var cell2 = newRow.insertCell(1);
//   var cell3 = newRow.insertCell(2);

//   cell1.innerHTML = "<input type='number' value=''>";
//   cell2.innerHTML = "<input type='text' value=''>";
//   cell3.innerHTML = "<input type='text' value=''>";

  
//   deleteCell.innerHTML = "<button class='delete-btn' onclick='deleteRow(this)'>Delete</button>";
// }



   
  

  function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = ""; // Clear existing data
            data.forEach(function(student, index) {
                var newRow = tableBody.insertRow();
                newRow.insertCell(0).textContent = index + 1;
                newRow.insertCell(1).textContent = student.rollNumber;
                newRow.insertCell(2).textContent = student.name;
            });
        }
    };
    xhr.open("GET", "your_server_endpoint_here", true);
    xhr.send();
}

// Call fetchData function when the page loads
window.onload = fetchData;


var students = [

];

function populateTable() {
  var tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  students.forEach(function(student, index) {
      var newRow = tableBody.insertRow();
      newRow.insertCell(0).textContent = index+1;
      newRow.insertCell(1).textContent = student.rollNumber;
      newRow.insertCell(2).textContent = student.name;
  });
}

window.onload = populateTable;

function addRow() {
  var rollNumber = prompt("Enter Roll Number:");
  var name = prompt("Enter Name:");
  if (rollNumber && name) {
      var tableBody = document.getElementById("tableBody");
      var newRow = tableBody.insertRow();
      newRow.insertCell(0).textContent = students.length + 1;
      newRow.insertCell(1).textContent = rollNumber;
      newRow.insertCell(2).textContent = name;
      students.push({ rollNumber: rollNumber, name: name });
  } else {
      alert("Both Roll Number and Name are required.");
  }
}

function saveTableData() {
  alert("Table data saved!");
}

function searchTable() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2]; // Assuming the name of the student is in the third column (index 2)
      if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
}

