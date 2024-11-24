import { ArrowRight, Brain, Code, Database } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Shaping the{' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">Next Generation</span>
          </span>{' '}
          of IT Professionals
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Empowering students with hands-on experience in cutting-edge technology through internships and real-world projects.
        </p>
        
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#internships"
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:outline-blue-900"
          >
            Apply for Internship
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="group inline-flex ring-1 ring-slate-200 items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
          >
            View Our Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="mt-36 lg:mt-44">
          <p className="font-display text-base text-slate-900">
            Trusted by leading universities and tech companies
          </p>
          <ul className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
            {[
              { icon: <Code className="h-8 w-8" />, text: "Web Development" },
              { icon: <Brain className="h-8 w-8" />, text: "AI & ML" },
              { icon: <Database className="h-8 w-8" />, text: "Data Analytics" }
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 text-slate-500">
                {item.icon}
                <span className="font-semibold">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}