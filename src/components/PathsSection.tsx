import React from 'react';
import { Code, FileText, Shield, Building } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function PathsSection() {
  const paths = [
    {
      id: 1,
      title: "مسار المديرية العامة للجوازات",
      description: "ابتكار حلول رقمية لتقليل مدة إنجاز المعاملات (إصدار - تجديد الجوازات – التأشيرات)",
      icon: FileText,
      number: "01",
      iconColor: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "مسار الدفاع المدني",
      description: "ابتكار حلول مبتكرة في مجالات الإطفاء، الإنقاذ، الحماية من الحريق، والاستجابة السريعة لحالات الطوارئ",
      icon: Shield,
      number: "02",
      iconColor: "from-emerald-500 to-emerald-600"
    },
    {
      id: 3,
      title: "مسار إمارة منطقة الباحة",
      description: "إنشاء منصة تفاعلية تمكّن المواطنين من اقتراح مشاريع وتحسينات في المنطقة ومتابعة تنفيذها",
      icon: Building,
      number: "03",
      iconColor: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="paths" className="py-32 relative overflow-hidden min-h-screen flex items-center" 
             style={{ background: '#091635' }}>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20 mb-8">
            <Code size={18} />
            <span className="text-lg">المسارات المتاحة</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl text-white mb-8 leading-tight">
            اختر المسار الذي 
            <span className="block text-[rgba(74,200,166,1)]">يحرّك شغفك</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            ثلاثة مسارات متخصصة تتيح لك استكشاف مجالات مختلفة من الابتكار التقني في الخدمات الحكومية
          </p>
        </div>

        {/* Modern Transparent Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {paths.map((path, index) => {
            const IconComponent = path.icon;
            
            return (
              <div key={path.id} className="group">
                {/* Transparent Glass Card */}
                <div className="bg-white/8 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-10 shadow-3d-lg hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.4)] transition-all duration-500 hover:scale-105 hover:bg-white/12 relative overflow-hidden card-3d preserve-3d" dir="rtl">
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 space-y-8">
                    {/* Top Section - Icon and Number */}
                    <div className="flex items-center justify-between">
                      {/* Path Number */}
                      <div className="text-6xl lg:text-7xl text-white/20 font-bold">
                        {path.number}
                      </div>
                      
                      {/* Icon with Animation */}
                      <motion.div 
                        className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${path.iconColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        <IconComponent className="text-white" size={32} />
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6 text-right">
                      <h3 className="text-2xl lg:text-3xl text-white leading-tight">
                        {path.title}
                      </h3>
                      
                      <p className="text-white/70 text-lg leading-relaxed">
                        {path.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Button 
                        className={`w-full bg-gradient-to-r ${path.iconColor} text-white border-0 hover:shadow-xl hover:scale-105 transition-all duration-300 group text-lg py-6`}
                      >
                        اختر هذا المسار
                      </Button>
                    </div>
                  </div>

                  {/* Bottom subtle gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent opacity-50"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}