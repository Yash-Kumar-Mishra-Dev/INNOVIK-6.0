"use client";

import React from 'react';
import Link from 'next/link';

export function AdminSidebar({ activePage, isMobile = false }: { activePage: string, isMobile?: boolean }) {
  if (isMobile) {
    return (
      <aside id="raksha-left-drawer" className="fixed top-0 left-0 w-80 max-w-[85vw] h-full bg-slate-950 text-slate-200 border-r border-slate-800 shadow-md z-[9999] -translate-x-full transition-transform duration-300 flex flex-col">


    <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
      <div className="flex items-center gap-2.5">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-xl object-contain border border-slate-700 bg-slate-900" />
        <div>
          <div className="font-black text-sm text-white">Platform Administration</div>
          <div className="text-[10px] text-slate-400 font-mono">Rajesh Sharma • IAM Master Access</div>
        </div>
      </div>
      <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition" data-drawer-toggle="true" title="Close Drawer">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    
<nav className="p-3 space-y-1 text-xs font-medium flex-1 overflow-y-auto custom-scrollbar">
        <a href="/admin" className={`flex items-center gap-3 px-3 rounded-xl shadow-purple-600/30 py-2 ${activePage === 'admin' ? 'py-2.5 bg-purple-600 text-white font-bold shadow-md shadow-purple-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="layout-dashboard" className="w-4 h-4"></i>
          <span>Dashboard</span>
        </a>


        <div className="pt-2 pb-1 px-3 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
          Platform Operations
        </div>
        <a href="/users" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'users' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="users" className="w-4 h-4 text-purple-400"></i>
          <span>User Directory (IAM)</span>
        </a>
        <a href="/roles" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'roles' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="shield-check" className="w-4 h-4 text-pink-400"></i>
          <span>Role Management (RBAC)</span>
        </a>
        <a href="/logs" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'logs' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="file-text" className="w-4 h-4 text-cyan-400"></i>
          <span>System Audit Logs</span>
        </a>
        <a href="/admin/incidents" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'incidents' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="alert-triangle" className="w-4 h-4 text-amber-400"></i>
          <span>Incident Management</span>
        </a>
        <a href="/admin/content" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'content' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="edit-3" className="w-4 h-4 text-emerald-400"></i>
          <span>Content &amp; Advisories</span>
        </a>
        <a href="/admin/analytics" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'analytics' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="bar-chart-2" className="w-4 h-4 text-blue-400"></i>
          <span>Platform Analytics</span>
        </a>
        <a href="/admin/notifications" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'notifications' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="bell" className="w-4 h-4 text-amber-400"></i>
          <span>Notification Gateway</span>
        </a>
        <a href="/integrations" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'integrations' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="network" className="w-4 h-4 text-teal-400"></i>
          <span>External Integrations</span>
        </a>
        <a href="/backup" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'backup' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="database" className="w-4 h-4 text-indigo-400"></i>
          <span>Backup &amp; Disaster Recovery</span>
        </a>
        <a href="/admin/settings" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'settings' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="settings" className="w-4 h-4 text-slate-400"></i>
          <span>System Settings</span>
        </a>
      </nav>
</aside>
    );
  }

  return (
    <aside className="w-full md:w-60 bg-slate-950 text-slate-300 flex flex-col flex-shrink-0 border-r border-slate-800/80" aria-label="Admin Navigation">


      
      {/* Panel Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-purple-600/30 text-purple-400 border border-purple-500/40 flex items-center justify-center font-bold text-sm shadow-sm">
          AD
        </div>
        <div>
          <div className="font-bold text-white text-xs leading-tight">Platform Administrator</div>
          <div className="text-[10px] text-slate-400 font-medium font-mono">Platform Administration Panel</div>
          <div className="text-[9px] text-emerald-400 font-mono mt-0.5">● Full Platform Access</div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-3 space-y-1 text-xs font-medium flex-1 overflow-y-auto custom-scrollbar">
        <a href="/admin" className={`flex items-center gap-3 px-3 rounded-xl shadow-purple-600/30 py-2 ${activePage === 'admin' ? 'py-2.5 bg-purple-600 text-white font-bold shadow-md shadow-purple-600/30' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="layout-dashboard" className="w-4 h-4"></i>
          <span>Dashboard</span>
        </a>


        <div className="pt-2 pb-1 px-3 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
          Platform Operations
        </div>
        <a href="/users" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'users' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="users" className="w-4 h-4 text-purple-400"></i>
          <span>User Directory (IAM)</span>
        </a>
        <a href="/roles" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'roles' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="shield-check" className="w-4 h-4 text-pink-400"></i>
          <span>Role Management (RBAC)</span>
        </a>
        <a href="/logs" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'logs' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="file-text" className="w-4 h-4 text-cyan-400"></i>
          <span>System Audit Logs</span>
        </a>
        <a href="/admin/incidents" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'incidents' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="alert-triangle" className="w-4 h-4 text-amber-400"></i>
          <span>Incident Management</span>
        </a>
        <a href="/admin/content" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'content' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="edit-3" className="w-4 h-4 text-emerald-400"></i>
          <span>Content &amp; Advisories</span>
        </a>
        <a href="/admin/analytics" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'analytics' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="bar-chart-2" className="w-4 h-4 text-blue-400"></i>
          <span>Platform Analytics</span>
        </a>
        <a href="/admin/notifications" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'notifications' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="bell" className="w-4 h-4 text-amber-400"></i>
          <span>Notification Gateway</span>
        </a>
        <a href="/integrations" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'integrations' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="network" className="w-4 h-4 text-teal-400"></i>
          <span>External Integrations</span>
        </a>
        <a href="/backup" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'backup' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="database" className="w-4 h-4 text-indigo-400"></i>
          <span>Backup &amp; Disaster Recovery</span>
        </a>
        <a href="/admin/settings" className={`flex items-center gap-3 px-3 py-2 rounded-xl  transition ${activePage === 'settings' ? 'bg-purple-600 text-white font-bold shadow-md' : 'hover:bg-slate-900 text-slate-300 hover:text-white'}`}>
          <i data-lucide="settings" className="w-4 h-4 text-slate-400"></i>
          <span>System Settings</span>
        </a>
      </nav>

      <div className="p-3 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>CLUSTER 98% UPTIME</span>
        </div>
      </div>
    
    
    </aside>
  );
}
