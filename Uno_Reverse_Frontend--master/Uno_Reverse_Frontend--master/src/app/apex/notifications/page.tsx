import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ApexSidebar } from '@/components/ApexSidebar';

import Link from 'next/link';

export default function Notifications() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="NOTIFICATION GATEWAY" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ApexSidebar activePage="notifications" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ApexSidebar activePage="notifications" />

    {/* MAIN NOTIFICATIONS CONSOLE */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Emergency Broadcast Gateways &amp; Delivery Metrics</h1>
          <p className="text-xs text-slate-500">Live heartbeat status across Push Notification, SMS, and Cell Broadcast Sirens.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md">
          Ping Gateways Health
        </button>
      </div>

      {/* 4 GATEWAY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-4 rounded-2xl glass-card space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-400 uppercase">FCM Push (Mobile)</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <div className="text-2xl font-black text-emerald-600 font-mono">99.8%</div>
          <p className="text-[11px] text-slate-500">Firebase Cloud Messaging: 1,420,000 active device tokens registered.</p>
        </div>

        <div className="p-4 rounded-2xl glass-card space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-400 uppercase">CDAC National SMS</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <div className="text-2xl font-black text-blue-600 font-mono">4,800/sec</div>
          <p className="text-[11px] text-slate-500">SMPP v3.4 direct telecom operator trunk with priority emergency delivery.</p>
        </div>

        <div className="p-4 rounded-2xl glass-card space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-400 uppercase">Cell Broadcast (CBS)</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <div className="text-2xl font-black text-amber-500 font-mono">100% TOWER</div>
          <p className="text-[11px] text-slate-500">Geo-fenced acoustic sirens triggered via BSNL, Jio &amp; Airtel cell towers.</p>
        </div>

        <div className="p-4 rounded-2xl glass-card space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-400 uppercase">Voice IVRS Auto-Dial</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <div className="text-2xl font-black text-purple-600 font-mono">450 Lines</div>
          <p className="text-[11px] text-slate-500">Automated multi-lingual phone calls for elderly citizens in flood red zones.</p>
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
