'use client';

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

// Initializing mermaid with a clean, professional theme
if (typeof window !== 'undefined') {
  mermaid.initialize({
    startOnLoad: true,
    theme: 'base',
    themeVariables: {
      primaryColor: '#087EA4',
      primaryTextColor: '#fff',
      primaryBorderColor: '#087EA4',
      lineColor: '#087EA4',
      secondaryColor: '#f3f4f6',
      tertiaryColor: '#fff',
      fontSize: '14px',
      fontFamily: 'Inter, system-ui, sans-serif',
    },
    securityLevel: 'loose',
    fontFamily: 'Inter',
  });
}

export const MermaidDiagram: React.FC<MermaidProps> = ({ chart }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const id = useRef(`mermaid-${Math.floor(Math.random() * 10000)}`);

  useEffect(() => {
    const renderChart = async () => {
      if (elementRef.current && chart) {
        try {
          // Explicitly clear element before re-render if necessary
          const { svg } = await mermaid.render(id.current, chart);
          setSvg(svg);
        } catch (error) {
          console.error('Mermaid render error:', error);
          setSvg('<div class="text-red-500 p-4 border border-red-200">Failed to render diagram. Check format.</div>');
        }
      }
    };

    renderChart();
  }, [chart]);

  return (
    <div className="flex justify-center my-8 bg-white p-6 rounded-xl border border-black/5 shadow-sm overflow-x-auto">
      <div 
        ref={elementRef} 
        dangerouslySetInnerHTML={{ __html: svg }}
        className="mermaid-svg-container"
      />
    </div>
  );
};
