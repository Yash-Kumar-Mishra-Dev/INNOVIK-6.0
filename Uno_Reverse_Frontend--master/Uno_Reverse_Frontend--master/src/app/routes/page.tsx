import { PortalHeader } from '@/components/PortalHeader';
import { ResponderSidebar } from '@/components/ResponderSidebar';

import React from 'react';
import Link from 'next/link';

export default function Routes() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="TACTICAL ROUTES" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ResponderSidebar activePage="routes" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ResponderSidebar activePage="routes" />

    {/* MAIN ROUTES CONSOLE */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Navigable Inundation Channels &amp; River Hazards</h1>
          <p className="text-xs text-slate-500">Real-time bathymetric depth profiles and underwater obstruction alerts for Zodiac boat squads.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md">
          Sync Boat GPS Plotters
        </button>
      </div>

      {/* 4 WATER ROUTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Route 1 */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-600">WATER CHANNEL 1 • CLEAR</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">DEPTH: 3.4m</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Brahmaputra Main Stem (Guwahati Pier → North Guwahati)</h3>
          <p className="text-xs text-slate-500">Deep channel unobstructed. Current speed 1.6 m/s. Safe for twin-outboard motor rescue craft and heavy barges.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Saraighat Bridge Clearance: <b>8.2m</b> • Power Cables: <b>Submerged (De-energized)</b></div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-xs font-bold transition">
            Set as Primary Evac Vector
          </button>
        </div>

        {/* Route 2 */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-600">WATER CHANNEL 2 • SUBMERGED WIRES</span>
            <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-[10px] font-bold">DEPTH: 1.8m</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Barpeta Rural Paddy Inundation Corridor</h3>
          <p className="text-xs text-slate-500">Submerged barbed wire fences and electrical distribution poles reported at waypoint [26.31° N, 91.01° E]. Trim outboard engine prop.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Current Speed: <b>2.1 m/s</b> • Craft Allowed: <b>Inflatable Zodiacs with prop guards only</b></div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white text-xs font-bold transition">
            Broadcast Prop Hazard Alert
          </button>
        </div>

        {/* Route 3 */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-600">WATER CHANNEL 3 • SHALLOW WATER</span>
            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px] font-bold">DEPTH: 0.9m</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Majuli Island Eastern Cutoff Silt Channel</h3>
          <p className="text-xs text-slate-500">Sand siltation buildup. Heavy sediment. Motor propeller ingestion hazard. Use paddle or high-clearance hovercraft.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Hovercraft Deployed: <b>2 Units</b> • Stranded Civilians: <b>48</b></div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-xs font-bold transition">
            Deploy Hovercraft Squad
          </button>
        </div>

        {/* Route 4 */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-red-600">WATER CHANNEL 4 • BLOCKED BY TIMBER</span>
            <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-[10px] font-bold">IMPENETRABLE</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Dhemaji Subansiri Confluence Logjam</h3>
          <p className="text-xs text-slate-500">Uprooted trees and bamboo thickets blocking passage. River dredging and timber clearing boat squad requested.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Obstruction Length: <b>140m</b> • Diversion Channel: <b>Available 1.2km North</b></div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-red-600 hover:text-white text-xs font-bold transition">
            Dispatch Clearing Squad
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
