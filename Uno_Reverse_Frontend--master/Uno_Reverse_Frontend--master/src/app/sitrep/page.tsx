import { PortalHeader } from '@/components/PortalHeader';
import { ResponderSidebar } from '@/components/ResponderSidebar';

import React from 'react';
import Link from 'next/link';

export default function Sitrep() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="SITREP GENERATOR" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ResponderSidebar activePage="sitrep" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ResponderSidebar activePage="sitrep" />

    {/* MAIN SITREP FORM & PREVIEW */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto max-w-4xl mx-auto w-full">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Field Situation Report (SitRep) Generator</h1>
          <p className="text-xs text-slate-500">Standard operating procedure for operational sign-off submitted to District Magistrate and NDMA.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect width="12" height="8" x="6" y="14"></rect></svg>
          <span>Print / Save Official SitRep PDF</span>
        </button>
      </div>

      {/* SITREP DOCUMENT PAPER */}
      <div className="p-8 rounded-2xl glass-card shadow-lg space-y-6 text-xs text-slate-800 dark:text-slate-200">
        <div className="text-center pb-4 border-b-2 border-slate-900 dark:border-slate-100 space-y-1">
          <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Government of India • National Disaster Management Authority</div>
          <h2 className="text-lg font-black uppercase text-slate-900 dark:text-white">TACTICAL FIELD SITUATION REPORT (SITREP)</h2>
          <div className="text-[11px] font-mono text-emerald-600 font-bold">REPORT NO: NDRF-BN1-2025-0518-01 • CLASSIFICATION: OPERATIONAL RESTRICTED</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-[11px]">
          <div><span className="text-slate-400">Reporting Unit:</span><div className="font-bold">1st Bn NDRF</div></div>
          <div><span className="text-slate-400">Sector:</span><div className="font-bold">Barpeta / Majuli</div></div>
          <div><span className="text-slate-400">Period:</span><div className="font-bold">Past 24 Hours</div></div>
          <div><span className="text-slate-400">Weather:</span><div className="font-bold text-amber-500">Heavy Inundation</div></div>
        </div>

        {/* Section 1 */}
        <div className="space-y-2">
          <h3 className="font-black text-sm uppercase text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">1. Summary of Rescue Operations</h3>
          <p className="leading-relaxed">Zodiac Boat Squad Alpha, Bravo, and Charlie conducted 48 operational sorties across inundated rural settlements. Total 1,240 individuals successfully extracted from submerged rooftops, tree canopies, and cutoff earthen embankments.</p>
          <div className="grid grid-cols-3 gap-3 pt-2 text-center">
            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800"><div className="text-lg font-black text-emerald-600 font-mono">1,240</div><div className="text-[10px] text-slate-500">Rescued Alive</div></div>
            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800"><div className="text-lg font-black text-blue-600 font-mono">312</div><div className="text-[10px] text-slate-500">Children &amp; Elderly</div></div>
            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800"><div className="text-lg font-black text-purple-600 font-mono">0</div><div className="text-[10px] text-slate-500">Rescuer Casualties</div></div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-2">
          <h3 className="font-black text-sm uppercase text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">2. Equipment &amp; Resource Status</h3>
          <p className="leading-relaxed">6 Inflatable Motor Boats (IRB) operational. 2 boats suffered minor propeller damage due to submerged barbed wire at Sector 4; repaired by field mechanics within 45 minutes.</p>
        </div>

        {/* Section 3 */}
        <div className="space-y-2">
          <h3 className="font-black text-sm uppercase text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">3. Urgent Logistic Requirements for Next 12 Hours</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>500 litres of 2-stroke outboard motor petrol for nocturnal patrol.</li>
            <li>60 waterproof LED searchlights with spare lithium batteries.</li>
            <li>300 halogen water purification kit pouches for cutoff hamlets.</li>
          </ul>
        </div>

        {/* Sign-Off */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-end font-mono text-xs">
          <div>
            <div>Transmitted via: <b>Encrypted Radio Link</b></div>
            <div>Time: <b>18 May 2025, 11:30 AM IST</b></div>
          </div>
          <div className="text-right">
            <div className="font-bold text-slate-900 dark:text-white underline">Inspector S. Bora</div>
            <div className="text-[11px] text-slate-500">Squad Leader, NDRF Task Force 1</div>
          </div>
        </div>
      </div>
    </main>
  </div>

  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
