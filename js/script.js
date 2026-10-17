document.addEventListener("DOMContentLoaded", () => {
  const slot = document.getElementById("fillSlot");
  if (slot) {
    setTimeout(() => slot.classList.add("is-visible"), 500);
  }

  const form = document.getElementById("signupForm");
  if (!form) return;

  const nameInput = document.getElementById("signupName");
  const emailInput = document.getElementById("signupEmail");
  const nameError = document.getElementById("signupNameError");
  const emailError = document.getElementById("signupEmailError");
  const status = document.getElementById("signupStatus");

  const showError = (input, el, message) => {
    el.textContent = message;
    input.setAttribute("aria-invalid", "true");
  };
  const clearError = (input, el) => {
    el.textContent = "";
    input.removeAttribute("aria-invalid");
  };

  // Clear the error as soon as the user starts fixing the field.
  nameInput.addEventListener("input", () => clearError(nameInput, nameError));
  emailInput.addEventListener("input", () => clearError(emailInput, emailError));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    let valid = true;

    if (!name) {
      showError(nameInput, nameError, "Please enter your name.");
      valid = false;
    } else {
      clearError(nameInput, nameError);
    }

    if (!email) {
      showError(emailInput, emailError, "Please enter your email address.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(emailInput, emailError, "Please enter a valid email address, like name@example.com.");
      valid = false;
    } else {
      clearError(emailInput, emailError);
    }

    if (!valid) {
      status.textContent = "";
      return;
    }

    // No backend: open the visitor’s mail app with a prefilled message.
    // The form’s mailto action covers the no-JavaScript case.
    const subject = encodeURIComponent("Cadence signup request");
    const body = encodeURIComponent(
      "Hi Cadence team,\n\nI would like to sign up for Cadence.\n\nName: " + name + "\nEmail: " + email + "\n"
    );
    status.textContent =
      "Thanks, " + name + "! Your mail app should now open with a prefilled signup message. Sending it completes your request.";
    form.reset();
    window.location.href =
      "mailto:noyantanveer35@gmail.com?subject=" + subject + "&body=" + body;
  });
});
