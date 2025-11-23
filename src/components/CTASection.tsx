import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-32 bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/50 rounded-full blur-3xl" />

      {/* Animated hexagonal grid */}
      <div className="absolute top-1/2 right-20 -translate-y-1/2 w-[500px] h-[400px] opacity-90">
        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Large hexagon outline */}
          <path
            d="M 250 50 L 400 137.5 L 400 312.5 L 250 400 L 100 312.5 L 100 137.5 Z"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />

          {/* Stats positioned around the hexagon */}
          <g>
            {/* 85% - Top right */}
            <text x="400" y="80" fill="white" fontSize="48" fontWeight="bold" textAnchor="middle">
              85%
            </text>
            <text x="400" y="110" fill="rgba(255,255,255,0.95)" fontSize="14" textAnchor="middle">
              Issue Fixes
            </text>
          </g>

          <g>
            {/* 5x - Middle right */}
            <text x="430" y="220" fill="white" fontSize="48" fontWeight="bold" textAnchor="middle">
              5x
            </text>
            <text x="430" y="250" fill="rgba(255,255,255,0.95)" fontSize="14" textAnchor="middle">
              Faster MTTR
            </text>
          </g>

          <g>
            {/* 80% - Bottom */}
            <text x="280" y="360" fill="white" fontSize="48" fontWeight="bold" textAnchor="middle">
              80%
            </text>
            <text x="280" y="390" fill="rgba(255,255,255,0.95)" fontSize="14" textAnchor="middle">
              Boost in Dev
            </text>
            <text x="280" y="410" fill="rgba(255,255,255,0.95)" fontSize="14" textAnchor="middle">
              Productivity
            </text>
          </g>

          {/* Inner connecting lines */}
          <path
            d="M 250 150 L 350 200 L 350 300 L 250 350"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl space-y-8">
          <h2 className="text-6xl font-bold text-white leading-tight">
            Optimize More, Worry Less With Middleware
          </h2>

          <p className="text-xl text-white leading-relaxed">
            Completely free, no strings attached. Solve problems at their source and see it in action today!
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/get-started">
              <Button
                size="lg"
                className="bg-white text-[#593a6d] hover:bg-white/90 shadow-glow px-8"
              >
                Book a Demo
              </Button>
            </Link>
            <Link to="/docs">
              <Button
                size="lg"
                variant="outline"
                className="border-white/80 text-black hover:bg-white/20 backdrop-blur-sm px-8"
              >
                Installation Docs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
