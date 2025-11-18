/* app.js - React + JSX (Babel will compile this in the browser) */

const { useState, useRef } = React;

/* ---------- Home Page ---------------------------------- */

function Home({ onStart }) {
  const roles = [
    {
      title: "Main Vocalist",
      description:
        "Carry the vocal backbone of the group with powerful, stable vocals. Handle the most challenging vocal parts.",
      icon: "🎙️",
      className: "role-card role-vocalist",
    },
    {
      title: "Main Dancer",
      description:
        "Lead the group's choreography with precision, power, and grace. The main dancer sets the standard for performance.",
      icon: "🕺",
      className: "role-card role-dancer",
    },
    {
      title: "Main Rapper",
      description:
        "Deliver powerful rap verses with flow, rhythm, and attitude. Bring energy and edge to the group's sound.",
      icon: "🎵",
      className: "role-card role-rapper",
    },
    {
      title: "Main Visualizer",
      description:
        "Embody the group's visual concept and brand image. Capture attention through stage presence and visuals.",
      icon: "📸",
      className: "role-card role-visual",
    },
    {
      title: "All-Rounder",
      description:
        "Excel in multiple areas – singing, dancing, and presence. The versatile member who can adapt to any role.",
      icon: "✨",
      className: "role-card role-allrounder",
    },
  ];

  return (
    <div className="page-shell">
      <section className="home-hero">
        <div className="hero-circles" />
        <div className="hero-content">
          <h1 className="hero-title-main">NEW</h1>
          <h2 className="hero-title-sub">ACADEMY</h2>
          <p className="hero-tagline-top">2025 Online Auditions</p>
          <p className="hero-tagline-bottom">Using talent for God's glory</p>

          <button className="hero-button" onClick={onStart}>
            <span className="hero-button-emoji">✨</span>
            START YOUR AUDITION
            <span className="hero-button-emoji">✨</span>
          </button>

          <div className="hero-scroll-hint">
            <span>Scroll to learn more</span>
            <div className="hero-scroll-icon">
              <div className="hero-scroll-dot" />
            </div>
          </div>
        </div>
      </section>

      <section className="roles-section">
        <div className="roles-inner">
          <div className="roles-header">
            <h2 className="roles-title">WE NEED A...</h2>
            <p className="roles-subtitle">
              The fifth member was chosen — but who are the other four?
            </p>
          </div>

          <div className="roles-grid">
            {roles.map((role) => (
              <div key={role.title} className={role.className}>
                <div className="role-icon">
                  <span>{role.icon}</span>
                </div>
                <div className="role-title">{role.title}</div>
                <div className="role-description">{role.description}</div>
              </div>
            ))}
          </div>

          <div className="roles-footer">
            <p>Ages: 12–14 (boys)</p>
            <p>Deadline: April 20, 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Terms Screen -------------------------------- */

function TermsScreen({ onAccept }) {
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(0);
  const bodyRef = useRef(null);

  const handleScroll = (e) => {
    const el = e.target;
    const max = el.scrollHeight - el.clientHeight;
    const pct = max > 0 ? Math.min(100, Math.round((el.scrollTop / max) * 100)) : 100;
    setProgress(pct);
  };

  const canAccept = checked && progress >= 95;

  return (
    <div className="terms-screen">
      <div className="terms-card">
        <header className="terms-header">
          <div className="terms-header-title">
            <span>✨</span>
            <span>Welcome to Your Journey</span>
            <span>✨</span>
          </div>
          <div className="terms-header-sub">
            Before we begin, let's talk about what this means
          </div>
          <div className="terms-progress-bar">
            <div
              className="terms-progress-inner"
              style={{ width: `${progress}%` }}
            />
          </div>
        </header>

        <div
          className="terms-body"
          ref={bodyRef}
          onScroll={handleScroll}
        >
          {/* 1. Welcome */}
          <div className="section-block">
            <div className="section-heading-row">
              <span className="emoji">💜</span>
              <div className="section-title">Thank You for Your Interest!</div>
            </div>
            <div className="section-body">
              We're so excited that you're considering joining us. Before you
              audition, we want to make sure you understand what New Academy is
              all about and what we're looking for in our members. Please read
              everything carefully — this is important!
            </div>
          </div>

          {/* 2. What is New Academy */}
          <div className="section-block">
            <div className="section-heading-row">
              <span className="emoji">⭐</span>
              <div className="section-title">What is New Academy?</div>
            </div>
            <div className="section-body">
              <p>
                <strong>New Academy</strong> is the name of this audition
                program — it's <strong>not</strong> the final name of the
                group. We're still deciding that together as a team!
              </p>
              <p>
                We're an <strong>independent, faith-based project</strong>{" "}
                created by people who love K-pop and want to use it to spread a
                positive Christian message. We're <strong>not</strong> a big
                professional label with tons of resources — we're building
                something meaningful from the ground up.
              </p>
              <p>
                Because we're independent, things might move slower than idol
                companies. There is no promise the project will become super
                famous quickly (or at all). We'll do our best, work hard, and
                stay faithful — but success can be slow. If you join, you're
                joining a journey, not a guarantee.
              </p>
            </div>
          </div>

          {/* 3. Who can join */}
          <div className="section-block">
            <div className="section-heading-row">
              <span className="emoji">⏰</span>
              <div className="section-title">Who Can Join?</div>
            </div>
            <div className="section-body">
              <p>
                You must be between <strong>12 and 14 years old</strong> at the
                time of audition. We chose this age range because it's a great
                time to grow and train.
              </p>
              <p>We're looking for people who:</p>
              <ul>
                <li>Love music, dance, or performance</li>
                <li>Are willing to work hard and practice regularly</li>
                <li>Want to be kind teammates and support each other</li>
              </ul>
            </div>
          </div>

          {/* 4. Faith & Mission */}
          <div className="section-block">
            <div className="section-heading-row">
              <span className="emoji">✝️</span>
              <div className="section-title">Our Faith & Mission</div>
            </div>
            <div className="section-body">
              <p>
                This will be a <strong>Christian K-pop group</strong> —
                possibly one of the first of its kind. Our music and message
                will focus on faith, hope, and sharing God's love.
              </p>
              <p>Our purpose is to:</p>
              <ul>
                <li>Use music to point people to Jesus</li>
                <li>Show that you can follow God and still do art & pop music</li>
                <li>
                  Put character and faith above money, views, or clout
                </li>
              </ul>
              <p>
                Your health matters too. <strong>No crash diets</strong> or
                unhealthy rules. We want members to be healthy, confident and
                loved for who God made them to be.
              </p>
            </div>
          </div>

          {/* 5. Training & timeline */}
          <div className="section-block">
            <div className="section-heading-row">
              <span className="emoji">🎵</span>
              <div className="section-title">Training & Timeline</div>
            </div>
            <div className="section-body">
              <p>
                Before debut, there will likely be a{" "}
                <strong>training period of 2–5 years</strong>. That can sound
                long, but it's how you'll grow in singing, dancing, performance
                and teamwork.
              </p>
              <p>
                After debut, we're asking for at least a{" "}
                <strong>5-year group commitment.</strong> Many successful
                groups stay together 7–10+ years. We want time to create music,
                build fans, and share the gospel.
              </p>
              <p>Training could include:</p>
              <ul>
                <li>Regular dance and vocal practice</li>
                <li>Stage performance training</li>
                <li>Content creation and social media</li>
                <li>Team bonding and group meetings</li>
              </ul>
              <p>
                It will be hard work: long practices, tired days and high
                expectations. If you love performing and you care about the
                mission, it can also be extremely rewarding.
              </p>
            </div>
          </div>

          {/* 6. Group culture */}
          <div className="section-block">
            <div className="section-heading-row">
              <span className="emoji">🤝</span>
              <div className="section-title">Group Culture & Expectations</div>
            </div>
            <div className="section-body">
              <ul>
                <li>
                  <strong>No single leader:</strong> every member is important
                  and respected. Decisions are made together.
                </li>
                <li>
                  <strong>Be kind and social:</strong> you'll spend a lot of
                  time together. We want members who support, not compete.
                </li>
                <li>
                  <strong>Open communication:</strong> if something feels wrong
                  or unsafe, you must speak up to a parent or staff.
                </li>
                <li>
                  <strong>Have fun!</strong> This is serious work, but it should
                  also be joyful and full of memories.
                </li>
              </ul>
            </div>
          </div>

          {/* 7. Social media */}
          <div className="section-block">
            <div className="section-heading-row">
              <span className="emoji">📱</span>
              <div className="section-title">Social Media & Public Life</div>
            </div>
            <div className="section-body">
              <p>
                Members will need to be <strong>active on social media.</strong>{" "}
                You'll share updates, interact with fans in safe ways, and
                represent the group publicly.
              </p>
              <p>
                If you're very private or uncomfortable with being known online,
                this might not be the right path.
              </p>
            </div>
          </div>

          {/* 8. Parents */}
          <div className="section-block section-parents">
            <div className="section-heading-row">
              <span className="emoji">👨‍👩‍👦</span>
              <div className="section-title">For Parents & Guardians</div>
            </div>
            <div className="section-body">
              <p>
                Parents, thank you for supporting your child's dreams. This is a
                big commitment for the whole family.
              </p>
              <p>
                Your child will need your support emotionally, spiritually and
                practically (transportation, schedule changes, etc.). Please
                make sure you're comfortable with:
              </p>
              <ul>
                <li>The Christian focus of the group</li>
                <li>The long-term time commitment</li>
                <li>
                  The public nature of your child being in a K-pop-style group
                </li>
              </ul>
            </div>
          </div>

          {/* 9. Ready? */}
          <div className="section-block">
            <div className="section-heading-row">
              <span className="emoji">🚀</span>
              <div className="section-title">Ready to Begin?</div>
            </div>
            <div className="section-body">
              <p>
                If this all sounds exciting — if you want to work hard, grow as
                an artist and a person, and use your talents to spread God's
                love through music — then we can't wait to see your audition!
              </p>
              <p>
                This is just the beginning of a journey. Let's create something
                beautiful together. 💜
              </p>
            </div>
          </div>
        </div>

        <footer className="terms-footer">
          {progress < 95 && (
            <div className="terms-footer-warning">
              <span>⬇</span>
              <span>Please scroll to the bottom to continue</span>
            </div>
          )}
          <div className="terms-consent-row">
            <input
              type="checkbox"
              id="termsCheck"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label htmlFor="termsCheck">
              I have read and understand all the information above, and I agree
              to these terms and expectations.
            </label>
          </div>
          <button
            className="button-primary"
            disabled={!canAccept}
            onClick={onAccept}
          >
            ✨ I'M READY – LET'S GO!
          </button>
        </footer>
      </div>
    </div>
  );
}

/* ---------- Step 1: Basic info -------------------------- */

function Step1({ data, onNext }) {
  const [form, setForm] = useState({
    parentName: data.parentName || "",
    parentEmail: data.parentEmail || "",
    applicantName: data.applicantName || "",
    applicantEmail: data.applicantEmail || "",
    year: data.year || "",
    month: data.month || "",
    day: data.day || "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.parentName.trim()) newErrors.parentName = "Required";
    if (!form.parentEmail.trim()) newErrors.parentEmail = "Required";
    if (!form.applicantName.trim()) newErrors.applicantName = "Required";
    if (!form.applicantEmail.trim()) newErrors.applicantEmail = "Required";
    if (!form.year || !form.month || !form.day)
      newErrors.dob = "Full date of birth required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext(form);
    }
  };

  return (
    <div className="form-screen">
      <div className="form-card">
        <header className="form-header">
          <div className="form-step-title">STEP 1: BASIC INFORMATION</div>
          <div className="form-step-sub">
            Tell us about yourself and your family
          </div>
        </header>

        <form className="form-body" onSubmit={handleSubmit}>
          <div className="form-section-label">Parent / Guardian</div>
          <div className="form-grid-two">
            <div className="form-field">
              <label>Parent/Guardian Full Name *</label>
              <input
                type="text"
                value={form.parentName}
                onChange={(e) => handleChange("parentName", e.target.value)}
              />
              {errors.parentName && (
                <div className="form-error">{errors.parentName}</div>
              )}
            </div>
            <div className="form-field">
              <label>Parent/Guardian Email *</label>
              <input
                type="email"
                value={form.parentEmail}
                onChange={(e) => handleChange("parentEmail", e.target.value)}
              />
              {errors.parentEmail && (
                <div className="form-error">{errors.parentEmail}</div>
              )}
            </div>
          </div>

          <div className="form-section-label" style={{ marginTop: 10 }}>
            Applicant
          </div>
          <div className="form-grid-two">
            <div className="form-field">
              <label>Applicant Full Name *</label>
              <input
                type="text"
                value={form.applicantName}
                onChange={(e) => handleChange("applicantName", e.target.value)}
              />
              {errors.applicantName && (
                <div className="form-error">{errors.applicantName}</div>
              )}
            </div>
            <div className="form-field">
              <label>Applicant Email *</label>
              <input
                type="email"
                value={form.applicantEmail}
                onChange={(e) => handleChange("applicantEmail", e.target.value)}
              />
              {errors.applicantEmail && (
                <div className="form-error">{errors.applicantEmail}</div>
              )}
            </div>
          </div>

          <div className="form-field">
            <label>Date of Birth * (Must be 12–14 years old)</label>
            <div className="dob-row">
              <input
                type="number"
                placeholder="Year"
                value={form.year}
                onChange={(e) => handleChange("year", e.target.value)}
              />
              <input
                type="number"
                placeholder="Month"
                value={form.month}
                onChange={(e) => handleChange("month", e.target.value)}
              />
              <input
                type="number"
                placeholder="Day"
                value={form.day}
                onChange={(e) => handleChange("day", e.target.value)}
              />
            </div>
            {errors.dob && <div className="form-error">{errors.dob}</div>}
          </div>

          <div className="form-buttons" style={{ marginTop: 16 }}>
            <button type="submit" className="button-fill">
              NEXT STEP →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------- Step 2: Audition specifics ----------------- */

function Step2({ data, onBack, onSubmit }) {
  const [form, setForm] = useState({
    role: data.role || "",
    pfp: null,
    audio: null,
    video: null,
    visual1: null,
    visual2: null,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleRoleChange = (value) => {
    setForm((prev) => ({
      ...prev,
      role: value,
      audio: null,
      video: null,
      visual1: null,
      visual2: null,
    }));
  };

  const handleFileChange = (field, file) => {
    setForm((prev) => ({ ...prev, [field]: file }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.role) newErrors.role = "Please select a role";
    if (!form.pfp) newErrors.pfp = "Profile photo is required";

    if (form.role === "Main Vocalist" || form.role === "Main Rapper") {
      if (!form.audio) newErrors.audio = "Audio file is required for this role";
    } else if (form.role === "Main Dancer") {
      if (!form.video) newErrors.video = "Dance video is required";
    } else if (form.role === "Main Visualizer") {
      if (!form.visual1 || !form.visual2)
        newErrors.visual = "Two photos are required for visualizer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await onSubmit(form);
    setSubmitting(false);
  };

  const roleHint = (() => {
    if (form.role === "Main Vocalist")
      return "Main Vocalist: upload an audio file that shows your singing. No video needed.";
    if (form.role === "Main Rapper")
      return "Main Rapper: upload an audio file that shows your rap. No video needed.";
    if (form.role === "Main Dancer")
      return "Main Dancer: upload a 1–3 minute dance video. No audio-only file.";
    if (form.role === "Main Visualizer")
      return "Main Visualizer: upload two strong photos that show your visuals and presence.";
    return "Choose a role to see what you need to upload.";
  })();

  const roles = [
    "Main Vocalist",
    "Main Dancer",
    "Main Rapper",
    "Main Visualizer",
  ];

  return (
    <div className="form-screen">
      <div className="form-card">
        <header className="form-header">
          <div className="form-step-title">STEP 2: YOUR AUDITION</div>
          <div className="form-step-sub">Show us your talent!</div>
        </header>

        <form className="form-body" onSubmit={handleSubmit}>
          {/* Role select */}
          <div className="form-field">
            <label>What role are you auditioning for? *</label>
            <select
              value={form.role}
              onChange={(e) => handleRoleChange(e.target.value)}
            >
              <option value="">Select a role</option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
              <option disabled>All-Rounder (not available)</option>
            </select>
            {errors.role && <div className="form-error">{errors.role}</div>}
          </div>

          <div className="upload-card">
            <div className="upload-card-title">
              <span>💡</span>What to Upload
            </div>
            <small>{roleHint}</small>
          </div>

          {/* PFP */}
          <div className="upload-card">
            <div className="upload-card-title">
              <span>🧑</span>Profile Photo (PFP) – required for everyone
            </div>
            <small>Clear photo of the auditioning person’s face.</small>
            <input
              className="upload-input"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange("pfp", e.target.files[0])}
            />
            {errors.pfp && <div className="form-error">{errors.pfp}</div>}
          </div>

          {/* Audio or video / extra photos */}
          {(form.role === "Main Vocalist" || form.role === "Main Rapper") && (
            <div className="upload-card">
              <div className="upload-card-title">
                <span>🎧</span>Audio Upload (required)
              </div>
              <small>
                Upload an audio file (mp3, m4a, wav, etc.) with your vocals or
                rap.
              </small>
              <input
                className="upload-input"
                type="file"
                accept="audio/*"
                onChange={(e) => handleFileChange("audio", e.target.files[0])}
              />
              {errors.audio && <div className="form-error">{errors.audio}</div>}
            </div>
          )}

          {form.role === "Main Dancer" && (
            <div className="upload-card">
              <div className="upload-card-title">
                <span>🎥</span>Dance Video Upload (required)
              </div>
              <small>Upload a 1–3 minute video showing your dance.</small>
              <input
                className="upload-input"
                type="file"
                accept="video/*"
                onChange={(e) => handleFileChange("video", e.target.files[0])}
              />
              {errors.video && <div className="form-error">{errors.video}</div>}
            </div>
          )}

          {form.role === "Main Visualizer" && (
            <div className="upload-card">
              <div className="upload-card-title">
                <span>📸</span>Visualizer Photos (2 required)
              </div>
              <small>Upload two clear photos that show your visuals.</small>
              <input
                className="upload-input"
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange("visual1", e.target.files[0])}
              />
              <input
                className="upload-input"
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange("visual2", e.target.files[0])}
              />
              {errors.visual && (
                <div className="form-error">{errors.visual}</div>
              )}
            </div>
          )}

          {/* Tips */}
          <div className="upload-card">
            <div className="upload-card-title">
              <span>📋</span>Video / Audio Tips
            </div>
            <small>
              • Show your best skills for your chosen role<br />
              • Good lighting and clear audio are important<br />
              • Be yourself and let your personality shine<br />
              • Length: about 1–3 minutes is ideal
            </small>
          </div>

          <div className="form-buttons">
            <button
              type="button"
              className="button-outline"
              onClick={onBack}
            >
              ← Back
            </button>
            <button type="submit" className="button-fill" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Audition"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------- Thank you ---------------------------------- */

function ThankYou({ onHome }) {
  return (
    <div className="thankyou-screen">
      <div className="thankyou-card">
        <div className="thankyou-header">
          <div className="thankyou-icon">✅</div>
          <div className="thankyou-title">AUDITION SUBMITTED!</div>
          <div className="thankyou-sub">
            Thank you so much for your submission ✨
          </div>
        </div>
        <div className="thankyou-body">
          <div className="info-card">
            <div className="info-card-title">What happens next?</div>
            <p>
              Please wait <strong>4 to 6 months</strong> while we carefully
              review all auditions. We'll contact you via email with the
              results. Make sure to check your inbox regularly!
            </p>
          </div>

          <div className="info-card">
            <div className="info-card-title">We appreciate your patience</div>
            <p>
              As an independent, faith-based initiative, we're taking our time
              to make sure we find the right members who share our vision of
              spreading the gospel through music. Thank you for understanding!
            </p>
          </div>

          <div className="text-center mt-16">
            <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>
              If you have any questions, feel free to reach out to the parent
              email you provided. We'll be in touch soon. 🙏✨
            </p>
            <button
              className="button-fill"
              style={{ marginTop: 16, width: "auto", paddingInline: 28 }}
              onClick={onHome}
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Main App + Formspree hookup ---------------- */

function App() {
  const [screen, setScreen] = useState("home"); // home | terms | step1 | step2 | thanks
  const [formData, setFormData] = useState({});

  const startAudition = () => {
    window.scrollTo(0, 0);
    setScreen("terms");
  };

  const handleTermsAccept = () => {
    window.scrollTo(0, 0);
    setScreen("step1");
  };

  const handleStep1Next = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    window.scrollTo(0, 0);
    setScreen("step2");
  };

  const handleStep2Back = () => {
    window.scrollTo(0, 0);
    setScreen("step1");
  };

  const handleSubmitToFormspree = async (step2Data) => {
    const all = { ...formData, ...step2Data };

    const fd = new FormData();
    fd.append("parentName", all.parentName || "");
    fd.append("parentEmail", all.parentEmail || "");
    fd.append("applicantName", all.applicantName || "");
    fd.append("applicantEmail", all.applicantEmail || "");
    fd.append(
      "dateOfBirth",
      `${all.year || ""}-${all.month || ""}-${all.day || ""}`
    );
    fd.append("role", all.role || "");

    if (all.pfp) fd.append("pfp", all.pfp);
    if (all.audio) fd.append("audio", all.audio);
    if (all.video) fd.append("video", all.video);
    if (all.visual1) fd.append("visualPhoto1", all.visual1);
    if (all.visual2) fd.append("visualPhoto2", all.visual2);

    try {
      // ✅ Your Formspree endpoint (change if you made a new one)
      const res = await fetch("https://formspree.io/f/xnnoeyng", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      // Even if something goes wrong, still show thank-you so kids don't panic
      console.log("Formspree status", res.status);
    } catch (err) {
      console.error("Error submitting to Formspree", err);
    }

    window.scrollTo(0, 0);
    setScreen("thanks");
  };

  const goHome = () => {
    window.scrollTo(0, 0);
    setScreen("home");
  };

  if (screen === "terms") return <TermsScreen onAccept={handleTermsAccept} />;
  if (screen === "step1")
    return <Step1 data={formData} onNext={handleStep1Next} />;
  if (screen === "step2")
    return (
      <Step2
        data={formData}
        onBack={handleStep2Back}
        onSubmit={handleSubmitToFormspree}
      />
    );
  if (screen === "thanks") return <ThankYou onHome={goHome} />;

  // default:
  return (
    <div className="app-root">
      <Home onStart={startAudition} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
