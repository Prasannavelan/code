import { Code2, Smartphone, Brain, Database, Cloud, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code2 className="h-6 w-6 text-blue-600" />,
      title: 'Web Development',
      description: 'Modern web applications using cutting-edge technologies and frameworks.'
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced ML algorithms and neural networks.'
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights using modern analytics tools.'
    },
    {
      icon: <Cloud className="h-6 w-6 text-blue-600" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.'
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect digital assets.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive IT solutions tailored for modern businesses
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-sky-100 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 ring-4 ring-white">
                  {service.icon}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
