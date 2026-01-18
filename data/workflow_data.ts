// data/workflow_data.ts
import type { Step } from "@/interface/workflow_interface"

export const STEPS_DATA: Step[] = [
  {
    title: "Discovery & Planning",
    description:
      "Collaborate with clients to outline project goals, scope, and timelines, ensuring a clear roadmap for success.",
    svg: {
      viewBox: "0 0 24 24",
      path: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    },
  },
  {
    title: "Design & Development",
    description:
      "Create intuitive UI/UX and robust codebases using modern frameworks to build user-centric web solutions.",
    svg: {
      viewBox: "0 0 24 24",
      path: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536l-12 12a2 2 0 01-1.414.586H5a1 1 0 01-1-1v-3.293a2 2 0 01.586-1.414l12-12z",
    },
  },
  {
    title: "Testing & Refinement",
    description:
      "Conduct thorough testing for performance, usability, and responsiveness, refining the product based on feedback.",
    svg: {
      viewBox: "0 0 24 24",
      path: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    },
  },
  {
    title: "Deployment",
    description:
      "Seamlessly launch the finalized product into production, ensuring it meets all expectations and requirements.",
    svg: {
      viewBox: "0 0 24 24",
      path: "M5 20h14M12 3v13m0 0l-4-4m4 4l4-4",
    },
  },
  {
    title: "Support & Evolution",
    description:
      "Provide ongoing maintenance, performance monitoring, and updates to keep your solution optimized and evolving.",
    svg: {
      viewBox: "0 0 24 24",
      path: "M4 4v6h6M20 20v-6h-6M5 19a9 9 0 0014-7h-1m-3-6a9 9 0 00-14 7h1",
    },
  },
]

export const BENEFITS_DATA: string[] = [
  "Fosters clear communication and client alignment from day one.",
  "Ensures high-quality, user-focused solutions through iterative testing.",
  "Delivers scalable, maintainable products with ongoing support for future growth.",
]
