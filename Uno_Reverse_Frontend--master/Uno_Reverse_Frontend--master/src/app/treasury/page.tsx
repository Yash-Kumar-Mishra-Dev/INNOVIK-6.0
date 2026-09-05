import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ApexSidebar } from '@/components/ApexSidebar';

import Link from 'next/link';

export default function Treasury() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="RELIEF TREASURY" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ApexSidebar activePage="treasury" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ApexSidebar activePage="treasury" />

    {/* MAIN TREASURY LEDGER */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">National Disaster Relief Fund (NDRF / SDRF) Allocations</h1>
          <p className="text-xs text-slate-500">Authorized by PMO Cabinet Committee on Security for flood mitigation and rehabilitation.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md">
          Authorize Tranche Release
        </button>
      </div>

      {/* 4 FINANCIAL KPIS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl glass-card">
          <div className="text-[10px] font-bold text-slate-400 uppercase">Total Approved Corpus</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white font-mono mt-1">₹ 850 Cr</div>
          <div className="text-[10px] text-emerald-500 font-semibold mt-1">SDRF 75% + NDRF 25%</div>
        </div>
        <div className="p-4 rounded-2xl glass-card">
          <div className="text-[10px] font-bold text-slate-400 uppercase">Disbursed to Districts</div>
          <div className="text-2xl font-black text-blue-600 font-mono mt-1">₹ 412 Cr</div>
          <div className="text-[10px] text-blue-500 font-semibold mt-1">18 District Collectors</div>
        </div>
        <div className="p-4 rounded-2xl glass-card">
          <div className="text-[10px] font-bold text-slate-400 uppercase">Ex-Gratia DBT Transferred</div>
          <div className="text-2xl font-black text-emerald-600 font-mono mt-1">₹ 98.4 Cr</div>
          <div className="text-[10px] text-emerald-500 font-semibold mt-1">Direct to 124,000 Aadhaar accounts</div>
        </div>
        <div className="p-4 rounded-2xl glass-card">
          <div className="text-[10px] font-bold text-slate-400 uppercase">Uncommitted Emergency Reserve</div>
          <div className="text-2xl font-black text-purple-600 font-mono mt-1">₹ 339.6 Cr</div>
          <div className="text-[10px] text-purple-500 font-semibold mt-1">Apex Council Discretion</div>
        </div>
      </div>

      {/* DISBURSEMENT TABLE */}
      <div className="p-5 rounded-2xl glass-card space-y-4">
        <div className="font-bold text-sm text-slate-900 dark:text-white">District-wise Fund Disbursements Ledger</div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="text-[11px] uppercase bg-slate-100 dark:bg-slate-800/60 text-slate-500 font-mono">
              <tr>
                <th className="p-3">District Authority</th>
                <th className="p-3">Sanctioned Amount</th>
                <th className="p-3">Disbursed (PFMS)</th>
                <th className="p-3">Utilization (%)</th>
                <th className="p-3">Primary Utilization Head</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
              <tr>
                <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">District Magistrate, Barpeta</td>
                <td className="p-3 font-bold">₹ 85.0 Cr</td>
                <td className="p-3 text-emerald-500 font-bold">₹ 65.0 Cr</td>
                <td className="p-3 font-bold">76.4%</td>
                <td className="p-3 font-sans text-slate-500">Boat procurement, dry rations &amp; camp sanitation</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">AUDITED OK</span></td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">District Magistrate, Majuli</td>
                <td className="p-3 font-bold">₹ 72.0 Cr</td>
                <td className="p-3 text-emerald-500 font-bold">₹ 55.0 Cr</td>
                <td className="p-3 font-bold">76.3%</td>
                <td className="p-3 font-sans text-slate-500">Embankment geo-bag reinforcements &amp; cattle fodder</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">AUDITED OK</span></td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">District Magistrate, Dhemaji</td>
                <td className="p-3 font-bold">₹ 60.0 Cr</td>
                <td className="p-3 text-emerald-500 font-bold">₹ 42.0 Cr</td>
                <td className="p-3 font-bold">70.0%</td>
                <td className="p-3 font-sans text-slate-500">Helicopter landing pad prep &amp; medical mobile vans</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">AUDITED OK</span></td>
              </tr>
            </tbody>
          </table>
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
