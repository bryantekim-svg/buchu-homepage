import React from 'react';
import { Sun, Wind, Calendar } from 'lucide-react';

const PhilosophyWalk: React.FC = () => {
  return (
    <section id="walk" className="relative py-32 bg-stone-900 text-stone-100 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-40">
             <img 
                src="https://picsum.photos/1920/1080?nature,park" 
                alt="Park walk" 
                className="w-full h-full object-cover"
            />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.3em] text-emerald-400 mb-6 uppercase">
                The Highlight
            </h3>
            
            <h2 className="font-serif text-4xl md:text-6xl mb-12 leading-tight">
                안전이 보장되었기에,<br/>
                우리는 갇혀 있지 않습니다.
            </h2>

            <div className="bg-stone-800/50 backdrop-blur-md p-8 md:p-12 border border-stone-700 inline-block max-w-3xl">
                <h3 className="font-serif text-2xl md:text-3xl mb-6 text-emerald-50">
                    매일, 호수공원을 걷습니다
                </h3>
                <p className="text-stone-300 leading-relaxed text-lg mb-8">
                    많은 요양원이 낙상 사고가 두려워 산책을 기피합니다. <br className="hidden md:block"/>
                    하지만 든든한 의료 시스템과 1.5배의 인력이 있기에 <br className="hidden md:block"/>
                    우리는 과감하게 문을 열고 나갑니다.
                </p>

                <div className="flex justify-center gap-8 md:gap-16 border-t border-stone-600 pt-8">
                    <div className="flex flex-col items-center gap-2">
                        <Sun className="w-6 h-6 text-emerald-300" />
                        <span className="text-xs tracking-widest uppercase">Sunlight</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Wind className="w-6 h-6 text-emerald-300" />
                        <span className="text-xs tracking-widest uppercase">Wind</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Calendar className="w-6 h-6 text-emerald-300" />
                        <span className="text-xs tracking-widest uppercase">Seasons</span>
                    </div>
                </div>
            </div>

            <p className="mt-12 text-stone-400 text-sm tracking-wide">
                이것이 부추꽃더클래식이 선물하는 '살아있는 삶'입니다.
            </p>
        </div>
    </section>
  );
};

export default PhilosophyWalk;