import { Injectable, signal } from '@angular/core';
import { Skill } from '../models/skill.model';
import { NavLink } from '../models/nav-link.model';
import { Experience } from '../models/experience.model';
import { Education } from '../models/education.model';
import { Project } from '../models/project.model';
import { SocialLink } from '../models/social-link.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly profileImage = signal<string>(
    'https://lh3.googleusercontent.com/d/1TWGgtnM16hxXQ5HLvkoGfiWBZtAqR07R',
  );

  readonly cvUrl = signal<string>(
    'https://drive.google.com/uc?export=download&id=1FUytTInXiMEHus7xRFiOTxWNT9bagn1T',
  );

  readonly navLinks = signal<NavLink[]>([
    { id: 'about', label: 'Sobre mí', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experiencia', href: '#experience' },
    { id: 'education', label: 'Formación', href: '#education' },
    { id: 'projects', label: 'Proyectos', href: '#projects' },
    { id: 'contact', label: 'Contacto', href: '#contact' },
  ]);

  readonly skills = signal<Skill[]>([
    { id: 'angular', name: 'Angular', category: 'frontend' },
    { id: 'typescript', name: 'TypeScript', category: 'frontend' },
    { id: 'rxjs', name: 'RxJS', category: 'frontend' },
    { id: 'scss', name: 'SCSS', category: 'frontend' },
    { id: 'nodejs', name: 'Node.js', category: 'backend' },
    { id: 'nestjs', name: 'NestJS', category: 'backend' },
    { id: 'postgresql', name: 'PostgreSQL', category: 'backend' },
    { id: 'git', name: 'Git', category: 'tools' },
    { id: 'docker', name: 'Docker', category: 'tools' },
    { id: 'figma', name: 'Figma', category: 'tools' },
  ]);

  readonly experience = signal<Experience[]>([
    {
      id: 'exp-1',
      role: 'Desarrollador Frontend',
      company: 'Empresa Actual',
      startDate: 'Ene 2023',
      description:
        'Desarrollo y mantenimiento de aplicaciones Angular a gran escala, definiendo arquitectura de componentes y estándares de código.',
      technologies: ['Angular', 'TypeScript', 'RxJS'],
    },
    {
      id: 'exp-2',
      role: 'Desarrollador Frontend Junior',
      company: 'Empresa Anterior',
      startDate: 'Jun 2021',
      endDate: 'Dic 2022',
      description:
        'Implementación de interfaces a partir de diseños en Figma, integración con APIs REST y mejoras de rendimiento.',
      technologies: ['Angular', 'SCSS', 'Git'],
    },
  ]);

  readonly education = signal<Education[]>([
    {
      id: 'edu-1',
      degree: 'Grado en Ingeniería Informática',
      institution: 'Universidad',
      startDate: '2017',
      endDate: '2021',
    },
    {
      id: 'edu-2',
      degree: 'Bootcamp de Desarrollo Web Full Stack',
      institution: 'Escuela de Formación',
      startDate: '2021',
      endDate: '2021',
    },
  ]);

  readonly projects = signal<Project[]>([
    {
      id: 'proj-1',
      title: 'Proyecto destacado',
      description:
        'Aplicación web construida con Angular y arquitectura standalone, con foco en rendimiento y accesibilidad.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com/usuario/proyecto',
      featured: true,
    },
    {
      id: 'proj-2',
      title: 'Segundo proyecto',
      description: 'Herramienta interna para gestión de tareas.',
      technologies: ['Angular', 'RxJS'],
      repoUrl: 'https://github.com/usuario/proyecto-2',
    },
    {
      id: 'proj-3',
      title: 'Tercer proyecto',
      description: 'Landing page con formulario de contacto.',
      technologies: ['HTML', 'SCSS'],
      demoUrl: 'https://example.com',
    },
  ]);

  readonly socialLinks = signal<SocialLink[]>([
    { id: 'email', platform: 'email', label: 'Email', url: 'mailto:adrialvarez638@gmail.com' },
    { id: 'github', platform: 'github', label: 'GitHub', url: 'https://github.com/adri833' },
    { id: 'linkedin', platform: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/adri833' },
  ]);
}
