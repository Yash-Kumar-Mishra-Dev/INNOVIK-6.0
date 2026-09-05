import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ResponderSidebar } from '@/components/ResponderSidebar';

import Link from 'next/link';

export default function Evacuation() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="EVACUATION MATRIX" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ResponderSidebar activePage="evacuation" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ResponderSidebar activePage="evacuation" />

    {/* MAIN CONTENT */}
    <main className="flex-1 p-4 lg:p-6 space-y-5 overflow-y-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Active Evacuation Corridors &amp; Transport Fleets</h1>
          <p className="text-xs text-slate-500">Live corridor clearance status for civilian evacuation to high-elevation relief zones</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md">
          Authorize Convoy Green Wave
        </button>
      </div>

      {/* 4 CORRIDOR CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Corridor 1 */}
        <div className="p-4 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-600">CORRIDOR A • CLEAR &amp; SAFE</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">100% OPERATIONAL</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">NH-27 Western Arterial Highway (Guwahati → Boko)</h3>
          <p className="text-xs text-slate-500">Dual carriageway elevated above 100-year flood levels. Escorted bus convoys departing every 15 minutes.</p>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
            <span>Buses Deployed: <b>32</b></span>
            <span>Evacuees Transit: <b>4,810</b></span>
          </div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-orange-600 hover:text-white text-xs font-bold transition">
            + Deploy 10 Additional Buses
          </button>
        </div>

        {/* Corridor 2 */}
        <div className="p-4 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-600">CORRIDOR B • CAUTION ADVISORY</span>
            <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-[10px] font-bold">WATER LEVEL: 0.3m</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">State Highway 2 (Nalbari → Hajo)</h3>
          <p className="text-xs text-slate-500">Partial water logging near bridge culvert #14. Only high-axle military trucks and rescue craft permitted.</p>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
            <span>Military 4x4s: <b>18</b></span>
            <span>Speed Limit: <b>25 km/h</b></span>
          </div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white text-xs font-bold transition">
            Inspect Bridge Clearance
          </button>
        </div>

        {/* Corridor 3 */}
        <div className="p-4 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-600">CORRIDOR C • WATERWAY CHANNEL</span>
            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px] font-bold">BARGE TRANSIT ACTIVE</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Inland Waterways Brahmaputra Route 2 (Majuli Ferry Ghât)</h3>
          <p className="text-xs text-slate-500">Roll-on/roll-off double engine motorized RoPax vessels evacuating cattle, vehicles, and elderly villagers.</p>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
            <span>RoPax Ferries: <b>4 Units</b></span>
            <span>Throughput: <b>850 citizens/trip</b></span>
          </div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-xs font-bold transition">
            Activate Radar Guidance
          </button>
        </div>

        {/* Corridor 4 */}
        <div className="p-4 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-red-600">CORRIDOR D • INUNDATED</span>
            <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-[10px] font-bold">CLOSED TO CIVILIAN TRAFFIC</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Barpeta Rural Link Road #9</h3>
          <p className="text-xs text-slate-500">Embankment breached at km marker 12. Diversion route active via NH-127B. Traffic police diversion active.</p>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
            <span>Breach Depth: <b>1.6m</b></span>
            <span>Diversion Signage: <b>Installed</b></span>
          </div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-red-600 hover:text-white text-xs font-bold transition">
            Send Diversion SMS Alert
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
