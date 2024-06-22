import React from 'react';

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return (
    <img
      alt={alt}
      src={src}
      className="h-56 w-full lg:w-1/2 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
    />
  );
};

export default ImageComponent;
