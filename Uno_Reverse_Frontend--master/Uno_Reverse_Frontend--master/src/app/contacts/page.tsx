import { PortalHeader } from '@/components/PortalHeader';
import { PublicSidebar } from '@/components/PublicSidebar';
import React from 'react';

export default function Contacts() {
  return (
    <>

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="112 SPEED DIALS" />

  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <PublicSidebar activePage="contacts" />

    {/* MAIN CONTACTS DIRECTORY */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-black text-slate-900 dark:text-white">Emergency Toll-Free Helplines &amp; Disaster Desk</h1>
        <p className="text-xs text-slate-500">Tap any number on mobile to initiate immediate emergency telephone connection.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* 112 National Helpline */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-500 shadow-md space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-red-500 font-mono">ALL-INDIA EMERGENCY</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">112</div>
          <p className="text-xs text-slate-500">Unified Emergency Response Support System (ERSS) — Police, Fire &amp; Ambulance.</p>
          <a href="tel:112" className="block w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-center text-xs transition shadow-md">
            📞 One-Tap Call 112
          </a>
        </div>

        {/* 108 Ambulance */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-600 font-mono">MEDICAL AMBULANCE</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">108</div>
          <p className="text-xs text-slate-500">Mrityunjoy 108 Emergency Medical Response Service (24x7 Road &amp; Boat Ambulance).</p>
          <a href="tel:108" className="block w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center text-xs transition">
            📞 Call Ambulance 108
          </a>
        </div>

        {/* 1070 State Disaster Control Room */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-600 font-mono">STATE DISASTER ROOM</span>
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">1070</div>
          <p className="text-xs text-slate-500">State Emergency Operations Center (SEOC) Disaster Management Authority.</p>
          <a href="tel:1070" className="block w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-center text-xs transition">
            📞 Call SEOC 1070
          </a>
        </div>

        {/* 1077 District Emergency Room */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-purple-600 font-mono">DISTRICT EMERGENCY</span>
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">1077</div>
          <p className="text-xs text-slate-500">District Emergency Operations Center (DEOC) for local rescue boat requests.</p>
          <a href="tel:1077" className="block w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-center text-xs transition">
            📞 Call District 1077
          </a>
        </div>

        {/* NDRF HQ Control Room */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-600 font-mono">NDRF HEADQUARTERS</span>
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-white font-mono">011-24363260</div>
          <p className="text-xs text-slate-500">National Disaster Response Force New Delhi 24x7 Operations Command Room.</p>
          <a href="tel:01124363260" className="block w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-center text-xs transition">
            📞 Call NDRF HQ
          </a>
        </div>

        {/* 1098 Childline */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-teal-600 font-mono">WOMEN &amp; CHILDREN</span>
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">1098 / 181</div>
          <p className="text-xs text-slate-500">Childline and Women in Distress toll-free crisis intervention and protection.</p>
          <a href="tel:1098" className="block w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-center text-xs transition">
            📞 Call Childline 1098
          </a>
        </div>

      </div>
    </main>
  </div>

    </>
  );
}