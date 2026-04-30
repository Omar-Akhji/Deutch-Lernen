"use client";

import { useState } from "react";
import { Thema } from "../model/types";
import { getCategoryClasses } from "../lib/categoryConfig";

interface ThemaCardProps {
  thema: Thema;
}

export function ThemaCard({ thema }: ThemaCardProps) {
  const [activeTab, setActiveTab] = useState<"pro" | "con" | "text">(
    thema.isTextOnly ? "text" : "pro",
  );

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5">
      <div className="mbe-4 flex items-start justify-between">
        <div>
          <span
            className={`mbe-2 inline-block rounded-full px-2.5 pbs-0.5 pbe-0.5 text-xs font-semibold tracking-wider uppercase ${getCategoryClasses(thema.cat)}`}
          >
            {thema.cat}
          </span>
          <h3 className="text-sm font-bold text-white transition-colors group-hover:text-amber-400 tablet:text-base">
            {thema.label}
          </h3>
        </div>
      </div>

      <div className="mb-4 flex gap-1 rounded-full bg-black/20 p-1">
        {!thema.isTextOnly && (
          <>
            <button
              onClick={() => setActiveTab("pro")}
              className={`flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all tablet:text-sm ${
                activeTab === "pro"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              Vorteile
            </button>
            <button
              onClick={() => setActiveTab("con")}
              className={`flex-1 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                activeTab === "con"
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              Nachteile
            </button>
          </>
        )}
        {thema.isTextOnly && (
          <button className="flex-1 rounded-full bg-amber-500 px-3 py-1.5 text-xs font-medium text-white tablet:text-sm">
            Mustertext
          </button>
        )}
      </div>

      <div className="min-h-30 animate-in duration-300 fade-in slide-in-from-bottom-2">
        {activeTab === "pro" && thema.pro && (
          <ul className="space-y-3">
            {thema.pro.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-xs leading-relaxed text-slate-300 tablet:text-sm"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                {point}
              </li>
            ))}
          </ul>
        )}
        {activeTab === "con" && thema.con && (
          <ul className="space-y-3">
            {thema.con.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-xs leading-relaxed text-slate-300 tablet:text-sm"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                {point}
              </li>
            ))}
          </ul>
        )}
        {(activeTab === "text" || thema.isTextOnly) && thema.text && (
          <p className="border-l-2 border-amber-500/30 py-1 pl-4 text-xs leading-relaxed text-slate-300 italic tablet:text-sm">
            &quot;{thema.text}&quot;
          </p>
        )}
      </div>

      <div className="mbs-6 flex justify-end border-bs border-white/5 pbs-4 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="font-mono text-[10px] text-slate-500 uppercase">
          Zertifikat B1 Topic #{thema.id}
        </span>
      </div>
    </div>
  );
}
