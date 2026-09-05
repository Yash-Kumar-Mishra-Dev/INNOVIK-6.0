import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { AdminSidebar } from '@/components/AdminSidebar';

import Link from 'next/link';
import { AdminPlatformChart, AdminUserChart } from '../../components/ClientCharts';

export default function Admin() {
  return (
    <>
      

  {/* UNIFIED CONNECTED NAV BAR (Synchronized across all panels) */}
  {/* UNIFIED CONNECTED NAV BAR (Synchronized across all panels) */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="SYSTEM ADMIN" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <AdminSidebar activePage="admin" isMobile={true} />



  {/* SUB-BAR: Official Specification Title Banner */}
  <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white px-4 lg:px-6 py-2 shadow-sm border-b border-purple-950 flex flex-wrap items-center justify-between gap-3 text-xs">
    <div className="max-w-[1720px] mx-auto w-full flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="font-extrabold tracking-wide uppercase">4. ADMIN PANEL – MANAGE &amp; OPTIMIZE SYSTEM</span>
        <span className="text-purple-200 hidden md:inline">• System management, user control &amp; platform analytics</span>
      </div>
      <div className="flex items-center gap-3 font-mono text-[11px] text-purple-200">
        <span>Kong Gateway Cluster</span>
        <span>•</span>
        <span className="text-white font-bold">18 May 2025 | 10:30 AM</span>
      </div>
    </div>
  </div>

  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">

    {/* LEFT SIDEBAR (Deep Indigo / Purple Command Sidebar) */}
    <AdminSidebar activePage="admin" />

    {/* MAIN CONTENT AREA */}
    <main className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar p-4 lg:p-6 space-y-6">
      
      {/* SUB-HEADER: Date & Gateway Cluster Pill */}
      <div className="glass-card p-3.5 rounded-2xl flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
          <i data-lucide="clock" className="w-4 h-4 text-purple-600 dark:text-purple-400"></i>
          <span>18 May 2025 | 10:30 AM</span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 font-mono border border-emerald-200 dark:border-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Kong Gateway: Online
          </span>
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center gap-1.5 font-mono border border-purple-200 dark:border-purple-800">
            Keycloak Realm: Synced
          </span>
        </div>
      </div>

      {/* DIRECT OPERATIONAL ACCESS TO CITIZEN & FIELD RESPONDER (Requested: Admin should have access to citizen and field responder panel) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Citizen Panel Oversight Card */}
        <div className="glass-card p-5 rounded-2xl border-l-4 border-l-emerald-500 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <i data-lucide="user-check" className="w-5 h-5"></i>
              </div>
              <div>
                <h3 className="font-black text-sm text-slate-900 dark:text-white">Citizen Panel &amp; SOS Management</h3>
                <p className="text-[11px] text-slate-500">Live oversight of citizen distress beacons &amp; incident reports</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">112 ACTIVE</span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <span className="text-slate-500">Today's Ingest: <b>142 Reports</b> • <b>4 Critical SOS</b></span>
            <a href="/citizen" className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center gap-1">
              <span>Open Citizen Panel →</span>
            </a>
          </div>
        </div>

        {/* Field Responder Fleet Oversight Card */}
        <div className="glass-card p-5 rounded-2xl border-l-4 border-l-blue-600 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <i data-lucide="shield" className="w-5 h-5"></i>
              </div>
              <div>
                <h3 className="font-black text-sm text-slate-900 dark:text-white">Field Responder Tactical Fleet</h3>
                <p className="text-[11px] text-slate-500">NDRF &amp; SDRF squads, boat tracking, and mission triage</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-[10px] font-bold">14 SQUADS LIVE</span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <span className="text-slate-500">Active Missions: <b>8 Missions</b> • <b>140ms Telemetry</b></span>
            <a href="/responder" className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition flex items-center gap-1">
              <span>Open Tactical HUD →</span>
            </a>
          </div>
        </div>

      </div>

      {/* TOP 5 STAT CARDS (GET /api/v1/admin/dashboard/status) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        
        {/* 1. Total Users */}
        <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 hover:-translate-y-0.5 transition">
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center text-lg font-bold flex-shrink-0 border border-purple-200 dark:border-purple-900/50 shadow-sm">
            <i data-lucide="users" className="w-5 h-5"></i>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">1,245</div>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Total Users</div>
          </div>
        </div>

        {/* 2. Active Incidents */}
        <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 hover:-translate-y-0.5 transition">
          <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center text-lg font-bold flex-shrink-0 border border-orange-200 dark:border-orange-900/50 shadow-sm">
            <i data-lucide="alert-triangle" className="w-5 h-5"></i>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">156</div>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Active Incidents</div>
          </div>
        </div>

        {/* 3. Departments */}
        <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 hover:-translate-y-0.5 transition">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg font-bold flex-shrink-0 border border-blue-200 dark:border-blue-900/50 shadow-sm">
            <i data-lucide="building" className="w-5 h-5"></i>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">85</div>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Departments</div>
          </div>
        </div>

        {/* 4. Rescue Teams */}
        <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 hover:-translate-y-0.5 transition">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-400 flex items-center justify-center text-lg font-bold flex-shrink-0 border border-indigo-200 dark:border-indigo-900/50 shadow-sm">
            <i data-lucide="cross" className="w-5 h-5"></i>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">4</div>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Rescue Teams</div>
          </div>
        </div>

        {/* 5. System Uptime */}
        <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 col-span-2 sm:col-span-1 hover:-translate-y-0.5 transition">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg font-bold flex-shrink-0 border border-emerald-200 dark:border-emerald-900/50 shadow-sm">
            <i data-lucide="activity" className="w-5 h-5"></i>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">98%</div>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">System Uptime</div>
          </div>
        </div>

      </div>

      {/* MIDDLE ROW: PLATFORM OVERVIEW, USER DISTRIBUTION, SYSTEM HEALTH */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Platform Overview Chart (col-span-6) */}
        <div className="lg:col-span-6 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2">
            <h2 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i data-lucide="trending-up" className="w-4 h-4 text-purple-600 dark:text-purple-400"></i> Platform Overview
            </h2>

            {/* Multi-line chart legend */}
            <div className="flex items-center gap-3 text-[10px] font-semibold text-slate-600 dark:text-slate-300 font-mono">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-600"></span> Users</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Incidents</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Reports</span>
            </div>
          </div>

          <div className="h-52 relative">
            <AdminPlatformChart />
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono">
            <span>Aggregated Kafka Event Stream</span>
            <span>12 May – 18 May</span>
          </div>
        </div>

        {/* User Distribution Donut (col-span-3) */}
        <div className="lg:col-span-3 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2">
            <h2 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i data-lucide="pie-chart" className="w-4 h-4 text-purple-600 dark:text-purple-400"></i> User Distribution
            </h2>
          </div>

          <div className="h-36 relative flex items-center justify-center">
            <AdminUserChart />
          </div>

          {/* Legend list */}
          <div className="space-y-1 text-[10px] text-slate-600 dark:text-slate-300 mt-2 font-medium">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-600"></span> Citizens</span>
              <span className="font-bold text-slate-900 dark:text-white font-mono">65%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Government</span>
              <span className="font-bold text-slate-900 dark:text-white font-mono">18%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-600"></span> Rescue Teams</span>
              <span className="font-bold text-slate-900 dark:text-white font-mono">12%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-pink-500"></span> Admin</span>
              <span className="font-bold text-slate-900 dark:text-white font-mono">5%</span>
            </div>
          </div>
        </div>

        {/* System Health (col-span-3) */}
        <div className="lg:col-span-3 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-3">
              <h2 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="shield-check" className="w-4 h-4 text-emerald-600"></i> System Health (Prometheus)
              </h2>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded font-mono">All Green</span>
            </div>

            <div className="space-y-2.5 text-xs">
              
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Server Status</span>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Operational
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Database (PostGIS)</span>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Operational
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <span className="font-semibold text-slate-800 dark:text-slate-200">API Services (NestJS)</span>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Operational
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Storage (AWS S3)</span>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Operational
                </span>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-slate-400 mt-2 font-mono">Latency: 18ms • AWS ap-south-1</div>
        </div>

      </div>

      {/* LOWER ROW: RECENT ACTIVITY & SYSTEM ANALYTICS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Recent Activity Table (col-span-8) */}
        <div className="lg:col-span-8 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-3">
              <h2 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="history" className="w-4 h-4 text-purple-600"></i> Recent Activity (AuditLog Trail)
              </h2>
              <button className="text-xs text-purple-600 font-bold hover:underline">View All</button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-[10px] text-slate-400 uppercase border-b border-slate-200 dark:border-slate-800 pb-2 font-mono">
                    <th className="py-1.5 font-semibold">Activity</th>
                    <th className="py-1.5 font-semibold">User</th>
                    <th className="py-1.5 font-semibold">Time</th>
                    <th className="py-1.5 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="py-2.5 font-semibold text-slate-900 dark:text-white">New Incident Reported</td>
                    <td className="py-2.5 text-slate-500">Citizen User</td>
                    <td className="py-2.5 font-mono text-[11px]">10:15 AM</td>
                    <td className="py-2.5 text-right"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-slate-900 dark:text-white">Alert Sent</td>
                    <td className="py-2.5 text-slate-500">System</td>
                    <td className="py-2.5 font-mono text-[11px]">10:08 AM</td>
                    <td className="py-2.5 text-right"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-slate-900 dark:text-white">Resource Updated</td>
                    <td className="py-2.5 text-slate-500">Admin User</td>
                    <td className="py-2.5 font-mono text-[11px]">10:00 AM</td>
                    <td className="py-2.5 text-right"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-slate-900 dark:text-white">User Registered</td>
                    <td className="py-2.5 text-slate-500">Citizen User</td>
                    <td className="py-2.5 font-mono text-[11px]">09:45 AM</td>
                    <td className="py-2.5 text-right"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 mt-2 font-mono">Immutable append-only audit trail in PostgreSQL</div>
        </div>

        {/* System Analytics 4 Tiles (col-span-4) */}
        <div className="lg:col-span-4 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="pb-2 border-b border-slate-200 dark:border-slate-800 mb-3">
              <h2 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="bar-chart" className="w-4 h-4 text-purple-600"></i> System Analytics
              </h2>
            </div>

            {/* 4 Metric Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
              
              {/* Reports */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400">Reports</div>
                <div className="text-xl font-black text-slate-900 dark:text-white font-mono mt-0.5">2,450</div>
                <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 font-mono">↑ 12%</div>
              </div>

              {/* Alerts Sent */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400">Alerts Sent</div>
                <div className="text-xl font-black text-slate-900 dark:text-white font-mono mt-0.5">1,320</div>
                <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 font-mono">↑ 8%</div>
              </div>

              {/* Active Sessions */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400">Active Sessions</div>
                <div className="text-xl font-black text-slate-900 dark:text-white font-mono mt-0.5">3,210</div>
                <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 font-mono">↑ 15%</div>
              </div>

              {/* Data Usage */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400">Data Usage</div>
                <div className="text-xl font-black text-slate-900 dark:text-white font-mono mt-0.5">120 GB</div>
                <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 font-mono">↑ 10%</div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-slate-400 mt-2 font-mono">Telemetry rolling 24-hour cycle</div>
        </div>

      </div>

      {/* BOTTOM ROW: INNOVATIVE FEATURES */}
      <div className="glass-card p-4 rounded-2xl space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">INNOVATIVE FEATURES</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Enterprise Management &amp; Resilience</span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">Click to inspect subsystem</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          
          {/* F1 */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-purple-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="shield-alert" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">AI Anomaly Detection</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Detect unusual patterns &amp; threats</div>
          </div>

          {/* F2 */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-blue-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="hard-drive" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Auto Backup</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">POST /api/v1/admin/backup/run</div>
          </div>

          {/* F3 */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-emerald-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="bell" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Smart Notifications</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Intelligent notification management</div>
          </div>

          {/* F4 */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-indigo-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="activity" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Performance Monitoring</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Real-time system monitoring</div>
          </div>

          {/* F5 */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-pink-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="lock" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Role-Based Access</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Granular access control</div>
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

  {/* INTERACTIVE MODAL */}
  <div id="admin-modal" className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[1000] hidden flex items-center justify-center p-4">
    <div className="glass-card bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-md p-6 space-y-4 transform transition-all scale-95 opacity-0 duration-200" id="admin-modal-container">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <h3 id="admin-modal-title" className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"></h3>
        <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl">
          <i data-lucide="x" className="w-5 h-5"></i>
        </button>
      </div>
      <div id="admin-modal-body" className="text-xs text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed"></div>
      <div className="flex justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
        <button className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 transition shadow-md shadow-purple-600/30">Close</button>
      </div>
    </div>
  </div>

  

  {/* Shared RakshaSetu Core Engines */}
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
