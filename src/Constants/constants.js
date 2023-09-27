/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  phpIcon,
  cIcon,
  psIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "سلام خیلی خوشحالم شمارو اینجا میبینم :)",

    "اسم من حسنه , من ۲۳ سالمه و توی تهران زندگی میکنم. علاقه شدیدی به برنامه نویسی به خصوص توی حوزه ی وب دارم و از سال ۹۶ دارم تو این حوزه فعالیت میکنم .",

    " از اواخر سال ۹۷ وارد یه شرکت توی حوزه برنامه نویسی شدم و تا ۱۴۰۲ توی اون شرکت فعالیت داشتم ",

    " من عاشق کار های تیمی و چالش برانگیز هستم ",
  ],
};

export const navLinks = [
  {
    id: 'contact',
    title: 'تماس با من',
  },
  {
    id: 'skills',
    title: 'مهارت ها',
  },
  {
    id: 'projects',
    title: 'پروژه ها',
  },
  {
    id: 'about',
    title: 'درباره من',
  },
  {
    id: 'here',
    title: 'خانه',
  },
];

const projects = [
  {
    name: "Arasartara's Gallery",
    description: 'A memory game with an art theme implemented with React. Test your memory skills and enjoy beautiful artwork as you match pairs of cards in this engaging game.',
    image: memoryGame,
    source_code_link: 'https://github.com/bl33h/artMemoryGame',
    demo_link: 'https://arasarmemory.netlify.app/',
  },
  {
    name: 'Pawsitive',
    description: 'Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.',
    image: pawsitivePrototype,
    source_code_link: 'https://github.com/bl33h/pawsitive',
    demo_link: 'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
  },
  {
    name: 'Basic Calculator',
    description: 'A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.',
    image: calculator,
    source_code_link: 'https://github.com/bl33h/calculator',
    demo_link: 'https://bl33hscalculator.netlify.app/',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'من تسلط قوی به HTML برای سازماندهی صفحات وب و تولید محتوای معنی دار دارم که برای همه کاربران قابل دسترسی باشد.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'من در استفاده از CSS برای طراحی صفحات وب و ایجاد طرح‌بندی‌های بصری جذاب که تجربه کلی کاربر را بهبود می‌بخشد، تخصص دارم.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'من تجربه قابل توجهی در استفاده از جاوا اسکریپت برای معرفی تعامل و عملکرد در صفحات وب دارم که در نتیجه رابط های کاربری پویا ایجاد می شود.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'من اشنایی و تسلط نسبی به کتابخانه react دارم و قادر به پیاده سازی انواع سامانه ها و وبسایت ها با react هستم',
  },

  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'من دارای گواهینامه AWS هستم و در کار با نمونه های EC2 و RDS مهارت دارم و از قدرت رایانش ابری برای زیرساخت های مقیاس پذیر و قابل اعتماد استفاده می کنم.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'من در Git، مدیریت تغییرات کد، همکاری با دیگران و حل موثر تضادها مهارت دارم.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'من در استفاده از GitHub برای همکاری یکپارچه پروژه، به اشتراک گذاری کد و ردیابی مشکل مهارت دارم. از طریق GitHub، من به طور موثر repository را ایجاد و مدیریت می کنم و کار خود را به طور موثر به کارفرمایان ارائه می کنم.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'من تسلط قوی بر مفاهم و query های sql دارم ',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      ' ۴ سال سابقه برنامه نویسی پایتون تحت ویندوز , لینوکس و به خصوص وب دارم , تخصص اصلی بنده در پایتون و فریمورک های پایتونی نظیر django و fastapi است .',
  },
  {
    id: 'c',
    title: 'C/C++',
    icon: cIcon,
    description:
      ' من سابقه ۲ سال کار تخصصی روی تحقیق و توسعه ابزارها روی سیستم های نحفته ی لینوکسی با زبان c و کامپایل این برنامه هارا دارم',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
