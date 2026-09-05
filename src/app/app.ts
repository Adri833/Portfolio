import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { Hero } from './features/portfolio/hero/hero';
import { About } from './features/portfolio/about/about';
import { Experience } from './features/portfolio/experience/experience';
import { Education } from './features/portfolio/education/education';
import { Projects } from './features/portfolio/projects/projects';
import { Contact } from './features/portfolio/contact/contact';
import { Footer } from "./layout/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    About,
    Experience,
    Education,
    Projects,
    Contact,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}