import React from 'react';

const ClimaxWalk: React.FC = () => {
  return (
    <section id="walk" className="relative bg-white text-black py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 border-b-2 border-stone-900 pb-12">
            <div>
                 <p className="text-emerald-700 font-bold tracking-widest uppercase mb-4 text-sm">The Climax</p>
                <h2 className="text-4xl md:text-7xl font-serif font-bold leading-[1.1] text-stone-900 break-keep">
                안전이 보장되기에,<br/>
                우리는 <span className="text-emerald-800 italic underline decoration-emerald-300 decoration-4 underline-offset-8">갇혀 있지 않습니다.</span>
                </h2>
            </div>
            <div className="max-w-md mt-10 md:mt-0 text-right">
                <p className="text-lg md:text-2xl font-medium leading-tight text-stone-700 break-keep">
                    많은 요양원이 낙상 사고가 두려워 산책을 기피합니다.<br/>
                    하지만 <span className="font-bold text-black">부추꽃더클래식은 다릅니다.</span>
                </p>
            </div>
        </div>

        <div className="relative w-full aspect-video md:aspect-[21/9] bg-stone-200 mb-16 overflow-hidden group rounded-sm shadow-2xl">
            {/* Walk Image - Local File */}
            <img 
                src="./walk.jpg" 
                alt="어르신과 함께하는 산책" 
                className="w-full h-full object-cover transition-transform duration-[3s] ease-in-out group-hover:scale-105"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1542223616-9de78c66e92a?q=80&w=2000&auto=format&fit=crop'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-white/95 backdrop-blur-md px-8 py-6 shadow-lg border-l-4 border-emerald-800 max-w-2xl">
                <p className="text-xl md:text-3xl font-serif text-stone-900 font-bold mb-4">
                    "매일, 자연을 걷습니다"
                </p>
                <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                    따스한 햇살을 쬐고, 시원한 바람을 느끼며 계절의 변화를 눈에 담는 것.<br/>
                    병원 침대에 누워 천장만 바라보는 것이 아니라, 두 발로 땅을 딛고 살아있음을 느끼는 것.<br/>
                    이것이 바로 부추꽃더클래식이 선물하는 <span className="font-bold text-emerald-800">'진짜 살아있는 삶'</span>입니다.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
            <div className="space-y-8">
                 <h3 className="text-3xl font-serif font-bold text-stone-900 leading-tight">
                    든든한 의료 시스템과<br/>
                    1.5배의 인력이 있기에 가능합니다.
                 </h3>
                <p className="text-stone-700 text-lg leading-relaxed break-keep">
                    산책은 단순한 걷기가 아닙니다. 어르신들에게는 
                    '내가 아직 건강하게 살아있다'는 증거이자 자존감입니다.<br/><br/>
                    혹시 넘어지실까 봐 곁을 떠나지 않는 선생님들, 
                    그리고 만약의 상황에 대비하는 의료진이 뒤에서 묵묵히 지켜주기에,
                    우리는 오늘도 과감하게 문을 열고 세상 밖으로 나갑니다.
                </p>
            </div>
            
            <div className="bg-stone-50 p-10 border border-stone-200 flex flex-col justify-center items-center text-center rounded-lg shadow-inner">
                <h4 className="text-2xl font-serif font-bold mb-6 text-stone-800">
                    부모님께 '갇힌 삶'이 아닌<br/>'누리는 삶'을 선물하세요.
                </h4>
                <p className="text-stone-600 mb-8 text-base break-keep">
                    백 번의 인터넷 검색보다 한 번의 방문이 부모님의 마음을 움직입니다.<br/>
                    직접 오셔서 어르신들의 편안한 표정을 확인하세요.
                </p>
                <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); }} className="inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-10 py-5 w-full rounded-md text-xl font-bold hover:bg-emerald-900 transition-colors shadow-xl group">
                    입소 대기 및 상담 신청하기 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ClimaxWalk;