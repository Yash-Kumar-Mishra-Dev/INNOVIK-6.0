import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ApexSidebar } from '@/components/ApexSidebar';

import Link from 'next/link';

export default function CommandHierarchy() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="COMMAND HIERARCHY" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ApexSidebar activePage="command-hierarchy" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ApexSidebar activePage="command-hierarchy" />

    {/* MAIN HIERARCHY TREE */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Multi-Agency Incident Command Hierarchy (ICS)</h1>
          <p className="text-xs text-slate-500">Statutory reporting and escalation chain under the Disaster Management Act 2005.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md">
          Verify Escalation Matrix
        </button>
      </div>

      {/* 4-TIER HIERARCHY TREE */}
      <div className="space-y-4 max-w-4xl mx-auto">
        
        {/* Tier 1 */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-2 border-amber-500/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-500 uppercase">TIER 1 • APEX DIRECTIVE COUNCIL</span>
            <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-mono font-bold text-[10px]">SUPREME COMMAND</span>
          </div>
          <h3 className="font-black text-base text-slate-900 dark:text-white">Prime Minister's Office &amp; Cabinet Committee on Security (CCS)</h3>
          <p className="text-xs text-slate-500">National policy, Armed forces deployment authorization, international bilateral assistance, and NDRF corpus release.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Head: Hon. Prime Minister / Cabinet Secretary • Clearance: Level 1</div>
        </div>

        {/* Tier 2 */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border border-blue-500/30 space-y-2 ml-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-500 uppercase">TIER 2 • NATIONAL EXECUTIVE LEVEL</span>
            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-[10px]">OPERATIONAL</span>
          </div>
          <h3 className="font-black text-sm text-slate-900 dark:text-white">National Crisis Management Committee (NCMC) &amp; NDMA</h3>
          <p className="text-xs text-slate-500">Cabinet Secretary leads inter-ministerial coordination across Defense, Railways, Telecommunications, and Health.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Director-General: NDRF HQ • Control: 24x7 SEOC Link</div>
        </div>

        {/* Tier 3 */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/30 space-y-2 ml-12">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase">TIER 3 • STATE DISASTER MANAGEMENT AUTHORITY</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[10px]">STATE LEVEL</span>
          </div>
          <h3 className="font-black text-sm text-slate-900 dark:text-white">Chief Minister &amp; State Relief Commissionerate (SDMA)</h3>
          <p className="text-xs text-slate-500">Resource allocation to districts, state police mobilization, hospital trauma beds, and emergency highway corridors.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Relief Commissioner: J. Das, IAS • Emergency Ops Room: Dispur SEOC</div>
        </div>

        {/* Tier 4 */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent border border-purple-500/30 space-y-2 ml-16">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-purple-600 uppercase">TIER 4 • INCIDENT GROUND COMMAND</span>
            <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono font-bold text-[10px]">TACTICAL FIELD</span>
          </div>
          <h3 className="font-black text-sm text-slate-900 dark:text-white">District Magistrate &amp; Incident Commander (DDMA)</h3>
          <p className="text-xs text-slate-500">On-ground execution: boat squad deployments, relief shelter management, food rationing, and search &amp; rescue.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Commanders: District Collectors &amp; NDRF Battalion Commandants</div>
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
