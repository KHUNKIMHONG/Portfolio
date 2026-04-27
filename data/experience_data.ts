// data/experience_data.ts
import type { Job } from '~/interface/experience_interface'

export const EXPERIENCE_DATA: Job[] = [
  {
    position: 'Developer Full Time',
    logo: '/Portfolio/Experience/bongloy_logo.png',
    company: 'Bongloy Payments PLC',
    duration: 'Jan 2025 – Present',
    shortDescription:
      'Developed a document and payment testing simulator using Elixir Phoenix, Next.js, Tailwind CSS, PostgreSQL, and Docker on Ubuntu, with CI/CD automation via GitLab Docker.',
    description: [
      'Built a comprehensive payment testing simulator to validate transaction flows and simulate real-world payment scenarios.',
      'Developed document generation and management features to support QA and integration testing processes.',
      'Used Elixir Phoenix for backend services and Next.js with Tailwind CSS for building a responsive frontend.',
      'Implemented PostgreSQL for efficient and structured data management.',
      'Containerized the application using Docker and deployed on Ubuntu servers for consistent and scalable environments.',
      'Configured GitLab CI/CD pipelines with Docker runners on Ubuntu to automate testing, builds, and deployments.',
      'Collaborated closely with QA and product teams to deliver reliable simulation tools for internal use.',
    ],
  },
  {
    position: 'Web Developer',
    logo: '/Portfolio/Experience/Freelancer.png',
    company: 'Freelancer',
    duration: '2023 – Present',
    shortDescription:
      'Working on various freelance web development projects, building scalable and maintainable applications with modern technologies while collaborating directly with clients.',
    description: [
      'Developed custom websites and web applications tailored to clients\' needs using modern technologies like Nuxt.js, Vue.js, Laravel, and Tailwind CSS.',
      'Collaborated directly with clients to gather requirements, propose solutions, and deliver high-quality results on time.',
      'Integrated third-party APIs and created backend services to support dynamic content and user interactions.',
      'Ensured responsive design, SEO best practices, and performance optimization across different devices and browsers.',
      'Managed deployment, hosting, and ongoing maintenance of freelance projects.',
    ],
  },
  {
    position: 'Full Stack Developer Intern',
    logo: '/Portfolio/Experience/ITC.png',
    company: 'ITC',
    duration: 'Jun 2024 – Dec 2024',
    shortDescription:
      'Built a fully functional e-commerce platform using Laravel, Tailwind CSS, MySQL, and Docker, with CI/CD integration via GitLab pipelines.',
    description: [
      'Designed and developed a responsive e-commerce website using Laravel for the backend and Tailwind CSS with Ajax for the frontend.',
      'Implemented MySQL for database management and integrated Docker to streamline deployment across environments.',
      'Handled the entire development lifecycle, including system design, coding, testing, deployment, and maintenance.',
      'Set up GitLab CI/CD pipelines to automate testing and deployment processes.',
      'Enhanced project management, problem-solving, and full-stack development skills through hands-on experience.',
    ],
  },
  {
    position: 'Frontend Developer Intern',
    logo: '/Portfolio/Experience/FinTech.png',
    company: 'FinTech Center',
    duration: 'Jun 2023 – Dec 2023',
    shortDescription:
      'Developed a responsive bilingual website with Nuxt.js, integrated APIs, and collaborated with the team to enhance user experience.',
    description: [
      'Designed and developed a dynamic, responsive website using Nuxt.js and JavaScript with support for Khmer and English languages.',
      'Integrated RESTful APIs to display real-time news, events, and legal updates.',
      'Collaborated closely with UI/UX designers and backend developers to deliver a seamless and user-friendly bilingual interface.',
      'Strengthened skills in front-end development, multi-language support, API integration, and responsive web design best practices.',
    ],
  },
]

export const ACHIEVEMENTS_DATA: string[] = [
  'Successfully launched a bilingual website for FinTech Center, improving user engagement by 30%.',
  'Built an e-commerce platform with automated deployment and comprehensive CI/CD integration.',
  'Delivered 5+ freelance projects, achieving 100% client satisfaction with responsive and SEO-optimized websites.',
]
