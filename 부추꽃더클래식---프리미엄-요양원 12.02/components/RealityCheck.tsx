import React from 'react';
import { Home, UserX, Activity } from 'lucide-react';

const RealityCheck: React.FC = () => {
  const concerns = [
    {
      icon: <Activity className="w-8 h-8 text-stone-400 mb-4" />,
      title: "삭막한 병원",
      description: "치료를 위해 하루 종일 침대에만 갇혀 있어야 하는 삶. 단순히 수명을 연장하는 것이 아닌, '살아있는 시간'이 필요합니다.",
      quote: "통제된 생활 속에서 어르신은 '나 자신'을 잃어버립니다."
    },
    {
      icon: <Home className="w-8 h-8 text-stone-400 mb-4" />,
      title: "위험한 집",
      description: "익숙해서 좋지만, 밤새 일어날 응급 상황에는 무방비합니다. 가족의 사랑만으로는 채울 수 없는 의료적 공백이 있습니다.",
      quote: "불안함 때문에 뜬눈으로 밤을 지새우셨을 겁니다."
    },
    {
      icon: <UserX className="w-8 h-8 text-stone-400 mb-4" />,
      title: "낯선 동거",
      description: "평생을 내 집에서 사셨는데, 모르는 사람과 24시간을 부대껴야 한다면? 다인실의 소음과 시선은 큰 스트레스입니다.",
      quote: "가장 큰 걱정은 결국 '적응'의 문제입니다."
    }
  ];

  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 leading-snug">
            낯선 곳이 '내 집'이 되려면 <br/>
            무엇이 필요할까요?
          </h2>
          <div className="w-16 h-px bg-stone-400 mx-auto hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {concerns.map((item, index) => (
            <div key={index} className="flex flex-col items-start md:items-center text-left md:text-center group">
              <div className="p-4 bg-white rounded-full mb-6 shadow-sm group-hover:shadow-md transition-all">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-4 font-semibold">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <p className="text-stone-500 text-xs italic border-l-2 md:border-l-0 md:border-t-2 border-stone-300 pl-4 md:pl-0 md:pt-4 w-full">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealityCheck;