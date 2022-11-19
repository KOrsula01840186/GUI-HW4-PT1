//Kevin Orsula, kevin_orsula@student.uml.edu
$(document).ready(function () {
  jQuery.validator.addMethod("onlyInteger", function (value, element) { //Adds a validation method to check for floats
    if (value % 1 != 0) return false;
    else return true;
  }, "Please only enter Integers!");

  $("#forms").validate({ //Validation checker for input values, don't need to check for which values are larger between the two matching values becuase
    rules: {                 //generatetable handles the values
      colMin: {
        required: true,
        max: 50,
        min: -50,
        onlyInteger: true,
      },
      colMax: {
        required: true,
        max: 50,
        min: -50,
        onlyInteger: true,
      },
      rowMin: {
        required: true,
        max: 50,
        min: -50,
        onlyInteger: true,
      },
      rowMax: {
        required: true,
        max: 50,
        min: -50,
        onlyInteger: true,
      }
    },
    validClass: "pass",
    errorClass: "invalid" //How error styling is handled
  })

  $("#submitButton").click(function() {
    generateTable();
  })

  function generateTable() { //Function used to generate the table after checking to make sure the inputs are valid
    if ($('#forms').valid()) {
      var colMin = parseInt($('#colMin').val());
      var colMax = parseInt($('#colMax').val());
      var rowMin = parseInt($('#rowMin').val());
      var rowMax = parseInt($('#rowMax').val());
      var colLow, colHigh, rowLow, rowHigh;

      if (colMin <= colMax) { //Used to switch the col values and place the lower on the left
        colLow = colMin;
        colHigh = colMax;
      } else {
        colLow = colMax;
        colHigh = colMin;
      }

      if (rowMin <= rowMax) { //Used to switch the row values and place the lower on the right
        rowLow = rowMin;
        rowHigh = rowMax;
      } else {
        rowLow = rowMax;
        rowHigh = rowMin;
      }

      var newHTML = '<tr><td>' + ' ' + '</td>'; //Creates the new table 
      for (var i = colLow; i <= colHigh; i++) newHTML += ('<td>' + i + '</td>');
      newHTML += '</tr>';

      for (var j = rowLow; j <= rowHigh; j++) {
        newHTML += '<tr><td>' + j + '</td>';
        for (var k = colLow; k <= colHigh; k++) newHTML += '<td>' + (j * k) + '</td>';
        newHTML += '</tr>'
      }
      $('#multTable').html(newHTML);
    }
  }

})




