import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticleBackground } from "./shared/components/particle-background/particle-background";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParticleBackground],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
