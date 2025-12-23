
import React, { useState } from 'react';
import { QUESTIONS, UI_STRINGS, QUOTES } from './constants';
import { Option, Language } from './types';
import QuestionCard from './components/QuestionCard';
import ResultView from './components/ResultView';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  const [currentStep, setCurrentStep] = useState<number>(-1); 
  const [answers, setAnswers] = useState<Record<number, Option>>({});
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const t = (obj: any) => obj[lang] || obj['zh'] || '';

  const startQuiz = () => setCurrentStep(0);
  
  const handleAnswer = (questionId: number, option: Option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const nextStep = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setDirection('next');
      setCurrentStep(prev => prev + 1);
    } else if (Object.keys(answers).length === QUESTIONS.length) {
      setCurrentStep(QUESTIONS.length);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection('prev');
      setCurrentStep(prev => prev - 1);
    }
  };

  if (currentStep === -1) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative overflow-hidden bg-[#fcfbf7]">
        {/* Background Image: The Raft of the Medusa (faded watermark style) */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply transition-opacity duration-1000 grayscale"
          style={{ 
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Subtle Vignette for light theme */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-stone-100/30 to-[#fcfbf7]"></div>
        
        <div className="z-10 w-full max-w-sm">
          {/* Language Switcher */}
          <div className="flex justify-center gap-4 mb-14">
            {(['zh', 'en', 'ja'] as Language[]).map(l => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border transition-all duration-300 ${lang === l ? 'bg-stone-900 text-white border-stone-900 shadow-lg' : 'text-stone-400 border-stone-200 hover:border-stone-400'}`}
              >
                {l}
              </button>
            ))}
          </div>

          <h1 className="text-4xl font-serif text-stone-900 mb-4 font-black tracking-tighter leading-tight uppercase">
            {t(UI_STRINGS.title)}<br/>
            <span className="text-stone-400 font-light text-2xl lowercase tracking-normal italic">{t(UI_STRINGS.subtitle)}</span>
          </h1>
          
          <div className="h-px w-24 bg-stone-200 mx-auto mb-12"></div>
          
          <p className="text-stone-500 mb-12 text-lg font-serif italic leading-relaxed px-4">
            “吾爱吾师，吾尤爱真理。”
          </p>

          <button 
            onClick={startQuiz}
            className="w-full h-16 bg-stone-900 text-white rounded-xl text-lg font-bold shadow-2xl active:scale-95 transition-all duration-300 hover:bg-stone-800 uppercase tracking-widest"
          >
            {t(UI_STRINGS.start)}
          </button>
          
          <p className="mt-14 text-stone-400 text-[10px] tracking-[0.4em] uppercase font-semibold">
            Socratic Intelligence Module
          </p>
        </div>
      </div>
    );
  }

  if (currentStep === QUESTIONS.length) {
    return <ResultView lang={lang} answers={answers} onReset={() => {
      setAnswers({});
      setCurrentStep(-1);
    }} />;
  }

  const currentQuestion = QUESTIONS[currentStep];
  const progress = (currentStep / QUESTIONS.length) * 100;
  const currentQuote = QUOTES[currentStep % QUOTES.length];

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col max-w-[750px] mx-auto overflow-hidden">
      <header className="px-6 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-stone-100">
        <div className="flex justify-between items-end mb-4">
           <div className="flex items-baseline gap-1">
             <span className="text-4xl font-serif text-stone-900 font-bold">{currentStep + 1}</span>
             <span className="text-stone-300 text-sm font-bold">/ {QUESTIONS.length}</span>
           </div>
           <span className="text-[11px] text-stone-400 font-black tracking-[0.3em] uppercase">
             {t(UI_STRINGS.title)}
           </span>
        </div>
        <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
           <div 
             className="bg-stone-900 h-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(0,0,0,0.1)]"
             style={{ width: `${progress}%` }}
           />
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-start p-6 pt-12 pb-32 overflow-y-auto">
        <QuestionCard 
          lang={lang}
          question={currentQuestion}
          selectedOption={answers[currentQuestion.id]}
          onSelect={(opt) => handleAnswer(currentQuestion.id, opt)}
        />
        
        {/* Philosopher Quote Deco */}
        <div className="mt-20 p-8 border-t border-stone-100 text-center opacity-30 select-none animate-fade-in transition-all">
           <p className="font-serif italic text-stone-700 text-base leading-relaxed mb-3">
             “{t(currentQuote.text)}”
           </p>
           <span className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-500">— {currentQuote.author}</span>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-xl flex gap-4 max-w-[750px] mx-auto z-20 border-t border-stone-100 pb-safe">
        <button 
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`h-16 w-16 flex items-center justify-center rounded-2xl border transition-all duration-300 ${currentStep === 0 ? 'bg-stone-50 border-stone-100 text-stone-200' : 'bg-white border-stone-200 text-stone-600 active:scale-90 hover:bg-stone-50'}`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={nextStep}
          disabled={!answers[currentQuestion.id]}
          className={`flex-1 h-16 rounded-2xl font-bold tracking-[0.2em] uppercase transition-all duration-300 active:scale-[0.98] ${!answers[currentQuestion.id] ? 'bg-stone-100 text-stone-300 cursor-not-allowed' : 'bg-stone-900 text-white shadow-xl shadow-stone-200 hover:bg-stone-800'}`}
        >
          {currentStep === QUESTIONS.length - 1 ? t(UI_STRINGS.submit) : t(UI_STRINGS.next)}
        </button>
      </footer>
    </div>
  );
};

export default App;
