import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { GovSidebar } from '@/components/GovSidebar';

import Link from 'next/link';

export default function Departments() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="DEPARTMENTS LOGISTICS" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <GovSidebar activePage="departments" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <GovSidebar activePage="departments" />

    {/* MAIN CONTENT */}
    <main className="flex-1 p-4 lg:p-6 space-y-5 overflow-y-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Participating Departments &amp; Resource Dispatch</h1>
          <p className="text-xs text-slate-500">Coordination across 7 key state disaster response directorates</p>
        </div>
        <button className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md">
          Broadcast Dept Alert
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Dept 1 */}
        <div className="p-4 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-600 font-mono">DEPT-01 • ACTIVE</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">State Relief Commissionerate</h3>
          <p className="text-xs text-slate-500">Lead coordination authority for district magistrates, evacuation corridors, and financial disbursements.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Head: J. Das, IAS • Tel: 0361-2237054</div>
          <button className="w-full py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-xs font-bold transition">Connect Hotline</button>
        </div>

        {/* Dept 2 */}
        <div className="p-4 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-600 font-mono">DEPT-02 • FIELD OPS</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">National Disaster Response Force (NDRF)</h3>
          <p className="text-xs text-slate-500">14 battalions active across Brahmaputra valley with 210 motorized inflatable boats and medical first responders.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Commandant: H. P. Singh • Battalions: 1st &amp; 12th</div>
          <button className="w-full py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-xs font-bold transition">Request Squad Dispatch</button>
        </div>

        {/* Dept 3 */}
        <div className="p-4 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-red-600 font-mono">DEPT-03 • HEALTH</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Health &amp; Family Welfare Dept</h3>
          <p className="text-xs text-slate-500">Amphibious trauma ambulances, mobile water purification plants, ORS distribution, and anti-snake venom supply.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Director: Dr. M. Choudhury • Teams: 42 Active</div>
          <button className="w-full py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-red-600 hover:text-white text-xs font-bold transition">Deploy Medical Unit</button>
        </div>

        {/* Dept 4 */}
        <div className="p-4 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-600 font-mono">DEPT-04 • RESCUE</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Fire &amp; Emergency Services</h3>
          <p className="text-xs text-slate-500">Urban water pumping, heavy tree obstacle clearance on NH-27, and collapse structure search and rescue.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Chief Officer: R. Sarma • Fire Stations: 84</div>
          <button className="w-full py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white text-xs font-bold transition">Deploy Drainage Pump</button>
        </div>

        {/* Dept 5 */}
        <div className="p-4 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-purple-600 font-mono">DEPT-05 • ROADS</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Public Works Department (PWD Roads)</h3>
          <p className="text-xs text-slate-500">Bridge structural safety verifications, temporary bailey bridge construction, and embankment breach reinforcement.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Chief Engineer: S. Bezbaruah • Heavy Earthmovers: 28</div>
          <button className="w-full py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white text-xs font-bold transition">Dispatch Engineers</button>
        </div>

        {/* Dept 6 */}
        <div className="p-4 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-cyan-600 font-mono">DEPT-06 • TELECOM</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">State Police Radio Organization</h3>
          <p className="text-xs text-slate-500">Encrypted VHF high-frequency mesh network ensuring continuous communications when public cellular towers lose power.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">SP Telecom: A. Baruah, APS • Repeaters: 100% Online</div>
          <button className="w-full py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-cyan-600 hover:text-white text-xs font-bold transition">Test Radio Signal</button>
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
