"use client";

import React from 'react';
import Link from 'next/link';

export function CitizenSidebar({ activePage, isMobile = false }: { activePage: string, isMobile?: boolean }) {
  if (isMobile) return null;

  return (
    <aside className="w-full md:w-60 bg-slate-950 text-slate-300 flex flex-col flex-shrink-0 border-r border-slate-800/80" aria-label="Citizen Navigation">


      
      {/* User Capsule */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center font-bold text-sm shadow-sm">
          RK
        </div>
        <div>
          <div className="font-bold text-slate-800 dark:text-white text-xs leading-tight">Rohit Kalita</div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium font-mono">ID: #CZ-4820</div>
          <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">● Geotag Verified</div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-3 space-y-1 text-xs font-medium flex-1 overflow-y-auto custom-scrollbar">
        <a href="/citizen" className={`flex items-center gap-3 px-3 rounded-xl shadow-emerald-600/30 py-2 ${activePage === 'citizen' ? 'py-2.5 bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="layout-dashboard" className="w-4 h-4"></i>
          <span>Dashboard</span>
        </a>
        <a href="/alerts" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition ${activePage === 'alerts' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="bell" className="w-4 h-4 text-red-500"></i>
          <span>Emergency Alerts</span>
          <span className="ml-auto px-1.5 py-0.2 text-[10px] bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-mono font-bold rounded">1 High</span>
        </a>
        <a href="/report-incident" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition ${activePage === 'report-incident' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="camera" className="w-4 h-4 text-amber-500"></i>
          <span>Report Incident (Camera)</span>
        </a>
        <a href="/shelters" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition ${activePage === 'shelters' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="home" className="w-4 h-4 text-indigo-500"></i>
          <span>Relief Shelters</span>
        </a>
        <a href="/incidents" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition ${activePage === 'incidents' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="clipboard-list" className="w-4 h-4 text-purple-500"></i>
          <span>All Incidents</span>
        </a>
        <a href="/resources" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition ${activePage === 'resources' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="package" className="w-4 h-4 text-cyan-500"></i>
          <span>Relief Resources</span>
        </a>
        <a href="/safety-info" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition ${activePage === 'safety-info' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="book-open" className="w-4 h-4 text-emerald-500"></i>
          <span>Safety Info &amp; Guides</span>
        </a>
        <a href="/contacts" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition ${activePage === 'contacts' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="phone" className="w-4 h-4 text-blue-500"></i>
          <span>Emergency 112 Contacts</span>
        </a>
        <a href="/checklist" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition ${activePage === 'checklist' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="check-square" className="w-4 h-4 text-emerald-600"></i>
          <span>Daily Checklist</span>
        </a>
        <a href="/feedback" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition ${activePage === 'feedback' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="message-square" className="w-4 h-4 text-slate-400"></i>
          <span>Feedback &amp; Support</span>
        </a>
      </nav>

      <div className="p-3 bg-emerald-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>CITIZEN LINK OK</span>
        </div>
        <span className="text-[10px] bg-emerald-200/80 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded font-mono">24x7</span>
      </div>
    
    
    </aside>
  );
}
