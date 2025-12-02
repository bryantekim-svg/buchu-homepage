import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-stone-900 overflow-hidden px-6">
      {/* Background Image - Local File */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./hero.jpg" 
          alt="부추꽃더클래식 전경" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          onError={(e) => {
            // 이미지가 없을 경우 세련된 어두운 배경 유지
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* 이미지가 없을 때를 대비한 그라디언트 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-900/50 to-stone-900"></div>
      </div>

      <div className="z-10 text-center max-w-5xl flex flex-col items-center pt-10 md:pt-20 w-full">
        
        {/* The Pain Point / Question */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl md:leading-tight text-white mb-10 tracking-tight animate-[fadeInUp_1s_ease-out_0.2s_both] break-keep drop-shadow-2xl w-full">
          <span className="text-emerald-400 block text-base md:text-xl tracking-widest mb-6 font-sans font-bold uppercase">
            Premium Senior Care
          </span>
          "엄마, 요양원 갈래?"<br/>
          그 말 한마디가 왜 그리 힘들었을까요.
        </h1>

        <div className="h-px w-24 md:w-32 bg-emerald-500/80 mx-auto mb-10 animate-[fadeInUp_1s_ease-out_0.4s_both]"></div>

        {/* The Empathetic Response */}
        <div className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-xl animate-[fadeInUp_1s_ease-out_0.6s_both] max-w-4xl mx-auto">
            <p className="font-sans text-stone-200 text-lg md:text-2xl font-light leading-relaxed break-keep drop-shadow-lg opacity-90">
            죄책감 갖지 마세요. 당연한 마음입니다.<br className="hidden md:block"/>
            내 집을 떠나 낯선 곳에 격리된다는 두려움.<br className="hidden md:block"/>
            누구라도 그 마음은 같을 것입니다.<br/><br/>
            <span className="font-bold text-white text-xl md:text-3xl block mt-4">우리는 그 두려움을 이해하는 것에서부터<br className="md:hidden"/> 시작했습니다.</span>
            </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-12 animate-[fadeInUp_1s_ease-out_0.8s_both] w-full md:w-auto px-6">
            <a href="#reality" className="w-full md:w-auto px-8 py-4 bg-transparent border border-stone-400 text-stone-200 rounded-full text-base md:text-lg font-medium tracking-wider hover:bg-white/10 transition-all duration-300 text-center">
             우리가 걱정하는 현실
            </a>
            <a href="#philosophy" className="w-full md:w-auto px-8 py-4 bg-white text-stone-900 rounded-full text-base md:text-lg font-bold tracking-wider hover:bg-emerald-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] text-center">
             부추꽃더클래식 이야기
            </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 animate-bounce text-stone-500">
        <span className="text-[10px] md:text-xs uppercase tracking-widest">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;