import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import dashboardHero from "@/assets/dashboard-hero.png";

const HeroSection = () => {
  const companies = [
    "SendNow",
    "turtle",
    "Airev.",
    "visitly",
    "LeewayHertz",
    "airpay",
    "TechCorp",
    "DataFlow",
    "CloudSync",
    "NexGen"
  ];

  // Duplicate companies for seamless loop
  const allCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 overflow-hidden">
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(262_83%_58%_/_0.15)_0,_transparent_50%),radial-gradient(circle_at_80%_80%,_hsl(217_91%_60%_/_0.15)_0,_transparent_50%),radial-gradient(circle_at_40%_90%,_hsl(142_76%_36%_/_0.1)_0,_transparent_50%)]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
        <div className="space-y-8">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#593a6d] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#593a6d]"></span>
    </span>
    <span className="text-sm font-medium text-foreground">eBPF-Powered Observability Platform</span>
  </div>

  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
    <span className="bg-black to-accent bg-clip-text text-transparent">
      Observe Everything,
    </span>
    <br />
    <span className="text-foreground">
      Secure Everything
    </span>
    <br />
    <span className="text-muted-foreground text-3xl lg:text-5xl text-[#593a6d]">
      with eBPF
    </span>
  </h1>

  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
   Observe and protect every workload—cloud or on-prem—using eBPF.
   Gain deeper insights at lightning speed, powered by AI, while keeping all your data private, secure, and fully under your control.
  </p>

  <div className="flex flex-wrap gap-4">
    <Button
      size="lg"
      className="bg-[#593a6d] hover:bg-[#593a6d] text-primary-foreground shadow-glow font-semibold"
    >
      Get Started Free
    </Button>
    <Button
      size="lg"
     
      className="border-border font-semibold bg-white text-black hover:bg-white"
    >
      Installation Docs
    </Button>
  </div>

  {/* Stats */}
  <div className="grid grid-cols-3 gap-6 pt-4">
    <div className="space-y-1">
      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">99.9%</div>
      <div className="text-sm text-muted-foreground">Uptime</div>
    </div>
    <div className="space-y-1">
      <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">10M+</div>
      <div className="text-sm text-muted-foreground">Events/Day</div>
    </div>
    <div className="space-y-1">
      <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">&lt;100ms</div>
      <div className="text-sm text-muted-foreground">Response Time</div>
    </div>
  </div>
</div>

          
          {/* Right content - Dashboard preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-2xl opacity-50 blur-2xl animate-pulse" />
            <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-2 shadow-2xl hover:shadow-glow transition-shadow duration-500 lg:mt-[-20%] mt-0">
              <img
                src={dashboardHero}
                alt="ObsFly Dashboard showing real-time monitoring with charts, metrics, and code analysis"
                className="w-full rounded-lg shadow-lg h-[380px]"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4">
              {/* <Badge className="bg-gradient-to-r from-accent to-primary text-white border-0 shadow-lg animate-bounce">
                Live Demo
              </Badge> */}
            </div>
          </div>
        </div>

        {/* Trusted by section with infinite train animation */}
        <div className="mt-24 text-center">
          <p className="text-sm uppercase tracking-wider mb-8 text-muted-foreground font-semibold">Trusted By Leading Companies</p>

          <div className="relative overflow-hidden py-6 bg-gradient-to-r from-transparent via-muted/30 to-transparent rounded-lg">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32  z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32  z-10" />

            {/* Scrolling container */}
            <div className="flex animate-scroll">
              {allCompanies.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-12 text-2xl font-bold text-muted-foreground/40 hover:text-[#593a6d] transition-colors duration-300"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;