import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    // Teacher documentation sidebar
    teacherSidebar: [
        {
            type: "category",
            label: "Getting Started",
            items: [
                "teacher/intro",
                "teacher/quick-start",
            ],
        },
        {
            type: "category", 
            label: "Core Features",
            items: [
                "teacher/class-management",
                "teacher/assignment-workflow", 
                "teacher/pdf-processing",
                "teacher/marking",
            ],
        },
        {
            type: "category",
            label: "AI & Advanced Tools", 
            items: [
                "teacher/ai-copilot",
                "teacher/interface-guide",
                "teacher/advanced-features",
            ],
        },
    ],

    // Student documentation sidebar
    studentSidebar: [
        {
            type: "category",
            label: "Getting Started",
            items: [
                "student/intro",
                "student/getting-started",
            ],
        },
        {
            type: "category",
            label: "Using Ren",
            items: [
                "student/student-interface",
                "student/assignments-submissions",
                "student/feedback-grades",
            ],
        },
        {
            type: "category",
            label: "AI & Support",
            items: [
                "student/ai-assistant",
                "student/tips-troubleshooting",
            ],
        },
    ],
};

export default sidebars;
