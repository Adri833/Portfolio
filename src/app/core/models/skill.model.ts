export type SkillCategory = 'languages & frameworks' | 'tools & platforms';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string;
}
