import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ResponderSidebar } from '@/components/ResponderSidebar';

import Link from 'next/link';

export default function Settings() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>  {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="SYSTEM SETTINGS" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ResponderSidebar activePage="settings" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <ResponderSidebar activePage="settings" />

    {/* MAIN SETTINGS */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto max-w-4xl mx-auto w-full">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-black text-slate-900 dark:text-white">Platform Settings &amp; Theme Customization</h1>
        <p className="text-xs text-slate-500">Configure visual themes, global throttling, connection pooling, and multi-region failover triggers.</p>
      </div>

      {/* VISUAL THEME CHANGER CARD (Requirement 13) */}
      <div className="p-6 rounded-2xl glass-card space-y-4 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i data-lucide="palette" className="w-4 h-4 text-purple-600"></i>
              <span>Display Theme &amp; Appearance</span>
            </h2>
            <p className="text-xs text-slate-500">Select your preferred color scheme. Preferences are synced across all panels via localStorage.</p>
          </div>
          <span id="active-theme-pill" className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 uppercase">
            Active: Light
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* Light Theme Option */}
          <div id="theme-card-light" className="p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 cursor-pointer transition flex flex-col justify-between bg-white text-slate-900 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold flex items-center gap-1.5">
                <i data-lucide="sun" className="w-4 h-4 text-amber-500"></i> Light Mode
              </span>
              <input type="radio" name="theme-choice" id="radio-light" defaultChecked className="accent-purple-600" />
            </div>
            <div className="space-y-1.5 p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-[10px] text-slate-600">
              <div className="h-2 w-16 bg-blue-600 rounded"></div>
              <div className="h-1.5 w-24 bg-slate-300 rounded"></div>
              <div className="h-1.5 w-20 bg-slate-200 rounded"></div>
            </div>
            <span className="text-[11px] text-slate-500 mt-2">Clean daylight contrast with slate borders</span>
          </div>

          {/* Dark Theme Option */}
          <div id="theme-card-dark" className="p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 cursor-pointer transition flex flex-col justify-between bg-slate-950 text-white shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold flex items-center gap-1.5">
                <i data-lucide="moon" className="w-4 h-4 text-purple-400"></i> Dark Mode
              </span>
              <input type="radio" name="theme-choice" id="radio-dark" className="accent-purple-600" />
            </div>
            <div className="space-y-1.5 p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-[10px] text-slate-400">
              <div className="h-2 w-16 bg-blue-500 rounded"></div>
              <div className="h-1.5 w-24 bg-slate-700 rounded"></div>
              <div className="h-1.5 w-20 bg-slate-800 rounded"></div>
            </div>
            <span className="text-[11px] text-slate-400 mt-2">Deep midnight palette, eye-friendly</span>
          </div>

          {/* System Default Option */}
          <div id="theme-card-system" className="p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 cursor-pointer transition flex flex-col justify-between bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-white shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold flex items-center gap-1.5">
                <i data-lucide="monitor" className="w-4 h-4 text-blue-500"></i> System Auto
              </span>
              <input type="radio" name="theme-choice" id="radio-system" className="accent-purple-600" />
            </div>
            <div className="space-y-1.5 p-2.5 bg-white/60 dark:bg-slate-950/60 rounded-lg border border-slate-300 dark:border-slate-700 text-[10px]">
              <div className="h-2 w-16 bg-purple-600 rounded"></div>
              <div className="h-1.5 w-24 bg-slate-400 dark:bg-slate-600 rounded"></div>
              <div className="h-1.5 w-20 bg-slate-300 dark:bg-slate-700 rounded"></div>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">Matches your OS preference dynamically</span>
          </div>
        </div>
      </div>

      <form className="p-6 rounded-2xl glass-card space-y-4">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <i data-lucide="server" className="w-4 h-4 text-purple-600"></i>
          <span>High Availability &amp; Gateway Tuning</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">API Rate Limit (Requests / Min)</label>
            <input type="number" value="10000" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">WebSocket Heartbeat Ping (Sec)</label>
            <input type="number" value="15" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">PostgreSQL Max Pool Size</label>
            <input type="number" value="200" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Kafka Replication Factor</label>
            <input type="number" value="3" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono" />
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer pt-2">
            <input type="checkbox" defaultChecked className="accent-purple-600" />
            <span>Enable Automated Failover to Azure Pune if Primary Region Latency &gt; 2,000ms</span>
          </label>
        </div>

        <button type="submit" className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs shadow-md">
          Save &amp; Commit Cluster Configuration →
        </button>
      </form>
    </main>
  </div>

  <div id="toast" className="fixed bottom-5 right-5 z-50 translate-y-20 opacity-0 transition-all duration-300 pointer-events-none">
    <div className="bg-slate-900 text-white px-4 py-2 rounded-xl shadow-md text-xs font-medium border border-slate-700">
      <span id="toast-msg">Notification</span>
    </div>
  </div>

  

  {/* Shared RakshaSetu Core Engines */}
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
