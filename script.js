document.addEventListener("DOMContentLoaded", () => {
  // Sections
  const termsSection = document.getElementById("terms-section");
  const homeSection = document.getElementById("home-section");
  const auditionSection = document.getElementById("audition-section");
  const thankyouSection = document.getElementById("thankyou-section");

  // Terms
  const termsScroll = document.getElementById("terms-scroll");
  const termsCheckbox = document.getElementById("terms-checkbox");
  const termsContinue = document.getElementById("terms-continue");

  // Home buttons
  const startAuditionBtn = document.getElementById("start-audition");

  // Form & steps
  const auditionForm = document.getElementById("audition-form");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const toStep2Btn = document.getElementById("to-step2");
  const backToHomeBtn = document.getElementById("back-to-home");
  const backToStep1Btn = document.getElementById("back-to-step1");
  const roleSelect = document.getElementById("role-select");
  const submitBtn = document.getElementById("submit-btn");
  const errorMessage = document.getElementById("error-message");

  // Upload sections
  const profilePhotoInput = document.getElementById("profilePhoto");
  const audioSection = document.getElementById("audio-section");
  const audioFileInput = document.getElementById("audioFile");
  const videoSection = document.getElementById("video-section");
  const videoFileInput = document.getElementById("videoFile");
  const visualSection = document.getElementById("visual-section");
  const visualPhoto1Input = document.getElementById("visualPhoto1");
  const visualPhoto2Input = document.getElementById("visualPhoto2");

  const backHomeFinalBtn = document.getElementById("back-home-final");

  // Helper to show a section
  function showSection(section) {
    [termsSection, homeSection, auditionSection, thankyouSection].forEach(sec => {
      if (!sec) return;
      sec.classList.remove("active");
    });
    section.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Helper to switch steps
  function showStep(stepNumber) {
    if (stepNumber === 1) {
      step1.classList.add("active");
      step2.classList.remove("active");
    } else if (stepNumber === 2) {
      step1.classList.remove("active");
      step2.classList.add("active");
    }
    errorMessage.textContent = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // TERMS: enable button only if scrolled to bottom AND checkbox checked
  function updateTermsButtonState() {
    const scrolledToBottom =
      termsScroll.scrollTop + termsScroll.clientHeight >= termsScroll.scrollHeight - 10;
    const checked = termsCheckbox.checked;
    termsContinue.disabled = !(scrolledToBottom && checked);
  }

  termsScroll.addEventListener("scroll", updateTermsButtonState);
  termsCheckbox.addEventListener("change", updateTermsButtonState);

  termsContinue.addEventListener("click", () => {
    if (!termsContinue.disabled) {
      showSection(homeSection);
    }
  });

  // HOME: start audition
  if (startAuditionBtn) {
    startAuditionBtn.addEventListener("click", () => {
      showSection(auditionSection);
      showStep(1);
    });
  }

  // Back from step1 to home
  backToHomeBtn.addEventListener("click", () => {
    showSection(homeSection);
  });

  // Role-based upload logic
  function updateUploadRequirements() {
    const role = roleSelect.value;

    // Reset required attributes
    audioFileInput.required = false;
    videoFileInput.required = false;
    visualPhoto1Input.required = false;
    visualPhoto2Input.required = false;

    // Show/hide blocks logically? For now we keep all visible but rely on required.
    // If you want them hidden, you can toggle display here.

    if (role === "Main Vocalist" || role === "Main Rapper") {
      audioFileInput.required = true;
    } else if (role === "Main Dancer") {
      videoFileInput.required = true;
    } else if (role === "Main Visualizer") {
      visualPhoto1Input.required = true;
      visualPhoto2Input.required = true;
    }
    // All roles require PFP
    profilePhotoInput.required = true;
  }

  roleSelect.addEventListener("change", updateUploadRequirements);

  // STEP 1 → STEP 2
  toStep2Btn.addEventListener("click", () => {
    errorMessage.textContent = "";
    const formData = new FormData(auditionForm);

    const parentName = formData.get("parentName")?.trim();
    const parentEmail = formData.get("parentEmail")?.trim();
    const childName = formData.get("childName")?.trim();
    const childEmail = formData.get("childEmail")?.trim();
    const birthYear = formData.get("birthYear")?.trim();
    const birthMonth = formData.get("birthMonth")?.trim();
    const birthDay = formData.get("birthDay")?.trim();
    const role = formData.get("role");

    if (!parentName || !parentEmail || !childName || !childEmail || !birthYear || !birthMonth || !birthDay || !role) {
      errorMessage.textContent = "Please fill out all required fields in Step 1.";
      showStep(1);
      return;
    }

    // Basic age check (loose)
    const yearNum = parseInt(birthYear, 10);
    if (isNaN(yearNum) || yearNum < 2008 || yearNum > 2014) {
      errorMessage.textContent = "Please enter a realistic birth year (ages 12–14).";
      showStep(1);
      return;
    }

    updateUploadRequirements();
    showStep(2);
  });

  // Back STEP 2 → STEP 1
  backToStep1Btn.addEventListener("click", () => {
    showStep(1);
  });

  // Final form submit (Step 2)
  auditionForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorMessage.textContent = "";

    const formData = new FormData(auditionForm);
    const role = formData.get("role");
    const profilePhoto = profilePhotoInput.files[0];

    if (!profilePhoto) {
      errorMessage.textContent = "Profile photo is required for all roles.";
      return;
    }

    // Role-specific validation
    if (role === "Main Vocalist" || role === "Main Rapper") {
      if (!audioFileInput.files[0]) {
        errorMessage.textContent = "Please upload an audio file for your audition.";
        return;
      }
    } else if (role === "Main Dancer") {
      if (!videoFileInput.files[0]) {
        errorMessage.textContent = "Please upload a dance video for your audition.";
        return;
      }
    } else if (role === "Main Visualizer") {
      if (!visualPhoto1Input.files[0] || !visualPhoto2Input.files[0]) {
        errorMessage.textContent = "Please upload two photos for your visualizer audition.";
        return;
      }
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    try {
      const response = await fetch("https://formspree.io/f/xnnoeyng", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Formspree returned an error");
      }

      // Success – show thank you
      auditionForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Audition";
      showSection(thankyouSection);
    } catch (err) {
      console.error(err);
      errorMessage.textContent =
        "There was a problem submitting your audition. Please check your connection and try again.";
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Audition";
    }
  });

  // Thank you -> back home
  backHomeFinalBtn.addEventListener("click", () => {
    showSection(homeSection);
  });
});
