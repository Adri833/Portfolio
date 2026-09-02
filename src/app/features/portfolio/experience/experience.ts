import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { Badge } from '../../../shared/components/badge/badge';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionTitle, Badge],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  private readonly data = inject(PortfolioDataService);
  readonly experience = this.data.experience;
}