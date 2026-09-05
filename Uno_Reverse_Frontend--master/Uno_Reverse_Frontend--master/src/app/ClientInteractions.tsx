"use client";
import { useEffect } from "react";

export default function ClientInteractions() {
  useEffect(() => {
    // ── 1. LOAD LUCIDE DYNAMICALLY ──────────────────────────────────────────
    const loadLucide = () => {
      if ((window as any).lucide) {
        (window as any).lucide.createIcons();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://unpkg.com/lucide@latest";
      script.onload = () => {
        if ((window as any).lucide) (window as any).lucide.createIcons();
      };
      document.head.appendChild(script);
    };
    loadLucide();

    // Re-run createIcons after SPA navigation (debounced so it doesn't spam)
    let debounceTimer: ReturnType<typeof setTimeout>;
    const observer = new MutationObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        if ((window as any).lucide) (window as any).lucide.createIcons();
      }, 150);
    });
    observer.observe(document.body, { childList: true, subtree: false });

    // ── 2. THEME ─────────────────────────────────────────────────────────────
    const savedTheme = localStorage.getItem("rakshasetu_theme") || "light";
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    // ── DICTIONARY ────────────────────────────────────────────────────────────
    const translations: Record<string, Record<string, string>> = {
      en: {
        tagline: "Prepare. Respond. Protect. Together.",
        nav_back: "Back",
        nav_logout: "Logout",
        nav_home: "Home",
        nav_about: "About",
        nav_contacts: "Contacts",
        nav_sops: "SOPs",
        nav_radar: "Radar",
        nav_portals: "State Portals",
        nav_kit: "72h Kit",
        hero_desc: "A unified platform integrating NDMA, NDRF, SDMA, SDRF, NGOs, and Citizen Responders into a single operational matrix.",
        sec_panels_title: "Role-Based Access Panels",
        sec_panels_sub: "Select your designated operational portal to access tailored tools and data views.",
        btn_signin: "Sign In",
      },
      hi: {
        tagline: "तैयारी। प्रतिक्रिया। सुरक्षा। एक साथ।",
        nav_back: "वापस",
        nav_logout: "लॉग आउट",
        nav_home: "होम",
        nav_about: "के बारे में",
        nav_contacts: "संपर्क",
        nav_sops: "एसओपी (SOPs)",
        nav_radar: "रडार",
        nav_portals: "राज्य पोर्टल",
        nav_kit: "72 घंटे किट",
        hero_desc: "एनडीएमए, एनडीआरएफ, एसडीएमए, एसडीआरएफ, एनजीओ और नागरिक उत्तरदाताओं को एक ही परिचालन मैट्रिक्स में एकीकृत करने वाला एक एकीकृत मंच।",
        sec_panels_title: "भूमिका-आधारित एक्सेस पैनल",
        sec_panels_sub: "अनुरूप उपकरणों और डेटा दृश्यों तक पहुंचने के लिए अपने निर्दिष्ट परिचालन पोर्टल का चयन करें।",
        btn_signin: "साइन इन करें",
      }
    };

    const applyLanguage = (lang: string) => {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key && translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
      localStorage.setItem("rakshasetu_lang", lang);

      // Update button styling
      const enBtns = document.querySelectorAll("#lang-btn-en");
      const hiBtns = document.querySelectorAll("#lang-btn-hi");
      
      if (lang === "en") {
        enBtns.forEach(btn => {
          btn.className = "px-2 py-0.5 rounded transition bg-blue-600 text-white";
        });
        hiBtns.forEach(btn => {
          btn.className = "px-2 py-0.5 rounded transition text-slate-400 hover:text-white";
        });
      } else {
        enBtns.forEach(btn => {
          btn.className = "px-2 py-0.5 rounded transition text-slate-400 hover:text-white";
        });
        hiBtns.forEach(btn => {
          btn.className = "px-2 py-0.5 rounded transition bg-blue-600 text-white";
        });
      }
    };

    const savedLang = localStorage.getItem("rakshasetu_lang") || "en";
    if (savedLang === "hi") {
      // Delay slightly to ensure DOM is ready in App Router client component
      setTimeout(() => applyLanguage("hi"), 50);
    } else {
      setTimeout(() => applyLanguage("en"), 50);
    }

    // ── 3. GLOBAL CLICK HANDLER ───────────────────────────────────────────────
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Theme toggle
      if (target.closest('button[title="Toggle Light/Dark Theme"]')) {
        const isDark = document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", !isDark);
        localStorage.setItem("rakshasetu_theme", isDark ? "light" : "dark");
        return;
      }

      // Language toggles
      if (target.closest("#lang-btn-en")) {
        applyLanguage("en");
        return;
      }
      if (target.closest("#lang-btn-hi")) {
        applyLanguage("hi");
        return;
      }

      // Mobile drawer toggle / close
      const drawer   = document.getElementById("raksha-left-drawer");
      const backdrop = document.getElementById("raksha-left-drawer-backdrop");
      if (target.closest('[data-drawer-toggle="true"]')) {
        if (drawer && backdrop) {
          const isClosed = drawer.classList.contains("-translate-x-full");
          drawer.classList.toggle("-translate-x-full", !isClosed);
          backdrop.classList.toggle("opacity-0", !isClosed);
          backdrop.classList.toggle("pointer-events-none", !isClosed);
        }
        return;
      }
      if (target.closest("#raksha-left-drawer-backdrop")) {
        drawer?.classList.add("-translate-x-full");
        backdrop?.classList.add("opacity-0", "pointer-events-none");
        return;
      }

      // JSON print/download
      if (target.closest('[data-print-json="true"]')) {
        const mockData = {
          timestamp: new Date().toISOString(),
          status: "SUCCESS",
          reportType: "Cabinet SitRep",
          summary: "Automated JSON export of the current situation report.",
          defconLevel: "BRAVO-ALPHA",
          triServicesCoord: "ACTIVE",
          url: window.location.href,
        };
        const a = document.createElement("a");
        a.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(mockData, null, 2));
        a.download = "sitrep-report.json";
        a.click();
        return;
      }
    };

    // ── 4. LOGIN FORM ─────────────────────────────────────────────────────────
    const handleFormSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement;
      if (form.id === "login-form") {
        e.preventDefault();
        const role = new URLSearchParams(window.location.search).get("role") || "citizen";
        const dest =
          role === "superadmin" ? "/superadmin"
          : role === "admin"   ? "/admin"
          : role === "government" ? "/government"
          : role === "responder"  ? "/responder"
          : "/citizen";
        window.location.href = dest;
      }
    };

    document.addEventListener("click", handleGlobalClick);
    document.addEventListener("submit", handleFormSubmit);

    return () => {
      clearTimeout(debounceTimer);
      observer.disconnect();
      document.removeEventListener("click", handleGlobalClick);
      document.removeEventListener("submit", handleFormSubmit);
    };
  }, []);

  return null;
}
