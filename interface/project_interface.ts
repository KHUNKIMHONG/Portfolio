export interface Project {
  title: string;
  description: string;
  role: string;
  challenges: string;
  outcome: string;
  features: string[];
  technologies: string[];
  image: string;
  github: string;
  demo?: string;
  type: string;
  year: string;
  status: "Completed" | "In Progress";
}
