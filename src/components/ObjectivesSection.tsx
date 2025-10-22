import React from 'react';
import { Target, Users, Zap, Globe, Award, Lightbulb, CheckCircle } from 'lucide-react';

export function ObjectivesSection() {
  const objectives = [
    {
      id: 1,
      title: "الاستدامة البيئية",
      description: "إيجاد حلول مبتكرة لحماية البيئة، وترشيد استهلاك الموارد، والمحافظة على البيئة.",
      icon: Globe,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "تحسين جودة الحياة",
      description: "التركيز على الحلول التي تُعزز رفاهية السكان، وتحسين الخدمات الحضرية والصحية والتعليمية.",
      icon: Users,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 3,
      title: "تعزيز الاستثمار والنشاط الاقتصادي",
      description: "السعي لإيجاد الحلول التي تؤدي إلى زيادة الاستثمار المحلي والأجنبي، وتحقيق النمو الاقتصادي المحلي.",
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      title: "دمج مخرجات التحول الرقمي",
      description: "الاستفادة من التقنيات الحديثة لتطوير الخدمات بما يتماشى مع أهداف الحكومة الذكية في هذا المجال.",
      icon: Zap,
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 5,
      title: "إشراك المجتمع والقطاع الخاص",
      description: "تحفيز المجتمع على المشاركة في الابتكار، وإيجاد حلول تُشرك القطاع الخاص.",
      icon: Lightbulb,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      title: "التنمية الحضرية والبنية التحتية",
      description: "وضع خطط لتطوير العمران، وتطوير البنية التحتية، وتحسين مستوى الخدمات",
      icon: Target,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="objectives" className="py-24 bg-white perspective-2000">
      <div className="container mx-auto px-4 preserve-3d">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm mb-4 border border-emerald-200">
            <span>أهدافنا</span>
            <Target size={16} />
          </div>
          
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            الأهداف العامة لهاكاثون
            <span className="block text-[rgba(0,96,69,1)]">الابتكار في الخدمات الحكومية</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            نسعى لتحقيق مجموعة من الأهداف الاستراتيجية التي تدعم رؤية المملكة 2030 وتطوير الخدمات الحكومية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            const delay = index * 100;
            
            return (
              <div 
                key={objective.id} 
                className="group relative bg-white rounded-2xl p-8 shadow-3d-md hover:shadow-3d-lg transition-all duration-300 border border-gray-200 hover:border-emerald-300 hover-lift-3d preserve-3d"
                style={{ animationDelay: `${delay}ms` }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${objective.color} rounded-xl items-center justify-center shadow-3d-md mb-6 group-hover:scale-110 transition-transform duration-300 layer-3d-2`}>
                    <IconComponent className="text-white" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors font-semibold text-right">
                    {objective.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 text-right">
                    {objective.description}
                  </p>

                  {/* Check Mark */}
                  <div className="flex items-center gap-2 text-emerald-600 justify-end">
                    <span className="text-sm font-medium">هدف استراتيجي</span>
                    <CheckCircle size={16} />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Summary */}

      </div>
    </section>
  );
}