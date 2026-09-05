import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { CitizenSidebar } from '@/components/CitizenSidebar';

import Link from 'next/link';

export default function Citizen() {
  return (
    <>
      

  {/* UNIFIED CONNECTED NAV BAR (Synchronized across all panels) */}
      {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="CITIZEN APP" />



  {/* SUB-BAR: Official Specification Title Banner */}
  <div className="bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 text-white px-4 lg:px-6 py-2 shadow-sm border-b border-green-950 flex flex-wrap items-center justify-between gap-3 text-xs">
    <div className="max-w-[1720px] mx-auto w-full flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="font-extrabold tracking-wide uppercase">2. CITIZEN PANEL – STAY INFORMED, STAY SAFE</span>
        <span className="text-emerald-200 hidden md:inline">• Empowering citizens with real-time alerts, reporting &amp; safety information</span>
      </div>
      <div className="flex items-center gap-3 font-mono text-[11px] text-emerald-200">
        <span>Verified Citizen GPS Link</span>
        <span>•</span>
        <span className="text-white font-bold">Guwahati, Assam</span>
      </div>
    </div>
  </div>

    {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <CitizenSidebar activePage="citizen" isMobile={true} />

<div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">

    {/* LEFT SIDEBAR (Clean White Sidebar with green active states) */}
    <CitizenSidebar activePage="citizen" />

    {/* MAIN CONTENT AREA */}
    <main className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar p-4 lg:p-6 space-y-6">
      
      {/* SUB-HEADER: Location Picker & Language Switcher */}
      <div className="glass-card p-3.5 rounded-2xl flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 cursor-pointer hover:bg-slate-200 transition">
            <i data-lucide="map-pin" className="w-4 h-4 text-red-500"></i>
            <span>Your Location:</span>
            <span id="citizen-current-loc" className="text-emerald-700 dark:text-emerald-400 font-bold">Guwahati, Assam</span>
            <i data-lucide="chevron-down" className="w-3 h-3 text-slate-400"></i>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          {/* Language Selector (SRS Section 10: Localization) */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 px-2.5 py-1.5 rounded-xl text-slate-700 dark:text-slate-200">
            <i data-lucide="globe" className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"></i>
            <select className="bg-transparent font-semibold focus:outline-none cursor-pointer text-xs">
              <option value="en">English</option>
              <option value="as">অসমীয়া (Assamese)</option>
              <option value="hi">हिन्दी (Hindi)</option>
              <option value="bn">বাংলা (Bengali)</option>
            </select>
          </div>
        </div>
      </div>

      {/* TOP 4 ALERT CARDS ROW (GET /api/v1/citizen/dashboard) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Critical Flood Warning (Vibrant Red Alert) */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-4 rounded-2xl shadow-lg shadow-red-600/20 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-15">
            <i data-lucide="alert-triangle" className="w-28 h-28"></i>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-100">
              <i data-lucide="alert-circle" className="w-4 h-4 animate-bounce"></i> Flood Warning
            </div>
            <div className="text-base font-extrabold mt-1 leading-tight">Brahmaputra River Basin</div>
            <div className="text-xs text-red-100 mt-1 font-medium">Avoid low-lying areas. Stay alert!</div>
          </div>
          <button className="mt-3 py-1.5 px-3.5 bg-white text-red-600 rounded-xl text-xs font-extrabold hover:bg-red-50 transition shadow-sm w-fit z-10">
            View Details
          </button>
        </div>

        {/* Card 2: Weather Update Card */}
        <div className="glass-card p-4 rounded-2xl flex items-center justify-between hover:-translate-y-0.5 transition">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Weather Update</div>
            <div className="text-3xl font-black text-slate-900 dark:text-white mt-0.5 font-mono">28°C</div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">Light Rain</div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono">Humidity 82% | Wind 12 km/h</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-500 flex items-center justify-center text-2xl border border-blue-200 dark:border-blue-900/50 shadow-sm">
            🌧️
          </div>
        </div>

        {/* Card 3: Nearest Shelter Card */}
        <div className="glass-card p-4 rounded-2xl flex flex-col justify-between hover:-translate-y-0.5 transition">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Nearest Shelter</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 leading-tight">Dispur High School</div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 font-mono">2.4 km away</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center border border-emerald-200 dark:border-emerald-900/50">
              <i data-lucide="home" className="w-5 h-5"></i>
            </div>
          </div>
          <button className="mt-3 py-1.5 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-700 dark:text-slate-200 hover:text-emerald-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 w-fit">
            <i data-lucide="navigation-2" className="w-3.5 h-3.5 text-emerald-600"></i> View on Map
          </button>
        </div>

        {/* Card 4: Emergency Call 112 SOS Card */}
        <div className="bg-gradient-to-br from-red-600 to-rose-700 text-white p-4 rounded-2xl shadow-lg shadow-red-600/20 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-red-100">Emergency Call</div>
            <div className="text-3xl font-black font-mono tracking-tight mt-0.5">112</div>
            <div className="text-[11px] text-red-100 mt-1 font-medium font-mono">SRS Channel: sos.alert (P1)</div>
          </div>
          <button className="w-14 h-14 rounded-full bg-white text-red-600 font-black text-sm flex flex-col items-center justify-center shadow-md hover:scale-105 active:scale-95 transition sos-ripple">
            <span>SOS</span>
            <span className="text-[8px] uppercase tracking-wider font-bold">Press</span>
          </button>
        </div>

      </div>

      {/* MIDDLE SECTION: LIVE SAFETY MAP & QUICK ACTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5" id="safety-map-container">
        
        {/* Live Safety Map (col-span-9) */}
        <div className="lg:col-span-9 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">Live Safety Map</h2>
            {/* State Location Selector */}
            <div className="flex items-center gap-2">
              <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">State / Region:</label>
              <select id="citizen-state-select" className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold focus:outline-none">
              </select>
            </div>
            </div>

            {/* Legend Pills */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300 font-medium">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Safe Zone</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Caution</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Danger</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-blue-600"></span> Shelter</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> You</span>
              
              <button className="ml-2 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1 transition">
                <i data-lucide="sliders-horizontal" className="w-3 h-3"></i> Filters
              </button>
            </div>
          </div>

          {/* Leaflet / Mapbox Container */}
          <div className="relative w-full h-[330px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <div id="citizen-map" className="w-full h-full z-10"></div>

            {/* Explicit Map Zoom In / Out Controls (Requested: Zoom in/out option in map) */}
            <div className="absolute top-3 right-3 z-[400] flex flex-col gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl shadow-lg border border-slate-300 dark:border-slate-700">
              <button type="button" className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-base text-slate-800 dark:text-white" title="Zoom In">+</button>
              <button type="button" className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-base text-slate-800 dark:text-white" title="Zoom Out">-</button>
            </div>

            <div className="absolute bottom-3 left-3 z-[400] glass-card p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-[10px] space-y-1 font-medium shadow-md">
              <div className="font-bold text-slate-900 dark:text-white">Guwahati Sector 2 Status:</div>
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">✓ Nearest Safe Elevation: 2.1 km South</div>
              <div className="text-amber-600 dark:text-amber-400 font-semibold">⚠ Low Road Inundated: GS Road near Ulubari</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-2 font-mono">
            <span>GPS Sensor Accuracy: ±4.2 meters</span>
            <span>Real-time Geofence: Active</span>
          </div>
        </div>

        {/* Quick Actions Column (col-span-3) */}
        <div className="lg:col-span-3 glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 pb-2 border-b border-slate-200 dark:border-slate-800 mb-3 flex items-center gap-1.5">
              <i data-lucide="zap" className="w-4 h-4 text-emerald-600"></i>
              Quick Actions
            </h2>

            <div className="space-y-2.5">
              {/* Action 1: Report Incident */}
              <button className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-red-300 hover:bg-red-50/40 dark:hover:bg-red-950/20 text-left transition flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 flex items-center justify-center group-hover:scale-110 transition flex-shrink-0">
                  <i data-lucide="alert-triangle" className="w-4 h-4"></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-red-600">Report Incident</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Waterlogging, tree fall, hazard</div>
                </div>
              </button>

              {/* Action 2: Request Help */}
              <button className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-300 hover:bg-amber-50/40 dark:hover:bg-amber-950/20 text-left transition flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition flex-shrink-0">
                  <i data-lucide="life-buoy" className="w-4 h-4"></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-600">Request Help</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Trapped, medical need, boat</div>
                </div>
              </button>

              {/* Action 3: Check-In Safe */}
              <button className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-300 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 text-left transition flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition flex-shrink-0">
                  <i data-lucide="check-circle" className="w-4 h-4"></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">Check-In Safe</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Update FamilySafetyStatus</div>
                </div>
              </button>

              {/* Action 4: Upload Photo/Video */}
              <button className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 text-left transition flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition flex-shrink-0">
                  <i data-lucide="camera" className="w-4 h-4"></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600">Upload Photo/Video</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Evidence uploaded to AWS S3</div>
                </div>
              </button>
            </div>
          </div>

          <div className="p-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-[10px] text-slate-500 dark:text-slate-400 mt-2 font-mono">
            <strong>Latency Target:</strong> SOS acknowledge &lt;3s (SRS Section 10)
          </div>
        </div>

      </div>

      {/* LOWER GRID (4 distinct cards matching mockup) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* 1. Safety Tips */}
        <div className="glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2.5">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="shield" className="w-4 h-4 text-emerald-600"></i> Safety Tips
              </h3>
              <button className="text-[11px] text-emerald-600 font-bold hover:underline">View All</button>
            </div>
            
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Avoid walking in flooded areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Switch off electrical appliances</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Keep emergency kit ready</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Stay tuned to official updates</span>
              </li>
            </ul>
          </div>
          <div className="text-[10px] text-slate-400 mt-2">Verified by NDRF Safety Directorate</div>
        </div>

        {/* 2. Emergency Contacts */}
        <div className="glass-card p-4 rounded-2xl flex flex-col justify-between" id="emergency-contacts-section">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2.5">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="phone-call" className="w-4 h-4 text-blue-600"></i> Emergency Contacts
              </h3>
              <span className="text-[10px] font-mono text-slate-400">Toll Free</span>
            </div>

            <div className="space-y-2 text-xs">
              <a href="tel:100" className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                <span className="font-semibold text-slate-700 dark:text-slate-200">Police</span>
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">100</span>
              </a>
              <a href="tel:108" className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                <span className="font-semibold text-slate-700 dark:text-slate-200">Ambulance</span>
                <span className="font-mono font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded">108</span>
              </a>
              <a href="tel:101" className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                <span className="font-semibold text-slate-700 dark:text-slate-200">Fire Service</span>
                <span className="font-mono font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/60 px-2 py-0.5 rounded">101</span>
              </a>
              <a href="tel:112" className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                <span className="font-semibold text-slate-700 dark:text-slate-200">Disaster Helpline</span>
                <span className="font-mono font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded">112</span>
              </a>
            </div>
          </div>
          <div className="text-[10px] text-slate-400 mt-1">Tap any number to dial immediately</div>
        </div>

        {/* 3. My Reports (GET /api/v1/citizen/reports/{id}/status) */}
        <div className="glass-card p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2.5">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="clipboard-list" className="w-4 h-4 text-purple-600"></i> My Reports
              </h3>
              <button className="text-[11px] text-purple-600 font-bold hover:underline">View All</button>
            </div>

            <div className="space-y-2.5 text-xs" id="my-reports-list">
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-start justify-between">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-[11px]">#INC-2025-0012</div>
                  <div className="text-slate-500 dark:text-slate-400 text-[10px]">Flooded Street</div>
                  <div className="text-[9px] text-slate-400 font-mono">18 May 2025 | 08:20 AM</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono">In Progress</span>
              </div>

              <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-start justify-between">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-[11px]">#INC-2025-0011</div>
                  <div className="text-slate-500 dark:text-slate-400 text-[10px]">Tree Fall</div>
                  <div className="text-[9px] text-slate-400 font-mono">17 May 2025 | 04:15 PM</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono">Resolved</span>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-slate-400 mt-2 font-mono">Kafka topic: incident.created</div>
        </div>

        {/* 4. Daily Checklist */}
        <div className="glass-card p-4 rounded-2xl flex flex-col justify-between" id="checklist-section">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2.5">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <i data-lucide="check-circle-2" className="w-4 h-4 text-emerald-600"></i> Daily Checklist
              </h3>
              <span id="checklist-counter" className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded font-mono">1/4 Done</span>
            </div>

            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <label className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800/60 transition">
                <input type="checkbox" defaultChecked className="rounded text-emerald-600 focus:ring-emerald-500 citizen-check" />
                <span className="font-medium">Stay Updated</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800/60 transition">
                <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500 citizen-check" />
                <span className="font-medium">Check Emergency Kit</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800/60 transition">
                <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500 citizen-check" />
                <span className="font-medium">Secure Documents</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800/60 transition">
                <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500 citizen-check" />
                <span className="font-medium">Help Neighbors</span>
              </label>
            </div>
          </div>
          <div className="text-[10px] text-slate-400 mt-2">Saved automatically to device</div>
        </div>

      </div>

      {/* BOTTOM ROW: INNOVATIVE FEATURES (SRS Section 8.3 & 8.4) */}
      <div className="glass-card p-4 rounded-2xl space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">INNOVATIVE FEATURES</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">RakshaSetu Citizen AI &amp; Crowdsensing Suite</span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">Tap any feature for live demo</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          
          {/* Feature 1: AI Chatbot Assistant */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-emerald-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="bot" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">AI Chatbot Assistant</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Rasa NLU + LLM multilingual safety copilot</div>
          </div>

          {/* Feature 2: Voice Reporting */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-blue-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="mic" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Voice Reporting</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Report incidents using voice</div>
          </div>

          {/* Feature 3: Crowdsourced Alerts */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-cyan-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="users" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Crowdsourced Alerts</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Real-time updates from citizens</div>
          </div>

          {/* Feature 4: Family Safety Check */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-purple-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="user-check" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Family Safety Check</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Check-in with family members</div>
          </div>

          {/* Feature 5: Offline Mode */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-amber-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="wifi-off" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Offline Mode</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Access essential info offline</div>
          </div>

          {/* Feature 6: Personalized Alerts */}
          <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-pink-500 hover:scale-[1.02] cursor-pointer transition group shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
              <i data-lucide="bell-ring" className="w-4 h-4"></i>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Personalized Alerts</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Alerts based on your location &amp; risk</div>
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
  <div id="citizen-modal" className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[1000] hidden flex items-center justify-center p-4">
    <div className="glass-card bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-md p-6 space-y-4 transform transition-all scale-95 opacity-0 duration-200" id="citizen-modal-container">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <h3 id="citizen-modal-title" className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"></h3>
        <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl">
          <i data-lucide="x" className="w-5 h-5"></i>
        </button>
      </div>
      <div id="citizen-modal-body" className="text-xs text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed"></div>
      <div className="flex justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800" id="citizen-modal-actions">
        <button className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 transition">Close</button>
      </div>
    </div>
  </div>

  

  {/* Shared RakshaSetu Core Engines */}
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
