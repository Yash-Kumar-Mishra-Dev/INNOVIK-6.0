import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="ABOUT PLATFORM" />

  



  
  {/* MAIN CONTENT */}
  <main className="max-w-6xl mx-auto p-4 lg:p-8 flex-1 space-y-8">
    
    {/* HERO SECTION */}
    <div className="text-center space-y-3 py-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-500/20">
        <span>🇮🇳 National Disaster Management Architecture</span>
      </div>
      <h1 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
        Empowering India's Disaster Preparedness &amp; Spatial Crisis Management
      </h1>
      <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
        RakshaSetu is a next-generation crisis intelligence infrastructure connecting high-level governance, defense forces, field rescue squads, and 1.4 billion citizens under a unified, real-time spatial platform.
      </p>
    </div>

    {/* 4 KEY PILLARS */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="p-5 rounded-2xl glass-card space-y-2">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-lg">01</div>
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">Spatial GIS Integration</h3>
        <p className="text-xs text-slate-500 leading-relaxed">Direct integration with ISRO Bhuvan satellite imagery, CartoDEM digital elevation models, and hydrological flood inundation layers.</p>
      </div>

      <div className="p-5 rounded-2xl glass-card space-y-2">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-lg">02</div>
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">Tri-Services Mobilization</h3>
        <p className="text-xs text-slate-500 leading-relaxed">Seamless coordination between Army Eastern Command, Indian Air Force Mi-17 heavy-lift helicopters, Coast Guard, and NDRF battalions.</p>
      </div>

      <div className="p-5 rounded-2xl glass-card space-y-2">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-lg">03</div>
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">Citizen First Safety</h3>
        <p className="text-xs text-slate-500 leading-relaxed">Instant one-tap 112 emergency SOS, real-time camera photo uploading with GPS, nearest shelter routing, and bilingual guides.</p>
      </div>

      <div className="p-5 rounded-2xl glass-card space-y-2">
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold text-lg">04</div>
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">Statutory Compliance</h3>
        <p className="text-xs text-slate-500 leading-relaxed">Built according to the statutory mandates of the Disaster Management Act 2005 and NDMA National Disaster Management Plans.</p>
      </div>
    </div>

    {/* TECHNICAL SPECIFICATIONS TABLE */}
    <div className="p-6 rounded-2xl glass-card space-y-4">
      <h2 className="text-lg font-black text-slate-900 dark:text-white">Technical Architecture Specifications</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase font-mono">
            <tr>
              <th className="p-3">Layer</th>
              <th className="p-3">Technology Stack</th>
              <th className="p-3">Specification / Benchmark</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
            <tr>
              <td className="p-3 font-bold text-blue-600 dark:text-blue-400">Frontend Presentation</td>
              <td className="p-3">HTML5, Tailwind CSS, Lucide Vector Icons</td>
              <td className="p-3">Sub-100ms render, 100% responsive, dark/light theme engine</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Spatial GIS Engine</td>
              <td className="p-3">Leaflet.js + Mapbox GL JS + GeoJSON</td>
              <td className="p-3">ISRO Bhuvan WMS vector overlays, 36 Indian states &amp; UTs coverage</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-amber-600 dark:text-amber-400">Real-Time Messaging</td>
              <td className="p-3">Socket.IO v4.7 + MQTT Broker</td>
              <td className="p-3">Bidirectional sensor telemetry, VHF radio mesh emulation</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-purple-600 dark:text-purple-400">Security &amp; RBAC</td>
              <td className="p-3">Role-Based Access Control (RBAC) + Keycloak IAM</td>
              <td className="p-3">Zero-trust strict panel isolation, Level-3 cabinet clearance</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-pink-600 dark:text-pink-400">Bilingual Engine</td>
              <td className="p-3">Client-side Dynamic Dictionary (EN / HI)</td>
              <td className="p-3">Instant localized switching without page reloads</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </main>

  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
