import { skills } from './skills'

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  link: string
}

// Placeholder entries — replace name/description/technologies/link with real project details.
export const projects: Project[] = Array.from({ length: 8 }, (_, i) => {
  const n = i + 1
  return {
    id: `project-${n}`,
    name: `Project ${n}`,
    description: 'Placeholder description — replace with a short project summary.',
    technologies: [skills[i % skills.length], skills[(i + 3) % skills.length]],
    link: 'https://github.com/',
  }
})

projects[0] = {
  id: 'project-1',
  name: 'OS Analytics',
  description:
    'Open source micro-interactions analytics tool. Integrated AWS Bedrock to automate clickstream insights and built a lightweight React telemetry SDK.',
  technologies: [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express.js',
    'AWS',
    'MUI',
    'Chart.js',
    'React Flow',
    'AWS Bedrock',
    'AWS Cognito',
    'JWT',
    'PostgreSQL',
    'Crypto',
    'Jotai',
    'CSS',
    'Passport',
    'Google OAuth',
    'Dagre (React Flow)',
    'HTML to Image',
    'UUID',
    'Vite',
    'GitHub',
    'Axios',
    'Puppeteer',
    'Framer Motion',
    'Golang',
    'AWS Lambda',
    'AWS ElastiCache',
  ],
  link: 'https://github.com/oslabs-beta/OS-Analytics',
}

projects[1] = {
  id: 'project-2',
  name: 'Potato Mart',
  description:
    'Microservices-based e-commerce backend in Go, using gRPC for inter-service communication and a GraphQL API gateway. Account, product catalog, and order services backed by PostgreSQL and Elasticsearch, containerized with Docker.',
  technologies: [
    'Golang',
    'gRPC',
    'GraphQL',
    'Docker',
    'Docker Compose',
    'PostgreSQL',
    'Elasticsearch',
    'Microservices',
  ],
  link: 'https://github.com/willsyn7/Potato_Mart',
}

projects[2] = {
  id: 'project-3',
  name: 'Used Ticket',
  description:
    'Full-stack ticket booking and scanning app with a Go/Fiber backend and a React Native (Expo) mobile frontend. Users browse events, book tickets, and scan QR codes via the device camera, backed by PostgreSQL and JWT authentication.',
  technologies: [
    'Golang',
    'Fiber',
    'GORM',
    'PostgreSQL',
    'JWT',
    'React Native',
    'Expo',
    'TypeScript',
    'Expo Router',
    'Expo Camera',
    'React Navigation',
    'Axios',
  ],
  link: 'https://github.com/willsyn7/Used_Ticket_Final',
}

projects[3] = {
  id: 'project-4',
  name: 'JobSmith',
  description:
    'Job search tool using the Google Custom Search API to surface under-represented job listings, with a React/Tailwind frontend and a Node.js backend backed by PostgreSQL (via Supabase) and JWT auth.',
  technologies: [
    'JavaScript',
    'React',
    'Node.js',
    'Tailwind CSS',
    'PostgreSQL',
    'Supabase',
    'JWT',
    'Google Custom Search API',
    'ShadCN',
    'Jest',
    'HTML5',
  ],
  link: 'https://github.com/JobSmithIO/JobFinder',
}

projects[4] = {
  id: 'project-5',
  name: 'Its Cinema',
  description:
    'Full-stack movie streaming platform with JWT-based authentication, server-side rendered movie browsing, genre-based recommendations, and AI-assisted admin review classification.',
  technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Golang',
    'Gin',
    'JWT',
    'MongoDB',
    'OpenAI',
    'LangChain',
    'Git',
    'ESLint',
  ],
  link: 'https://github.com/willsyn7/Its_Cinema',
}
projects[5] = {
  id: 'project-6',
  name: 'FinTatoe',
  description:
    'News sentiment application that analyzes financial news with a Go backend, TypeScript/Express services, Google Identity Platform authentication, and Vertex AI on GCP.',
  technologies: [
    'GCP',
    'Golang',
    'TypeScript',
    'Express.js',
    'Google Identity Platform',
    'Net HTTP',
    'Vertex AI',
  ],
  link: 'https://github.com/',
}
projects[6] = {
  id: 'project-7',
  name: 'World Lens',
  description:
    'AI-integrated country insight application with a Python ETL pipeline that consumes gRPC streams, sanitizes World Bank API metrics, uses Vertex AI for analytical insights, and bulk inserts aggregated data into Postgres through a serverless Cloud Run ingestion tier.',
  technologies: [
    'Vertex AI',
    'GCP Cloud Run',
    'GCP',
    'Golang',
    'Python',
    'ETL',
    'Airflow',
    'Postgres',
  ],
  link: 'https://github.com/',
}
projects[7] = {
  id: 'project-8',
  name: 'Page_Parse',
  description:
    'Full-stack web scraping and parsing platform that combines browser automation, proxy-backed collection, server-side scraping APIs, and a React dashboard for managing extracted page data.',
  technologies: [
    'Python',
    'JavaScript',
    'Playwright',
    'Cheerio',
    'Evomi Scraping Browser',
    'Evomi Scraper API',
    'Residential Proxies',
    'Node.js',
    'Express',
    'MongoDB',
    'React',
    'Vite',
    'Bootstrap',
  ],
  link: 'https://github.com/',
}
