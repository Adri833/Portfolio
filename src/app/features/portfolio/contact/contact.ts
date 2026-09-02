import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionTitle],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly data = inject(PortfolioDataService);
  readonly socialLinks = this.data.socialLinks;
  readonly primaryEmail = this.socialLinks().find((link) => link.platform === 'email')?.url ?? '';
}
