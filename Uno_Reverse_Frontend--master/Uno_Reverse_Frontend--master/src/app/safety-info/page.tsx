import { PortalHeader } from '@/components/PortalHeader';
import { PublicSidebar } from '@/components/PublicSidebar';
import React from 'react';

export default function SafetyInfo() {
  return (
    <>

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="SAFETY GUIDES" />

  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <PublicSidebar activePage="safety-info" />

    {/* MAIN GUIDES */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-black text-slate-900 dark:text-white">Multi-Hazard Disaster Preparedness &amp; Safety Guidelines</h1>
        <p className="text-xs text-slate-500">Official National Disaster Management Authority (NDMA) verified standard operating procedures.</p>
      </div>

      {/* 4 MAJOR HAZARD CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Flood Safety */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center gap-2.5 text-blue-600 font-bold text-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            <span>Flood Safety Protocols (Do's &amp; Don'ts)</span>
          </div>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
            <li><b>Move to Higher Ground:</b> If water starts entering your home, switch off the main electrical breaker immediately and move to the rooftop.</li>
            <li><b>Avoid Walking or Driving in Flood Waters:</b> 15 cm of moving water can knock you down; 60 cm of water can sweep away a car.</li>
            <li><b>Boil Drinking Water:</b> Always boil water for at least 3 minutes or use halogen water purification tablets to prevent cholera and enteric fever.</li>
            <li><b>Beware of Snakes:</b> Reptiles seek dry shelters; check tree branches, roof rafters, and higher surfaces.</li>
          </ul>
        </div>

        {/* Earthquake Safety */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center gap-2.5 text-amber-600 font-bold text-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m2 12 5-5 5 5 5-5 5 5"></path></svg>
            <span>Earthquake Safety (Zone V Protocols)</span>
          </div>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
            <li><b>Drop, Cover, and Hold On:</b> Drop beneath a sturdy desk or table. Cover your head and neck with your arms.</li>
            <li><b>Stay Away from Glass &amp; Windows:</b> Avoid windows, unbolted bookcases, and heavy hanging light fixtures.</li>
            <li><b>Do NOT Use Elevators:</b> Always take the stairs after the initial ground tremors subside.</li>
            <li><b>Check for Gas Leaks:</b> Turn off LPG cylinder regulator valves immediately after shaking stops.</li>
          </ul>
        </div>

        {/* Cyclone & High Wind */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center gap-2.5 text-teal-600 font-bold text-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path></svg>
            <span>Cyclone &amp; Severe Gale Protocols</span>
          </div>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
            <li><b>Secure Loose Roof Sheets:</b> Fasten corrugated iron roofs and trim overhanging tree branches before landfall.</li>
            <li><b>Keep Mobile Phones Charged:</b> Maintain portable power banks at 100% capacity; conserve battery by enabling low-power mode.</li>
            <li><b>Stay Indoors during the "Eye":</b> If wind abruptly stops, do not go outside; the opposite side of the storm will strike violently soon.</li>
          </ul>
        </div>

        {/* Medical First Aid */}
        <div className="p-5 rounded-2xl glass-card space-y-3">
          <div className="flex items-center gap-2.5 text-red-600 font-bold text-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
            <span>Emergency Medical First Aid</span>
          </div>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
            <li><b>Severe Bleeding:</b> Apply direct firm pressure with a clean cloth. Elevate the wounded limb above heart level.</li>
            <li><b>Snakebite:</b> Immobilize the bitten limb; keep the patient calm. Do NOT cut, suck, or apply a tourniquet. Rush to nearest shelter.</li>
            <li><b>Hypothermia:</b> Remove wet clothing; wrap in dry blankets and offer warm sweetened fluids if conscious.</li>
          </ul>
        </div>

      </div>
    </main>
  </div>

    </>
  );
}