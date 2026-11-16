import React, { useState } from 'react';
import { 
  Compass, 
  Cpu, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  ExternalLink, 
  UserCheck, 
  QrCode, 
  HardHat, 
  Eye, 
  FileCheck2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export type PreviewTab = 'gis' | 'ai-quality' | 'workertrust';

export const ProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PreviewTab>('gis');
  const [selectedMockZone, setSelectedMockZone] = useState<number>(0);

  const mockZones = [
    {
      code: 'WZ-560001-A',
      name: 'MG Road Metro Utility Corridor',
      pin: '560001',
      contractor: 'Apex Infra Projects',
      status: 'ACTIVE',
      tasks: 4,
      lat: 12.9756,
      lng: 77.6066,
      workType: 'Underground Ducting & Trenching'
    },
    {
      code: 'WZ-560038-B',
      name: 'Indiranagar 100ft Optical Fiber Expansion',
      pin: '560038',
      contractor: 'Southern Roadworks Pvt Ltd',
      status: 'AVAILABLE',
      tasks: 2,
      lat: 12.9783,
      lng: 77.6408,
      workType: 'Cable Pulling & Splice Vault'
    },
    {
      code: 'WZ-560095-C',
      name: 'Koramangala 80ft Stormwater Link',
      pin: '560095',
      contractor: 'Karnataka Civil Infrastructure',
      status: 'COMPLETED',
      tasks: 6,
      lat: 12.9352,
      lng: 77.6245,
      workType: 'Concrete Precast Culvert'
    }
  ];

  return (
    <div className="w-full bg-[#10243A]/90 rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Console Frame Window Header */}
      <div className="bg-[#0B1928] px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        {/* Mac OS style window controls + Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="h-4 w-[1px] bg-slate-800 mx-1"></div>
          <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-2">
            <span className="text-teal-400">infrapulse-console</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">interactive-preview</span>
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('gis')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
              activeTab === 'gis'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>GIS Work Zones</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ai-quality')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
              activeTab === 'ai-quality'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>AI Quality Inspection</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('workertrust')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
              activeTab === 'workertrust'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>WorkerTrust Workforce</span>
          </button>
        </div>

        {/* Label Watermark */}
        <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">
          <span>Interactive Preview Mode</span>
        </div>
      </div>

      {/* Tab 1: GIS Work Zones Console */}
      {activeTab === 'gis' && (
        <div className="p-4 sm:p-6 bg-[#0E1E30]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left simulated Map Canvas */}
            <div className="lg:col-span-8 bg-[#091522] rounded-xl border border-slate-700 p-4 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              {/* Simulated Map Background Grid & Roads */}
              <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none"></div>

              {/* Map Controls Header */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-teal-400" />
                    OpenStreetMap GIS Canvas
                  </span>
                  <span className="text-[10px] text-teal-400 bg-teal-950/80 border border-teal-800 px-2 py-0.5 rounded font-mono">
                    Zero Paid API Keys
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-teal-500"></span> Active
                  <span className="w-2 h-2 rounded-full bg-sky-500 ml-2"></span> Available
                  <span className="w-2 h-2 rounded-full bg-emerald-500 ml-2"></span> Completed
                </div>
              </div>

              {/* Simulated Leaflet Map Center with Interactive Pins */}
              <div className="relative z-10 my-auto py-6 flex items-center justify-center">
                <div className="relative w-full max-w-md h-56 bg-slate-900/80 rounded-xl border border-slate-800 p-4 shadow-inner flex items-center justify-around">
                  {mockZones.map((zone, idx) => {
                    const isSel = selectedMockZone === idx;
                    const color =
                      zone.status === 'ACTIVE'
                        ? 'bg-teal-500 text-teal-950 ring-teal-400'
                        : zone.status === 'AVAILABLE'
                        ? 'bg-sky-500 text-sky-950 ring-sky-400'
                        : 'bg-emerald-500 text-emerald-950 ring-emerald-400';

                    return (
                      <div
                        key={zone.code}
                        onClick={() => setSelectedMockZone(idx)}
                        className="cursor-pointer group flex flex-col items-center transition-transform hover:scale-110"
                      >
                        {/* Custom Leaflet Marker Pin */}
                        <div
                          className={`w-9 h-9 rounded-full ${color} font-bold text-xs flex items-center justify-center shadow-lg ring-2 transition-all ${
                            isSel ? 'ring-4 scale-110' : 'ring-offset-2 ring-offset-slate-900'
                          }`}
                        >
                          <MapPin className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-slate-300 mt-1 bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800">
                          {zone.code}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selected Zone Bottom Detail Ribbon */}
              <div className="relative z-10 bg-slate-900/90 rounded-lg p-3 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-teal-400 font-mono font-bold block">
                    {mockZones[selectedMockZone].code} • PIN {mockZones[selectedMockZone].pin}
                  </span>
                  <span className="text-white font-semibold">
                    {mockZones[selectedMockZone].name}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-300">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Contractor</span>
                    <strong className="text-teal-300">{mockZones[selectedMockZone].contractor}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Work Type</span>
                    <span>{mockZones[selectedMockZone].workType}</span>
                  </div>
                  <div className="font-mono text-teal-400 bg-teal-950/80 px-2 py-1 rounded border border-teal-800 text-[10px]">
                    {mockZones[selectedMockZone].lat}° N, {mockZones[selectedMockZone].lng}° E
                  </div>
                </div>
              </div>
            </div>

            {/* Right Inventory List */}
            <div className="lg:col-span-4 bg-[#091522] rounded-xl border border-slate-700 p-4 flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-400" />
                  Spatial Inventory ({mockZones.length})
                </span>
                <span className="text-[11px] text-slate-400 font-mono">PIN Registry</span>
              </div>

              <div className="space-y-2 mt-3 overflow-y-auto max-h-[300px]">
                {mockZones.map((zone, idx) => (
                  <div
                    key={zone.code}
                    onClick={() => setSelectedMockZone(idx)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all text-xs ${
                      selectedMockZone === idx
                        ? 'bg-teal-950/40 border-teal-500/80 text-white shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-teal-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                        {zone.code}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-400">
                        {zone.status}
                      </span>
                    </div>
                    <div className="font-semibold text-white truncate">{zone.name}</div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
                      <span>PIN: {zone.pin}</span>
                      <span className="text-teal-300">{zone.tasks} active tasks</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-3 border-t border-slate-800 text-center">
                <Link
                  to="/login"
                  className="text-xs text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Explore full GIS map in Console</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: AI Quality Inspection Console */}
      {activeTab === 'ai-quality' && (
        <div className="p-4 sm:p-6 bg-[#0E1E30]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left simulated Inspection Image Viewer with Computer Vision Bounding Boxes */}
            <div className="lg:col-span-7 bg-[#091522] rounded-xl border border-slate-700 p-4 flex flex-col justify-between min-h-[380px]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-teal-400" />
                  <span className="font-semibold text-white">
                    Python AI Vision Defect Analyzer (OpenCV)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-2 py-0.5 rounded">
                  98.4% Confidence
                </span>
              </div>

              {/* Simulated Computer Vision Visual Frame */}
              <div className="my-auto py-4 flex flex-col items-center">
                <div className="relative w-full max-w-lg h-60 bg-slate-900 rounded-lg border border-slate-800 overflow-hidden flex items-center justify-center p-4">
                  {/* Blueprint Lines */}
                  <div className="absolute inset-0 blueprint-grid-dark opacity-30"></div>

                  {/* Simulated Trench & Asphalt Inspection Image Placeholder */}
                  <div className="w-full h-full bg-gradient-to-b from-slate-800 to-slate-950 rounded flex flex-col items-center justify-center relative p-3">
                    {/* Defect Box 1: Trench Depth */}
                    <div className="absolute top-6 left-8 right-32 h-16 border-2 border-dashed border-teal-400 bg-teal-500/10 rounded flex items-center justify-between px-3">
                      <span className="text-[10px] font-mono text-teal-300 font-bold bg-slate-900/90 px-1 rounded border border-teal-500/50">
                        TARGET: 1.20m Depth [MET 1.25m]
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>

                    {/* Defect Box 2: Minor Asphalt Crack Warning */}
                    <div className="absolute bottom-6 right-8 w-44 h-20 border-2 border-amber-400 bg-amber-500/10 rounded flex flex-col justify-between p-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-amber-300 font-bold bg-slate-900/90 px-1 rounded border border-amber-500/50">
                          CRACK SEVERITY: MINOR (0.8mm)
                        </span>
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <span className="text-[9px] text-slate-300">Surface Remediation Advised</span>
                    </div>

                    <div className="text-center z-10 pointer-events-none">
                      <Eye className="w-8 h-8 text-slate-500 mx-auto mb-1 opacity-60" />
                      <span className="text-xs text-slate-400 font-medium">
                        Corridor Inspection Frame #EV-2026-8942
                      </span>
                      <span className="text-[10px] text-slate-500 block font-mono">
                        GPS: 12.9716° N, 77.5946° E • Timestamp: 14:32:08 UTC
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Findings Toolbar */}
              <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Dual Verification: <strong className="text-white">AI Vision Model + Certified Inspector</strong>
                </span>
                <span className="text-teal-400 font-mono text-[11px]">Human-In-The-Loop Signoff</span>
              </div>
            </div>

            {/* Right Inspection Checklist */}
            <div className="lg:col-span-5 bg-[#091522] rounded-xl border border-slate-700 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-teal-400" />
                    Inspection Workspace Details
                  </span>
                  <span className="text-amber-400 font-mono text-[10px]">Corrective Action #CA-102</span>
                </div>

                <div className="space-y-3 mt-3 text-xs">
                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">Sequential Dependency Gate</span>
                    <strong className="text-white text-[11px] block mt-0.5">
                      Road Resurfacing BLOCKED until Ducting Inspection Passed
                    </strong>
                    <p className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Dependency rules enforced automatically
                    </p>
                  </div>

                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">Physical Measurements</span>
                    <div className="grid grid-cols-2 gap-2 mt-1 font-mono text-[11px]">
                      <div>Trench Depth: <span className="text-teal-300 font-bold">1.25 m</span></div>
                      <div>Asphalt Layer: <span className="text-teal-300 font-bold">50 mm</span></div>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">Inspector Decision</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                        APPROVED WITH NOTES
                      </span>
                      <span className="text-[10px] text-slate-400">Chief Municipal Engineer</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-center">
                <Link
                  to="/login"
                  className="text-xs text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Open Human Review Queue in Console</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: WorkerTrust Workforce Console */}
      {activeTab === 'workertrust' && (
        <div className="p-4 sm:p-6 bg-[#0E1E30]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Worker ID Verification & QR Access Badge */}
            <div className="lg:col-span-6 bg-[#091522] rounded-xl border border-slate-700 p-4 flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                    <span className="font-semibold text-white">WorkerTrust Digital Site Badge</span>
                  </div>
                  <span className="text-[10px] font-mono text-teal-400 bg-teal-950 border border-teal-800 px-2 py-0.5 rounded">
                    Verified ID #WT-7821
                  </span>
                </div>

                {/* Worker Digital Badge Card */}
                <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-teal-500/30 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                    <UserCheck className="w-8 h-8 text-teal-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white text-sm">Ramesh K. Verma</h4>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                        SITE CLEARED
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">Certified Optical Splicing Specialist</p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 mt-1">
                      <span>Contractor: Apex Infra</span>
                      <span>•</span>
                      <span>Zone: WZ-560001</span>
                    </div>
                  </div>
                </div>

                {/* QR Access Code & Check-in Details */}
                <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 flex items-center gap-3">
                    <QrCode className="w-8 h-8 text-teal-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[10px] block">QR Code Scan</span>
                      <strong className="text-white text-[11px]">Gate Check-In OK</strong>
                    </div>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 flex items-center gap-3">
                    <HardHat className="w-8 h-8 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[10px] block">Safety PPE Record</span>
                      <strong className="text-white text-[11px]">100% Compliant</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-slate-900/80 rounded-lg p-3 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Active Safety Check: <strong>Zero Reported Incidents</strong></span>
                <span className="text-teal-400 font-mono text-[10px]">Real-Time Headcount</span>
              </div>
            </div>

            {/* Right Workforce Analytics & Emergency Muster */}
            <div className="lg:col-span-6 bg-[#091522] rounded-xl border border-slate-700 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-semibold text-white">Emergency Muster &amp; Headcount Ledger</span>
                  <span className="text-teal-400 font-mono text-[10px]">Live Site Sync</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Checked In</span>
                    <span className="text-xl font-bold text-white font-mono">148</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Certified</span>
                    <span className="text-xl font-bold text-teal-400 font-mono">142</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Active Zones</span>
                    <span className="text-xl font-bold text-emerald-400 font-mono">12</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <strong className="text-white block text-[11px]">Muster Station Alpha (MG Road)</strong>
                      <span className="text-[10px] text-slate-400">Headcount confirmed by Field Supervisor</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      SECURE
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <strong className="text-white block text-[11px]">Indiranagar Utility Vault Beta</strong>
                      <span className="text-[10px] text-slate-400">Atmospheric gas sensor cleared</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      SECURE
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-center">
                <Link
                  to="/login"
                  className="text-xs text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Access WorkerTrust Dashboard in Console</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
