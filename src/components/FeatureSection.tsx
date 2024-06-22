import React from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description }) => {
  return (
    <div className="lg:items-start lg:justify-between gap-6 p-4 items-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex justify-center">{title}</h1>
      <h3 className="flex justify-center">{description}</h3>
    </div>
  );
};

export default FeatureSection;