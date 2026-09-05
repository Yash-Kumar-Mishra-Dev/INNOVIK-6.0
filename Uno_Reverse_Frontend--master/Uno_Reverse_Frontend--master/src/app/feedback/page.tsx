import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { CitizenSidebar } from '@/components/CitizenSidebar';

import Link from 'next/link';

export default function Feedback() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="COMMUNITY AID" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <CitizenSidebar activePage="feedback" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <CitizenSidebar activePage="feedback" />

    {/* MAIN FEEDBACK & VOLUNTEER */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto max-w-4xl mx-auto w-full">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-black text-slate-900 dark:text-white">Community Feedback &amp; Civil Defense Volunteers</h1>
        <p className="text-xs text-slate-500">Share ground reports, register as a community volunteer, or request essential supplies for local shelters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Volunteer Registration */}
        <div className="p-6 rounded-2xl glass-card space-y-4">
          <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span>Register as Aapda Mitra Volunteer</span>
          </div>
          <p className="text-xs text-slate-500">Trained community volunteers assist district disaster teams with boat rowing, food distribution, and first aid.</p>
          <form className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
              <input type="text" required placeholder="Rohit Kalita" className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
              <input type="tel" required placeholder="+91 98640 XXXXX" className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Primary Skill</label>
              <select className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs">
                <option>Swimmer / Boat Navigation</option>
                <option>Doctor / Paramedic / Nurse</option>
                <option>4x4 Vehicle Driver / Logistics</option>
                <option>Civil Defense / Relief Distribution</option>
              </select>
            </div>
            <button type="submit" className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md">
              Sign Up as Volunteer
            </button>
          </form>
        </div>

        {/* Feedback & Ground Report */}
        <div className="p-6 rounded-2xl glass-card space-y-4">
          <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span>Submit Shelter Feedback or Supply Need</span>
          </div>
          <p className="text-xs text-slate-500">Report missing baby food, water purification shortages, or power outage at any active relief camp.</p>
          <form className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Shelter / Camp Name</label>
              <input type="text" required placeholder="e.g. Sarusajai Sports Complex Shelter" className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Supply Deficit or Issue</label>
              <textarea rows={3} required placeholder="Detail specific shortages (e.g. sanitary pads, clean water, baby milk formula)..." className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs"></textarea>
            </div>
            <button type="submit" className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md">
              Submit Supply Request
            </button>
          </form>
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
