import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import Link from 'next/link';
import { AdminSidebar } from '@/components/AdminSidebar';

export default function Content() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="CONTENT CMS" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <AdminSidebar activePage="content" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <AdminSidebar activePage="content" />

    {/* MAIN CONTENT AUTHORING */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto max-w-4xl mx-auto w-full">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-black text-slate-900 dark:text-white">Emergency Warning Bulletins &amp; Content Authoring</h1>
        <p className="text-xs text-slate-500">Author official public disaster advisories with automatic translation into Assamese, Bengali, and Hindi.</p>
      </div>

      <form className="p-6 rounded-2xl glass-card space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Advisory Headline *</label>
          <input type="text" required placeholder="e.g. Flash Flood Alert: Rising Water in Brahmaputra &amp; Tributaries" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Severity Level</label>
            <select className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono">
              <option>RED WARNING (Immediate Action Required)</option>
              <option>ORANGE ALERT (Be Prepared)</option>
              <option>YELLOW WATCH (Be Updated)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Target Language Translation</label>
            <select className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono">
              <option>Auto Translate: Assamese, Bengali &amp; Hindi</option>
              <option>English Only</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Advisory Body Content *</label>
          <textarea rows={4} required placeholder="Details on affected districts, shelter locations, evacuation instructions, and toll-free helpline 112..." className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs"></textarea>
        </div>
        <button type="submit" className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md">
          Publish Official Advisory to Public Bhuvan Portal →
        </button>
      </form>
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
