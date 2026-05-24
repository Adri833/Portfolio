import { Injectable, NgZone } from '@angular/core';

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  opacitySpeed: number;
  color: string;
}

@Injectable({ providedIn: 'root' })
export class ParticleBackgroundService {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId!: number;
  private PARTICLE_COUNT = 80;
  private COLORS = ['#7DF9FF', '#B388FF', '#E040FB', '#ffffff'];

  constructor(private ngZone: NgZone) {}

  init(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    this.spawnParticles();

    this.ngZone.runOutsideAngular(() => this.loop());
  }

  resize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private spawnParticles(): void {
    this.particles = Array.from({ length: this.PARTICLE_COUNT }, () =>
      this.createParticle()
    );
  }

  private createParticle(): Particle {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random(),
      opacitySpeed: (Math.random() * 0.005) + 0.001,
      color: this.COLORS[Math.floor(Math.random() * this.COLORS.length)],
    };
  }

  private loop(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawConnections();

    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.opacity += p.opacitySpeed;

      if (p.opacity > 1 || p.opacity < 0.1) p.opacitySpeed *= -1;

      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      this.ctx.save();
      this.ctx.globalAlpha = p.opacity;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = p.color;
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    this.animationId = requestAnimationFrame(() => this.loop());
  }

  private drawConnections(): void {
    const MAX_DIST = 120;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_DIST) {
          this.ctx.save();
          this.ctx.globalAlpha = (1 - dist / MAX_DIST) * 0.15;
          this.ctx.strokeStyle = '#7DF9FF';
          this.ctx.lineWidth = 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
          this.ctx.restore();
        }
      }
    }
  }

  destroy(): void {
    cancelAnimationFrame(this.animationId);
  }
}