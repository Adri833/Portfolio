export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string; // format: 'MM YYYY'
  endDate?: string;   // undefined = present
  summary?: string; // optional summary of the experience
  achievements: string[]; // each achievement is a list item
  technologies?: string[];
}