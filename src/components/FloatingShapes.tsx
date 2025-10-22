import React from 'react';

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ opacity: 0.15 }}>
      {/* Top Left - Emerald Circle */}
      <div 
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full blur-3xl"
        style={{
          animation: 'float-gentle 8s ease-in-out infinite',
        }}
      />
      
      {/* Top Right - Teal Square */}
      <div 
        className="absolute top-40 -right-32 w-80 h-80 bg-gradient-to-br from-teal-400 to-teal-600 rounded-3xl blur-2xl"
        style={{
          animation: 'parallax-float 12s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />
      
      {/* Middle Left - Cyan Diamond */}
      <div 
        className="absolute top-1/2 -left-40 w-72 h-72 bg-gradient-to-br from-cyan-400 to-cyan-600 blur-2xl"
        style={{
          animation: 'bounce-gentle 6s ease-in-out infinite',
          animationDelay: '1s',
          transform: 'rotate(45deg)'
        }}
      />
      
      {/* Bottom Right - Green Circle */}
      <div 
        className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-3xl"
        style={{
          animation: 'float-gentle 10s ease-in-out infinite',
          animationDelay: '3s'
        }}
      />
      
      {/* Center - Blue Square */}
      <div 
        className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-3xl"
        style={{
          animation: 'parallax-float 15s ease-in-out infinite',
          animationDelay: '4s'
        }}
      />
      
      {/* Small floating elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-32 h-32 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full blur-2xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float-gentle ${5 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}
