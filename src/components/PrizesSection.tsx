import React from 'react';
import { Trophy, Crown, Star, Gift } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import prizesImage from 'figma:asset/eea5f4676136cb3bd8d601cf07644affcbf6a777.png';

export function PrizesSection() {
  return (
    <section id="prizes" className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/20">
      {/* خلفية بسيطة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* شبكة خفيفة */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="w-full h-full"
            style={{
              background: `
                linear-gradient(90deg, #1e3a5f 1px, transparent 1px),
                linear-gradient(#1e3a5f 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        
        {/* دوائر زخرفية */}
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-100/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-emerald-100/30 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-slate-50/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" dir="rtl">
            {/* Badge */}
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-100 to-slate-50 px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-12 border-2 border-slate-200/50">
              <Trophy className="transition-all duration-300 hover:scale-110" size={32} style={{ color: '#64748b' }} />
              <span className="text-2xl" style={{ fontWeight: 700, color: '#64748b' }}>
                الجوائز والحوافز
              </span>
            </div>
            
            {/* Title */}
            <div className="leading-tight mb-6">
              <h2 className="text-5xl lg:text-7xl mb-4 hover:scale-105 transition-transform duration-300" 
                  style={{ color: '#1e3a5f', fontWeight: 700 }}>
                الجوائز المالية
              </h2>

              <p className="text-3xl lg:text-4xl transition-all duration-300" 
                 style={{ color: '#10b981', fontWeight: 500 }}>
                فرص استثنائية للفائزين
              </p>
            </div>
          </div>

          {/* Prize Amount */}
          <div className="flex justify-center mb-12">
            <div className="relative bg-white px-20 py-12 text-center shadow-xl max-w-4xl rounded-3xl group hover:shadow-2xl transition-all duration-300 border-4"
                 style={{ borderColor: '#1e3a5f' }}>
              
              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 transition-all duration-300 group-hover:scale-110" style={{ borderColor: '#1e3a5f' }}></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 transition-all duration-300 group-hover:scale-110" style={{ borderColor: '#1e3a5f' }}></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 transition-all duration-300 group-hover:scale-110" style={{ borderColor: '#1e3a5f' }}></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 transition-all duration-300 group-hover:scale-110" style={{ borderColor: '#1e3a5f' }}></div>
              
              {/* Main Prize Text */}
              <div className="relative z-10">
                <p className="text-4xl lg:text-6xl leading-relaxed transition-all duration-300 group-hover:scale-105" 
                   dir="rtl" 
                   style={{ color: '#1e3a5f', fontWeight: 600 }}>
                  مكافآت مالية تقديرًا للتميز
                </p>
              </div>
            </div>
          </div>

          {/* Prize Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl group">
              {/* Glowing Frame */}
              <div className="absolute -inset-6 rounded-[3rem] pointer-events-none border-4 border-transparent bg-gradient-to-r from-yellow-400/30 via-orange-400/30 to-yellow-400/30 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_rgba(75,85,99,0.3)] transition-all duration-500">
                <ImageWithFallback
                  src={prizesImage} 
                  alt="الجوائز المالية" 
                  className="w-full h-auto rounded-3xl group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/20 via-transparent to-orange-100/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-12 rounded-[4rem] pointer-events-none opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                   style={{
                     background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.3), transparent 70%)',
                     filter: 'blur(60px)',
                   }}>
              </div>

              {/* Floating Icons */}
              <div className="absolute inset-0 pointer-events-none">
                <Star className="absolute top-8 right-8 text-yellow-400 opacity-60 hover:opacity-100 transition-opacity duration-300" size={24} />
                <Crown className="absolute bottom-12 left-8 text-yellow-500 opacity-60 hover:opacity-100 transition-opacity duration-300" size={28} />
                <Trophy className="absolute top-1/2 -right-6 text-orange-500 opacity-60 hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}