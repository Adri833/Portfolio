import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  private readonly portfolioDataService = inject(PortfolioDataService);

  readonly profileImage = this.portfolioDataService.profileImage;
  readonly cvUrl = this.portfolioDataService.cvUrl;
  readonly emailUrl = computed(() => {
    const link = this.portfolioDataService.socialLinks().find((l) => l.id === 'email');
    const rawEmail = link?.url.replace('mailto:', '') ?? 'adrialvarez638@gmail.com';

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${rawEmail}`;
  });

  // Lines to loop
  private readonly phrases = [
    'desarrollador Full Stack',
    'aprendiz constante',
    'amante del buen código',
    'detallista en UI/UX',
  ];

  readonly currentText = signal<string>('');

  private phraseIndex = 0;
  private isDeleting = false;
  private timeoutId: any;

  ngOnInit(): void {
    this.typewriterEffect();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private typewriterEffect(): void {
    const currentPhrase = this.phrases[this.phraseIndex];
    const fullLength = currentPhrase.length;
    const textLength = this.currentText().length;

    if (!this.isDeleting) {
      // Writing
      this.currentText.set(currentPhrase.substring(0, textLength + 1));

      if (this.currentText().length === fullLength) {
        // Pause before deleting
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.typewriterEffect(), 2000);
        return;
      }
    } else {
      // Deleting
      this.currentText.set(currentPhrase.substring(0, textLength - 1));

      if (this.currentText().length === 0) {
        // Go to the next line and start typing again
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
        this.timeoutId = setTimeout(() => this.typewriterEffect(), 500);
        return;
      }
    }

    const speed = this.isDeleting ? 30 : 60;
    this.timeoutId = setTimeout(() => this.typewriterEffect(), speed);
  }
}
