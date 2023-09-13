const welcomeAudio = document.getElementById("welcome-audio"); // Added this line
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
  document.getElementById("billable").value = "";
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
  var billableAmount = document.getElementById("billable").value;

  var newRow = bookingTable.insertRow(1);
  var slotNumberCell = newRow.insertCell(0);
  var nameCell = newRow.insertCell(1);
  var licensePlateCell = newRow.insertCell(2);
  var phoneNumberCell = newRow.insertCell(3);
  var carBrandCell = newRow.insertCell(4);
  var startTimeCell = newRow.insertCell(5);
  var endTimeCell = newRow.insertCell(6);
  var statusCell = newRow.insertCell(7);
  var billableAmountCell = newRow.insertCell(8);

  slotNumberCell.textContent = selectedSlot;
  nameCell.textContent = name;
  licensePlateCell.textContent = licensePlate;
  phoneNumberCell.textContent = phoneNumber;
  carBrandCell.textContent = carBrand;
  startTimeCell.textContent = startTime;
  endTimeCell.textContent = endTime;
  statusCell.textContent = "Booked";
  billableAmountCell.textContent = billableAmount;
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
function logout() {
  location.replace("http://127.0.0.1:5500/public/index.html");
}
document.addEventListener("DOMContentLoaded", function () {
  const heading = document.getElementById("typing-effect");
  heading.style.display = "inline-block";

  let textToType = "Available & Booked Parking Slots";
  let currentIndex = 0;
  function typeText() {
    heading.textContent = "";
    currentIndex = 0;

    function typeCharacter() {
      if (currentIndex < textToType.length) {
        heading.textContent += textToType.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeCharacter, 100);
      }
    }

    typeCharacter();
  }

  setInterval(typeText, 5000);
  typeText();
});
function updateBillableAmount() {
  var startTime = new Date(document.getElementById("bookStarttime").value);
  var endTime = new Date(document.getElementById("bookEndtime").value);

  if (isNaN(startTime) || isNaN(endTime)) {
    // Invalid date input, reset billable amount
    document.getElementById("billable").value = "";
    return;
  }

  var durationInMilliseconds = endTime - startTime;
  var durationInMinutes = durationInMilliseconds / (1000 * 60);

  var halfHourRate = 10; // $10 for each half-hour

  var billableAmount = 0;

  if (durationInMinutes > 0) {
    billableAmount = Math.ceil(durationInMinutes / 30) * halfHourRate;
  }

  // Update the billable amount field in the modal
  document.getElementById("billable").value = "$" + billableAmount.toFixed(2);
}

document
  .getElementById("bookStarttime")
  .addEventListener("input", updateBillableAmount);
document
  .getElementById("bookEndtime")
  .addEventListener("input", updateBillableAmount);
// Get the current date and time in the format expected by datetime-local inputs

function getCurrentDatetime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = (now.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
  var day = now.getDate().toString().padStart(2, "0");
  var hours = now.getHours().toString().padStart(2, "0");
  var minutes = now.getMinutes().toString().padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

// Set the min attribute for the start and end time inputs
document.getElementById("bookStarttime").min = getCurrentDatetime();
document.getElementById("bookEndtime").min = getCurrentDatetime();

function play() {
  welcomeAudio.play();
}
