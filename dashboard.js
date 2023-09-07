function successfully() {
  $("#successModal").modal("show");
  $("#myModal").modal("hide");
  document.getElementById("bookName").value = "";
  document.getElementById("bookLicenseplate").value = "";
  document.getElementById("bookPhonenumber").value = "";
  document.getElementById("bookCarbrand").value = "";
  document.getElementById("slotSelector").value = "";
  document.getElementById("customFile").value = "";
  document.getElementById("bookStarttime").value = "";
  document.getElementById("bookEndtime").value = "";
  updateParkingDetailsList();
}

function initializeSlotStatuses() {
  var parkingSlots = document.querySelectorAll(".parking-slot");
  parkingSlots.forEach(function (slot) {
    slot.dataset.status = "Available";
  });
}

initializeSlotStatuses();

function updateDropdownOptions() {
  var slotSelector = document.getElementById("slotSelector");
  var parkingSlots = document.querySelectorAll(".parking-slot");

  slotSelector.innerHTML =
    '<option value="" disabled selected>Select a parking slot</option>';

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
  var selectedSlot = document.getElementById("slotSelector").value;
  var startTime = document.getElementById("bookStarttime").value;
  var endTime = document.getElementById("bookEndtime").value;

  var bookingTable = document.getElementById("bookingTable");
  var newRow = bookingTable.insertRow(1);

  var slotNumberCell = newRow.insertCell(0);
  var nameCell = newRow.insertCell(1);
  var licensePlateCell = newRow.insertCell(2);
  var phoneNumberCell = newRow.insertCell(3);
  var carBrandCell = newRow.insertCell(4);
  var startTimeCell = newRow.insertCell(5);
  var endTimeCell = newRow.insertCell(6);
  var statusCell = newRow.insertCell(7);

  slotNumberCell.textContent = selectedSlot;
  nameCell.textContent = name;
  licensePlateCell.textContent = licensePlate;
  phoneNumberCell.textContent = phoneNumber;
  carBrandCell.textContent = carBrand;
  startTimeCell.textContent = startTime;
  endTimeCell.textContent = endTime;
  statusCell.textContent = "Booked";
}

document
  .getElementById("bookParkingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    color();

    updateBookingList();

    successfully();
  });

$("#myModal").on("hidden.bs.modal", function () {
  updateDropdownOptions();
});
function updateParkingDetailsList() {
  var parkingDetailsList = document.getElementById("parkingDetailsList");
  parkingDetailsList.innerHTML = "";
  for (var i = 1; i <= 15; i++) {
    var parkingSlot = document.querySelector(
      ".parking-slot[data-slot='Slot " + i + "']"
    );
    var slotStatus = parkingSlot.dataset.status;
  }
}
