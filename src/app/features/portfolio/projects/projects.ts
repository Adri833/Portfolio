import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { Badge } from '../../../shared/components/badge/badge';
import { Card } from '../../../shared/components/card/card';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionTitle, Badge, Card],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly data = inject(PortfolioDataService);
  readonly projects = this.data.projects;
}