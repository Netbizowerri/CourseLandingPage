import React, { useEffect, useRef } from 'react';

interface JotFormEmbedProps {
  formId: string;
}

export default function JotFormEmbed({ formId }: JotFormEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear existing content
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = `https://form.jotform.com/jsform/${formId}`;
    script.type = 'text/javascript';
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [formId]);

  return (
    <div className="relative w-full overflow-hidden rounded-[40px] border border-[#0F2A4A]/5 shadow-2xl bg-[#FAF9F7]">
      <style dangerouslySetInnerHTML={{ __html: `
        .jotform-branding, 
        .form-footer, 
        .branding-2022, 
        .branding-2023,
        a[href*="jotform.com/branding"],
        div[style*="jotform.com/branding"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          pointer-events: none !important;
        }
      `}} />
      <div 
        ref={containerRef} 
        className="w-full min-h-[500px] flex items-center justify-center"
        style={{ marginBottom: '-60px' }} // Clip the bottom branding area
      >
        <div className="animate-pulse text-[#0F2A4A]/40 font-medium">Loading form...</div>
      </div>
    </div>
  );
}
