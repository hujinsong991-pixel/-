
import React from 'react';
import { Question, Option, Language } from '../types';

interface QuestionCardProps {
  lang: Language;
  question: Question;
  selectedOption?: Option;
  onSelect: (option: Option) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  lang,
  question, 
  selectedOption, 
  onSelect
}) => {
  const options = [Option.A, Option.B, Option.C, Option.D];
  const t = (obj: any) => obj[lang] || obj['zh'] || '';

  return (
    <div key={question.id} className="animate-fade-in flex flex-col">
      <div className="mb-12">
        <h2 className="text-2xl font-serif font-extrabold text-stone-800 leading-[1.5] tracking-tight">
          {t(question.text)}
        </h2>
        <div className="w-10 h-1.5 bg-stone-900 mt-8 rounded-full opacity-20 shadow-sm"></div>
      </div>
      
      <div className="space-y-4">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`w-full p-6 rounded-[1.25rem] text-left border-2 transition-all duration-300 flex items-center gap-5 group relative
              ${selectedOption === opt 
                ? 'bg-stone-900 border-stone-900 text-white shadow-2xl scale-[1.03] z-10' 
                : 'bg-white border-stone-100 text-stone-600 active:border-stone-300 active:bg-stone-50 hover:border-stone-200 shadow-sm'
              }`}
          >
            <span className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs font-black transition-all shrink-0
              ${selectedOption === opt ? 'bg-white/10 text-white rotate-6' : 'bg-stone-50 text-stone-300'}
            `}>
              {opt}
            </span>
            <span className="text-lg font-bold leading-tight">{t(question.options[opt])}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
