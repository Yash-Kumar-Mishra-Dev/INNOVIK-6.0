
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      

  {/* BHUVAN INDIAN TRICOLOR HEADER STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* OFFICIAL TOP GOVERNMENT STRIPE (With Pan-India State Selector & English/Hindi Only) */}
  <div className="bg-slate-900 text-slate-300 text-[11px] px-4 lg:px-8 py-2 border-b border-slate-800">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2.5">
        <span className="font-bold text-white flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
          Government of India
        </span>
        <span className="text-slate-600">|</span>
        <span>National Disaster Management Authority (NDMA)</span>
        <span className="text-slate-600 hidden md:inline">|</span>
        <span className="hidden md:inline text-blue-400 font-medium">ISRO Bhuvan Spatial Geoportal</span>
      </div>

      
    </div>
  </div>

  {/* EYE-CATCHY BROAD NAVIGATION BAR */}
  <header className="bg-slate-950 text-white px-4 lg:px-8 py-3.5 shadow-lg border-b border-slate-800 sticky top-0 z-50">
    <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-4">
      
      {/* Left: Hamburger (Opens Left Nav), Language, Home & Main Links */}
      <div className="flex items-center gap-3">
        {/* 3-Line Hamburger to open Left Nav */}
        <button className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition flex items-center justify-center shadow-sm" data-drawer-toggle="true" title="Toggle Navigation Menu">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Bilingual Switcher: English and हिन्दी Only */}
        <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-xs font-bold">
          <button id="lang-btn-en" className="px-2 py-0.5 rounded bg-blue-600 text-white transition">EN</button>
          <button id="lang-btn-hi" className="px-2 py-0.5 rounded text-slate-400 hover:text-white transition">हिन्दी</button>
        </div>

        {/* Main Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold">
          <a href="/" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span data-i18n="nav_home">Home</span>
          </a>
          <a href="/about" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition" data-i18n="nav_about">About</a>
          <a href="/contacts" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition" data-i18n="nav_contacts">Contacts</a>
          <a href="/safety-info" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition" data-i18n="nav_sops">SOPs</a>
          <a href="/radar" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition" data-i18n="nav_radar">Radar</a>
          <a href="/state-portals" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition" data-i18n="nav_portals">State Portals</a>
          <a href="/checklist" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition" data-i18n="nav_kit">72h Kit</a>
        </nav>
      </div>

      {/* Right: Logo & RakshaSetu Title with Tagline + Theme Switcher */}
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center gap-3 group text-right" title="RakshaSetu Gateway">
          <img src="/logo.png" alt="RakshaSetu Logo" className="w-10 h-10 rounded-2xl object-contain border border-slate-700 shadow-md group-hover:scale-105 transition-transform bg-slate-900 p-0.5" />
          <div>
            <div className="font-black text-lg tracking-tight text-white flex items-center justify-end gap-1.5">
              Raksha<span className="text-blue-500">Setu</span>
            </div>
            <div className="text-[10px] font-bold text-slate-400 tracking-wide" data-i18n="tagline">Prepare. Respond. Protect. Together.</div>
          </div>
        </a>

        {/* Theme Switcher */}
        <button className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition" title="Toggle Light/Dark Theme">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path></svg>
        </button>
      </div>

    </div>
  </header>

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <aside id="raksha-left-drawer" className="fixed top-0 left-0 w-80 max-w-[85vw] h-full bg-slate-950 text-slate-200 border-r border-slate-800 shadow-md z-[9999] -translate-x-full transition-transform duration-300 flex flex-col">
    <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
      <div className="flex items-center gap-2.5">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-xl object-contain border border-slate-700 bg-slate-900" />
        <div>
          <div className="font-black text-sm text-white">RakshaSetu Global Navigation</div>
          <div className="text-[10px] text-slate-400 font-mono">National Disaster Management Geoportal</div>
        </div>
      </div>
      <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition" data-drawer-toggle="true" title="Close Drawer">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    <div className="p-4 flex-1 overflow-y-auto space-y-1 text-xs">
      <div className="pb-2 text-[10px] uppercase font-bold text-slate-500 font-mono tracking-wider">Navigation Menu</div>
      <a href="/" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-blue-600 text-white font-bold shadow-md"><span>RakshaSetu Gateway Home</span></a>
      <a href="/about" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition"><span>About RakshaSetu Architecture</span></a>
      <a href="/radar" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition"><span>Live Doppler Weather Radar</span></a>
      <a href="/state-portals" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition"><span>State Disaster Portals (36 SDMAs)</span></a>
      <a href="/safety-info" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition"><span>Multi-Hazard SOPs &amp; Guides</span></a>
      <a href="/contacts" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition"><span>National Emergency Contacts (112)</span></a>
      <a href="/checklist" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition"><span>72-Hour Survival Kit Checklist</span></a>
      <a href="/login" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition"><span>Unified Authentication Portal</span></a>
      <a href="/government" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition"><span>🏛️ Government Panel</span></a>
      <a href="/citizen" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition"><span>👤 Citizen Safety Portal</span></a>
      <a href="/responder" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition"><span>🚑 Rescue Tactical Operations</span></a>
      <a href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition"><span>⚙️ Platform Administration</span></a>
    </div>
  </aside>

  {/* HERO SECTION */}
  <section className="py-12 lg:py-16 px-4 relative overflow-hidden text-center">
    <div className="max-w-5xl mx-auto space-y-4">
      
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-mono font-bold tracking-wide shadow-sm">
        <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        <span id="state-hero-badge">PAN-INDIA DISASTER PREPAREDNESS &amp; SPATIAL GEO-INTELLIGENCE</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
        Raksha<span className="text-blue-600 dark:text-blue-400">Setu</span>
      </h1>
      <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-500 bg-clip-text text-transparent" data-i18n="tagline">
        Prepare. Respond. Protect. Together.
      </div>

      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium" data-i18n="hero_desc">
        Unified national disaster management architecture empowering leadership, emergency services, field rescue squads, and citizens across India.
      </p>

      {/* Quick Sub-Page Link Bar */}
      <div className="pt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
        <a href="/missions" className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 font-bold hover:bg-cyan-500/20 transition">Rescue Missions</a>
        <a href="/spatial-map" className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-300 font-bold hover:bg-blue-500/20 transition">GIS Map</a>
        <a href="/incidents" className="px-3.5 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-300 transition">Incidents</a>
        <a href="/alerts" className="px-3.5 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-300 transition">Alerts</a>
        <a href="/shelters" className="px-3.5 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-300 transition">Shelters</a>
        <a href="/resources" className="px-3.5 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-300 transition">Logistics</a>
      </div>
    </div>
  </section>

  {/* ALL PANELS SECTION */}
  <section className="max-w-7xl mx-auto px-4 pb-16 flex-1">
    
    <div className="text-center space-y-2 mb-8">
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight" data-i18n="sec_panels_title">
        Select your operational panel
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium" data-i18n="sec_panels_sub">
        Select your role below to access the dedicated operational interface.
      </p>
    </div>

    {/* 5-Grid Columns */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      
      {/* CARD 0: ⭐ SUPER ADMIN PORTAL (Apex Executive Council) */}
      <div className="glass-card rounded-3xl p-5 flex flex-col justify-between border-t-2 border-t-slate-400 dark:border-t-slate-600 shadow-lg relative overflow-hidden">
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold shadow-md shadow-amber-500/20">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <span className="text-[9px] font-mono font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-800">APEX COUNCIL</span>
          </div>

          <h2 className="text-base font-black text-slate-900 dark:text-white leading-tight">⭐ Super Admin</h2>
          <div className="text-xs font-bold text-amber-600 dark:text-amber-400">Government Higher Officials</div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            PMO, Union Home Minister, Chief Minister &amp; Chief Secretary apex crisis authorization situation room.
          </p>

          <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
            <li className="flex items-center gap-1.5"><span className="text-amber-500 font-bold">•</span> Armed Forces Mobilization</li>
            <li className="flex items-center gap-1.5"><span className="text-amber-500 font-bold">•</span> CWC Gauge Chart &amp; SDRF</li>
            <li className="flex items-center gap-1.5"><span className="text-amber-500 font-bold">•</span> Cabinet SitRep Generator</li>
          </ul>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800">
          <a href="login?role=superadmin" className="w-full py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs text-center transition shadow-lg shadow-amber-600/25 flex items-center justify-center gap-1.5 group">
            <span data-i18n="btn_signin">Sign In</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>

      {/* CARD 1: Government Panel */}
      <div className="glass-card rounded-3xl p-5 flex flex-col justify-between border-t-4 border-t-blue-600 shadow-md">
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="w-11 h-11 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold shadow-md shadow-blue-600/20">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
            </div>
            <span className="text-[9px] font-mono font-bold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">GOVERNMENT</span>
          </div>

          <h2 className="text-base font-black text-slate-900 dark:text-white leading-tight">1. Government Panel</h2>
          <div className="text-xs font-bold text-blue-600 dark:text-blue-400">Command &amp; Control Dashboard</div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Macro spatial GIS monitoring, flood inundation modeling, department logistics, and alert broadcasting.
          </p>

          <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
            <li className="flex items-center gap-1.5"><span className="text-blue-600 font-bold">•</span> Mapbox GL JS Spatial Maps</li>
            <li className="flex items-center gap-1.5"><span className="text-blue-600 font-bold">•</span> Z-score Anomaly Detector</li>
            <li className="flex items-center gap-1.5"><span className="text-blue-600 font-bold">•</span> Multi-Department Dispatch</li>
          </ul>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800">
          <a href="login?role=government" className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center transition shadow-lg shadow-blue-600/25 flex items-center justify-center gap-1.5 group">
            <span data-i18n="btn_signin">Sign In</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>

      {/* CARD 2: Citizen Panel */}
      <div className="glass-card rounded-3xl p-5 flex flex-col justify-between border-t-4 border-t-emerald-600 shadow-md">
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="w-11 h-11 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shadow-md shadow-emerald-600/20">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <span className="text-[9px] font-mono font-bold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">CITIZEN</span>
          </div>

          <h2 className="text-base font-black text-slate-900 dark:text-white leading-tight">2. Citizen Panel</h2>
          <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Stay Informed, Stay Safe</div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            One-tap 112 emergency SOS, camera incident reports, nearest relief shelters, and multilingual AI assistant.
          </p>

          <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
            <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">•</span> Working Camera Photo Upload</li>
            <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">•</span> 112 Priority SOS (&lt;3s)</li>
            <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">•</span> Relief Shelter Geolocation</li>
          </ul>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800">
          <a href="login?role=citizen" className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-1.5 group">
            <span data-i18n="btn_signin">Sign In</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>

      {/* CARD 3: Field Responder Panel */}
      <div className="glass-card rounded-3xl p-5 flex flex-col justify-between border-t-4 border-t-cyan-600 shadow-md">
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="w-11 h-11 rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold shadow-md shadow-cyan-600/20">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
            </div>
            <span className="text-[9px] font-mono font-bold bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-200 dark:border-cyan-800">RESCUE TEAM</span>
          </div>

          <h2 className="text-base font-black text-slate-900 dark:text-white leading-tight">3. Rescue Team Panel</h2>
          <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">Respond &amp; Save Lives</div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Tactical HUD for boat squads: mission priority card queues, navigable water channels, and SitRep reports.
          </p>

          <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
            <li className="flex items-center gap-1.5"><span className="text-cyan-600 font-bold">•</span> Missions in Card Format</li>
            <li className="flex items-center gap-1.5"><span className="text-cyan-600 font-bold">•</span> Printable SitRep Generator</li>
            <li className="flex items-center gap-1.5"><span className="text-cyan-600 font-bold">•</span> Safe vs Blocked Route Channels</li>
          </ul>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800">
          <a href="login?role=responder" className="w-full py-2.5 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs text-center transition shadow-lg shadow-cyan-600/25 flex items-center justify-center gap-1.5 group">
            <span data-i18n="btn_signin">Sign In</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>

      {/* CARD 4: Admin Panel */}
      <div className="glass-card rounded-3xl p-5 flex flex-col justify-between border-t-4 border-t-slate-800 shadow-md">
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="w-11 h-11 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold shadow-md shadow-purple-600/20">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
            <span className="text-[9px] font-mono font-bold bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">PLATFORM ADMIN</span>
          </div>

          <h2 className="text-base font-black text-slate-900 dark:text-white leading-tight">4. Admin Panel</h2>
          <div className="text-xs font-bold text-purple-600 dark:text-purple-400">Manage &amp; Optimize System</div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Enterprise infrastructure oversight, direct access to citizen/responder operations, and Keycloak RBAC.
          </p>

          <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
            <li className="flex items-center gap-1.5"><span className="text-purple-600 font-bold">•</span> Direct Citizen &amp; Field Access</li>
            <li className="flex items-center gap-1.5"><span className="text-purple-600 font-bold">•</span> Keycloak IAM &amp; OAuth2</li>
            <li className="flex items-center gap-1.5"><span className="text-purple-600 font-bold">•</span> Kafka Immutable Audit Trail</li>
          </ul>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800">
          <a href="login?role=admin" className="w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs text-center transition shadow-lg shadow-purple-600/25 flex items-center justify-center gap-1.5 group">
            <span data-i18n="btn_signin">Sign In</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>

    </div>

    {/* COMPREHENSIVE PLATFORM WEBPAGES DIRECTORY */}
    <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800 space-y-8">
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold">
          <span>COMPLETE SITE MAP &amp; NAVIGATION DIRECTORY</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          All 5 Command Panels &amp; Dedicated Webpages
        </h2>
        <p className="text-xs text-slate-500 max-w-xl mx-auto">Every option in the left navbar of each panel is backed by a fully-developed, dedicated webpage.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
        
        {/* 1. Super Admin Module */}
        <div className="p-5 rounded-2xl glass-card space-y-3 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-amber-500">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>1. ⭐ Super Admin Apex Council</span>
            </div>
            <a href="login?role=superadmin" className="text-[11px] font-bold text-amber-600 hover:underline">Sign In →</a>
          </div>
          <div className="space-y-1.5 pl-1">
            <div></div>
            <div><a href="/mobilization" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Tri-Services Mobilization Console</a></div>
            <div><a href="/river-gauges" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• CWC River Danger Levels Telemetry</a></div>
            <div><a href="/treasury" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• SDRF &amp; NDRF Disaster Treasury Funds</a></div>
            <div><a href="/directives" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Cabinet National Directives Dispatcher</a></div>
            <div><a href="/infrastructure" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Critical Infrastructure Grid</a></div>
            <div><a href="/cabinet-sitrep" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Official Cabinet SitRep Export</a></div>
            <div><a href="/command-hierarchy" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• National Command Hierarchy (ICS)</a></div>
          </div>
        </div>

        {/* 2. Government Panel Module */}
        <div className="p-5 rounded-2xl glass-card space-y-3 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-blue-500">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
              <span>2. 🏛️ Government Panel</span>
            </div>
            <a href="login?role=government" className="text-[11px] font-bold text-blue-600 hover:underline">Sign In →</a>
          </div>
          <div className="space-y-1.5 pl-1">
            <div><a href="/government" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">• Command Dashboard</a></div>
            <div><a href="/incidents" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Incidents Registry (Lifecycle State)</a></div>
            <div><a href="/alerts" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Alerts &amp; Broadcasting (CAP v1.2)</a></div>
            <div><a href="/resources" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Resource Management &amp; Logistics</a></div>
            <div><a href="/shelters" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Relief Shelters &amp; Safe Camps</a></div>
            <div><a href="/departments" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Participating Departments Logistics</a></div>
            <div><a href="/analytics" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Platform &amp; Incident Analytics</a></div>
            <div><a href="/spatial-map" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Fullscreen GIS Inundation Map</a></div>
            <div><a href="/evacuation" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Evacuation Corridors &amp; Convoys</a></div>
            <div><a href="/ai-predictions" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• AI Flood Risk &amp; Sensor Anomaly</a></div>
          </div>
        </div>

        {/* 3. Citizen Safety Module */}
        <div className="p-5 rounded-2xl glass-card space-y-3 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-emerald-500">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>3. 👤 Citizen Safety App</span>
            </div>
            <a href="login?role=citizen" className="text-[11px] font-bold text-emerald-600 hover:underline">Sign In →</a>
          </div>
          <div className="space-y-1.5 pl-1">
            <div><a href="/citizen" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">• Citizen Safety Dashboard</a></div>
            <div><a href="/report-incident" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Report Incident (Camera Photo)</a></div>
            <div><a href="/safety-info" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Multi-Hazard Safety Info &amp; Guides</a></div>
            <div><a href="/contacts" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Emergency 112 Speed Dials</a></div>
            <div><a href="/checklist" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• 72-Hour Grab-Bag Kit Tracker</a></div>
            <div><a href="/feedback" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Feedback &amp; Volunteer Support</a></div>
          </div>
        </div>

        {/* 4. Rescue Team Module */}
        <div className="p-5 rounded-2xl glass-card space-y-3 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-cyan-500">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
              <span>4. 🚑 Rescue Team Tactical HUD</span>
            </div>
            <a href="login?role=responder" className="text-[11px] font-bold text-cyan-600 hover:underline">Sign In →</a>
          </div>
          <div className="space-y-1.5 pl-1">
            <div><a href="/responder" className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline">• Tactical Operations HUD</a></div>
            <div><a href="/missions" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Missions Grid (Card Format)</a></div>
            <div><a href="/routes" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Navigable Water Routes &amp; Channels</a></div>
            <div><a href="/teams" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Squads &amp; Boat GPS Telemetry</a></div>
            <div><a href="/comms" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Tactical Radio Mesh (VHF Ch 16)</a></div>
            <div><a href="/sitrep" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Generate Situation Report (SitRep)</a></div>
          </div>
        </div>

        {/* 5. Platform Admin Module */}
        <div className="p-5 rounded-2xl glass-card space-y-3 shadow-sm md:col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-purple-500">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              <span>5. ⚙️ Platform Administration &amp; Architecture</span>
            </div>
            <a href="login?role=admin" className="text-[11px] font-bold text-purple-600 hover:underline">Sign In →</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pl-1">
            <div><a href="/admin" className="text-purple-600 dark:text-purple-400 font-bold hover:underline">• Platform Admin Console</a></div>
            <div><a href="/users" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• User Directory (Keycloak)</a></div>
            <div><a href="/roles" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Role Matrix (RBAC Permissions)</a></div>
            <div><a href="/logs" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• System Audit Logs (Kafka Topic)</a></div>
            <div><a href="/content" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Content &amp; Warning Bulletins</a></div>
            <div><a href="/notifications" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Notification Gateway (FCM/CBS)</a></div>
            <div><a href="/integrations" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• External API Integrations</a></div>
            <div><a href="/backup" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• Backup &amp; Disaster Recovery (DR)</a></div>
            <div><a href="/settings" className="text-slate-600 dark:text-slate-400 hover:text-white hover:underline">• System Settings &amp; HA Tuning</a></div>
          </div>
        </div>

      </div>
    </div>

  </section>

  {/* FOOTER */}
  <footer className="bg-slate-950 text-slate-400 text-xs py-8 px-4 border-t border-slate-800 mt-auto">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="font-bold text-white">RakshaSetu Bhuvan</span>
        <span>•</span>
        <span>National Disaster Preparedness &amp; Spatial Crisis Management Platform</span>
      </div>
      <div className="font-mono text-[11px] text-slate-500">
        Assam &amp; Brahmaputra Basin Deployment • National Geoportal Service
      </div>
    </div>
  </footer>

  {/* TOAST NOTIFICATION CONTAINER */}
  <div id="toast-notification" className="fixed bottom-5 right-5 z-[2000] translate-y-20 opacity-0 pointer-events-none transition-all duration-300">
    <div className="bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-md border border-slate-700 flex items-center gap-2.5 text-xs font-medium">
      <span id="toast-icon">✓</span>
      <span id="toast-message">Notification</span>
    </div>
  </div>

  {/* RakshaSetu Core Engines */}
  
  
  
  
  


    </>
  );
}
