import { PortalHeader } from '@/components/PortalHeader';
import { GovSidebar } from '@/components/GovSidebar';

import React from 'react';
import Link from 'next/link';

export default function AiPredictions() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="AI RISK TELEMETRY" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <GovSidebar activePage="ai-predictions" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <GovSidebar activePage="ai-predictions" />

    {/* MAIN CONTENT */}
    <main className="flex-1 p-4 lg:p-6 space-y-6 overflow-y-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">AI Flood Inundation &amp; Rainfall Anomaly Models</h1>
          <p className="text-xs text-slate-500">Continuous hydrological inference on 72-hour precipitation telemetry</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md">
          Trigger Deep Inference
        </button>
      </div>

      {/* 3 AI PREDICTIVE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl glass-card space-y-2">
          <div className="text-[10px] font-mono font-bold text-red-500 uppercase">SURGE PROBABILITY</div>
          <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">91.4%</div>
          <p className="text-xs text-slate-500">Majuli lowlands predicted to witness +0.75m crest in the next 18 hours.</p>
        </div>
        <div className="p-4 rounded-2xl glass-card space-y-2">
          <div className="text-[10px] font-mono font-bold text-amber-500 uppercase">EMBANKMENT RISK SCORE</div>
          <div className="text-3xl font-black text-amber-500 font-mono">CRITICAL</div>
          <p className="text-xs text-slate-500">Barpeta earthen levee sector 4 soil saturation reaches 98.2% capacity.</p>
        </div>
        <div className="p-4 rounded-2xl glass-card space-y-2">
          <div className="text-[10px] font-mono font-bold text-emerald-500 uppercase">EARLY WARNING LEAD TIME</div>
          <div className="text-3xl font-black text-emerald-500 font-mono">14.6 hrs</div>
          <p className="text-xs text-slate-500">Time window available for mass evacuation before high-water threshold.</p>
        </div>
      </div>

      {/* ANOMALY DETECTIONS TABLE */}
      <div className="p-5 rounded-2xl glass-card space-y-4">
        <div className="font-bold text-sm text-slate-900 dark:text-white">Active IoT Sensor Anomaly Flags (Z-Score &gt; 2.5)</div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="text-[11px] uppercase bg-slate-100 dark:bg-slate-800/60 text-slate-500 font-mono">
              <tr>
                <th className="p-3">Sensor Node</th>
                <th className="p-3">River Basin</th>
                <th className="p-3">Reading</th>
                <th className="p-3">Z-Score Deviation</th>
                <th className="p-3">AI Recommendation</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-mono font-bold text-slate-900 dark:text-white">IOT-BRP-09</td>
                <td className="p-3">Barpeta Southern Bend</td>
                <td className="p-3 font-mono text-red-500 font-bold">142 mm / 3h</td>
                <td className="p-3 font-mono text-red-500 font-bold">+3.84 σ</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Immediate Siren &amp; Cell Broadcast trigger</td>
                <td className="p-3"><button className="px-2.5 py-1 rounded bg-red-600 text-white font-bold text-[10px]">Trigger Alert</button></td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-slate-900 dark:text-white">IOT-MAJ-04</td>
                <td className="p-3">Majuli Kamalabari</td>
                <td className="p-3 font-mono text-amber-500 font-bold">88.4 m³/s</td>
                <td className="p-3 font-mono text-amber-500 font-bold">+2.92 σ</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Pre-position 2 extra NDRF inflatable motor boats</td>
                <td className="p-3"><button className="px-2.5 py-1 rounded bg-amber-600 text-white font-bold text-[10px]">Pre-position</button></td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-slate-900 dark:text-white">IOT-DHM-12</td>
                <td className="p-3">Dhemaji Subansiri</td>
                <td className="p-3 font-mono text-emerald-500 font-bold">Flow rate: 1.2 m/s</td>
                <td className="p-3 font-mono text-emerald-500 font-bold">+0.81 σ</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">Normal seasonal baseline fluctuation</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">STABLE</span></td>
              </tr>
            </tbody>
          </table>
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
