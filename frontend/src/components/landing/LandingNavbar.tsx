import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Layers, 
  Compass, 
  Cpu, 
  ShieldCheck, 
  Lock, 
  Terminal,
  UserCheck
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { useAuth } from '../../auth/useAuth';

export const LandingNavbar: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { label: 'Overview', href: '#overview', icon: Layers },
    { label: 'Live Preview', href: '#preview', icon: Terminal },
    { label: 'GIS Work Zones', href: '#gis-zones', icon: Compass },
    { label: 'AI Quality', href: '#ai-inspection', icon: Cpu },
    { label: 'WorkerTrust', href: '#workertrust', icon: UserCheck },
    { label: 'Security & Audit', href: '#security-audit', icon: Lock },
    { label: 'Architecture', href: '#architecture', icon: ShieldCheck },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B1928]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2 group transition-opacity hover:opacity-95">
          <BrandLogo size="sm" theme="dark" showText={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-teal-400 px-2.5 py-1.5 rounded-md hover:bg-slate-800/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Status Indicator Pill */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-teal-400 bg-teal-950/60 border border-teal-800/50 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            <span>Platform Online</span>
          </div>

          {isAuthenticated ? (
            <Link
              to={consoleRoute}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 px-4 py-2 rounded-lg shadow-sm transition-all hover:shadow-teal-500/20"
            >
              <span>Go to Console</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-md hover:bg-slate-800/60 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 px-3.5 py-2 rounded-lg shadow-sm transition-all shadow-teal-900/30"
              >
                <span>Launch Console</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          {isAuthenticated ? (
            <Link
              to={consoleRoute}
              className="text-xs font-semibold text-slate-900 bg-teal-400 px-3 py-1.5 rounded-md"
            >
              Console
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-xs font-semibold text-white bg-teal-600 px-3 py-1.5 rounded-md"
            >
              Sign In
            </Link>
          )}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1928] border-b border-slate-800 px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-xs font-medium text-slate-300 hover:text-teal-400 px-3 py-2 rounded-lg hover:bg-slate-800/70"
              >
                <Icon className="w-4 h-4 text-teal-400" />
                <span>{link.label}</span>
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            {isAuthenticated ? (
              <Link
                to={consoleRoute}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold text-slate-900 bg-teal-400 rounded-lg"
              >
                Go to Console ({user?.role || 'Operator'})
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg"
              >
                Launch Console
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
