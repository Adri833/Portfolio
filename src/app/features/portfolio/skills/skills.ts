import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { Badge} from '../../../shared/components/badge/badge';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { SkillCategory } from '../../../core/models/skill.model';

interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: { id: string; name: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionTitle, Badge],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  private readonly data = inject(PortfolioDataService);

  private readonly categoryLabels: Record<SkillCategory, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Herramientas',
  };

  readonly skillGroups = computed<SkillGroup[]>(() => {
    const categories: SkillCategory[] = ['frontend', 'backend', 'tools'];
    return categories.map((category) => ({
      category,
      label: this.categoryLabels[category],
      skills: this.data.skills().filter((skill) => skill.category === category),
    }));
  });
}