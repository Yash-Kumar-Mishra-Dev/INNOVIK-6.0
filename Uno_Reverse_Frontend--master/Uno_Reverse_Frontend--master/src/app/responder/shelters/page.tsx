import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ResponderSidebar } from '@/components/ResponderSidebar';

import Link from 'next/link';

export default function Shelters() {
  return (
    <>
      

  {/* TOP HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="RELIEF SHELTERS" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ResponderSidebar activePage="shelters" isMobile={true} />



  {/* MAIN CONTENT */}
  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    <ResponderSidebar activePage="shelters" />
    <main className=" p-4 lg:p-8 flex-1 space-y-6">
    
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Active Relief Camps &amp; Safe Evacuation Centers</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">Real-time shelter occupancy, medical team availability, food supplies, and distance calculations</p>
      </div>

      <div className="flex items-center gap-3 text-xs font-mono">
        <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold border border-emerald-300">482 Camps Active</span>
        <span className="px-3 py-1.5 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-bold border border-blue-300">184,240 Sheltered</span>
      </div>
    </div>

    {/* SHELTER CARDS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {/* Shelter 1 */}
      <div className="glass-card rounded-2xl p-5 border-t-4 border-t-emerald-600 space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">OPEN &amp; ACCEPTING</span>
          <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">1.2 km away</span>
        </div>

        <div>
          <h3 className="font-black text-base text-slate-900 dark:text-white">Kamalabari Higher Secondary School</h3>
          <p className="text-xs text-slate-500 mt-0.5">Kamalabari Chariali, Majuli Sub-division</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500">Current Occupancy:</span>
            <span className="font-bold text-slate-900 dark:text-white">420 / 600 (70%)</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{"width":"70%"}}></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-600 dark:text-slate-400">
          <div>✓ Drinking Water RO: Available</div>
          <div>✓ Medical Staff: 2 Doctors</div>
          <div>✓ Baby Food &amp; Milk: Supplied</div>
          <div>✓ Power: 15 kVA Diesel Gen</div>
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
          <a href="/citizen" className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition">
            Navigate Safe Route →
          </a>
        </div>
      </div>

      {/* Shelter 2 */}
      <div className="glass-card rounded-2xl p-5 border-t-4 border-t-emerald-600 space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">OPEN &amp; ACCEPTING</span>
          <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">2.8 km away</span>
        </div>

        <div>
          <h3 className="font-black text-base text-slate-900 dark:text-white">Dhemaji Multipurpose Indoor Stadium</h3>
          <p className="text-xs text-slate-500 mt-0.5">Court Road, Dhemaji HQ</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500">Current Occupancy:</span>
            <span className="font-bold text-slate-900 dark:text-white">850 / 1,000 (85%)</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{"width":"85%"}}></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-600 dark:text-slate-400">
          <div>✓ Drinking Water: Tankers on site</div>
          <div>✓ Medical Staff: NDRF Medical Team</div>
          <div>✓ Dry Rations: ASDMA Food Packets</div>
          <div>✓ Elevated High Ground: Yes (+6m)</div>
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
          <a href="/citizen" className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition">
            Navigate Safe Route →
          </a>
        </div>
      </div>

      {/* Shelter 3 */}
      <div className="glass-card rounded-2xl p-5 border-t-2 border-t-slate-400 dark:border-t-slate-600 space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-mono text-[10px] font-bold">NEAR CAPACITY (96%)</span>
          <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">4.1 km away</span>
        </div>

        <div>
          <h3 className="font-black text-base text-slate-900 dark:text-white">Barpeta Bapuji College Auditorium</h3>
          <p className="text-xs text-slate-500 mt-0.5">Sarthebari Road, Barpeta</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500">Current Occupancy:</span>
            <span className="font-bold text-slate-900 dark:text-white">480 / 500 (96%)</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full rounded-full" style={{"width":"96%"}}></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-600 dark:text-slate-400">
          <div>✓ Water: 4,000L Reserve</div>
          <div>✓ Medical: First Aid Centre</div>
          <div>⚠️ Bed Space: Limited floor mats</div>
          <div>✓ Relief Supplies: Adequate</div>
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
          <a href="/citizen" className="flex-1 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs text-center hover:bg-slate-300 transition">
            View Alternate Shelter →
          </a>
        </div>
      </div>

    </div>

  </main>
  </div>

  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
