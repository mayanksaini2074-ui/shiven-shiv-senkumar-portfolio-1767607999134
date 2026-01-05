import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Shiven Shiv Senkumar",
    "title": "Electronics and Communication Engineer",
    "email": "shivensen5@gmail.com",
    "phone": "+91-9284708188",
    "linkedin": "",
    "github": "",
    "location": "Vellore, India",
    "summary": "Electronics and Communication Engineering student with hands-on experience in designing and analyzing advanced antenna systems for 5G applications. Proficient in data visualization and analysis using tools like Tableau and Power BI. Proven ability to convey complex information concisely and effectively to diverse audiences."
  },
  "experience": [
    {
      "title": "Outreach Team Member",
      "company": "Entrepreneurship Cell (VIT)",
      "dates": "Jun–Jul 2024",
      "description": "Spearheaded outreach initiatives to local colleges and corporate sponsors.",
      "highlights": [
        "Promoted the annual fest and secured funding.",
        "Collaborated with 10+ colleges to diversify participation, increasing external registrations by 30%."
      ]
    }
  ],
  "education": [
    {
      "degree": "B. Tech in Electronics and Communication Engineering",
      "institution": "Vellore Institute of Technology",
      "years": "Sep 2022-Jul 2026",
      "gpa": "8.18"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "IPL Data Visualization and Analysis using Tableau",
      "description": "Built an interactive Tableau dashboard to evaluate IPL match data, assessing team performance, player metrics, and seasonal trends.",
      "technologies": [
        "Tableau",
        "Data Visualization",
        "Data Analysis"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Sales Performance & Housing Market Review using Power BI",
      "description": "Designed an interactive Power BI dashboard to analyze sales trends and housing market dynamics across five regions.",
      "technologies": [
        "Power BI",
        "Data Visualization",
        "Data Analysis"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
