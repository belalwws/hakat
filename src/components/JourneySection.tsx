import React from 'react';
import { Lightbulb, Users, BookOpen, Presentation, Trophy, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

// Journey Step Component with unified glass design like PathsSection
function JourneyStep({ 
  step,
  index,
  isLeft = false
}: { 
  step: any;
  index: number;
  isLeft?: boolean;
}) {
  const IconComponent = step.icon;
  
  return (
    <div className="relative flex items-center w-full">
      {/* Content Card - Unified Glass Design */}
      <div className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
        <div 
          className={`group w-full max-w-md ${
            isLeft ? 'lg:mr-12' : 'lg:ml-12'
          }`}
        >
          {/* Glass Card with unified styling */}
          <div className="bg-white/8 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.4)] transition-all duration-500 hover:scale-105 hover:bg-white/12 relative overflow-hidden" dir="rtl">
            
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 space-y-6">
              {/* Top Section - Number and Icon */}
              <div className="flex items-center justify-between">
                {/* Step Number */}
                <div className="text-6xl lg:text-7xl text-white/20 font-bold">
                  0{step.id}
                </div>
                
                {/* Animated Icon */}
                <motion.div 
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.5  // Different delay for each step
                  }}
                >
                  <IconComponent className="text-white" size={32} />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="space-y-4 text-right">
                <h3 className="text-2xl lg:text-3xl text-white leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-white/70 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Bottom subtle gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Central Timeline Icon */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block z-20">
        <motion.div 
          className="relative p-3 rounded-full border-4 border-white shadow-2xl bg-gradient-to-br from-cyan-500 to-blue-600"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
        >
          <IconComponent size={20} className="text-white" />
          
          {/* Pulsing Ring */}
          <div className="absolute inset-0 rounded-full animate-ping bg-cyan-400 opacity-30"></div>
        </motion.div>
      </div>
    </div>
  );
}

export function JourneySection() {
  const journeySteps = [
    {
      id: 1,
      title: "بناء الأفكار المبتكرة",
      description: "ابدأ رحلتك بتحديد التحدي واستكشاف الأفكار المبتكرة التي تحل مشاكل حقيقية في القطاع الحكومي وتساهم في تطوير الخدمات",
      icon: Lightbulb
    },
    {
      id: 2,
      title: "تشكيل الفريق المثالي", 
      description: "اجمع فريقاً متنوعاً من المواهب والخبرات التقنية والإبداعية لتحقيق رؤيتك المشتركة وبناء حل متكامل ومبتكر",
      icon: Users
    },
    {
      id: 3,
      title: "الورش التدريبية المتخصصة",
      description: "احضر ورش العمل التدريبية واكتسب المهارات التقنية والمعرفية اللازمة للتطوير وتعلم أحدث التقنيات والأدوات",
      icon: BookOpen
    },
    {
      id: 4,
      title: "العرض والتحكيم النهائي",
      description: "قدم حلك المبتكر أمام لجنة التحكيم المتخصصة واعرض إنجازاتك وابتكاراتك بثقة واحترافية عالية",
      icon: Presentation
    },
    {
      id: 5,
      title: "التتويج والاحتفال",
      description: "احتفل بإنجازك العظيم وكن جزءاً من مستقبل الابتكار الحكومي في المملكة العربية السعودية ورؤية 2030",
      icon: Trophy
    }
  ];

  return (
    <section id="journey" className="py-32 relative overflow-hidden" 
             style={{ background: '#091635' }}>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20" dir="rtl">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base mb-8 border border-white/20 shadow-lg">
            <MapPin size={20} className="animate-bounce" />
            <span className="font-medium">رحلة الهاكاثون التفاعلية</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl text-white mb-8 leading-tight">
            من الفكرة إلى الإنجاز…
            <span className="block text-[rgba(74,200,166,1)] mt-4">
              رحلتك تبدأ هنا
            </span>
          </h2>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Central Timeline Line with Gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden lg:block">
            <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-lg"></div>
            
            {/* Animated Glow */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-sm opacity-50 animate-pulse"></div>
          </div>

          {/* Journey Steps */}
          <div className="space-y-20 lg:space-y-32">
            {journeySteps.map((step, index) => (
              <JourneyStep
                key={step.id}
                step={step}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-6 h-6 bg-cyan-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-20 w-4 h-4 bg-purple-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 right-10 w-5 h-5 bg-emerald-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>


      </div>


    </section>
  );
}