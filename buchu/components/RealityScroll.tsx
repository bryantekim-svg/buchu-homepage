import React from 'react';

const RealityScroll: React.FC = () => {
  const problems = [
    {
      id: "01",
      title: "삭막한 병원, 멈춰버린 시간",
      subtitle: "단순한 생명 연장이 아닌, '삶'이 필요합니다.",
      desc: "\"치료를 위해 하루 종일 침대에만 갇혀 있어야 하나요?\"\n\n통제된 생활 속에서 어르신은 '나 자신'을 잃어버립니다. \n창살 없는 감옥처럼 느껴지는 답답한 병실.\n어르신께 필요한 것은 차가운 치료가 아니라, 따뜻한 보살핌과 살아있는 일상입니다.",
      imgClass: "bg-stone-800" // Fallback color
    },
    {
      id: "02",
      title: "위험한 집, 불안한 밤",
      subtitle: "가족의 사랑만으로는 채울 수 없는 공백",
      desc: "\"익숙해서 좋지만, 밤이 너무 무섭습니다.\"\n\n밤새 일어날지 모르는 낙상 사고, 갑작스러운 응급 상황.\n자녀분들도 불안함에 휴대폰만 바라보며 뜬눈으로 밤을 지새우지 않으셨나요?\n효도라는 이름으로 방치하고 있는 것은 아닌지, 현실을 직시해야 합니다.",
      imgClass: "bg-stone-900"
    },
    {
      id: "03",
      title: "낯선 이와의 불편한 동거",
      subtitle: "프라이버시가 사라진 공동 생활의 고통",
      desc: "\"평생을 내 집에서 살았는데...\"\n\n갑자기 모르는 사람과 24시간을 부대끼며 살아야 한다면?\n다인실의 소음, 냄새, 그리고 끊임없이 느껴지는 타인의 시선.\n이런 스트레스는 어르신이 마음의 문을 닫게 만드는 가장 큰 이유입니다.",
      imgClass: "bg-stone-950"
    }
  ];

  return (
    <section id="reality" className="bg-stone-100 text-black py-24 md:py-40 overflow-hidden">
      
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-10 leading-tight">
                가장 큰 걱정은 결국<br/>
                <span className="relative inline-block">
                    '적응'
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200/50 -z-10"></span>
                </span>
                의 문제입니다.
            </h2>
            <p className="text-stone-700 text-xl md:text-2xl max-w-3xl mx-auto break-keep leading-relaxed font-light">
                시설이 아무리 화려해도, 마음이 불편하면 지옥과 같습니다.<br/>
                <span className="font-bold text-stone-900">우리 부모님이 겪으실 세 가지 두려움</span>, 우리는 이것부터 해결해야 했습니다.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((item) => (
            <div key={item.id} className="group flex flex-col h-full bg-white rounded-xl shadow-xl overflow-hidden border border-stone-200 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
              {/* Abstract Visual Header - No foreign faces */}
              <div className={`h-48 ${item.imgClass} relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <span className="text-8xl font-serif text-white/10 font-bold select-none absolute -bottom-4 -right-4">
                    {item.id}
                </span>
                <h3 className="relative z-10 text-2xl font-bold text-white px-6 text-center leading-snug drop-shadow-md">
                    {item.title}
                </h3>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-emerald-700 font-bold text-sm mb-4 tracking-wide uppercase">
                    Reality Check {item.id}
                </p>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-6 border-b border-stone-100 pb-4">
                    {item.subtitle}
                </h4>
                <p className="text-stone-600 text-base leading-7 whitespace-pre-line break-keep flex-grow">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealityScroll;