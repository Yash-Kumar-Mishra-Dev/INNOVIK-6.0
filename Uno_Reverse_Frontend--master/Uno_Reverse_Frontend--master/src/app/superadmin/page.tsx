import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ApexSidebar } from '@/components/ApexSidebar';

import Link from 'next/link';
import { CwcBasinChart } from '../../components/ClientCharts';

export default function Superadmin() {
  return (
    <>
      

  {/* BHUVAN-STYLE NATIONAL GOVERNMENT STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1 w-full"></div>

  {/* UNIFIED CONNECTED NAV BAR (Synchronized across all panels) */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="APEX COUNCIL" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ApexSidebar activePage="superadmin" isMobile={true} />



  {/* SUB-HEADER STRIP */}
  <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white px-4 lg:px-8 py-2.5 border-b border-slate-800 shadow-sm text-xs">
    <div className="max-w-[1720px] mx-auto flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        <span className="font-extrabold uppercase tracking-wide">NATIONAL SITUATION ROOM – APEX COMMAND (BRAHMAPUTRA RIVER INUNDATION)</span>
      </div>
      <div className="flex items-center gap-4 font-mono text-[11px] text-slate-300">
        <span>Defcon Level: <b className="text-amber-400">BRAVO-ALPHA</b></span>
        <span>•</span>
        <span>Tri-Services Coord: <b className="text-emerald-400">ACTIVE</b></span>
        <span>•</span>
        <button className="px-2.5 py-0.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold transition flex items-center gap-1">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect width="12" height="8" x="6" y="14"></rect></svg>
          <span>Print Cabinet SitRep</span>
        </button>
      </div>
    </div>
  </div>

  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">

    {/* LEFT SIDEBAR (Apex Council Command Sidebar) */}
    <ApexSidebar activePage="superadmin" />

    {/* MAIN DASHBOARD CONTENT */}
  <main className="max-w-[1720px] mx-auto p-4 lg:p-8 flex-1 space-y-6">
    
    {/* 4 MACRO STRATEGIC KPIS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      
      <div className="glass-apex rounded-2xl p-5 border-l-4 border-l-blue-600 space-y-1">
        <div className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Total Affected Population</div>
        <div className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">1,482,900</div>
        <div className="text-xs text-red-500 font-semibold flex items-center gap-1">
          <span>▲ +18.4% surge in past 24 hrs</span>
          <span className="text-slate-400 font-normal">(18 Districts inundated)</span>
        </div>
      </div>

      <div className="glass-apex rounded-2xl p-5 border-l-4 border-l-emerald-600 space-y-1">
        <div className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Citizens Rescued &amp; Sheltered</div>
        <div className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">184,240</div>
        <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
          <span>✓ 482 Relief Camps Active</span>
          <span className="text-slate-400 font-normal">(89% Capacity)</span>
        </div>
      </div>

      <div className="glass-apex rounded-2xl p-5 border-l-4 border-l-amber-500 space-y-1">
        <div className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Armed Forces &amp; NDRF Deployed</div>
        <div className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">4,850</div>
        <div className="text-xs text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
          <span>14 NDRF Bns • 6 Army Columns • 8 IAF Mi-17s</span>
        </div>
      </div>

      <div className="glass-apex rounded-2xl p-5 border-l-4 border-l-purple-600 space-y-1">
        <div className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">National Disaster Relief Fund (NDRF)</div>
        <div className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">₹ 850 Cr</div>
        <div className="text-xs text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
          <span>₹ 412 Cr disbursed to District Mag.</span>
        </div>
      </div>

    </div>

    {/* 2 MAIN APEX COLUMNS */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* LEFT 2 COLUMNS: STRATEGIC CONTROLS & ARMED FORCES MOBILIZATION */}
      <div className="lg:col-span-2 space-y-6">
        
        {/* SECTION 1: ARMED FORCES & AIR FORCE MOBILIZATION BOARD */}
        <div className="glass-apex rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path><path d="M2 12h20"></path><path d="m5 7-3 5 3 5"></path><path d="m19 7 3 5-3 5"></path></svg>
              <h2 className="text-base font-black text-slate-900 dark:text-white tracking-tight">Tri-Services &amp; National Task Force Mobilization (Section 9.1 Authorized)</h2>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/30">APEX APPROVAL ACTIVE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Army Column */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900 dark:text-white">Indian Army (Eastern Cmd)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">6 Infantry Columns deployed in Dhemaji, Barpeta, and Majuli for heavy amphibious flood breaching.</p>
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">BAP / BAUT Boats: 48 units</div>
              <button data-print-json="true" className="w-full py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition">
                + Authorize Reserve Column
              </button>
            </div>

            {/* IAF Air Force */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900 dark:text-white">Indian Air Force (IAF)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">8 Mi-17 V5 Helicopters conducting food airdrops &amp; critical rooftop medical extractions.</p>
              <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">Sorties Flown: 64 • Drops: 42 MT</div>
              <button className="w-full py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition">
                + Deploy 2 Extra Mi-17s
              </button>
            </div>

            {/* NDRF & Coast Guard */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900 dark:text-white">NDRF &amp; Coast Guard</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">14 NDRF Battalions with 210 Inflatable Motor Boats (IRB) and 4 Hovercrafts operating 24/7.</p>
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">Personnel on Ground: 1,840</div>
              <button className="w-full py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition">
                + Air-lift 2 More Battalions
              </button>
            </div>

          </div>
        </div>

        {/* SECTION 2: MACRO BASIN FLOOD FORECAST & INUNDATION CHART */}
        <div className="glass-apex rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-base font-black text-slate-900 dark:text-white tracking-tight">Central Water Commission (CWC) River Danger Levels</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Gauge level vs. Danger mark across key Brahmaputra gauging stations</p>
            </div>
            <span className="font-mono text-xs text-red-500 font-bold">ALL STATIONS ABOVE DANGER LEVEL</span>
          </div>

          <div className="h-64 w-full">
            <CwcBasinChart />
          </div>
        </div>

        {/* SECTION 3: EMERGENCY TREASURY RELIEF FUND DISBURSEMENT */}
        <div className="glass-apex rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-base font-black text-slate-900 dark:text-white tracking-tight">State Disaster Response Fund (SDRF) Treasury Allocation</h2>
            <button className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v12"></path><path d="M6 12h12"></path></svg>
              <span>Authorize Emergency ₹50 Cr Tranche</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-mono">
                <tr>
                  <th className="p-3">District Authority</th>
                  <th className="p-3">Allocated SDRF</th>
                  <th className="p-3">Utilized</th>
                  <th className="p-3">Relief Goods Dispatched</th>
                  <th className="p-3">Audit Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-medium">
                <tr>
                  <td className="p-3 font-bold text-slate-900 dark:text-white">Kamrup Metropolitan (Guwahati)</td>
                  <td className="p-3 font-mono">₹ 120 Cr</td>
                  <td className="p-3 font-mono text-emerald-600">₹ 94.2 Cr (78%)</td>
                  <td className="p-3">12,000 Food Kits, 450 Tents</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">Verified CAG</span></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900 dark:text-white">Dhemaji District HQ</td>
                  <td className="p-3 font-mono">₹ 95 Cr</td>
                  <td className="p-3 font-mono text-emerald-600">₹ 82.5 Cr (86%)</td>
                  <td className="p-3">8,500 Tarpaulins, Water Purifiers</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">Verified CAG</span></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900 dark:text-white">Barpeta Flood Sector</td>
                  <td className="p-3 font-mono">₹ 80 Cr</td>
                  <td className="p-3 font-mono text-emerald-600">₹ 61.8 Cr (77%)</td>
                  <td className="p-3">Baby Food, Antivenom Vials</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">Verified CAG</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* RIGHT 1 COLUMN: CABINET DIRECTIVES & CRITICAL INFRASTRUCTURE */}
      <div className="space-y-6">
        
        {/* CABINET ACTION DIRECTIVES */}
        <div className="glass-apex rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>Apex Directives &amp; Inter-Ministerial Orders</span>
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-1.5">
              <div className="font-bold text-blue-900 dark:text-blue-300">Order #PMO-2025-084</div>
              <p className="text-slate-600 dark:text-slate-400">Mandatory evacuation order for 34 riverine sandbar (Char) settlements in Dhubri &amp; Goalpara before 18:00 hrs.</p>
              <div className="text-[10px] font-mono text-slate-400">Signed: Union Home Secy • 2 hrs ago</div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
              <div className="font-bold text-emerald-900 dark:text-emerald-300">NHAI &amp; Railways Corridor Order</div>
              <p className="text-slate-600 dark:text-slate-400">Heavy vehicular traffic redirected from Kolia Bhomora Bridge to North Bank bypass. Green corridor for oxygen &amp; diesel tankers.</p>
              <div className="text-[10px] font-mono text-slate-400">Signed: Chief Secretary • 4 hrs ago</div>
            </div>
          </div>

          <div className="pt-2">
            <button className="w-full py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 border border-slate-700">
              <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Issue New Executive Directive</span>
            </button>
          </div>
        </div>

        {/* CRITICAL INFRASTRUCTURE STATUS */}
        <div className="glass-apex rounded-2xl p-6 space-y-3 text-xs">
          <h2 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">Critical Infrastructure Integrity</h2>

          <div className="space-y-2 font-mono">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Ranganadi Hydroelectric Dam</div>
                <div className="text-[10px] text-slate-400">Reservoir: 92% (Discharge: 450 m³/s)</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold text-[10px]">MONITORED</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Guwahati Petroleum Refinery</div>
                <div className="text-[10px] text-slate-400">Embankment dykes fortified • 0 Breach</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">SECURE</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">National Highway NH-27 (Nalbari)</div>
                <div className="text-[10px] text-slate-400">Water overtopping culvert km 142</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold text-[10px]">BLOCKED</span>
            </div>
          </div>
        </div>

        {/* QUICK ACCESS JUMP LINKS TO MODULAR PAGES */}
        <div className="glass-apex rounded-2xl p-6 space-y-3">
          <h2 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">Connected Operational Pages</h2>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <a href="/incidents" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition flex items-center gap-2">
              <span>⚠️</span>
              <span>Incidents Directory</span>
            </a>
            <a href="/missions" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition flex items-center gap-2">
              <span>🎯</span>
              <span>Field Missions</span>
            </a>
            <a href="/alerts" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition flex items-center gap-2">
              <span>🚨</span>
              <span>Public Alerts</span>
            </a>
            <a href="/shelters" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition flex items-center gap-2">
              <span>🏠</span>
              <span>Relief Camps</span>
            </a>
          </div>
        </div>

      </div>

    </div>

  </main>
  </div>

  {/* PRINTABLE CABINET SITREP (Hidden on screen, shown in print) */}
  <div id="sitrep-print-area" className="hidden print:block p-8 font-sans text-black">
    <div className="text-center pb-4 border-b-2 border-black">
      <h1 className="text-2xl font-black uppercase">Government of India • National Disaster Management Authority</h1>
      <h2 className="text-lg font-bold">Cabinet Committee on Security (CCS) — Emergency Flood SitRep</h2>
      <p className="text-xs">Generated: 18 May 2025, 10:30 AM | Clearance: TOP SECRET / OPERATIONAL EMERGENCY</p>
    </div>
    <div className="py-4 space-y-3 text-sm">
      <p><b>1. Basin Overview:</b> Brahmaputra river is flowing 1.84m above the extreme danger mark at Dibrugarh, Guwahati, and Tezpur. 18 districts affected with 1.48 million citizens impacted.</p>
      <p><b>2. Forces Deployed:</b> 14 NDRF Battalions, 6 Army Columns (Tezpur Corp), 8 IAF Mi-17 V5 helicopters operating out of Chabua and Guwahati airbases.</p>
      <p><b>3. SDRF/NDRF Funding:</b> ₹850 Crore approved by Prime Minister's Office. ₹412 Crore disbursed directly to District Magistrates.</p>
      <p><b>4. Relief Camps:</b> 482 camps housing 184,240 individuals. Zero starvation or epidemic reported.</p>
    </div>
  </div>

  {/* TOAST NOTIFICATION */}
  <div id="toast" className="fixed bottom-5 right-5 z-50 translate-y-20 opacity-0 transition-all duration-300 pointer-events-none">
    <div className="bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-md border border-slate-700 flex items-center gap-2 text-xs font-medium">
      <span id="toast-msg">Apex Directive Dispatched</span>
    </div>
  </div>

  

  {/* ========================================================================= */}
  {/* MODAL: PRIME MINISTER'S APEX COUNCIL CABINET SITREP REPORT (Req 8)        */}
  {/* ========================================================================= */}
  <div id="apex-sitrep-modal" className="fixed inset-0 z-[9995] bg-slate-950/80 backdrop-blur-md hidden flex flex-col p-4 md:p-8 overflow-y-auto">
    <div className="max-w-4xl mx-auto w-full bg-white text-slate-900 rounded-3xl shadow-md border border-slate-200 flex flex-col overflow-hidden my-auto print:max-w-full print:border-none print:shadow-none">
      
      {/* Top Action Bar (hidden when printing) */}
      <div className="p-4 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
          <i data-lucide="shield" className="w-4 h-4"></i>
          <span>National Crisis Management Committee (NCMC) • Cabinet Situation Briefing</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            <span>Print Cabinet SitRep</span>
          </button>
          <button className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition" title="Close">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* Printable Report Document Content */}
      <div className="p-8 md:p-10 space-y-6 text-sm bg-white print:p-0">
        
        {/* Header Document Info */}
        <div className="border-b-2 border-slate-900 pb-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 rounded-2xl object-contain border border-slate-300 shadow-sm" />
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-amber-700">Prime Minister's Office • Cabinet Secretariat</div>
              <h1 className="text-2xl font-black tracking-tight text-slate-950">RakshaSetu Apex Council Situation Report</h1>
              <p className="text-xs text-slate-600 font-bold">National Crisis Management Committee (NCMC) • Cabinet Room, New Delhi</p>
            </div>
          </div>
          <div className="text-right font-mono text-xs">
            <div className="font-bold text-slate-900">DOC ID: <span className="text-amber-700">PMO-SITREP-2025-01</span></div>
            <div className="text-slate-500">DEFCON: BRAVO-ALPHA</div>
            <div className="text-red-600 font-bold">NATIONAL DISASTER: LEVEL 3</div>
          </div>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs font-mono">
          <div>
            <div className="text-slate-500">GENERATED AT</div>
            <div className="font-bold text-slate-900" id="apex-sitrep-timestamp">4 September 2025, 09:45 IST</div>
          </div>
          <div>
            <div className="text-slate-500">APEX CONTROLLER</div>
            <div className="font-bold text-slate-900">Union Home Secretary</div>
          </div>
          <div>
            <div className="text-slate-500">TRI-SERVICES MOBILIZATION</div>
            <div className="font-bold text-emerald-600">Army, Air Force &amp; Navy</div>
          </div>
          <div>
            <div className="text-slate-500">NATIONAL OUTLAY</div>
            <div className="font-bold text-blue-600">₹ 250 Crore NDRF Grant</div>
          </div>
        </div>

        {/* 1. Executive Summary */}
        <div>
          <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-1 mb-3 uppercase tracking-wider">
            1. High-Level National Assessment &amp; Ingest Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-amber-600 font-mono">2.4M</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Population in Impact Zone</div>
              <div className="text-[10px] text-slate-400">19 Districts across Assam</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-emerald-600 font-mono">42,800</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Personnel Deployed</div>
              <div className="text-[10px] text-slate-400">NDRF + Armed Forces</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-blue-600 font-mono">1,120</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Relief Camps Active</div>
              <div className="text-[10px] text-slate-400">Medical triage established</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-purple-600 font-mono">₹ 250 Cr</div>
              <div className="text-xs font-bold text-slate-600 mt-1">PM Relief Fund Transferred</div>
              <div className="text-[10px] text-slate-400">Direct PFMS Transfer</div>
            </div>
          </div>
        </div>

        {/* 2. Armed Forces & Aviation Deployment */}
        <div>
          <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-1 mb-3 uppercase tracking-wider">
            2. Tri-Services &amp; Defense Task Force Assets Deployed
          </h2>
          <table className="w-full text-xs text-left border-collapse border border-slate-200">
            <thead className="bg-slate-100 font-bold text-slate-700 font-mono">
              <tr>
                <th className="p-2 border border-slate-200">Defense Branch</th>
                <th className="p-2 border border-slate-200">Assets Committed</th>
                <th className="p-2 border border-slate-200">Operational Staging Sector</th>
                <th className="p-2 border border-slate-200">Readiness Status</th>
              </tr>
            </thead>
            <tbody className="font-mono divide-y divide-slate-200">
              <tr>
                <td className="p-2 border font-bold">Indian Army (Eastern Command)</td>
                <td className="p-2 border">6 Task Columns + 30 BAUT Boats</td>
                <td className="p-2 border">Tezpur &amp; Majuli Riverine Corridor</td>
                <td className="p-2 border text-emerald-600 font-bold">ACTIVE IN COMBAT RESCUE</td>
              </tr>
              <tr>
                <td className="p-2 border font-bold">Indian Air Force (IAF)</td>
                <td className="p-2 border">8 Mi-17 V5 + 2 C-130J Super Hercules</td>
                <td className="p-2 border">Chabua &amp; Borjhar Air Force Bases</td>
                <td className="p-2 border text-emerald-600 font-bold">CONTINUOUS AIRDROPS</td>
              </tr>
              <tr>
                <td className="p-2 border font-bold">Indian Navy (Marine Commandos)</td>
                <td className="p-2 border">2 Deep Diving MARCOS Teams</td>
                <td className="p-2 border">Brahmaputra Submerged Channel</td>
                <td className="p-2 border text-emerald-600 font-bold">SUBMERGED BRIDGE CLEARANCE</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Signatures */}
        <div className="pt-8 border-t-2 border-slate-900 grid grid-cols-2 gap-8 text-xs">
          <div>
            <div className="font-bold text-slate-900">UNION HOME SECRETARY</div>
            <div className="text-slate-500">Chairman, National Executive Committee (NDMA)</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">Authenticated via Apex Digital Credential</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-slate-900">PRINCIPAL SECRETARY TO THE PRIME MINISTER</div>
            <div className="text-slate-500">Prime Minister's Office, South Block</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">Cabinet Ratification Code: CAB-ACT-2025-0904</div>
          </div>
        </div>

      </div>

      {/* Footer Buttons */}
      <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs print:hidden">
        <span className="text-slate-500 font-mono">Government of India • TOP SECRET / RESTRICTED CABINET BRIEFING</span>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition flex items-center gap-1.5 shadow">
            <i data-lucide="printer" className="w-4 h-4"></i>
            <span>Print Report</span>
          </button>
          <button className="px-4 py-2 bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold rounded-xl transition">Close</button>
        </div>
      </div>

    </div>
  </div>

  {/* Shared RakshaSetu Core Engines */}
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
