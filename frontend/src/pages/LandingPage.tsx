import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  Lock, 
  Building2, 
  HardHat, 
  Terminal, 
  Sparkles, 
  QrCode, 
  Key, 
  Hash, 
  Server, 
  Code2 
} from 'lucide-react';
import { LandingNavbar } from '../components/landing/LandingNavbar';
import { LandingFooter } from '../components/landing/LandingFooter';
import { ProductPreview } from '../components/landing/ProductPreview';
import { useAuth } from '../auth/useAuth';

export const LandingPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const getConsoleRoute = (role?: string) => {
    switch (role) {
      case 'PLATFORM_ADMIN':
      case 'PROJECT_MANAGER':
        return '/overview';
      case 'VENDOR':
        return '/my-work';
      case 'FIELD_ENGINEER':
        return '/quality-inspection';
      case 'FINANCE_OFFICER':
        return '/milestones';
      default:
        return '/overview';
    }
  };

  const consoleRoute = getConsoleRoute(user?.role);

  const workflowSteps = [
    {
      step: '01',
      title: 'PIN-Code Zone Demarcation',
      description: 'Municipal project managers delineate geographical work packages by 6-digit postal PIN code, establishing GIS boundaries and GPS coordinates.',
      icon: Compass,
      tag: 'Work Zone Module'
    },
    {
      step: '02',
      title: 'Contractor Work Allocation',
      description: 'Tasks are allocated to certified vendors based on capacity, 10-KPI track record, and non-overlapping spatial exclusivity.',
      icon: Building2,
      tag: 'Allocation Ledger'
    },
    {
      step: '03',
      title: 'Sequential Dependency Locking',
      description: 'Predecessor rules prevent subsequent work types (e.g. road resurfacing) until trenching and duct installation receive verified approval.',
      icon: Layers,
      tag: 'Dependency Engine'
    },
    {
      step: '04',
      title: 'AI Vision & Geofence Evidence',
      description: 'Contractors submit photographic progress proof with tamper-resistant EXIF GPS timestamps; Python computer vision detects defects and trench depth.',
      icon: Cpu,
      tag: 'AI Vision Microservice'
    },
    {
      step: '05',
      title: 'Human Review & SHA-256 Chaining',
      description: 'Municipal inspectors sign off in the dual-panel workspace; every state change is immutably appended to the cryptographic audit trail.',
      icon: ShieldCheck,
      tag: 'Audit Trail Ledger'
    }
  ];

  return (
    <div id="top" className="min-h-screen bg-[#0B1928] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#13A89E] selection:text-[#0B1928]">
      {/* Scoped CSS Animations */}
      <style>{`
        @keyframes heroFadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .hero-fade-in {
          animation: heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .float-preview {
          animation: floatSlow 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade-in,
          .float-preview {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Sticky Navigation */}
      <LandingNavbar />

      {/* 1. Hero Section with AI-Generated Cinematic Background */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-[#0B1928]">
        {/* Cinematic AI-Generated Infrastructure Background with Dark Vignette & Gradient Overlays */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(11, 25, 40, 0.72) 0%, rgba(11, 25, 40, 0.88) 55%, #0B1928 100%), url('/hero-infrastructure.webp')`
          }}
        />

        {/* Subtle Ambient Blueprint Grid Overlays */}
        <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-fade-in">
          <div className="text-center max-w-4xl mx-auto">
            {/* Top Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10243A]/90 border border-[#13A89E]/40 text-[#14B8A6] text-xs font-medium mb-8 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#13A89E] animate-pulse"></span>
              <span className="font-semibold">Enterprise Architecture v1.0</span>
              <span className="text-slate-600">•</span>
              <span className="text-[#AAB8C8]">100% Open-Source GIS (Leaflet + OpenStreetMap)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-tight sm:leading-none mb-6">
              Coordinated Municipal Work Allocation &amp;{' '}
              <span className="text-[#14B8A6]">
                AI Quality Assurance
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#AAB8C8] leading-relaxed max-w-3xl mx-auto mb-10">
              Eliminate repeated road destruction, conflicting contractor utility cuts, and quality blind spots. 
              InfraPulse AI synchronizes urban infrastructure corridors across 6-digit PIN zones with sequential 
              dependency locking, computer vision defect detection, and cryptographic audit accountability.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              {isAuthenticated ? (
                <Link
                  to={consoleRoute}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#0B1928] bg-[#13A89E] hover:bg-[#14B8A6] shadow-lg shadow-[#13A89E]/20 transition-all hover:scale-[1.02]"
                >
                  <span>Go to Operator Console</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#0B1928] bg-[#13A89E] hover:bg-[#14B8A6] shadow-lg shadow-[#13A89E]/20 transition-all hover:scale-[1.02]"
                >
                  <span>Launch Operator Console</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}

              <a
                href="#preview"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#F8FAFC] hover:text-white bg-[#10243A]/90 hover:bg-[#10243A] border border-[#13A89E]/30 transition-all"
              >
                <Terminal className="w-4 h-4 text-[#13A89E]" />
                <span>Explore Interactive Preview</span>
              </a>
            </div>

            {/* Operational Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
              <div className="p-4 rounded-xl bg-[#10243A]/85 border border-[#13A89E]/20 backdrop-blur-md">
                <span className="text-[11px] font-mono text-[#AAB8C8] uppercase tracking-wider block">
                  GIS Mapping
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#14B8A6] font-mono mt-1 block">
                  Leaflet + OSM
                </span>
                <span className="text-[11px] text-[#AAB8C8] mt-1 block">Zero paid API keys</span>
              </div>

              <div className="p-4 rounded-xl bg-[#10243A]/85 border border-[#13A89E]/20 backdrop-blur-md">
                <span className="text-[11px] font-mono text-[#AAB8C8] uppercase tracking-wider block">
                  Sequential Locks
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#F8FAFC] font-mono mt-1 block">
                  DAG Engine
                </span>
                <span className="text-[11px] text-[#AAB8C8] mt-1 block">Enforces prerequisite order</span>
              </div>

              <div className="p-4 rounded-xl bg-[#10243A]/85 border border-[#13A89E]/20 backdrop-blur-md">
                <span className="text-[11px] font-mono text-[#AAB8C8] uppercase tracking-wider block">
                  AI Computer Vision
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#14B8A6] font-mono mt-1 block">
                  OpenCV 4.9+
                </span>
                <span className="text-[11px] text-[#AAB8C8] mt-1 block">Trench depth &amp; crack scoring</span>
              </div>

              <div className="p-4 rounded-xl bg-[#10243A]/85 border border-[#13A89E]/20 backdrop-blur-md">
                <span className="text-[11px] font-mono text-[#AAB8C8] uppercase tracking-wider block">
                  Audit Ledger
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#F5A623] font-mono mt-1 block">
                  SHA-256
                </span>
                <span className="text-[11px] text-[#AAB8C8] mt-1 block">Cryptographic event chaining</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Product Preview Section (Secondary Navy: #10243A) */}
      <section id="preview" className="py-16 md:py-24 bg-[#10243A] relative border-t border-b border-[#13A89E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1928] border border-[#13A89E]/30 text-[#14B8A6] text-xs font-mono mb-4">
              <Terminal className="w-3.5 h-3.5 text-[#13A89E]" />
              <span>Interactive Console Simulation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Test-Drive the Operator Workspaces
            </h2>
            <p className="text-sm sm:text-base text-[#AAB8C8] mt-3 leading-relaxed">
              Explore the core consoles powering InfraPulse AI. Toggle between GIS spatial zoning, 
              computer vision quality inspection, and WorkerTrust site safety.
            </p>
          </div>

          {/* Interactive Tabbed Product Preview Component */}
          <ProductPreview />
        </div>
      </section>

      {/* 3. Platform Overview (Primary Navy: #0B1928) */}
      <section id="overview" className="py-16 md:py-24 bg-[#0B1928] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#13A89E] text-xs font-mono font-semibold uppercase tracking-widest">
              Unified Civic Coordination
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-2">
              Engineered for Multi-Stakeholder Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-[#AAB8C8] mt-3">
              Designed from the ground up to unite municipal bodies, utility concessionaires, and contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#13A89E]/10 border border-[#13A89E]/30 flex items-center justify-center mb-5 text-[#14B8A6]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Municipal Project Managers</h3>
              <p className="text-xs sm:text-sm text-[#AAB8C8] leading-relaxed mb-4">
                Oversee entire urban corridors. Partition work packages by postal PIN, monitor real-time 
                delivery velocity, and prevent unauthorized road excavations.
              </p>
              <ul className="text-xs text-[#AAB8C8] space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                  <span>Real-time corridor completion tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                  <span>10-KPI contractor rating &amp; ranking tiers</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#13A89E]/10 border border-[#13A89E]/30 flex items-center justify-center mb-5 text-[#14B8A6]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Utility Concessionaires</h3>
              <p className="text-xs sm:text-sm text-[#AAB8C8] leading-relaxed mb-4">
                Coordinate telecom fiber, water pipes, gas lines, and power ducts in shared road rights-of-way 
                without scheduling clashes or accidental utility strikes.
              </p>
              <ul className="text-xs text-[#AAB8C8] space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                  <span>DAG dependency order enforcement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                  <span>Non-conflicting spatial window allocation</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#13A89E]/10 border border-[#13A89E]/30 flex items-center justify-center mb-5 text-[#14B8A6]">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Infrastructure Contractors</h3>
              <p className="text-xs sm:text-sm text-[#AAB8C8] leading-relaxed mb-4">
                Dedicated vendor portal to review work orders, upload geofenced photo evidence, remediate 
                defects, and verify worker site certifications transparently.
              </p>
              <ul className="text-xs text-[#AAB8C8] space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                  <span>Mobile-friendly work order actions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                  <span>Corrective rework task notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Problem vs. Solution Section (Secondary Navy: #10243A) */}
      <section className="py-16 md:py-24 bg-[#10243A] border-t border-b border-[#13A89E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#13A89E] text-xs font-mono font-semibold uppercase tracking-widest">
              The Infrastructure Challenge
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-2">
              Transforming Chaotic Digging into Synchronized Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1928] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-[#F5A623] font-bold text-sm uppercase tracking-wider">
                <AlertTriangle className="w-5 h-5 shrink-0 text-[#F5A623]" />
                <span>Conventional Municipal Practice</span>
              </div>
              <p className="text-xs sm:text-sm text-[#AAB8C8] leading-relaxed">
                Urban roads are paved, only to be dug up weeks later by gas, telecom, or water utilities 
                operating in uncoordinated silos.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-lg bg-[#10243A] border border-slate-800 text-xs text-[#AAB8C8] flex items-start gap-2.5">
                  <span className="text-[#F5A623] font-bold">✕</span>
                  <span>Sequential confusion: Roads are resurfaced before underlying cable ducts are certified.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#10243A] border border-slate-800 text-xs text-[#AAB8C8] flex items-start gap-2.5">
                  <span className="text-[#F5A623] font-bold">✕</span>
                  <span>Subjective quality inspection reliant on delayed physical field notes and dispute-prone paperwork.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#10243A] border border-slate-800 text-xs text-[#AAB8C8] flex items-start gap-2.5">
                  <span className="text-[#F5A623] font-bold">✕</span>
                  <span>Vendor performance measured on hearsay rather than empirical, explainable KPI metrics.</span>
                </div>
              </div>
            </div>

            {/* The InfraPulse Solution */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1928] border border-[#13A89E]/30 space-y-4">
              <div className="flex items-center gap-2.5 text-[#14B8A6] font-bold text-sm uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 shrink-0 text-[#13A89E]" />
                <span>The InfraPulse AI Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-[#AAB8C8] leading-relaxed">
                Centralized spatial partitioning and automated dependency enforcement preventing road re-excavation.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-lg bg-[#10243A] border border-[#13A89E]/20 text-xs text-[#AAB8C8] flex items-start gap-2.5">
                  <span className="text-[#14B8A6] font-bold">✓</span>
                  <span>Hard dependency gates: Road resurfacing is locked in the ledger until ducting inspection is approved.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#10243A] border border-[#13A89E]/20 text-xs text-[#AAB8C8] flex items-start gap-2.5">
                  <span className="text-[#14B8A6] font-bold">✓</span>
                  <span>AI computer vision verification calculates trench depth, asphalt layer, and defect bounding boxes.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#10243A] border border-[#13A89E]/20 text-xs text-[#AAB8C8] flex items-start gap-2.5">
                  <span className="text-[#14B8A6] font-bold">✓</span>
                  <span>SHA-256 cryptographic chaining guarantees an immutable, audit-ready municipal record.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Complete Feature Showcase (Primary Navy: #0B1928) */}
      <section className="py-16 md:py-24 bg-[#0B1928] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#13A89E] text-xs font-mono font-semibold uppercase tracking-widest">
              Verified Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-2">
              Engineered Feature Architecture
            </h2>
            <p className="text-sm sm:text-base text-[#AAB8C8] mt-3">
              Explore the fully implemented modules powering our enterprise operations ledger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div id="gis-zones" className="p-6 rounded-2xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#13A89E]/10 text-[#14B8A6] border border-[#13A89E]/30">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#14B8A6] bg-[#0B1928] px-2 py-0.5 rounded border border-[#13A89E]/30">
                    Fully Implemented
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] mb-2">GIS Geographical Work Zones</h3>
                <p className="text-xs text-[#AAB8C8] leading-relaxed mb-4">
                  PIN-code spatial sectors mapped with Leaflet and live OpenStreetMap tiles. Includes GPS 
                  coordinate verification, auto-pan bounds, zone inventory search, and zero paid API dependencies.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#14B8A6] pt-3 border-t border-slate-800 flex items-center justify-between">
                <span>WGS 84 • 6-Digit PIN Filtering</span>
                <MapPin className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 2 */}
            <div id="vendor-allocation" className="p-6 rounded-2xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#13A89E]/10 text-[#14B8A6] border border-[#13A89E]/30">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#14B8A6] bg-[#0B1928] px-2 py-0.5 rounded border border-[#13A89E]/30">
                    Fully Implemented
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] mb-2">Vendor Work Allocation Ledger</h3>
                <p className="text-xs text-[#AAB8C8] leading-relaxed mb-4">
                  Multi-contractor task dispatch with status state machine (`PENDING_ACCEPTANCE`, `ACCEPTED`, 
                  `IN_PROGRESS`, `COMPLETED`, `BLOCKED`). Dedicated contractor acceptance and rejection logging.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#14B8A6] pt-3 border-t border-slate-800 flex items-center justify-between">
                <span>Multi-Vendor Dispatch</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 3 */}
            <div id="dependencies" className="p-6 rounded-2xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#13A89E]/10 text-[#14B8A6] border border-[#13A89E]/30">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#14B8A6] bg-[#0B1928] px-2 py-0.5 rounded border border-[#13A89E]/30">
                    Fully Implemented
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] mb-2">Sequential Dependency Engine</h3>
                <p className="text-xs text-[#AAB8C8] leading-relaxed mb-4">
                  Directed Acyclic Graph (DAG) rules enforcing predecessor-successor sequencing. Blocks 
                  asphalt resurfacing until trenching and cable laying pass inspection.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#14B8A6] pt-3 border-t border-slate-800 flex items-center justify-between">
                <span>DAG Validation • Hard Blocking</span>
                <Lock className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 4 */}
            <div id="ai-inspection" className="p-6 rounded-2xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#13A89E]/10 text-[#14B8A6] border border-[#13A89E]/30">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#14B8A6] bg-[#0B1928] px-2 py-0.5 rounded border border-[#13A89E]/30">
                    Fully Implemented
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] mb-2">AI Computer Vision &amp; Inspection Workspace</h3>
                <p className="text-xs text-[#AAB8C8] leading-relaxed mb-4">
                  FastAPI Python microservice analyzing photographic evidence for trench depth, asphalt layer 
                  measurements, and surface crack severity, coupled with a dual-panel inspector signoff workspace.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#14B8A6] pt-3 border-t border-slate-800 flex items-center justify-between">
                <span>OpenCV 4.9 • Human-In-The-Loop</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 5 */}
            <div id="workertrust" className="p-6 rounded-2xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#13A89E]/10 text-[#14B8A6] border border-[#13A89E]/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#14B8A6] bg-[#0B1928] px-2 py-0.5 rounded border border-[#13A89E]/30">
                    Fully Implemented
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] mb-2">WorkerTrust Workforce &amp; Site Safety</h3>
                <p className="text-xs text-[#AAB8C8] leading-relaxed mb-4">
                  Worker identity registry, digital QR site badges, real-time check-in/out, emergency 
                  muster station headcount, safety incident tracking, and trade certifications.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#14B8A6] pt-3 border-t border-slate-800 flex items-center justify-between">
                <span>QR Badges • Safety Headcount</span>
                <QrCode className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 6 */}
            <div id="security-audit" className="p-6 rounded-2xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#13A89E]/10 text-[#14B8A6] border border-[#13A89E]/30">
                    <Hash className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#14B8A6] bg-[#0B1928] px-2 py-0.5 rounded border border-[#13A89E]/30">
                    Fully Implemented
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] mb-2">Cryptographic Audit Trail</h3>
                <p className="text-xs text-[#AAB8C8] leading-relaxed mb-4">
                  Tamper-evident system logs chained via SHA-256 hashes. Verifies payload integrity, 
                  actor attribution, timestamp immutability, and exportable compliance reports.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#14B8A6] pt-3 border-t border-slate-800 flex items-center justify-between">
                <span>SHA-256 Chaining • Non-Repudiation</span>
                <Key className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Operational Workflow Section (Secondary Navy: #10243A) */}
      <section className="py-16 md:py-24 bg-[#10243A] border-t border-b border-[#13A89E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#13A89E] text-xs font-mono font-semibold uppercase tracking-widest">
              Execution Lifecycle
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-2">
              From Spatial Partitioning to Certified Completion
            </h2>
            <p className="text-sm sm:text-base text-[#AAB8C8] mt-3">
              Click through the five stages of an InfraPulse municipal work package.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Steps Navigation */}
            <div className="lg:col-span-5 space-y-2">
              {workflowSteps.map((step, idx) => {
                const isSelected = activeWorkflowStep === idx;
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveWorkflowStep(idx)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#0B1928] border-[#13A89E] shadow-md ring-1 ring-[#13A89E]/40'
                        : 'bg-[#0B1928]/60 border-slate-800 hover:border-slate-700 hover:bg-[#0B1928]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-[#14B8A6]">
                        STAGE {step.step}
                      </span>
                      <span className="text-[10px] text-[#AAB8C8] bg-[#10243A] px-2 py-0.5 rounded border border-slate-800">
                        {step.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#13A89E]" />
                      <h4 className="font-bold text-sm text-[#F8FAFC]">{step.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Stage Highlight Card */}
            <div className="lg:col-span-7 bg-[#0B1928] rounded-2xl border border-[#13A89E]/25 p-6 sm:p-8 flex flex-col justify-between min-h-[340px] shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="font-mono text-sm font-bold text-[#14B8A6]">
                    STAGE {workflowSteps[activeWorkflowStep].step} SPECIFICATION
                  </span>
                  <span className="text-xs text-[#AAB8C8] bg-[#10243A] px-2.5 py-1 rounded border border-slate-800">
                    Lifecycle Execution
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mt-4">
                  {workflowSteps[activeWorkflowStep].title}
                </h3>
                <p className="text-sm text-[#AAB8C8] leading-relaxed mt-3">
                  {workflowSteps[activeWorkflowStep].description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-[#AAB8C8]">
                <span className="flex items-center gap-1.5 text-[#14B8A6] font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  Validated by Platform Rule Engine
                </span>
                <span className="font-mono text-slate-500">
                  {activeWorkflowStep + 1} of {workflowSteps.length} Stages
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Production Technology Stack (Primary Navy: #0B1928) */}
      <section id="architecture" className="py-16 md:py-24 bg-[#0B1928] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#13A89E] text-xs font-mono font-semibold uppercase tracking-widest">
              Production Stack
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-2">
              Modern, Modular &amp; Open-Source Architecture
            </h2>
            <p className="text-sm sm:text-base text-[#AAB8C8] mt-3">
              Engineered with proven enterprise frameworks and zero proprietary map licensing fees.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/40 transition-all">
              <Server className="w-6 h-6 text-[#14B8A6] mb-2" />
              <h4 className="font-bold text-sm text-[#F8FAFC]">Spring Boot 3</h4>
              <p className="text-[11px] text-[#AAB8C8] mt-1">Java 21 • Modular Monolith • JPA/Hibernate</p>
            </div>

            <div className="p-5 rounded-xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/40 transition-all">
              <Cpu className="w-6 h-6 text-[#14B8A6] mb-2" />
              <h4 className="font-bold text-sm text-[#F8FAFC]">FastAPI AI Vision</h4>
              <p className="text-[11px] text-[#AAB8C8] mt-1">Python 3.11 • OpenCV 4.9 • Pillow</p>
            </div>

            <div className="p-5 rounded-xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/40 transition-all">
              <Code2 className="w-6 h-6 text-[#14B8A6] mb-2" />
              <h4 className="font-bold text-sm text-[#F8FAFC]">React 18 &amp; Vite</h4>
              <p className="text-[11px] text-[#AAB8C8] mt-1">TypeScript 5.6 • Tailwind CSS v3</p>
            </div>

            <div className="p-5 rounded-xl bg-[#10243A] border border-[#13A89E]/20 hover:border-[#13A89E]/40 transition-all">
              <Compass className="w-6 h-6 text-[#14B8A6] mb-2" />
              <h4 className="font-bold text-sm text-[#F8FAFC]">Leaflet &amp; PostGIS</h4>
              <p className="text-[11px] text-[#AAB8C8] mt-1">OpenStreetMap Tiles • Zero API Keys</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final Call to Action (Secondary Navy: #10243A) */}
      <section className="py-20 relative bg-[#10243A] border-t border-[#13A89E]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#13A89E]/10 border border-[#13A89E]/30 flex items-center justify-center mx-auto mb-6 text-[#14B8A6]">
            <ShieldCheck className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Ready to Experience InfraPulse AI?
          </h2>
          <p className="text-sm sm:text-base text-[#AAB8C8] mt-4 max-w-2xl mx-auto leading-relaxed">
            Access the operational workspace to manage work zones, dispatch contractors, inspect automated 
            computer vision evidence, and review cryptographic audit ledgers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {isAuthenticated ? (
              <Link
                to={consoleRoute}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-[#0B1928] bg-[#13A89E] hover:bg-[#14B8A6] shadow-xl shadow-[#13A89E]/20 transition-all hover:scale-[1.02]"
              >
                <span>Enter Operator Console</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-[#0B1928] bg-[#13A89E] hover:bg-[#14B8A6] shadow-xl shadow-[#13A89E]/20 transition-all hover:scale-[1.02]"
                >
                  <span>Launch Operator Console</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/login"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-[#F8FAFC] hover:text-[#14B8A6] bg-[#0B1928] hover:bg-[#0B1928]/80 border border-[#13A89E]/30 transition-all"
                >
                  <span>Sign In as Contractor</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};
