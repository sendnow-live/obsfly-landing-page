import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-[#522b6c] via-[#593a6d] to-[#6b4580] overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#522b6c]/40 via-transparent to-transparent" />
      
      {/* Animated orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#522b6c]/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Advanced hexagonal visualization - Hidden on mobile */}
      <div className="hidden lg:block absolute top-1/2 right-12 xl:right-24 -translate-y-1/2 w-[520px] h-[420px] opacity-95">
        <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main hexagon with gradient */}
          <defs>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer hexagon glow */}
          <path
            d="M 260 60 L 420 152.5 L 420 337.5 L 260 430 L 100 337.5 L 100 152.5 Z"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          
          {/* Main hexagon */}
          <path
            d="M 260 70 L 410 157.5 L 410 332.5 L 260 420 L 110 332.5 L 110 157.5 Z"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2.5"
            fill="url(#hexGradient)"
            filter="url(#glow)"
          />
          
          {/* Inner connecting lines */}
          <path
            d="M 260 210 L 360 265 M 360 265 L 360 325 M 360 325 L 260 380"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            className="animate-pulse"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Stat cards without background containers */}
          <g>
            <text x="415" y="95" fill="white" fontSize="52" fontWeight="bold" textAnchor="middle">
              92%
            </text>
            <text x="415" y="120" fill="rgba(255,255,255,0.95)" fontSize="13" textAnchor="middle" fontWeight="500">
              Incident Reduction
            </text>
          </g>

          <g>
            <text x="480" y="240" fill="white" fontSize="35" fontWeight="bold" textAnchor="middle">
              10x
            </text>
            <text x="480" y="265" fill="rgba(255,255,255,0.95)" fontSize="10" textAnchor="middle" fontWeight="600">
              Faster Diagnosis
            </text>
          </g>

          <g>
            <text x="300" y="390" fill="white" fontSize="52" fontWeight="bold" textAnchor="middle">
              99.9%
            </text>
            <text x="300" y="415" fill="rgba(255,255,255,0.95)" fontSize="13" textAnchor="middle" fontWeight="500">
              System Uptime
            </text>
          </g>
          
          {/* Decorative dots */}
          <circle cx="260" cy="210" r="4" fill="rgba(255,255,255,0.8)" className="animate-pulse" />
          <circle cx="360" cy="265" r="4" fill="rgba(255,255,255,0.8)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="360" cy="325" r="4" fill="rgba(255,255,255,0.8)" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl space-y-8 md:space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">Trusted by 10,000+ Engineering Teams</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Stop Fighting Fires.
            <br />
            <span className="text-white/90">Start Preventing Them.</span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
            ObsFly gives you complete visibility into your infrastructure before issues become incidents. Deploy in minutes, resolve problems in seconds.
          </p>

          {/* Value props */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            {[
              "Full-stack observability in one platform",
              "Real-time alerts with intelligent context",
              "Zero-configuration auto-discovery",
              "Enterprise-grade security & compliance"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 text-white/95">
                <div className="mt-0.5 p-1 bg-white/20 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm md:text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-white text-[#522b6c] hover:bg-white/95 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-base md:text-lg font-semibold group"
            >
              Start Free 14-Day Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-black hover:bg-white/10 hover:border-white backdrop-blur-sm px-8 py-6 text-base md:text-lg font-semibold transition-all duration-300"
            >
              Book a Demo
            </Button>
          </div>
          
          <p className="text-sm text-white/70 flex items-center gap-2">
            <Check className="w-4 h-4" />
            No credit card required · 5-minute setup · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
