// data/education_data.ts
import type { Education } from "@/interface/education_interface"

// Export a properly typed constant array
export const EDUCATION_DATA: Education[] = [
  {
    degree: "Bachelor of Information and Communication Engineering",
    logo: "/Portfolio/Education/ITC.png",
    institution: "Institute of Technology of Cambodia (ITC)",
    year: "2019 - 2024",
    description:
      "Specialized in software development, algorithms, and system architecture. Led multiple academic projects including full-stack web applications and participated in collaborative engineering initiatives.",
  },
  {
    degree: "High School Diploma",
    logo: "/Portfolio/Education/HighSchool.png",
    institution: "Hansen Thnout Choum High School",
    year: "2012 - 2019",
    description:
      "Focused on advanced mathematics, science, and technology, establishing a strong foundation for software engineering.",
  },
  {
    degree: "Primary Education",
    logo: "/Portfolio/Education/HighSchool.png",
    institution: "Trang Pang Anderk Primary School",
    year: "2007 - 2012",
    description:
      "Completed core education with emphasis on mathematics, language arts, and fundamental sciences.",
  },
]

// Export achievements separately
export const ACHIEVEMENTS_DATA: string[] = [
  "Achieved Grade C in the 2019 national high school examination, earning admission to ITC's engineering program.",
  "Developed and presented multiple full-stack web applications during final-year assessments.",
  "Recognized for consistent academic excellence in mathematics and science throughout secondary education.",
]

