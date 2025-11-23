import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    value: "99.9%",
    label: "Uptime SLA",
    sublabel: "Guaranteed",
  },
  {
    value: "70%",
    label: "Issues Fixed",
    sublabel: "Automatically",
  },
  {
    value: "90%",
    label: "Faster MTTR",
    sublabel: "Resolution Time",
  },
  {
    value: "<5min",
    label: "Alert to Action",
    sublabel: "Response Time",
  },
  {
    value: "75%",
    label: "Cost Reduction",
    sublabel: "vs Traditional Tools",
  },
  {
    value: "80%",
    label: "Dev Productivity",
    sublabel: "Improvement",
  },
  {
    value: "10M+",
    label: "Events/Second",
    sublabel: "Ingestion Rate",
  },
  {
    value: "50ms",
    label: "Query Latency",
    sublabel: "P95 Performance",
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#593a6d] via-[#593a6d] to-[#593a6d]
 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            PROVEN RESULTS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Scalable, Reliable and Faster
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Real metrics from production environments running ObsFly
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group relative bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 overflow-hidden"
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Arrow decoration */}
              <div className="absolute top-3 right-3 text-white/20 group-hover:text-white/40 group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
              
              <div className="relative p-6 space-y-2">
                <div className="text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/90 text-sm font-medium">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="text-white/70 text-xs">
                    {stat.sublabel}
                  </div>
                )}
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;