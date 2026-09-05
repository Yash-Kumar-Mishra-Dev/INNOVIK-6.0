import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { ResponderSidebar } from '@/components/ResponderSidebar';

import Link from 'next/link';

export default function Responder() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* BROAD, EYE-CATCHY NAV BAR (Requirement 1, 2, 3, 12, 19, 22) */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="TACTICAL HUD" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <ResponderSidebar activePage="responder" isMobile={true} />



  {/* SUB-BAR: Official Operational Sector Banner */}
  <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-4 lg:px-8 py-2 shadow-sm border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
    <div className="max-w-[1720px] mx-auto w-full flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="font-extrabold tracking-wide uppercase">3. RESCUE TEAM PANEL – RESPOND &amp; SAVE LIVES</span>
        <span className="text-blue-200 hidden md:inline">• Tools &amp; real-time information for Field teams &amp; responders</span>
      </div>
      <div className="flex items-center gap-3 font-mono text-[11px] text-blue-200">
        <span>Unit: NDRF 1st Battalion</span>
        <span>•</span>
        <span className="text-white font-bold">Callsign: Alpha-Lead</span>
      </div>
    </div>
  </div>

  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">

    {/* LEFT SIDEBAR (Tactical Navy/Black Sidebar) */}
    <ResponderSidebar activePage="responder" />

    {/* MAIN CONTENT AREA */}
    <main className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar p-4 lg:p-6 space-y-6">
      
      {/* TOP 5 STAT CARDS (GET /api/v1/field/missions) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        
        {/* 1. Active Missions */}
        <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 hover:-translate-y-0.5 transition">
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center text-lg font-bold flex-shrink-0 border border-purple-200 dark:border-purple-900/50 shadow-sm">
            <i data-lucide="target" className="w-5 h-5"></i>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">5</div>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Active Missions</div>
          </div>
        </div>

        {/* 2. Team Members Deployed */}
        <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 hover:-translate-y-0.5 transition">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg font-bold flex-shrink-0 border border-blue-200 dark:border-blue-900/50 shadow-sm">
            <i data-lucide="users" className="w-5 h-5"></i>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">12</div>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Responders Deployed</div>
          </div>
        </div>

        {/* 3. New Assignments */}
        <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 hover:-translate-y-0.5 transition">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg font-bold flex-shrink-0 border border-indigo-200 dark:border-indigo-900/50 shadow-sm">
            <i data-lucide="cpu" className="w-5 h-5"></i>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">3</div>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">New Assignments</div>
            <div className="text-[9px] text-indigo-600 dark:text-indigo-400 font-semibold font-mono">SRS P1 Priority</div>
          </div>
        </div>

        {/* 4. Critical Alerts */}
        <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 hover:-translate-y-0.5 transition">
          <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 flex items-center justify-center text-lg font-bold flex-shrink-0 border border-red-200 dark:border-red-900/50 shadow-sm">
            <i data-lucide="alert-triangle" className="w-5 h-5"></i>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">2</div>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Critical Alerts</div>
          </div>
        </div>

        {/* 5. Resources Available */}
        <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 col-span-2 sm:col-span-1 hover:-translate-y-0.5 transition">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg font-bold flex-shrink-0 border border-emerald-200 dark:border-emerald-900/50 shadow-sm">
            <i data-lucide="check-circle" className="w-5 h-5"></i>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">85%</div>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Resources Ready</div>
          </div>
        </div>

      </div>

      {/* MIDDLE ROW: MISSION QUEUE, MISSION MAP & TEAM/COMMS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT COLUMN: MISSION QUEUE (SRS Section 8.2) (col-span-3) */}
        <div className="lg:col-span-3 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2.5">
              <h2 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="list-ordered" className="w-4 h-4 text-orange-600"></i> Priority Mission Queue
              <button className="text-[10px] text-blue-600 dark:text-cyan-400 font-bold hover:underline flex items-center gap-1">
                <span>View All (Full Screen Cards)</span>
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path></svg>
              </button>
            </h2></div>

            <div className="space-y-2.5">
              
              {/* Mission 1 */}
              <div className="p-3 rounded-xl border-2 border-orange-500 bg-orange-50/70 dark:bg-orange-950/30 cursor-pointer transition hover:scale-[1.01]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-orange-700 dark:text-orange-400">#M-2025-045</span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400">P1 Critical</span>
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">Flood Rescue</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Assam, India</div>
                <div className="text-[10px] font-mono text-orange-700 dark:text-orange-300 font-bold mt-1">ETA: 15 min • Score: 92/100</div>
              </div>

              {/* Mission 2 */}
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-400 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-slate-500">#M-2025-046</span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">P2 Medium</span>
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">Medical Aid</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Bihar, India</div>
                <div className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-bold mt-1">ETA: 30 min • Score: 71/100</div>
              </div>

              {/* Mission 3 */}
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-400 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-slate-500">#M-2025-047</span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400">P1 Critical</span>
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">Evacuation</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Uttarakhand, India</div>
                <div className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-bold mt-1">ETA: 45 min • Score: 88/100</div>
              </div>

            </div>
          </div>

          <div className="p-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-[9px] text-slate-500 dark:text-slate-400 mt-2 font-mono">
            <strong>Formula:</strong> Score = Severity + People + Dist + Time + Res
          </div>
        </div>

        {/* CENTER COLUMN: TACTICAL MISSION MAP (col-span-6) */}
        <div className="lg:col-span-6 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2">
            <h2 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i data-lucide="map-pin" className="w-4 h-4 text-blue-600"></i> Tactical Route
            </h2>
            {/* Sector State Selector */}
            <div className="flex items-center gap-2">
              <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">Sector State:</label>
              <select id="rescue-state-select" className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold focus:outline-none">
              </select>
            </div>

            {/* Legend Overlay Chips */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-600 dark:text-slate-300 font-medium">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Target</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-600"></span> Team</span>
              <span className="flex items-center gap-1"><span className="w-3 h-1 bg-blue-600 rounded"></span> Safe Route</span>
              <span className="flex items-center gap-1"><span className="w-3 h-1 border-t border-dashed border-red-500"></span> Blocked</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-emerald-600"></span> Shelter</span>
            </div>
          </div>

          {/* Leaflet / Mapbox Map Box */}
          <div className="relative w-full h-[330px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <div id="rescue-map" className="w-full h-full z-10"></div>

            {/* Explicit Map Zoom In / Out Controls (Requested: Zoom in/out option in map) */}
            <div className="absolute top-3 right-3 z-[400] flex flex-col gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl shadow-lg border border-slate-300 dark:border-slate-700">
              <button type="button" className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-base text-slate-800 dark:text-white" title="Zoom In">+</button>
              <button type="button" className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-base text-slate-800 dark:text-white" title="Zoom Out">-</button>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-2 font-mono">
            <span>WebSocket Channel: <strong>team.tracking</strong></span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Latency: 140ms</span>
          </div>
        </div>

        {/* RIGHT COLUMN: TEAM STATUS & LIVE COMMS (col-span-3) */}
        <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
          
          {/* Team Status Card */}
          <div className="glass-card p-4 rounded-2xl">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800 mb-2 flex items-center gap-1.5">
              <i data-lucide="shield" className="w-4 h-4 text-emerald-600"></i> Team Status (SRS Section 6.3)
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Team Alpha</span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> On Route
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Team Bravo</span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> On Site
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Team Charlie</span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> On Site
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Team Delta</span>
                <span className="flex items-center gap-1 text-[11px] text-orange-600 dark:text-orange-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span> Returning
                </span>
              </div>
            </div>
          </div>

          {/* Live Communication (Two-Way Radio Chat) */}
          <div className="glass-card p-4 rounded-2xl flex-1 flex flex-col justify-between" id="comms-chat-section">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="radio" className="w-4 h-4 text-teal-600"></i> Live Communication
              </h3>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">Ch 16 / UHF</span>
            </div>

            {/* Chat Stream */}
            <div className="h-36 overflow-y-auto space-y-2 text-[11px] p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl custom-scrollbar radio-static" id="radio-messages">
              <div className="space-y-0.5">
                <span className="font-bold text-blue-700 dark:text-blue-400">Control Room:</span>
                <p className="text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700">All teams, please update status.</p>
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-emerald-700 dark:text-emerald-400">Team Alpha:</span>
                <p className="text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700">Reached location, assessing situation.</p>
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-orange-700 dark:text-orange-400">Team Bravo:</span>
                <p className="text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700">Rescue in progress, need medical support.</p>
              </div>
            </div>

            {/* Chat Input */}
            <div className="flex gap-1.5 mt-2">
              <input type="text" id="radio-input" placeholder="Type a radio message..." className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-orange-600" />
              <button className="px-3.5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-md shadow-orange-600/30">
                <i data-lucide="send" className="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* LOWER ROW: MISSION DETAILS, RESOURCES INVENTORY & INNOVATIVE FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
        
        {/* LOWER LEFT: MISSION DETAILS (col-span-4) */}
        <div className="lg:col-span-4 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-3">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="info" className="w-4 h-4 text-orange-600"></i> Mission Details (Entity: Mission)
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full font-mono">P1 In Progress</span>
            </div>

            <div className="flex gap-3">
              <div className="w-24 h-24 rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700 relative">
                <img src="https://images.unsplash.com/photo-1547683905-f686c993aae5?w=300&amp;auto=format&amp;fit=crop&amp;q=80" alt="Flood Zone" className="w-full h-full object-cover" />
                <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[8px] font-mono px-1 rounded">S3 PROOF</span>
              </div>

              <div className="space-y-1 text-xs">
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">Flood Rescue Operation</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400"><strong>Location:</strong> Village X, Assam</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400"><strong>Priority:</strong> <span className="text-red-600 font-bold">High (P1)</span></div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400"><strong>People Affected:</strong> <span className="font-bold text-slate-800 dark:text-slate-200">120</span></div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400"><strong>Status:</strong> <span className="text-blue-600 dark:text-blue-400 font-semibold">In Progress</span></div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <button className="py-2 px-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-md shadow-blue-600/20">
              View Details
            </button>
            <button className="py-2 px-3.5 bg-red-50 dark:bg-red-950/40 hover:bg-red-100 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/60 rounded-xl text-xs font-bold transition">
              Escalate (SRS 6.3)
            </button>
          </div>
        </div>

        {/* LOWER CENTER: RESOURCES INVENTORY (col-span-4) */}
        <div className="lg:col-span-4 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-3">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="box" className="w-4 h-4 text-orange-600"></i> Resources Inventory (Resource Service)
              </h3>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">In Use / Total</span>
            </div>

            <div className="space-y-3 text-xs">
              
              {/* Boats */}
              <div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Boats</span>
                  <span className="font-mono text-slate-900 dark:text-white font-bold">6/10 (60%)</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{"width":"60%"}}></div>
                </div>
              </div>

              {/* Life Jackets */}
              <div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Life Jackets</span>
                  <span className="font-mono text-slate-900 dark:text-white font-bold">45/60 (75%)</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-2.5 rounded-full" style={{"width":"75%"}}></div>
                </div>
              </div>

              {/* Medical Kits */}
              <div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Medical Kits</span>
                  <span className="font-mono text-slate-900 dark:text-white font-bold">12/20 (60%)</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-2.5 rounded-full" style={{"width":"60%"}}></div>
                </div>
              </div>

              {/* Food Packets */}
              <div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Food Packets</span>
                  <span className="font-mono text-slate-900 dark:text-white font-bold">100/150 (67%)</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{"width":"67%"}}></div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-slate-400 mt-2 font-mono">Resource transition: Allocated -&gt; In Use</div>
        </div>

        {/* LOWER RIGHT: INNOVATIVE FEATURES (col-span-4) */}
        <div className="lg:col-span-4 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2.5">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-800">INNOVATIVE FEATURES</span>
              <span className="text-[10px] text-slate-400">Field Telemetry Suite</span>
            </div>

            <div className="space-y-1.5">
              
              {/* F1 */}
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-orange-50 dark:hover:bg-orange-950/30 border border-slate-200/60 dark:border-slate-700/60 hover:border-orange-300 cursor-pointer transition flex items-center gap-2.5">
                <i data-lucide="navigation" className="w-4 h-4 text-orange-600"></i>
                <span className="text-xs font-bold text-slate-900 dark:text-white">Real-time Team Tracking</span>
              </div>

              {/* F2 */}
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-orange-50 dark:hover:bg-orange-950/30 border border-slate-200/60 dark:border-slate-700/60 hover:border-orange-300 cursor-pointer transition flex items-center gap-2.5">
                <i data-lucide="glasses" className="w-4 h-4 text-indigo-600"></i>
                <span className="text-xs font-bold text-slate-900 dark:text-white">AR Navigation Support</span>
              </div>

              {/* F3 */}
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-orange-50 dark:hover:bg-orange-950/30 border border-slate-200/60 dark:border-slate-700/60 hover:border-orange-300 cursor-pointer transition flex items-center gap-2.5">
                <i data-lucide="alert-octagon" className="w-4 h-4 text-red-600"></i>
                <span className="text-xs font-bold text-slate-900 dark:text-white">AI Risk Alerts</span>
              </div>

              {/* F4 */}
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-orange-50 dark:hover:bg-orange-950/30 border border-slate-200/60 dark:border-slate-700/60 hover:border-orange-300 cursor-pointer transition flex items-center gap-2.5">
                <i data-lucide="watch" className="w-4 h-4 text-emerald-600"></i>
                <span className="text-xs font-bold text-slate-900 dark:text-white">Wearable Integration</span>
              </div>

              {/* F5 */}
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-orange-50 dark:hover:bg-orange-950/30 border border-slate-200/60 dark:border-slate-700/60 hover:border-orange-300 cursor-pointer transition flex items-center gap-2.5">
                <i data-lucide="file-check" className="w-4 h-4 text-purple-600"></i>
                <span className="text-xs font-bold text-slate-900 dark:text-white">Auto Incident Documentation</span>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-slate-400 mt-2 font-mono">Offline Sync Queue: 0 pending</div>
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
  <div id="rescue-modal" className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[1000] hidden flex items-center justify-center p-4">
    <div className="glass-card bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-md p-6 space-y-4 transform transition-all scale-95 opacity-0 duration-200" id="rescue-modal-container">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <h3 id="rescue-modal-title" className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"></h3>
        <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl">
          <i data-lucide="x" className="w-5 h-5"></i>
        </button>
      </div>
      <div id="rescue-modal-body" className="text-xs text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed"></div>
      <div className="flex justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
        <button className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 transition">Close</button>
      </div>
    </div>
  </div>

  

  {/* ========================================================================= */}
  {/* MODAL 1: PRIORITY MISSION QUEUE FULL-SCREEN 3-4 COLUMN VIEW (Req 15)      */}
  {/* ========================================================================= */}
  <div id="priority-mission-modal" className="fixed inset-0 z-[9990] bg-slate-950/80 backdrop-blur-md hidden flex flex-col p-4 md:p-8 overflow-y-auto">
    <div className="max-w-7xl mx-auto w-full bg-white dark:bg-slate-900 rounded-3xl shadow-md border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden my-auto">
      
      {/* Header */}
      <div className="p-6 bg-slate-900 text-white border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center font-black text-xl">
            🎯
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black tracking-tight text-white">Priority Mission Queue — Tactical Roster</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-mono font-bold border border-red-500/30">6 ACTIVE SORTIES</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">SRS Multi-Factor Triage Scored: Depth (40%) + Vulnerability (30%) + Age Index (20%) + Time Pending (10%)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-2 shadow">
            <i data-lucide="file-text" className="w-4 h-4"></i>
            <span>Export Roster SitRep</span>
          </button>
          <button className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition" title="Close">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* 3 to 4 Column Grid of Detailed Mission Briefs */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-slate-50 dark:bg-slate-950/60 max-h-[75vh] overflow-y-auto custom-scrollbar">

        {/* Mission 1 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-500/50 shadow-md flex flex-col justify-between hover:shadow-lg transition">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded border border-red-200 dark:border-red-900">#M-2025-045</span>
              <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[11px] font-black tracking-wide">SCORE: 92 / 100</span>
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Rooftop Stranding • Majuli Sector 3</h3>
            <p className="text-xs text-slate-500 mb-3">Rapid rise in Brahmaputra overflow. 18 victims stranded on community hall roof, 4 infants &amp; 6 geriatric patients.</p>

            <div className="space-y-1.5 text-xs bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 mb-4 font-mono text-[11px]">
              <div className="flex justify-between"><span className="text-slate-400">Assigned Craft:</span> <span className="font-bold text-slate-900 dark:text-white">Zodiac Boat #4 (Alpha)</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Coordinates:</span> <span className="text-blue-500 font-bold">26.2300° N, 91.7900° E</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Water Depth:</span> <span className="text-red-500 font-bold">2.8m (Fast Current)</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Victim Count:</span> <span className="font-bold text-emerald-500">18 Souls (High Priority)</span></div>
              <div className="flex justify-between"><span className="text-slate-400">ETA / Status:</span> <span className="font-bold text-amber-500">14 Mins • In Nav Route</span></div>
            </div>
          </div>
          <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition text-center">Focus Map &amp; Route</button>
            <button className="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition">Radio</button>
          </div>
        </div>

        {/* Mission 2 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-500/40 shadow-md flex flex-col justify-between hover:shadow-lg transition">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded border border-red-200 dark:border-red-900">#M-2025-046</span>
              <span className="px-2.5 py-0.5 rounded-full bg-red-500 text-white text-[11px] font-black tracking-wide">SCORE: 89 / 100</span>
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Submerged Health Center ICU • Dhubri</h3>
            <p className="text-xs text-slate-500 mb-3">Ground floor flooded, backup diesel generator submerged. 12 critical ICU patients requiring battery ventilator support.</p>

            <div className="space-y-1.5 text-xs bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 mb-4 font-mono text-[11px]">
              <div className="flex justify-between"><span className="text-slate-400">Assigned Craft:</span> <span className="font-bold text-slate-900 dark:text-white">Zodiac Boat #2 (Bravo)</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Coordinates:</span> <span className="text-blue-500 font-bold">26.0200° N, 89.9800° E</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Water Depth:</span> <span className="text-red-500 font-bold">1.9m (Electrocution Risk)</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Victim Count:</span> <span className="font-bold text-emerald-500">12 Patients + 4 Medics</span></div>
              <div className="flex justify-between"><span className="text-slate-400">ETA / Status:</span> <span className="font-bold text-amber-500">22 Mins • Med Team Onboard</span></div>
            </div>
          </div>
          <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition text-center">Focus Map &amp; Route</button>
            <button className="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition">Backup</button>
          </div>
        </div>

        {/* Mission 3 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-500/40 shadow-md flex flex-col justify-between hover:shadow-lg transition">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900">#M-2025-047</span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[11px] font-black tracking-wide">SCORE: 84 / 100</span>
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Embankment Breach • Kaziranga Buffer</h3>
            <p className="text-xs text-slate-500 mb-3">50m earthen levee breached by river surge. Water surrounding 7 homesteads. Evacuation of families and emergency cattle corral.</p>

            <div className="space-y-1.5 text-xs bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 mb-4 font-mono text-[11px]">
              <div className="flex justify-between"><span className="text-slate-400">Assigned Craft:</span> <span className="font-bold text-slate-900 dark:text-white">Airboat #1 (Gamma)</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Coordinates:</span> <span className="text-blue-500 font-bold">26.5800° N, 93.1700° E</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Water Depth:</span> <span className="text-amber-500 font-bold">1.4m (Debris / Mud)</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Victim Count:</span> <span className="font-bold text-emerald-500">25 Residents</span></div>
              <div className="flex justify-between"><span className="text-slate-400">ETA / Status:</span> <span className="font-bold text-blue-500">30 Mins • Staging Sandbags</span></div>
            </div>
          </div>
          <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition text-center">Focus Map &amp; Route</button>
            <button className="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition">Alert</button>
          </div>
        </div>

        {/* Mission 4 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-500/30 shadow-md flex flex-col justify-between hover:shadow-lg transition">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900">#M-2025-048</span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[11px] font-black tracking-wide">SCORE: 78 / 100</span>
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Trapped School Bus • Raised NH-58</h3>
            <p className="text-xs text-slate-500 mb-3">School bus engine stalled in 0.8m surging cross-current over culvert. 34 school students safe inside, but water rising steadily.</p>

            <div className="space-y-1.5 text-xs bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 mb-4 font-mono text-[11px]">
              <div className="flex justify-between"><span className="text-slate-400">Assigned Craft:</span> <span className="font-bold text-slate-900 dark:text-white">NDRF Heavy 6x6 Truck</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Coordinates:</span> <span className="text-blue-500 font-bold">26.5100° N, 93.9600° E</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Water Depth:</span> <span className="text-amber-500 font-bold">0.85m (Culvert Overflow)</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Victim Count:</span> <span className="font-bold text-emerald-500">34 Students + 3 Staff</span></div>
              <div className="flex justify-between"><span className="text-slate-400">ETA / Status:</span> <span className="font-bold text-emerald-500">8 Mins • Tow Cable Ready</span></div>
            </div>
          </div>
          <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition text-center">Focus Map &amp; Route</button>
            <button className="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition">Patrol</button>
          </div>
        </div>

        {/* Mission 5 */}
        <div className="p-5 rounded-2xl glass-card flex flex-col justify-between hover:shadow-lg transition">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">#M-2025-049</span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-black tracking-wide">SCORE: 73 / 100</span>
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Potable Water &amp; Baby Food Drop • Silchar</h3>
            <p className="text-xs text-slate-500 mb-3">Isolated community cut off from supply lines for 36 hours. Water treatment plant contaminated. Airdrop of chlorine purification tablets.</p>

            <div className="space-y-1.5 text-xs bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 mb-4 font-mono text-[11px]">
              <div className="flex justify-between"><span className="text-slate-400">Assigned Craft:</span> <span className="font-bold text-slate-900 dark:text-white">Heavy-Lift Drone Swarm</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Coordinates:</span> <span className="text-blue-500 font-bold">24.8300° N, 92.7700° E</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Cargo Payload:</span> <span className="text-slate-900 dark:text-white font-bold">450kg AquaTabs &amp; Rations</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Victim Count:</span> <span className="font-bold text-emerald-500">120 Isolated Families</span></div>
              <div className="flex justify-between"><span className="text-slate-400">ETA / Status:</span> <span className="font-bold text-blue-500">18 Mins • Sortie #3 Airborne</span></div>
            </div>
          </div>
          <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition text-center">Focus Map &amp; Route</button>
            <button className="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition">Telemetry</button>
          </div>
        </div>

        {/* Mission 6 */}
        <div className="p-5 rounded-2xl glass-card flex flex-col justify-between hover:shadow-lg transition">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">#M-2025-050</span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-700 text-white text-[11px] font-black tracking-wide">SCORE: 67 / 100</span>
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Bamboo Footbridge Collapse • Nalbari</h3>
            <p className="text-xs text-slate-500 mb-3">Washed away footbridge severed village connection. 8 residents stranded on riverbank knoll with livestock.</p>

            <div className="space-y-1.5 text-xs bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 mb-4 font-mono text-[11px]">
              <div className="flex justify-between"><span className="text-slate-400">Assigned Craft:</span> <span className="font-bold text-slate-900 dark:text-white">SDRF Rubber Craft #2</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Coordinates:</span> <span className="text-blue-500 font-bold">26.4400° N, 91.4400° E</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Water Depth:</span> <span className="text-slate-900 dark:text-white font-bold">1.2m</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Victim Count:</span> <span className="font-bold text-emerald-500">8 Villagers</span></div>
              <div className="flex justify-between"><span className="text-slate-400">ETA / Status:</span> <span className="font-bold text-slate-400">40 Mins • Standby Dispatch</span></div>
            </div>
          </div>
          <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition text-center">Focus Map &amp; Route</button>
            <button className="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition">Mobilize</button>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="p-4 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-mono">Real-time priority sort updated every 15s via WebSockets</span>
        <button className="px-4 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-800 dark:text-white font-bold rounded-xl transition">Close Modal</button>
      </div>

    </div>
  </div>

  {/* ========================================================================= */}
  {/* MODAL 2: OFFICIAL PRINTABLE SITREP REPORT (Requirement 8)                 */}
  {/* ========================================================================= */}
  <div id="sitrep-report-modal" className="fixed inset-0 z-[9995] bg-slate-950/80 backdrop-blur-md hidden flex flex-col p-4 md:p-8 overflow-y-auto">
    <div className="max-w-4xl mx-auto w-full bg-white text-slate-900 rounded-3xl shadow-md border border-slate-200 flex flex-col overflow-hidden my-auto print:max-w-full print:border-none print:shadow-none">
      
      {/* Top Action Bar (hidden when printing) */}
      <div className="p-4 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
          <i data-lucide="check-circle" className="w-4 h-4"></i>
          <span>Official National Disaster Management Authority (NDMA) Situation Report</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow">
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
              <div className="text-xs font-black uppercase tracking-widest text-slate-500">Government of India • Ministry of Home Affairs</div>
              <h1 className="text-2xl font-black tracking-tight text-slate-950">RakshaSetu Situation Report (SITREP)</h1>
              <p className="text-xs text-slate-600 font-bold">National Spatial Crisis Management &amp; Disaster Response Command</p>
            </div>
          </div>
          <div className="text-right font-mono text-xs">
            <div className="font-bold text-slate-900">DOC ID: <span className="text-blue-700">SITREP-2025-0904</span></div>
            <div className="text-slate-500">INCIDENT: Brahmaputra Basin Floods</div>
            <div className="text-emerald-700 font-bold">STATUS: ACTIVE MOBILIZATION</div>
          </div>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs font-mono">
          <div>
            <div className="text-slate-500">GENERATED AT</div>
            <div className="font-bold text-slate-900" id="sitrep-timestamp">4 September 2025, 09:45 IST</div>
          </div>
          <div>
            <div className="text-slate-500">COMMAND SECTOR</div>
            <div className="font-bold text-slate-900">Eastern Region (Assam/NE)</div>
          </div>
          <div>
            <div className="text-slate-500">REPORTING SQUAD</div>
            <div className="font-bold text-slate-900">NDRF Battalion #1 (Alpha)</div>
          </div>
          <div>
            <div className="text-slate-500">THREAT LEVEL</div>
            <div className="font-bold text-red-600">LEVEL 4 - CRITICAL FLOOD</div>
          </div>
        </div>

        {/* 1. Executive Summary & Telemetry Data Present */}
        <div>
          <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-1 mb-3 uppercase tracking-wider flex items-center gap-2">
            <span>1. Operational Incident Statistics &amp; Telemetry</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-blue-600 font-mono">1,482</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Verified SOS Incidents</div>
              <div className="text-[10px] text-slate-400">94.2% geo-validated</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-emerald-600 font-mono">3,420</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Citizens Evacuated</div>
              <div className="text-[10px] text-slate-400">Last 24 hours</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-purple-600 font-mono">142</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Active Relief Shelters</div>
              <div className="text-[10px] text-slate-400">68% capacity filled</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm text-center">
              <div className="text-2xl font-black text-amber-600 font-mono">18,900</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Ration &amp; Medical Kits</div>
              <div className="text-[10px] text-slate-400">Airdropped / Delivered</div>
            </div>
          </div>
        </div>

        {/* 2. River Gauge Danger Levels */}
        <div>
          <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-1 mb-3 uppercase tracking-wider">
            2. CWC Hydrological Danger Levels (Brahmaputra Basin)
          </h2>
          <table className="w-full text-xs text-left border-collapse border border-slate-200">
            <thead className="bg-slate-100 font-bold text-slate-700 font-mono">
              <tr>
                <th className="p-2 border border-slate-200">Station / Basin</th>
                <th className="p-2 border border-slate-200">Current Level</th>
                <th className="p-2 border border-slate-200">Danger Level (DL)</th>
                <th className="p-2 border border-slate-200">Deviation</th>
                <th className="p-2 border border-slate-200">Trend</th>
              </tr>
            </thead>
            <tbody className="font-mono divide-y divide-slate-200">
              <tr>
                <td className="p-2 border font-bold">Pandu (Guwahati)</td>
                <td className="p-2 border text-red-600 font-bold">50.85 m</td>
                <td className="p-2 border">49.68 m</td>
                <td className="p-2 border text-red-600 font-bold">+1.17 m Above DL</td>
                <td className="p-2 border text-red-600">▲ Rising (+4cm/hr)</td>
              </tr>
              <tr>
                <td className="p-2 border font-bold">Nematighat (Jorhat)</td>
                <td className="p-2 border text-red-600 font-bold">86.20 m</td>
                <td className="p-2 border">85.04 m</td>
                <td className="p-2 border text-red-600 font-bold">+1.16 m Above DL</td>
                <td className="p-2 border text-amber-600">▲ Steady</td>
              </tr>
              <tr>
                <td className="p-2 border font-bold">Tezpur (Sonitpur)</td>
                <td className="p-2 border text-amber-600 font-bold">65.75 m</td>
                <td className="p-2 border">65.23 m</td>
                <td className="p-2 border text-amber-600 font-bold">+0.52 m Above DL</td>
                <td className="p-2 border text-red-600">▲ Rising (+2cm/hr)</td>
              </tr>
              <tr>
                <td className="p-2 border font-bold">Dhubri Port</td>
                <td className="p-2 border text-red-600 font-bold">29.95 m</td>
                <td className="p-2 border">28.62 m</td>
                <td className="p-2 border text-red-600 font-bold">+1.33 m Above DL</td>
                <td className="p-2 border text-red-600">▲ Rising (+6cm/hr)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3. Deployed Resources & Squad Assets */}
        <div>
          <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-1 mb-3 uppercase tracking-wider">
            3. Tactical Deployment Inventory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="font-bold text-slate-800 mb-1">NDRF &amp; SDRF FORCES</div>
              <ul className="space-y-1 text-slate-600">
                <li>• NDRF Battalions: 18 (720 Personnel)</li>
                <li>• SDRF Boat Units: 34 Teams</li>
                <li>• Civil Defence Volunteers: 1,200</li>
              </ul>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="font-bold text-slate-800 mb-1">MARITIME &amp; CRAFT ASSETS</div>
              <ul className="space-y-1 text-slate-600">
                <li>• Inflatable Zodiac Crafts: 84</li>
                <li>• Shallow Draft Airboats: 16</li>
                <li>• Deep River Rescue Cutters: 8</li>
              </ul>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="font-bold text-slate-800 mb-1">AIR &amp; LOGISTIC SUPPORT</div>
              <ul className="space-y-1 text-slate-600">
                <li>• IAF Mi-17 V5 Helicopters: 4</li>
                <li>• Heavy Payload Delivery Drones: 14</li>
                <li>• Satellite VSAT Comms: 6 Active</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Official Signatures */}
        <div className="pt-8 border-t-2 border-slate-900 grid grid-cols-2 gap-8 text-xs">
          <div>
            <div className="font-bold text-slate-900">INSPECTOR S. BORA</div>
            <div className="text-slate-500">Tactical Commander, NDRF Squad Alpha</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">Digitally Signed via RakshaSetu GovPKI (ID: PKI-NDRF-88231)</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-slate-900">J. DAS, IAS</div>
            <div className="text-slate-500">State Relief Commissioner &amp; EOC Secretary</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">Countersigned &amp; Broadcast to National Cabinet</div>
          </div>
        </div>

      </div>

      {/* Footer Buttons */}
      <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs print:hidden">
        <span className="text-slate-500 font-mono">Classification: RESTRICTED OFFICIAL SITREP • Government of India</span>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition flex items-center gap-1.5 shadow">
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
