import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ApexSidebar } from '@/components/ApexSidebar';

import Link from 'next/link';

export default function Infrastructure() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="CRITICAL INFRASTRUCTURE" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ApexSidebar activePage="infrastructure" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ApexSidebar activePage="infrastructure" />

    {/* MAIN INFRASTRUCTURE DASHBOARD */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">State Critical Lifeline Infrastructure Grid</h1>
          <p className="text-xs text-slate-500">Structural health monitoring for major hydroelectric dams, bridges, substations, and airports.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md">
          Run Structural Sonar Check
        </button>
      </div>

      {/* 4 INFRASTRUCTURE ASSETS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Saraighat Bridge */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-600">RAIL &amp; ROAD ARTERY</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">100% OPERATIONAL</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Saraighat Bridge &amp; New Saraighat Rail Link</h3>
          <p className="text-xs text-slate-500">Pier scour sensors indicate acceptable riverbed sedimentation. High-water level clearance at 8.2m below rail girder.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Traffic Load: <b>Essential Military Convoys Only</b> • Vibration: <b>Normal (0.02g)</b></div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-xs font-bold transition">
            View Pier Scour Telemetry
          </button>
        </div>

        {/* Ranganadi Dam */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-600">HYDROELECTRIC DAM</span>
            <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-[10px] font-bold">CONTROLLED RELEASE ACTIVE</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Ranganadi Hydro Project (NEEPCO Dam)</h3>
          <p className="text-xs text-slate-500">Reservoir storage at 94.2% of Full Reservoir Level (FRL). Controlled spillway discharge of 450 m³/s initiated with 4-hour downstream siren warning.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Discharge Rate: <b>450 m³/s</b> • Downstream Sirens: <b>Sounded</b></div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white text-xs font-bold transition">
            Trigger Downstream Siren
          </button>
        </div>

        {/* Power Substation */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-600">ELECTRICAL GRID</span>
            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px] font-bold">SUB-ISLANDED</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">400 kV Samaguri Power Grid Substation</h3>
          <p className="text-xs text-slate-500">Flood protection dyke successfully holding back waters. Auxiliary diesel generators primed to ensure hospitals and pumping stations maintain uninterrupted power.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Dyke Clearance: <b>+1.2m</b> • Reserve Fuel: <b>96 hours</b></div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-xs font-bold transition">
            Test Auxiliary Gensets
          </button>
        </div>

        {/* Telecommunication Towers */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-red-600">CELLULAR TOWERS</span>
            <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-[10px] font-bold">18 OF 120 TOWERS DOWN</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Barpeta &amp; Majuli Cellular Network Grid</h3>
          <p className="text-xs text-slate-500">18 cell towers submerged or without grid power. 4 mobile Cell on Wheels (COW) satellite trailer vans dispatched by Department of Telecommunications.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">COW Vans En Route: <b>4 Units</b> • Satellite Backhaul: <b>Active</b></div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-red-600 hover:text-white text-xs font-bold transition">
            Deploy Mobile COW Van
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
