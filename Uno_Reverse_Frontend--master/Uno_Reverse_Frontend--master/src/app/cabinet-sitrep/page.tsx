import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ApexSidebar } from '@/components/ApexSidebar';

import Link from 'next/link';

export default function CabinetSitrep() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="CABINET SITREP" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ApexSidebar activePage="cabinet-sitrep" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ApexSidebar activePage="cabinet-sitrep" />

    {/* MAIN CABINET SITREP CONSOLE */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto max-w-4xl mx-auto w-full">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Cabinet Secretariat Executive Situation Report</h1>
          <p className="text-xs text-slate-500">Classified national intelligence summary for Prime Minister's Office (PMO) and Cabinet Committee on Security (CCS).</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect width="12" height="8" x="6" y="14"></rect></svg>
          <span>Print / Export Cabinet SitRep</span>
        </button>
      </div>

      {/* SITREP DOCUMENT PAPER */}
      <div className="p-8 rounded-2xl glass-card shadow-xl space-y-6 text-xs text-slate-800 dark:text-slate-200">
        <div className="text-center pb-4 border-b-2 border-slate-900 dark:border-slate-100 space-y-1">
          <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-500">Government of India • Cabinet Secretariat (New Delhi)</div>
          <h2 className="text-lg font-black uppercase text-slate-900 dark:text-white">NATIONAL SITUATION REPORT — BRAHMAPUTRA BASIN FLOOD DISASTER</h2>
          <div className="text-[11px] font-mono text-red-500 font-bold">LEVEL 3 NATIONAL DISASTER EMERGENCY • TOP SECRET / OPERATIONAL RECORD</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-[11px]">
          <div><span className="text-slate-400">Date/Time:</span><div className="font-bold">18 May 2025, 11:45 AM</div></div>
          <div><span className="text-slate-400">Affected Population:</span><div className="font-bold text-red-500">1,482,900</div></div>
          <div><span className="text-slate-400">Districts Affected:</span><div className="font-bold">18 Districts</div></div>
          <div><span className="text-slate-400">Relief Camps:</span><div className="font-bold text-emerald-500">482 Active</div></div>
        </div>

        <div className="space-y-3">
          <h3 className="font-black text-sm uppercase text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">1. Strategic Overview &amp; Inundation Severity</h3>
          <p className="leading-relaxed">The Brahmaputra river and its eastern tributaries (Subansiri, Burhidehing, and Kopili) have crested at record high water levels following 72 hours of uninterrupted torrential monsoon precipitation. 18 out of 35 administrative districts are experiencing severe inundation. State Capital Dispur and Guwahati metropolitan area flood defenses remain intact.</p>
        </div>

        <div className="space-y-3">
          <h3 className="font-black text-sm uppercase text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">2. Armed Forces &amp; National Task Force Deployment</h3>
          <p className="leading-relaxed">Under Section 9.1 authorization, 6 Infantry Columns of the Indian Army (Eastern Command, Tezpur IV Corps) have been mobilized with 48 amphibious assault craft. The Indian Air Force (IAF) has flown 64 Mi-17 V5 sorties, airdropping 42 metric tonnes of emergency rations and executing rooftop medical winch rescues. 14 NDRF battalions with 210 motorized inflatable boats operate around the clock.</p>
        </div>

        <div className="space-y-3">
          <h3 className="font-black text-sm uppercase text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">3. Financial Allocations &amp; Direct Benefit Transfer</h3>
          <p className="leading-relaxed">The Prime Minister's Office has sanctioned ₹850 Crore from the National Disaster Relief Fund (NDRF) and State Disaster Response Fund (SDRF). ₹412 Crore has been disbursed directly to District Magistrates via the Public Financial Management System (PFMS). ₹98.4 Crore in immediate ex-gratia compensation has been credited via Aadhaar DBT to 124,000 verified affected households.</p>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-end font-mono text-xs">
          <div>
            <div>Authenticated by: <b>Hon. Union Home Secy / CM Advisor</b></div>
            <div>Clearance: <b>Cabinet Committee on Security (CCS)</b></div>
          </div>
          <div className="text-right">
            <div className="font-bold text-slate-900 dark:text-white">Cabinet Secretariat</div>
            <div className="text-[11px] text-slate-500">Government of India</div>
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
