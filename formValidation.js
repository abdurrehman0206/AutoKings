function initFormValidation() {
  const bookingForm = document.getElementById("booking-form");
  const fullName = document.getElementById("full-name");
  const phoneNumber = document.getElementById("phone-number");
  const email = document.getElementById("email");
  const serviceType = document.getElementById("service-type");
  const serviceRequested = document.getElementById("service-requested");
  const vehicleMake = document.getElementById("make");
  const vehicleModel = document.getElementById("model");
  const vehicleYear = document.getElementById("year");
  const vehicleLicensePlate = document.getElementById("license-plate");
  const date = document.getElementById("date");
  const time = document.getElementById("time");

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (fullName.value.trim() === "") {
      displayErrorMessage(fullName, "Full Name is required.");
    } else {
      clearErrorMessage(fullName);
    }

    const phoneNumberPattern = /^\d{10}$/;
    if (
      phoneNumber.value.trim() === "" ||
      !phoneNumberPattern.test(phoneNumber.value)
    ) {
      displayErrorMessage(
        phoneNumber,
        "Enter a valid Phone Number (10 digits)."
      );
    } else {
      clearErrorMessage(phoneNumber);
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.value.trim() === "" || !emailPattern.test(email.value)) {
      displayErrorMessage(email, "Enter a valid Email Address.");
    } else {
      clearErrorMessage(email);
    }

    if (serviceType.value === "") {
      displayErrorMessage(serviceType, "Select a Service Type.");
    } else {
      clearErrorMessage(serviceType);
    }

    if (serviceRequested.value === "") {
      displayErrorMessage(serviceRequested, "Select a Service Requested.");
    } else {
      clearErrorMessage(serviceRequested);
    }

    if (vehicleMake.value.trim() === "") {
      displayErrorMessage(vehicleMake, "Vehicle Make is required.");
    } else {
      clearErrorMessage(vehicleMake);
    }

    if (vehicleModel.value.trim() === "") {
      displayErrorMessage(vehicleModel, "Vehicle Model is required.");
    } else {
      clearErrorMessage(vehicleModel);
    }

    if (vehicleYear.value.trim() === "") {
      displayErrorMessage(vehicleYear, "Vehicle Year is required.");
    } else {
      clearErrorMessage(vehicleYear);
    }

    if (vehicleLicensePlate.value.trim() === "") {
      displayErrorMessage(vehicleLicensePlate, "License Plate is required.");
    } else {
      clearErrorMessage(vehicleLicensePlate);
    }

    if (date.value.trim() === "") {
      displayErrorMessage(date, "Preferred Date is required.");
    } else {
      clearErrorMessage(date);
    }

    if (time.value.trim() === "") {
      displayErrorMessage(time, "Preferred Time is required.");
    } else {
      clearErrorMessage(time);
    }
  });

  function displayErrorMessage(input, message) {
    const errorContainer =
      input.parentElement.querySelector("div.error-message");
    if (errorContainer) {
      errorContainer.textContent = message;
      input.classList.add("error");
    }
  }

  function clearErrorMessage(input) {
    const errorContainer =
      input.parentElement.querySelector("div.error-message");
    if (errorContainer) {
      errorContainer.textContent = "";
      input.classList.remove("error");
    }
  }
}


