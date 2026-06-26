"use client";
import React, { useEffect, useState } from "react";

export default function Skills() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  const skillSections = [
    {
      title: "Implementation & Customer Success",
      skills: [
        "End-to-End SaaS Implementation",
        "Customer Success Management",
        "Onboarding & Adoption",
        "Risk Identification & Mitigation",
        "QBR Facilitation",
        "Playbook Development",
        "Process Automation",
        "Agile / Scrum",
      ],
    },
    {
      title: "AI & Productivity",
      skills: [
        "Claude",
        "ChatGPT",
        "Microsoft Copilot",
        "Glean",
        "AI-Native Workflow Design",
        "Prompt Engineering",
        "Automation Design",
        "Google Workspace",
      ],
    },
    {
      title: "Domain Expertise",
      skills: [
        "K-12 & Public Sector",
        "EdTech",
        "Adult Learning & Instructional Design",
        "Assessment & Data-Driven Instruction",
        "District & Government Stakeholder Navigation",
        "Change Management",
      ],
    },
    {
      title: "Analytics & Visualization",
      skills: [
        "Advanced Google Sheets",
        "Excel",
        "Power BI",
        "Tableau",
        "Looker",
        "Dashboard design",
        "Data storytelling",
      ],
    },
    {
      title: "Design & Analytics Tools",
      skills: [
        "Figma",
        "Adobe XD",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe Analytics",
        "WCAG Accessibility",
        "Responsive layouts",
        "User-centered design",
      ],
    },
    {
      title: "Automation & Optimization",
      skills: [
        "Workflow automation",
        "Process improvement",
        "Zapier",
        "Google Apps Script",
      ],
    },
    {
      title: "Productivity & Collaboration Tools",
      skills: ["Salesforce", "Jira", "Asana", "Smartsheet", "Trello", "Notion", "Miro"],
    },
    {
      title: "Content & Support",
      skills: [
        "Technical writing",
        "Customer support documentation",
        "Ticket triage",
        "Team communication",
      ],
    },
    {
      title: "Data & Programming",
      skills: [
        "Python",
        "R",
        "Pandas",
        "NumPy",
        "SQL",
        "Google Sheets",
        "Excel",
        "Jupyter Notebook",
      ],
    },
    {
      title: "Web & UI/UX Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React Native",
        "TailwindCSS",
      ],
    },
    {
      title: "Data Visualization & Frontend Libraries",
      skills: ["Chart.js", "D3.js", "Streamlit"],
    },
    {
      title: "Machine Learning & Explainability",
      skills: ["XGBoost", "LightGBM", "SHAP"],
    },
    {
      title: "APIs & Back-End Development",
      skills: ["Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-zinc-900 text-white px-6 pb-20"
      style={{ paddingTop: `${navHeight ? navHeight + 40 : 100}px` }}
    >
      <div className="text-center mb-16">
        {/* Main "Skills" */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Skills
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          A blend of implementation and customer success expertise, AI-native
          workflows, and the technical and design skills I&apos;ve built alongside it.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {skillSections.map((section, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full flex flex-col w-full"
          >
            <h3 className="text-xl font-bold text-gray-100 mb-4 border-b border-zinc-700 pb-2">
              {section.title}
            </h3>
            <ul className="list-disc list-inside text-sm space-y-2 text-gray-300 flex-grow">
              {section.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2 text-zinc-400">•</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
