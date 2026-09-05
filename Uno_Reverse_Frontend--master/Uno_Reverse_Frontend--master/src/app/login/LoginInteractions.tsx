"use client";
import { useEffect } from "react";

export default function LoginInteractions() {
  useEffect(() => {
    const roleConfigs: Record<string, any> = {
      government: {
        title: 'Command Center',
        desc: 'Access for State Relief Commissioners, District Magistrates, and Department Heads.',
        name: 'J. Das, IAS',
        initials: 'JD',
        roleBadge: 'State Relief Commissioner • Government Officer',
        accentColor: '#2563eb',
        identifierLabel: 'Official Government Email / Employee Code',
        identifierPlaceholder: 'j.das@assam.gov.in',
        secretLabel: 'Keycloak Secure Password',
        btnText: 'Authenticate & Enter Command Center',
        btnClass: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/25',
        demo: { identifier: 'j.das@assam.gov.in', secret: 'GovRelief2025!', extra: 'ReliefCommissioner' },
        extraHTML: `
          <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Department Scope</label>
          <select id="input-extra" class="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white transition">
            <option value="ReliefCommissioner" selected>State Relief Commissioner (Assam)</option>
            <option value="DistrictMagistrate">District Magistrate / Collector</option>
            <option value="PWD">Public Works Department (PWD)</option>
          </select>
        `
      },
      citizen: {
        title: 'Citizen Identity Portal',
        desc: 'Secure access to emergency relief funds, evacuation passes, and missing persons reporting.',
        name: 'Ravi Kumar',
        initials: 'RK',
        roleBadge: 'Verified Citizen • Aadhaar Linked',
        accentColor: '#059669',
        identifierLabel: 'Aadhaar ID / Registered Mobile Number',
        identifierPlaceholder: '9876-XXXX-XXXX',
        secretLabel: 'OTP or Secure PIN',
        btnText: 'Verify Identity & Enter Citizen Portal',
        btnClass: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25',
        demo: { identifier: '9876-XXXX-1234', secret: '784512', extra: null },
        extraHTML: ''
      },
      responder: {
        title: 'Rescue Team HUD',
        desc: 'Tactical field access for search-and-rescue boat squads, paramedics, and drone pilots.',
        name: 'Inspector S. Bora',
        initials: 'SB',
        roleBadge: 'Squad Alpha Lead • NDRF 1st Battalion',
        accentColor: '#0284c7',
        identifierLabel: 'Squad Callsign / Field Responder ID',
        identifierPlaceholder: 'SQUAD-ALPHA-01',
        secretLabel: 'Tactical Radio PIN / Passcode',
        btnText: 'Verify & Enter Field Operations HUD',
        btnClass: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/25',
        demo: { identifier: 'SQUAD-ALPHA-01', secret: 'ALPHA-99-PASS', extra: 'BoatSquad4' },
        extraHTML: `
          <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Tactical Deployment Craft</label>
          <select id="input-extra" class="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white transition">
            <option value="BoatSquad4" selected>Zodiac Inflatable Boat #4 (NDRF Bn 1)</option>
            <option value="MedicalUnit2">Amphibious Trauma Ambulance #2</option>
            <option value="DroneSwarm1">Thermal Drone Surveillance Swarm #1</option>
          </select>
        `
      },
      admin: {
        title: 'Platform Admin Console',
        desc: 'Platform management for Keycloak realm configurations, Kafka audit logs, and backups.',
        name: 'Rajesh Sharma',
        initials: 'RS',
        roleBadge: 'Platform Systems Administrator • IT Dept',
        accentColor: '#1e3a8a',
        identifierLabel: 'Master Realm Keycloak Admin Account',
        identifierPlaceholder: 'admin@rakshasetu.gov.in',
        secretLabel: 'Master Admin Key / Hardware Token',
        btnText: 'Authenticate Master Admin Console',
        btnClass: 'bg-slate-800 hover:bg-slate-900 shadow-slate-800/25',
        demo: { identifier: 'admin@rakshasetu.gov.in', secret: 'AdminKeycloak2025!', extra: 'FullAdmin' },
        extraHTML: `
          <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Administrative Domain</label>
          <select id="input-extra" class="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white transition">
            <option value="FullAdmin" selected>Full Master Realm (SuperAdmin)</option>
            <option value="IAM">Keycloak IAM & RBAC Only</option>
            <option value="Audit">Audit Log Observer</option>
          </select>
        `
      },
      superadmin: {
        title: 'Apex Council Situation Room',
        desc: 'Executive crisis authorization for Union Ministers, Chief Ministers, and Chief Secretaries.',
        name: 'Hon. Union Home Secy / CM Advisor',
        initials: 'AP',
        roleBadge: 'Apex Council Executive • Cabinet Secretariat',
        accentColor: '#d97706',
        identifierLabel: 'National Executive Cabinet Credential',
        identifierPlaceholder: 'apex.cabinet@gov.in',
        secretLabel: 'Cryptographic HSM Key',
        btnText: 'Authorize & Enter Apex Situation Room',
        btnClass: 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-amber-600/25',
        demo: { identifier: 'apex.cabinet@gov.in', secret: 'ApexEmergencyAuth#1', extra: 'ApexFull' },
        extraHTML: `
          <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Executive Clearance Level</label>
          <select id="input-extra" class="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white transition">
            <option value="ApexFull" selected>Cabinet Committee on Security (CCS Level 1)</option>
            <option value="CMSecretariat">Chief Minister's Executive Secretariat</option>
            <option value="NDMAApex">NDMA National Apex Council</option>
          </select>
        `
      }
    };

    let currentRole = "government";

    const switchRole = (roleKey: string) => {
      currentRole = roleKey;
      const config = roleConfigs[roleKey];
      if (!config) return;

      ['government', 'citizen', 'responder', 'admin', 'superadmin'].forEach(r => {
        const btn = document.getElementById(`tab-${r}`);
        if (!btn) return;
        if (r === roleKey) {
          btn.className = `py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200 dark:border-slate-700 font-bold`;
        } else {
          btn.className = `py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium`;
        }
      });

      // Update Texts
      const elName = document.getElementById('user-name-display');
      if (elName) elName.textContent = config.name;
      const elAvatar = document.getElementById('user-avatar-badge');
      if (elAvatar) elAvatar.textContent = config.initials;
      const elRole = document.getElementById('user-role-badge');
      if (elRole) elRole.textContent = config.roleBadge;
      const elTitle = document.getElementById('portal-role-title');
      if (elTitle) elTitle.textContent = config.title;
      const elDesc = document.getElementById('portal-role-desc');
      if (elDesc) elDesc.textContent = config.desc;
      const elIdentLbl = document.getElementById('input-identifier-label');
      if (elIdentLbl) elIdentLbl.textContent = config.identifierLabel;
      const elIdent = document.getElementById('input-identifier') as HTMLInputElement;
      if (elIdent) elIdent.placeholder = config.identifierPlaceholder;
      const elSecretLbl = document.getElementById('input-secret-label');
      if (elSecretLbl) elSecretLbl.textContent = config.secretLabel;
      const elExtra = document.getElementById('role-extra-field-container');
      if (elExtra) elExtra.innerHTML = config.extraHTML;
      
      const elBtnText = document.getElementById('btn-text');
      if (elBtnText) elBtnText.textContent = config.btnText;
      const submitBtn = document.getElementById('submit-login-btn');
      if (submitBtn) {
        submitBtn.className = `w-full py-3 px-4 rounded-xl text-white font-bold text-xs tracking-wide shadow-lg transition transform active:scale-[0.99] flex items-center justify-center gap-2 ${config.btnClass}`;
      }

      // Update URL so form submit goes to the right place
      window.history.replaceState({}, '', `?role=${roleKey}`);
    };

    const handleLoginClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Handle Role Tabs
      ['government', 'citizen', 'responder', 'admin', 'superadmin'].forEach(r => {
        if (target.closest(`#tab-${r}`)) {
          switchRole(r);
        }
      });

      // Handle Auto-Fill Button
      const autoFillBtn = target.closest('button');
      if (autoFillBtn && autoFillBtn.textContent?.includes("Auto-Fill")) {
        const config = roleConfigs[currentRole];
        const ident = document.getElementById('input-identifier') as HTMLInputElement;
        if (ident) ident.value = config.demo.identifier;
        const secret = document.getElementById('input-secret') as HTMLInputElement;
        if (secret) secret.value = config.demo.secret;
        const extraSelect = document.getElementById('input-extra') as HTMLSelectElement;
        if (extraSelect && config.demo.extra) {
          extraSelect.value = config.demo.extra;
        }
        alert(`Credentials filled for: ${config.name}`);
      }
    };

    document.addEventListener("click", handleLoginClick);

    // Initial setup based on URL
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get("role") || "government";
    switchRole(role);

    return () => {
      document.removeEventListener("click", handleLoginClick);
    };
  }, []);

  return null;
}
