
import React, { useMemo, useEffect, useState } from 'react';
import { QUESTIONS, RESULT_PROFILES } from '../constants';
import { Option, ResultProfile, Language } from '../types';

interface ResultViewProps {
  lang: Language;
  answers: Record<number, Option>;
  onReset: () => void;
}

const AnimalIcon = ({ type, className }: { type: string, className?: string }) => {
  switch (type) {
    case 'lion':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M17.2,16.5c-0.2,0-0.4-0.1-0.5-0.2 c-0.8-0.8-1.5-1.2-2.1-1.3c-0.2,0-0.3,0.1-0.4,0.3c-0.1,0.2-0.2,0.4-0.4,0.6c-0.5,0.5-1.1,0.7-1.8,0.7s-1.3-0.2-1.8-0.7 c-0.2-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.2-0.3-0.4-0.3c-0.6,0.1-1.3,0.5-2.1,1.3c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.7-0.3-0.7-0.7 c0-0.2,0.1-0.4,0.2-0.5c1.1-1.2,2.1-1.8,3.2-1.9c0.2,0,0.5,0.1,0.7,0.3c0.1,0.1,0.2,0.2,0.3,0.3c0.4,0.3,0.9,0.5,1.4,0.5 s1-0.2,1.4-0.5c0.1-0.1,0.2-0.2,0.3-0.3c0.2-0.2,0.5-0.3,0.7-0.3c1.1,0.1,2.1,0.7,3.2,1.9c0.1,0.1,0.2,0.3,0.2,0.5 C17.9,16.2,17.6,16.5,17.2,16.5z" />
        </svg>
      );
    case 'serpent':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
        </svg>
      );
    case 'owl':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,16.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5 s1.5,0.7,1.5,1.5S12.8,16.5,12,16.5z M14.5,12.5h-5v-1h5V12.5z M14.5,10.5h-5v-1h5V10.5z" />
        </svg>
      );
    case 'eagle':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.07 10.41A5 5 0 0 0 13.07 4.59L16.42 1.24 17.83 2.65 14.47 6 17.83 9.35 16.42 10.76 13.07 7.41V10.41M11 20H13V22H11V20M15 20H17V22H15V20M7 20H9V22H7V20M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2Z" />
        </svg>
      );
    default:
      return null;
  }
};

