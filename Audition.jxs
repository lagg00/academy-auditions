import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TermsModal from "../components/audition/TermsModal";
import AuditionStep1 from "../components/audition/AuditionStep1";
import AuditionStep2 from "../components/audition/AuditionStep2";
import ThankYou from "../components/audition/ThankYou";

export default function Audition() {
  const [showTerms, setShowTerms] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    childName: "",
    childEmail: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    role: "",
    video: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTermsAccept = () => {
    setShowTerms(false);
  };

  const handleStep1Complete = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(2);
  };

  const handleStep2Complete = (data) => {
    setFormData({ ...formData, ...data });
    submitForm({ ...formData, ...data });
  };

  const submitForm = async (finalData) => {
    const formDataToSend = new FormData();
    formDataToSend.append("parentName", finalData.parentName);
    formDataToSend.append("parentEmail", finalData.parentEmail);
    formDataToSend.append("childName", finalData.childName);
    formDataToSend.append("childEmail", finalData.childEmail);
    formDataToSend.append("dateOfBirth", `${finalData.birthYear}-${finalData.birthMonth}-${finalData.birthDay}`);
    formDataToSend.append("role", finalData.role);
    if (finalData.video) {
      formDataToSend.append("video", finalData.video);
    }

    try {
      await fetch("https://formspree.io/f/xnnoeyng", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <ThankYou />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {showTerms && (
          <TermsModal onAccept={handleTermsAccept} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!showTerms && currentStep === 1 && (
          <AuditionStep1 
            key="step1"
            onNext={handleStep1Complete}
            initialData={formData}
          />
        )}
        {!showTerms && currentStep === 2 && (
          <AuditionStep2
            key="step2"
            onSubmit={handleStep2Complete}
            onBack={() => setCurrentStep(1)}
            initialData={formData}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
