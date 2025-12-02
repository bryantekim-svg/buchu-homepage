import React from 'react';

interface FooterProps {
    onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-stone-950 text-stone-500 py-16 border-t border-stone-900 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex flex-col items-start">
           {/* Footer Logo */}
           <img 
              src="./logo.png" 
              alt="부추꽃더클래식" 
              className="h-10 mb-6 brightness-0 invert opacity-80"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-white font-bold text-lg tracking-widest mb-4">부추꽃 더 클래식</span>
            
          <p className="mb-6 font-serif text-stone-400 text-sm">
            Premium Senior Care Center<br/>
            어르신의 품격 있는 노후를 위한 최고의 선택
          </p>
          <div className="text-stone-600 leading-relaxed">
            <p>대표: 김철수 | 사업자등록번호: 123-45-67890</p>
            <p>주소: 서울시 종로구 평창동 123-45</p>
            <p>전화: 02-395-1234 | 팩스: 02-395-5678</p>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end gap-6 w-full md:w-auto">
             <div className="flex flex-wrap gap-6 md:justify-end">
                <a href="#philosophy" className="hover:text-white transition-colors">시설안내</a>
                <a href="#contact" className="hover:text-white transition-colors">입소절차</a>
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <a href="#" className="hover:text-white transition-colors font-bold text-stone-400">개인정보처리방침</a>
            </div>
            <div className="h-px w-full bg-stone-900 md:hidden"></div>
            <p className="mt-auto">&copy; 2024 Buchukkot The Classic. All rights reserved.</p>
            
            <button 
                onClick={onAdminClick}
                className="mt-4 flex items-center gap-2 text-stone-800 hover:text-stone-600 text-[10px] uppercase tracking-wider bg-stone-900 px-3 py-1 rounded"
            >
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                Administrator Access
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;