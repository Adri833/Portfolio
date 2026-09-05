import { Injectable, signal } from '@angular/core';
import { Skill } from '../models/skill.model';
import { NavLink } from '../models/nav-link.model';
import { Experience } from '../models/experience.model';
import { Education } from '../models/education.model';
import { Project } from '../models/project.model';
import { SocialLink } from '../models/social-link.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly profileImage = signal<string>('/assets/images/escribiendo_comprimida.jpg');

  readonly cvUrl = signal<string>(
    'https://drive.google.com/uc?export=download&id=1FUytTInXiMEHus7xRFiOTxWNT9bagn1T',
  );

  readonly navLinks = signal<NavLink[]>([
    { id: 'about', label: 'Sobre mí', href: '#about' },
    { id: 'experience', label: 'Experiencia', href: '#experience' },
    { id: 'education', label: 'Formación', href: '#education' },
    { id: 'projects', label: 'Proyectos', href: '#projects' },
    { id: 'contact', label: 'Contacto', href: '#contact' },
  ]);

  readonly skills = signal<Skill[]>([
    // Languages & Frameworks
    { id: 'kotlin', name: 'Kotlin', category: 'languages & frameworks', icon: 'kotlin' },
    {
      id: 'jetpack-compose',
      name: 'Jetpack Compose',
      category: 'languages & frameworks',
      icon: 'jetpack-compose',
    },
    { id: 'angular', name: 'Angular', category: 'languages & frameworks', icon: 'angular' },
    { id: 'java', name: 'Java', category: 'languages & frameworks', icon: 'java' },
    { id: 'python', name: 'Python', category: 'languages & frameworks', icon: 'python' },
    { id: 'html', name: 'HTML', category: 'languages & frameworks', icon: 'html5' },
    { id: 'css', name: 'CSS', category: 'languages & frameworks', icon: 'css3' },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'languages & frameworks',
      icon: 'javascript',
    },
    { id: 'flutter', name: 'Flutter', category: 'languages & frameworks', icon: 'flutter' },
    { id: 'php', name: 'PHP', category: 'languages & frameworks', icon: 'php' },
    { id: 'mysql', name: 'MySQL', category: 'languages & frameworks', icon: 'mysql' },

    // Tools & Platforms
    { id: 'vscode', name: 'VS Code', category: 'tools & platforms', icon: 'vscode' },
    {
      id: 'android-studio',
      name: 'Android Studio',
      category: 'tools & platforms',
      icon: 'android-studio',
    },
    {
      id: 'intellij-idea',
      name: 'IntelliJ IDEA',
      category: 'tools & platforms',
      icon: 'intellij-idea',
    },
    { id: 'pycharm', name: 'PyCharm', category: 'tools & platforms', icon: 'pycharm' },
    { id: 'eclipse', name: 'Eclipse', category: 'tools & platforms', icon: 'eclipse' },
    { id: 'git', name: 'Git', category: 'tools & platforms', icon: 'git' },
    { id: 'github', name: 'GitHub', category: 'tools & platforms', icon: 'github' },
    { id: 'docker', name: 'Docker', category: 'tools & platforms', icon: 'docker' },
    { id: 'figma', name: 'Figma', category: 'tools & platforms', icon: 'figma' },
  ]);

  readonly experience = signal<Experience[]>([
    {
      id: 'exp-1',
      role: 'Programador full stack',
      company: 'London Escuela de Idiomas',
      startDate: 'oct. 2025',
      endDate: 'jun. 2026',
      achievements: [
        'CRM Personalizado: diseño, desarrollo e implementación de un CRM a medida para automatizar procesos internos, optimizando la gestión de clientes y la eficiencia operativa.',
        'Mantenimiento Web: mantenimiento, optimización y actualización continua de la página web corporativa utilizando Angular.',
      ],
      technologies: ['Angular', 'Desarrollo web', 'TypeScript', 'SCSS'],
    },
    {
      id: 'exp-2',
      role: 'Desarrollador de software',
      company: 'Grupo ACERCA',
      startDate: 'mar. 2025',
      endDate: 'jun. 2025',
      achievements: [
        'Evolución del CRM: refactorización de arquitectura y desarrollo de nuevas funcionalidades para el CRM empresarial, reduciendo tiempos de respuesta y optimizando el flujo de trabajo.',
        'Rendimiento y Backend: rediseño de la lógica para acelerar el procesamiento de datos, mejorar la eficiencia del sistema y garantizar la calidad del código.',
        'Optimización de UX: mejora continua en la respuesta del sistema y la usabilidad de los procesos, ofreciendo una experiencia más fluida e intuitiva para el usuario.',
      ],
      technologies: [
        'Desarrollo web back end',
        'Refactorización',
        'Angular',
        'TypeScript',
        'SCSS',
        'Git',
      ],
    },
  ]);

  readonly education = signal<Education[]>([
    {
      id: 'edu-1',
      degree: 'Técnico superior en Desarrollo de Aplicaciones Web (DAW)',
      institution: 'IES Martínez Montañés',
      startDate: '2025',
      endDate: '2027',
    },
    {
      id: 'edu-2',
      degree: 'Técnico superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
      institution: 'MEDAC Sevilla',
      startDate: '2023',
      endDate: '2025',
    },
  ]);

  readonly projects = signal<Project[]>([
    {
      id: 'proj-1',
      title: 'Savepoint',
      description:
        'SavePoint es un tablero personal para videojuegos. Registra tus partidas, controla horas jugadas, platinos y completados, y visualiza tu progreso anual de manera sencilla e intuitiva.',
      technologies: ['Angular', 'TypeScript', 'Supabase'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com/usuario/proyecto',
      featured: true,
    },
    {
      id: 'proj-2',
      title: 'Orpheus',
      description:
        'Aplicación móvil para reproducir música de manera local manteniendo la experiencia totalmente offline con una interfaz moderna, ideal para cuando no tienes acceso a internet.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Hilt'],
      repoUrl: 'https://github.com/usuario/proyecto-2',
    },
    {
      id: 'proj-3',
      title: 'FullBus',
      description:
        'Mi primer proyecto movil, una aplicación para consultar horarios y ocupación de autobuses locales en tiempo real y planificar rutas de manera sencilla.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Hilt'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com/usuario/proyecto-2',
    },
  ]);

  readonly socialLinks = signal<SocialLink[]>([
    { id: 'email', platform: 'email', label: 'Email', url: 'mailto:adrialvarez638@gmail.com' },
    { id: 'github', platform: 'github', label: 'GitHub', url: 'https://github.com/adri833' },
    {
      id: 'linkedin',
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/adri833',
    },
  ]);
}
