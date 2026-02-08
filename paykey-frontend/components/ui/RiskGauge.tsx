import React from 'react';

interface RiskGaugeProps {
  score: number;
  label: string;
  color?: string; // Hex color for stroke
  bgColor?: string; // Hex color for track
}

export function RiskGauge({ score, label, color = '#ef4444', bgColor = '#212121' }: RiskGaugeProps) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background Circle */}
        <circle 
          cx="72" cy="72" r={radius} 
          stroke={bgColor} 
          strokeWidth="12" 
          fill="none" 
        />
        {/* Progress Circle */}
        <circle 
          cx="72" cy="72" r={radius} 
          stroke={color} 
          strokeWidth="12" 
          fill="none" 
          strokeDasharray={circumference} 
          strokeDashoffset={offset} 
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-bold text-[var(--text-primary)]">{score}</span>
        <span className="text-[11px] uppercase font-bold px-2 py-0.5 rounded mt-1 bg-[var(--critical-muted)] text-[var(--critical)]">
          {label}
        </span>
      </div>
    </div>
  );
}