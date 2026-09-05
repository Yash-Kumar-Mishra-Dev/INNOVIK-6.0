import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { AdminSidebar } from '@/components/AdminSidebar';

import Link from 'next/link';

export default function Roles() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="ROLE MATRIX" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <AdminSidebar activePage="roles" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <AdminSidebar activePage="roles" />

    {/* MAIN RBAC MATRIX */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Role-Based Access Control (RBAC) Permission Matrix</h1>
          <p className="text-xs text-slate-500">Least privilege access model enforced across API gateway (Kong) and microservice tokens.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md">
          Flush Policy Cache
        </button>
      </div>

      {/* MATRIX TABLE */}
      <div className="p-5 rounded-2xl glass-card space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="text-[11px] uppercase bg-slate-100 dark:bg-slate-800/60 text-slate-500 font-mono">
              <tr>
                <th className="p-3">Platform Capability</th>
                <th className="p-3 text-center">Citizen</th>
                <th className="p-3 text-center">Field Squad</th>
                <th className="p-3 text-center">Govt Officer</th>
                <th className="p-3 text-center">Platform Admin</th>
                <th className="p-3 text-center">⭐ Super Admin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
              <tr>
                <td className="p-3 font-sans font-bold">Submit Distress SOS &amp; Photo</td>
                <td className="p-3 text-center text-emerald-500 font-bold">✓ Full</td>
                <td className="p-3 text-center text-emerald-500 font-bold">✓ Full</td>
                <td className="p-3 text-center text-emerald-500 font-bold">✓ Full</td>
                <td className="p-3 text-center text-slate-400">— Read Only</td>
                <td className="p-3 text-center text-emerald-500 font-bold">✓ Full</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-bold">Field Verification &amp; Casualty Count</td>
                <td className="p-3 text-center text-red-500">✗ Denied</td>
                <td className="p-3 text-center text-emerald-500 font-bold">✓ Full (Signed)</td>
                <td className="p-3 text-center text-emerald-500 font-bold">✓ Full</td>
                <td className="p-3 text-center text-slate-400">— Audit Log</td>
                <td className="p-3 text-center text-emerald-500 font-bold">✓ Full</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-bold">CAP Broadcast Emergency Alerts</td>
                <td className="p-3 text-center text-red-500">✗ Denied</td>
                <td className="p-3 text-center text-red-500">✗ Denied</td>
                <td className="p-3 text-center text-emerald-500 font-bold">✓ District Level</td>
                <td className="p-3 text-center text-emerald-500 font-bold">✓ State Level</td>
                <td className="p-3 text-center text-amber-400 font-bold">⭐ National Siren</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-bold">Tri-Services &amp; Armed Forces Mobilization</td>
                <td className="p-3 text-center text-red-500">✗ Denied</td>
                <td className="p-3 text-center text-red-500">✗ Denied</td>
                <td className="p-3 text-center text-amber-500">Request Only</td>
                <td className="p-3 text-center text-slate-400">— Read Only</td>
                <td className="p-3 text-center text-amber-400 font-bold">⭐ Direct Dispatch</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-bold">Database Backup &amp; Disaster Recovery</td>
                <td className="p-3 text-center text-red-500">✗ Denied</td>
                <td className="p-3 text-center text-red-500">✗ Denied</td>
                <td className="p-3 text-center text-red-500">✗ Denied</td>
                <td className="p-3 text-center text-emerald-500 font-bold">✓ S3 Snapshots</td>
                <td className="p-3 text-center text-emerald-500 font-bold">✓ Full Apex Access</td>
              </tr>
            </tbody>
          </table>
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
