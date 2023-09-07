function successfully() {
  // Show the success modal
  $("#successModal").modal("show");

  // Close the booking modal
  $("#myModal").modal("hide");

  // Clear the input fields in the form
  document.getElementById("bookName").value = "";
  document.getElementById("bookLicenseplate").value = "";
  document.getElementById("bookPhonenumber").value = "";
  document.getElementById("bookCarbrand").value = "";
  document.getElementById("slotSelector").value = "";
  document.getElementById("customFile").value = "";
  document.getElementById("bookStarttime").value = "";
  document.getElementById("bookEndtime").value = "";

  // Update the parking details list
  updateParkingDetailsList();
}

// Function to initialize parking slot statuses
function initializeSlotStatuses() {
  var parkingSlots = document.querySelectorAll(".parking-slot");
  parkingSlots.forEach(function (slot) {
    slot.dataset.status = "Available";
  });
}

// Call the initialization function when the page loads
initializeSlotStatuses();

// Function to update the dropdown options based on slot statuses
function updateDropdownOptions() {
  var slotSelector = document.getElementById("slotSelector");
  var parkingSlots = document.querySelectorAll(".parking-slot");

  // Remove all options from the dropdown
  slotSelector.innerHTML =
    '<option value="" disabled selected>Select a parking slot</option>';

  // Add available slots back to the dropdown
  parkingSlots.forEach(function (slot) {
    if (slot.dataset.status === "Available") {
      var option = document.createElement("option");
      option.value = slot.getAttribute("data-slot");
      option.textContent = slot.getAttribute("data-slot");
      slotSelector.appendChild(option);
    }
  });
}

function color() {
  var selectedSlot = document.getElementById("slotSelector").value;

  var parkingSlots = document.querySelectorAll(".parking-slot");
  for (var i = 0; i < parkingSlots.length; i++) {
    var slot = parkingSlots[i];
    if (slot.getAttribute("data-slot") === selectedSlot) {
      if (slot.dataset.status === "Available") {
        slot.style.backgroundColor = "red";
        slot.style.color = "black";
        slot.textContent = "Booked";
        slot.dataset.status = "Booked";
      }
    }
  }
}

function updateBookingList() {
  var name = document.getElementById("bookName").value;
  var licensePlate = document.getElementById("bookLicenseplate").value;
  var phoneNumber = document.getElementById("bookPhonenumber").value;
  var carBrand = document.getElementById("bookCarbrand").value;
  var selectedSlot = document.getElementById("slotSelector").value; // Get the selected slot
  var startTime = document.getElementById("bookStarttime").value;
  var endTime = document.getElementById("bookEndtime").value;

  // Create a new row for the table
  var bookingTable = document.getElementById("bookingTable");
  var newRow = bookingTable.insertRow(1); // Insert a row at the second position (after the header)

  // Add cells to the row
  var slotNumberCell = newRow.insertCell(0);
  var nameCell = newRow.insertCell(1);
  var licensePlateCell = newRow.insertCell(2);
  var phoneNumberCell = newRow.insertCell(3);
  var carBrandCell = newRow.insertCell(4);
  var startTimeCell = newRow.insertCell(5);
  var endTimeCell = newRow.insertCell(6);
  var statusCell = newRow.insertCell(7);

  // Set the cell values
  slotNumberCell.textContent = selectedSlot; // Set the selected slot as the slot number
  nameCell.textContent = name;
  licensePlateCell.textContent = licensePlate;
  phoneNumberCell.textContent = phoneNumber;
  carBrandCell.textContent = carBrand;
  startTimeCell.textContent = startTime;
  endTimeCell.textContent = endTime;
  statusCell.textContent = "Booked";
}

// Add an event listener to the form for when it is submitted
document
  .getElementById("bookParkingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting (reloading the page)

    // Call the color() function to change the color and text of the parking slot
    color();

    // Call the updateBookingList() function to add the booking to the list
    updateBookingList();

    // Call the successfully() function to show the alert
    successfully();
  });

// Add an event listener for the modal hidden event
$("#myModal").on("hidden.bs.modal", function () {
  updateDropdownOptions();
});
function updateParkingDetailsList() {
  var parkingDetailsList = document.getElementById("parkingDetailsList");
  parkingDetailsList.innerHTML = ""; // Clear the list first

  // Iterate through parking slots to find "Booked" ones
  for (var i = 1; i <= 15; i++) {
    var parkingSlot = document.querySelector(
      ".parking-slot[data-slot='Slot " + i + "']"
    );
    var slotStatus = parkingSlot.dataset.status;
  }
}
