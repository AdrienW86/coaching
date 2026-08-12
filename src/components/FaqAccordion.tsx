"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                <span className="text-base font-bold text-slate-950">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-indigo-600" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-slate-600 border-t border-slate-100 mt-2 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}