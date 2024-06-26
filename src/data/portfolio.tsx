import {
  FaCss3,
  FaJsSquare,
  FaAws,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiJest, SiTailwindcss, SiTypescript, SiMongodb, SiVite, SiAxios} from 'react-icons/si';
import { TbBrandReactNative, TbBrandTailwind } from 'react-icons/tb';


export default [
  {
    title: 'Munaciella-News Back-End',
    imgUrl: '/assets/NC-News.png',
    stack: [
      <FaCss3 />, <FaJsSquare />, <FaReact />, <BiLogoPostgresql />, <FaNodeJs />, <SiJest />
    ],
    link: 'https://github.com/munaciella/NC-news',
  },
  {
    title: 'Munaciella-News',
    imgUrl: '/assets/Munaciella-News.png',
    stack: [ <FaHtml5 />, <FaReact />, <FaCss3 />, <FaJsSquare />],
    link: 'https://munaciella-news.netlify.app/',
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
      <SiVite />,
      <SiAxios />,
    ],
    link: 'https://github.com/munaciella/gatefold-frontend/',
  },
  {
    title: 'Developer Portfolio',
    imgUrl: '/assets/Portfolio.png',
    stack: [<FaReact />, <SiTailwindcss />, <SiTypescript />],
    link: 'https://github.com/munaciella/personal-portfolio',
  },
  {
    title: 'Currency Converter',
    imgUrl: '/assets/Currency-Converter.png',
    stack: [<FaJsSquare />, <TbBrandReactNative />, <FaCss3 />, <SiVite />],
    link: 'https://github.com/munaciella/currency-converter',
  },
];
