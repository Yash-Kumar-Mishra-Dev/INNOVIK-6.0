import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { GovSidebar } from '@/components/GovSidebar';

import Link from 'next/link';

export default function Alerts() {
  return (
    <>
      

  {/* TOP HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="EMERGENCY ALERTS" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <GovSidebar activePage="alerts" isMobile={true} />



  {/* MAIN ALERTS CONSOLE */}
  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    <GovSidebar activePage="alerts" />
    <main className=" p-4 lg:p-8 flex-1 space-y-6">
    
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Broadcast Emergency Alerts &amp; Warning Bulletins</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">Multi-Channel Fanout: Firebase Cloud Messaging (FCM), SMS Gateway (CDAC/MSG91), and In-App Push</p>
      </div>

      <button className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-red-600/25 transition">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
        <span>+ Broadcast New Emergency Alert</span>
      </button>
    </div>

    {/* ALERTS FEED */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* 2 COLUMNS: ACTIVE BROADCAST BULLETINS */}
      <div className="lg:col-span-2 space-y-4">
        
        {/* Alert 1 */}
        <div className="glass-card rounded-2xl p-5 border-l-4 border-l-red-600 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-mono text-[10px] font-bold">RED ALERT • FLASH FLOOD</span>
              <span className="text-xs font-mono text-slate-400">#ALT-2025-084</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">18 May 2025, 09:15 AM</span>
          </div>

          <h3 className="text-base font-black text-slate-900 dark:text-white">IMD Red Warning: Extreme Inundation along Brahmaputra Banks</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Severe hydrological surge expected as river discharge exceeds 48,000 m³/s. Residents living within 1.5 km of low-lying flood plains in Dhemaji, Lakhimpur, and Majuli are directed to immediately move to designated concrete relief shelters.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-3 text-slate-500">
              <span>Target: <b>Dhemaji, Majuli, Lakhimpur</b></span>
              <span>•</span>
              <span>Delivered: <b className="text-emerald-600">412,800 Citizens</b></span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">99.4% Delivery Success</span>
          </div>
        </div>

        {/* Alert 2 */}
        <div className="glass-card rounded-2xl p-5 border-l-4 border-l-amber-500 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-mono text-[10px] font-bold">AMBER ADVISORY • ROAD CLOSURE</span>
              <span className="text-xs font-mono text-slate-400">#ALT-2025-083</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">18 May 2025, 07:45 AM</span>
          </div>

          <h3 className="text-base font-black text-slate-900 dark:text-white">NH-27 Highway Diversion Alert for Heavy Vehicles</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Water overtopping culverts at Km 142 near Nalbari. All heavy commercial trucks diverted to State Highway SH-2 via Hajo. Emergency rescue boats and medical convoys given priority clearance.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-3 text-slate-500">
              <span>Target: <b>Nalbari &amp; Barpeta Transit Corridor</b></span>
              <span>•</span>
              <span>Delivered: <b className="text-emerald-600">88,400 Devices</b></span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">SMS + Push Active</span>
          </div>
        </div>

      </div>

      {/* 1 COLUMN: BROADCAST METRICS & TELECOM GATEWAYS */}
      <div className="space-y-4">
        
        <div className="glass-card rounded-2xl p-5 space-y-4 text-xs">
          <h3 className="font-black text-slate-900 dark:text-white text-sm">Emergency Broadcast Delivery Channels</h3>
          
          <div className="space-y-2.5 font-mono">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">FCM Web &amp; App Push</div>
                <div className="text-[10px] text-slate-400">Firebase Cloud Messaging Gateway</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">99.8% ONLINE</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">CDAC National SMS Gateway</div>
                <div className="text-[10px] text-slate-400">Telecom Circle: Assam &amp; NE-1</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">THROUGHPUT: 12K/s</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Cell Broadcast System (CBS)</div>
                <div className="text-[10px] text-slate-400">Geo-fenced tower siren override</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">STANDBY</span>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 space-y-3 text-xs">
          <h3 className="font-black text-slate-900 dark:text-white text-sm">Broadcast Guidelines (SRS §4.2)</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            All broadcast messages must adhere to the Common Alerting Protocol (CAP) standard with explicit certainty, severity, and actionable citizen instructions.
          </p>
        </div>

      </div>

    </div>

  </main>
  </div>

  {/* BROADCAST MODAL */}
  <div id="broadcast-modal" className="hidden fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[2000] p-4 flex items-center justify-center">
    <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 space-y-4 border border-slate-300 dark:border-slate-700 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <svg className="w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span>Issue Emergency Alert Broadcast</span>
        </h3>
        <button className="p-1 text-slate-400 hover:text-slate-600">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Alert Level</label>
          <select id="alert-severity" className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
            <option value="RED">RED — Extreme Hazard &amp; Immediate Threat</option>
            <option value="AMBER">AMBER — Severe Risk &amp; Precautionary Notice</option>
            <option value="YELLOW">YELLOW — Advisory Warning</option>
          </select>
        </div>

        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Target District / Zone</label>
          <input type="text" id="alert-target" value="Dhemaji, Majuli, Lakhimpur Basin" className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
        </div>

        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Broadcast Message</label>
          <textarea id="alert-msg" rows={3} className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-sans" placeholder="State relief commissioner emergency announcement..."></textarea>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
        <button className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold text-xs">Cancel</button>
        <button className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs">Authorize &amp; Dispatch</button>
      </div>
    </div>
  </div>

  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
