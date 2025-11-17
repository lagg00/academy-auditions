document.addEventListener("DOMContentLoaded", () => {
  const termsOverlay = document.getElementById("terms-overlay");
  const termsScroll = document.getElementById("terms-scroll");
  const termsCheckbox = document.getElementById("terms-checkbox");
  const termsCheckboxLabel = document.getElementById("terms-checkbox-label");
  const termsAcceptBtn = document.getElementById("terms-accept-btn");
  const progressInner = document.getElementById("terms-progress-inner");
  const progressText = document.getElementById("terms-progress-text");

  const scrollToFormBtn = document.getElementById("scroll-to-form");
  const auditionSection = document.getElementById("audition-section");
  const formCard = document.getElementById("form-card");

  const form = document.getElementById("audition-form");
  const submitBtn = document.getElementById("submit-btn");
  const thankYou = document.getElementById("thank-you");
  const backHomeBtn = document.getElementById("back-home-btn");
  const formErrorGlobal = document.getElementById("form-error-global");

  const roleSelect = document.getElementById("role");
  const pfpInput = document.getElementById("pfp");
  const audioGroup = document.getElementById("audio-group");
  const audioInput = document.getElementById("audio-file");
  const videoGroup = document.getElementById("video-group");
  const videoInput = document.getElementById("video-file");
  const visualsGroup = document.getElementById("visuals-group");
  const visualsInput = document.getElementById("visuals-file");

  // Error elements
  const errorParentName = document.getElementById("error-parent-name");
  const errorParentEmail = document.getElementById("error-parent-email");
  const errorChildName = document.getElementById("error-child-name");
  const errorBirth = document.getElementById("error-birth");
  const errorRole = document.getElementById("error-role");
  const errorPfp = document.getElementById("error-pfp");
  const errorAudio = document.getElementById("error-audio");
  const errorVideo = document.getElementById("error-video");
  const errorVisuals = document.getElementById("error-visuals");

  const birthYear = document.getElementById("birth-year");
  const birthMonth = document.getElementById("birth-month");
  const birthDay = document.getElementById("birth-day");

  // --- Terms scroll progress ---
  if (termsScroll) {
    termsScroll.addEventListener("scroll", () => {
      const scrollTop = termsScroll.scrollTop;
      const maxScroll =
        termsScroll.scrollHeight - termsScroll.clientHeight || 1;
      const ratio = Math.min(scrollTop / maxScroll, 1);
      const percentage = Math.round(ratio * 100);

      progressInner.style.width = `${percentage}%`;
      progressText.textContent = ratio === 1
        ? "You reached the bottom!"
        : `Keep reading: ${percentage}%`;

      if (ratio >= 0.98) {
        termsCheckbox.disabled = false;
        termsCheckboxLabel.textContent =
          "I have read and understand the information above.";
      }
    });
  }

  // When checkbox changes
  if (termsCheckbox) {
    termsCheckbox.addEventListener("change", () => {
      termsAcceptBtn.disabled = !termsCheckbox.checked;
    });
  }

  // Accept terms
  if (termsAcceptBtn) {
    termsAcceptBtn.addEventListener("click", () => {
      termsOverlay.style.display = "none";
      scrollToFormBtn.disabled = false;
      formCard.classList.remove("form-card-disabled");
    });
  }

  // Scroll to form
  if (scrollToFormBtn) {
    scrollToFormBtn.addEventListener("click", () => {
      auditionSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Back to top from thank-you
  if (backHomeBtn) {
    backHomeBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Role change logic: show/hide uploads
  function updateRoleFields() {
    const role = roleSelect.value;

    // Reset visibility
    audioGroup.classList.add("hidden");
    videoGroup.classList.add("hidden");
    visualsGroup.classList.add("hidden");

    // Reset errors for media
    errorAudio.textContent = "";
    errorVideo.textContent = "";
    errorVisuals.textContent = "";

    if (role === "vocalist" || role === "rapper") {
      audioGroup.classList.remove("hidden");
    } else if (role === "dancer") {
      videoGroup.classList.remove("hidden");
    } else if (role === "visualizer") {
      visualsGroup.classList.remove("hidden");
    }
  }

  roleSelect.addEventListener("change", updateRoleFields);

  // Validation helper
  function clearAllErrors() {
    formErrorGlobal.textContent = "";
    errorParentName.textContent = "";
    errorParentEmail.textContent = "";
    errorChildName.textContent = "";
    errorBirth.textContent = "";
    errorRole.textContent = "";
    errorPfp.textContent = "";
    errorAudio.textContent = "";
    errorVideo.textContent = "";
    errorVisuals.textContent = "";
  }

  function validateForm() {
    clearAllErrors();
    let isValid = true;

    const parentName = document.getElementById("parent-name").value.trim();
    const parentEmail = document.getElementById("parent-email").value.trim();
    const childName = document.getElementById("child-name").value.trim();
    const role = roleSelect.value;

    if (!parentName) {
      errorParentName.textContent = "Parent / guardian name is required.";
      isValid = false;
    }

    if (!parentEmail) {
      errorParentEmail.textContent = "Parent email is required.";
      isValid = false;
    }

    if (!childName) {
      errorChildName.textContent = "Auditioner name is required.";
      isValid = false;
    }

    const y = birthYear.value.trim();
    const m = birthMonth.value.trim();
    const d = birthDay.value.trim();
    if (!y || !m || !d) {
      errorBirth.textContent = "Full date of birth is required.";
      isValid = false;
    } else {
      const yy = Number(y);
      const mm = Number(m);
      const dd = Number(d);
      if (
        isNaN(yy) ||
        isNaN(mm) ||
        isNaN(dd) ||
        yy < 2005 ||
        yy > 2030 ||
        mm < 1 ||
        mm > 12 ||
        dd < 1 ||
        dd > 31
      ) {
        errorBirth.textContent = "Please enter a valid date.";
        isValid = false;
      }
    }

    if (!role) {
      errorRole.textContent = "Please select a role.";
      isValid = false;
    }

    // PFP required for all
    if (!pfpInput.files || pfpInput.files.length === 0) {
      errorPfp.textContent = "Profile photo is required.";
      isValid = false;
    }

    // Role-specific media
    if (role === "vocalist" || role === "rapper") {
      if (!audioInput.files || audioInput.files.length === 0) {
        errorAudio.textContent =
          "Audio upload is required for vocalists and rappers.";
        isValid = false;
      }
    } else if (role === "dancer") {
      if (!videoInput.files || videoInput.files.length === 0) {
        errorVideo.textContent = "Dance video is required for Main Dancer.";
        isValid = false;
      }
    } else if (role === "visualizer") {
      const files = visualsInput.files;
      if (!files || files.length < 2) {
        errorVisuals.textContent =
          "Please upload at least 2 photos for Main Visualizer.";
        isValid = false;
      }
    }

    if (!isValid) {
      formErrorGlobal.textContent =
        "Please fix the highlighted fields before submitting.";
    }

    return isValid;
  }

  // Submit handler (Formspree)
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";

      // Build FormData
      const fd = new FormData(form);

      // Combine date fields into one
      const dobString = `${birthYear.value}-${birthMonth.value}-${birthDay.value}`;
      fd.append("dateOfBirth", dobString);

      // For files, Formspree free can't really store large files,
      // but we still send them in case they are small.
      // We also send simple text summaries so you always see info.
      if (pfpInput.files[0]) {
        fd.append("pfpFileName", pfpInput.files[0].name);
      }
      if (audioInput.files[0]) {
        fd.append("audioFileName", audioInput.files[0].name);
      }
      if (videoInput.files[0]) {
        fd.append("videoFileName", videoInput.files[0].name);
      }
      if (visualsInput.files && visualsInput.files.length > 0) {
        const names = Array.from(visualsInput.files)
          .map((f) => f.name)
          .join(", ");
        fd.append("visualsFileNames", names);
      }

      try {
        const res = await fetch("https://formspree.io/f/xnnoeyng", {
          method: "POST",
          body: fd,
          headers: {
            Accept: "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Formspree returned an error");
        }

        // Success: hide form, show thank you
        formCard.style.display = "none";
        thankYou.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        console.error(err);
        formErrorGlobal.textContent =
          "Something went wrong while sending the form. Please try again in a moment.";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Audition";
      }
    });
  }
});
