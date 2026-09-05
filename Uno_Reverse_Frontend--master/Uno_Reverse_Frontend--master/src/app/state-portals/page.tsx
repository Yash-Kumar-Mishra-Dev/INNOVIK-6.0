import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import Link from 'next/link';

export default function StatePortals() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="STATE PORTALS" />

  



  
  {/* MAIN WORKSPACE */}
  <main className="max-w-[1720px] mx-auto p-4 lg:p-6 flex-1 space-y-6">
    
    {/* HEADER & SEARCH BAR */}
    <div className="p-6 rounded-2xl glass-card flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <span>Pan-India 28 States &amp; 8 Union Territories SDMA Directory</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-500 text-[10px] font-mono font-bold">36 SDMAs ACTIVE</span>
        </h1>
        <p className="text-xs text-slate-500">Official State Disaster Management Authorities directory with 24x7 control room hotlines, active danger ratings, and telemetry.</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
        <div className="relative w-full sm:w-64">
          <svg className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" id="state-search-input" placeholder="Search state, capital, river..." className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          <button id="rf-all" className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold">All (36)</button>
          <button id="rf-severe" className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-red-600 hover:text-white text-slate-700 dark:text-slate-300 font-semibold border border-slate-300 dark:border-slate-700">Severe (4)</button>
          <button id="rf-high" className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-700 dark:text-slate-300 font-semibold border border-slate-300 dark:border-slate-700">High (12)</button>
          <button id="rf-moderate" className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-300 font-semibold border border-slate-300 dark:border-slate-700">Moderate (15)</button>
        </div>
      </div>
    </div>

    {/* STATES GRID */}
    <div id="states-card-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {/* Generated dynamically by script below */}
    </div>

  </main>

  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
