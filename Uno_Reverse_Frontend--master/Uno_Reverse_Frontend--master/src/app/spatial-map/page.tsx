import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { GovSidebar } from '@/components/GovSidebar';

import Link from 'next/link';

export default function SpatialMap() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="GIS SPATIAL MAP" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <GovSidebar activePage="spatial-map" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <GovSidebar activePage="spatial-map" />

    {/* MAIN GIS MAP */}
    <main className="flex-1 relative flex flex-col h-[calc(100vh-110px)]">
      <div id="gis-map" className="w-full h-full"></div>

      {/* MAP CONTROLS OVERLAY */}
        <div className="pt-2 border-t border-slate-800 space-y-1">
          <label className="block text-[10px] uppercase font-bold text-slate-400">Pan-India 36 States Jump:</label>
          <select id="spatial-state-select" className="w-full px-2 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-semibold text-white focus:outline-none">
          </select>
        </div>
      <div className="absolute top-4 left-4 z-[1000] bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-2xl border border-slate-700 shadow-md space-y-2 text-xs">
        <div className="font-black tracking-tight text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>Brahmaputra Basin GIS Inundation</span>
        </div>
        <div className="text-[10px] text-slate-400 font-mono">Center: 26.2006° N, 92.9376° E</div>
        <div className="pt-2 border-t border-slate-800 space-y-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" id="layer-flood" defaultChecked className="accent-cyan-500" />
            <span>Satellite Flood Inundation Layer</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" id="layer-shelters" defaultChecked className="accent-emerald-500" />
            <span>482 Active Relief Camps</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" id="layer-incidents" defaultChecked className="accent-red-500" />
            <span>Critical Distress Clusters</span>
          </label>
        </div>
      </div>

      {/* EXPLICIT ZOOM BUTTONS (User requested: Zoom in/out option in map) */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
        <button className="w-10 h-10 rounded-xl bg-slate-900/90 text-white font-black text-lg border border-slate-700 shadow-xl flex items-center justify-center hover:bg-slate-800 transition" title="Zoom In">+</button>
        <button className="w-10 h-10 rounded-xl bg-slate-900/90 text-white font-black text-lg border border-slate-700 shadow-xl flex items-center justify-center hover:bg-slate-800 transition" title="Zoom Out">−</button>
      </div>
    </main>
  </div>

  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
