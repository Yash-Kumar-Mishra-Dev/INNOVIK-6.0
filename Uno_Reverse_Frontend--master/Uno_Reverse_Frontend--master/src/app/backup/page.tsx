import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { AdminSidebar } from '@/components/AdminSidebar';

import Link from 'next/link';

export default function Backup() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="DATABASE BACKUP" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <AdminSidebar activePage="backup" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <AdminSidebar activePage="backup" />

    {/* MAIN BACKUP CONSOLE */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Active-Passive Geo-Redundant Disaster Recovery (DR)</h1>
          <p className="text-xs text-slate-500">Continuous WAL archiving with Recovery Point Objective (RPO) &lt; 5 min and Recovery Time Objective (RTO) &lt; 15 min.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md">
          ⚡ Trigger Immediate Database Snapshot
        </button>
      </div>

      {/* 3 CLUSTER TILES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-500/50 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-emerald-600 uppercase font-mono">PRIMARY REGION (ONLINE)</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          </div>
          <h3 className="font-black text-sm text-slate-900 dark:text-white">AWS Mumbai (ap-south-1)</h3>
          <p className="text-xs text-slate-500">PostgreSQL 16 + PostGIS cluster with 3 read replicas handling 100% of live traffic.</p>
          <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">Replication Lag: <b>0ms</b> • Health: <b>100%</b></div>
        </div>

        <div className="p-5 rounded-2xl glass-card space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-blue-600 uppercase font-mono">HOT STANDBY (WARM DR)</span>
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
          </div>
          <h3 className="font-black text-sm text-slate-900 dark:text-white">Azure Pune (Central India)</h3>
          <p className="text-xs text-slate-500">Synchronous streaming replication standby ready for automated DNS failover via Route 53.</p>
          <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">Sync Status: <b>In Sync</b> • Automatic Failover: <b>ARMED</b></div>
        </div>

        <div className="p-5 rounded-2xl glass-card space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-purple-600 uppercase font-mono">COLD VAULT ARCHIVE</span>
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
          </div>
          <h3 className="font-black text-sm text-slate-900 dark:text-white">AWS S3 Glacier Deep Archive</h3>
          <p className="text-xs text-slate-500">Hourly encrypted differential snapshots retained for 7 years complying with Section 9.2.</p>
          <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">Total Snapshots: <b>4,280</b> • Integrity: <b>SHA-512 Valid</b></div>
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