const ResultView: React.FC<ResultViewProps> = ({ lang, answers, onReset }) => {
  const [imgError, setImgError] = useState(false);
  const t = (obj: any) => obj[lang] || obj['zh'] || '';

  const calculation = useMemo(() => {
    let totalX = 0;
    let totalY = 0;
    QUESTIONS.forEach(q => {
      const ans = answers[q.id];
      if (ans) {
        totalX += q.scores[ans].x;
        totalY += q.scores[ans].y;
      }
    });
    return { x: totalX, y: totalY };
  }, [answers]);

  const profile: ResultProfile = useMemo(() => {
    const { x, y } = calculation;
    if (x <= 0 && y >= 0) return RESULT_PROFILES.leftUp;
    if (x > 0 && y >= 0) return RESULT_PROFILES.rightUp;
    if (x <= 0 && y < 0) return RESULT_PROFILES.leftDown;
    return RESULT_PROFILES.rightDown;
  }, [calculation]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f6f2] flex flex-col max-w-[750px] mx-auto pb-20 overflow-x-hidden">
      <div className={`h-64 ${profile.color} flex flex-col justify-end p-8 text-white relative shadow-2xl transition-all duration-1000`}>
        <div className="absolute top-8 right-8 opacity-20 text-[10rem] font-serif leading-none select-none pointer-events-none">“</div>
        <h1 className="text-[11px] uppercase tracking-[0.5em] font-black opacity-60 mb-3">Analysis Result</h1>
        <h2 className="text-4xl font-serif font-black tracking-tight leading-none mb-8 drop-shadow-lg">{t(profile.name)}</h2>
      </div>

      <div className="px-6 -mt-14 relative z-10">
        {/* Philosopher Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 mb-10 border border-stone-100 transition-all hover:scale-[1.01]">
           <div className="flex items-center gap-6 mb-8">
              <div className="relative shrink-0">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-stone-100 flex items-center justify-center">
                  {!imgError ? (
                    <img 
                      src={profile.philosopherImg} 
                      alt={profile.philosopher.en} 
                      className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500" 
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="bg-stone-50 w-full h-full flex items-center justify-center text-stone-300">
                       <AnimalIcon type={profile.animal} className="w-12 h-12" />
                    </div>
                  )}
                </div>
                <div className={`absolute -bottom-1 -right-1 w-7 h-7 bg-white border-4 border-white rounded-full flex items-center justify-center shadow-lg`}>
                   <div className={`w-full h-full rounded-full ${profile.color}`}></div>
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <h3 className="text-2xl font-black text-stone-900 leading-none mb-1 break-words">
                  {profile.philosopher.zh}
                </h3>
                <span className="text-sm font-serif italic text-stone-400 font-semibold mb-2 block truncate">
                  {profile.philosopher.en}
                </span>
                <p className="text-[10px] text-stone-500 uppercase font-black tracking-[0.2em] bg-stone-50 py-1 px-3 rounded-full inline-block self-start">
                  {t(profile.title)}
                </p>
              </div>
           </div>
           
           <div className="relative bg-stone-50 p-6 rounded-3xl rounded-tl-none border-l-[8px] border-stone-900 shadow-sm mb-6">
              <div className="absolute -top-3 left-0 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[14px] border-b-stone-50"></div>
              <p className="italic text-stone-800 leading-relaxed font-serif text-lg">
                “{t(profile.message)}”
              </p>
           </div>
           
           <div className="h-px w-full bg-stone-100 mb-6"></div>
           
           <p className="text-stone-600 text-[15px] leading-relaxed px-2 font-medium">
              {t(profile.description)}
           </p>
        </div>

        {/* Historical Impact Analysis */}
        <div className="bg-stone-900 text-stone-100 p-8 rounded-[2.5rem] shadow-2xl mb-10 relative overflow-hidden border border-white/5">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
           <h4 className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-500 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-stone-700"></span> Historical Analysis
           </h4>
           
           <div className="space-y-12">
              <section>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 shadow-inner">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-stone-200 font-black text-[11px] uppercase tracking-widest">历史性成就 (Milestones)</p>
                 </div>
                 <ul className="space-y-6">
                    {profile.history.pros.map((p, i) => (
                      <li key={i} className="text-[14px] leading-[1.7] text-stone-300 border-l-2 border-green-500/40 pl-6 py-1">
                        {t(p)}
                      </li>
                    ))}
                 </ul>
              </section>
              
              <section className="pt-10 border-t border-white/10">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 shadow-inner">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <p className="text-stone-200 font-black text-[11px] uppercase tracking-widest">深刻教训 (Lessons & Risks)</p>
                 </div>
                 <ul className="space-y-6">
                    {profile.history.cons.map((c, i) => (
                      <li key={i} className="text-[14px] leading-[1.7] text-stone-300 border-l-2 border-red-500/40 pl-6 py-1">
                        {t(c)}
                      </li>
                    ))}
                 </ul>
              </section>
           </div>
        </div>

        <button 
          onClick={onReset}
          className="w-full h-18 bg-white border-2 border-stone-200 text-stone-800 rounded-3xl font-black active:scale-95 transition-all uppercase tracking-[0.3em] text-[12px] shadow-lg hover:bg-stone-50 flex items-center justify-center gap-3"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          Reset Inquiry / 重新开始
        </button>
      </div>

      <footer className="mt-20 text-center text-stone-300 pb-12">
        <div className="h-px w-16 bg-stone-200 mx-auto mb-8"></div>
        <p className="text-[10px] uppercase tracking-[0.6em] font-black mb-3">Philosophical Laboratory</p>
        <p className="text-[10px] opacity-40 font-serif italic max-w-[200px] mx-auto leading-relaxed">
          “Know Thyself, And You Shall Know The Universe.”
        </p>
      </footer>
    </div>
  );
};

export default ResultView;
