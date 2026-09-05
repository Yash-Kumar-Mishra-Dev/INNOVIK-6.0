import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ResponderSidebar } from '@/components/ResponderSidebar';

import Link from 'next/link';

export default function Teams() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="SQUAD DEPLOYMENTS" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ResponderSidebar activePage="teams" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ResponderSidebar activePage="teams" />

    {/* MAIN SQUADS TABLE */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Active Rescue Squads &amp; Ground Personnel</h1>
          <p className="text-xs text-slate-500">Live GPS tracking, survivor count, fuel level, and tasking status for all 8 tactical units.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md">
          Refresh Squad Telemetry
        </button>
      </div>

      {/* SQUADS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Squad Alpha */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-600">NDRF SQUAD ALPHA</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">EXTRACTING</span>
          </div>
          <div className="font-bold text-sm text-slate-900 dark:text-white">Lead: Inspector S. Bora (Callsign: Alpha-Lead)</div>
          <p className="text-xs text-slate-500">Operating Zodiac Boat #4 at Barpeta flooded school. 18 victims rescued.</p>
          <div className="space-y-1 text-xs font-mono text-slate-600 dark:text-slate-400">
            <div>GPS: <b>26.16° N, 91.71° E</b></div>
            <div>Fuel: <b>84%</b> • Comms: <b>VHF Ch 16 (100%)</b></div>
          </div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-xs font-bold transition">
            Send Tactical Directive
          </button>
        </div>

        {/* Squad Bravo */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-600">SDRF SQUAD BRAVO</span>
            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px] font-bold">IN TRANSIT</span>
          </div>
          <div className="font-bold text-sm text-slate-900 dark:text-white">Lead: Sub-Inspector P. Gogoi</div>
          <p className="text-xs text-slate-500">Amphibious ARGO 8x8 vehicle transiting toward Majuli relief camp with medical supplies.</p>
          <div className="space-y-1 text-xs font-mono text-slate-600 dark:text-slate-400">
            <div>GPS: <b>26.92° N, 94.21° E</b></div>
            <div>Fuel: <b>92%</b> • Comms: <b>VHF Ch 14</b></div>
          </div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-xs font-bold transition">
            Update Waypoint
          </button>
        </div>

        {/* Squad Charlie */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-purple-600">AIR PATROL CHARLIE</span>
            <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-[10px] font-bold">AIRBORNE</span>
          </div>
          <div className="font-bold text-sm text-slate-900 dark:text-white">Pilot: Sqn Ldr K. Verma (IAF Mi-17)</div>
          <p className="text-xs text-slate-500">Conducting rooftop winch extractions in Dhemaji district. 12 evacuated so far.</p>
          <div className="space-y-1 text-xs font-mono text-slate-600 dark:text-slate-400">
            <div>Altitude: <b>180m AGL</b> • Airspeed: <b>90 kts</b></div>
            <div>Endurance Remaining: <b>1h 45m</b></div>
          </div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white text-xs font-bold transition">
            Authorize Refuel
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
