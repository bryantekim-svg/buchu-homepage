import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-black overflow-hidden px-6">
      {/* Background Image - Local File */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./hero.jpg" 
          alt="부추꽃더클래식 전경 또는 따뜻한 이미지" 
          className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          onError={(e) => {
            // Fallback to a placeholder if local file is missing, ensuring no foreign faces
            e.currentTarget.src = 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop'; // Nature/Forest fallback
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
      </div>

      <div className="z-10 text-center max-w-5xl flex flex-col items-center pt-10 md:pt-20">
        
        {/* The Pain Point / Question */}
        <h1 className="font-serif text-3xl md:text-6xl md:leading-tight text-white mb-10 tracking-tight animate-[fadeInUp_1s_ease-out_0.2s_both] break-keep drop-shadow-2xl">
          <span className="text-stone-300 block text-lg md:text-2xl tracking-widest mb-6 font-sans font-light">
            가장 사랑하는 부모님을 위한 선택
          </span>
          "엄마, 요양원 갈래?"<br/>
          그 말 한마디가 왜 그리 힘들었을까요.
        </h1>

        <div className="h-px w-32 bg-emerald-500/80 mx-auto mb-10 animate-[fadeInUp_1s_ease-out_0.4s_both]"></div>

        {/* The Empathetic Response */}
        <p className="font-sans text-stone-200 text-lg md:text-2xl font-light leading-relaxed animate-[fadeInUp_1s_ease-out_0.6s_both] max-w-3xl break-keep drop-shadow-lg opacity-90">
          죄책감 갖지 마세요. 당연한 마음입니다.<br/>
          내 집을 떠나 낯선 곳에 격리된다는 두려움.<br/>
          누구라도 그 마음은 같을 것입니다.<br/><br/>
          <span className="font-bold text-white text-xl md:text-3xl">우리는 그 두려움을 이해하는 것에서부터<br className="md:hidden"/> 시작했습니다.</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-6 mt-16 animate-[fadeInUp_1s_ease-out_0.8s_both]">
            <a href="#reality" className="px-10 py-4 bg-transparent border border-stone-400 text-stone-200 rounded-full text-lg font-medium tracking-wider hover:bg-white/10 transition-all duration-300">
             우리가 걱정하는 현실
            </a>
            <a href="#philosophy" className="px-10 py-4 bg-white text-stone-900 rounded-full text-lg font-bold tracking-wider hover:bg-emerald-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
             부추꽃더클래식 이야기
            </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce text-stone-400">
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;