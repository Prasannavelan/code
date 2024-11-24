import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import type { Domain } from './types';

interface Props {
  domain: Domain;
  onApply: (domain: Domain) => void;
}

export default function InternshipCard({ domain, onApply }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onApply(domain)}
    >
      <div className="flex items-start space-x-4">
        <span className="rounded-lg inline-flex p-3 bg-blue-50 ring-4 ring-white">
          {domain.icon}
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
            {domain.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            {domain.description}
          </p>
        </div>
        <ChevronRight 
          className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
            isHovered ? 'transform translate-x-1' : ''
          }`}
        />
      </div>
      
      {domain.skills && (
        <div className="mt-4 flex flex-wrap gap-2">
          {domain.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}