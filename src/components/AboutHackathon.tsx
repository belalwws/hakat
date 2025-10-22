import React from 'react';
import { Sparkles, Code2, Target, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import hackathonImage from 'figma:asset/ad6d78e95af46d9c1ad7cc0e2063592bfb1aa0aa.png';

export function AboutHackathon() {
  return (
    <section id="about" className="py-32 relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-emerald-50/30 to-blue-50/30">
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
        
        {/* دوائر زخرفية بسيطة */}
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-blue-100/30 to-transparent blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          {/* Grid Layout - RTL: Image left (60%), Text right (40%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[800px]" dir="rtl">
            
            {/* Right Side - Text Content (40% = 5 columns in RTL) */}
            <div className="lg:col-span-5 space-y-12 pr-8 text-right">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-800 to-emerald-700 text-white px-8 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <span className="text-2xl" style={{ fontWeight: 600 }}>هاكاثون الابتكار الحكومي</span>
                <Sparkles className="transition-all duration-300 hover:rotate-12" size={28} />
              </div>

              {/* Title */}
              <div className="relative">
                <h2 className="text-gray-900 leading-tight text-5xl text-right transition-all duration-300 hover:text-emerald-800" 
                    style={{ fontWeight: 700 }}>
                  عن هاكاثون الابتكار الحكومي
                </h2>
              </div>

              {/* Subtitle */}
              <div className="relative">
                <h3 className="text-emerald-700 leading-relaxed text-3xl text-right transition-all duration-300 hover:text-emerald-600" 
                    style={{ fontWeight: 600 }}>
                  منصة للإبداع والابتكار في الخدمات الحكومية
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-8 text-right">
                <p className="text-gray-700 leading-relaxed text-2xl">
                  برعاية <span className="text-emerald-600" style={{ fontWeight: 600 }}>وزارة الدفاع المدني</span> و<span className="text-emerald-600" style={{ fontWeight: 600 }}>المديرية العامة للجوازات</span> وبالتعاون مع <span className="text-emerald-600" style={{ fontWeight: 600 }}>إمارة منطقة الباحة</span>
                </p>

                <p className="text-gray-800 leading-relaxed text-2xl">
                  يُقام <span className="text-blue-600 bg-blue-50 px-4 py-2 rounded-lg" style={{ fontWeight: 700 }}>هاكاثون الابتكار في الخدمات الحكومية</span> لفتح المجال أمام المبدعين والمبتكرين من داخل المملكة وخارجها لمعالجة التحديات الحكومية وابتكار حلول نوعية تسهم في التطوير والتحول الرقمي.
                </p>
              </div>

              {/* Icons Row */}
              <div className="flex gap-10 pt-8 justify-end">
                {[
                  { icon: Code2, label: 'تطوير', color: 'from-slate-700 to-slate-800' },
                  { icon: Lightbulb, label: 'ابتكار', color: 'from-slate-700 to-slate-800' },
                  { icon: Target, label: 'هدف', color: 'from-slate-700 to-slate-800' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300 group">
                    <div className={`w-28 h-28 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}>
                      <item.icon className="text-white group-hover:scale-110 transition-transform duration-300" size={44} />
                    </div>
                    <span className="text-gray-700 text-xl transition-all duration-300 group-hover:text-emerald-700" 
                          style={{ fontWeight: 600 }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Side - Image */}
            <div className="lg:col-span-7">
              <div className="relative group">
                {/* Image Container */}
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500">
                  {/* Border Effect */}
                  <div className="absolute inset-0 rounded-[3rem] pointer-events-none border-4 border-transparent bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <ImageWithFallback
                    src={hackathonImage} 
                    alt="هاكاثون الابتكار الحكومي السعودي - فرق عمل في بيئة تقنية متطورة مع شاشات عرض رقمية"
                    className="w-full h-full object-cover min-h-[700px] lg:min-h-[800px] rounded-[3rem] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-blue-500/5 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-8 rounded-[4rem] pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                     style={{
                       background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.2), transparent 70%)',
                       filter: 'blur(40px)',
                     }}>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}