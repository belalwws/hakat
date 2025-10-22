import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import digitalSaudiLogo from 'figma:asset/7be85787250921541162dece37646cb2a8bca57a.png';
import albahaChamberLogo from 'figma:asset/7c0ce25296051924917abc38121a7dd27cee220c.png';
import boulevardAlbahaLogo from 'figma:asset/b4efbf82b4ee2bc0b5bdb672e21de30ff3094f45.png';

export function PartnersSection() {
  const partners = [
    {
      name: 'السعودية الرقمية',
      nameEn: 'Digital Saudi',
      logo: digitalSaudiLogo,
      bgColor: 'from-purple-50 to-blue-50',
      textColor: 'text-purple-700',
      hoverTextColor: 'group-hover:text-purple-800'
    },
    {
      name: 'غرفة الباحة',
      nameEn: 'Al-Baha Chamber',
      logo: albahaChamberLogo,
      bgColor: 'from-orange-50 to-red-50',
      textColor: 'text-orange-700',
      hoverTextColor: 'group-hover:text-orange-800'
    },
    {
      name: 'بوليفارد الباحة',
      nameEn: 'Boulevard AlBaha',
      logo: boulevardAlbahaLogo,
      bgColor: 'from-amber-50 to-yellow-50',
      textColor: 'text-amber-700',
      hoverTextColor: 'group-hover:text-amber-800'
    }
  ];

  return (
    <section id="partners" className="py-32 relative overflow-hidden perspective-2000" style={{ background: '#091635' }}>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20" dir="rtl">
            <h2 className="text-5xl lg:text-6xl mb-8 leading-tight text-white">
              شركاء النجاح
            </h2>
            
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              بالشراكة مع الجهات الحكومية الرائدة نحو مستقبل رقمي مبتكر
            </p>

            {/* Decorative Curved Line with Larger Arrow */}
            <div className="flex justify-center mb-16">
              <svg 
                width="700" 
                height="120" 
                viewBox="0 0 700 120" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full"
              >
                {/* Main curved line */}
                <path 
                  d="M 50 60 Q 200 20, 350 60 T 650 60" 
                  stroke="#10b981" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="10 10"
                  opacity="0.3"
                />
                <path 
                  d="M 50 60 Q 200 20, 350 60 T 650 60" 
                  stroke="#10b981" 
                  strokeWidth="3" 
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                
                {/* Large decorative arrow pointing down */}
                <g transform="translate(350, 60)">
                  {/* Arrow shaft */}
                  <line 
                    x1="0" 
                    y1="0" 
                    x2="0" 
                    y2="40" 
                    stroke="#10b981" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  
                  {/* Arrow head - larger */}
                  <path 
                    d="M -15 30 L 0 50 L 15 30" 
                    stroke="#10b981" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.6"
                  />
                  
                  {/* Decorative dots around arrow */}
                  <circle cx="-20" cy="20" r="3" fill="#10b981" opacity="0.4" />
                  <circle cx="20" cy="20" r="3" fill="#10b981" opacity="0.4" />
                  <circle cx="-10" cy="35" r="2" fill="#10b981" opacity="0.3" />
                  <circle cx="10" cy="35" r="2" fill="#10b981" opacity="0.3" />
                </g>
              </svg>
            </div>
          </div>

          {/* Partners Logos Grid */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="relative group"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0
                }}
              >
                {/* Logo Container with 3D effect */}
                <div 
                  className="relative bg-white rounded-2xl shadow-3d-lg p-8 lg:p-12 transition-all duration-500 hover:shadow-3d-lg group-hover:scale-105 overflow-hidden card-3d preserve-3d"
                  style={{
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {/* Gradient background overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${partner.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-100 to-transparent rounded-bl-full opacity-50" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-slate-100 to-transparent rounded-tr-full opacity-50" />

                  {/* Real Partner Logos */}
                  <div className="relative z-10 text-center">
                    {/* Logo Frame with Creative Border */}
                    <div className="relative mb-6 mx-auto" style={{ maxWidth: '280px' }}>
                      {/* Animated Border Corners */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-emerald-600 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-emerald-600 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-emerald-600 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-emerald-600 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                      
                      {/* Inner Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:via-emerald-400/5 group-hover:to-emerald-400/10 transition-all duration-500" />
                      
                      {/* Logo Container with Enhanced Shadow */}
                      <div 
                        className="relative w-full h-44 mx-auto flex items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border-2 border-slate-100 group-hover:border-emerald-200 transition-all duration-500 overflow-hidden"
                        style={{
                          boxShadow: '0 4px 15px rgba(0,0,0,0.08), inset 0 1px 2px rgba(255,255,255,0.8)'
                        }}
                      >
                        {/* Radial Glow Background */}
                        <div className="absolute inset-0 bg-gradient-radial from-emerald-50/0 via-emerald-50/0 to-transparent group-hover:from-emerald-50/30 group-hover:via-emerald-50/10 transition-all duration-700" />
                        
                        {/* Logo Image */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                          <ImageWithFallback
                            src={partner.logo}
                            alt={`شعار ${partner.name}`}
                            className="w-full h-full object-contain"
                            style={{
                              imageRendering: 'crisp-edges',
                              filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.12)) contrast(1.05)',
                              transition: 'all 0.5s ease'
                            }}
                          />
                        </div>
                        
                        {/* Animated Light Beam */}
                        <div 
                          className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none"
                          style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.15) 50%, transparent 100%)',
                            animation: 'light-sweep 2s ease-in-out infinite',
                            transform: 'skewX(-20deg)'
                          }}
                        />
                      </div>
                    </div>

                    {/* Partner Name - Arabic */}
                    <h3 
                      className={`text-2xl mb-2 ${partner.textColor} ${partner.hoverTextColor} transition-colors duration-300`}
                      dir="rtl"
                    >
                      {partner.name}
                    </h3>

                    {/* Partner Name - English */}
                    <p className="text-slate-400 group-hover:text-slate-600 transition-colors duration-300" style={{ fontStyle: 'italic' }}>
                      {partner.nameEn}
                    </p>
                  </div>

                  {/* Shine effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                      transform: 'translateX(-100%)',
                      animation: 'shine 2s ease-in-out infinite'
                    }}
                  />
                </div>

                {/* 3D Shadow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl -z-10 transition-all duration-500 group-hover:translate-y-2"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)',
                    filter: 'blur(15px)',
                    transform: 'translateY(8px)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        
        @keyframes light-sweep {
          0% {
            transform: translateX(-200%) skewX(-20deg);
          }
          100% {
            transform: translateX(200%) skewX(-20deg);
          }
        }
      `}</style>
    </section>
  );
}