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
// Accordion behaviour
// ===========================
const accordion = document.querySelector(".na-accordion");
if (accordion) {
  accordion.addEventListener("click", (e) => {
    const header = e.target.closest(".na-accordion-header");
    if (!header) return;
    const item = header.parentElement;
    const body = item.querySelector(".na-accordion-body");
    const isOpen = item.classList.contains("na-accordion-open");

    if (isOpen) {
      item.classList.remove("na-accordion-open");
      body.style.display = "none";
    } else {
      item.classList.add("na-accordion-open");
      body.style.display = "block";
    }

    updateJourneyProgress();
  });

  // show bodies for items marked as open by default
  accordion
    .querySelectorAll(".na-accordion-item")
    .forEach((item) => {
      const body = item.querySelector(".na-accordion-body");
      if (item.classList.contains("na-accordion-open")) {
        body.style.display = "block";
      } else {
        body.style.display = "none";
      }
    });
}

// ===========================
// Journey progress bar
// ===========================
function updateJourneyProgress() {
  const container = document.querySelector(".na-accordion");
  const bar = document.querySelector("#journeyProgressBar");
  if (!container || !bar) return;

  const items = Array.from(container.querySelectorAll(".na-accordion-item"));
  const openCount = items.filter((i) => i.classList.contains("na-accordion-open")).length;
  const total = items.length || 1;
  const ratio = openCount / total;

  const minWidth = 0.08;
  const width = Math.max(minWidth, ratio);
  bar.style.width = `${width * 100}%`;
}

updateJourneyProgress();

// ===========================
// Journey consent unlock
// ===========================
const consentCheckbox = document.getElementById("journeyConsent");
const journeyApplyBtn = document.getElementById("journeyApplyBtn");

if (consentCheckbox && journeyApplyBtn) {
  consentCheckbox.addEventListener("change", () => {
    if (consentCheckbox.checked) {
      journeyApplyBtn.classList.remove("na-btn-disabled");
    } else {
      journeyApplyBtn.classList.add("na-btn-disabled");
    }
  });
}

// ===========================
// Multi-step audition form
// ===========================
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const nextStepBtn = document.getElementById("nextStepBtn");
const backStepBtn = document.getElementById("backStepBtn");
const auditionForm = document.getElementById("auditionForm");
const auditionStepTwoForm = document.getElementById("auditionStepTwo");

// Age help text
const ageHelp = document.getElementById("ageHelp");

function showStep(stepNumber) {
  if (!step1 || !step2 || !step3) return;
  step1.style.display = stepNumber === 1 ? "block" : "none";
  step2.style.display = stepNumber === 2 ? "block" : "none";
  step3.style.display = stepNumber === 3 ? "block" : "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
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

if (nextStepBtn && auditionForm) {
  nextStepBtn.addEventListener("click", () => {
    // validate required inputs of step 1
    if (!auditionForm.reportValidity()) return;

    const y = document.getElementById("dobYear").value;
    const m = document.getElementById("dobMonth").value;
    const d = document.getElementById("dobDay").value;
    const age = calculateAge(y, m, d);

    if (age === null) {
      if (ageHelp) ageHelp.textContent = "Please enter a valid date of birth.";
      return;
    }

    if (age < 12 || age > 14) {
      if (ageHelp) {
        ageHelp.textContent =
          "Based on your birthday, you are not between 12 and 14. Unfortunately you can’t audition for this program.";
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

if (backStepBtn) {
  backStepBtn.addEventListener("click", () => {
    showStep(1);
  });
}

if (auditionStepTwoForm) {
  auditionStepTwoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!auditionStepTwoForm.reportValidity()) return;

    // Here you would normally send the data to a server with fetch().
    // For this static demo, we just show the "submitted" screen.
    showStep(3);
  });
}

// If these elements exist (we're on audition.html), default to step 1
if (step1 && step2 && step3) {
  showStep(1);
}
