import React, { useState } from 'react';
import { Button } from './ui/button';
import { RegistrationForm } from './RegistrationForm';
import heroBackground from 'figma:asset/870065dcbf17e4d77e6fa71daef00e57341f9bdf.png';

export function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Image with Animation */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Saudi Arabia Hackathon Background"
          className="w-full h-full object-cover"
          style={{
            animation: 'heroEntrance 2s ease-out, heroBreathing 20s ease-in-out 2s infinite'
          }}
        />
        {/* Stronger overlay for better text visibility with fade in */}
        <div 
          className="absolute inset-0 bg-slate-900/60"
          style={{
            animation: 'fadeIn 1.5s ease-out'
          }}
        ></div>
      </div>

      {/* Content - Centered */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl leading-tight animate-[fadeInUp_1s_ease-out] relative">
              <span 
                className="relative text-white"
                style={{ 
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(0, 0, 0, 0.2)',
                  fontWeight: 700
                }}
              >
                هاكاثون الابتكار الحكومي
              </span>
            </h1>
            <p className="text-3xl lg:text-4xl text-slate-200 max-w-4xl mx-auto leading-relaxed tracking-wide animate-[fadeInUp_1s_ease-out_0.2s_both]">
              انضم إلى نخبة من المطورين والمبدعين في رحلة استثنائية لتطوير حلول مبتكرة <span className="text-white">يحرّك شغفك</span> تخدم المواطنين وتعزز من جودة الخدمات الحكومية
            </p>
            <p className="text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed tracking-wide animate-[fadeInUp_1s_ease-out_0.4s_both]">
              شاركنا في رحلة <span className="text-white">الابتكار في الخدمات الحكومية</span> وطوّر حلولاً تقنية متقدمة
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-10 animate-[fadeInUp_1s_ease-out_0.6s_both]">
            <Button 
              size="lg" 
              className="bg-[rgba(0,96,69,1)] text-white border-0 hover:shadow-3d-lg hover:scale-105 transition-all duration-300 px-12 py-8 text-2xl preserve-3d hover-lift-3d shadow-3d-md"
              onClick={() => setIsFormOpen(true)}
            >
              سجل مشاركتك الآن
            </Button>
          </div>

          {/* Registration Form Dialog */}
          <RegistrationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-[fadeIn_1s_ease-out_1s_both]">
        <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center shadow-3d-sm preserve-3d">
          <div className="w-1 h-3 bg-emerald-500 rounded-full mt-2 animate-bounce layer-3d-1"></div>
        </div>
      </div>

      <style>{`
        @keyframes heroEntrance {
          from {
            transform: scale(1.15);
            opacity: 0;
          }
          to {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        @keyframes heroBreathing {
          0%, 100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.08);
          }
        }

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

