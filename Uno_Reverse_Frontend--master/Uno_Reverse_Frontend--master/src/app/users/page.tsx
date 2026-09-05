import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { AdminSidebar } from '@/components/AdminSidebar';

import Link from 'next/link';

export default function Users() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="USER DIRECTORY" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <AdminSidebar activePage="users" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <AdminSidebar activePage="users" />

    {/* MAIN USERS DIRECTORY */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Keycloak Realm: rakshasetu-prod (Users)</h1>
          <p className="text-xs text-slate-500">1,245 authenticated identities authenticated via OAuth 2.0 / OIDC + Hardware Security Key MFA.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md">
          + Provision New User
        </button>
      </div>

      {/* USERS TABLE */}
      <div className="p-5 rounded-2xl glass-card space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="text-[11px] uppercase bg-slate-100 dark:bg-slate-800/60 text-slate-500 font-mono">
              <tr>
                <th className="p-3">Official Name</th>
                <th className="p-3">Username / ID</th>
                <th className="p-3">RBAC Role</th>
                <th className="p-3">MFA Status</th>
                <th className="p-3">Last Active</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-white">Hon. Union Home Secy / CM Advisor</td>
                <td className="p-3 font-mono text-slate-500">superadmin@pmo.gov.in</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-mono font-bold text-[10px]">SUPER_ADMIN</span></td>
                <td className="p-3 font-mono text-emerald-500 font-bold">FIDO2 Hardware Key</td>
                <td className="p-3 text-slate-500 font-mono">Just now</td>
                <td className="p-3"><button className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-[10px] font-bold">Audit</button></td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-white">J. Das, IAS</td>
                <td className="p-3 font-mono text-slate-500">j.das@assam.gov.in</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-[10px]">GOVT_OFFICER</span></td>
                <td className="p-3 font-mono text-emerald-500 font-bold">TOTP Authenticator</td>
                <td className="p-3 text-slate-500 font-mono">2 mins ago</td>
                <td className="p-3"><button className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-[10px] font-bold">Audit</button></td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-white">Inspector S. Bora</td>
                <td className="p-3 font-mono text-slate-500">s.bora@ndrf.gov.in</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-[10px]">FIELD_RESPONDER</span></td>
                <td className="p-3 font-mono text-emerald-500 font-bold">SMS OTP + GPS Pin</td>
                <td className="p-3 text-slate-500 font-mono">140ms ago</td>
                <td className="p-3"><button className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-[10px] font-bold">Refresh</button></td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-white">Rohit Kalita</td>
                <td className="p-3 font-mono text-slate-500">+91 98640 12345</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[10px]">CITIZEN</span></td>
                <td className="p-3 font-mono text-slate-400 font-bold">Aadhaar OTP</td>
                <td className="p-3 text-slate-500 font-mono">4 mins ago</td>
                <td className="p-3"><button className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-[10px] font-bold">Inspect</button></td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-white">Rajesh Sharma</td>
                <td className="p-3 font-mono text-slate-500">admin@rakshasetu.gov.in</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono font-bold text-[10px]">PLATFORM_ADMIN</span></td>
                <td className="p-3 font-mono text-emerald-500 font-bold">Yubikey 5C NFC</td>
                <td className="p-3 text-slate-500 font-mono">Active Now</td>
                <td className="p-3"><button className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-[10px] font-bold">Renew</button></td>
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
