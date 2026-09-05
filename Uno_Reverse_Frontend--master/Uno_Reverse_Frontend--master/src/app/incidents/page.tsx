import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { GovSidebar } from '@/components/GovSidebar';

import Link from 'next/link';

export default function Incidents() {
  return (
    <>
      

  {/* TOP HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="INCIDENTS REGISTRY" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <GovSidebar activePage="incidents" isMobile={true} />



  {/* MAIN INCIDENTS TABLE */}
  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    <GovSidebar activePage="incidents" />
    <main className=" p-4 lg:p-8 flex-1 space-y-6">
    
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Active Disaster Incidents &amp; Field Reports</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">Lifecycle State Machine: Unverified → Field Verified → In Progress → Resolved (SRS Section 4.2)</p>
      </div>

      <div className="flex items-center gap-3 text-xs font-mono">
        <span className="px-3 py-1.5 rounded-xl bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 font-bold border border-red-300">P1 Critical: 4</span>
        <span className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold border border-amber-300">P2 Severe: 6</span>
        <span className="px-3 py-1.5 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-bold border border-blue-300">P3 Moderate: 8</span>
      </div>
    </div>

    {/* TABLE CARD */}
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="p-3.5">Incident ID</th>
              <th className="p-3.5">Category &amp; Title</th>
              <th className="p-3.5">District / GPS Coordinates</th>
              <th className="p-3.5">Severity</th>
              <th className="p-3.5">Source Ingest</th>
              <th className="p-3.5">Lifecycle Status</th>
              <th className="p-3.5">Reported Time</th>
              <th className="p-3.5">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-medium">
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
              <td className="p-3.5 font-mono font-bold text-blue-600">INC-2025-0012</td>
              <td className="p-3.5">
                <div className="font-bold text-slate-900 dark:text-white">Embankment Breach #4</div>
                <div className="text-[10px] text-slate-500">Major dyke rupture; river inundating village</div>
              </td>
              <td className="p-3.5 font-mono">Dhemaji HQ (27.48° N, 94.58° E)</td>
              <td className="p-3.5"><span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-bold text-[10px]">CRITICAL P1</span></td>
              <td className="p-3.5"><span className="text-[11px] text-slate-600 dark:text-slate-300 font-mono">IoT River Gauge + SDRF</span></td>
              <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold text-[10px]">In Progress</span></td>
              <td className="p-3.5 font-mono text-slate-500">10 mins ago</td>
              <td className="p-3.5"></td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
              <td className="p-3.5 font-mono font-bold text-blue-600">INC-2025-0013</td>
              <td className="p-3.5">
                <div className="font-bold text-slate-900 dark:text-white">Hospital ICU Inundation</div>
                <div className="text-[10px] text-slate-500">18 patients require emergency boat transit</div>
              </td>
              <td className="p-3.5 font-mono">Barpeta (26.32° N, 91.00° E)</td>
              <td className="p-3.5"><span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-bold text-[10px]">CRITICAL P1</span></td>
              <td className="p-3.5"><span className="text-[11px] text-slate-600 dark:text-slate-300 font-mono">Verified Citizen SOS</span></td>
              <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">Verified</span></td>
              <td className="p-3.5 font-mono text-slate-500">22 mins ago</td>
              <td className="p-3.5"><a href="/missions" className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold hover:bg-emerald-700">View Mission</a></td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
              <td className="p-3.5 font-mono font-bold text-blue-600">INC-2025-0014</td>
              <td className="p-3.5">
                <div className="font-bold text-slate-900 dark:text-white">Culvert Bridge Collapse</div>
                <div className="text-[10px] text-slate-500">NH-27 bypass submerged under 1.2m water</div>
              </td>
              <td className="p-3.5 font-mono">Nalbari Sector (26.44° N, 91.43° E)</td>
              <td className="p-3.5"><span className="px-2 py-0.5 rounded-full bg-amber-600 text-white font-bold text-[10px]">SEVERE P2</span></td>
              <td className="p-3.5"><span className="text-[11px] text-slate-600 dark:text-slate-300 font-mono">NHAI Drone Camera</span></td>
              <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-[10px]">Assigned</span></td>
              <td className="p-3.5 font-mono text-slate-500">45 mins ago</td>
              <td className="p-3.5"><a href="/resources" className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold hover:bg-slate-300">Route Traffic</a></td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
              <td className="p-3.5 font-mono font-bold text-blue-600">INC-2025-0015</td>
              <td className="p-3.5">
                <div className="font-bold text-slate-900 dark:text-white">Drinking Water Contamination</div>
                <div className="text-[10px] text-slate-500">Floodwater overflowed municipal water pumps</div>
              </td>
              <td className="p-3.5 font-mono">Kamrup Rural (26.18° N, 91.73° E)</td>
              <td className="p-3.5"><span className="px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold text-[10px]">MODERATE P3</span></td>
              <td className="p-3.5"><span className="text-[11px] text-slate-600 dark:text-slate-300 font-mono">Public Health Dept</span></td>
              <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[10px]">Under Review</span></td>
              <td className="p-3.5 font-mono text-slate-500">1 hr ago</td>
              <td className="p-3.5"><a href="/resources" className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold hover:bg-slate-300">Deploy Kits</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </main>
  </div>

  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
