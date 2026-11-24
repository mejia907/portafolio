import type { ImageMetadata } from 'astro';
import sintraipsu from '../assets/images/sintraipsu.webp';
import cerrajero from '../assets/images/cerrajero.webp';
import enrutarcol from '../assets/images/enrutarcol.webp';
import tasksoft from '../assets/images/tasksoft.webp';
import apiGames from '../assets/images/api_games.webp';
import pokeApi from '../assets/images/poke_api.webp';
import cinemapedia from '../assets/images/cinemapedia.webp';
import linktreeClone from '../assets/images/linktree_clone.webp';
import ventasGazInicio from '../assets/images/ventas_gaz_inicio.webp';
import ventasGazCliente from '../assets/images/ventas_gaz_cliente.webp';
import ventasGazClientes from '../assets/images/ventas_gaz_clientes.webp';

/** Tecnologías disponibles para las etiquetas. Para usar una nueva, añádela aquí. */
export const technologies = {
  angular: { title: 'Angular', icon: 'lineicons:angular' },
  astro: { title: 'Astro', icon: 'lineicons:astro' },
  claudeCode: { title: 'Claude Code', icon: 'simple-icons:claudecode' },
  clerk: { title: 'Clerk', icon: 'simple-icons:clerk' },
  dart: { title: 'Dart', icon: 'devicon-plain:dart' },
  flutter: { title: 'Flutter', icon: 'devicon-plain:flutter' },
  laravel: { title: 'Laravel', icon: 'lineicons:laravel' },
  livewire: { title: 'Livewire', icon: 'devicon-plain:livewire' },
  neon: { title: 'Neon', icon: 'cbi:neon' },
  nestjs: { title: 'NestJS', icon: 'devicon-plain:nestjs' },
  nextjs: { title: 'Next.js', icon: 'lineicons:nextjs' },
  nodejs: { title: 'Node.js', icon: 'lineicons:nodejs' },
  prisma: { title: 'Prisma', icon: 'lineicons:prisma' },
  qwik: { title: 'Qwik', icon: 'devicon-plain:qwik' },
  react: { title: 'React', icon: 'lineicons:react' },
  reactNative: { title: 'React Native', icon: 'devicon:reactnative' },
  supabase: { title: 'Supabase', icon: 'devicon:supabase' },
  tailwind: { title: 'Tailwind', icon: 'lineicons:tailwindcss' },
};

interface BaseProject {
  title: string;
  description: string;
  technologies: (keyof typeof technologies)[];
  url?: string;
  github?: string;
  /** El sitio ya no está publicado: se indica en lugar del enlace */
  offline?: boolean;
}

/** Panel a todo el ancho con las pantallas de una app móvil */
export interface AppProject extends BaseProject {
  placement: 'app';
  /** Ancla de la sección, por ejemplo #ventas-gaz */
  id: string;
  /** Tres capturas verticales: la primera va al frente */
  screens: { image: ImageMetadata; alt: string }[];
  roles?: { icon: string; title: string; text: string }[];
  note?: string;
}

/** "card": tarjeta con imagen grande. "list": fila en "Otros proyectos" */
export interface ImageProject extends BaseProject {
  placement: 'card' | 'list';
  image: ImageMetadata;
}

/**
 * Para agregar un proyecto, añade un objeto a esta lista: se muestra en el orden en que aparece
 * y la cifra de "Sobre mí" se actualiza sola. Para destacar otro, cambia su placement.
 */
