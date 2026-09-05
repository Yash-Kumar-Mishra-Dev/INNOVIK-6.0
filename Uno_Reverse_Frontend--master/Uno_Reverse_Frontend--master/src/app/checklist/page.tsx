import { PortalHeader } from '@/components/PortalHeader';
import { PublicSidebar } from '@/components/PublicSidebar';
import React from 'react';

export default function Checklist() {
  return (
    <>

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="72H SURVIVAL KIT" />

  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <PublicSidebar activePage="checklist" />

    {/* MAIN CHECKLIST */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto max-w-4xl mx-auto w-full">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Household 72-Hour Disaster Preparedness Checklist</h1>
          <p className="text-xs text-slate-500">Check off items packed in your waterproof grab-bag. Progress persists automatically in local storage.</p>
        </div>
        <button className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5 shadow">
          <span>Print Physical Copy</span>
        </button>
      </div>

      {/* PROGRESS BAR */}
      <div className="p-5 rounded-2xl glass-card space-y-2">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-slate-700 dark:text-slate-300">Readiness Score</span>
          <span id="progress-percent" className="text-emerald-600 font-mono text-sm">0% Complete</span>
        </div>
        <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div id="progress-bar-fill" className="h-full bg-emerald-500 rounded-full transition-all duration-300" style={{"width":"0%"}}></div>
        </div>
      </div>

      {/* CHECKLIST ITEMS */}
      <div className="space-y-3">
        
        <label className="flex items-start gap-3 p-4 rounded-xl glass-card cursor-pointer hover:border-emerald-500 transition">
          <input type="checkbox" className="check-item w-4 h-4 mt-0.5 rounded accent-emerald-500" />
          <div className="text-xs">
            <span className="font-bold text-slate-900 dark:text-white">Drinking Water (3 Litres per person / day)</span>
            <p className="text-slate-500 mt-0.5">Stored in sealed food-grade plastic bottles, plus chlorine water purification tablets.</p>
          </div>
        </label>

        <label className="flex items-start gap-3 p-4 rounded-xl glass-card cursor-pointer hover:border-emerald-500 transition">
          <input type="checkbox" className="check-item w-4 h-4 mt-0.5 rounded accent-emerald-500" />
          <div className="text-xs">
            <span className="font-bold text-slate-900 dark:text-white">Non-Perishable Food (Chira, Pitha, Biscuits, Energy Bars)</span>
            <p className="text-slate-500 mt-0.5">High-calorie dry foods that require zero cooking or electricity.</p>
          </div>
        </label>

        <label className="flex items-start gap-3 p-4 rounded-xl glass-card cursor-pointer hover:border-emerald-500 transition">
          <input type="checkbox" className="check-item w-4 h-4 mt-0.5 rounded accent-emerald-500" />
          <div className="text-xs">
            <span className="font-bold text-slate-900 dark:text-white">Waterproof Pouch with Identity Documents</span>
            <p className="text-slate-500 mt-0.5">Aadhaar cards, land records, bank passbooks, medical prescriptions in double-sealed ziploc.</p>
          </div>
        </label>

        <label className="flex items-start gap-3 p-4 rounded-xl glass-card cursor-pointer hover:border-emerald-500 transition">
          <input type="checkbox" className="check-item w-4 h-4 mt-0.5 rounded accent-emerald-500" />
          <div className="text-xs">
            <span className="font-bold text-slate-900 dark:text-white">Battery Torch / Flashlight + Extra Batteries</span>
            <p className="text-slate-500 mt-0.5">Essential for night rescue boat signalling and roof extractions.</p>
          </div>
        </label>

        <label className="flex items-start gap-3 p-4 rounded-xl glass-card cursor-pointer hover:border-emerald-500 transition">
          <input type="checkbox" className="check-item w-4 h-4 mt-0.5 rounded accent-emerald-500" />
          <div className="text-xs">
            <span className="font-bold text-slate-900 dark:text-white">First Aid Kit &amp; Essential Chronic Medications</span>
            <p className="text-slate-500 mt-0.5">Bandages, antiseptic solution, paracetamol, ORS packets, insulin, and blood pressure pills.</p>
          </div>
        </label>

        <label className="flex items-start gap-3 p-4 rounded-xl glass-card cursor-pointer hover:border-emerald-500 transition">
          <input type="checkbox" className="check-item w-4 h-4 mt-0.5 rounded accent-emerald-500" />
          <div className="text-xs">
            <span className="font-bold text-slate-900 dark:text-white">Whistle for Distress Signalling</span>
            <p className="text-slate-500 mt-0.5">A whistle travels 3x farther than human voice over flood roar without exhausting your vocal cords.</p>
          </div>
        </label>

        <label className="flex items-start gap-3 p-4 rounded-xl glass-card cursor-pointer hover:border-emerald-500 transition">
          <input type="checkbox" className="check-item w-4 h-4 mt-0.5 rounded accent-emerald-500" />
          <div className="text-xs">
            <span className="font-bold text-slate-900 dark:text-white">Fully Charged Power Bank (10,000+ mAh)</span>
            <p className="text-slate-500 mt-0.5">Keeps your smartphone operational to receive CAP cellular emergency broadcasts.</p>
          </div>
        </label>

      </div>
    </main>
  </div>

    </>
  );
}