import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { SkillCategory } from '../../../core/models/skill.model';

interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: { id: string; name: string; icon: string }[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  private readonly data = inject(PortfolioDataService);

  private readonly categoryLabels: Record<SkillCategory, string> = {
    'languages & frameworks': 'Lenguajes y Frameworks',
    'tools & platforms': 'Herramientas y Plataformas',
  };

  readonly skillGroups = computed<SkillGroup[]>(() => {
    const categories: SkillCategory[] = ['languages & frameworks', 'tools & platforms'];
    return categories.map((category) => ({
      category,
      label: this.categoryLabels[category],
      skills: this.data
        .skills()
        .filter((skill) => skill.category === category)
        .map((skill) => ({ id: skill.id, name: skill.name, icon: skill.icon })),
    }));
  });
}
