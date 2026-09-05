import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ApexSidebar } from '@/components/ApexSidebar';

import Link from 'next/link';

export default function RiverGauges() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="CWC RIVER GAUGES" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ApexSidebar activePage="river-gauges" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ApexSidebar activePage="river-gauges" />

    {/* MAIN RIVER GAUGES */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Central Water Commission (CWC) River Gauges Telemetry</h1>
          <p className="text-xs text-slate-500">Live ultrasonic river level telemetry across Brahmaputra and 5 major eastern tributaries.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-md">
          Refresh Hydro Sensors
        </button>
      </div>

      {/* GAUGES TABLE */}
      <div className="p-5 rounded-2xl glass-card space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="text-[11px] uppercase bg-slate-100 dark:bg-slate-800/60 text-slate-500 font-mono">
              <tr>
                <th className="p-3">River &amp; Monitoring Station</th>
                <th className="p-3">Warning Level</th>
                <th className="p-3">Danger Level</th>
                <th className="p-3">Current Water Level</th>
                <th className="p-3">Deviation</th>
                <th className="p-3">Trend (24h)</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
              <tr className="bg-red-500/5">
                <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">Brahmaputra at Dibrugarh</td>
                <td className="p-3">104.24 m</td>
                <td className="p-3">105.70 m</td>
                <td className="p-3 font-black text-red-500 text-sm">107.54 m</td>
                <td className="p-3 text-red-500 font-bold">+1.84 m ABOVE DANGER</td>
                <td className="p-3 text-red-500">▲ Rising (+4 cm/h)</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold text-[10px]">EXTREME DANGER</span></td>
              </tr>
              <tr className="bg-red-500/5">
                <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">Brahmaputra at Guwahati (DC Court)</td>
                <td className="p-3">48.68 m</td>
                <td className="p-3">49.68 m</td>
                <td className="p-3 font-black text-red-500 text-sm">50.82 m</td>
                <td className="p-3 text-red-500 font-bold">+1.14 m ABOVE DANGER</td>
                <td className="p-3 text-red-500">▲ Rising (+2 cm/h)</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold text-[10px]">EXTREME DANGER</span></td>
              </tr>
              <tr className="bg-amber-500/5">
                <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">Subansiri at Badatighat</td>
                <td className="p-3">82.53 m</td>
                <td className="p-3">84.00 m</td>
                <td className="p-3 font-black text-amber-500 text-sm">84.22 m</td>
                <td className="p-3 text-amber-500 font-bold">+0.22 m Above Danger</td>
                <td className="p-3 text-slate-400">► Steady</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold text-[10px]">SEVERE WARNING</span></td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">Kopili at Kampur</td>
                <td className="p-3">59.50 m</td>
                <td className="p-3">60.50 m</td>
                <td className="p-3 font-bold text-emerald-500 text-sm">59.10 m</td>
                <td className="p-3 text-emerald-500 font-bold">-1.40 m Below Danger</td>
                <td className="p-3 text-emerald-500">▼ Falling (-1 cm/h)</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">NORMAL</span></td>
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
