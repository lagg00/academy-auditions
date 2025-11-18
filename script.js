// ------ DOM ELEMENTS ------
const homeSection = document.getElementById("homeSection");
const auditionSection = document.getElementById("auditionSection");
const thankYouSection = document.getElementById("thankYouSection");

const startAuditionBtn = document.getElementById("startAuditionBtn");
const startAuditionBtnBottom = document.getElementById("startAuditionBtnBottom");
const backHomeFromThanks = document.getElementById("backHomeFromThanks");

const auditionForm = document.getElementById("auditionForm");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextToStep2Btn = document.getElementById("nextToStep2");
const backToHomeBtn = document.getElementById("backToHome");
const backToStep1Btn = document.getElementById("backToStep1");
const submitBtn = document.getElementById("submitBtn");

const stepDot1 = document.getElementById("stepDot1");
const stepDot2 = document.getElementById("stepDot2");

// Role-based fields
const roleSelect = document.getElementById("role");
const audioField = document.getElementById("audioField");
const videoField = document.getElementById("videoField");
const visualField = document.getElementById("visualField");
const audioLinkInput = document.getElementById("audioLink");
const videoLinkInput = document.getElementById("videoLink");
const photo1Input = document.getElementById("photo1Link");
const photo2Input = document.getElementById("photo2Link");
const pfpInput = document.getElementById("pfpLink");

// Step 1 inputs
const parentNameInput = document.getElementById("parentName");
const parentEmailInput = document.getElementById("parentEmail");
const childNameInput = document.getElementById("childName");
const dobInput = document.getElementById("dob");

// Terms modal
const termsModal = document.getElementById("termsModal");
const termsScroll = document.getElementById("termsScroll");
const termsProgressBar = document.getElementById("termsProgressBar");
const termsProgressText = document.getElementById("termsProgressText");
const termsCheckbox = document.getElementById("termsCheckbox");
const acceptTermsBtn = document.getElementById("acceptTermsBtn");
const closeTermsBtn = document.getElementById("closeTermsBtn");

// ------ NAV HELPERS ------
function showSection(section) {
  homeSection.classList.remove("section-active");
  auditionSection.classList.remove("section-active");
  thankYouSection.classList.remove("section-active");

  section.classList.add("section-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ------ TERMS MODAL LOGIC ------
function openTermsModal() {
  termsModal.classList.add("show");
  // reset state
  termsProgressBar.style.width = "0%";
  termsProgressText.textContent = "Scroll to the bottom to unlock the checkbox.";
  termsCheckbox.checked = false;
  termsCheckbox.disabled = true;
  acceptTermsBtn.disabled = true;
  termsScroll.scrollTop = 0;
}

function closeTermsModal() {
  termsModal.classList.remove("show");
}

// Scroll progress detection
termsScroll.addEventListener("scroll", () => {
  const scrollHeight = termsScroll.scrollHeight - termsScroll.clientHeight;
  const scrolled = termsScroll.scrollTop;
  if (scrollHeight <= 0) return;

  const progress = Math.min((scrolled / scrollHeight) * 100, 100);
  termsProgressBar.style.width = `${progress}%`;

  if (scrollHeight - scrolled < 20) {
    termsProgressText.textContent = "You reached the bottom! You can now agree.";
    termsCheckbox.disabled = false;
  }
});

// Checkbox unlocks accept button
termsCheckbox.addEventListener("change", () => {
  acceptTermsBtn.disabled = !termsCheckbox.checked;
});

// Accept / close buttons
acceptTermsBtn.addEventListener("click", () => {
  closeTermsModal();
  showSection(auditionSection);
});

closeTermsBtn.addEventListener("click", () => {
  closeTermsModal();
});

// Start audition from home
[startAuditionBtn, startAuditionBtnBottom].forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", () => {
      openTermsModal();
    });
  }
});

// Back home from step1 button
backToHomeBtn.addEventListener("click", () => {
  showSection(homeSection);
});

// Back home from thank you
backHomeFromThanks.addEventListener("click", () => {
  showSection(homeSection);
});

