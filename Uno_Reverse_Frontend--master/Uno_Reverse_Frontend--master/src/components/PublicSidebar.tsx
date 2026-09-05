"use client";

import React from "react";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Back to Home",
    icon: "home",
  },
  {
    href: "/contacts",
    label: "Emergency 112 Contacts",
    icon: "phone",
  },
  {
    href: "/safety-info",
    label: "Safety Info & SOPs",
    icon: "book",
  },
  {
    href: "/checklist",
    label: "72-Hour Survival Kit",
    icon: "check",
  },
  {
    href: "/radar",
    label: "Live Weather Radar",
    icon: "radar",
  },
  {
    href: "/about",
    label: "About RakshaSetu",
    icon: "info",
  },
  {
    href: "/login",
    label: "Sign In to Portal",
    icon: "login",
    highlight: true,
  },
];

export function PublicSidebar({ activePage }: { activePage: string }) {
  return (
    <aside className="w-full md:w-60 bg-slate-950 text-slate-300 flex flex-col flex-shrink-0 border-r border-slate-800/80">
      {/* Header */}
      <div className="p-4 border-b border-slate-800/80">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Public Information</div>
        <div className="font-bold text-white text-xs">Emergency Resources</div>
        <div className="text-[10px] text-slate-400 mt-0.5">No login required</div>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-0.5 text-xs font-medium flex-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = item.href !== "/" && activePage === item.href.replace("/", "");
          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition ${
                isActive
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/25"
                  : (item as any).highlight
                  ? "text-emerald-400 hover:bg-emerald-950/60 hover:text-emerald-300"
                  : "hover:bg-slate-900 text-slate-300 hover:text-white"
              }`}
            >
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 bg-slate-900/60 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block"></span>
          NDMA LIVE SYSTEM — 24x7
        </div>
      </div>
    </aside>
  );
}
