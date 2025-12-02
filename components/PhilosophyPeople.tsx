import React from 'react';

const PhilosophyPeople: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* People Part */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-24">
           <div className="w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden bg-stone-200">
                <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="Caregiver holding hands" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-left md:text-right">
             <h3 className="text-sm font-bold tracking-widest text-stone-400 mb-4 uppercase">People</h3>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 leading-tight">
              외롭지 않게<br/>곁을 지키는 '친구'
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              좋은 방이 있어도 사람이 없으면 적막할 뿐입니다.<br/>
              우리는 <span className="font-semibold text-stone-800">공단 기준 1.5배의 인력</span>과 
              최고 수준의 대우를 통해 직원들에게 '마음의 여유'를 선물했습니다.
            </p>
            <p className="text-stone-600 text-sm">
              시간에 쫓기지 않아야 어르신의 눈을 한 번 더 맞추고,<br/>
              손을 잡아드리며 말벗이 되어드릴 수 있습니다.<br/>
              진심은 여유에서 나옵니다.
            </p>
          </div>
        </div>

        {/* Safety Part */}
        <div className="border-t border-stone-200 pt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                 <h3 className="text-sm font-bold tracking-widest text-stone-400 mb-4 uppercase">Safety</h3>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
                    불안하지 않아야<br/>누릴 수 있는 일상
                </h2>
                <div className="bg-white p-8 shadow-sm border border-stone-100">
                    <h4 className="font-serif text-lg mb-2">세브란스 출신 원장의 노하우</h4>
                    <p className="text-stone-600 text-sm mb-4">
                        "혹시 아프면 어쩌지?" 하는 걱정이 있다면 일상을 즐길 수 없습니다.
                        연계 병원 핫라인이 보이지 않는 곳에서 24시간 든든하게 어르신을 지키고 있습니다.
                    </p>
                    <p className="text-stone-900 font-medium text-sm">
                        우리는 병원처럼 삭막하게 통제하지 않습니다.<br/>
                        다만, 병원만큼 안전하게 뒤에서 지켜드릴 뿐입니다.
                    </p>
                </div>
            </div>
            <div className="h-full min-h-[300px] bg-stone-200 relative">
                 <img 
                    src="https://picsum.photos/600/600?random=3" 
                    alt="Medical safety background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyPeople;