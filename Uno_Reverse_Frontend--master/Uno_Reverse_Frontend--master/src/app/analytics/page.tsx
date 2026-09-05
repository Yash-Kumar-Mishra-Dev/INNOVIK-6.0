import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { GovSidebar } from '@/components/GovSidebar';

import Link from 'next/link';
import { IncidentsChart, DistrictChart } from '../../components/ClientCharts';

export default function Analytics() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="ANALYTICS & REPORTS" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <GovSidebar activePage="analytics" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <GovSidebar activePage="analytics" />

    {/* MAIN CONTENT */}
    <main className="flex-1 p-4 lg:p-6 space-y-6 overflow-y-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">State Disaster Intelligence &amp; Analytics</h1>
          <p className="text-xs text-slate-500">Real-time telemetry aggregated from 14 districts and 45 sensor nodes</p>
        </div>
        <button className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5 shadow">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect width="12" height="8" x="6" y="14"></rect></svg>
          <span>Export Analytics PDF</span>
        </button>
      </div>

      {/* 4 KPI CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl glass-card">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Avg Response Time</div>
          <div className="text-2xl font-black text-blue-600 font-mono mt-1">11.4 min</div>
          <div className="text-[10px] text-emerald-500 font-semibold mt-1">▼ 3.2m faster than SLA (15m)</div>
        </div>
        <div className="p-4 rounded-2xl glass-card">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Verification Ratio</div>
          <div className="text-2xl font-black text-emerald-600 font-mono mt-1">94.8%</div>
          <div className="text-[10px] text-emerald-500 font-semibold mt-1">✓ 148 of 156 verified</div>
        </div>
        <div className="p-4 rounded-2xl glass-card">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Evacuation Rate</div>
          <div className="text-2xl font-black text-amber-600 font-mono mt-1">14,280 /hr</div>
          <div className="text-[10px] text-amber-500 font-semibold mt-1">48 Buses + 36 Boats active</div>
        </div>
        <div className="p-4 rounded-2xl glass-card">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Alert Push Delivery</div>
          <div className="text-2xl font-black text-purple-600 font-mono mt-1">99.4%</div>
          <div className="text-[10px] text-slate-400 font-semibold mt-1">1.28M cellular push sent</div>
        </div>
      </div>

      {/* CHARTS ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl glass-card space-y-4">
          <div className="font-bold text-sm text-slate-900 dark:text-white">Hourly Incident Intake vs Resolved (Past 12 Hours)</div>
          <div className="h-64 flex items-center justify-center">
            <IncidentsChart />
          </div>
        </div>
        <div className="p-5 rounded-2xl glass-card space-y-4">
          <div className="font-bold text-sm text-slate-900 dark:text-white">Resource Allocation by District (%)</div>
          <div className="h-64 flex items-center justify-center">
            <DistrictChart />
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
