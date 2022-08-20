//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/images/admin.png';
import Project2 from './assets/images/freeMentor.png';
import Project3 from './assets/images/property.png';
import Project4 from './assets/images/restaurant.png';
import Project5 from './assets/images/theStage.png';
import Project6 from './assets/images/admin.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Ayesiza',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/ayesiza-hawah-339700185/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Admin DashBoard',
    category: 'UI/UX design',
    description: "The dashboard allows admin to manage users acessing the sms system platform.",
    code: 'https://github.com/Airdady/fe-sms-main',
    demo: 'https://fe-sms-main.vercel.app/',
    
  },
  {
    id: '2',
    image: Project2,
    name: 'Free-Mentor',
    category: 'web development',
    description:"Free Mentors is a platform where  professionals become role models to young people",
    code: 'https://github.com/Ayesiza/Free-mentors-API',
    demo: 'https://ayesiza.github.io/Free-Mentors/',
  },
  {
    id: '3',
    image: Project3,
    name: 'PropertyProlite',
    category: 'UI/UX design',
    description: "Property Pro Lite is a platform where people can create and/or search properties for sale",
    code: 'https://github.com/Ayesiza/Property-Pro-lite',
    demo: 'https://ayesiza.github.io/Property-Pro-lite/index.html',
  },
  {
    id: '4',
    image: Project4,
    name: 'Food App',
    category: 'apps',
    description: "The Restaurant app was can allow a user to search for different dishes and the ingredients used.",
    code: 'https://github.com/Ayesiza/restaurant-react',
    demo: 'https://github.com/Ayesiza/restaurant-react',
  },
  {
    id: '5',
    image: Project5,
    name: 'MentorShip Hub',
    category: 'web development',
    description:"The Stage is a mentorship hub to spark collaboration and celebrate champions of social change in Uganda.",
    code: 'https://bitbucket.org/unfpasocent/unfpasocialenterprisehub/src/master/',
    demo: 'https://www.thestageug.org',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
    description: "The dashboard allows admin to manage users acessing the sms system platform.",
    code: 'https://github.com/Airdady/fe-sms-admin',
    demo: 'https://api.sms.airdady.com',
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
    name: 'apps',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'I Design and build user interfaces, navigation and aesthetic of websites for businesses and clients',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Creating, building, and maintaining websites and web applications. Also including web programming, and database management.',
  },
  {
    icon: <FiPenTool />,
    name: 'Content Writing',
    description:
      'Writing and editing web content and blog posts',
  },
  {
    icon: <FiTag />,
    name: 'Mentoring In Tech',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      '"Always reliable and fast, even after I leave for the day, The team can always count on you  to get requests done. Thank you Hawah!"',
    authorName: 'Brian Ochan',
    authorPosition: 'Tech Lead, Andela',
  },
  {
    authorImg: TestiImage2,
    authorText:
      '"I would like to give special recognition (or shout out) to Ayesiza for all the planning, guidance, and hard work during My intern at OutBox .She Really gave me a mentorShip touch in my Tech Career"',
    authorName: 'Tusiime Iden',
    authorPosition: 'Intern, OutBox Africa',
  },
  {
    authorImg: TestiImage3,
    authorText:
      '"Ayesiza always comes through quickly resolving solution o our projects, She is a SoftWare Engineer To realy on!"',
    authorName: 'Olivia Swaib',
    authorPosition: 'CEO, AirDady',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at yesiha2001@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Kampala, Uganda',
    description: 'Serving clients worldwide',
  },
];