export const projects: (AppProject | ImageProject)[] = [
  {
    placement: 'app',
    id: 'ventas-gaz',
    title: 'Ventas Gaz',
    description:
      'App Android para vendedores de cilindros de gas. Registra clientes y ventas, estima cuándo se le acaba el gas a cada cliente y avisa a quién contactar antes de que pase. Funciona sin conexión y sincroniza los datos al volver la red.',
    technologies: ['reactNative', 'supabase', 'claudeCode'],
    screens: [
      {
        image: ventasGazInicio,
        alt: 'Inicio de Ventas Gaz: ventas del día y del mes, y clientes por contactar',
      },
      {
        image: ventasGazCliente,
        alt: 'Detalle de un cliente: días de gas restantes, acciones rápidas e historial de ventas',
      },
      {
        image: ventasGazClientes,
        alt: 'Lista de clientes en tema oscuro, con búsqueda, filtros y estado de cada uno',
      },
    ],
    roles: [
      {
        icon: 'ph:user',
        title: 'Lo que hice yo',
        text: 'Creé la app y su primera versión funcional: inicio de sesión, clientes, ventas, cálculo de días restantes, modo sin conexión, backend en Supabase y notificaciones push. Después dirigí las mejoras: aprobé cada fase, detecté fallos y corregí propuestas de diseño.',
      },
      {
        icon: 'simple-icons:claude',
        title: 'Lo que hizo Claude Code',
        text: 'Con mi dirección, auditó el diseño, programó el rediseño de la interfaz e hizo pruebas en el emulador.',
      },
    ],
    note: 'Capturas con datos de ejemplo.',
  },
  {
    placement: 'card',
    title: 'Enrutarcol',
    description: 'Aplicación web para gestionar solicitudes de enrutamiento, clientes y usuarios.',
    technologies: ['react', 'tailwind', 'nodejs', 'prisma'],
    image: enrutarcol,
    offline: true,
  },
  {
    placement: 'card',
    title: 'Sintraipsu',
    description:
      'Sitio de un sindicato con administrador propio para sus afiliados, integrantes, noticias y celebraciones.',
    technologies: ['react', 'tailwind', 'nodejs', 'prisma'],
    image: sintraipsu,
    offline: true,
  },
  {
    placement: 'card',
    title: 'Cerrajero Alvarez',
    description:
      'Página de un servicio de cerrajería con acceso directo a WhatsApp, teléfono y redes sociales.',
    technologies: ['astro', 'tailwind'],
    image: cerrajero,
    url: 'https://cerrajeroalvarez.vercel.app/',
    github: 'https://github.com/mejia907/cerrajeroalvarez',
  },
  {
    placement: 'list',
    title: 'Linktree-Clone',
    description:
      'Clon de Linktree con inicio de sesión en Clerk. Cada usuario crea, edita, comparte y elimina sus enlaces, y personaliza su perfil.',
    technologies: ['nextjs', 'neon', 'clerk', 'tailwind'],
    image: linktreeClone,
    url: 'https://linktree-clone-eosin.vercel.app/',
    github: 'https://github.com/mejia907/linktree-clone/',
  },
  {
    placement: 'list',
    title: 'Task-Soft',
    description:
      'Gestor de tareas en Laravel Livewire para crearlas, editarlas, compartirlas y eliminarlas.',
    technologies: ['laravel', 'livewire'],
    image: tasksoft,
    github: 'https://github.com/mejia907/tasksoft/',
  },
  {
    placement: 'list',
    title: 'API Games',
    description:
      'Catálogo de videojuegos en Angular 14 que consulta la API de FreeToGame a través de NestJS.',
    technologies: ['angular', 'nestjs', 'tailwind'],
    image: apiGames,
    github: 'https://github.com/mejia907/api-games',
  },
  {
    placement: 'list',
    title: 'Poke API',
    description:
      'Aplicación en Qwik que lista Pokémon desde PokéAPI y muestra la ficha de cada uno, con interfaz en Tailwind.',
    technologies: ['qwik', 'tailwind'],
    image: pokeApi,
    github: 'https://github.com/mejia907/pokeapp-qwik',
  },
  {
    placement: 'list',
    title: 'Cinemapedia',
    description:
      'App en Flutter con la cartelera de cine: muestra el detalle de cada película y permite marcar favoritas.',
    technologies: ['flutter', 'dart'],
    image: cinemapedia,
    github: 'https://github.com/mejia907/cinemapedia',
  },
];
