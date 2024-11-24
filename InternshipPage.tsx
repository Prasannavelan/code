import { useState } from 'react';
import { Code2, Smartphone, Brain, Database, Palette, Terminal, Coffee, LineChart } from 'lucide-react';
import InternshipCard from './InternshipCard';
import ApplicationModal from './ApplicationModal';
import type { Domain } from './types';

const domains: Domain[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Build modern web applications using React, Node.js, and other cutting-edge technologies.',
    icon: <Code2 className="h-6 w-6 text-blue-600" />,
    skills: ['React', 'Node.js', 'TypeScript', 'REST APIs']
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Create native and cross-platform mobile applications for iOS and Android.',
    icon: <Smartphone className="h-6 w-6 text-blue-600" />,
    skills: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Develop intelligent systems and algorithms using cutting-edge ML frameworks.',
    icon: <Brain className="h-6 w-6 text-blue-600" />,
    skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP']
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Analyze complex datasets and build predictive models using statistical methods.',
    icon: <Database className="h-6 w-6 text-blue-600" />,
    skills: ['Python', 'R', 'SQL', 'Machine Learning']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Design intuitive and beautiful user interfaces for web and mobile applications.',
    icon: <Palette className="h-6 w-6 text-blue-600" />,
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
  },
  {
    id: 'python-dev',
    title: 'Python Development',
    description: 'Build scalable applications and automation tools using Python.',
    icon: <Terminal className="h-6 w-6 text-blue-600" />,
    skills: ['Django', 'Flask', 'FastAPI', 'Automation']
  },
  {
    id: 'java-dev',
    title: 'Java Development',
    description: 'Develop enterprise-grade applications using Java and Spring framework.',
    icon: <Coffee className="h-6 w-6 text-blue-600" />,
    skills: ['Spring Boot', 'Hibernate', 'Microservices', 'REST']
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights using modern analytics tools.',
    icon: <LineChart className="h-6 w-6 text-blue-600" />,
    skills: ['Tableau', 'Power BI', 'SQL', 'Excel']
  }
];

export default function InternshipPage() {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = (domain: Domain) => {
    setSelectedDomain(domain);
    setIsModalOpen(true);
  };

  return (
    <section id="internships" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Internship Opportunities</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Launch your tech career with hands-on experience in cutting-edge technologies. Choose your domain and start your journey today.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <InternshipCard
              key={domain.id}
              domain={domain}
              onApply={handleApply}
            />
          ))}
        </div>

        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          domain={selectedDomain}
        />
      </div>
    </section>
  );
}