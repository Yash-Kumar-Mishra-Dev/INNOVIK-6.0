import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ResponderSidebar } from '@/components/ResponderSidebar';

import Link from 'next/link';

export default function Comms() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="TACTICAL RADIO" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ResponderSidebar activePage="comms" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ResponderSidebar activePage="comms" />

    {/* MAIN COMMS CONSOLE */}
    <main className="flex-1 p-4 lg:p-6 space-y-5 overflow-y-auto flex flex-col">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Encrypted Emergency Radio &amp; Incident Mesh</h1>
          <p className="text-xs text-slate-500">AES-256 VHF Radio Repeater link + CDAC Cellular Bridge Active</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Mesh Frequency: 156.800 MHz (Ch 16)</span>
          </span>
        </div>
      </div>

      {/* 3 ACTIVE CHANNELS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3.5 rounded-2xl glass-card">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
            <span>Channel 1: Tri-Services &amp; IAF</span>
            <span className="text-emerald-500 font-mono font-bold">14 Active</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Air-to-ground helicopter airdrop coordinate synchronization.</p>
        </div>
        <div className="p-3.5 rounded-2xl glass-card">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
            <span>Channel 2: NDRF Boat Squads</span>
            <span className="text-blue-500 font-mono font-bold">28 Active</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Zodiac amphibious rescue boats across Majuli &amp; Barpeta.</p>
        </div>
        <div className="p-3.5 rounded-2xl glass-card">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
            <span>Channel 3: Medical Triage</span>
            <span className="text-red-500 font-mono font-bold">9 Active</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Emergency dispatch for critical maternal and elderly extractions.</p>
        </div>
      </div>

      {/* CHAT STREAM */}
      <div className="flex-1 glass-card rounded-2xl p-4 flex flex-col justify-between space-y-4 min-h-[360px]">
        <div id="messages-container" className="space-y-3 overflow-y-auto max-h-[420px] text-xs">
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 max-w-xl">
            <div className="flex items-center justify-between font-mono font-bold text-[10px] text-blue-600 dark:text-blue-400 mb-1">
              <span>NDRF SQUAD ALPHA (Boat #4)</span>
              <span>10:14 AM</span>
            </div>
            <p>Arrived at Village X near embankment. Extracted 8 elderly residents. En route to Guwahati Shelter #2.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 max-w-xl">
            <div className="flex items-center justify-between font-mono font-bold text-[10px] text-amber-600 dark:text-amber-400 mb-1">
              <span>IAF HELICOPTER (Mi-17 #3)</span>
              <span>10:18 AM</span>
            </div>
            <p>Airdrop of 500 food packets completed over isolated school roof in Majuli. Returning to base for fuel.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 max-w-xl">
            <div className="flex items-center justify-between font-mono font-bold text-[10px] text-emerald-600 dark:text-emerald-400 mb-1">
              <span>DISTRICT MAGISTRATE (Barpeta)</span>
              <span>10:22 AM</span>
            </div>
            <p>Shelter #4 reached 92% capacity. Divert upcoming buses toward secondary relief camp at Higher Secondary School.</p>
          </div>
        </div>

        {/* COMPOSE */}
        <form className="flex gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
          <input type="text" id="comms-input" placeholder="Type tactical emergency dispatch message..." className="flex-1 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs focus:outline-none focus:border-teal-500" />
          <button type="submit" className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md">
            Transmit Over Radio
          </button>
        </form>
      </div>
    </main>
  </div>

  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
