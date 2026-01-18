// Define types
export interface BlogPost {
  title: string;
  summary: string;
  content: string;
  image: string;
  categories: string[];
  description?: { title: string; points: string[] }[];
  date?: string;
  conclusion?: string;
}