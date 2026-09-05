"use client";

import React from 'react';

interface PortalHeaderProps {
  badge?: string;
  showBack?: boolean;
  showLogout?: boolean;
  showDrawer?: boolean;
}

export function PortalHeader({
  badge,
  showBack = true,
  showLogout = true,
  showDrawer = true,
}: PortalHeaderProps) {
  return (
    <header className="bg-slate-950 text-white px-4 lg:px-8 py-3.5 shadow-lg border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Hamburger & Project Name / Logo on the LEFT hand side */}
        <div className="flex items-center gap-3">
          {showDrawer && (
            <button
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition flex items-center justify-center shadow-sm"
              data-drawer-toggle="true"
              title="Toggle Navigation Menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          )}

          <a href="/" className="flex items-center gap-3 group text-left" title="RakshaSetu Gateway">
            <img
              src="/logo.png"
              alt="RakshaSetu Logo"
              className="w-10 h-10 rounded-2xl object-contain border border-slate-700 shadow-md group-hover:scale-105 transition-transform bg-slate-900 p-0.5"
            />
            <div>
              <div className="font-black text-lg tracking-tight text-white flex items-center gap-1.5">
                Raksha<span className="text-blue-500">Setu</span>
                {badge && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 font-mono font-bold border border-blue-500/30 uppercase">
                    {badge}
                  </span>
                )}
              </div>
              <div className="text-[10px] font-bold text-slate-400 tracking-wide" data-i18n="tagline">
                Prepare. Respond. Protect. Together.
              </div>
            </div>
          </a>
        </div>

        {/* Right: The rest of the things (Language, Theme, Back, Logout) - NO Navigation */}
        <div className="flex items-center gap-2 text-xs">
          {/* Bilingual Switcher */}
          <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-xs font-bold">
            <button id="lang-btn-en" className="px-2 py-0.5 rounded bg-blue-600 text-white transition">EN</button>
            <button id="lang-btn-hi" className="px-2 py-0.5 rounded text-slate-400 hover:text-white transition">हिन्दी</button>
          </div>

          {/* Theme Switcher */}
          <button className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition" title="Toggle Light/Dark Theme">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path></svg>
          </button>

          {/* Back to Gateway */}
          {showBack && (
            <a href="/" className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition font-semibold flex items-center gap-1.5" title="Redirect to Gateway Index">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"></path></svg>
              <span data-i18n="nav_back">Back</span>
            </a>
          )}

          {/* Logout */}
          {showLogout && (
            <a href="/login" className="px-3 py-1.5 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800/60 transition font-bold flex items-center gap-1.5 shadow-sm" title="Sign Out & Return to Login Panel">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              <span data-i18n="nav_logout">Logout</span>
            </a>
          )}
        </div>

      </div>
    </header>
  );
}
