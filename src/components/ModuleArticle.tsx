import React from 'react';
import Image from './ImageComponent';

interface ModuleProps {
    imageSrc: string;
    altText: string;
    title: string;
    items: string[];
    reverse?
}

const ModuleArticle: React.FC<ModuleProps> = ({ imageSrc, altText, title, items, reverse }) => {
    return (
        <article className={`group flex flex-col-reverse ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-start lg:justify-between gap-6 p-4`}>
            <Image src={imageSrc} alt={altText} />
            <div className="fw-full lg:w-1/2">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
}

export default ModuleArticle;