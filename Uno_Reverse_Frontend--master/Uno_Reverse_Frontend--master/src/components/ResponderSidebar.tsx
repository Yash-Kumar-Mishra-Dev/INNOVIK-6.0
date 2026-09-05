"use client";

import React from 'react';
import Link from 'next/link';

export function ResponderSidebar({ activePage, isMobile = false }: { activePage: string, isMobile?: boolean }) {
  if (isMobile) {
    return (
      <aside id="raksha-left-drawer" className="fixed top-0 left-0 w-80 max-w-[85vw] h-full bg-slate-950 text-slate-200 border-r border-slate-800 shadow-md z-[9999] -translate-x-full transition-transform duration-300 flex flex-col">


    <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
      <div className="flex items-center gap-2.5">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-xl object-contain border border-slate-700 bg-slate-900" />
        <div>
          <div className="font-black text-sm text-white">Rescue Field Operations HUD</div>
          <div className="text-[10px] text-slate-400 font-mono">Squad Alpha (NDRF Bn #1) • Boat #4 Active</div>
        </div>
      </div>
      <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition" data-drawer-toggle="true" title="Close Drawer">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    
<nav className="p-3 space-y-1 text-xs font-medium flex-1 overflow-y-auto custom-scrollbar">
        <a href="/responder" className={`flex items-center gap-3 px-3 rounded-xl shadow-blue-600/30 py-2 ${activePage === 'responder' ? 'py-2.5 bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="layout-dashboard" className="w-4 h-4"></i>
          <span>Tactical HUD</span>
        </a>
        <a href="/missions" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'missions' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="target" className="w-4 h-4 text-orange-400"></i>
          <span>Missions (Cards)</span>
          <span className="ml-auto px-1.5 py-0.2 text-[10px] bg-blue-600 text-white font-bold rounded font-mono">P1 (3)</span>
        </a>
        <a href="/routes" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'routes' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="map" className="w-4 h-4 text-cyan-400"></i>
          <span>Safe Water Routes</span>
        </a>
        <a href="/responder/incidents" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'incidents' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="alert-triangle" className="w-4 h-4 text-red-400"></i>
          <span>SOS Dispatches</span>
        </a>
        <a href="/teams" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'teams' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="navigation" className="w-4 h-4 text-emerald-400"></i>
          <span>Squads &amp; Telemetry</span>
        </a>
        <a href="/responder/resources" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'resources' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="package" className="w-4 h-4 text-amber-400"></i>
          <span>Rescue Equipment</span>
        </a>
        <a href="/responder/shelters" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'shelters' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="home" className="w-4 h-4 text-indigo-400"></i>
          <span>Relief Shelters</span>
        </a>
        <a href="/comms" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'comms' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="radio" className="w-4 h-4 text-teal-400"></i>
          <span>Tactical Radio Mesh</span>
        </a>
        <a href="/sitrep" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'sitrep' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="file-text" className="w-4 h-4 text-emerald-400"></i>
          <span>Generate SitRep Report</span>
        </a>
        <a href="/responder/settings" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'settings' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="settings" className="w-4 h-4 text-slate-400"></i>
          <span>Radio Settings</span>
        </a>
      </nav>
</aside>
    );
  }

  return (
    <aside className="w-full md:w-60 bg-slate-950 text-slate-300 flex flex-col flex-shrink-0 border-r border-slate-800/80" aria-label="Rescue Navigation">


      
      {/* Panel Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold text-sm shadow-sm">
          AL
        </div>
        <div>
          <div className="font-bold text-white text-xs leading-tight">Squad Alpha</div>
          <div className="text-[10px] text-slate-400 font-medium font-mono">NDRF Battalion #1</div>
          <div className="text-[9px] text-emerald-400 font-mono mt-0.5">● Boat #4 Active</div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-3 space-y-1 text-xs font-medium flex-1 overflow-y-auto custom-scrollbar">
        <a href="/responder" className={`flex items-center gap-3 px-3 rounded-xl shadow-blue-600/30 py-2 ${activePage === 'responder' ? 'py-2.5 bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="layout-dashboard" className="w-4 h-4"></i>
          <span>Tactical HUD</span>
        </a>
        <a href="/missions" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'missions' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="target" className="w-4 h-4 text-orange-400"></i>
          <span>Missions (Cards)</span>
          <span className="ml-auto px-1.5 py-0.2 text-[10px] bg-blue-600 text-white font-bold rounded font-mono">P1 (3)</span>
        </a>
        <a href="/routes" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'routes' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="map" className="w-4 h-4 text-cyan-400"></i>
          <span>Safe Water Routes</span>
        </a>
        <a href="/responder/incidents" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'incidents' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="alert-triangle" className="w-4 h-4 text-red-400"></i>
          <span>SOS Dispatches</span>
        </a>
        <a href="/teams" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'teams' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="navigation" className="w-4 h-4 text-emerald-400"></i>
          <span>Squads &amp; Telemetry</span>
        </a>
        <a href="/responder/resources" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'resources' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="package" className="w-4 h-4 text-amber-400"></i>
          <span>Rescue Equipment</span>
        </a>
        <a href="/responder/shelters" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'shelters' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="home" className="w-4 h-4 text-indigo-400"></i>
          <span>Relief Shelters</span>
        </a>
        <a href="/comms" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'comms' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="radio" className="w-4 h-4 text-teal-400"></i>
          <span>Tactical Radio Mesh</span>
        </a>
        <a href="/sitrep" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'sitrep' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="file-text" className="w-4 h-4 text-emerald-400"></i>
          <span>Generate SitRep Report</span>
        </a>
        <a href="/responder/settings" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'settings' ? 'bg-emerald-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="settings" className="w-4 h-4 text-slate-400"></i>
          <span>Radio Settings</span>
        </a>
      </nav>

      <div className="p-3 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>SQUAD ALPHA (NDRF)</span>
        </div>
      </div>
    
    
    </aside>
  );
}
