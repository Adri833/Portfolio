export type SkillCategory = 'frontend' | 'backend' | 'tools';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
}