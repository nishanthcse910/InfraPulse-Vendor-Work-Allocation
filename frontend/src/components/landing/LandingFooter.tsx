import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Lock, 
  Terminal, 
  Compass,
  Building2,
  Award
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

export const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-[#0B1928] border-t border-slate-800 text-[#AAB8C8] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" theme="dark" showText={true} showTagline={true} />
            <p className="text-[#AAB8C8] text-xs leading-relaxed max-w-sm">
              Unified multi-vendor municipal infrastructure coordination platform bridging 
              PIN-code spatial work allocation, sequential dependency enforcement, and automated 
              computer vision quality verification.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
              <span className="bg-[#10243A] border border-[#13A89E]/30 px-2.5 py-1 rounded text-[#14B8A6] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#13A89E] animate-pulse"></span>
                Spring Boot 3 + Java 21
              </span>
              <span className="bg-[#10243A] border border-[#13A89E]/30 px-2.5 py-1 rounded text-[#14B8A6]">
                Leaflet + OpenStreetMap
              </span>
              <span className="bg-[#10243A] border border-[#F5A623]/30 px-2.5 py-1 rounded text-[#F5A623]">
                SHA-256 Audit Chain
              </span>
            </div>
          </div>

          {/* Column 2: Core Platform Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
              Platform Modules
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#gis-zones" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#13A89E]" />
                  <span>Geographical Work Zones</span>
                </a>
              </li>
              <li>
                <a href="#vendor-allocation" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#13A89E]" />
                  <span>Vendor Work Allocation</span>
                </a>
              </li>
              <li>
                <a href="#dependencies" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#13A89E]" />
                  <span>Sequential Dependency Engine</span>
                </a>
              </li>
              <li>
                <a href="#ai-inspection" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#13A89E]" />
                  <span>AI Quality Inspection</span>
                </a>
              </li>
              <li>
                <a href="#workertrust" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#13A89E]" />
                  <span>WorkerTrust Workforce</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Enterprise Roles */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
              User Roles &amp; Portals
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="hover:text-[#14B8A6] transition-colors">
                  Platform Administrator
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#14B8A6] transition-colors">
                  Municipal Project Manager
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#14B8A6] transition-colors">
                  Infrastructure Contractor Portal
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#14B8A6] transition-colors">
                  Field Quality Inspector
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#14B8A6] transition-colors">
                  Finance &amp; Audit Officer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Architecture & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
              Trust &amp; Governance
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#security-audit" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>Cryptographic Audit Trail</span>
                </a>
              </li>
              <li>
                <a href="#kpi-evaluation" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>10-KPI Contractor Rating</span>
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#13A89E]" />
                  <span>Architecture Specifications</span>
                </a>
              </li>
              <li>
                <Link to="/login" className="text-[#14B8A6] hover:text-[#13A89E] font-semibold flex items-center gap-1">
                  <span>Sign In to Console →</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#AAB8C8]">
          <div>
            © {new Date().getFullYear()} InfraPulse AI Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              All Services Operational
            </span>
            <span>•</span>
            <span>WGS 84 GIS Mapping</span>
            <span>•</span>
            <span>Zero Paid API Keys</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
