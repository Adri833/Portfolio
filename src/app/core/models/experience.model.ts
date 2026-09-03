export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string; // format: 'MM YYYY'
  endDate?: string;   // undefined = present
  description: string;
  technologies?: string[];
}