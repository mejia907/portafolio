interface Certificate {
  title: string;
  date: string;
  time?: string;
  /** Icono de la tecnología */
  icon: string;
  platform: keyof typeof platforms;
}

const platforms = {
  platzi: { name: 'Platzi', icon: 'simple-icons:platzi' },
  mongodb: { name: 'MongoDB', icon: 'devicon:mongodb' },
  certiprof: { name: 'CertiProf', icon: 'ph:certificate' },
};

/** Para agregar un certificado, añádelo a esta lista: la cifra de "Sobre mí" se actualiza sola. */
const list: Certificate[] = [
  {
    title: 'Introducción a Laravel 9',
    date: '03 de Junio de 2024',
    time: '15 Hrs',
    icon: 'devicon:laravel',
    platform: 'platzi',
  },
  {
    title: 'Introducción a Frameworks con PHP',
    date: '15 de Abril de 2024',
    time: '3 Hrs',
    icon: 'devicon:php',
    platform: 'platzi',
  },
  {
    title: 'Introducción y fundamentos de Vue.js',
    date: '13 de Agosto de 2024',
    time: '22 Hrs',
    icon: 'devicon:vuejs',
    platform: 'platzi',
  },
  {
    title: 'Introducción a Java',
    date: '27 de Agosto de 2024',
    time: '15 Hrs',
    icon: 'devicon:java',
    platform: 'platzi',
  },
  {
    title: 'Java SE Orientado a Objetos',
    date: '23 de Septiembre de 2024',
    time: '16 Hrs',
    icon: 'devicon:java',
    platform: 'platzi',
  },
  {
    title: 'Getting Started with MongoDB',
    date: '02 de Agosto de 2024',
    icon: 'devicon:mongodb',
    platform: 'mongodb',
  },
  {
    title: 'Docker: Fundamentos',
    date: '06 de Mayo de 2024',
    time: '14 Hrs',
    icon: 'devicon:docker',
    platform: 'platzi',
  },
  {
    title: 'SCRUM Foundation Professional Certificate',
    date: '15 de Mayo de 2024',
    icon: 'ph:certificate',
    platform: 'certiprof',
  },
];

export const certificates = list.map(({ platform, ...certificate }) => ({
  ...certificate,
  iconPlatform: platforms[platform].icon,
  namePlatform: platforms[platform].name,
}));
