"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
 
const ProgressBar: React.FC<{ currentQuestion: number, totalQuestions: number }> = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${
              i < currentQuestion ? "bg-blue-500" : "bg-blue-200"
            }`}
          />
        ))}
      </div>
      <p className="text-center text-blue-200 mt-2">Question {currentQuestion} of {totalQuestions}</p>
    </div>
  );
};

const PersonalityTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<typeof questions[number]["options"][number] | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const totalQuestions = 18;
  const router = useRouter();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleSubmit = () => {
    if (selectedOption) {
      setSelectedOption(null);
      setCurrentQuestion((prev) => prev + 1);
      if (currentQuestion === questions.length - 1) {
        router.push("/results");
      }
    }
  };

  const questions: { question: string; options: { label: string; category: string; subcategory: string }[] }[] = [
    {
      question: "When you have some free time, you prefer to:",
      options: [
        { label: "Read a book or dive into a documentary", category: 'passion', subcategory: 'IntellectualPursuits' },
        { label: "Go for a run or hit the gym", category: 'passion', subcategory: 'PhysicalActivities' },
        { label: "Finally tackle that DIY project that's been bugging you.", category: 'vocation', subcategory: 'ProblemSolving' },
        { label: "Catch up with friends over coffee", category: 'mission', subcategory: 'InterpersonalSkills' },
      ],
    },
    {
      question: "Your friend is moving to a new place and needs help. You offer to:",
      options: [
        { label: "Organize the packing and transport", category: 'vocation', subcategory: 'Leadership' },
        { label: "Provide help to fix things in the new place", category: 'vocation', subcategory: 'SpecializedKnowledge' },
        { label: "Keep spirits high and make it a fun day", category: 'mission', subcategory: 'CommunityBuilding' },
        { label: "Research how to do it with less cost", category: 'profession', subcategory: 'BusinessEntrepreneurship' },
      ],
    },
    {
      question: "At a social event, you often:",


      options: [
        { label: "Engage in conversations about various topics", category: 'passion', subcategory: 'IntellectualPursuits' },
        { label: "Make the most photos", category: 'passion', subcategory: 'CreativeArts' },
        { label: "Help to organize things", category: 'vocation', subcategory: 'ProblemSolving' },
        { label: "Share interesting stories or jokes to entertain others", category: 'mission', subcategory: 'InterpersonalSkills' },
      ],
    
    },
    {
      question: "When faced with a problem, your first instinct is to:",
      options: [
        { label: "Analyze it logically to find the best solution", category: 'vocation', subcategory: 'ProblemSolving' },
        { label: "Think of a creative way to approach it", category: 'passion', subcategory: 'CreativeArts' },
        { label: "Ask someone you know", category: 'mission', subcategory: 'InterpersonalSkills' },
        { label: "Consider how solving it might help others", category: 'mission', subcategory: 'SocialCauses' },
      ],
    },
    {
      question: "Your coworker asks for advice on improving their workspace. You suggest:",
      options: [
        { label: "Finding a way to make it more functional and organized", category: 'vocation', subcategory: 'SpecializedKnowledge' },
        { label: "Adding creative touches to make it more inspiring", category: 'passion', subcategory: 'CreativeArts' },
        { label: "Setting up a system to boost productivity", category: 'profession', subcategory: 'BusinessEntrepreneurship' },
        { label: "Sharing tips on time management and focus", category: 'mission', subcategory: 'EducationMentorship' },
      ],
    },
    {
      question: "During a job meeting, you often:",
      options: [
        { label: "Lead the discussion to make decisions", category: 'vocation', subcategory: 'Leadership' },
        { label: "Share your tips on any issue", category: 'vocation', subcategory: 'SpecializedKnowledge' },
        { label: "Ensure that everyone has a chance to speak", category: 'mission', subcategory: 'CommunityBuilding' },
        { label: "Propose solutions to any issues that come up", category: 'vocation', subcategory: 'ProblemSolving' },
      ],
    },
    {
      question: "When traveling, you are most excited about:",
      options: [
        { label: "Visiting historical sites and museums", category: 'passion', subcategory: 'IntellectualPursuits' },
        { label: "Exploring nature and hitting your daily step goal", category: 'passion', subcategory: 'PhysicalActivities' },
        { label: "Meeting new people and experiencing the culture", category: 'mission', subcategory: 'InterpersonalSkills' },
        { label: "Capturing new photos", category: 'passion', subcategory: 'CreativeArts' },
      ],
    },
    {
      question: "Your friends describe you as:",
      options: [
        { label: "Business-savvy", category: 'profession', subcategory: 'BusinessEntrepreneurship' },
        { label: "A natural leader", category: 'vocation', subcategory: 'Leadership' },
        { label: "Always active", category: 'passion', subcategory: 'PhysicalActivities' },
        { label: "The go-to for tech help", category: 'vocation', subcategory: 'SpecializedKnowledge' },
      ],
    },
    {
      question: "At work, you're most energized by:",
      options: [
        { label: "Helping a colleague learn something new", category: 'mission', subcategory: 'EducationMentorship' },
        { label: "Organizing a group activity or outing", category: 'passion', subcategory: 'PhysicalActivities' },
        { label: "Figuring out how to overcome challenges", category: 'vocation', subcategory: 'ProblemSolving' },
        { label: "Leading the team to achieve goals", category: 'vocation', subcategory: 'Leadership' },
      ],
    },
    {
      question: "Your favorite type of book or movie is:",
      options: [
        { label: "Documentaries or dramas", category: 'passion', subcategory: 'IntellectualPursuits' },
        { label: "Something that gets your adrenaline going", category: 'passion', subcategory: 'PhysicalActivities' },
        { label: "Heartfelt stories of people's situations", category: 'mission', subcategory: 'SocialCauses' },
        { label: "Biographies of successful people", category: 'profession', subcategory: 'BusinessEntrepreneurship' },
      ],
    },
    {
      question: "When planning for the future, what's on your mind?",
      options: [
        { label: "Finding ways to support someone", category: 'mission', subcategory: 'SocialCauses' },
        { label: "Staying healthy and active long-term", category: 'passion', subcategory: 'PhysicalActivities' },
        { label: "Keeping up with learning and teaching", category: 'mission', subcategory: 'EducationMentorship' },
        { label: "Building strong connections with others", category: 'mission', subcategory: 'CommunityBuilding' },
      ],
    },
    {
      question: "When buying a gift, you tend to:",
      options: [
        { label: "Choose a cool gadget", category: 'vocation', subcategory: 'SpecializedKnowledge' },
        { label: "Pick a group activity", category: 'mission', subcategory: 'CommunityBuilding' },
        { label: "Buy a productivity tool", category: 'profession', subcategory: 'BusinessEntrepreneurship' },
        { label: "Choose something mind-stimulating", category: 'passion', subcategory: 'IntellectualPursuits' },
      ],
    },
    {
      question: "Your dream job involves:",
      options: [
        { label: "Leading a team", category: 'vocation', subcategory: 'Leadership' },
        { label: "Solving technical challenges", category: 'vocation', subcategory: 'SpecializedKnowledge' },
        { label: "Making a difference", category: 'mission', subcategory: 'SocialCauses' },
        { label: "Teaching others", category: 'mission', subcategory: 'EducationMentorship' },
      ],
    },
    {
      question: "At work, you're often asked to:",
      options: [
        { label: "Handle technical tasks", category: 'vocation', subcategory: 'SpecializedKnowledge' },
        { label: "Solve tough problems", category: 'vocation', subcategory: 'ProblemSolving' },
        { label: "Mentor new recruits", category: 'mission', subcategory: 'EducationMentorship' },
        { label: "Help develop strategies", category: 'profession', subcategory: 'BusinessEntrepreneurship' },
      ],
    },
    {
      question: "On a road trip with friends, you're the one who:",
      options: [
        { label: "Decides the route and plans the stops", category: 'vocation', subcategory: 'Leadership' },
        { label: "Handles the navigation", category: 'vocation', subcategory: 'SpecializedKnowledge' },
        { label: "Keeps the conversations going", category: 'mission', subcategory: 'InterpersonalSkills' },
        { label: "Suggests visiting a place that supports a good cause", category: 'mission', subcategory: 'SocialCauses' },
      ],
    },
    {
      question: "When trying out a new hobby, you're drawn to:",
      options: [
        { label: "Something that makes you think deeply", category: 'passion', subcategory: 'IntellectualPursuits' },
        { label: "Something you could eventually turn into a business", category: 'profession', subcategory: 'BusinessEntrepreneurship' },
        { label: "Something that brings people together", category: 'mission', subcategory: 'CommunityBuilding' },
        { label: "Something where you can learn and teach others", category: 'mission', subcategory: 'EducationMentorship' },
      ],
    },
    {
      question: "Your friends would describe you as:",
      options: [
        { label: "Logical and analytical", category: 'vocation', subcategory: 'ProblemSolving' },
        { label: "A great communicator and listener", category: 'mission', subcategory: 'InterpersonalSkills' },
        { label: "Compassionate and understanding", category: 'mission', subcategory: 'InterpersonalSkills' },
        { label: "Someone who brings people together", category: 'mission', subcategory: 'CommunityBuilding' },
      ],
    },
    {
      question: "When cooking something special, you:",
      options: [
        { label: "Look up a recipe with an interesting story", category: 'passion', subcategory: 'IntellectualPursuits' },
        { label: "Use ingredients from a local farmer's market", category: 'mission', subcategory: 'SocialCauses' },
        { label: "Experiment with measurements until you get it just right", category: 'vocation', subcategory: 'ProblemSolving' },
        { label: "Invite friends over to share it with you", category: 'mission', subcategory: 'CommunityBuilding' },
      ],
    },
  ];

  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

   // Set mounted state after the component has rendered
   useEffect(() => {
    setIsMounted(true);
  }, []);

  // Load video only when the component is mounted and after a slight delay to avoid timing issues
  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        setVideoLoaded(true);
      }, 200); // Delay to ensure component is fully initialized

      return () => clearTimeout(timer); // Clean up timeout on unmount
    }
  }, [isMounted]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      {/* Fallback image, only shows if video isn't loaded */}
      {!videoLoaded && (
        <img
          src="/images/stars.png"
          alt="Fallback Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Background Video */}
      {videoLoaded && (
        <video
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video/stars_video.mp4" type="video/mp4" />
          <source src="/video/shooting_stars.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      
      <div className="relative z-10">
        <ProgressBar currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
        <div className="bg-blue-800 bg-opacity-60 backdrop-blur-md rounded-lg p-8 w-full max-w-2xl z-10 shadow-lg border border-blue-600">
          <h1 className="text-3xl font-bold text-center text-blue-100 mb-8 font-serif font-akwe">
            {questions[currentQuestion]?.question}
          </h1>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-800 text-blue-100 font-medium py-2 px-4 rounded-lg transition duration-50 ease-in-out transform hover:scale-105"
                onClick={() => setSelectedOption(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="w-full mt-8 bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600"
          >
            {currentQuestion < questions.length - 1 ? "Next Question" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;
