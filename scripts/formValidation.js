function initFormValidation() {
  const bookingForm = document.getElementById("booking-form");
  const bookRoot = document.getElementById("book-root");

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (isFormValid()) {
      bookRoot.innerHTML = "";

      const successMessage = document.createElement("div");
      successMessage.classList.add("success-message");
      successMessage.innerHTML = `
        <p>✅Your booking has been successfully submitted!</p>
        <button id="back-to-home">Back to Home</button>
      `;

      bookRoot.appendChild(successMessage);

      const backButton = document.getElementById("back-to-home");
      backButton.addEventListener("click", function () {
        window.location.href = "index.html";
      });
    }
  });

  function isFormValid() {
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

    const phoneNumberPattern = /^\d{10}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isValid = true;

    if (fullName.value.trim() === "") {
      displayErrorMessage(fullName, "Full Name is required.");
      isValid = false;
    } else {
      clearErrorMessage(fullName);
    }

    if (
      !phoneNumberPattern.test(phoneNumber.value) ||
      phoneNumber.value.trim() === ""
    ) {
      displayErrorMessage(
        phoneNumber,
        "Enter a valid Phone Number (10 digits)."
      );
      isValid = false;
    } else {
      clearErrorMessage(phoneNumber);
    }

    if (!emailPattern.test(email.value) || email.value.trim() === "") {
      displayErrorMessage(email, "Enter a valid Email Address.");
      isValid = false;
    } else {
      clearErrorMessage(email);
    }

    if (serviceType.value === "") {
      displayErrorMessage(serviceType, "Select a Service Type.");
      isValid = false;
    } else {
      clearErrorMessage(serviceType);
    }

    if (serviceRequested.value === "") {
      displayErrorMessage(serviceRequested, "Select a Service Requested.");
      isValid = false;
    } else {
      clearErrorMessage(serviceRequested);
    }

    if (vehicleMake.value.trim() === "") {
      displayErrorMessage(vehicleMake, "Vehicle Make is required.");
      isValid = false;
    } else {
      clearErrorMessage(vehicleMake);
    }

    if (vehicleModel.value.trim() === "") {
      displayErrorMessage(vehicleModel, "Vehicle Model is required.");
      isValid = false;
    } else {
      clearErrorMessage(vehicleModel);
    }

    if (vehicleYear.value.trim() === "") {
      displayErrorMessage(vehicleYear, "Vehicle Year is required.");
      isValid = false;
    } else {
      clearErrorMessage(vehicleYear);
    }

    if (vehicleLicensePlate.value.trim() === "") {
      displayErrorMessage(vehicleLicensePlate, "License Plate is required.");
      isValid = false;
    } else {
      clearErrorMessage(vehicleLicensePlate);
    }

    if (date.value.trim() === "") {
      displayErrorMessage(date, "Preferred Date is required.");
      isValid = false;
    } else {
      clearErrorMessage(date);
    }

    if (time.value.trim() === "") {
      displayErrorMessage(time, "Preferred Time is required.");
      isValid = false;
    } else {
      clearErrorMessage(time);
    }

    return isValid;
  }

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

initFormValidation();
