import { Users, Target, Rocket, Award, Briefcase, GraduationCap, Heart, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Students Mentored', value: '500+', icon: <Users className="h-6 w-6 text-blue-500" /> },
    { label: 'Projects Completed', value: '100+', icon: <Rocket className="h-6 w-6 text-purple-500" /> },
    { label: 'Success Rate', value: '95%', icon: <Award className="h-6 w-6 text-green-500" /> },
    { label: 'Industry Partners', value: '50+', icon: <Globe className="h-6 w-6 text-indigo-500" /> }
  ];

  const leaders = [
    {
      name: 'Prasanna Velan V',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      description: 'Visionary leader driving student success and innovation in tech education.'
    },
    {
      name: 'Nikhil Srinivasan S',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      description: 'Innovative technologist ensuring IT excellence and technical leadership.'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Student-First Approach',
      description: 'Prioritizing student growth and development in every initiative.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Industry Excellence',
      description: 'Maintaining high standards in training and project delivery.'
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Innovation Focus',
      description: 'Staying ahead with cutting-edge technologies and methodologies.'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-50/50 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 sm:text-6xl lg:text-7xl text-center">
  Empowering Students,
  <span className="block sm:inline"> Delivering Excellence</span>
</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded on October 8, 2024, CYBER BIND is dedicated to providing affordable virtual internships 
            and high-quality freelancing services. Proudly registered with the Ministry of Micro, Small, 
            and Medium Enterprises (MSME).
          </p>
        </div>

        {/* Stats with Animation */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} 
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-gray-900 text-center group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-600 text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="mt-24 grid gap-8 md:grid-cols-2">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-lg text-white transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="mt-4 text-blue-50 leading-relaxed">
              Empowering individuals to excel in the digital world through innovation and excellence.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-lg text-white transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-3">
              <Briefcase className="h-8 w-8" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="mt-4 text-purple-50 leading-relaxed">
              To bridge the gap between education and industry by providing practical training 
              and reliable freelancing services.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} 
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mx-auto transform group-hover:rotate-12 transition-transform">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 text-center">
                  {value.title}
                </h3>
                <p className="mt-4 text-gray-600 text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {leaders.map((leader) => (
              <div key={leader.name} 
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-20 w-20 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-blue-600 font-medium">{leader.role}</p>
                    <p className="mt-2 text-gray-600">{leader.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Let's Innovate, Excel, and Grow Together
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#internships"
                className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Internships
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}