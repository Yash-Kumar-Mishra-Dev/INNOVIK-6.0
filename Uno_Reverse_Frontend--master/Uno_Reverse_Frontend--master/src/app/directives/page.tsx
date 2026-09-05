import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ApexSidebar } from '@/components/ApexSidebar';

import Link from 'next/link';

export default function Directives() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="NATIONAL DIRECTIVES" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ApexSidebar activePage="directives" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ApexSidebar activePage="directives" />

    {/* MAIN DIRECTIVES CONSOLE */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto max-w-5xl mx-auto w-full">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">National Disaster Management Executive Orders</h1>
          <p className="text-xs text-slate-500">Cabinet Secretariat direct orders carrying legal statutory authority under Disaster Management Act 2005.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md">
          + Draft New Cabinet Directive
        </button>
      </div>

      {/* COMPOSE DIRECTIVE (Expandable) */}
      <form id="compose-directive" className="hidden p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-500/50 space-y-4 shadow-xl">
        <h3 className="font-black text-sm text-slate-900 dark:text-white">Draft Statutory Emergency Directive</h3>
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Directive Subject *</label>
          <input type="text" required placeholder="e.g. Mandatory Civilian Evacuation Order for Majuli Lowland Hamlets" className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs" />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Executive Order Text *</label>
          <textarea rows={3} required placeholder="Mandating all District Magistrates, Police Superintendents, and Defense columns..." className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs"></textarea>
        </div>
        <div className="flex justify-end gap-2">
          <button type="button" className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">Cancel</button>
          <button type="submit" className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow">Promulgate Directive →</button>
        </div>
      </form>

      {/* ACTIVE DIRECTIVES LIST */}
      <div className="space-y-4">
        
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-500">DIRECTIVE #NDMA-2025-0518-01 • ACTIVE ENFORCEMENT</span>
            <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-[10px] font-bold">MANDATORY EVACUATION</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Immediate Evacuation of 42 Low-Lying Villages in Barpeta District</h3>
          <p className="text-xs text-slate-500">Pursuant to Section 30 of Disaster Management Act 2005, all civilians residing within 2 km of vulnerable embankments are ordered to relocate immediately to designated high-ground relief shelters.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Authorized: <b>Cabinet Secretary</b> • Enforcing: <b>State Police &amp; Indian Army IV Corps</b></div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white text-xs font-bold transition">
            Check Field Compliance Status
          </button>
        </div>

        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-600">DIRECTIVE #NDMA-2025-0518-02 • ACTIVE ENFORCEMENT</span>
            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px] font-bold">ESSENTIAL COMMODITIES</span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Price Control &amp; Anti-Hoarding Order for Essential Rations &amp; Fuel</h3>
          <p className="text-xs text-slate-500">Strict enforcement against hoarding of baby food, kerosene, diesel, and clean drinking water. Special enforcement squads authorized to conduct spot inspections.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Authorized: <b>Union Home Minister / PMO</b> • Penalty: <b>Non-bailable arrest under Section 51</b></div>
          <button className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-xs font-bold transition">
            Deploy Flying Inspection Squads
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
