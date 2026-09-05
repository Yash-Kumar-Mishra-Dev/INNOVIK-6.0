"use client";

import React from 'react';
import Link from 'next/link';

export function GovSidebar({ activePage, isMobile = false }: { activePage: string, isMobile?: boolean }) {
  if (isMobile) {
    return (
      <aside id="raksha-left-drawer" className="fixed top-0 left-0 w-80 max-w-[85vw] h-full bg-slate-950 text-slate-200 border-r border-slate-800 shadow-md z-[9999] -translate-x-full transition-transform duration-300 flex flex-col">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-xl object-contain border border-slate-700 bg-slate-900" />
            <div>
              <div className="font-black text-sm text-white">Government Panel</div>
              <div className="text-[10px] text-slate-400 font-mono">J. Das, IAS • State Relief Commissioner</div>
            </div>
          </div>
          <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition" data-drawer-toggle="true" title="Close Drawer">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <nav className="p-3 space-y-1 text-xs font-medium flex-1 overflow-y-auto custom-scrollbar">
          <a href="/government" className={`flex items-center gap-3 px-3 rounded-xl shadow-blue-600/30 py-2 ${activePage === 'government' ? 'py-2.5 bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="layout-dashboard" className="w-4 h-4"></i>
            <span>Dashboard</span>
          </a>
          <a href="/incidents" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'incidents' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="alert-triangle" className="w-4 h-4 text-red-400"></i>
            <span>Incidents Registry</span>
            <span className="ml-auto px-2 py-0.5 text-[10px] bg-red-500/20 text-red-400 font-mono font-bold rounded-full">12 Active</span>
          </a>
          <a href="/alerts" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'alerts' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="bell" className="w-4 h-4 text-amber-400"></i>
            <span>Alerts &amp; Broadcasting</span>
          </a>
          <a href="/resources" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'resources' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="boxes" className="w-4 h-4 text-emerald-400"></i>
            <span>Resource Management</span>
          </a>
          <a href="/shelters" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'shelters' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="home" className="w-4 h-4 text-indigo-400"></i>
            <span>Relief Shelters</span>
          </a>
          <a href="/gov/missions" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'missions' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="crosshair" className="w-4 h-4 text-cyan-400"></i>
            <span>Rescue Missions (Cards)</span>
          </a>
          <a href="/departments" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'departments' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="building" className="w-4 h-4 text-blue-400"></i>
            <span>Departments Logistics</span>
          </a>
          <a href="/gov/analytics" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'analytics' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="bar-chart-2" className="w-4 h-4 text-purple-400"></i>
            <span>Analytics &amp; Reports</span>
          </a>
          <a href="/gov/spatial-map" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'spatial-map' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="map" className="w-4 h-4 text-cyan-400"></i>
            <span>GIS Spatial Map</span>
          </a>
          <a href="/gov/comms" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'comms' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="radio" className="w-4 h-4 text-teal-400"></i>
            <span>Emergency Communication</span>
          </a>
          <a href="/gov/evacuation" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'evacuation' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="navigation" className="w-4 h-4 text-orange-400"></i>
            <span>Evacuation Management</span>
          </a>
          <a href="/ai-predictions" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'ai-predictions' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="cpu" className="w-4 h-4 text-pink-400"></i>
            <span>AI Risk Predictions</span>
          </a>
          
          <div className="pt-2 pb-1 border-t border-slate-800/80"></div>
          
          <a href="/gov/settings" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'settings' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="settings" className="w-4 h-4 text-slate-400"></i>
            <span>System Settings</span>
          </a>
          <a href="/users" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'users' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
            <i data-lucide="users" className="w-4 h-4 text-slate-400"></i>
            <span>User Management (IAM)</span>
          </a>
        </nav>
      </aside>
    );
  }

  return (
    <aside className="w-full md:w-60 bg-slate-950 text-slate-300 flex flex-col flex-shrink-0 border-r border-slate-800/80" aria-label="Command Center Navigation">


      
      {/* User Profile Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold text-sm shadow-sm">
          JD
        </div>
        <div>
          <div className="font-bold text-white text-xs leading-tight">J. Das, IAS</div>
          <div className="text-[10px] text-slate-400 font-medium">State Relief Commissioner</div>
          <div className="text-[9px] text-emerald-400 font-mono mt-0.5">● Level-3 Auth Granted</div>
        </div>
      </div>

      {/* Navigation Menu (All items from official mockup) */}
      <nav className="p-3 space-y-1 text-xs font-medium flex-1 overflow-y-auto custom-scrollbar">
        <a href="/government" className={`flex items-center gap-3 px-3 rounded-xl shadow-blue-600/30 py-2 ${activePage === 'government' ? 'py-2.5 bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="layout-dashboard" className="w-4 h-4"></i>
          <span>Dashboard</span>
        </a>
        <a href="/incidents" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'incidents' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="alert-triangle" className="w-4 h-4 text-red-400"></i>
          <span>Incidents Registry</span>
          <span className="ml-auto px-2 py-0.5 text-[10px] bg-red-500/20 text-red-400 font-mono font-bold rounded-full">12 Active</span>
        </a>
        <a href="/alerts" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'alerts' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="bell" className="w-4 h-4 text-amber-400"></i>
          <span>Alerts &amp; Broadcasting</span>
        </a>
        <a href="/resources" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'resources' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="boxes" className="w-4 h-4 text-emerald-400"></i>
          <span>Resource Management</span>
        </a>
        <a href="/shelters" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'shelters' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="home" className="w-4 h-4 text-indigo-400"></i>
          <span>Relief Shelters</span>
        </a>
        <a href="/gov/missions" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'missions' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="crosshair" className="w-4 h-4 text-cyan-400"></i>
          <span>Rescue Missions (Cards)</span>
        </a>
        <a href="/departments" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'departments' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="building" className="w-4 h-4 text-blue-400"></i>
          <span>Departments Logistics</span>
        </a>
        <a href="/gov/analytics" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'analytics' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="bar-chart-2" className="w-4 h-4 text-purple-400"></i>
          <span>Analytics &amp; Reports</span>
        </a>
        <a href="/gov/spatial-map" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'spatial-map' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="map" className="w-4 h-4 text-cyan-400"></i>
          <span>GIS Spatial Map</span>
        </a>
        <a href="/gov/comms" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'comms' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="radio" className="w-4 h-4 text-teal-400"></i>
          <span>Emergency Communication</span>
        </a>
        <a href="/gov/evacuation" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'evacuation' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="navigation" className="w-4 h-4 text-orange-400"></i>
          <span>Evacuation Management</span>
        </a>
        <a href="/ai-predictions" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'ai-predictions' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="cpu" className="w-4 h-4 text-pink-400"></i>
          <span>AI Risk Predictions</span>
        </a>
        
        <div className="pt-2 pb-1 border-t border-slate-800/80"></div>
        
        <a href="/gov/settings" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'settings' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="settings" className="w-4 h-4 text-slate-400"></i>
          <span>System Settings</span>
        </a>
        <a href="/users" className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition ${activePage === 'users' ? 'bg-blue-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="users" className="w-4 h-4 text-slate-400"></i>
          <span>User Management (IAM)</span>
        </a>
      </nav>

      {/* Sidebar Footer Status */}
      <div className="p-3 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="text-slate-400">NestJS Gateway</span>
        </div>
        <span className="text-emerald-400 font-bold">ONLINE</span>
      </div>
    
    
    </aside>
  );
}
