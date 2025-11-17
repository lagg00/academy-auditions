import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Upload, Video, Sparkles } from "lucide-react";

export default function AuditionStep2({ onSubmit, onBack, initialData }) {
  const [formData, setFormData] = useState({
    role: initialData.role || "",
    video: initialData.video || null,
  });

  const [errors, setErrors] = useState({});
  const [videoName, setVideoName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roles = [
    { value: "Main Vocalist", label: "Main Vocalist", disabled: false },
    { value: "Main Dancer", label: "Main Dancer", disabled: false },
    { value: "Main Rapper", label: "Main Rapper", disabled: false },
    { value: "Main Visualizer", label: "Main Visualizer", disabled: false },
    { value: "All-Rounder", label: "All-Rounder", disabled: true, crossed: true },
  ];

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, video: file });
      setVideoName(file.name);
      if (errors.video) {
        setErrors({ ...errors, video: null });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.role) newErrors.role = "Please select a role";
    if (!formData.video) newErrors.video = "Please upload an audition video";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full max-w-2xl"
    >
      <div className="bg-white/95 backdrop-blur-xl border-2 border-blue-300 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
          <h2 className="text-3xl font-black text-white">STEP 2: YOUR AUDITION</h2>
          <p className="text-blue-100 mt-1 font-semibold">Show us your talent!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6 bg-white">
          {/* Role Selection */}
          <div>
            <Label className="text-gray-700 text-base mb-3 block flex items-center gap-2 font-semibold">
              <Sparkles className="w-5 h-5 text-blue-600" />
              What role are you auditioning for? *
            </Label>
            <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
              <SelectTrigger className={`border-2 py-6 text-base ${errors.role ? "border-red-500" : "border-gray-300"}`}>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem 
                    key={role.value} 
                    value={role.value} 
                    className={`text-base py-3 ${role.crossed ? 'line-through text-gray-400 opacity-50' : ''}`}
                    disabled={role.disabled}
                  >
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-2 font-semibold">{errors.role}</p>
            )}
          </div>

          {/* Video Upload */}
          <div>
            <Label className="text-gray-700 text-base mb-3 block flex items-center gap-2 font-semibold">
              <Video className="w-5 h-5 text-blue-600" />
              Upload Your Audition Video *
            </Label>
            <div className={`relative border-2 border-dashed rounded-2xl p-8 transition-all ${
              errors.video ? "border-red-500 bg-red-50" : "border-blue-300 bg-blue-50/50 hover:border-blue-500 hover:bg-blue-50"
            }`}>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="text-center">
                {videoName ? (
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-blue-500 rounded-2xl flex items-center justify-center">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-900 font-semibold">{videoName}</p>
                    <p className="text-gray-600 text-sm">Click to change video</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-gray-900 font-semibold">Click or drag to upload</p>
                    <p className="text-gray-600 text-sm">Any video format, any size</p>
                  </div>
                )}
              </div>
            </div>
            {errors.video && (
              <p className="text-red-500 text-sm mt-2 font-semibold">{errors.video}</p>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <h3 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
              <Video className="w-5 h-5" />
              Video Tips
            </h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Show your best skills for your chosen role</li>
              <li>• Good lighting and clear audio are important</li>
              <li>• Be yourself and let your personality shine!</li>
              <li>• Length: 1-3 minutes is ideal</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <Button
              type="button"
              onClick={onBack}
              variant="outline"
              className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 py-6 text-base font-semibold rounded-xl"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              BACK
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-base py-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  SUBMITTING...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  SUBMIT AUDITION
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
