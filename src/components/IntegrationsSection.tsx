import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
 
const integrations = [
  {
    name: "Python",
    category: "Language",
    logo: "https://cdn.simpleicons.org/python/3776AB",
  },
  {
    name: "JavaScript",
    category: "Language",
    logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "TypeScript",
    category: "Language",
    logo: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "Java",
    category: "Language",
    logo: "https://cdn.simpleicons.org/openjdk/000000",
  },
  {
    name: "Go",
    category: "Language",
    logo: "https://cdn.simpleicons.org/go/00ADD8",
  },
  {
    name: "Ruby",
    category: "Language",
    logo: "https://cdn.simpleicons.org/ruby/CC342D",
  },
  {
    name: "PHP",
    category: "Language",
    logo: "https://cdn.simpleicons.org/php/777BB4",
  },
  {
    name: "Rust",
    category: "Language",
    logo: "https://cdn.simpleicons.org/rust/000000",
  },
  {
    name: "C#",
    category: "Language",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  },
  {
    name: "Swift",
    category: "Language",
    logo: "https://cdn.simpleicons.org/swift/F05138",
  },
];
 
export default function IntegrationsSection() {
  const [radius, setRadius] = useState(280);
 
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(150);
      } else if (window.innerWidth < 1024) {
        setRadius(220);
      } else {
        setRadius(250);
      }
    };
 
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);
 
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-[#593a6d] border-purple-200 hover:bg-purple-100">
            200+ Integrations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seamless Integration with Your Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with your existing tools and infrastructure in minutes.
            Native OpenTelemetry support ensures compatibility with your entire ecosystem.
          </p>
          <Button
            size="lg"
            className="bg-[#593a6d] hover:bg-[#462d54] text-white group shadow-lg"
          >
            Explore All Integrations
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
 
        {/* Central Hub Design */}
        <div className="relative flex items-center justify-center mb-24 md:mb-32 pt-8 pb-16 min-h-[450px] md:min-h-[550px] lg:min-h-[580px]">
          {/* Background Circle */}
          <div
            className="absolute rounded-full bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 opacity-50"
            style={{
              width: `${radius * 2.3}px`,
              height: `${radius * 2.3}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
 
          {/* Center Container - for positioning reference */}
          <div
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Draw all arrows - REVERSED DIRECTION */}
            {integrations.map((integration, index) => {
              const angle = (index * 360) / integrations.length - 90; // Start from top
              const angleRad = (angle * Math.PI) / 180;
              
              // Calculate positions - SWAPPED x1/y1 with x2/y2
              const iconRadius = radius;
              const centerRadius = 65;
              
              const x1 = Math.cos(angleRad) * centerRadius; // Now starts from center
              const y1 = Math.sin(angleRad) * centerRadius;
              const x2 = Math.cos(angleRad) * iconRadius; // Now ends at icon
              const y2 = Math.sin(angleRad) * iconRadius;
 
              return (
                <svg
                  key={`arrow-${index}`}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                    transform: 'translate(-50%, -50%)',
                    overflow: 'visible',
                    pointerEvents: 'none',
                  }}
                >
                  <defs>
                    <marker
                      id={`arrow-${index}`}
                      markerWidth="8"
                      markerHeight="8"
                      refX="7"
                      refY="4"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <path
                        d="M0,0 L0,8 L8,4 z"
                        fill="#593a6d"
                      />
                    </marker>
                  </defs>
                  <line
                    x1={x1 + radius}
                    y1={y1 + radius}
                    x2={x2 + radius}
                    y2={y2 + radius}
                    stroke="#593a6d"
                    strokeWidth="2.5"
                    opacity="0.6"
                    markerEnd={`url(#arrow-${index})`}
                  />
                </svg>
              );
            })}
          </div>
 
          {/* Center Text - ObsFly */}
          <div className="absolute z-20" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="bg-white rounded-full px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-7 shadow-2xl border-4 border-[#593a6d]">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#593a6d] tracking-tight">
                ObsFly
              </h3>
              <p className="text-[10px] md:text-xs text-gray-600 text-center mt-1">
                Integrations
              </p>
            </div>
          </div>
 
          {/* Integration Icons in Circular Layout */}
          {integrations.map((integration, index) => {
            const angle = (index * 360) / integrations.length - 90; // Start from top
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
 
            return (
              <div
                key={index}
                className="absolute z-10"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                {/* Integration Logo */}
                <div className="relative bg-white rounded-full p-3 md:p-4 lg:p-5 shadow-xl border-3 border-gray-200 hover:border-[#593a6d] hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <img
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                  />
                  {/* Label - shows on hover */}
                  <div className="absolute -bottom-10 md:-bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-30">
                    <p className="text-xs md:text-sm font-bold text-gray-900 bg-white px-3 py-1.5 rounded-lg shadow-lg border border-gray-200">
                      {integration.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
 
        {/* Features Section */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">OpenTelemetry Native</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Built on open standards for maximum compatibility and flexibility.
                </p>
              </div>
            </div>
 
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Zero Code Changes</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Auto-instrumentation means you can start monitoring without modifying your code.
                </p>
              </div>
            </div>
 
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#593a6d]" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Auto-Discovery</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Automatically detect and configure integrations in your environment.
                </p>
              </div>
            </div>
          </div>
 
          <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-base">
              Can't find your tool? We add new integrations every week.{" "}
              <a href="#" className="text-[#593a6d] hover:text-[#462d54] font-semibold underline decoration-2 underline-offset-4 hover:underline-offset-2 transition-all">
                Request a custom integration
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
                  }
