import { AiFillMail } from "react-icons/ai";
import {FiMapPin} from "react-icons/fi"

// navigation
export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'Skills',
      href: 'skills',
    },
    {
      name: 'Projects',
      href: 'projects',
    },
  
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // projects
export const projectsData = [
  {
    id: '1',
    image:'',
    name: 'project name 1',
    category: 'UI/UX design',
  },
  {
    id: '2',
    image: '',
    name: 'project name 2',
    category: 'web development',
  },
  {
    id: '3',
    image:'',
    name: 'project name 3',
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: '',
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image:'',
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image:'',
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];
// contact
export const contact = [
  {
    icon: <AiFillMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];