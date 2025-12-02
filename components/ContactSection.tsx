import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    guardianName: '',
    contact: '',
    referralPath: '',
    seniorName: '',
    seniorDob: '',
    seniorGender: 'female',
    careGrade: '',
    heightWeight: '',
    religion: '',
    currentLocation: '',
    disease: '',
    notes: '',
    dietType: '일반식',
    diaper: '미사용',
    sleepState: '양호',
    walkState: '가능',
    cognitionState: '양호',
    violenceState: '없음'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage for demo purposes
    const existingLeads = JSON.parse(localStorage.getItem('admin_leads') || '[]');
    const newLead = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleString()
    };
    localStorage.setItem('admin_leads', JSON.stringify([...existingLeads, newLead]));

    // Conversion tracking
    const conversions = parseInt(localStorage.getItem('admin_conversions') || '0');
    localStorage.setItem('admin_conversions', (conversions + 1).toString());

    setSubmitted(true);
    alert("상담 신청이 완료되었습니다. 담당자가 확인 후 빠르게 연락드리겠습니다.");
  };

  return (
    <section id="contact" className="bg-stone-100 text-black py-24 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Review Section with Image */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20 bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="w-full md:w-1/3">
                <div className="relative aspect-[3/4] bg-stone-100 rotate-[-2deg] shadow-md hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="./letter.jpg" 
                        alt="보호자 감사 편지" 
                        className="w-full h-full object-cover p-2 bg-white"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                     <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1">REAL REVIEW</div>
                </div>
            </div>
            <div className="w-full md:w-2/3 text-left">
                <p className="text-emerald-600 font-bold tracking-widest text-sm mb-4 uppercase">From Family</p>
                <blockquote className="text-2xl md:text-3xl font-serif mb-8 leading-relaxed text-stone-800 break-keep">
                "긴 시간 가족 같은 마음으로 어머니를 보살펴 주셔서 진심으로 감사합니다. <br/>
                <span className="text-emerald-800 font-bold bg-emerald-100 px-1">이 은혜 평생 잊지 못합니다.</span>"
                </blockquote>
                <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-stone-300"></div>
                    <p className="text-stone-500 text-sm font-medium">- 이OO 어르신 따님 드림 -</p>
                </div>
            </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 md:p-16 rounded-xl shadow-xl border border-stone-100">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center text-stone-900">입소 대기 및 상담 신청</h2>
            <p className="text-stone-600 mb-12 text-center text-base leading-relaxed break-keep max-w-2xl mx-auto">
                자세히 적어주실수록 어르신의 성향을 파악하여<br/> 
                <span className="font-bold text-emerald-700 bg-emerald-50">가장 편안하고 빠른 적응 계획</span>을 세울 수 있습니다.<br/>
                <span className="text-sm text-stone-400 mt-2 block">(작성해주신 정보는 상담 목적으로만 사용되며 철저히 보호됩니다)</span>
            </p>

            {submitted ? (
                <div className="text-center py-20 bg-stone-50 rounded-lg border border-stone-200">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-700 mb-4">신청이 성공적으로 접수되었습니다.</h3>
                    <p className="text-stone-600 leading-relaxed">입소 상담 전문 사회복지사가 내용을 꼼꼼히 검토 후,<br/>남겨주신 연락처로 24시간 이내에 연락드리겠습니다.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                    {/* Section 1: Guardian Info */}
                    <div>
                        <h3 className="text-lg font-bold border-b-2 border-stone-800 pb-3 mb-6 flex items-center gap-3">
                            <span className="bg-stone-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                            보호자 정보
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">보호자 성함 <span className="text-red-500">*</span></label>
                                <input required name="guardianName" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="홍길동" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">연락처 <span className="text-red-500">*</span></label>
                                <input required name="contact" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="010-1234-5678" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-stone-600 mb-2">방문 경로</label>
                                <input name="referralPath" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="예: 네이버 검색, 지인 소개, 블로그 등" />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Senior Info */}
                    <div>
                        <h3 className="text-lg font-bold border-b-2 border-stone-800 pb-3 mb-6 flex items-center gap-3">
                            <span className="bg-stone-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                            어르신 기본 정보
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">어르신 성함 <span className="text-red-500">*</span></label>
                                <input required name="seniorName" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="어르신 성함" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">생년월일 (또는 연세) <span className="text-red-500">*</span></label>
                                <input required name="seniorDob" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="예: 1940.01.01 (84세)" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">성별</label>
                                <select name="seniorGender" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                                    <option value="female">여성</option>
                                    <option value="male">남성</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">장기요양등급</label>
                                <input name="careGrade" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="예: 3등급, 등급없음, 신청중" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">신장 / 체중 (대략)</label>
                                <input name="heightWeight" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="예: 160cm / 50kg" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">종교</label>
                                <input name="religion" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="무교, 기독교, 불교, 천주교 등" />
                            </div>
                             <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-stone-600 mb-2">현재 계신 곳</label>
                                <select name="currentLocation" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                                    <option value="">선택해주세요</option>
                                    <option value="home">자택</option>
                                    <option value="hospital">병원 (대학/종합병원)</option>
                                    <option value="nursing_hospital">요양병원</option>
                                    <option value="care_center">주야간보호센터</option>
                                    <option value="nursing_home">다른 요양원</option>
                                    <option value="other">기타</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Detailed Care Info */}
                    <div>
                         <h3 className="text-lg font-bold border-b-2 border-stone-800 pb-3 mb-6 flex items-center gap-3">
                            <span className="bg-stone-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                            상세 돌봄 정보 (적응을 위해 중요합니다)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-stone-600 mb-2">주요 질병 및 병력</label>
                                <input name="disease" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="예: 고혈압, 당뇨, 뇌졸중 이력, 낙상 경험 등 상세히 적어주세요." />
                            </div>
                             <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">식사 형태</label>
                                <select name="dietType" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                                    <option value="일반식">일반식 (씹어서 식사 가능)</option>
                                    <option value="다진식">다진식 (잘게 썬 반찬)</option>
                                    <option value="갈은식">갈은식 (죽 형태)</option>
                                    <option value="죽식">죽식</option>
                                    <option value="L-tube">경관식 (콧줄 사용)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">기저귀 사용 여부</label>
                                <select name="diaper" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                                    <option value="미사용">미사용 (스스로 화장실 가능)</option>
                                    <option value="병행">병행 (밤에만/가끔 실수)</option>
                                    <option value="사용">사용 (와상/거동불편)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">수면 상태</label>
                                <select name="sleepState" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                                    <option value="양호">양호 (잘 주무심)</option>
                                    <option value="불편">자주 깨심/수면 장애</option>
                                    <option value="약복용">수면제 복용 중</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">보행 상태</label>
                                <select name="walkState" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                                    <option value="가능">자립 보행 가능</option>
                                    <option value="보조기">지팡이/워커 사용</option>
                                    <option value="휠체어">휠체어 이동</option>
                                    <option value="불가능">와상 (침대 생활)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">인지 상태 (치매 여부)</label>
                                <select name="cognitionState" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                                    <option value="양호">양호 (정상)</option>
                                    <option value="초기">치매 초기/경증 (깜빡함)</option>
                                    <option value="중기">치매 중기 (배회/망상)</option>
                                    <option value="말기">치매 말기 (인지 불가)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-2">공격성/폭력성 (솔직하게 적어주세요)</label>
                                <select name="violenceState" onChange={handleChange} className="w-full border border-stone-300 p-4 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                                    <option value="없음">없음/온순함</option>
                                    <option value="하">가끔 화냄 (욕설 등)</option>
                                    <option value="중">거부 심함/밀치기</option>
                                    <option value="상">폭력성 심함 (사전 상담 필수)</option>
                                </select>
                            </div>
                             <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-stone-600 mb-2">기타 특이사항 (성격, 좋아하시는 것, 싫어하시는 것 등)</label>
                                <textarea name="notes" onChange={handleChange} rows={4} className="w-full border border-stone-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="어르신이 좋아하시는 노래, 음식, 혹은 피해야 할 주제 등을 적어주세요. 저희가 어르신과 친해지는 데 큰 도움이 됩니다." />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-stone-900 text-white font-bold py-5 rounded-lg text-xl hover:bg-emerald-900 transition-all shadow-xl hover:shadow-2xl mt-8">
                        입소 상담 신청서 제출하기
                    </button>
                    <p className="text-center text-xs text-stone-400 mt-4">
                        * 제출해주신 소중한 정보는 어르신의 입소 적합 여부 판단을 위해서만 사용됩니다.
                    </p>
                </form>
            )}
        </div>

        <div className="mt-24 text-center pb-12">
             <div className="inline-block p-8 border-2 border-stone-200 rounded-xl bg-white">
                <p className="text-stone-500 mb-2 font-medium">신청서 작성이 어려우신가요?</p>
                <p className="text-2xl font-serif font-bold text-stone-900 mb-4">전화 주시면 친절하게 안내해 드립니다.</p>
                <a 
                    href="tel:02-395-1234"
                    className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 hover:text-emerald-600 transition-colors inline-block border-b-2 border-emerald-800 pb-1"
                >
                    02-395-1234
                </a>
                <p className="mt-6 text-sm text-stone-400">
                    평일 09:00 - 18:00 <br/> (주말/공휴일은 예약 상담만 진행합니다)
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;