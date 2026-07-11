"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#projects-menu")) {
        setShowProjectsDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Amanda Morrison
        </h1>
        <div className="space-x-6 flex items-center">
          <Link href="/" className="text-gray-800 hover:text-blue-500">
            Home
          </Link>

          <Link href="/about" className="text-gray-800 hover:text-blue-500">
            About
          </Link>

          {/* Projects Dropdown */}
          <div className="relative" id="projects-menu">
            <button
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
              onClick={() => setShowProjectsDropdown((prev) => !prev)}
            >
              Projects •
            </button>

            {showProjectsDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-80 z-50 max-h-[80vh] overflow-y-auto">
                <Link
                  href="/projects"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100 font-semibold border-b border-gray-200"
                >
                  View All Projects
                </Link>

                {/* Automation & Implementation Projects */}
                <div className="px-4 pt-4 pb-2 text-base font-semibold text-gray-700">
                  Automation &amp; Implementation
                </div>
                <Link
                  href="/projects/automation/kpi-command-center"
                  className="block list-item list-disc ml-8 pl-2 py-2 text-gray-800 hover:bg-blue-100"
                >
                  KPI Command Center
                </Link>
                <Link
                  href="/projects/automation/workflow-automation"
                  className="block list-item list-disc ml-8 pl-2 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Workflow Automation &amp; Task Tracker
                </Link>
                <Link
                  href="/projects/automation/sales-funnel-dashboard"
                  className="block list-item list-disc ml-8 pl-2 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Sales &amp; Lead Funnel Dashboard
                </Link>
                <Link
                  href="/projects/automation/spreadsheet-rescue"
                  className="block list-item list-disc ml-8 pl-2 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Spreadsheet Rescue &amp; Optimization
                </Link>

                {/* Applied AI Projects */}
                <div className="px-4 pt-4 pb-2 text-base font-semibold text-gray-700 border-t border-gray-200">
                  Applied AI Projects
                </div>
                <Link
                  href="/projects/project8"
                  className="block list-item list-disc ml-8 pl-2 py-2 text-gray-800 hover:bg-blue-100"
                >
                  PyIndex — AI-Powered Enterprise Search
                </Link>
                <Link
                  href="/projects/project9"
                  className="block list-item list-disc ml-8 pl-2 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Pathlight Onboarding Assistant
                </Link>
                <Link
                  href="/projects/project1"
                  className="block list-item list-disc ml-8 pl-2 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Clinical Text Extractor
                </Link>

                {/* Data & Machine Learning */}
                <div className="px-4 pt-4 pb-2 text-base font-semibold text-gray-700 border-t border-gray-200">
                  Data &amp; Machine Learning
                </div>
                <Link
                  href="/projects/project3"
                  className="block list-item list-disc ml-8 pl-2 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Term Deposit Subscription Predictor
                </Link>
                <Link
                  href="/projects/project6"
                  className="block list-item list-disc ml-8 pl-2 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Customer Churn Explainability
                </Link>
                <Link
                  href="/projects/project2"
                  className="block list-item list-disc ml-8 pl-2 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Amazon Review Dashboard: SQL + Python Pipeline
                </Link>
                <Link
                  href="/projects/project4"
                  className="block list-item list-disc ml-8 pl-2 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Live Data Stream Dashboard
                </Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link href="/skills" className="text-gray-800 hover:text-blue-500">
            Skills
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-500">
            Contact
          </Link>
          <Link href="/resume" className="text-gray-800 hover:text-blue-500">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;