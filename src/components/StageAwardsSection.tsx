import React from 'react';
import { Trophy, Award, Crown, Star } from 'lucide-react';
import stageImage from 'figma:asset/5972c26da94ea49f0eeb8a5e114e233ec41a0b24.png';

export function StageAwardsSection() {
  const awards = [
    {
      position: 2,
      rank: 'المركز الثاني',
      amount: '7,000',
      description: 'جائزة نقدية للفريق صاحب ثاني أفضل حل ابتكاري',
      color: '#06b6d4',
      bgColor: 'bg-cyan-500',
      textColor: 'text-cyan-700',
      left: '10%',
      height: '280px'
    },
    {
      position: 1,
      rank: 'المركز الأول',
      amount: '15,000',
      description: 'الجائزة الكبرى للفريق الفائز بأفضل مشروع ابتكاري',
      color: '#10b981',
      bgColor: 'bg-emerald-500',
      textColor: 'text-emerald-700',
      left: '50%',
      height: '350px',
      isWinner: true
    },
    {
      position: 3,
      rank: 'المركز الثالث',
      amount: '3,000',
      description: 'جائزة تشجيعية للفريق صاحب ثالث أفضل مشروع',
      color: '#8b5cf6',
      bgColor: 'bg-violet-500',
      textColor: 'text-violet-700',
      left: '85%',
      height: '240px'
    }
  ];

  return (
    <section id="stage-awards" className="py-32 relative overflow-hidden min-h-screen">
      {/* Background with Stage Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${stageImage})`,
            filter: 'brightness(0.7) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/70 to-slate-900/90"></div>
      </div>

      {/* Tech Elements Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Digital Grid */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              background: `
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-violet-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20" dir="rtl">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm text-white px-8 py-5 rounded-full border border-white/20 shadow-lg mb-8">
              <Trophy className="animate-bounce" size={28} />
              <span className="text-2xl font-medium">منصة التتويج</span>
            </div>
            
            <h2 className="text-white leading-tight mb-8">
              <span className="block text-5xl lg:text-7xl mb-4">جوائز الهاكاثون</span>
              <span className="block text-3xl lg:text-4xl text-emerald-400">مسرح الإبداع والتميز</span>
            </h2>

            <p className="text-white/80 text-2xl leading-relaxed max-w-4xl mx-auto">
              احتفال بالمبدعين والمبتكرين الذين تجاوزوا حدود الممكن وقدموا حلولاً استثنائية للتحديات الحكومية
            </p>
          </div>

          {/* Stage Podium Design */}
          <div className="relative mb-20">
            {/* Virtual Stage Platform */}
            <div className="relative mx-auto max-w-5xl perspective-1000">
              {/* Stage Floor Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-800/80 to-transparent rounded-full blur-xl"></div>
              
              {/* Awards Podium */}
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end min-h-[500px] pt-16">
                {awards.map((award, index) => (
                  <div 
                    key={award.position}
                    className={`relative ${award.isWinner ? 'md:order-2' : index === 0 ? 'md:order-1' : 'md:order-3'}`}
                    style={{
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    {/* Podium Platform */}
                    <div 
                      className={`relative backdrop-blur-lg border border-white/20 rounded-t-3xl mb-8 ${award.isWinner ? 'bg-white/15' : 'bg-white/10'}`}
                      style={{ 
                        height: award.height,
                        boxShadow: `0 0 30px ${award.color}40, 0 20px 40px rgba(0,0,0,0.3)`
                      }}
                    >
                      {/* Position Number */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div 
                          className={`w-16 h-16 rounded-full border-4 border-white flex items-center justify-center shadow-2xl ${award.bgColor}`}
                          style={{ 
                            boxShadow: `0 0 20px ${award.color}60`
                          }}
                        >
                          <span className="text-white text-2xl font-bold">#{award.position}</span>
                        </div>
                      </div>

                      {/* Winner Crown */}
                      {award.isWinner && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                          <Crown 
                            className="text-yellow-400 animate-pulse" 
                            size={32}
                            style={{ filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.8))' }}
                          />
                        </div>
                      )}

                      {/* Glowing Effect */}
                      <div 
                        className="absolute inset-0 rounded-t-3xl opacity-30 animate-pulse"
                        style={{ 
                          background: `linear-gradient(135deg, ${award.color}30, transparent)`,
                          animationDuration: `${2 + index}s`
                        }}
                      ></div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6" dir="rtl">
                        {/* Trophy Icon */}
                        <div className="mb-4">
                          <Award 
                            className="text-white opacity-60" 
                            size={48}
                            style={{ filter: `drop-shadow(0 0 10px ${award.color})` }}
                          />
                        </div>

                        {/* Rank */}
                        <h3 className="text-white text-2xl font-bold mb-3">
                          {award.rank}
                        </h3>

                        {/* Amount */}
                        <div 
                          className="text-4xl font-bold mb-4"
                          style={{ 
                            color: award.color,
                            textShadow: `0 0 20px ${award.color}80`
                          }}
                        >
                          {award.amount}
                          <span className="text-xl text-white/80 block mt-1">ريال سعودي</span>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(award.position === 1 ? 5 : award.position === 2 ? 4 : 3)].map((_, i) => (
                            <Star 
                              key={i}
                              size={16} 
                              className="text-yellow-400"
                              fill="currentColor"
                              style={{ 
                                animation: `twinkle ${1.5 + i * 0.2}s ease-in-out infinite`,
                                animationDelay: `${i * 0.1}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Bottom Glow */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-20 rounded-b-3xl"
                        style={{ 
                          background: `linear-gradient(to top, ${award.color}40, transparent)`
                        }}
                      ></div>
                    </div>

                    {/* Award Description Card */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover-lift-3d" dir="rtl">
                      <p className="text-white/90 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stage Lights Effect */}
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Total Prize Pool */}
          <div className="text-center">
            <div className="inline-flex items-center gap-6 bg-gradient-to-r from-emerald-600 to-teal-600 px-12 py-6 rounded-full shadow-3d-lg hover-lift-3d">
              <Trophy className="text-white" size={32} />
              <div className="text-right" dir="rtl">
                <div className="text-white/80 text-lg">إجمالي الجوائز</div>
                <div className="text-white text-3xl font-bold">25,000 ريال سعودي</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(0.8);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}