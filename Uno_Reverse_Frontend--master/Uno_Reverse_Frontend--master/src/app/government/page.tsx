import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { GovSidebar } from '@/components/GovSidebar';

import Link from 'next/link';
import { GovTrendChart, GovResourceChart } from '../../components/ClientCharts';

export default function Government() {
  return (
    <>
      

  {/* UNIFIED CONNECTED NAV BAR (Synchronized across all panels) */}
      {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="GOVERNMENT PANEL" />



  {/* SUB-BAR: Official Specification Title Banner */}
  <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white px-4 lg:px-6 py-2 shadow-sm border-b border-blue-950 flex flex-wrap items-center justify-between gap-3 text-xs">
    <div className="max-w-[1720px] mx-auto w-full flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="font-extrabold tracking-wide uppercase">1. GOVERNMENT PANEL – COMMAND &amp; CONTROL DASHBOARD</span>
        <span className="text-blue-200 hidden md:inline">• Real-time overview for decision making, monitoring &amp; coordination</span>
      </div>
      <div className="flex items-center gap-3 font-mono text-[11px] text-blue-200">
        <span>Region: Brahmaputra River Basin</span>
        <span>•</span>
        <span className="text-white font-bold" id="gov-live-clock">18 May 2025 | 10:30 AM</span>
      </div>
    </div>
  </div>

    {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <GovSidebar activePage="government" isMobile={true} />

<div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">

    {/* LEFT SIDEBAR (Dark Obsidian Command Sidebar) */}
    <GovSidebar activePage="government" />

    {/* MAIN CONTENT AREA */}
    <main className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar p-4 lg:p-6 space-y-6">
      
      {/* SUB-HEADER: Filters, District Picker, Breadcrumb */}
      <div className="glass-card p-3.5 rounded-2xl flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200">
            <i data-lucide="layers" className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"></i>
            <select className="bg-transparent focus:outline-none cursor-pointer">
              <option>State Level View (Assam)</option>
              <option>National Grid Overview</option>
              <option>Zonal Emergency View</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200">
            <i data-lucide="map-pin" className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"></i>
            <select className="bg-transparent focus:outline-none cursor-pointer">
              <option value="all">All Districts (27)</option>
              <option value="kamrup">Kamrup Metropolitan (Guwahati)</option>
              <option value="dibrugarh">Dibrugarh Basin</option>
              <option value="cachar">Cachar / Silchar</option>
              <option value="sonitpur">Sonitpur / Tezpur</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          {/* Live Sensor Telemetry Count */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
            <i data-lucide="activity" className="w-3.5 h-3.5 text-emerald-500"></i>
            <span>Telemetry: 142 River Nodes Active</span>
          </div>

          {/* Quick Refresh Button */}
          <button className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Sync live state from PostgreSQL">
            <i data-lucide="rotate-cw" className="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
          </button>
        </div>
      </div>

      {/* 4 TOP STAT CARDS (Exact values & refined luxury aesthetics) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Active Incidents */}
        <div className="glass-card p-4 rounded-2xl border-l-4 border-l-red-500 flex items-center gap-4 hover:-translate-y-0.5 transition">
          <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center text-xl font-bold flex-shrink-0 border border-red-200 dark:border-red-900/50 shadow-sm shadow-red-500/10">
            <i data-lucide="alert-triangle" className="w-6 h-6"></i>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">12</div>
            <div className="text-xs font-bold text-slate-600 dark:text-slate-300">Active Incidents</div>
            <div className="text-[11px] text-red-600 dark:text-red-400 font-semibold flex items-center gap-1 mt-0.5">
              <span>↑ 2 from yesterday</span>
            </div>
          </div>
        </div>

        {/* Card 2: Affected Areas */}
        <div className="glass-card p-4 rounded-2xl border-l-4 border-l-blue-500 flex items-center gap-4 hover:-translate-y-0.5 transition">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl font-bold flex-shrink-0 border border-blue-200 dark:border-blue-900/50 shadow-sm shadow-blue-500/10">
            <i data-lucide="map-pin" className="w-6 h-6"></i>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">256</div>
            <div className="text-xs font-bold text-slate-600 dark:text-slate-300">Affected Areas</div>
            <div className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1 mt-0.5">
              <span>↑ 18 from yesterday</span>
            </div>
          </div>
        </div>

        {/* Card 3: People Affected */}
        <div className="glass-card p-4 rounded-2xl border-l-4 border-l-cyan-500 flex items-center gap-4 hover:-translate-y-0.5 transition">
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xl font-bold flex-shrink-0 border border-cyan-200 dark:border-cyan-900/50 shadow-sm shadow-cyan-500/10">
            <i data-lucide="users" className="w-6 h-6"></i>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">8,450</div>
            <div className="text-xs font-bold text-slate-600 dark:text-slate-300">People Affected</div>
            <div className="text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1 mt-0.5">
              <span>↑ 1,250 from yesterday</span>
            </div>
          </div>
        </div>

        {/* Card 4: Relief Camps */}
        <div className="glass-card p-4 rounded-2xl border-l-4 border-l-amber-500 flex items-center gap-4 hover:-translate-y-0.5 transition">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl font-bold flex-shrink-0 border border-amber-200 dark:border-amber-900/50 shadow-sm shadow-amber-500/10">
            <i data-lucide="tent" className="w-6 h-6"></i>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">45</div>
            <div className="text-xs font-bold text-slate-600 dark:text-slate-300">Relief Camps</div>
            <div className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1 mt-0.5">
              <span>3 new opened</span>
            </div>
          </div>
        </div>

      </div>

      {/* MIDDLE ROW: GIS TACTICAL MAP & RECENT ALERTS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Live Incident Spatial Map (col-span-8) */}
        <div className="lg:col-span-8 glass-card p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">Live Spatial GIS Map</h2>
            {/* Pan-India 36 States Selector */}
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-300">State / Region:</label>
              <select id="gov-state-select" className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold focus:outline-none">
              </select>
            </div>
            </div>

            {/* Legend Pills */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300 font-medium">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> High Risk</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Medium</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Low</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rotate-45 bg-blue-600"></span> Shelter</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-emerald-600"></span> Logistics</span>
            </div>
          </div>

          {/* Map Container with Radar Scanner */}
          <div className="relative w-full h-[330px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <div id="gov-map" className="w-full h-full z-10"></div>
            <div className="radar-sweep-effect hidden md:block"></div>

            {/* Explicit Map Zoom In / Out Controls (Requested: Zoom in/out option in map) */}
            <div className="absolute top-3 right-3 z-[400] flex flex-col gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl shadow-lg border border-slate-300 dark:border-slate-700">
              <button type="button" className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-base text-slate-800 dark:text-white" title="Zoom In">+</button>
              <button type="button" className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-base text-slate-800 dark:text-white" title="Zoom Out">-</button>
            </div>

            {/* Overlaid Map Layer Toggles */}
            <div className="absolute top-3 left-3 z-[400] glass-card p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-[11px] space-y-1.5 font-medium shadow-md">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                <i data-lucide="filter" className="w-3 h-3 text-blue-600"></i> Map Layers
              </div>
              <label className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 cursor-pointer">
                <input type="checkbox" defaultChecked id="layer-flood" className="rounded text-red-600" /> Brahmaputra Flood Inundation
              </label>
              <label className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 cursor-pointer">
                <input type="checkbox" defaultChecked id="layer-shelters" className="rounded text-blue-600" /> Active Relief Camps
              </label>
              <label className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 cursor-pointer">
                <input type="checkbox" defaultChecked id="layer-teams" className="rounded text-emerald-600" /> Deployed Responders
              </label>
            </div>
          </div>

          {/* Coordinates Bar */}
          <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-2 font-mono">
            <span>Center: 26.1802° N, 91.7539° E (Guwahati, Assam)</span>
            <span>Projection: EPSG:3857 (WGS 84 / Pseudo-Mercator)</span>
          </div>
        </div>

        {/* Recent Alerts Feed (col-span-4) */}
        <div className="lg:col-span-4 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i data-lucide="bell-ring" className="w-4 h-4 text-red-500 animate-bounce"></i>
                Recent Alerts
              </h2>
              <button className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline">View All</button>
            </div>

            {/* List matching reference image */}
            <div className="space-y-2.5">
              {/* Alert 1 */}
              <div className="p-3 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200/80 dark:border-red-900/40 flex items-start gap-3 hover:scale-[1.01] transition-transform cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 mt-1 flex-shrink-0 animate-ping"></span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-red-950 dark:text-red-200">Flood Warning</div>
                  <div className="text-[11px] text-red-800 dark:text-red-300 font-medium truncate">Brahmaputra River Basin</div>
                  <div className="text-[10px] text-red-600 dark:text-red-400 font-mono mt-0.5">Severity: High • 18 Nov, 09:15 AM</div>
                </div>
                <button className="text-[10px] bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg font-bold transition">Inspect</button>
              </div>

              {/* Alert 2 */}
              <div className="p-3 rounded-xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200/80 dark:border-orange-900/40 flex items-start gap-3 hover:scale-[1.01] transition-transform cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1 flex-shrink-0"></span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-orange-950 dark:text-orange-200">Cyclone Alert</div>
                  <div className="text-[11px] text-orange-800 dark:text-orange-300 font-medium truncate">Bay of Bengal Coastal Belt</div>
                  <div className="text-[10px] text-orange-600 dark:text-orange-400 font-mono mt-0.5">Severity: Medium • 18 Nov, 08:30 AM</div>
                </div>
                <button className="text-[10px] bg-orange-600 hover:bg-orange-700 text-white px-2 py-1 rounded-lg font-bold transition">Inspect</button>
              </div>

              {/* Alert 3 */}
              <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 flex items-start gap-3 hover:scale-[1.01] transition-transform cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 flex-shrink-0"></span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-amber-950 dark:text-amber-200">Landslide Risk</div>
                  <div className="text-[11px] text-amber-800 dark:text-amber-300 font-medium truncate">Himachal Pradesh - Shimla NH</div>
                  <div className="text-[10px] text-amber-600 dark:text-amber-400 font-mono mt-0.5">Severity: Moderate • 18 Nov, 07:45 AM</div>
                </div>
                <button className="text-[10px] bg-amber-600 hover:bg-amber-700 text-white px-2 py-1 rounded-lg font-bold transition">Inspect</button>
              </div>

              {/* Alert 4 */}
              <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/40 flex items-start gap-3 hover:scale-[1.01] transition-transform cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1 flex-shrink-0"></span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-blue-950 dark:text-blue-200">Heavy Rainfall</div>
                  <div className="text-[11px] text-blue-800 dark:text-blue-300 font-medium truncate">Kerala &amp; Coastal Karnataka</div>
                  <div className="text-[10px] text-blue-600 dark:text-blue-400 font-mono mt-0.5">Advisory: Orange • 18 Nov, 06:10 AM</div>
                </div>
                <button className="text-[10px] bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg font-bold transition">Inspect</button>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono">
            <span>Kafka: alert.broadcast</span>
            <span className="text-emerald-500 font-bold">● Stream Synced</span>
          </div>
        </div>

      </div>

      {/* ROW: CHARTS, DEPARTMENTS & QUICK ACTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
        
        {/* Incident Trend Chart (col-span-4) */}
        <div className="lg:col-span-4 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i data-lucide="trending-up" className="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
              Incident Trend (Last 7 Days)
            </h3>
            <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">Past Week</span>
          </div>
          <div className="h-44 relative">
            <GovTrendChart />
          </div>
          <div className="text-[10px] font-mono text-slate-400 text-right mt-1">12 May – 18 May 2025</div>
        </div>

        {/* Resource Availability Donut (col-span-3) */}
        <div className="lg:col-span-3 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i data-lucide="pie-chart" className="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
              Resource Availability
            </h3>
          </div>
          <div className="h-36 relative flex items-center justify-center">
            <GovResourceChart />
          </div>
          {/* Legend list */}
          <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-600 dark:text-slate-300 mt-2 font-medium">
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-600"></span> Rescue Teams 65%</div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Medical Teams 40%</div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Vehicles 70%</div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Shelters 85%</div>
            <div className="flex items-center gap-1 col-span-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Drones 50%</div>
          </div>
        </div>

        {/* Department Coordination (col-span-3) */}
        <div className="lg:col-span-3 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="users-2" className="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
                Department Coordination
              </h3>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> NDRF
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono">12 Teams</div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-mono">Active</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Police
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono">20 Teams</div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-mono">Active</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Health Dept.
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono">15 Teams</div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-mono">Active</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Fire Services
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono">18 Teams</div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-mono">Active</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 mt-2 font-mono">Responders deployed: 650+ personnel</div>
        </div>

        {/* Quick Actions (col-span-2) */}
        <div className="lg:col-span-2 bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-800 p-4 rounded-2xl text-white shadow-lg shadow-blue-600/20 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-100 pb-2 border-b border-blue-400/40 mb-3 flex items-center gap-1.5">
              <i data-lucide="zap" className="w-4 h-4 text-amber-300"></i>
              Quick Actions
            </h3>

            <div className="space-y-2">
              <button className="w-full py-2 px-3 rounded-xl bg-white text-blue-700 hover:bg-blue-50 text-xs font-bold transition shadow-sm flex items-center justify-center gap-1.5">
                <i data-lucide="radio" className="w-3.5 h-3.5"></i> Send Alert
              </button>

              <button className="w-full py-2 px-3 rounded-xl bg-blue-900/60 hover:bg-blue-900 text-white text-xs font-semibold transition border border-blue-400/30 flex items-center justify-center gap-1.5">
                <i data-lucide="users" className="w-3.5 h-3.5"></i> Activate Teams
              </button>

              <button className="w-full py-2 px-3 rounded-xl bg-blue-900/60 hover:bg-blue-900 text-white text-xs font-semibold transition border border-blue-400/30 flex items-center justify-center gap-1.5">
                <i data-lucide="home" className="w-3.5 h-3.5"></i> Open Shelter
              </button>

              <button className="w-full py-2 px-3 rounded-xl bg-blue-900/60 hover:bg-blue-900 text-white text-xs font-semibold transition border border-blue-400/30 flex items-center justify-center gap-1.5">
                <i data-lucide="truck" className="w-3.5 h-3.5"></i> Request Resources
              </button>
            </div>
          </div>

          <div className="text-[10px] text-blue-200 mt-3 text-center font-mono">Protocol: Code Alpha-1</div>
        </div>

      </div>

      {/* BOTTOM ROW: INNOVATIVE FEATURES (6 cards with exact SRS AI/ML mathematical models) */}
      <div className="glass-card p-4 rounded-2xl space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">INNOVATIVE FEATURES</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">RakshaSetu AI/ML &amp; Sensing Architecture (SRS Section 8)</span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">Click any capability to inspect algorithms</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          
          {/* Feature 1: AI Risk Prediction */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-blue-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="brain" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">AI Risk Prediction</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Predicts potential disasters using ML models</div>
          </div>

          {/* Feature 2: Digital Twin Map */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-indigo-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="box" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Digital Twin Map</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Simulate scenarios &amp; impact analysis</div>
          </div>

          {/* Feature 3: IoT Sensor Network & Sensing Fusion */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-emerald-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="wifi" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">IoT Sensor Network</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Real-time data from sensors &amp; devices</div>
          </div>

          {/* Feature 4: Smart Evacuation */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-amber-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="route" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Smart Evacuation</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">AI optimized evacuation routes</div>
          </div>

          {/* Feature 5: Drone Surveillance */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-cyan-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="camera" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Drone Surveillance</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Live drone feeds &amp; area scanning</div>
          </div>

          {/* Feature 6: Voice Command */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-pink-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="mic" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Voice Command</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Voice-enabled control &amp; reporting</div>
          </div>

        </div>
      </div>

    </main>
  </div>

  {/* TOAST NOTIFICATION CONTAINER */}
  <div id="toast-notification" className="fixed bottom-5 right-5 z-[2000] translate-y-20 opacity-0 pointer-events-none transition-all duration-300">
    <div className="bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-md border border-slate-700 flex items-center gap-2.5 text-xs font-medium">
      <span id="toast-icon">✓</span>
      <span id="toast-message">Notification</span>
    </div>
  </div>

  {/* INTERACTIVE MODAL COMPONENT */}
  <div id="general-modal" className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[1000] hidden flex items-center justify-center p-4">
    <div className="glass-card bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-md p-6 space-y-4 transform transition-all scale-95 opacity-0 duration-200" id="modal-container">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <h3 id="modal-title" className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"></h3>
        <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl">
          <i data-lucide="x" className="w-5 h-5"></i>
        </button>
      </div>
      <div id="modal-body" className="text-xs text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed"></div>
      <div className="flex justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
        <button className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 transition">Close</button>
        <button id="modal-action-btn" className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition shadow-md shadow-blue-600/30">Confirm Action</button>
      </div>
    </div>
  </div>

  {/* RAKSHASETU SRS JAVASCRIPT & REAL-TIME SOCKET LAYER */}
  

  {/* ========================================================================= */}
  {/* MODAL: STATE RELIEF COMMISSIONER OFFICIAL SITREP REPORT (Req 8)           */}
  {/* ========================================================================= */}
  <div id="gov-sitrep-report-modal" className="fixed inset-0 z-[9995] bg-slate-950/80 backdrop-blur-md hidden flex flex-col p-4 md:p-8 overflow-y-auto">
    <div className="max-w-4xl mx-auto w-full bg-white text-slate-900 rounded-3xl shadow-md border border-slate-200 flex flex-col overflow-hidden my-auto print:max-w-full print:border-none print:shadow-none">
      
      {/* Top Action Bar (hidden when printing) */}
      <div className="p-4 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
          <i data-lucide="shield" className="w-4 h-4"></i>
          <span>Official State Disaster Management Authority (SDMA) Executive Situation Report</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            <span>Print / Save PDF</span>
          </button>
          <button className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition" title="Close">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* Printable Report Document Content */}
      <div className="p-8 md:p-10 space-y-6 text-sm bg-white print:p-0">
        
        {/* Header Document Info */}
        <div className="border-b-2 border-slate-900 pb-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 rounded-2xl object-contain border border-slate-300 shadow-sm" />
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-500">Government of Assam • Revenue &amp; Disaster Management Department</div>
              <h1 className="text-2xl font-black tracking-tight text-slate-950">RakshaSetu State Situation Report (SITREP)</h1>
              <p className="text-xs text-slate-600 font-bold">State Emergency Operations Center (SEOC) • Dispur, Guwahati</p>
            </div>
          </div>
          <div className="text-right font-mono text-xs">
            <div className="font-bold text-slate-900">DOC ID: <span className="text-blue-700">SEOC-SITREP-2025-04</span></div>
            <div className="text-slate-500">BASIN: Brahmaputra &amp; Barak Valleys</div>
            <div className="text-blue-700 font-bold">STATE EMERGENCY: ACTIVE</div>
          </div>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs font-mono">
          <div>
            <div className="text-slate-500">GENERATED AT</div>
            <div className="font-bold text-slate-900" id="gov-sitrep-timestamp">4 September 2025, 09:45 IST</div>
          </div>
          <div>
            <div className="text-slate-500">OFFICER IN CHARGE</div>
            <div className="font-bold text-slate-900">J. Das, IAS (Relief Comm.)</div>
          </div>
          <div>
            <div className="text-slate-500">DISTRICTS AFFECTED</div>
            <div className="font-bold text-slate-900">19 Districts (Severe Inundation)</div>
          </div>
          <div>
            <div className="text-slate-500">RESCUE SQUADS ACTIVE</div>
            <div className="font-bold text-emerald-600">52 NDRF &amp; SDRF Teams</div>
          </div>
        </div>

        {/* 1. Executive Summary & Telemetry Data */}
        <div>
          <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-1 mb-3 uppercase tracking-wider">
            1. Statewide Disaster Telemetry &amp; Ingest Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-blue-600 font-mono">1,482</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Total Verified SOS Alerts</div>
              <div className="text-[10px] text-slate-400">Via Citizen App &amp; 112</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-emerald-600 font-mono">3,420</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Evacuated Citizens</div>
              <div className="text-[10px] text-slate-400">Safely sheltered</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-purple-600 font-mono">142</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Designated Shelters</div>
              <div className="text-[10px] text-slate-400">Supplied with medical triages</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-amber-600 font-mono">₹ 14.8 Cr</div>
              <div className="text-xs font-bold text-slate-600 mt-1">SDRF Emergency Outlay</div>
              <div className="text-[10px] text-slate-400">Approved by Cabinet</div>
            </div>
          </div>
        </div>

        {/* 2. River Stations Danger Status */}
        <div>
          <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-1 mb-3 uppercase tracking-wider">
            2. Central Water Commission (CWC) Gauge Readings
          </h2>
          <table className="w-full text-xs text-left border-collapse border border-slate-200">
            <thead className="bg-slate-100 font-bold text-slate-700 font-mono">
              <tr>
                <th className="p-2 border border-slate-200">Station / District</th>
                <th className="p-2 border border-slate-200">Current Level</th>
                <th className="p-2 border border-slate-200">Danger Mark</th>
                <th className="p-2 border border-slate-200">Surge Status</th>
              </tr>
            </thead>
            <tbody className="font-mono divide-y divide-slate-200">
              <tr>
                <td className="p-2 border font-bold">Pandu (Kamrup Metro)</td>
                <td className="p-2 border text-red-600 font-bold">50.85 m</td>
                <td className="p-2 border">49.68 m</td>
                <td className="p-2 border text-red-600 font-bold">+1.17 m Above Danger Mark</td>
              </tr>
              <tr>
                <td className="p-2 border font-bold">Nematighat (Jorhat)</td>
                <td className="p-2 border text-red-600 font-bold">86.20 m</td>
                <td className="p-2 border">85.04 m</td>
                <td className="p-2 border text-red-600 font-bold">+1.16 m Above Danger Mark</td>
              </tr>
              <tr>
                <td className="p-2 border font-bold">Dhubri Port</td>
                <td className="p-2 border text-red-600 font-bold">29.95 m</td>
                <td className="p-2 border">28.62 m</td>
                <td className="p-2 border text-red-600 font-bold">+1.33 m Above Danger Mark</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Signatures */}
        <div className="pt-8 border-t-2 border-slate-900 grid grid-cols-2 gap-8 text-xs">
          <div>
            <div className="font-bold text-slate-900">J. DAS, IAS</div>
            <div className="text-slate-500">State Relief Commissioner &amp; EOC Secretary</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">Verified via Government of Assam e-Sign</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-slate-900">HON. CHIEF MINISTER'S OFFICE</div>
            <div className="text-slate-500">Crisis Monitoring Apex Cell</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">Relayed to Ministry of Home Affairs, New Delhi</div>
          </div>
        </div>

      </div>

      {/* Footer Buttons */}
      <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs print:hidden">
        <span className="text-slate-500 font-mono">Government of Assam • Confidential State Document</span>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition flex items-center gap-1.5 shadow">
            <i data-lucide="printer" className="w-4 h-4"></i>
            <span>Print Report</span>
          </button>
          <button className="px-4 py-2 bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold rounded-xl transition">Close</button>
        </div>
      </div>

    </div>
  </div>

  {/* Shared RakshaSetu Core Engines */}
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
