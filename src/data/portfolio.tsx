import {
  FaCss3,
  FaJsSquare,
  FaAws,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import {
  SiJest,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiVite,
  SiAxios,
  SiSupabase,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
} from 'react-icons/si';
import { TbBrandReactNative, TbBrandTailwind } from 'react-icons/tb';

export default [
  {
    title: 'News Web Application',
    imgUrl: '/assets/Munaciella-news.jpg',
    stack: [
      <FaJsSquare />,
      <FaHtml5 />,
      <FaCss3 />,
      <FaReact />,
      <BiLogoPostgresql />,
      <FaNodeJs />,
      <SiJest />,
      <SiVite />,
    ],
    link: 'https://github.com/munaciella/NC-news',
  },
  {
    title: 'Events Platform Web Application',
    imgUrl: '/assets/Eventsphere.jpg',
    stack: [
      <FaJsSquare />,
      <TbBrandTailwind />,
      <FaReact />,
      <SiSupabase />,
      <SiNetlify />,
    ],
    link: 'https://event-sphere-web.netlify.app/',
  },
  {
    title: 'Recipes Web Application',
    imgUrl: '/assets/Velovegans.jpg',
    stack: [
      <SiTypescript />,
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiSupabase />,
      <SiVercel />,
    ],
    link: 'https://velovegans.co.uk',
  },
  {
    title: 'Wax',
    imgUrl: '/assets/Wax.png',
    stack: [
      <TbBrandReactNative />,
      <TbBrandTailwind />,
      <SiTypescript />,
      <BiLogoPostgresql />,
      <SiMongodb />,
      <FaAws />,
      <SiAxios />,
    ],
    link: 'https://github.com/munaciella/gatefold-frontend/',
  },
  {
    title: 'Data Analytics API',
    imgUrl: '/assets/pairsniper.png',
    stack: [<SiTypescript />, <SiAxios />, <SiSupabase />, <SiJest />],
    link: 'https://github.com/munaciella/data-analytics-api',
  },
  {
    title: 'Currency Converter',
    imgUrl: '/assets/Currency-converter.jpg',
    stack: [<FaJsSquare />, <TbBrandReactNative />, <FaCss3 />],
    link: 'https://github.com/munaciella/currency-converter',
  },
];
