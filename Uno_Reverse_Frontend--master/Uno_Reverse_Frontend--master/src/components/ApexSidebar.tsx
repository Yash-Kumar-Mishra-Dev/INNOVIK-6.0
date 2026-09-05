"use client";

import React from 'react';
import Link from 'next/link';

export function ApexSidebar({ activePage, isMobile = false }: { activePage: string, isMobile?: boolean }) {
  if (isMobile) {
    return (
      <aside id="raksha-left-drawer" className="fixed top-0 left-0 w-80 max-w-[85vw] h-full bg-slate-950 text-slate-200 border-r border-slate-800 shadow-md z-[9999] -translate-x-full transition-transform duration-300 flex flex-col">


    <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
      <div className="flex items-center gap-2.5">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-xl object-contain border border-slate-700 bg-slate-900" />
        <div>
          <div className="font-black text-sm text-white">⭐ Super Admin Apex Council</div>
          <div className="text-[10px] text-slate-400 font-mono">PMO &amp; Cabinet Secretariat • Level 3 Clearance</div>
        </div>
      </div>
      <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition" data-drawer-toggle="true" title="Close Drawer">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    
<nav className="p-3 space-y-1 text-xs font-medium flex-1 overflow-y-auto custom-scrollbar">
        <a href="/superadmin" className={`flex items-center gap-3 px-3 rounded-xl py-2 ${activePage === 'superadmin' ? 'py-2.5 bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>Apex Situation Room</span>
        </a>
        <a href="/mobilization" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'mobilization' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path><path d="M2 12h20"></path><path d="m5 7-3 5 3 5"></path><path d="m19 7 3 5-3 5"></path></svg>
          <span>Tri-Services Mobilization</span>
        </a>
        <a href="/river-gauges" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'river-gauges' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          <span>CWC River Danger Levels</span>
        </a>
        <a href="/treasury" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'treasury' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10"></line></svg>
          <span>SDRF &amp; NDRF Treasury</span>
        </a>
        <a href="/directives" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'directives' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          <span>National Directives</span>
        </a>
        <a href="/infrastructure" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'infrastructure' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22.01"></line><line x1="15" y1="22" x2="15" y2="22.01"></line></svg>
          <span>Critical Infrastructure Grid</span>
        </a>
        <a href="/cabinet-sitrep" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'cabinet-sitrep' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          <span>Cabinet SitRep Export</span>
        </a>
        <a href="/command-hierarchy" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'command-hierarchy' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span>Command Hierarchy</span>
        </a>
        <a href="/apex/analytics" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'analytics' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
          <span>National Analytics</span>
        </a>
        <a href="/apex/spatial-map" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'spatial-map' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
          <span>GIS Spatial Map</span>
        </a>
        <a href="/apex/settings" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'settings' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          <span>Settings</span>
        </a>
      </nav>
</aside>
    );
  }

  return (
    <aside className="w-full md:w-60 bg-slate-950 text-slate-300 flex flex-col flex-shrink-0 border-r border-slate-800/80" aria-label="Apex Navigation">


      
      {/* Panel Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-600/30 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-sm shadow-sm">
          AP
        </div>
        <div>
          <div className="font-bold text-white text-xs leading-tight">Apex Executive Council</div>
          <div className="text-[10px] text-slate-400 font-medium font-mono">PMO &amp; Cabinet Secretariat</div>
          <div className="text-[9px] text-emerald-400 font-mono mt-0.5">● Clearance Level 1 Active</div>
        </div>
      </div>

      {/* Navigation Menu (Dedicated Sub-pages) */}
      <nav className="p-3 space-y-1 text-xs font-medium flex-1 overflow-y-auto custom-scrollbar">
        <a href="/superadmin" className={`flex items-center gap-3 px-3 rounded-xl py-2 ${activePage === 'superadmin' ? 'py-2.5 bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>Apex Situation Room</span>
        </a>
        <a href="/mobilization" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'mobilization' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path><path d="M2 12h20"></path><path d="m5 7-3 5 3 5"></path><path d="m19 7 3 5-3 5"></path></svg>
          <span>Tri-Services Mobilization</span>
        </a>
        <a href="/river-gauges" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'river-gauges' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          <span>CWC River Danger Levels</span>
        </a>
        <a href="/treasury" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'treasury' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10"></line></svg>
          <span>SDRF &amp; NDRF Treasury</span>
        </a>
        <a href="/directives" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'directives' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          <span>National Directives</span>
        </a>
        <a href="/infrastructure" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'infrastructure' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22.01"></line><line x1="15" y1="22" x2="15" y2="22.01"></line></svg>
          <span>Critical Infrastructure Grid</span>
        </a>
        <a href="/cabinet-sitrep" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'cabinet-sitrep' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          <span>Cabinet SitRep Export</span>
        </a>
        <a href="/command-hierarchy" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'command-hierarchy' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span>Command Hierarchy</span>
        </a>
        <a href="/apex/analytics" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'analytics' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
          <span>National Analytics</span>
        </a>
        <a href="/apex/spatial-map" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'spatial-map' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
          <span>GIS Spatial Map</span>
        </a>
        <a href="/apex/settings" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'settings' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          <span>Settings</span>
        </a>
      </nav>

      <div className="p-3 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-amber-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span>APEX DEFCON-2</span>
        </div>
      </div>
    
    
    </aside>
  );
}