// ------ STEP SWITCHING ------
function goToStep1() {
  step1.classList.add("form-step-active");
  step2.classList.remove("form-step-active");
  stepDot1.classList.add("step-dot-active");
  stepDot2.classList.remove("step-dot-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToStep2() {
  step1.classList.remove("form-step-active");
  step2.classList.add("form-step-active");
  stepDot2.classList.add("step-dot-active");
  stepDot1.classList.remove("step-dot-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

backToStep1Btn.addEventListener("click", goToStep1);

// ------ VALIDATION HELPERS ------
function clearErrorStyles() {
  document
    .querySelectorAll(".error-field")
    .forEach((el) => el.classList.remove("error-field"));
}

function markError(el) {
  if (el) el.classList.add("error-field");
}

function validateStep1() {
  clearErrorStyles();
  let valid = true;

  if (!parentNameInput.value.trim()) {
    markError(parentNameInput);
    valid = false;
  }
  if (!parentEmailInput.value.trim()) {
    markError(parentEmailInput);
    valid = false;
  }
  if (!childNameInput.value.trim()) {
    markError(childNameInput);
    valid = false;
  }
  if (!dobInput.value.trim()) {
    markError(dobInput);
    valid = false;
  }

  if (!valid) {
    alert(
      "Please complete all required fields in Step 1 (Parent name, Parent email, Auditioner name, Date of birth)."
    );
  }

  return valid;
}

nextToStep2Btn.addEventListener("click", () => {
  if (validateStep1()) {
    goToStep2();
  }
});

// Role-based media field visibility
function updateMediaFields() {
  const role = roleSelect.value;

  // Reset visibility
  audioField.style.display = "none";
  videoField.style.display = "none";
  visualField.style.display = "none";

  // Clear errors
  [audioLinkInput, videoLinkInput, photo1Input, photo2Input].forEach((el) =>
    el.classList.remove("error-field")
  );

  if (role === "Main Vocalist" || role === "Main Rapper") {
    audioField.style.display = "block";
  } else if (role === "Main Dancer") {
    videoField.style.display = "block";
  } else if (role === "Main Visualizer") {
    visualField.style.display = "block";
  }
}

roleSelect.addEventListener("change", updateMediaFields);

// Step 2 validation
function validateStep2() {
  clearErrorStyles();
  let valid = true;
  const role = roleSelect.value;

  if (!role) {
    markError(roleSelect);
    alert("Please select a role in Step 2.");
    return false;
  }

  // PFP required for all
  if (!pfpInput.value.trim()) {
    markError(pfpInput);
    valid = false;
  }

  // Role-specific
  if (role === "Main Vocalist" || role === "Main Rapper") {
    if (!audioLinkInput.value.trim()) {
      markError(audioLinkInput);
      valid = false;
    }
  } else if (role === "Main Dancer") {
    if (!videoLinkInput.value.trim()) {
      markError(videoLinkInput);
      valid = false;
    }
  } else if (role === "Main Visualizer") {
    if (!photo1Input.value.trim()) {
      markError(photo1Input);
      valid = false;
    }
    if (!photo2Input.value.trim()) {
      markError(photo2Input);
      valid = false;
    }
  }

  if (!valid) {
    alert(
      "Please complete all required fields in Step 2, including media links based on your chosen role."
    );
  }

  return valid;
}

// ------ FORM SUBMIT (FORMSPREE) ------
auditionForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!validateStep2()) return;

  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  // Collect data
  const data = {
    parentName: parentNameInput.value.trim(),
    parentEmail: parentEmailInput.value.trim(),
    childName: childNameInput.value.trim(),
    childEmail: document.getElementById("childEmail").value.trim(),
    dob: dobInput.value.trim(),
    location: document.getElementById("location").value.trim(),
    role: roleSelect.value,
    pfpLink: pfpInput.value.trim(),
    audioLink: audioLinkInput.value.trim(),
    videoLink: videoLinkInput.value.trim(),
    photo1Link: photo1Input.value.trim(),
    photo2Link: photo2Input.value.trim(),
    notes: document.getElementById("notes").value.trim(),
    source: "NewAcademy.net audition form",
  };

  try {
    const response = await fetch("https://formspree.io/f/xnnoeyng", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Formspree error", response.statusText);
    }
  } catch (err) {
    console.error("Error sending audition:", err);
  }

  // Always show thank you (even if Formspree fails) so applicants aren't stuck
  submitBtn.disabled = false;
  submitBtn.textContent = "Submit Audition";
  auditionForm.reset();
  updateMediaFields();

  showSection(thankYouSection);
});

// Initialize media fields
updateMediaFields();
