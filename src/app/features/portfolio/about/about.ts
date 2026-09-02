import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitle } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {}