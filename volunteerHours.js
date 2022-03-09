  var divs = new Array();
    divs[0] = "firstName";
    divs[1] = "lastName";
    divs[2] = "volID";
    divs[3] = "hoursWorked";
    divs[4] = "totalHours";
    divs[5] = "calculate";
    function validate()
	{
      var inputs = new Array();
      inputs[0] = document.getElementById('first').value;
      inputs[1] = document.getElementById('last').value;
      inputs[2] = document.getElementById('vid').value;
      inputs[3] = document.getElementById('hourswked').value;
      inputs[4] = document.getElementById('tothours').value;
      inputs[5] = document.getElementById('result').value;
      var errors = new Array();
      errors[0] = "<span style='color:red'>Please enter your first name.</span>";
      errors[1] = "<span style='color:red'>Please enter your last name.</span>";
      errors[2] = "<span style='color:red'>Please enter your volunteer ID.</span>";
      errors[3] = "<span style='color:red'>Please enter your hours worked.</span>";
      errors[4] = "<span style='color:red'>Please enter your expected total hours.</span>";
      errors[5] = "<span style='color:red'>Calculate Results.</span>";
     
      function hrsSolution(){
        if (formula = totalHours - hoursWorked && formula >= 1){
            console.log("Hours still needed to complete are: "+ formula);
        } 
        else (formula <= 0) {
            console.log("Hours are completed. Please see Volunteer Coordinator.");
        }
     }
      
      function addRow(tableID) {
        // Get a reference to the table
        let tableRef = document.getElementById(tableID);
      
        // Insert a row at the end of the table
        let newRow = tableRef.insertRow(-1);
      
        // Insert a cell in the row at index 0
        let newCell = newRow.insertCell(0);
      
        // Append a text node to the cell
        var newText = formula
        let newText = document.getElementById(formula);
        newCell.appendChild(newText);
      }
      
      // Call addRow() with the table's ID
      addRow('volunteerInfo');
    };