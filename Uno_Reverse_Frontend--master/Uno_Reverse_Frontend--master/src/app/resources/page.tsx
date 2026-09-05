import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { GovSidebar } from '@/components/GovSidebar';

import Link from 'next/link';

export default function Resources() {
  return (
    <>
      

  {/* TOP HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="RESCUE LOGISTICS" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <GovSidebar activePage="resources" isMobile={true} />



  {/* MAIN CONTENT */}
  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    <GovSidebar activePage="resources" />
    <main className=" p-4 lg:p-8 flex-1 space-y-6">
    
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Emergency Resource &amp; Heavy Equipment Registry</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">Lifecycle State Machine: Available → Allocated → In Use → Depleted (SRS Section 4.2)</p>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition">
          + Register New Asset
        </button>
      </div>
    </div>

    {/* 4 INVENTORY SUMMARY CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="glass-card rounded-2xl p-5 border-l-4 border-l-blue-600 space-y-1">
        <div className="text-slate-400 text-xs font-bold uppercase">Motorized Inflatable Boats (IRB)</div>
        <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">210 Units</div>
        <div className="text-xs text-emerald-600 font-semibold">142 In Operation • 68 Reserve</div>
      </div>
      <div className="glass-card rounded-2xl p-5 border-l-4 border-l-emerald-600 space-y-1">
        <div className="text-slate-400 text-xs font-bold uppercase">Life Jackets &amp; Flotation Rings</div>
        <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">14,500 Units</div>
        <div className="text-xs text-emerald-600 font-semibold">Distributed across 18 districts</div>
      </div>
      <div className="glass-card rounded-2xl p-5 border-l-4 border-l-amber-500 space-y-1">
        <div className="text-slate-400 text-xs font-bold uppercase">Mobile Water Purification Units</div>
        <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">64 Trailers</div>
        <div className="text-xs text-amber-600 font-semibold">Capacity: 120,000 L / Day</div>
      </div>
      <div className="glass-card rounded-2xl p-5 border-l-4 border-l-purple-600 space-y-1">
        <div className="text-slate-400 text-xs font-bold uppercase">Heavy Earthmovers &amp; Excavators</div>
        <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">48 JCB / Poclains</div>
        <div className="text-xs text-purple-600 font-semibold">Fortifying embankments</div>
      </div>
    </div>

    {/* ASSET INVENTORY TABLE */}
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="p-3.5">Asset Tag ID</th>
              <th className="p-3.5">Equipment / Resource Type</th>
              <th className="p-3.5">Owning Department</th>
              <th className="p-3.5">Stationed Base / Sector</th>
              <th className="p-3.5">Current Status</th>
              <th className="p-3.5">Operational Readiness</th>
              <th className="p-3.5">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-medium">
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
              <td className="p-3.5 font-mono font-bold text-blue-600">RES-BOAT-04</td>
              <td className="p-3.5 font-bold text-slate-900 dark:text-white">Zodiac Inflatable Boat (40 HP OBM)</td>
              <td className="p-3.5">NDRF 1st Battalion</td>
              <td className="p-3.5 font-mono">Kamalabari Ghat, Majuli</td>
              <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-[10px]">In Use (Mission #045)</span></td>
              <td className="p-3.5 text-emerald-600 font-mono font-bold">100% Operational</td>
              <td className="p-3.5"><a href="/responder" className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold hover:bg-slate-300">Track GPS</a></td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
              <td className="p-3.5 font-mono font-bold text-blue-600">RES-DRONE-01</td>
              <td className="p-3.5 font-bold text-slate-900 dark:text-white">DJI Matrice 300 Thermal Drone</td>
              <td className="p-3.5">State Disaster Management (ASDMA)</td>
              <td className="p-3.5 font-mono">Dhemaji HQ</td>
              <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">Available</span></td>
              <td className="p-3.5 text-emerald-600 font-mono font-bold">Battery 100% (Standby)</td>
              <td className="p-3.5"><button className="px-2.5 py-1 rounded bg-blue-600 text-white font-bold hover:bg-blue-700">Deploy</button></td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
              <td className="p-3.5 font-mono font-bold text-blue-600">RES-AMB-02</td>
              <td className="p-3.5 font-bold text-slate-900 dark:text-white">Force Motors 4x4 High-Clearance Ambulance</td>
              <td className="p-3.5">Health &amp; Family Welfare</td>
              <td className="p-3.5 font-mono">Barpeta Civil Hospital</td>
              <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-[10px]">In Transit</span></td>
              <td className="p-3.5 text-emerald-600 font-mono font-bold">Paramedic Onboard</td>
              <td className="p-3.5"><a href="/responder" className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold hover:bg-slate-300">Track GPS</a></td>
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
