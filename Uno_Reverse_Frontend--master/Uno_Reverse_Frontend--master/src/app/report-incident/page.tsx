import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { CitizenSidebar } from '@/components/CitizenSidebar';

import Link from 'next/link';

export default function ReportIncident() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="INCIDENT REPORT" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <CitizenSidebar activePage="report-incident" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <CitizenSidebar activePage="report-incident" />

    {/* MAIN FORM */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto max-w-4xl mx-auto w-full">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-black text-slate-900 dark:text-white">Submit Incident or SOS Report</h1>
        <p className="text-xs text-slate-500">Attach on-site camera photos, GPS coordinates, and victim headcount directly to the state Kafka ingest pipeline.</p>
      </div>

      <form id="incident-form" className="space-y-5 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Category Picker */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Disaster / Emergency Type *</label>
          <select id="report-category" required className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:border-emerald-500">
            <option value="Severe Flood Inundation">Severe Flood Inundation (Water Depth &gt; 1.5m)</option>
            <option value="Citizens Trapped on Rooftop">Citizens Trapped on Rooftop / Tree</option>
            <option value="Embankment Breach">River Embankment / Levee Breach</option>
            <option value="Medical Emergency">Medical Emergency / Snakebite / Injury</option>
            <option value="Food &amp; Drinking Water Shortage">Critical Food &amp; Drinking Water Shortage</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Description &amp; Observations *</label>
          <textarea id="report-desc" rows={3} required placeholder="Describe the ground situation, landmarks, number of children or elderly trapped..." className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs focus:outline-none focus:border-emerald-500"></textarea>
        </div>

        {/* Working Camera / Photo Upload (User requested) */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Camera Photo Evidence (Capture or Upload)</label>
          <label htmlFor="camera-input" className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 bg-slate-50 dark:bg-slate-800/40 cursor-pointer transition">
            <svg className="w-8 h-8 text-emerald-500 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Tap to Take Photo or Browse Files</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Supports Camera capture on smartphones &amp; tablets</span>
            <input type="file" id="camera-input" accept="image/*" capture="environment" className="hidden" />
          </label>
          {/* Image Preview Area */}
          <div id="preview-area" className="hidden mt-3 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center gap-3">
            <img id="preview-img" className="w-20 h-20 rounded-lg object-cover border border-slate-300 dark:border-slate-700 shadow-sm" alt="Preview" />
            <div className="text-xs space-y-1">
              <div className="font-bold text-slate-900 dark:text-white" id="file-name">photo.jpg</div>
              <div className="text-[10px] text-emerald-600 font-mono">✓ Ready for upload to MinIO/S3</div>
              <button type="button" className="text-red-500 hover:underline text-[11px]">Remove Photo</button>
            </div>
          </div>
        </div>

        {/* Location & Headcount */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">GPS Location Coordinates</label>
            <div className="flex gap-2">
              <input type="text" id="report-location" value="26.1832° N, 91.7612° E (Guwahati Central)" className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono" />
              <button type="button" className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs" title="Auto detect location">GPS</button>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Estimated Persons Trapped</label>
            <input type="number" id="report-people" value="4" min="1" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button type="submit" className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-lg shadow-emerald-600/30 transition">
            Transmit Report to State Emergency Operations Center →
          </button>
        </div>
      </form>
    </main>
  </div>

  <div id="toast" className="fixed bottom-5 right-5 z-50 translate-y-20 opacity-0 transition-all duration-300 pointer-events-none">
    <div className="bg-slate-900 text-white px-4 py-2 rounded-xl shadow-md text-xs font-medium border border-slate-700">
      <span id="toast-msg">Notification</span>
    </div>
  </div>

  

  {/* Shared RakshaSetu Core Engines */}
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
