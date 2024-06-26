import { type EntryProps } from '@/components/Experience';

const month = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
};

export const experienceData: EntryProps[] = [
  {
    organization: 'SimWell',
    link_ref: 'https://simwell.io',
    role: 'Simulation Software Consultant',
    // team: "Core Technology R&D, Fabric",
    type: 'Contract, Part-time',
    location: 'Laval, Quebec, Canada',
    start_month: month[1],
    start_year: 2024,
    end_month: month[5],
    end_year: 2024,
    description: ['Distributed microservices and frontend development'],
    skills: ['']
  },
  {
    organization: 'Microsoft',
    link_ref: 'https://www.microsoft.com/en-us/industry/nuance',
    role: 'Software Developer',
    team: 'Core Technology R&D, Fabric',
    type: 'Internship, Full-time',
    location: 'Montreal, Quebec, Canada',
    start_month: month[1],
    start_year: 2023,
    end_month: month[5],
    end_year: 2023,
    description: [
      'Backend API and Microservices development',
      'CI/CD with Docker, kubernetes, and helm on Gitlab and Azure DevOps',
      'Cloud infrastructure management'
    ],
    skills: ['k8s', 'Docker', 'Linux', 'Azure DevOps', 'IAM', 'GitOps', 'helm']
  },
  {
    organization: 'Nuance',
    link_ref: 'https://www.microsoft.com/en-us/industry/nuance',
    role: 'Software Developer',
    team: 'Core Technology R&D, Fabric',
    type: 'Internship, Full-time',
    location: 'Montreal, Quebec, Canada',
    start_month: month[1],
    start_year: 2023,
    end_month: month[5],
    end_year: 2023,
    description: ['Now part of Microsoft 🥳'],
    skills: ['k8s', 'Docker', 'Linux', 'Azure DevOps', 'IAM', 'GitOps', 'helm']
  },
  {
    organization: 'Genetec',
    link_ref: 'https://genetec.com',
    role: 'Software Developer',
    team: 'Software Configuration Management & Tools',
    type: 'Internship, Full-time',
    location: 'Saint-Laurent, Québec, Canada',
    start_month: month[5],
    start_year: 2022,
    end_month: month[8],
    end_year: 2022,
    description: [
      'Managed Azure DevOps, including code repositories, pipelines, APIs, dev tools, automation, and Docker orchestration.',
      'Enhanced personal DevOps abilities, software development practices, and problem-solving skills.'
    ],
    skills: [
      'CI/CD',
      'DevOps',
      'Container Orchestration',
      'IAM',
      'GitOps',
      'C#',
      'Bash',
      'Linux',
      'Shell Scripting',
      'Powershell'
    ]
  },
  {
    organization: 'SAC Research Group',
    link_ref: 'https://users.encs.concordia.ca/~sac',
    role: 'Undergraduate Research Assistant',
    type: 'Part-time',
    location: 'Montréal, Québec, Canada',
    start_month: month[1],
    start_year: 2020,
    end_month: 'undefined',
    end_year: 0,
    description: [
      'My research activities focus on machine learning platforms, processes, and distributed micro-services.'
    ],
    skills: [
      'MLOps',
      'DevOps',
      'Full-stack Development',
      'Python',
      'IaaS',
      'GitOps',
      'React',
      'Linux',
      'Cloud Computing',
      'TensorFlow',
      'Powershell'
    ]
  },
  {
    organization: 'Genetec',
    link_ref: 'https://genetec.com',
    role: 'IT Specialist',
    team: 'IT Operations',
    type: 'Internship, Full-time',
    location: 'Saint-Laurent, Québec, Canada',
    start_month: month[8],
    start_year: 2021,
    end_month: month[12],
    end_year: 2021,
    description: [
      'On-premise AD and Azure AD management, incident response and investigation, hardware/software asset management and deployment, infrastructure and workflow improvement.'
    ],
    skills: [
      'Active Directory',
      'Jira',
      'Automation',
      'IAM',
      'Technical Support',
      'OS',
      'Powershell'
    ]
  },
  {
    organization: 'Concordia University',
    link_ref: 'https://www.concordia.ca/ginacody/aits.html',
    role: 'IT Technician L2',
    type: 'Part-time, Permanent',
    location: 'Montréal, Québec, Canada',
    start_month: month[3],
    start_year: 2020,
    end_month: 'undefined',
    end_year: 0,
    description: [
      'Troubleshoot user environments on Windows, Linux, macOS, and remote servers.',
      'Address complex hardware, software, and network issues.',
      'Investigate incidents, resolve or escalate.',
      "Manage team's knowledge base, backups, and contribute to university's high-performance computing group."
    ],
    skills: [
      'Asset Management',
      'Incident Investigation',
      'IAM',
      'Bash',
      'Linux',
      'System Administration',
      'Technical Support',
      'OS',
      'Powershell'
    ]
  }
];
