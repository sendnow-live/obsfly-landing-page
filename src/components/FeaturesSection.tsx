import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Layers, 
  Search, 
  Link2, 
  Shield, 
  Lock,
  Activity,
  FileText,
  BarChart3,
  Database,
  Eye,
  Cpu,
  Zap,
  GitBranch,
  Clock,
  Server,
  Shuffle,
  CornerUpRight, 
  Users,         
  RefreshCcw,    
  Wifi,          
  Repeat,        
  ActivitySquare, 
  Command,        
} from "lucide-react";

const features = [
  // Infrastructure Monitoring
  {
    icon: Cpu,
    title: "Infrastructure Monitoring",
    description: "Monitor CPU, memory, disk, and system metrics across your cloud-native infrastructure in real-time for full-stack visibility.",
    color: "from-blue-500 to-cyan-500",
    stats: "99.9% uptime SLA",
  },
  // APM
  {
    icon: Activity,
    title: "Application Performance Monitoring",
    description: "End-to-end observability of your applications with distributed tracing, bottleneck detection, and performance optimization.",
    color: "from-green-500 to-emerald-500",
    stats: "Sub-50ms query latency",
  },

  // Logs
  {
    icon: FileText,
    title: "Log Management",
    description: "Centralized collection, search, and analysis of logs from all services for faster troubleshooting and root cause analysis.",
    color: "from-orange-500 to-red-500",
    stats: "10M+ events/sec",
  },
   {
    icon: Database,
    title: "Database Monitoring",
    description: "Track database performance, query execution, and connection health across MySQL, PostgreSQL, and other databases.",
    color: "from-yellow-500 to-orange-500",
    stats: "Query optimization insights",
  },


  // Network Flow & Protocols
  {
    icon: Layers,
    title: "L3/L4 & DNS Network Flow Logs",
    description: "Real-time monitoring of network traffic, connections, and DNS queries across clusters.",
    color: "from-purple-500 to-pink-500",
    stats: "Full visibility at line rate",
  },
  {
    icon: Search,
    title: "Advanced Network Protocol Visibility",
    description: "Deep inspection of network protocols and flows for troubleshooting, optimization, and security.",
    color: "from-cyan-500 to-blue-500",
    stats: "Layer 4–7 insights",
  },

  // Networking & CNI
  {
    icon: Server,
    title: "High-Performance Cloud Native Networking (CNI)",
    description: "Optimized CNI for cloud-native clusters, ensuring low-latency and high-throughput networking.",
    color: "from-blue-500 to-purple-500",
    stats: "Line-rate performance",
  },
  {
    icon: Shuffle,
    title: "Layer 4 Load Balancer",
    description: "Distribute traffic efficiently across services with L4 load balancing for scalable applications.",
    color: "from-green-500 to-emerald-500",
    stats: "Minimal latency overhead",
  },
  {
    icon: Link2,
    title: "Cluster Mesh",
    description: "Connect multiple clusters seamlessly with low-latency, secure mesh networking.",
    color: "from-orange-500 to-red-500",
    stats: "Multi-cluster ready",
  },
  {
    icon: ActivitySquare,
    title: "Bandwidth & Latency Optimization",
    description: "Intelligent routing and congestion control to maximize throughput and reduce network latency.",
    color: "from-purple-500 to-pink-500",
    stats: "Optimized paths",
  },
  {
    icon: Repeat,
    title: "Kube-proxy Replacement",
    description: "Enhanced service routing and network performance without relying on kube-proxy.",
    color: "from-cyan-500 to-blue-500",
    stats: "Reduced CPU usage",
  },
  {
    icon: RefreshCcw,
    title: "BGP",
    description: "Full BGP support for dynamic routing across your cloud and on-prem networks.",
    color: "from-teal-500 to-green-500",
    stats: "Highly available routing",
  },
  {
    icon: CornerUpRight,
    title: "Egress Gateway",
    description: "Centralized control of outbound traffic with policy and monitoring capabilities.",
    color: "from-violet-500 to-purple-500",
    stats: "Secure egress",
  },
  {
    icon: Users,
    title: "Service Mesh",
    description: "Seamless service-to-service communication with observability, security, and traffic control.",
    color: "from-blue-500 to-cyan-500",
    stats: "Zero-trust enabled",
  },
  {
    icon: Command,
    title: "Gateway API",
    description: "Standardized API gateway management for routing, security, and observability.",
    color: "from-amber-500 to-yellow-500",
    stats: "Kubernetes native",
  },
  {
    icon: Wifi,
    title: "Multicast Support",
    description: "Efficient distribution of traffic to multiple destinations simultaneously.",
    color: "from-rose-500 to-red-500",
    stats: "High throughput",
  },
  {
    icon: Shield,
    title: "Host Firewall",
    description: "Enforce host-level network policies and traffic filtering for enhanced security.",
    color: "from-green-500 to-teal-500",
    stats: "Zero-trust enforced",
  },
  {
    icon: Link2,
    title: "Ingress",
    description: "Manage inbound traffic with advanced routing, load balancing, and security features.",
    color: "from-slate-500 to-gray-500",
    stats: "Optimized ingress paths",
  },

  // Security
  {
    icon: Lock,
    title: "Transparent Encryption",
    description: "Encrypt traffic and data in transit and at rest without impacting performance.",
    color: "from-blue-500 to-purple-500",
    stats: "AES-256 / TLS 1.3",
  },
  {
    icon: Shield,
    title: "Advanced Network Policy",
    description: "Define fine-grained, AI-driven network policies to control access and protect workloads.",
    color: "from-green-500 to-teal-500",
    stats: "Zero-trust enforced",
  },
  {
    icon: Shield,
    title: "Runtime Security",
    description: "Monitor, detect, and respond to threats in real time across containers and hosts.",
    color: "from-red-500 to-pink-500",
    stats: "Continuous protection",
  },
];


const FeaturesSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-muted/30">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#593a6d]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-[#593a6d] hover:bg-[#593a6d] p-2 text-white border-[#593a6d] mb-6">
            COMPLETE OBSERVABILITY PLATFORM
          </Badge>
         <h2 className="text-4xl md:text-5xl font-bold mb-4">
  Go from Zero to <span className="bg-gradient-to-r from-[#593a6d] to-[#593a6f] bg-clip-text text-transparent">Full Stack Observability</span>
</h2>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Everything you need to monitor, debug, and optimize your entire application stack in one unified platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative bg-card  duration-500 hover:shadow-xl hover:shadow-[#593a6d] overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Top gradient line - REMOVED to prevent border color change on hover */}
                
                {/* Glow effect */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#593a6d]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 space-y-4">
                  {/* Icon with gradient background */}
                  <div className="flex items-start justify-between">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <Icon className="w-7 h-7" strokeWidth={2} />
                    </div>
                    
                    {/* Stats badge */}
                    <Badge variant="outline" className="text-xs font-mono bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {feature.stats}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-black transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Hover arrow indicator */}
                  <div className="flex items-center gap-2 text-[#593a6d] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Bottom corner decoration */}
                <div className="absolute bottom-0 pacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full " />
              ))}
            </div>
            <span>Trusted by 80+ engineering teams worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;