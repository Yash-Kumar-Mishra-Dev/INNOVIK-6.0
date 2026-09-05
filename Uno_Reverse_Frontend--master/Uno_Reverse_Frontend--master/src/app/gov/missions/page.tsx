import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { GovSidebar } from '@/components/GovSidebar';

import Link from 'next/link';

export default function Missions() {
  return (
    <>
      

  {/* TOP HEADER (Bhuvan & Tactical Hybrid) */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="MISSIONS QUEUE" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <GovSidebar activePage="missions" isMobile={true} />



  {/* SUB-BAR WITH FILTERS & SEARCH */}
  <div className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 lg:px-8 py-3 text-xs">
    <div className="max-w-[1720px] mx-auto flex flex-wrap items-center justify-between gap-3">
      
      {/* Search */}
      <div className="flex items-center gap-2 w-full sm:w-72 relative">
        <svg className="w-4 h-4 absolute left-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" id="mission-search" placeholder="Search mission by ID, location, squad..." className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto">
        <button id="btn-filter-all" className="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold text-xs">All Missions (8)</button>
        <button id="btn-filter-in_progress" className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 font-semibold text-xs">In Progress (4)</button>
        <button id="btn-filter-assigned" className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 font-semibold text-xs">Assigned (2)</button>
        <button id="btn-filter-completed" className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 font-semibold text-xs">Completed (2)</button>
      </div>

    </div>
  </div>

  {/* MAIN MISSIONS GRID IN CARD FORMAT */}
  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    <GovSidebar activePage="missions" />
    <main className=" p-4 lg:p-8 flex-1 space-y-6">
    
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Active Search &amp; Rescue Missions Queue</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">Ranked by SRS Section 8.2 Priority Queue Score Formula (Severity + People + Distance + Time + Resources)</p>
      </div>
      <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold" id="mission-count-badge">Displaying 8 Missions</span>
    </div>

    {/* RESPONSIVE CARD GRID (Cards view as requested) */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5" id="missions-grid">
      {/* Dynamically Rendered Missions Cards */}
    </div>

  </main>
  </div>

  {/* PRINTABLE SITREP REPORT MODAL / CONTAINER */}
  <div id="sitrep-print-container" className="hidden fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[2000] p-4 lg:p-12 overflow-y-auto flex items-center justify-center">
    <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full p-8 space-y-5 border border-slate-300 dark:border-slate-700 shadow-md">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <div>
            <h2 className="text-base font-black text-slate-900 dark:text-white">Field Operations Situation Report (SitRep)</h2>
            <p className="text-xs text-slate-500 font-mono">Disaster Preparedness &amp; Response Directorate • Brahmaputra Basin</p>
          </div>
        </div>
        <button className="p-1 rounded-lg text-slate-400 hover:text-slate-600">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div className="space-y-4 text-xs font-mono">
        <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
          <div><b>SitRep ID:</b> SITREP-2025-05-18-01</div>
          <div><b>Generated At:</b> <span id="sitrep-time">18 May 2025, 10:30 AM</span></div>
          <div><b>Active Missions:</b> 6 Active • 2 Completed</div>
          <div><b>Citizens Extracted:</b> 348 Persons</div>
          <div><b>Deployed Units:</b> 8 Zodiac Crafts, 4 Ambulances</div>
          <div><b>Casualties / Critical:</b> 0 Reported</div>
        </div>

        <div className="space-y-2">
          <div className="font-bold text-slate-900 dark:text-white font-sans text-xs">Active High-Priority Missions Summary:</div>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
            <li><b>#M-2025-045:</b> Majuli Rooftop Evacuation — 45 villagers extracted via Zodiac Craft #4. ETA 12 min.</li>
            <li><b>#M-2025-046:</b> Barpeta Primary Health Centre — Critical medical evacuation of pregnant mothers.</li>
            <li><b>#M-2025-047:</b> Dhubri Sandbar Marooned Families — Drone reconnaissance active; boat dispatched.</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
        <button className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs">Close</button>
        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect width="12" height="8" x="6" y="14"></rect></svg>
          <span>Print / Export SitRep</span>
        </button>
      </div>
    </div>
  </div>

  {/* TOAST NOTIFICATION */}
  <div id="toast" className="fixed bottom-5 right-5 z-50 translate-y-20 opacity-0 transition-all duration-300 pointer-events-none">
    <div className="bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-md border border-slate-700 flex items-center gap-2 text-xs font-medium">
      <span id="toast-msg">Mission updated</span>
    </div>
  </div>

  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
