import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ApexSidebar } from '@/components/ApexSidebar';

import Link from 'next/link';

export default function Mobilization() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="TRI-SERVICES MOBILIZATION" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ApexSidebar activePage="mobilization" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ApexSidebar activePage="mobilization" />

    {/* MAIN MOBILIZATION CONSOLE */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Armed Forces &amp; Tri-Services Deployment (Level 3 Emergency)</h1>
          <p className="text-xs text-slate-500">Section 9.1 Authorized: Direct operational command for Eastern Command, Air Force, and Coast Guard.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md">
          Signal Army Eastern Command
        </button>
      </div>

      {/* 3 DEFENSE BRANCH CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Indian Army */}
        <div className="p-6 rounded-2xl glass-card space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-600">INDIAN ARMY (EASTERN CMD)</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">6 Infantry Columns Deployed</h3>
          <p className="text-xs text-slate-500">Operating in Dhemaji, Barpeta, and Majuli for heavy amphibious breach crossing and pontoon bridging.</p>
          <div className="space-y-1 text-xs font-mono text-slate-600 dark:text-slate-400">
            <div>BAUT Assault Boats: <b>48 Units</b></div>
            <div>Engineer Regiments: <b>2 Active</b></div>
          </div>
          <button className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition shadow-md">
            + Authorize Reserve Column
          </button>
        </div>

        {/* Indian Air Force */}
        <div className="p-6 rounded-2xl glass-card space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-cyan-600">INDIAN AIR FORCE (IAF)</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">8 Mi-17 V5 Helicopter Squadrons</h3>
          <p className="text-xs text-slate-500">Continuous food airdrops and critical winch extractions from submerged rooftops in cutoff sectors.</p>
          <div className="space-y-1 text-xs font-mono text-slate-600 dark:text-slate-400">
            <div>Sorties Flown: <b>64 sorties</b></div>
            <div>Rations Dropped: <b>42 Metric Tonnes</b></div>
          </div>
          <button className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs transition shadow-md">
            + Scramble 2 More Mi-17s
          </button>
        </div>

        {/* NDRF & Coast Guard */}
        <div className="p-6 rounded-2xl glass-card space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-600">NDRF &amp; COAST GUARD</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">14 Battalions on Ground</h3>
          <p className="text-xs text-slate-500">210 motorized inflatable boats and 4 high-speed amphibious hovercrafts conducting 24/7 rescue.</p>
          <div className="space-y-1 text-xs font-mono text-slate-600 dark:text-slate-400">
            <div>Rescuers on Ground: <b>1,840</b></div>
            <div>Evacuated Citizens: <b>18,420</b></div>
          </div>
          <button className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-md">
            + Airlift Reserve Battalion
          </button>
        </div>

      </div>
    </main>
  </div>

  <div id="toast" className="fixed bottom-5 right-5 z-50 translate-y-20 opacity-0 transition-all duration-300 pointer-events-none">
    <div className="bg-slate-900 text-white px-4 py-2 rounded-xl shadow-md text-xs font-medium border border-slate-700">
      <span id="toast-msg">Notification</span>
    </div>
  </div>

  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
