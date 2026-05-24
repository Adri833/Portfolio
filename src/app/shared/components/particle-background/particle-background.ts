import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { gsap } from 'gsap';
import { ParticleBackgroundService } from '../../../core/services/particle-background.service';

@Component({
  selector: 'app-particle-background',
  imports: [],
  templateUrl: './particle-background.html',
  styleUrl: './particle-background.scss',
})
export class ParticleBackground implements AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('orb1') orb1!: ElementRef;
  @ViewChild('orb2') orb2!: ElementRef;
  @ViewChild('orb3') orb3!: ElementRef;

  private mouseX = 0;
  private mouseY = 0;
  private targetX = 0;
  private targetY = 0;

  constructor(private particleService: ParticleBackgroundService) {}

  ngAfterViewInit(): void {
    this.particleService.init(this.canvasRef.nativeElement);
    this.startParallaxLoop();
    this.animateOrbs();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.particleService.resize();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    this.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  }

  private startParallaxLoop(): void {
    const LERP = 0.05;

    const tick = () => {
      this.mouseX += (this.targetX - this.mouseX) * LERP;
      this.mouseY += (this.targetY - this.mouseY) * LERP;

      gsap.set(this.canvasRef.nativeElement, {
        x: this.mouseX * -20,
        y: this.mouseY * -20,
      });

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  private animateOrbs(): void {
    gsap.to(this.orb1.nativeElement, {
      x: 80,
      y: 60,
      scale: 1.15,
      duration: 8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    gsap.to(this.orb2.nativeElement, {
      x: -70,
      y: -50,
      scale: 1.2,
      duration: 10,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    gsap.to(this.orb3.nativeElement, {
      x: 50,
      y: -40,
      scale: 0.85,
      duration: 7,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 2,
    });
  }

  ngOnDestroy(): void {
    this.particleService.destroy();
  }
}
