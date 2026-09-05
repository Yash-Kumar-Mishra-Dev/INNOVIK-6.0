import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { AdminSidebar } from '@/components/AdminSidebar';

import Link from 'next/link';

export default function Integrations() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="INTEGRATIONS" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <AdminSidebar activePage="integrations" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <AdminSidebar activePage="integrations" />

    {/* MAIN INTEGRATIONS CONSOLE */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">External Service Integrations &amp; API Status</h1>
          <p className="text-xs text-slate-500">Secure connectors configured via API secrets stored in HashiCorp Vault.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md">
          Run API Health Check
        </button>
      </div>

      {/* INTEGRATIONS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* IMD Weather */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-600 font-mono">METEOROLOGICAL</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">India Meteorological Department (IMD)</h3>
          <p className="text-xs text-slate-500">Doppler Weather Radar (DWR) reflectivity data at Guwahati airport + 72-hr quantitative precipitation forecast.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Endpoint: <b>api.imd.gov.in/v2/radar</b> • Latency: <b>42ms</b></div>
          <button className="w-full py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-xs font-bold transition">Test Connector</button>
        </div>

        {/* ISRO Bhuvan */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-cyan-600 font-mono">GEOSPATIAL WMS</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">ISRO Bhuvan Geoportal Services</h3>
          <p className="text-xs text-slate-500">Web Map Service (WMS) layers for satellite flood inundation masks, digital elevation models, and high-resolution optical imagery.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Endpoint: <b>bhuvan-app1.nrsc.gov.in/wms</b> • Tiles: <b>Synced</b></div>
          <button className="w-full py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-cyan-600 hover:text-white text-xs font-bold transition">Test Connector</button>
        </div>

        {/* MinIO S3 Object Storage */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-600 font-mono">OBJECT STORAGE</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">AWS S3 / MinIO Cluster</h3>
          <p className="text-xs text-slate-500">Stores geotagged photos, situational videos, and aerial drone thermal footage in encrypted regional buckets.</p>
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Storage Used: <b>1.84 TB</b> • Replication: <b>Active-Active</b></div>
          <button className="w-full py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white text-xs font-bold transition">Test Connector</button>
        </div>

      </div>
    </main>
  </div>

  <div id="toast" className="fixed bottom-5 right-5 z-50 translate-y-20 opacity-0 transition-all duration-300 pointer-events-none">
    <div className="bg-slate-900 text-white px-4 py-2 rounded-xl shadow-md text-xs font-medium border border-slate-700">
      <span id="toast-msg">Notification</span>
    </div>
  </div>

  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
