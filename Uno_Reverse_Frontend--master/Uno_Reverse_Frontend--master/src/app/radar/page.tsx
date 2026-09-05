import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import Link from 'next/link';

export default function Radar() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="DOPPLER RADAR" />

  



  
  {/* MAIN RADAR WORKSPACE */}
  <main className="max-w-[1720px] mx-auto p-4 lg:p-6 flex-1 flex flex-col space-y-4">
    
    {/* SUB-BAR WITH STATE SELECTOR */}
    <div className="p-4 rounded-2xl glass-card flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <span>Live Doppler Radar &amp; Satellite Cloud Telemetry</span>
          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-500 text-[10px] font-mono font-bold animate-pulse">● LIVE SATELLITE FEED</span>
        </h1>
        <p className="text-xs text-slate-500">Select any of India's 28 States or 8 Union Territories to immediately center radar observations.</p>
      </div>

      {/* 36 States Interactive Dropdown */}
      <div className="flex items-center gap-3">
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Select Indian State / UT:</label>
        <select id="radar-state-select" className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold focus:ring-2 focus:ring-cyan-500 outline-none">
          {/* Populated dynamically by js/india-states.js */}
        </select>
      </div>
    </div>

    {/* 4 RADAR KPIS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div className="p-3.5 rounded-2xl glass-card space-y-1">
        <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Current Station</div>
        <div id="radar-station-name" className="font-bold text-sm text-cyan-600 dark:text-cyan-400">Assam (Guwahati)</div>
        <div className="text-[11px] text-slate-500 font-mono">Doppler S-Band 2.8 GHz</div>
      </div>
      <div className="p-3.5 rounded-2xl glass-card space-y-1">
        <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Precipitation Rate</div>
        <div id="radar-rainfall" className="font-bold text-sm text-slate-900 dark:text-white font-mono">184 mm / 24h</div>
        <div className="text-[11px] text-red-500 font-bold">● High Inundation Risk</div>
      </div>
      <div className="p-3.5 rounded-2xl glass-card space-y-1">
        <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Primary River Basin</div>
        <div id="radar-river" className="font-bold text-sm text-slate-900 dark:text-white font-mono">Brahmaputra / Barak</div>
        <div className="text-[11px] text-amber-500 font-bold">Above Danger Mark +0.82m</div>
      </div>
      <div className="p-3.5 rounded-2xl glass-card space-y-1">
        <div className="text-[10px] uppercase font-mono font-bold text-slate-400">NDRF Readiness</div>
        <div id="radar-ndrf" className="font-bold text-sm text-emerald-600 dark:text-emerald-400 font-mono">5 Battalions Active</div>
        <div className="text-[11px] text-slate-500 font-mono">Helpline: <b id="radar-helpline" className="text-slate-700 dark:text-slate-300">1079</b></div>
      </div>
    </div>

    {/* MAP CANVAS */}
    <div className="flex-1 min-h-[500px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 relative shadow-inner">
      <div id="radar-map" className="w-full h-full min-h-[500px]"></div>
      
      {/* RADAR OVERLAY LEGEND */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-[11px] font-mono text-white shadow-xl space-y-1">
        <div className="font-bold text-slate-300 text-xs">Radar Reflectivity (dBZ)</div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-3 bg-blue-500 rounded-sm"></span> 10-20 (Light)
          <span className="w-4 h-3 bg-green-500 rounded-sm ml-2"></span> 20-35 (Moderate)
          <span className="w-4 h-3 bg-yellow-500 rounded-sm ml-2"></span> 35-50 (Heavy)
          <span className="w-4 h-3 bg-red-600 rounded-sm ml-2"></span> 50+ (Severe Cloudburst)
        </div>
      </div>
    </div>

  </main>

  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
