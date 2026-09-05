import { PortalHeader } from '@/components/PortalHeader';
import React from 'react';
import Link from 'next/link';
import LoginInteractions from './LoginInteractions';

export default function Login() {
  return (
    <>
      <LoginInteractions />
      

  {/* BHUVAN NATIONAL STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1 w-full"></div>

  {/* AMBIENT BACKGROUND GLOW */}
  <div id="glow-primary" className="ambient-glow bg-blue-600 -top-32 -left-32"></div>
  <div id="glow-secondary" className="ambient-glow bg-emerald-600 -bottom-32 -right-32"></div>

  {/* BHUVAN NATIONAL STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* TOP HEADER (Broad, Eye-Catchy, No v2.0, 3-line menu) */}
      {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="AUTHENTICATION" />



  {/* MAIN LOGIN SECTION */}
  <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 z-10 relative">
    <div className="w-full max-w-xl space-y-5">
      
      {/* TOP BADGE & TITLE */}
      <div className="text-center space-y-1.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 text-[11px] font-mono font-bold tracking-wide">
          <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <span>SRS SECTION 9.1: PRINCIPLE OF LEAST PRIVILEGE RBAC</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Sign In to <span id="portal-role-title" className="text-blue-600 dark:text-blue-400 transition-colors">Command Center</span>
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto" id="portal-role-desc">
          Unified authentication service issuing short-lived JWT access tokens and emitting audit telemetry.
        </p>
      </div>

      {/* 5-ROLE SELECTOR TABS (Includes Super Admin) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 bg-slate-200/70 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-300/80 dark:border-slate-800 text-xs font-bold">
        
        {/* Tab 1: Government */}
        <button id="tab-government" className="py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200 dark:border-slate-700">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
          <span>Government</span>
        </button>

        {/* Tab 2: Citizen */}
        <button id="tab-citizen" className="py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Citizen</span>
        </button>

        {/* Tab 3: Field Responder */}
        <button id="tab-responder" className="py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
          <span>Rescue</span>
        </button>

        {/* Tab 4: Admin */}
        <button id="tab-admin" className="py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          <span>Admin</span>
        </button>

        {/* Tab 5: Super Admin (NEW) */}
        <button id="tab-superadmin" className="col-span-2 sm:col-span-1 py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
          <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>⭐ Apex</span>
        </button>

      </div>

      {/* PROMINENT USER NAME DISPLAY CARD (Requested: Login should show name) */}
      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 shadow-sm">
        <div className="flex items-center gap-3">
          <div id="user-avatar-badge" className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-md shadow-blue-500/20">
            JD
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide">Target Profile Session</div>
            <div id="user-name-display" className="font-black text-sm text-slate-900 dark:text-white">J. Das, IAS</div>
            <div id="user-role-badge" className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">State Relief Commissioner • Government Officer</div>
          </div>
        </div>
        <button className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition shadow-sm flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          <span>Auto-Fill</span>
        </button>
      </div>

      {/* AUTHENTICATION FORM CARD */}
      <div className="glass-login rounded-3xl p-6 sm:p-8 space-y-5">
        
        <form id="login-form" className="space-y-4">
          
          {/* FIELD GROUP 1: ROLE IDENTIFIER */}
          <div>
            <label id="input-identifier-label" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Official Government Email / Employee Code
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400" id="input-identifier-icon">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <input type="text" id="input-identifier" required className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white transition" placeholder="e.g. j.das@assam.gov.in" />
            </div>
          </div>

          {/* FIELD GROUP 2: ROLE EXTRA */}
          <div id="role-extra-field-container">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Department Scope (SRS Entity: Department)
            </label>
            <select id="input-extra" className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white transition">
              <option value="ReliefCommissioner">State Relief Commissionerate (Dispur)</option>
              <option value="NDRF">National Disaster Response Force (NDRF)</option>
              <option value="StatePolice">Assam State Police &amp; SDRF</option>
              <option value="Health">Health &amp; Family Welfare Dept</option>
              <option value="FireEmergency">Fire &amp; Emergency Services</option>
            </select>
          </div>

          {/* FIELD GROUP 3: PASSWORD */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label id="input-secret-label" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Keycloak Password
              </label>
              <span id="secret-helper-action" className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                Switch to OTP
              </span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <input type="password" id="input-secret" required className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white transition" placeholder="••••••••••••" />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit" id="submit-login-btn" className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-lg shadow-blue-600/25 transition transform active:scale-[0.99] flex items-center justify-center gap-2">
            <span id="btn-text">Authenticate &amp; Enter Command Center</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

        </form>

        {/* SECURITY DISCLAIMER */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-start gap-2.5 text-[11px] text-slate-500 dark:text-slate-400">
          <svg className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <p id="role-audit-disclaimer">
            Access strictly restricted to authorized disaster management personnel. All state-changing login actions emit an audit telemetry record to Kafka topic <code className="font-mono text-blue-600 dark:text-blue-400">audit.event</code>.
          </p>
        </div>

      </div>

    </div>
  </main>

  {/* TOAST NOTIFICATION */}
  <div id="toast" className="fixed bottom-5 right-5 z-50 translate-y-20 opacity-0 transition-all duration-300 pointer-events-none">
    <div className="bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-md border border-slate-700 flex items-center gap-2 text-xs font-medium">
      <span id="toast-msg">Session ready</span>
    </div>
  </div>

  

  {/* SHARED MODULE SCRIPTS */}
  
  
  
  {/* RakshaSetu Core Engines */}
  
  
  
  
  



    </>
  );
}
