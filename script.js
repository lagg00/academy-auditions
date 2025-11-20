// ===========================
// Utility: Smooth scroll
// ===========================
document.addEventListener("click", function (e) {
  const target = e.target.closest("[data-scroll-target]");
  if (!target) return;
  const selector = target.getAttribute("data-scroll-target");
  const el = document.querySelector(selector);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// ===========================
// Footer year
// ===========================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===========================
// Audition flow (terms → Part 1 → Part 2 → Done)
// ===========================

const termsConsent = document.getElementById("termsConsent");
const beginPartOneBtn = document.getElementById("beginPartOneBtn");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const termsSection = document.getElementById("termsSection");

const nextStepBtn = document.getElementById("nextStepBtn");
const backStepBtn = document.getElementById("backStepBtn");
const auditionForm = document.getElementById("auditionForm");
const auditionStepTwoForm = document.getElementById("auditionStepTwo");
const ageHelp = document.getElementById("ageHelp");

function showStep(stepNumber) {
  if (!step1 || !step2 || !step3) return;
  if (termsSection) termsSection.style.display = stepNumber === 0 ? "block" : "none";
  step1.style.display = stepNumber === 1 ? "block" : "none";
  step2.style.display = stepNumber === 2 ? "block" : "none";
  step3.style.display = stepNumber === 3 ? "block" : "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Initial state: terms visible, others hidden
if (termsSection && step1 && step2 && step3) {
  showStep(0);
}

// Enable Part 1 when terms are accepted
if (termsConsent && beginPartOneBtn) {
  termsConsent.addEventListener("change", () => {
    if (termsConsent.checked) {
      beginPartOneBtn.classList.remove("na-btn-disabled");
    } else {
      beginPartOneBtn.classList.add("na-btn-disabled");
    }
  });

  beginPartOneBtn.addEventListener("click", () => {
    if (!termsConsent.checked) return;
    showStep(1);
  });
}

// simple age calculation
function calculateAge(year, month, day) {
  if (!year || !month || !day) return null;
  const dob = new Date(Number(year), Number(month) - 1, Number(day));
  if (Number.isNaN(dob.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age -= 1;
  }
  return age;
}

// Move from Part 1 to Part 2 if age is 12–14 and form is valid
if (nextStepBtn && auditionForm) {
  nextStepBtn.addEventListener("click", () => {
    if (!auditionForm.reportValidity()) return;

    const y = document.getElementById("dobYear").value;
    const m = document.getElementById("dobMonth").value;
    const d = document.getElementById("dobDay").value;
    const age = calculateAge(y, m, d);

    if (age === null) {
      if (ageHelp) {
        ageHelp.textContent = "Please enter a valid date of birth.";
        ageHelp.style.color = "#c0392b";
      }
      return;
    }

    if (age < 12 || age > 14) {
      if (ageHelp) {
        ageHelp.textContent =
          "Based on your birthday, you are not between 12 and 14. You cannot apply for this program.";
        ageHelp.style.color = "#c0392b";
      }
      return;
    } else if (ageHelp) {
      ageHelp.textContent = `Age check passed – you appear to be ${age} years old.`;
      ageHelp.style.color = "#2c7a3f";
    }

    showStep(2);
  });
}

// Back to Part 1
if (backStepBtn) {
  backStepBtn.addEventListener("click", () => {
    showStep(1);
  });
}

// Submit Part 2 → show completion
if (auditionStepTwoForm) {
  auditionStepTwoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!auditionStepTwoForm.reportValidity()) return;

    // Normally you'd send data to a backend here.
    // For this version, we simply show the completion screen.
    showStep(3);
  });
}
