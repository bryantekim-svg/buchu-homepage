import React from 'react';

const PhilosophySpace: React.FC = () => {
  return (
    <section className="py-24 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
            <img 
              src="https://picsum.photos/800/1000?random=1" 
              alt="Private room interior" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
             <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs tracking-widest uppercase text-stone-800">
                Philosophy 01: Space
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="text-sm font-bold tracking-widest text-stone-400 mb-4 uppercase">Space</h3>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-8 leading-tight">
            적응의 시작,<br />
            '나만의 방'
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            남의 눈치를 보지 않고 숨을 고를 공간이 필수적입니다.<br />
            우리는 <span className="text-stone-900 font-semibold border-b border-stone-300">1인실(80%)과 2인실(20%)</span>만을 고집합니다.
          </p>
          <div className="space-y-4 text-stone-600 font-light">
            <p>
              방문을 닫으면 온전한 휴식이 보장되는 곳.<br/>
              마음이 편안해야 비로소 이곳이 '살 만한 곳'이 됩니다.
            </p>
            <p>
              나의 가구, 나의 냄새, 나의 습관이 존중받는 공간에서<br/>
              어르신은 존엄을 지킬 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySpace;