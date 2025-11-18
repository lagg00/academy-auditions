/* ---------------------------
   SHOW TERMS FIRST
----------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("terms-screen").style.display = "block";
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("audition-screen").style.display = "none";
  document.getElementById("thankyou").style.display = "none";
});

/* Accept Terms */
function acceptTerms() {
  document.getElementById("terms-screen").style.display = "none";
  document.getElementById("home-screen").style.display = "block";
}

/* Go to Audition */
function startAudition() {
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("audition-screen").style.display = "block";
}

/* ---------------------------
   AUDITION STEP LOGIC
----------------------------*/

let selectedRole = null;

function handleRoleSelect(role) {
  selectedRole = role;

  // Show or hide fields based on role selection
  document.getElementById("audio-upload").style.display = "none";
  document.getElementById("video-upload").style.display = "none";
  document.getElementById("visual-upload").style.display = "none";

  if (role === "Main Vocalist" || role === "Main Rapper") {
    document.getElementById("audio-upload").style.display = "block";
  }
  if (role === "Main Dancer") {
    document.getElementById("video-upload").style.display = "block";
  }
  if (role === "Main Visualizer") {
    document.getElementById("visual-upload").style.display = "block";
  }
}

/* Step 1 → Step 2 */
function goToStep2() {
  // Validation for personal info
  const fields = ["parentName","parentEmail","childName","childEmail","birth"];
  for (let id of fields) {
    if (!document.getElementById(id).value.trim()) {
      alert("Please fill out all fields.");
      return;
    }
  }

  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

/* ---------------------------
   SUBMIT TO FORMSPREE
----------------------------*/

async function submitAudition() {
  if (!selectedRole) {
    alert("Please select your role.");
    return;
  }

  let formData = new FormData();

  /* Required info */
  formData.append("parentName", document.getElementById("parentName").value);
  formData.append("parentEmail", document.getElementById("parentEmail").value);
  formData.append("childName", document.getElementById("childName").value);
  formData.append("childEmail", document.getElementById("childEmail").value);
  formData.append("birth", document.getElementById("birth").value);
  formData.append("role", selectedRole);

  /* Always-required PFP */
  let pfp = document.getElementById("pfp").files[0];
  if (!pfp) {
    alert("Please upload a profile photo.");
    return;
  }
  formData.append("pfp", pfp);

  /* Conditional Uploads */
  if (selectedRole === "Main Vocalist" || selectedRole === "Main Rapper") {
    let audio = document.getElementById("audio").files[0];
    if (!audio) return alert("Please upload your audio.");
    formData.append("audio", audio);
  }

  if (selectedRole === "Main Dancer") {
    let video = document.getElementById("video").files[0];
    if (!video) return alert("Please upload your dance video.");
    formData.append("video", video);
  }

  if (selectedRole === "Main Visualizer") {
    let pic1 = document.getElementById("vis1").files[0];
    let pic2 = document.getElementById("vis2").files[0];
    if (!pic1 || !pic2) return alert("Please upload 2 photos.");
    formData.append("visual1", pic1);
    formData.append("visual2", pic2);
  }

  /* Send to Formspree */
  await fetch("https://formspree.io/f/xnnoeyng", {
    method: "POST",
    body: formData,
  });

  // Show Thank You screen
  document.getElementById("audition-screen").style.display = "none";
  document.getElementById("thankyou").style.display = "block";
}
