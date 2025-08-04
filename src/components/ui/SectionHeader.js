import React from 'react';

const SectionHeader = ({ 
  tagline, 
  title, 
  subtitle, 
  centered = false, 
  hasLeftBorder = false,
  className = "",
  taglineClassName = "",
  titleClassName = "",
  subtitleClassName = ""
}) => {
  return (
    <div className={`sec-title ${centered ? 'text-center' : ''} ${className}`}>
      {tagline && (
        <h6 className={`sec-title__tagline text-[#0077b6] text-sm font-semibold uppercase tracking-wider mb-4 ${
          hasLeftBorder ? 'relative inline-block' : ''
        } ${taglineClassName}`}>
          {hasLeftBorder ? (
            <span className="border-l-4 border-[#0077b6] pl-4">{tagline}</span>
          ) : (
            tagline
          )}
        </h6>
      )}
      
      {title && (
        <h3 className={`sec-title__title text-4xl md:text-5xl font-bold text-gray-900 mb-8 ${titleClassName}`}>
          {title}
        </h3>
      )}
      
      {subtitle && (
        <p className={`sec-title__subtitle text-lg text-gray-700 leading-relaxed ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;