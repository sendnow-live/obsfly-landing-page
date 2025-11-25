import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ObsFlyLogo from "./ObsFlyLogo";

const integrations = [
  {
    name: "Node.js",
    category: "Runtime",
    logo: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "Python",
    category: "Language",
    logo: "https://cdn.simpleicons.org/python/3776AB",
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
    name: "React",
    category: "Frontend",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Angular",
    category: "Frontend",
    logo: "https://cdn.simpleicons.org/angular/DD0031",
  },
  {
    name: "Vue.js",
    category: "Frontend",
    logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
  },
  {
    name: "Django",
    category: "Framework",
    logo: "https://cdn.simpleicons.org/django/092E20",
  },
  {
    name: "Flask",
    category: "Framework",
    logo: "https://cdn.simpleicons.org/flask/000000",
  },
  {
    name: "Spring Boot",
    category: "Framework",
    logo: "https://cdn.simpleicons.org/springboot/6DB33F",
  },
  {
    name: ".NET",
    category: "Framework",
    logo: "https://cdn.simpleicons.org/dotnet/512BD4",
  },
];

interface Dimensions {
  radius: number;
  arrowLength: number;
  logoSize: number;
  iconSize: number;
}

export default function IntegrationsSection(): JSX.Element {
  const [dimensions, setDimensions] = useState<Dimensions>({ 
    radius: 280, 
    arrowLength: 180, 
    logoSize: 96, 
    iconSize: 48 
  });

  useEffect(() => {
    const updateDimensions = (): void => {
      const width = window.innerWidth;
      let radius: number;
      let arrowLength: number;
      let logoSize: number;
      let iconSize: number;
      
      if (width < 640) {
        // Mobile
        radius = 110;
        arrowLength = 70;
        logoSize = 40;
        iconSize = 24;
      } else if (width < 1024) {
        // Tablet
        radius = 200;
        arrowLength = 130;
        logoSize = 64;
        iconSize = 36;
      } else {
        // Desktop
        radius = 280;
        arrowLength = 180;
        logoSize = 96;
        iconSize = 48;
      }
      
      setDimensions({ radius, arrowLength, logoSize, iconSize });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100">
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
            className="bg-blue-600 hover:bg-blue-700 text-white group shadow-lg"
          >
            Explore All Integrations
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Central Hub Design */}
        <div className="relative w-full mx-auto mb-16 min-h-[320px] sm:min-h-[500px] lg:min-h-[650px]" style={{ maxWidth: '1200px' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative" style={{ width: `${dimensions.radius * 2}px`, height: `${dimensions.radius * 2}px` }}>
              
              {/* Center Logo */}
              <div 
                className="absolute z-10"
                style={{
                  width: `${dimensions.logoSize}px`,
                  height: `${dimensions.logoSize}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <ObsFlyLogo className="w-full h-full" />
              </div>

              {/* Language Integrations in Circular Layout */}
              {integrations.map((integration, index) => {
                const angle = (index * 360) / integrations.length - 90; // Start from top
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * dimensions.radius;
                const y = Math.sin(radian) * dimensions.radius;

                return (
                  <div key={index}>
                    {/* Arrow line pointing to center */}
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        width: `${dimensions.radius - dimensions.logoSize / 2}px`,
                        height: '1px',
                        background: 'linear-gradient(to right, transparent, #593a6d)',
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${angle}deg)`,
                        transformOrigin: 'left center',
                      }}
                    />

                    {/* Integration Logo */}
                    <div
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '50%',
                        width: `${dimensions.iconSize}px`,
                        height: `${dimensions.iconSize}px`,
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <img
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        className="w-full h-full object-contain hover:scale-125 transition-transform cursor-pointer"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">OpenTelemetry Native</h3>
                <p className="text-sm text-gray-600">
                  Built on open standards for maximum compatibility and flexibility.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Zero Code Changes</h3>
                <p className="text-sm text-gray-600">
                  Auto-instrumentation means you can start monitoring without modifying your code.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Auto-Discovery</h3>
                <p className="text-sm text-gray-600">
                  Automatically detect and configure integrations in your environment.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              Can't find your tool? We add new integrations every week.{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Request a custom integration
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
