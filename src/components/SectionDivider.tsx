import React from 'react';

export function SectionDivider() {
  return (
    <div className="relative py-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Main Divider Line */}
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center">
          {/* Left Line */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-emerald-500"></div>
          
          {/* Center Ornament */}
          <div className="relative mx-6 flex items-center gap-3">
            {/* Geometric shapes */}
            <div className="w-2 h-2 bg-emerald-400 rotate-45 opacity-70"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-xl animate-pulse"></div>
            </div>
            <div className="w-2 h-2 bg-teal-400 rotate-45 opacity-70"></div>
          </div>
          
          {/* Right Line */}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-emerald-500/50 to-emerald-500"></div>
        </div>
        
        {/* Subtle floating decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-emerald-500/20 rounded-full -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-teal-500/20 rounded-full -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
}
