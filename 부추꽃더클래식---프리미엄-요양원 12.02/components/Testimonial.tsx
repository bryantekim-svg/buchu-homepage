import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section id="testimonial" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Quote className="w-12 h-12 text-stone-200 mx-auto mb-8" />
        
        <blockquote className="font-serif text-2xl md:text-3xl text-stone-800 leading-relaxed mb-10">
          "긴 시간 가족 같은 마음으로 보살펴 주셔서<br/>
          진심으로 감사합니다.<br/>
          평생 잊지 못합니다."
        </blockquote>
        
        <cite className="not-italic text-stone-500 text-sm tracking-widest uppercase block">
          - 보호자 편지 발췌 -
        </cite>
      </div>
    </section>
  );
};

export default Testimonial;