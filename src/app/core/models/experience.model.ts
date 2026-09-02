export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string; // formato: 'MM YYYY'
  endDate?: string;   // undefined = actualidad
  description: string;
  technologies?: string[];
}