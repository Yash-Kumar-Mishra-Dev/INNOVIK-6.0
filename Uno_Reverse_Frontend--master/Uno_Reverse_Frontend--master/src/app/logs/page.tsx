import { PortalHeader } from '@/components/PortalHeader';

import React from 'react';
import { AdminSidebar } from '@/components/AdminSidebar';

import Link from 'next/link';

export default function Logs() {
  return (
    <>
      

  {/* BHUVAN TRICOLOR STRIPE */}
  <div className="bg-gradient-to-r from-[#ff9933] via-white to-[#138808] h-1.5 w-full"></div>

  {/* HEADER */}
    {/* UNIFIED CONNECTED NAV BAR */}
    {/* UNIFIED CONNECTED NAV BAR */}
  <PortalHeader badge="SYSTEM AUDIT LOGS" />

  {/* LEFT NAVIGATION DRAWER */}
  <div id="raksha-left-drawer-backdrop" className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[9998] opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <AdminSidebar activePage="logs" isMobile={true} />



  <div className="flex-1 flex flex-col md:flex-row min-h-0 max-w-[1720px] mx-auto w-full">
    {/* LEFT SIDEBAR */}
    <AdminSidebar activePage="logs" />

    {/* MAIN LOGS */}
    <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
      <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Kafka Topic: audit.event (Immutable Security Trail)</h1>
          <p className="text-xs text-slate-500">Zero log tampering guarantee. Cryptographically hashed events committed to disk.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-md">
          Export Audit Trail (JSON)
        </button>
      </div>

      {/* LOG STREAM BOX */}
      <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs space-y-2.5 border border-slate-800 shadow-md">
        <div className="text-[11px] text-slate-500 pb-2 border-b border-slate-800 flex justify-between">
          <span>TIMESTAMP (UTC+05:30) • EVENT TYPE • ACTOR ID • RESULT</span>
          <span className="text-emerald-400">● LIVE INGEST (3 brokers active)</span>
        </div>
        <div className="space-y-2 overflow-y-auto max-h-[500px]">
          <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">[11:34:12]</span>
            <span className="text-emerald-400 font-bold">AUTH_OIDC_LOGIN_SUCCESS</span>
            <span className="text-white">actor: superadmin@pmo.gov.in</span>
            <span className="text-slate-500">ip: 10.240.1.18 (MFA: Hardware Token)</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">[11:32:05]</span>
            <span className="text-blue-400 font-bold">KAFKA_PRODUCE_INCIDENT</span>
            <span className="text-white">topic: incident.created</span>
            <span className="text-slate-500">id: INC-2025-0518-842 (Category: Severe Flood)</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">[11:29:48]</span>
            <span className="text-amber-400 font-bold">CAP_BROADCAST_TRIGGERED</span>
            <span className="text-white">actor: J. Das, IAS (Govt Officer)</span>
            <span className="text-slate-500">fcm_tokens: 45,210 • sms_fallback: CDAC Gateway</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">[11:20:14]</span>
            <span className="text-purple-400 font-bold">MINIO_S3_PHOTO_UPLOAD</span>
            <span className="text-white">bucket: /rakshasetu-evidence</span>
            <span className="text-slate-500">file: evidence_9210_photo.jpg (Size: 2.1 MB)</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">[11:15:00]</span>
            <span className="text-emerald-400 font-bold">POSTGRESQL_REPLICA_SYNC</span>
            <span className="text-white">cluster: Primary (AWS) -&gt; Standby (Azure)</span>
            <span className="text-slate-500">lag: 0ms • wal_commit: verified</span>
          </div>
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
