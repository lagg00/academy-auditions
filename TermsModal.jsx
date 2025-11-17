import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Heart, Clock, Users, Shield, CheckCircle, Star, Sparkles, Award, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

export default function TermsModal({ onAccept }) {
  const [isChecked, setIsChecked] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrolled = container.scrollTop;
      const progress = Math.min((scrolled / scrollHeight) * 100, 100);
      
      setScrollProgress(progress);
      
      if (scrollHeight - scrolled < 20) {
        setHasScrolledToBottom(true);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-amber-900/40 via-black/90 to-purple-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-gradient-to-b from-gray-900 to-black border-2 border-amber-500/30 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600/20 to-purple-600/20 backdrop-blur-sm px-6 py-5 border-b-2 border-amber-500/20 flex-shrink-0">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-black text-amber-100 text-center">Welcome to Your Journey</h2>
            <Sparkles className="w-6 h-6 text-amber-400" />
          </div>
          <p className="text-amber-200/80 text-sm text-center font-medium">Before we begin, let's talk about what this means</p>
        </div>

        {/* Scroll Progress */}
        <div className="bg-gray-900/80 px-6 py-3 border-b border-amber-500/20 flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold">
              {hasScrolledToBottom ? (
                <span className="text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  You're all set! ✨
                </span>
              ) : (
                <span className="text-amber-400">Keep reading: {Math.round(scrollProgress)}%</span>
              )}
            </p>
          </div>
          <Progress value={scrollProgress} className="h-1.5 bg-gray-800" />
        </div>

        {/* Content */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto px-6 py-6 bg-gradient-to-b from-black to-gray-950"
        >
          <div className="space-y-8 text-gray-300">
            
            {/* Welcome Message */}
            <div className="bg-gradient-to-br from-amber-900/20 to-purple-900/20 border border-amber-500/30 rounded-2xl p-6 text-center">
              <Heart className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-amber-100 mb-3">Thank You for Your Interest! 💫</h3>
              <p className="text-amber-200/90 leading-relaxed">
                We're so excited that you're considering joining us on this incredible journey. 
                Before you audition, we want to make sure you understand what New Academy is all about 
                and what we're looking for in our members. Take your time reading through everything—this is important!
              </p>
            </div>

            {/* What is New Academy */}
            <div>
              <h3 className="text-xl font-bold text-amber-100 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-amber-400" />
                What is New Academy?
              </h3>
              <div className="bg-white/5 border border-white/20 rounded-xl p-5 space-y-3">
                <p className="leading-relaxed">
                  <strong className="text-amber-200">New Academy</strong> is the name of this audition program—it's <strong className="text-amber-200">not</strong> the final name of the group. 
                  We're still deciding on that together as a team!
                </p>
                <p className="leading-relaxed">
                  We're an <strong className="text-amber-200">independent, faith-based initiative</strong> created by passionate people who love K-pop and want to use it 
                  to spread a positive Christian message. We're <strong className="text-amber-200">not a big professional label</strong> with lots of resources—we're starting from the ground up, 
                  building something meaningful with heart and dedication.
                </p>
                <p className="leading-relaxed">
                  Because we're independent, things might move slower than you'd expect from a professional company. 
                  We appreciate your patience and understanding as we work hard to make this dream a reality! 🌟
                </p>
              </div>
            </div>

            {/* Age Requirements */}
            <div>
              <h3 className="text-xl font-bold text-amber-100 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-amber-400" />
                Who Can Join?
              </h3>
              <div className="bg-white/5 border border-white/20 rounded-xl p-5 space-y-3">
                <div className="bg-amber-900/30 border-l-4 border-amber-500 rounded-lg p-4">
                  <p className="text-amber-100 font-bold text-lg mb-2">Age Requirement: 12-14 Years Old</p>
                  <p className="text-amber-200/90">
                    You must be between 12 and 14 years old at the time of audition. We chose this age range because 
                    it's the perfect time for training and growth, both as an artist and as a person. No exceptions can be made to this requirement.
                  </p>
                </div>
                <p className="leading-relaxed">
                  We're looking for young people who are passionate, dedicated, and ready to grow. You don't need to be perfect—
                  just willing to learn, work hard, and support your future groupmates!
                </p>
              </div>
            </div>

            {/* Christian Foundation */}
            <div>
              <h3 className="text-xl font-bold text-amber-100 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-amber-400" />
                Our Faith & Mission
              </h3>
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-5 space-y-4">
                <div>
                  <h4 className="font-bold text-purple-200 mb-2 text-lg">A Christian K-pop Group 🙏</h4>
                  <p className="leading-relaxed">
                    This will be a <strong className="text-purple-200">Christian K-pop group</strong>—potentially the very first of its kind! 
                    Our music and message will be centered around faith, hope, and spreading the gospel in a way that's accessible and inspiring to young people everywhere.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-purple-200 mb-2 text-lg">Our Purpose ✝️</h4>
                  <p className="leading-relaxed mb-3">
                    This isn't about becoming famous or winning awards—though those things might happen! Our real goal is to 
                    <strong className="text-purple-200"> use music to share God's love</strong> and inspire others to explore their faith. 
                    We want to show that you can be successful in entertainment while staying true to your values.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300">✓</span>
                      <span>If we're invited to events that conflict with our Christian values, we may choose not to attend</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300">✓</span>
                      <span>We prioritize faith and character over commercial success</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300">✓</span>
                      <span>All members should be comfortable expressing Christian beliefs through their art</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-purple-200 mb-2 text-lg">Your Wellbeing Comes First 💜</h4>
                  <p className="leading-relaxed">
                    <strong className="text-purple-200">No strict dieting or unhealthy practices.</strong> Your physical and mental health 
                    are more important than fitting a certain image. We want you to be healthy, happy, and confident in who you are. 
                    God made you perfectly, and we're going to help you shine as your authentic self!
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-purple-200 mb-2 text-lg">The Right Motivation ⭐</h4>
                  <p className="leading-relaxed">
                    We're looking for members who want to join because they're passionate about music, performance, and sharing their faith—
                    <strong className="text-purple-200"> not because they want to be rich or famous.</strong> If your heart is in the right place 
                    and you're excited about this mission, you're exactly who we're looking for!
                  </p>
                </div>
              </div>
            </div>

            {/* Training Period */}
            <div>
              <h3 className="text-xl font-bold text-amber-100 mb-4 flex items-center gap-2">
                <Music className="w-6 h-6 text-amber-400" />
                Training & Timeline
              </h3>
              <div className="bg-white/5 border border-white/20 rounded-xl p-5 space-y-4">
                <div>
                  <h4 className="font-bold text-amber-200 mb-2 text-lg flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Training Period: 2-5 Years
                  </h4>
                  <p className="leading-relaxed mb-3">
                    Before the group debuts, you'll go through a training period that could last anywhere from <strong className="text-amber-200">2 to 5 years</strong>. 
                    This might sound like a long time, but it's how we'll help you develop your skills in singing, dancing, performance, 
                    and everything else you'll need to succeed.
                  </p>
                  <p className="leading-relaxed">
                    During training, you'll work with coaches, practice with your fellow trainees, and grow both as an artist and as a person. 
                    It's challenging, but it's also an amazing opportunity to improve and prepare for your debut!
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-amber-200 mb-2 text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Group Commitment: 5 Years Minimum
                  </h4>
                  <p className="leading-relaxed mb-3">
                    Once the group debuts, we're asking for a <strong className="text-amber-200">minimum 5-year commitment</strong> from all members. 
                    This gives us time to build something special together, release music, connect with fans, and make a real impact.
                  </p>
                  <p className="leading-relaxed">
                    Five years might seem long, but many successful K-pop groups stay together for 7-10+ years! We want to create lasting memories 
                    and meaningful work that will touch people's hearts.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-amber-200 mb-2 text-lg">What Training Looks Like 📚</h4>
                  <ul className="space-y-2.5 ml-4">
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-amber-200">Intense practice schedules:</strong> You'll be dancing, singing, and practicing regularly. It takes dedication!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-amber-200">Skill development:</strong> Vocal training, dance classes, stage presence, and more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-amber-200">Team bonding:</strong> You'll grow close with your fellow trainees and members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-amber-200">Social media presence:</strong> You'll need to be active online to connect with fans and spread our message</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-900/30 border-l-4 border-amber-500 rounded-lg p-4">
                  <p className="text-amber-100 font-semibold mb-2">💪 Be Prepared for Hard Work!</p>
                  <p className="text-amber-200/90">
                    Training and being in a K-pop group requires extreme dedication. You'll have long practice days, strict schedules, 
                    and high expectations. But if you love performing and you're passionate about the mission, it's incredibly rewarding!
                  </p>
                </div>
              </div>
            </div>

            {/* Group Culture */}
            <div>
              <h3 className="text-xl font-bold text-amber-100 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-amber-400" />
                Group Culture & Expectations
              </h3>
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-5 space-y-4">
                <div>
                  <h4 className="font-bold text-blue-200 mb-2 text-lg flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    No Single Leader—We're All Equal
                  </h4>
                  <p className="leading-relaxed">
                    In this group, there's <strong className="text-blue-200">no single leader</strong>. Every member is equally important and valued. 
                    Each person brings unique talents and perspectives, and we make decisions together as a team. You'll have your own role (Main Dancer, 
                    Main Vocalist, etc.), but no one is "above" anyone else.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-200 mb-2 text-lg flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Be Kind, Social, and Supportive
                  </h4>
                  <p className="leading-relaxed mb-3">
                    We're building a <strong className="text-blue-200">family</strong>, not just a work group. You'll be spending a lot of time with your fellow members, 
                    so it's important to be friendly, supportive, and kind. Help each other improve, celebrate each other's wins, and lift each other up when things get tough.
                  </p>
                  <p className="leading-relaxed">
                    Being social isn't just nice—it's necessary! You'll need to work closely with your groupmates, trust each other, and create strong bonds. 
                    The best groups are the ones where members genuinely care about each other.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-200 mb-2 text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Open Communication & Safety
                  </h4>
                  <p className="leading-relaxed mb-3">
                    If something's wrong—if you're struggling, if there's conflict, or if you feel uncomfortable—<strong className="text-blue-200"> speak up!</strong> 
                    We want open and honest communication. Talk to your fellow members, your coaches, or your parents.
                  </p>
                  <p className="leading-relaxed">
                    Your safety and wellbeing are our top priorities. We're committed to creating a supportive, positive environment where everyone feels heard and respected.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-200 mb-2 text-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Have Fun & Enjoy the Journey!
                  </h4>
                  <p className="leading-relaxed">
                    Yes, this will be hard work. Yes, there will be challenges. But this should also be <strong className="text-blue-200">fun and fulfilling!</strong> 
                    You're doing something you love, with people who share your passion, for a purpose that matters. Embrace the journey, make memories, 
                    and enjoy every step along the way. 🎉
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media & Public Life */}
            <div>
              <h3 className="text-xl font-bold text-amber-100 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-400" />
                Social Media & Public Presence
              </h3>
              <div className="bg-white/5 border border-white/20 rounded-xl p-5 space-y-3">
                <p className="leading-relaxed">
                  As a member of this group, you'll need to be <strong className="text-amber-200">active on social media</strong>. 
                  This is a key part of how we'll connect with fans, share our message, and grow our community.
                </p>
                <p className="leading-relaxed">
                  This means posting regularly, engaging with fans (in a safe and appropriate way), and being comfortable with people 
                  knowing who you are. If you're very private or uncomfortable with social media, this might not be the right fit.
                </p>
                <p className="leading-relaxed">
                  Don't worry—we'll provide guidance on how to manage your online presence safely and positively!
                </p>
              </div>
            </div>

            {/* Parent Involvement */}
            <div>
              <h3 className="text-xl font-bold text-amber-100 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-amber-400" />
                For Parents & Guardians
              </h3>
              <div className="bg-white/5 border border-white/20 rounded-xl p-5 space-y-3">
                <p className="leading-relaxed">
                  Parents, thank you for supporting your child's dreams! We want you to be involved and informed every step of the way.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-amber-200">Your child will need your support</strong> throughout training and beyond—emotionally, logistically, and spiritually. 
                  This is a big commitment for the whole family. We encourage open communication between you, your child, and our team.
                </p>
                <p className="leading-relaxed">
                  Please make sure you're comfortable with the Christian focus of this group, the time commitments involved, and the public nature of being in a K-pop group. 
                  Feel free to reach out with any questions or concerns!
                </p>
              </div>
            </div>

            {/* Final Message */}
            <div className="bg-gradient-to-br from-amber-900/30 to-purple-900/30 border-2 border-amber-500/40 rounded-2xl p-6 text-center">
              <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-100 mb-4">Ready to Begin? ✨</h3>
              <p className="text-lg text-amber-200/90 leading-relaxed mb-4">
                If everything we've described sounds exciting to you—if you're ready to work hard, grow as an artist and a person, 
                and use your talents to spread God's love through music—then we can't wait to see your audition!
              </p>
              <p className="text-lg text-amber-200/90 leading-relaxed">
                This is just the beginning of an incredible journey. Let's create something beautiful together! 💜
              </p>
            </div>

            <div className="h-8" />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-950 to-black border-t-2 border-amber-500/30 px-6 py-5 flex-shrink-0">
          {!hasScrolledToBottom && (
            <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-3 mb-4 text-center">
              <p className="text-amber-300 text-sm font-semibold">
                ⬇️ Please scroll to the bottom to continue
              </p>
            </div>
          )}
          
          <div className="flex items-start gap-3 mb-4">
            <Checkbox
              id="terms"
              checked={isChecked}
              onCheckedChange={setIsChecked}
              disabled={!hasScrolledToBottom}
              className={`border-amber-400 mt-0.5 ${!hasScrolledToBottom ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
            <label
              htmlFor="terms"
              className={`text-sm text-amber-200/90 cursor-pointer select-none ${!hasScrolledToBottom ? 'opacity-50' : ''}`}
            >
              I have read and understand all the information above, and I agree to these terms and expectations
            </label>
          </div>
          <Button
            onClick={onAccept}
            disabled={!isChecked || !hasScrolledToBottom}
            className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold text-base py-6 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg shadow-amber-900/50"
          >
            {hasScrolledToBottom ? "✨ I'M READY - LET'S GO!" : "SCROLL TO CONTINUE"}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
