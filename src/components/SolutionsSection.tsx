import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Sparkles, ArrowRight, Database, Activity, FileText, Server, Eye, Cpu, 
  BarChart3, TrendingUp, AlertCircle, CheckCircle2, Clock, Layers, Shield,
  Lock, Link2, Shuffle, ActivitySquare, Repeat, RefreshCcw, CornerUpRight,
  Users, Command, Wifi, Search
} from "lucide-react";

const solutions = [
  { id: "infrastructure", label: "Infrastructure", icon: Cpu },
  { id: "apm", label: "APM", icon: Activity },
  { id: "logs", label: "Logs", icon: FileText },
  { id: "database", label: "Database", icon: Database },
  { id: "network-flow", label: "Network Flow", icon: Layers },
  { id: "network-protocol", label: "Protocol Visibility", icon: Search },
  { id: "cni", label: "CNI", icon: Server },
  { id: "load-balancer", label: "L4 Load Balancer", icon: Shuffle },
  { id: "cluster-mesh", label: "Cluster Mesh", icon: Link2 },
  { id: "bandwidth", label: "Bandwidth & Latency", icon: ActivitySquare },
  { id: "kube-proxy", label: "Kube-proxy", icon: Repeat },
  { id: "bgp", label: "BGP", icon: RefreshCcw },
  { id: "egress", label: "Egress Gateway", icon: CornerUpRight },
  { id: "service-mesh", label: "Service Mesh", icon: Users },
  { id: "host-firewall", label: "Host Firewall", icon: Shield },
  { id: "ingress", label: "Ingress", icon: Link2 },
  { id: "encryption", label: "Encryption", icon: Lock },
  { id: "network-policy", label: "Network Policy", icon: Shield },
  { id: "runtime-security", label: "Runtime Security", icon: Shield },
];

const greaterthen = "<"

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("infrastructure");

  return (
    <section className="relative py-24 bg-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-muted text-foreground mb-6 hover:bg-[#593a6d] text-white bg-[#593a6d] p-2">
            AI-POWERED OBSERVABILITY
          </Badge>
          <h2 className="text-5xl font-bold mb-4">
            Complete <span className="bg-[#593a6d]  bg-clip-text text-transparent">eBPF-Native Platform</span> for Cloud Native
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Zero-overhead observability, security, and networking powered by eBPF technology and AI-driven insights
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
       <div className="relative mb-12">
  {/* Tabs Container */}
  <div 
    id="tabs-container"
    className="overflow-x-auto pb-2"
    style={{ 
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}
  >
    <style >{`
      #tabs-container::-webkit-scrollbar {
        display: none;
      }
    `}</style>
    <TabsList className="inline-flex w-max mx-auto bg-muted p-1 rounded-lg">
      {solutions.map((solution) => (
        <TabsTrigger
          key={solution.id}
          value={solution.id}
         className="data-[state=active]:bg-[#593a6d] data-[state=active]:text-white flex items-center gap-2 whitespace-nowrap"
>
          <solution.icon className="w-3 h-3" />
          {solution.label}
        </TabsTrigger>
      ))}
    </TabsList>
  </div>
</div>
          
          {/* Infrastructure Monitoring */}
          <TabsContent value="infrastructure" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <Cpu className="w-4 h-4" />
                  <span className="text-sm font-medium">Infrastructure Monitoring</span>
                </div>
                
                <h3 className="text-4xl font-bold">eBPF-Powered Infrastructure Intelligence</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Leverage kernel-level eBPF instrumentation for zero-overhead monitoring of CPU, memory, disk, network, and system metrics across your entire cloud-native infrastructure. AI-powered anomaly detection identifies issues before they impact production with sub-millisecond precision.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Zero-overhead eBPF monitoring with less than 1% CPU impact</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-driven predictive analytics and automated root cause analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Real-time system call tracking and kernel-level visibility</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Container-aware metrics with automatic service discovery</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Multi-cloud infrastructure monitoring across AWS, Azure, and GCP</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Automatic performance baselining and threshold optimization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Deep kernel insights including TCP retransmissions and packet drops</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Unified dashboards for hybrid and multi-cloud environments</p>
                  </div>
                </div>

                <Link to="/products/infrastructure">
                  <Button className="bg-[#593a6d] text-primary-foreground group  mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

             <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Live Kernel Data
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          eBPF Infrastructure Monitor
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Kernel-level instrumentation for zero-overhead monitoring of CPU, memory, 
          disk, and network metrics. AI-powered anomaly detection with sub-millisecond precision.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">0.8%</div>
        <div className="text-xs text-zinc-500">overhead</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Active Alert */}
    <div className="border-l-2 border-amber-500 bg-amber-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-amber-500 leading-none">⚠</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-amber-200 font-medium mb-0.5">
            Memory pressure: pod/api-server-7f9d
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            Predicted OOM in 18min · Auto-scaling triggered
          </p>
        </div>
      </div>
    </div>

    {/* Probe Status - Compact */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-2.5 font-mono text-[11px] space-y-1">
      <div className="text-zinc-500 mb-1">Real-time system call tracking</div>
      <div className="text-emerald-400">tcp_sendmsg · tcp_cleanup_rbuf · sched_process_exec</div>
      <div className="text-zinc-600 mt-1.5 pt-1.5 border-t border-zinc-800">
        247 containers · 12 nodes · 27.3K events/s
      </div>
    </div>

    {/* Metrics Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Latency</div>
        <div className="text-white font-bold tabular-nums">0.12ms</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">TCP Retrans</div>
        <div className="text-white font-bold tabular-nums">12/s</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Drops</div>
        <div className="text-white font-bold tabular-nums">0.04%</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Accuracy</div>
        <div className="text-white font-bold tabular-nums">99.4%</div>
      </div>
    </div>

    {/* Capabilities - Condensed */}
    <div className="text-xs text-zinc-400 leading-relaxed space-y-1">
      <p>
        Container-aware metrics with automatic service discovery. Multi-cloud 
        monitoring across AWS, Azure, and GCP with unified dashboards.
      </p>
      <p className="text-zinc-500">
        AI-driven predictive analytics · Automated root cause analysis · 
        Performance baselining · Deep kernel insights
      </p>
    </div>
  </div>
</Card>
            </div>
          </TabsContent>
          
          {/* APM */}
          <TabsContent value="apm" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <Activity className="w-4 h-4" />
                  <span className="text-sm font-medium">Application Performance Monitoring</span>
                </div>
                
                <h3 className="text-4xl font-bold">AI-Enhanced Distributed Tracing</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Automatic instrumentation via eBPF captures every request across microservices without code changes. AI algorithms analyze millions of traces to identify performance patterns, predict bottlenecks, and recommend optimizations that improve application response times by up to 40%.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Automatic eBPF-based instrumentation with zero code changes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-powered bottleneck detection and optimization recommendations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Context-aware correlation across traces, logs, and metrics</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Real-time service dependency mapping and health scoring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Distributed transaction tracking across microservices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Intelligent sampling with full-fidelity trace retention</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Performance regression detection and alerting</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Support for all major frameworks and languages</p>
                  </div>
                </div>

                <Link to="/products/apm">
                  <Button className="bg-[#593a6d] text-primary-foreground group mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
            <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Distributed Tracing
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          APM Analysis
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Intelligent trace analysis with auto-instrumented eBPF monitoring. 
          ML-powered optimization recommendations from distributed request flows.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-emerald-400 tabular-nums">86%</div>
        <div className="text-xs text-zinc-500">latency ↓</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Optimization Alert */}
    <div className="border-l-2 border-emerald-500 bg-emerald-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-emerald-500 leading-none">✓</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-emerald-200 font-medium mb-0.5">
            Query optimization applied: user-service
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            N+1 pattern detected in 2.4M traces · P95: 850ms → 120ms
          </p>
        </div>
      </div>
    </div>

    {/* Trace Timeline */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Request Trace
        </span>
        <span className="text-[10px] text-zinc-600 font-mono">Total: 260ms</span>
      </div>

      <div className="space-y-2.5">
        {/* HTTP Gateway */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              <span className="text-xs text-zinc-300">HTTP Gateway</span>
            </div>
            <span className="text-xs font-mono text-zinc-500">45ms</span>
          </div>
          <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[17%] bg-cyan-500 rounded-full" />
          </div>
        </div>

        {/* Auth Service */}
        <div className="space-y-1 ml-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs text-zinc-300">Auth (gRPC)</span>
              <span className="text-[9px] text-zinc-600 font-mono">eBPF</span>
            </div>
            <span className="text-xs font-mono text-zinc-500">95ms</span>
          </div>
          <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-[17%] h-full w-[37%] bg-blue-500 rounded-full" />
          </div>
        </div>

        {/* User Service - Optimized */}
        <div className="space-y-1 ml-3 bg-emerald-500/5 border border-emerald-500/20 p-2 rounded">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs text-zinc-300">User Service</span>
              <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono">
                optimized
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold">120ms</span>
          </div>
          <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-[54%] h-full w-[46%] bg-emerald-500 rounded-full" />
          </div>
          <p className="text-[10px] text-zinc-600 mt-1 font-mono">
            was: 850ms · N+1 queries eliminated
          </p>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-3 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Traces/day</div>
        <div className="text-white font-bold tabular-nums">2.4M</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">P95 now</div>
        <div className="text-white font-bold tabular-nums">120ms</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Changes</div>
        <div className="text-white font-bold tabular-nums">0</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      Auto-instrumented with eBPF · Zero code changes required
    </div>
  </div>
</Card>
            </div>
          </TabsContent>

          {/* Log Management */}
          <TabsContent value="logs" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm font-medium">Log Management</span>
                </div>
                
                <h3 className="text-4xl font-bold">AI-Powered Log Analytics</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Centralized log aggregation enhanced with AI pattern recognition automatically categorizes, analyzes, and correlates logs across your infrastructure. Natural language queries and intelligent anomaly detection reduce MTTR by up to 70% while processing 10M+ events per second with eBPF efficiency.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-driven pattern detection and error clustering</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Natural language log queries powered by machine learning</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Automatic correlation with traces and metrics via eBPF</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Real-time streaming with 10M+ events/sec capacity</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Intelligent log aggregation from containers, VMs, and cloud services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Advanced filtering and search with sub-second query response</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Automated log parsing and structured data extraction</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Cost-efficient tiered storage with intelligent archiving</p>
                  </div>
                </div>

                <Link to="/products/logs">
                  <Button className="bg-[#593a6d] text-primary-foreground group mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
   <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Live Logs
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          Log Intelligence
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Pattern recognition and anomaly clustering from distributed logs. 
          Automated root cause analysis with intelligent error grouping.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">47</div>
        <div className="text-xs text-zinc-500">grouped</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Incident Summary */}
    <div className="border-l-2 border-orange-500 bg-orange-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-orange-500 leading-none">◆</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-orange-200 font-medium mb-0.5">
            Connection pool exhaustion detected
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            47 timeout errors clustered · Auto-scaled 100→200 connections · 47s resolution
          </p>
        </div>
      </div>
    </div>

    {/* Log Stream */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1.5 max-h-64 overflow-auto">
      {/* Info log */}
      <div className="flex gap-2 text-zinc-500 hover:bg-zinc-800/50 px-1.5 py-1 rounded transition-colors">
        <span className="shrink-0">14:23:01</span>
        <span className="text-blue-400 shrink-0">INFO</span>
        <span className="text-zinc-400">tcp_connect probe active</span>
      </div>

      {/* Pattern detection */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded p-2 my-1">
        <div className="flex gap-2 mb-1">
          <span className="text-zinc-500 shrink-0">14:23:15</span>
          <span className="text-purple-400 shrink-0 font-semibold">PATTERN</span>
          <span className="text-purple-300">47 similar errors grouped</span>
        </div>
        <div className="text-zinc-500 ml-16">
          confidence: 98.3% · category: pool_exhaustion
        </div>
      </div>

      {/* Error log */}
      <div className="bg-red-500/10 border border-red-500/30 rounded p-2 my-1">
        <div className="flex gap-2 mb-1">
          <span className="text-zinc-500 shrink-0">14:23:45</span>
          <span className="text-red-400 shrink-0 font-semibold">ERROR</span>
          <span className="text-red-300">connection timeout (pool: 100/100)</span>
        </div>
        <div className="text-zinc-500 ml-16">
          service: user-api · node: prod-web-04
        </div>
      </div>

      {/* Auto-fix */}
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded p-2 my-1">
        <div className="flex gap-2 mb-1">
          <span className="text-zinc-500 shrink-0">14:23:52</span>
          <span className="text-emerald-400 shrink-0 font-semibold">REMEDIATE</span>
          <span className="text-emerald-300">pool scaled to 200</span>
        </div>
        <div className="text-zinc-500 ml-16">
          k8s HPA triggered · replicas: 3→5
        </div>
      </div>

      {/* Success */}
      <div className="flex gap-2 text-zinc-500 hover:bg-zinc-800/50 px-1.5 py-1 rounded transition-colors">
        <span className="shrink-0">14:24:15</span>
        <span className="text-emerald-400 shrink-0">OK</span>
        <span className="text-zinc-400">stabilized · error rate: 0.2%</span>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-3 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Errors/min</div>
        <div className="text-white font-bold tabular-nums">47</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">MTTR</div>
        <div className="text-white font-bold tabular-nums">47s</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Confidence</div>
        <div className="text-white font-bold tabular-nums">98%</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      Pattern clustering with automated remediation · eBPF instrumented
    </div>
  </div>
</Card>
            </div>
          </TabsContent>

          {/* Database Monitoring */}
          <TabsContent value="database" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <Database className="w-4 h-4" />
                  <span className="text-sm font-medium">Database Monitoring</span>
                </div>
                
                <h3 className="text-4xl font-bold">Intelligent Database Performance</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  eBPF-powered database monitoring captures query execution at the kernel level without performance impact. AI analyzes query patterns, automatically suggests indexes, and predicts slow queries before they occur across MySQL, PostgreSQL, MongoDB, and more with intelligent optimization recommendations that improve throughput by up to 5x.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">eBPF query capture with zero database overhead</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-driven query optimization and automatic index recommendations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Predictive slow query detection before production impact</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Multi-database support with unified observability</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Real-time connection pool and lock monitoring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Automatic query explain plan analysis and visualization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Database health scoring with anomaly detection</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Support for SQL and NoSQL databases including Redis and Cassandra</p>
                  </div>
                </div>

                <Link to="/products/database">
                  <Button className="bg-[#593a6d] text-primary-foreground group mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
            <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Query Analysis
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          Database Optimizer
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Real-time query analysis with index recommendations. 
          eBPF-based monitoring with zero database overhead.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">5×</div>
        <div className="text-xs text-zinc-500">faster</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Optimized Query */}
    <div className="border border-emerald-500/30 bg-emerald-500/5 rounded p-3">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono">
            FIXED
          </span>
          <span className="text-xs text-zinc-400 font-mono">PostgreSQL</span>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-emerald-400 tabular-nums">450ms</div>
          <div className="text-[10px] text-zinc-600 line-through">was 2.4s</div>
        </div>
      </div>
      
      <div className="bg-zinc-900 rounded p-2 font-mono text-[10px] text-zinc-400 leading-relaxed mb-2">
        <div>SELECT o.* FROM orders o</div>
        <div>JOIN users u ON o.user_id = u.id</div>
        <div>WHERE u.created_at &gt; NOW() - INTERVAL '30 days'</div>
      </div>
      
      <div className="text-xs text-emerald-300 font-mono">
        + idx_user_created(id, created_at)
      </div>
      <div className="text-[10px] text-zinc-600 mt-1">
        Missing composite index detected · 15K queries/hour affected
      </div>
    </div>

    {/* Predicted Issue */}
    <div className="border border-amber-500/30 bg-amber-500/5 rounded p-3">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-1.5 py-0.5 bg-amber-500/20 text-amber-400 rounded font-mono">
            WARNING
          </span>
          <span className="text-xs text-zinc-400">Will degrade soon</span>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-amber-400 tabular-nums">850ms</div>
          <div className="text-[10px] text-amber-600">→ 3.2s at 10K rows</div>
        </div>
      </div>
      
      <div className="bg-zinc-900 rounded p-2 font-mono text-[10px] text-zinc-400 leading-relaxed mb-2">
        <div>SELECT COUNT(*) FROM products p</div>
        <div>WHERE category_id IN (SELECT id FROM categories)</div>
      </div>
      
      <div className="text-xs text-amber-300">
        Table scan predicted at scale
      </div>
      <div className="text-[10px] text-zinc-600 mt-1">
        Recommend: add index on category_id or use materialized view
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Queries/hr</div>
        <div className="text-white font-bold tabular-nums">15K</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Improved</div>
        <div className="text-white font-bold tabular-nums">5×</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">DB impact</div>
        <div className="text-white font-bold tabular-nums">0%</div>
      </div>
    </div>
  </div>
</Card>
            </div>
          </TabsContent>

          {/* Network Flow Logs */}
          <TabsContent value="network-flow" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <Layers className="w-4 h-4" />
                  <span className="text-sm font-medium">Network Flow Monitoring</span>
                </div>
                
                <h3 className="text-4xl font-bold">eBPF L3/L4 Network Intelligence</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Real-time L3/L4 network flow monitoring powered by eBPF captures every packet at line rate without taps or agents. AI analyzes DNS queries, connection patterns, and traffic flows to detect anomalies, predict network congestion, and identify security threats with microsecond-level precision across your entire infrastructure.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Line-rate eBPF packet capture without hardware taps</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-powered traffic pattern analysis and anomaly detection</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">DNS query monitoring with threat intelligence correlation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Full network topology mapping and service dependency visualization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Real-time bandwidth utilization and network performance metrics</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Automatic detection of DDoS attacks and unusual traffic spikes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Flow-based NetFlow and sFlow compatible reporting</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">East-west traffic visibility for microservices communication</p>
                  </div>
                </div>

                <Link to="/products/network-flow">
                  <Button className="bg-[#593a6d]  text-primary-foreground group mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Network Flows
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          eBPF Network Monitor
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Line-rate L3/L4 flow capture with DNS monitoring. 
          Real-time threat detection via eBPF packet inspection.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">45K</div>
        <div className="text-xs text-zinc-500">flows/s</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Security Alert */}
    <div className="border-l-2 border-red-500 bg-red-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-red-500 leading-none">!</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-red-200 font-medium mb-0.5">
            DNS tunneling detected: payment-service-7d9f
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            247 queries/30s to *.malicious-domain.com · Auto-blocked
          </p>
        </div>
      </div>
    </div>

    {/* Flow Stream */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1.5">
      <div className="text-zinc-500 mb-2">Active flows</div>
      
      {/* Normal TCP flow */}
      <div className="flex items-center justify-between py-1.5 px-2 bg-zinc-800/50 rounded">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-emerald-500 rounded-full" />
          <span className="text-cyan-400">10.0.1.45:443</span>
          <span className="text-zinc-600">→</span>
          <span className="text-blue-400">10.0.2.12:8080</span>
        </div>
        <span className="text-zinc-500">4.2MB/s</span>
      </div>
      
      {/* Database flow */}
      <div className="flex items-center justify-between py-1.5 px-2 bg-zinc-800/50 rounded">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-emerald-500 rounded-full" />
          <span className="text-cyan-400">10.0.1.45:5432</span>
          <span className="text-zinc-600">→</span>
          <span className="text-blue-400">10.0.3.8:35742</span>
        </div>
        <span className="text-zinc-500">1.8MB/s</span>
      </div>
      
      {/* Blocked DNS */}
      <div className="flex items-center justify-between py-1.5 px-2 bg-red-500/10 border border-red-500/30 rounded">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-red-500 rounded-full" />
          <span className="text-red-400">DNS</span>
          <span className="text-zinc-600">→</span>
          <span className="text-red-300">a8f3.malicious-domain.com</span>
        </div>
        <span className="text-red-500 text-[9px]">BLOCKED</span>
      </div>
      
      {/* Threat info */}
      <div className="bg-red-500/5 border border-red-500/20 rounded p-2 mt-2 text-zinc-500">
        <div className="mb-1">Pattern: DNS tunneling (247 queries/30s)</div>
        <div>Confidence: 99.2% · Known C2 domain · Last seen: 2h ago</div>
      </div>
    </div>

    {/* DNS Stats */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Top DNS Queries
        </span>
        <span className="text-[10px] text-zinc-600">Last 5min</span>
      </div>
      <div className="space-y-1.5 text-[10px] font-mono">
        <div className="flex justify-between items-center py-1">
          <span className="text-zinc-400">api.internal.svc.cluster.local</span>
          <span className="text-zinc-500 tabular-nums">12.4K</span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="text-zinc-400">postgres.db.svc.cluster.local</span>
          <span className="text-zinc-500 tabular-nums">8.9K</span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="text-zinc-400">redis.cache.svc.cluster.local</span>
          <span className="text-zinc-500 tabular-nums">6.2K</span>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-3 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Flows/s</div>
        <div className="text-white font-bold tabular-nums">45K</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Blocked</div>
        <div className="text-white font-bold tabular-nums">12</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Confidence</div>
        <div className="text-white font-bold tabular-nums">99%</div>
      </div>
    </div>
  </div>
</Card>
            </div>
          </TabsContent>

          {/* Network Protocol Visibility */}
          <TabsContent value="network-protocol" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">Protocol Visibility</span>
                </div>
                
                <h3 className="text-4xl font-bold">Deep Network Protocol Intelligence</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Advanced eBPF-based deep packet inspection provides Layer 4-7 visibility into HTTP, gRPC, Kafka, MySQL, Redis, and custom protocols without proxies or sidecars. AI correlates protocol-level metrics with application performance to automatically identify misconfigurations, version mismatches, and optimization opportunities.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">eBPF L4-L7 protocol parsing without sidecars or proxies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Support for HTTP/2, gRPC, Kafka, Redis, MySQL, and more</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-powered protocol anomaly detection and optimization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Automatic API endpoint discovery and performance tracking</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Real-time request/response correlation and latency analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Custom protocol support with extensible eBPF programs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Encrypted traffic analysis with SSL/TLS inspection</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Golden signal metrics extraction from all protocol layers</p>
                  </div>
                </div>

                <Link to="/products/network-protocol">
                  <Button className="bg-[#593a6d] hover:bg-[#593a6d] text-primary-foreground group mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
            <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Protocol Analysis
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          L4-L7 Inspector
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Deep packet inspection with protocol parsing. 
          eBPF-based traffic analysis across HTTP/2, gRPC, Redis, and SQL.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">247</div>
        <div className="text-xs text-zinc-500">endpoints</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Version Mismatch Warning */}
    <div className="border-l-2 border-amber-500 bg-amber-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-amber-500 leading-none">△</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-amber-200 font-medium mb-0.5">
            gRPC version mismatch detected
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            user-service: 1.45 · auth-service: 1.52 · 15% failures
          </p>
        </div>
      </div>
    </div>

    {/* Protocol Breakdown */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Traffic Distribution
        </span>
        <span className="text-[10px] text-zinc-600">Real-time</span>
      </div>

      <div className="space-y-2.5">
        {/* HTTP/2 */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-[9px] px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded font-mono">
                HTTP/2
              </span>
              <span className="text-xs text-zinc-400">REST API</span>
            </div>
            <span className="text-xs text-zinc-500 font-mono tabular-nums">12.4K/s</span>
          </div>
          <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[45%] bg-blue-500 rounded-full" />
          </div>
        </div>

        {/* gRPC */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono">
                gRPC
              </span>
              <span className="text-xs text-zinc-400">Internal</span>
            </div>
            <span className="text-xs text-zinc-500 font-mono tabular-nums">8.9K/s</span>
          </div>
          <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[32%] bg-emerald-500 rounded-full" />
          </div>
        </div>

        {/* Redis */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-[9px] px-1.5 py-0.5 bg-violet-500/20 text-violet-400 rounded font-mono">
                Redis
              </span>
              <span className="text-xs text-zinc-400">Cache</span>
            </div>
            <span className="text-xs text-zinc-500 font-mono tabular-nums">4.2K/s</span>
          </div>
          <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[15%] bg-violet-500 rounded-full" />
          </div>
        </div>

        {/* MySQL */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-[9px] px-1.5 py-0.5 bg-orange-500/20 text-orange-400 rounded font-mono">
                MySQL
              </span>
              <span className="text-xs text-zinc-400">Database</span>
            </div>
            <span className="text-xs text-zinc-500 font-mono tabular-nums">2.1K/s</span>
          </div>
          <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[8%] bg-orange-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>

    {/* Parser Output */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1 text-zinc-500">
      <div className="text-emerald-400">HTTP/2: 247 endpoints · 89 gRPC methods</div>
      <div className="text-amber-400">gRPC version mismatch: 1.45 ↔ 1.52</div>
      <div className="text-orange-400">Slow query: 2.1s (MySQL)</div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-3 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Protocols</div>
        <div className="text-white font-bold tabular-nums">12</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Endpoints</div>
        <div className="text-white font-bold tabular-nums">247</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Methods</div>
        <div className="text-white font-bold tabular-nums">89</div>
      </div>
    </div>
  </div>
</Card>
            </div>
          </TabsContent>

          {/* CNI */}
          <TabsContent value="cni" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <Server className="w-4 h-4" />
                  <span className="text-sm font-medium">Cloud Native Networking</span>
                </div>
                
                <h3 className="text-4xl font-bold">High-Performance eBPF CNI</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Next-generation Container Network Interface built on eBPF delivers line-rate networking for Kubernetes with near-zero CPU overhead. AI-powered traffic engineering automatically optimizes network paths, prevents congestion, and ensures sub-millisecond pod-to-pod communication across clusters with intelligent routing decisions.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">eBPF-accelerated networking with line-rate performance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-driven traffic engineering and congestion prevention</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Multi-cluster networking with automated failover</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Native IPv4/IPv6 dual-stack and advanced IPAM</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Direct server return (DSR) for optimized egress traffic</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Seamless integration with Kubernetes Network Policies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Bandwidth management and QoS enforcement per pod</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Zero-downtime upgrades with rolling pod migration</p>
                  </div>
                </div>

                <Link to="/products/cni">
                  <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
             <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Kubernetes Network
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          eBPF CNI
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          XDP and TC-BPF accelerated networking for Kubernetes. 
          Line-rate packet processing with intelligent path optimization.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">40</div>
        <div className="text-xs text-zinc-500">Gbps</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Path Optimization Notice */}
    <div className="border-l-2 border-teal-500 bg-teal-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-teal-500 leading-none">→</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-teal-200 font-medium mb-0.5">
            Traffic rerouted: path congestion detected
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            2,400 pods migrated · Latency: 4.2ms → 0.8ms
          </p>
        </div>
      </div>
    </div>

    {/* CNI Status */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1 text-zinc-500">
      <div className="text-emerald-400">XDP acceleration: enabled</div>
      <div className="text-emerald-400">TC-BPF routing: active</div>
      <div className="text-zinc-400">2,847 pods · 12 nodes · Cluster mesh</div>
    </div>

    {/* Network Paths */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Network Paths
        </span>
        <span className="text-[10px] text-zinc-600">Live</span>
      </div>
      <div className="space-y-2">
        {/* Active path */}
        <div className="flex items-center justify-between py-1.5 px-2 bg-teal-500/10 border border-teal-500/30 rounded">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span className="text-xs text-zinc-300">Path A (Direct)</span>
          </div>
          <span className="text-xs text-teal-400 font-mono tabular-nums">0.8ms</span>
        </div>
        {/* Standby path */}
        <div className="flex items-center justify-between py-1.5 px-2 bg-zinc-800/50 rounded opacity-60">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
            <span className="text-xs text-zinc-500">Path B (Fallback)</span>
          </div>
          <span className="text-xs text-zinc-600 font-mono">Standby</span>
        </div>
      </div>
    </div>

    {/* Performance Metrics */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Latency</div>
        <div className="text-white font-bold tabular-nums">0.8ms</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Throughput</div>
        <div className="text-white font-bold tabular-nums">40Gb</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">PPS/node</div>
        <div className="text-white font-bold tabular-nums">5.2M</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Overhead</div>
        <div className="text-white font-bold tabular-nums">&lt;1%</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      XDP + TC-BPF acceleration · Automatic path optimization
    </div>
  </div>
</Card>
            </div>
          </TabsContent>

          {/* Continue with remaining tabs... Due to length, I'll add placeholders for remaining tabs */}
          {/* You can follow the same pattern for: load-balancer, cluster-mesh, bandwidth, kube-proxy, bgp, egress, service-mesh, gateway-api, multicast, host-firewall, ingress, encryption, network-policy, runtime-security */}

          {/* L4 Load Balancer */}
          <TabsContent value="load-balancer" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <Shuffle className="w-4 h-4" />
                  <span className="text-sm font-medium">Layer 4 Load Balancing</span>
                </div>
                
                <h3 className="text-4xl font-bold">eBPF-Accelerated Load Balancing</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ultra-fast Layer 4 load balancer built with eBPF processes packets directly in the kernel with zero proxy overhead. AI-powered traffic distribution adapts to real-time service health, automatically rebalances connections, and ensures optimal resource utilization across your infrastructure with intelligent routing algorithms.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Zero-hop eBPF load balancing with sub-microsecond latency</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-driven health-aware traffic distribution</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Direct Server Return (DSR) for maximum throughput</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Connection tracking and session affinity support</p>
                  </div>
                </div>

                <Link to="/products/load-balancer">
                  <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
        <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Load Balancer
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          eBPF L4 Balancer
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Zero-proxy XDP load balancing with automatic backend health tracking. 
          Direct server return for maximum throughput.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">8.2</div>
        <div className="text-xs text-zinc-500">Gbps</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Rebalancing Notice */}
    <div className="border-l-2 border-sky-500 bg-sky-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-sky-500 leading-none">⚖</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-sky-200 font-medium mb-0.5">
            Traffic rebalanced: pod-7 CPU at 92%
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            35% shifted to healthy backends · P99: 4.8ms
          </p>
        </div>
      </div>
    </div>

    {/* Backend Distribution */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Backend Distribution
        </span>
        <span className="text-[10px] text-zinc-600">12 active</span>
      </div>
      <div className="space-y-2">
        {/* Healthy backends - showing top 4 */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-emerald-500" />
              <span className="text-zinc-400 font-mono">pod-4</span>
            </div>
            <span className="text-zinc-500 tabular-nums">25%</span>
          </div>
          <div className="relative h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[25%] bg-emerald-500 rounded-full" />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-emerald-500" />
              <span className="text-zinc-400 font-mono">pod-2</span>
            </div>
            <span className="text-zinc-500 tabular-nums">22%</span>
          </div>
          <div className="relative h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[22%] bg-emerald-500 rounded-full" />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-emerald-500" />
              <span className="text-zinc-400 font-mono">pod-3</span>
            </div>
            <span className="text-zinc-500 tabular-nums">20%</span>
          </div>
          <div className="relative h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[20%] bg-emerald-500 rounded-full" />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-emerald-500" />
              <span className="text-zinc-400 font-mono">pod-1</span>
            </div>
            <span className="text-zinc-500 tabular-nums">18%</span>
          </div>
          <div className="relative h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[18%] bg-emerald-500 rounded-full" />
          </div>
        </div>

        {/* Degraded backends */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-amber-500" />
              <span className="text-zinc-400 font-mono">pod-7</span>
              <span className="text-[9px] text-amber-500">degraded</span>
            </div>
            <span className="text-zinc-500 tabular-nums">8%</span>
          </div>
          <div className="relative h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[8%] bg-amber-500 rounded-full" />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-amber-500" />
              <span className="text-zinc-400 font-mono">pod-9</span>
              <span className="text-[9px] text-amber-500">degraded</span>
            </div>
            <span className="text-zinc-500 tabular-nums">7%</span>
          </div>
          <div className="relative h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[7%] bg-amber-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">P99</div>
        <div className="text-white font-bold tabular-nums">4.8ms</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Throughput</div>
        <div className="text-white font-bold tabular-nums">8.2Gb</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Backends</div>
        <div className="text-white font-bold tabular-nums">12</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Healthy</div>
        <div className="text-white font-bold tabular-nums">10</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      XDP zero-proxy · Direct server return · Health-aware distribution
    </div>
  </div>
</Card>
            </div>
          </TabsContent>

          {/* Cluster Mesh */}
          <TabsContent value="cluster-mesh" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <Link2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Multi-Cluster Networking</span>
                </div>
                
                <h3 className="text-4xl font-bold">eBPF-Powered Cluster Mesh</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Connect multiple Kubernetes clusters seamlessly with eBPF-accelerated networking that provides transparent pod-to-pod communication across regions and clouds. AI-powered route optimization automatically selects the fastest paths, handles failover in milliseconds, and maintains service discovery across your entire multi-cluster infrastructure.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Zero-trust eBPF encryption between clusters without sidecars</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-driven intelligent routing and automatic failover</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Global service discovery and load balancing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Multi-cloud and hybrid cloud connectivity</p>
                  </div>
                </div>

                <Link to="/products/cluster-mesh">
                  <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
             <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Multi-Cluster
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          Cluster Mesh
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          eBPF-based multi-cluster networking with encrypted tunnels. 
          Global service discovery and automatic failover routing.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">3</div>
        <div className="text-xs text-zinc-500">clusters</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Failover Notice */}
    <div className="border-l-2 border-emerald-500 bg-emerald-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-emerald-500 leading-none">⟳</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-emerald-200 font-medium mb-0.5">
            Failover complete: US-EAST degradation
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            15K connections → EU-WEST · 140ms · Zero packet loss
          </p>
        </div>
      </div>
    </div>

    {/* Cluster List */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 space-y-2">
      {/* US-EAST-1 */}
      <div className="bg-zinc-800/50 border border-zinc-700 rounded p-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-xs font-semibold text-white">US-EAST-1</span>
            <span className="text-[9px] px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded font-mono">
              primary
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">healthy</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div>
            <div className="text-zinc-500">Pods</div>
            <div className="text-white font-bold tabular-nums">1,247</div>
          </div>
          <div>
            <div className="text-zinc-500">Nodes</div>
            <div className="text-white font-bold tabular-nums">12</div>
          </div>
          <div>
            <div className="text-zinc-500">Latency</div>
            <div className="text-emerald-400 font-bold tabular-nums">2.1ms</div>
          </div>
        </div>
      </div>

      {/* EU-WEST-1 */}
      <div className="bg-zinc-800/50 border border-zinc-700 rounded p-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-xs font-semibold text-white">EU-WEST-1</span>
            <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono">
              active
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">healthy</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div>
            <div className="text-zinc-500">Pods</div>
            <div className="text-white font-bold tabular-nums">892</div>
          </div>
          <div>
            <div className="text-zinc-500">Nodes</div>
            <div className="text-white font-bold tabular-nums">8</div>
          </div>
          <div>
            <div className="text-zinc-500">Latency</div>
            <div className="text-emerald-400 font-bold tabular-nums">45ms</div>
          </div>
        </div>
      </div>

      {/* AP-SOUTH-1 */}
      <div className="bg-zinc-800/50 border border-zinc-700 rounded p-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-xs font-semibold text-white">AP-SOUTH-1</span>
            <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono">
              active
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">healthy</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div>
            <div className="text-zinc-500">Pods</div>
            <div className="text-white font-bold tabular-nums">645</div>
          </div>
          <div>
            <div className="text-zinc-500">Nodes</div>
            <div className="text-white font-bold tabular-nums">6</div>
          </div>
          <div>
            <div className="text-zinc-500">Latency</div>
            <div className="text-emerald-400 font-bold tabular-nums">128ms</div>
          </div>
        </div>
      </div>
    </div>

    {/* Mesh Status */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1 text-zinc-500">
      <div className="text-emerald-400">3 encrypted tunnels active</div>
      <div className="text-zinc-400">Global service discovery enabled</div>
      <div className="text-zinc-400">Cross-cluster: 48.2K calls/min</div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Clusters</div>
        <div className="text-white font-bold tabular-nums">3</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Total pods</div>
        <div className="text-white font-bold tabular-nums">2.7K</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Failover</div>
        <div className="text-white font-bold tabular-nums">140ms</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Calls/min</div>
        <div className="text-white font-bold tabular-nums">48K</div>
      </div>
    </div>
  </div>
</Card>
            </div>
          </TabsContent>

{/* <TabsContent value="bandwidth" className="mt-0">
  <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 bg-[#593a6d]/10 text-primary px-4 py-2 rounded-full">
        <ActivitySquare className="w-4 h-4" />
        <span className="text-sm font-medium">Bandwidth Optimization</span>
      </div>
      
      <h3 className="text-4xl font-bold">eBPF-Powered Bandwidth Optimization</h3>
      
      <p className="text-lg text-muted-foreground leading-relaxed">
        Maximize network efficiency with AI-driven bandwidth optimization powered by eBPF. Automatically detect congestion, optimize flows, and reduce latency across your Kubernetes clusters and hybrid cloud infrastructure.
      </p>
      
      <div className="space-y-3 pt-4">
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Intelligent flow control for pods and services</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Automatic congestion detection and mitigation</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">AI-assisted predictive bandwidth allocation</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Zero-overhead eBPF-based packet optimization</p>
        </div>
      </div>

      <Link to="/products/bandwidth">
        <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
    
    <Card className="bg-card border shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 bg-white/20 rounded-lg">
              <ActivitySquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm">BANDWIDTH</div>
              <div className="text-xs text-white/80">Network Optimization</div>
            </div>
          </div>
          <Badge className="bg-white/20 text-white border-white/30">
            <Sparkles className="w-3 h-3 mr-1" />
            AI & eBPF
          </Badge>
        </div>
      </div>
      
      <div className="p-6 space-y-5">
        <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-foreground text-sm mb-1">
              AI Traffic Shaping
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Automatically prioritized critical traffic, reduced latency by 35%, and improved throughput across 3 clusters.
            </p>
          </div>
        </div>
        
        <div className="bg-slate-50 rounded-xl p-4 border">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Optimized Links</span>
            <Badge variant="outline" className="text-[10px]">Live Metrics</Badge>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Pod-to-Pod</span>
                </div>
                <span className="text-xs text-green-600 font-medium">Optimal</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div>
                  <p className="text-[10px] text-muted-foreground">Throughput</p>
                  <p className="text-sm font-bold">5.4Gbps</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">Latency</p>
                  <p className="text-sm font-bold text-green-600">1.2ms</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">Packets</p>
                  <p className="text-sm font-bold">12.4M/s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs space-y-2">
          <div className="text-slate-400 mb-2">eBPF Optimization Status:</div>
          <div className="text-green-400">✓ AI Flow Control: active</div>
          <div className="text-green-400">✓ Packet Prioritization: active</div>
          <div className="text-blue-400">→ Total flows: 12.4M/s</div>
          <div className="text-yellow-400">→ AI bandwidth optimizer: active</div>
          <div className="text-purple-400">→ Latency reduction: 1.2ms avg</div>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Flows</p>
            <div className="flex items-baseline gap-1">
              <p className="text-3xl font-bold text-blue-600">12.4M</p>
            </div>
            <p className="text-xs text-blue-600 mt-1">Per Second</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Latency</p>
            <div className="flex items-baseline gap-1">
              <p className="text-3xl font-bold text-green-600">1.2</p>
              <span className="text-sm text-muted-foreground">ms</span>
            </div>
            <p className="text-xs text-green-600 mt-1">Average</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Throughput</p>
            <div className="flex items-baseline gap-1">
              <p className="text-3xl font-bold text-purple-600">5.4Gbps</p>
            </div>
            <p className="text-xs text-purple-600 mt-1">Network</p>
          </div>
        </div>
      </div>
    </Card>
  </div>
</TabsContent> */}

<TabsContent value="bandwidth" className="mt-0">
  <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
        <ActivitySquare className="w-4 h-4" />
        <span className="text-sm font-medium">Bandwidth & Latency Management</span>
      </div>
      
      <h3 className="text-4xl font-bold">AI-Driven Network Performance</h3>
      
      <p className="text-lg text-muted-foreground leading-relaxed">
        eBPF-based bandwidth management monitors and optimizes network throughput in real-time. AI algorithms predict congestion, automatically adjust QoS policies, and ensure critical workloads maintain sub-millisecond latency even during peak traffic periods with intelligent traffic shaping.
      </p>
      
      <div className="space-y-3 pt-4">
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Real-time bandwidth monitoring with eBPF per-flow tracking</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">AI-powered congestion prediction and prevention</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Dynamic QoS and traffic prioritization</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">P99 latency guarantee for critical services</p>
        </div>
      </div>

      <Link to="/products/bandwidth">
        <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
    
<Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Traffic Shaping
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          Bandwidth Optimizer
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          eBPF-based QoS with priority-based traffic shaping. 
          Real-time bandwidth management and congestion prevention.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">8.5</div>
        <div className="text-xs text-zinc-500">Gbps</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* QoS Action Notice */}
    <div className="border-l-2 border-emerald-500 bg-emerald-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-emerald-500 leading-none">▶</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-emerald-200 font-medium mb-0.5">
            QoS policies applied: congestion predicted
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            Background traffic throttled 40% · Critical latency: 1.2ms
          </p>
        </div>
      </div>
    </div>

    {/* Priority Lanes */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Traffic Classes
        </span>
        <span className="text-[10px] text-zinc-600">8.5/10 Gbps</span>
      </div>

      <div className="space-y-3">
        {/* Critical */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono">
                CRITICAL
              </span>
              <span className="text-xs text-zinc-400">API & Database</span>
            </div>
            <span className="text-xs text-zinc-500 font-mono tabular-nums">3.2Gb</span>
          </div>
          <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[38%] bg-emerald-500 rounded-full" />
          </div>
          <div className="text-[10px] text-zinc-600 font-mono">
            P99: 1.2ms · Priority: high
          </div>
        </div>

        {/* Normal */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-[9px] px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded font-mono">
                NORMAL
              </span>
              <span className="text-xs text-zinc-400">User Traffic</span>
            </div>
            <span className="text-xs text-zinc-500 font-mono tabular-nums">3.8Gb</span>
          </div>
          <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[45%] bg-blue-500 rounded-full" />
          </div>
          <div className="text-[10px] text-zinc-600 font-mono">
            P99: 4.5ms · Priority: medium
          </div>
        </div>

        {/* Background */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-[9px] px-1.5 py-0.5 bg-amber-500/20 text-amber-400 rounded font-mono">
                BACKGROUND
              </span>
              <span className="text-xs text-zinc-400">Batch Processing</span>
            </div>
            <span className="text-xs text-zinc-500 font-mono tabular-nums">1.5Gb</span>
          </div>
          <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="absolute left-0 h-full w-[17%] bg-amber-500 rounded-full" />
          </div>
          <div className="text-[10px] text-amber-600 font-mono">
            Throttled: 40% · Priority: low
          </div>
        </div>
      </div>

      {/* Total Bandwidth Bar */}
      <div className="mt-3 pt-3 border-t border-zinc-800">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] text-zinc-500 font-mono">Total utilization</span>
          <span className="text-xs text-zinc-400 font-mono tabular-nums">85%</span>
        </div>
        <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div className="absolute left-0 h-full w-[85%] bg-fuchsia-500 rounded-full" />
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Critical P99</div>
        <div className="text-white font-bold tabular-nums">1.2ms</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Throttled</div>
        <div className="text-white font-bold tabular-nums">40%</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">QoS rules</div>
        <div className="text-white font-bold tabular-nums">15</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Utilization</div>
        <div className="text-white font-bold tabular-nums">85%</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      eBPF TC-based QoS · Priority queuing · Congestion avoidance
    </div>
  </div>
</Card>
  </div>
</TabsContent>

<TabsContent value="kube-proxy" className="mt-0">
  <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
        <Repeat className="w-4 h-4" />
        <span className="text-sm font-medium">Kube-proxy Replacement</span>
      </div>
      
      <h3 className="text-4xl font-bold">eBPF Native Kube-proxy</h3>
      
      <p className="text-lg text-muted-foreground leading-relaxed">
        Complete kube-proxy replacement using eBPF accelerates service routing with 10x lower latency and 90% reduced CPU overhead. AI-optimized connection tracking and intelligent service endpoint selection eliminates traditional iptables overhead while maintaining full Kubernetes service compatibility.
      </p>
      
      <div className="space-y-3 pt-4">
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">eBPF XDP/TC for zero-hop service routing</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">90% CPU reduction vs traditional kube-proxy</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">AI-optimized endpoint selection</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Full Service/EndpointSlice compatibility</p>
        </div>
      </div>

      <Link to="/products/kube-proxy">
        <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
    
  <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Service Routing
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          eBPF Kube-Proxy
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Zero-hop XDP/TC-BPF service routing replacing iptables. 
          Direct packet forwarding with O(1) map lookups.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">45μs</div>
        <div className="text-xs text-zinc-500">latency</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Performance Comparison */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono mb-3">
        iptables vs eBPF
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {/* iptables */}
        <div className="bg-zinc-800/50 border border-red-500/30 rounded p-2.5">
          <div className="text-[9px] px-1.5 py-0.5 bg-red-500/20 text-red-400 rounded font-mono mb-2 inline-block">
            iptables
          </div>
          <div className="space-y-2 text-[10px]">
            <div>
              <div className="text-zinc-500">Latency</div>
              <div className="text-red-400 font-bold tabular-nums text-lg">850μs</div>
            </div>
            <div>
              <div className="text-zinc-500">CPU</div>
              <div className="text-red-400 font-bold tabular-nums text-lg">12%</div>
            </div>
            <div>
              <div className="text-zinc-500">Rules</div>
              <div className="text-red-400 font-mono text-xs">45K chains</div>
            </div>
          </div>
        </div>

        {/* eBPF */}
        <div className="bg-zinc-800/50 border border-emerald-500/30 rounded p-2.5">
          <div className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono mb-2 inline-block">
            eBPF
          </div>
          <div className="space-y-2 text-[10px]">
            <div>
              <div className="text-zinc-500">Latency</div>
              <div className="text-emerald-400 font-bold tabular-nums text-lg">45μs</div>
              <div className="text-emerald-600 text-[9px]">95% faster</div>
            </div>
            <div>
              <div className="text-zinc-500">CPU</div>
              <div className="text-emerald-400 font-bold tabular-nums text-lg">0.8%</div>
              <div className="text-emerald-600 text-[9px]">93% reduction</div>
            </div>
            <div>
              <div className="text-zinc-500">Rules</div>
              <div className="text-emerald-400 font-mono text-xs">BPF maps</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Service Routing Status */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1 text-zinc-500">
      <div className="text-emerald-400">XDP redirect + TC-BPF hooks active</div>
      <div className="text-zinc-400">15,247 services · 48,392 endpoints</div>
      <div className="text-zinc-400">2.4M routing decisions/sec</div>
    </div>

    {/* Live Services */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Active Services
        </span>
        <span className="text-[10px] text-zinc-600">15.2K total</span>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between items-center py-1.5 px-2 bg-zinc-800/50 rounded">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
            <span className="text-xs text-zinc-400 font-mono">frontend-svc:80</span>
          </div>
          <span className="text-[10px] text-zinc-600 font-mono">12 endpoints</span>
        </div>
        <div className="flex justify-between items-center py-1.5 px-2 bg-zinc-800/50 rounded">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
            <span className="text-xs text-zinc-400 font-mono">api-svc:8080</span>
          </div>
          <span className="text-[10px] text-zinc-600 font-mono">24 endpoints</span>
        </div>
        <div className="flex justify-between items-center py-1.5 px-2 bg-zinc-800/50 rounded">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
            <span className="text-xs text-zinc-400 font-mono">db-svc:5432</span>
          </div>
          <span className="text-[10px] text-zinc-600 font-mono">3 endpoints</span>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Latency</div>
        <div className="text-white font-bold tabular-nums">45μs</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">CPU</div>
        <div className="text-white font-bold tabular-nums">0.8%</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Services</div>
        <div className="text-white font-bold tabular-nums">15K</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Routes/s</div>
        <div className="text-white font-bold tabular-nums">2.4M</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      O(1) map lookups · Zero iptables rules · Direct packet forwarding
    </div>
  </div>
</Card>
  </div>
</TabsContent>

<TabsContent value="bgp" className="mt-0">
  <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
        <RefreshCcw className="w-4 h-4" />
        <span className="text-sm font-medium">BGP Control Plane</span>
      </div>
      
      <h3 className="text-4xl font-bold">eBPF-Accelerated BGP Routing</h3>
      
      <p className="text-lg text-muted-foreground leading-relaxed">
        Native BGP integration with eBPF data plane provides dynamic route advertisement and high-performance external routing. AI analyzes network topology to optimize BGP route selection, prevent routing loops, and automatically adjust advertisements based on cluster health with millisecond convergence.
      </p>
      
      <div className="space-y-3 pt-4">
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Native BGP speaker with eBPF fast-path</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">AI-driven route optimization and loop prevention</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Automatic ECMP and failover handling</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Integration with cloud provider load balancers</p>
        </div>
      </div>

      <Link to="/products/bgp">
        <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
    
<Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Dynamic Routing
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          BGP Controller
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          eBPF-accelerated BGP with ECMP load balancing. 
          Automatic route optimization and fast convergence.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">3</div>
        <div className="text-xs text-zinc-500">peers</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Route Optimization Notice */}
    <div className="border-l-2 border-blue-500 bg-blue-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-blue-500 leading-none">↻</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-blue-200 font-medium mb-0.5">
            Routes optimized: asymmetric path detected
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            BGP weights adjusted · ECMP enabled · Latency: 15ms → 3ms
          </p>
        </div>
      </div>
    </div>

    {/* BGP Peers */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          BGP Peers
        </span>
        <span className="text-[10px] text-emerald-400">3 established</span>
      </div>
      
      <div className="space-y-2">
        {/* Peer 1 */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded p-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-xs text-white font-mono">192.168.1.1</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono">
              AS65001
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div>
              <div className="text-zinc-500">Rx</div>
              <div className="text-white font-bold tabular-nums">124</div>
            </div>
            <div>
              <div className="text-zinc-500">Tx</div>
              <div className="text-white font-bold tabular-nums">89</div>
            </div>
            <div>
              <div className="text-zinc-500">Uptime</div>
              <div className="text-emerald-400 font-bold tabular-nums">48h</div>
            </div>
          </div>
        </div>

        {/* Peer 2 */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded p-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-xs text-white font-mono">192.168.1.2</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono">
              AS65002
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div>
              <div className="text-zinc-500">Rx</div>
              <div className="text-white font-bold tabular-nums">98</div>
            </div>
            <div>
              <div className="text-zinc-500">Tx</div>
              <div className="text-white font-bold tabular-nums">89</div>
            </div>
            <div>
              <div className="text-zinc-500">Uptime</div>
              <div className="text-emerald-400 font-bold tabular-nums">72h</div>
            </div>
          </div>
        </div>

        {/* Peer 3 */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded p-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-xs text-white font-mono">10.0.0.1</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded font-mono">
              AS64512
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div>
              <div className="text-zinc-500">Rx</div>
              <div className="text-white font-bold tabular-nums">67</div>
            </div>
            <div>
              <div className="text-zinc-500">Tx</div>
              <div className="text-white font-bold tabular-nums">89</div>
            </div>
            <div>
              <div className="text-zinc-500">Uptime</div>
              <div className="text-emerald-400 font-bold tabular-nums">24h</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* BGP Status */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1 text-zinc-500">
      <div className="text-emerald-400">3/3 peers established · 4 ECMP paths</div>
      <div className="text-zinc-400">Routes: 247 Tx · 289 Rx</div>
      <div className="text-zinc-400">Convergence: 180ms</div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Peers</div>
        <div className="text-white font-bold tabular-nums">3/3</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Routes Tx</div>
        <div className="text-white font-bold tabular-nums">247</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">ECMP</div>
        <div className="text-white font-bold tabular-nums">4</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Converge</div>
        <div className="text-white font-bold tabular-nums">180ms</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      BGP4 with ECMP · eBPF datapath · Fast failover
    </div>
  </div>
</Card>
  </div>
</TabsContent>

<TabsContent value="egress" className="mt-0">
  <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
        <CornerUpRight className="w-4 h-4" />
        <span className="text-sm font-medium">Egress Gateway</span>
      </div>
      
      <h3 className="text-4xl font-bold">Intelligent Egress Traffic Management</h3>
      
      <p className="text-lg text-muted-foreground leading-relaxed">
        Centralized egress gateway with eBPF provides consistent source IP for outbound traffic while AI-powered traffic analysis detects anomalous external connections. Automatic DNS-based routing, policy enforcement, and intelligent path selection ensure secure and optimal egress traffic flow.
      </p>
      
      <div className="space-y-3 pt-4">
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">eBPF-based egress IP management (SNAT)</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">AI anomaly detection for outbound traffic</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">DNS-aware intelligent routing</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Per-namespace egress policies</p>
        </div>
      </div>

      <Link to="/products/egress">
        <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
    
<Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Outbound Traffic
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          Egress Gateway
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Centralized SNAT with eBPF policy enforcement and threat filtering.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">8.4K</div>
        <div className="text-xs text-zinc-500">conn/s</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Security Block Notice */}
    <div className="border-l-2 border-red-500 bg-red-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-red-500 leading-none">■</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-red-200 font-medium mb-0.5">
            Malicious connection blocked: payment-service
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            Destination: 45.142.x.x · Threat Intel match
          </p>
        </div>
      </div>
    </div>

    {/* Gateway Nodes - Condensed to 2 */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Gateway Nodes
        </span>
        <span className="text-[10px] text-emerald-400">3 active</span>
      </div>
      
      <div className="space-y-1.5">
        {/* Gateway 1 */}
        <div className="flex items-center justify-between py-1.5 px-2 bg-zinc-800/50 rounded">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
            <span className="text-xs text-white font-mono">egress-gw-1</span>
            <span className="text-[9px] text-blue-400">primary</span>
          </div>
          <span className="text-xs text-zinc-500 tabular-nums">3.2K/s</span>
        </div>

        {/* Gateway 2 */}
        <div className="flex items-center justify-between py-1.5 px-2 bg-zinc-800/50 rounded">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
            <span className="text-xs text-white font-mono">egress-gw-2</span>
          </div>
          <span className="text-xs text-zinc-500 tabular-nums">2.8K/s</span>
        </div>

        {/* Gateway 3 */}
        <div className="flex items-center justify-between py-1.5 px-2 bg-zinc-800/50 rounded">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
            <span className="text-xs text-white font-mono">egress-gw-3</span>
          </div>
          <span className="text-xs text-zinc-500 tabular-nums">2.4K/s</span>
        </div>
      </div>
    </div>

    {/* Top Destinations - Reduced to 3 + blocked */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Top Destinations
        </span>
        <span className="text-[10px] text-zinc-600">Last hour</span>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-center py-1 px-2 bg-zinc-800/50 rounded text-[10px]">
          <span className="text-zinc-400 font-mono">api.stripe.com</span>
          <span className="text-zinc-500 tabular-nums">4.2K</span>
        </div>
        <div className="flex justify-between items-center py-1 px-2 bg-zinc-800/50 rounded text-[10px]">
          <span className="text-zinc-400 font-mono">s3.amazonaws.com</span>
          <span className="text-zinc-500 tabular-nums">3.1K</span>
        </div>
        <div className="flex justify-between items-center py-1 px-2 bg-red-500/10 border border-red-500/30 rounded text-[10px]">
          <span className="text-red-400 font-mono">45.142.x.x</span>
          <span className="text-red-500 font-mono">BLOCKED</span>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Nodes</div>
        <div className="text-white font-bold tabular-nums">3</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">SNAT IPs</div>
        <div className="text-white font-bold tabular-nums">12</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Conn/s</div>
        <div className="text-white font-bold tabular-nums">8.4K</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Blocked</div>
        <div className="text-white font-bold tabular-nums">47</div>
      </div>
    </div>
  </div>
</Card>
  </div>
</TabsContent>

<TabsContent value="service-mesh" className="mt-0">
  <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
        <Users className="w-4 h-4" />
        <span className="text-sm font-medium">Service Mesh</span>
      </div>
      
      <h3 className="text-4xl font-bold">Sidecar-Free Service Mesh</h3>
      
      <p className="text-lg text-muted-foreground leading-relaxed">
        eBPF-native service mesh eliminates sidecars entirely while providing L7 observability, traffic management, and security. AI analyzes service communication patterns to automatically optimize routing, detect anomalies, and enforce policies with zero-proxy overhead and sub-millisecond latency additions.
      </p>
      
      <div className="space-y-3 pt-4">
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Zero-sidecar eBPF mesh (no Envoy proxies)</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">L7 visibility without application changes</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">AI-driven traffic splitting and canary deployments</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">mTLS with transparent eBPF encryption</p>
        </div>
      </div>

      <Link to="/products/service-mesh">
        <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
    
<Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Service Mesh
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          eBPF L7 Proxy
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Sidecar-free service mesh with eBPF L7 processing. 
          Zero per-pod overhead with mTLS encryption.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">0.3ms</div>
        <div className="text-xs text-zinc-500">overhead</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Architecture Comparison */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono mb-3">
        Sidecar vs eBPF
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {/* Traditional */}
        <div className="bg-zinc-800/50 border border-red-500/30 rounded p-2.5">
          <div className="text-[9px] px-1.5 py-0.5 bg-red-500/20 text-red-400 rounded font-mono mb-2 inline-block">
            sidecar
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div>
              <div className="text-zinc-500">Latency</div>
              <div className="text-red-400 font-bold text-base">+8ms</div>
            </div>
            <div>
              <div className="text-zinc-500">Memory/pod</div>
              <div className="text-red-400 font-bold text-base">250MB</div>
            </div>
            <div>
              <div className="text-zinc-500">CPU/pod</div>
              <div className="text-red-400 font-bold text-base">0.5</div>
            </div>
          </div>
        </div>

        {/* eBPF */}
        <div className="bg-zinc-800/50 border border-emerald-500/30 rounded p-2.5">
          <div className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono mb-2 inline-block">
            eBPF
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div>
              <div className="text-zinc-500">Latency</div>
              <div className="text-emerald-400 font-bold text-base">+0.3ms</div>
              <div className="text-emerald-600 text-[9px]">96% faster</div>
            </div>
            <div>
              <div className="text-zinc-500">Memory/pod</div>
              <div className="text-emerald-400 font-bold text-base">0MB</div>
            </div>
            <div>
              <div className="text-zinc-500">CPU/pod</div>
              <div className="text-emerald-400 font-bold text-base">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Canary Deployment */}
    <div className="border-l-2 border-blue-500 bg-blue-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-blue-500 leading-none">▶</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-blue-200 font-medium mb-0.5">
            Canary rollout: user-service v2
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            20% traffic · Error: 0.1% · Next: 50% in 15min
          </p>
        </div>
      </div>
    </div>

    {/* Canary Progress */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-zinc-500 font-mono">v2 TRAFFIC</span>
        <span className="text-xs text-emerald-400 font-bold tabular-nums">20%</span>
      </div>
      <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-3">
        <div className="absolute left-0 h-full w-[20%] bg-emerald-500 rounded-full" />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-zinc-800/50 rounded p-2 text-[10px]">
          <div className="text-zinc-500 mb-1">v1 (stable)</div>
          <div className="text-white font-bold text-sm">80%</div>
          <div className="text-emerald-600 text-[9px]">error: 0.08%</div>
        </div>
        <div className="bg-zinc-800/50 rounded p-2 text-[10px]">
          <div className="text-zinc-500 mb-1">v2 (canary)</div>
          <div className="text-white font-bold text-sm">20%</div>
          <div className="text-emerald-600 text-[9px]">error: 0.1%</div>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Services</div>
        <div className="text-white font-bold tabular-nums">89</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Overhead</div>
        <div className="text-white font-bold tabular-nums">0.3ms</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Memory</div>
        <div className="text-white font-bold tabular-nums">0MB</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Policies</div>
        <div className="text-white font-bold tabular-nums">24</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      L7 proxy · mTLS enabled · Progressive delivery
    </div>
  </div>
</Card>
  </div>
</TabsContent>

<TabsContent value="host-firewall" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">Host-Level Security</span>
                </div>
                
                <h3 className="text-4xl font-bold">eBPF Host Firewall Protection</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Kernel-level host firewall powered by eBPF provides high-performance packet filtering at the network interface with zero latency overhead. AI-powered threat detection analyzes traffic patterns in real-time, automatically blocks malicious connections, and adapts firewall rules based on emerging threats while maintaining line-rate performance.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">XDP-accelerated packet filtering at line rate</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-driven dynamic rule generation and threat adaptation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">DDoS protection with automatic mitigation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Stateful connection tracking without performance penalty</p>
                  </div>
                </div>

                <Link to="/products/host-firewall">
                  <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

            <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Host Protection
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          eBPF Firewall
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          XDP-accelerated packet filtering at NIC level. 
          Line-rate DDoS mitigation with sub-microsecond latency.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">40</div>
        <div className="text-xs text-zinc-500">Gbps</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* DDoS Alert */}
    <div className="border-l-2 border-red-500 bg-red-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-red-500 leading-none">!</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-red-200 font-medium mb-0.5">
            DDoS attack mitigated: UDP amplification
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            247 IPs · 4.2M pps dropped at NIC · Zero service impact
          </p>
        </div>
      </div>
    </div>

    {/* Firewall Rules */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1.5">
      <div className="text-zinc-500 mb-2">Active rules</div>
      
      {/* Allow rules */}
      <div className="flex items-center justify-between py-1.5 px-2 bg-emerald-500/10 border border-emerald-500/30 rounded">
        <span className="text-emerald-400">ALLOW TCP:443</span>
        <span className="text-emerald-600 tabular-nums">8.2K pps</span>
      </div>
      
      <div className="flex items-center justify-between py-1.5 px-2 bg-emerald-500/10 border border-emerald-500/30 rounded">
        <span className="text-emerald-400">ALLOW TCP:80</span>
        <span className="text-emerald-600 tabular-nums">4.1K pps</span>
      </div>
      
      {/* Block rules */}
      <div className="flex items-center justify-between py-1.5 px-2 bg-red-500/10 border border-red-500/30 rounded">
        <span className="text-red-400">BLOCK 192.168.1.0/24</span>
        <span className="text-red-600 text-[9px]">auto-added</span>
      </div>
      
      <div className="flex items-center justify-between py-1.5 px-2 bg-red-500/10 border border-red-500/30 rounded">
        <span className="text-red-400">DROP UDP flood (247 IPs)</span>
        <span className="text-red-600 tabular-nums">4.2M</span>
      </div>
      
      {/* Attack info */}
      <div className="bg-red-500/5 border border-red-500/20 rounded p-2 mt-2 text-zinc-500">
        <div className="mb-1">UDP amplification · 47s duration · Ongoing</div>
        <div>XDP DROP at NIC · Zero disruption</div>
      </div>
    </div>

    {/* Traffic Stats */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Traffic (60s)
        </span>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between items-center py-1.5 px-2 bg-emerald-500/10 border border-emerald-500/30 rounded text-xs">
          <span className="text-emerald-400">Allowed</span>
          <span className="text-emerald-400 font-bold tabular-nums">12.3K pps</span>
        </div>
        <div className="flex justify-between items-center py-1.5 px-2 bg-red-500/10 border border-red-500/30 rounded text-xs">
          <span className="text-red-400">Blocked</span>
          <span className="text-red-400 font-bold tabular-nums">4.2M pps</span>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Throughput</div>
        <div className="text-white font-bold tabular-nums">40Gb</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Dropped</div>
        <div className="text-white font-bold tabular-nums">4.2M</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Latency</div>
        <div className="text-white font-bold tabular-nums">&lt;1μs</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Rules</div>
        <div className="text-white font-bold tabular-nums">47</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      XDP at NIC level · Line-rate filtering · DDoS mitigation
    </div>
  </div>
</Card>
            </div>
          </TabsContent>

{/* Ingress Controller */}
          <TabsContent value="ingress" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <Link2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Ingress Management</span>
                </div>
                
                <h3 className="text-4xl font-bold">eBPF-Native Ingress Controller</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  High-performance ingress controller built on eBPF delivers HTTP/HTTPS load balancing with near-zero overhead and sub-millisecond routing decisions. AI-powered traffic management automatically handles SSL/TLS termination, optimizes cache policies, detects anomalies, and scales backend services based on real-time traffic patterns.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">eBPF-accelerated L7 routing and load balancing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-driven traffic shaping and auto-scaling decisions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Automatic SSL/TLS certificate management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Advanced path-based and host-based routing</p>
                  </div>
                </div>

                <Link to="/products/ingress">
                  <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

           <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Ingress Controller
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          eBPF L7 Ingress
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          XDP-accelerated ingress with SSL/TLS termination. 
          HTTP/2 and HTTP/3 support with dynamic routing.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">280K</div>
        <div className="text-xs text-zinc-500">req/min</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Auto-scaling Notice */}
    <div className="border-l-2 border-emerald-500 bg-emerald-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-emerald-500 leading-none">↑</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-emerald-200 font-medium mb-0.5">
            Pre-scaled for traffic surge: campaign launch
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            8→24 pods · 280K req/min peak · P95: 42ms stable
          </p>
        </div>
      </div>
    </div>

    {/* Ingress Routes */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Active Routes
        </span>
        <span className="text-[10px] text-emerald-400">8 healthy</span>
      </div>
      
      <div className="space-y-1.5">
        {/* Route 1 */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded p-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-emerald-500 rounded-full" />
              <code className="text-xs text-white font-mono">api.example.com/v1/*</code>
            </div>
            <span className="text-[9px] text-emerald-400">healthy</span>
          </div>
          <div className="flex justify-between text-[10px] text-zinc-500">
            <span>api-service · 24 pods</span>
            <span className="text-emerald-400 font-mono tabular-nums">42ms</span>
          </div>
        </div>

        {/* Route 2 */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded p-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-emerald-500 rounded-full" />
              <code className="text-xs text-white font-mono">www.example.com/*</code>
            </div>
            <span className="text-[9px] text-emerald-400">healthy</span>
          </div>
          <div className="flex justify-between text-[10px] text-zinc-500">
            <span>web-frontend · 12 pods</span>
            <span className="text-emerald-400 font-mono tabular-nums">28ms</span>
          </div>
        </div>

        {/* Route 3 */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded p-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full" />
              <code className="text-xs text-white font-mono">admin.example.com/*</code>
            </div>
            <span className="text-[9px] text-blue-400">active</span>
          </div>
          <div className="flex justify-between text-[10px] text-zinc-500">
            <span>admin-portal · 4 pods</span>
            <span className="text-blue-400 font-mono tabular-nums">18ms</span>
          </div>
        </div>
      </div>
    </div>

    {/* Ingress Status */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1 text-zinc-500">
      <div className="text-emerald-400">247 SSL/TLS certs · HTTP/2 + HTTP/3</div>
      <div className="text-zinc-400">8 routes active · 280K req/min peak</div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Req/min</div>
        <div className="text-white font-bold tabular-nums">280K</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">P95</div>
        <div className="text-white font-bold tabular-nums">42ms</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Routes</div>
        <div className="text-white font-bold tabular-nums">8</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">SSL certs</div>
        <div className="text-white font-bold tabular-nums">247</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      XDP acceleration · SSL/TLS termination · HTTP/3 ready
    </div>
  </div>
</Card>
            </div>
          </TabsContent>
          {/* Add similar detailed TabsContent for remaining solutions following the same pattern */}
          {/* I'll create placeholder tabs for the remaining ones to keep the response manageable */}
          <TabsContent value="network-policy" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">Network Security Policies</span>
                </div>
                
                <h3 className="text-4xl font-bold">AI-Enhanced Network Policies</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  eBPF-enforced Kubernetes Network Policies provide microsegmentation with line-rate performance and zero sidecar overhead. AI continuously analyzes traffic patterns to auto-generate optimal policies, detect policy violations before they impact security, and recommend least-privilege access rules that reduce attack surface by up to 85%.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">eBPF-enforced policies with line-rate performance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">AI-generated least-privilege policy recommendations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Automatic microsegmentation with identity-aware rules</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
                    <p className="text-sm text-muted-foreground">Real-time policy violation detection and alerting</p>
                  </div>
                </div>

                <Link to="/products/network-policy">
                  <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
<Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Network Security
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          Network Policies
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          eBPF-enforced microsegmentation with L3-L7 filtering. 
          Zero-trust networking with least-privilege access control.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">247</div>
        <div className="text-xs text-zinc-500">policies</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Policy Generation Notice */}
    <div className="border-l-2 border-blue-500 bg-blue-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-blue-500 leading-none">◆</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-blue-200 font-medium mb-0.5">
            Least-privilege policies active
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            247 rules enforced · 12 unauthorized attempts blocked
          </p>
        </div>
      </div>
    </div>

    {/* Active Policies */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Active Policies
        </span>
        <span className="text-[10px] text-emerald-400">247 enforced</span>
      </div>
      
      <div className="space-y-1.5">
        {/* Allow policy 1 */}
        <div className="bg-zinc-800/50 border-l-2 border-emerald-500 rounded p-2">
          <div className="flex items-center justify-between mb-1">
            <code className="text-xs text-white font-mono">frontend → api-service</code>
            <span className="text-[9px] text-emerald-400">allow</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-zinc-500">TCP:8080 · HTTP</span>
            <span className="text-zinc-600">12.4K flows/min</span>
          </div>
        </div>

        {/* Allow policy 2 */}
        <div className="bg-zinc-800/50 border-l-2 border-emerald-500 rounded p-2">
          <div className="flex items-center justify-between mb-1">
            <code className="text-xs text-white font-mono">api-service → database</code>
            <span className="text-[9px] text-emerald-400">allow</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-zinc-500">TCP:5432 · PostgreSQL</span>
            <span className="text-zinc-600">8.2K flows/min</span>
          </div>
        </div>

        {/* Deny policy */}
        <div className="bg-red-500/10 border-l-2 border-red-500 rounded p-2">
          <div className="flex items-center justify-between mb-1">
            <code className="text-xs text-red-300 font-mono">payment-svc → external</code>
            <span className="text-[9px] text-red-400">deny</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-red-600">Block all egress</span>
            <span className="text-red-600">12 blocked · 2m ago</span>
          </div>
        </div>

        {/* Default policy */}
        <div className="bg-zinc-800/50 border-l-2 border-violet-500 rounded p-2">
          <div className="flex items-center justify-between mb-1">
            <code className="text-xs text-white font-mono">* → monitoring</code>
            <span className="text-[9px] text-violet-400">default</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-zinc-500">TCP:9090 · Metrics</span>
            <span className="text-zinc-600">2.1K flows/min</span>
          </div>
        </div>
      </div>
    </div>

    {/* Policy Engine Status */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1 text-zinc-500">
      <div className="text-emerald-400">247 policies active · 12 violations blocked</div>
      <div className="text-zinc-400">30d traffic baseline · &lt;1μs policy lookup</div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Policies</div>
        <div className="text-white font-bold tabular-nums">247</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Blocked</div>
        <div className="text-white font-bold tabular-nums">12</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Lookup</div>
        <div className="text-white font-bold tabular-nums">&lt;1μs</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Flows</div>
        <div className="text-white font-bold tabular-nums">22.7K</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      L3-L7 filtering · Microsegmentation · Zero-trust enforcement
    </div>
  </div>
</Card>
            </div>
          </TabsContent>

          <TabsContent value="encryption" className="mt-0">
  <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
    {/* Left Content */}
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 bg-[#593a6d]/10 text-primary px-4 py-2 rounded-full">
        <Lock className="w-4 h-4" />
        <span className="text-sm font-medium">Transparent Encryption</span>
      </div>
      
      <h3 className="text-4xl font-bold">AI & eBPF-Powered Transparent Encryption</h3>
      
      <p className="text-lg text-muted-foreground leading-relaxed">
        Secure all your traffic with zero-overhead encryption powered by eBPF. AI-driven intelligence automatically applies optimal encryption protocols, monitors performance, and ensures seamless, transparent security across your entire infrastructure.
      </p>
      
      <div className="space-y-3 pt-4">
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Zero-overhead eBPF encryption at the kernel level</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">AI-driven key management and encryption optimization</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Transparent traffic encryption for multi-cloud and cross-cluster communication</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Real-time monitoring and AI alerts for security threats</p>
        </div>
      </div>

      <Link to="/products/encryption">
        <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>

    {/* Right Card */}
 <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Traffic Encryption
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          Transparent Encryption
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          eBPF kernel-level encryption with WireGuard. 
          Zero-config transparent encryption for all traffic.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">18K</div>
        <div className="text-xs text-zinc-500">encrypted</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Encryption Active Notice */}
    <div className="border-l-2 border-emerald-500 bg-emerald-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-emerald-500 leading-none">✓</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-emerald-200 font-medium mb-0.5">
            Kernel-level encryption active
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            WireGuard · 18K connections · 3.2Gbps throughput
          </p>
        </div>
      </div>
    </div>

    {/* Encrypted Traffic Flow */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Encrypted Traffic
        </span>
        <span className="text-[10px] text-emerald-400">active</span>
      </div>
      
      <div className="bg-zinc-800/50 border border-zinc-700 rounded p-2.5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-xs text-white">Cluster → Internet</span>
          </div>
          <span className="text-[9px] text-emerald-400 font-mono">encrypted</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div>
            <div className="text-zinc-500">Throughput</div>
            <div className="text-white font-bold tabular-nums">3.2Gb</div>
          </div>
          <div>
            <div className="text-zinc-500">Connections</div>
            <div className="text-white font-bold tabular-nums">18K</div>
          </div>
          <div>
            <div className="text-zinc-500">Latency</div>
            <div className="text-emerald-400 font-bold tabular-nums">1.8ms</div>
          </div>
        </div>
      </div>
    </div>

    {/* Encryption Details */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1 text-zinc-500">
      <div className="text-emerald-400">WireGuard protocol · Transparent encryption</div>
      <div className="text-zinc-400">18K connections · 3.2Gbps avg · 1.8ms latency</div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Encrypted</div>
        <div className="text-white font-bold tabular-nums">18K</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Throughput</div>
        <div className="text-white font-bold tabular-nums">3.2Gb</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Latency</div>
        <div className="text-white font-bold tabular-nums">1.8ms</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Overhead</div>
        <div className="text-white font-bold tabular-nums">&lt;5%</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      eBPF kernel hook · WireGuard · Zero-config encryption
    </div>
  </div>
</Card>
  </div>
</TabsContent>

<TabsContent value="runtime-security" className="mt-0">
  <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
    {/* Left Content */}
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 bg-[#593a6d] text-white px-4 py-2 rounded-full">
        <Shield className="w-4 h-4" />
        <span className="text-sm font-medium">Runtime Security</span>
      </div>
      
      <h3 className="text-4xl font-bold">AI & eBPF-Powered Runtime Security</h3>
      
      <p className="text-lg text-muted-foreground leading-relaxed">
        Protect your applications in real-time with eBPF-powered monitoring and AI-driven threat detection. Gain deep visibility into process behavior, network activity, and system calls while automatically blocking malicious activities without impacting performance.
      </p>
      
      <div className="space-y-3 pt-4">
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Kernel-level process monitoring with eBPF</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">AI-driven anomaly detection and threat prevention</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Real-time network and syscall monitoring</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#593a6d] mt-2" />
          <p className="text-sm text-muted-foreground">Automated incident alerts and risk scoring</p>
        </div>
      </div>

      <Link to="/products/runtime-security">
        <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group mt-[5%]">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>

    {/* Right Card */}
<Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
  {/* Header */}
  <div className="border-b border-zinc-800 p-4">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
            Runtime Security
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          eBPF Process Monitor
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Kernel-level process and syscall monitoring. 
          Real-time threat detection with behavioral analysis.
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <div className="text-2xl font-bold text-white tabular-nums">1.4K</div>
        <div className="text-xs text-zinc-500">monitored</div>
      </div>
    </div>
  </div>

  <div className="p-4 space-y-3">
    {/* Security Status Notice */}
    <div className="border-l-2 border-emerald-500 bg-emerald-500/5 p-2.5">
      <div className="flex items-start gap-2">
        <span className="text-emerald-500 leading-none">✓</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-emerald-200 font-medium mb-0.5">
            Kernel-level monitoring active
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            1,452 processes · 2 alerts · 98% blocked
          </p>
        </div>
      </div>
    </div>

    {/* Monitored Workloads */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
          Monitored Workloads
        </span>
        <span className="text-[10px] text-emerald-400">active</span>
      </div>
      
      <div className="bg-zinc-800/50 border border-zinc-700 rounded p-2.5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-xs text-white">Web Server</span>
          </div>
          <span className="text-[9px] text-emerald-400 font-mono">secure</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div>
            <div className="text-zinc-500">Processes</div>
            <div className="text-white font-bold tabular-nums">124</div>
          </div>
          <div>
            <div className="text-zinc-500">Alerts</div>
            <div className="text-amber-400 font-bold tabular-nums">2</div>
          </div>
          <div>
            <div className="text-zinc-500">Blocked</div>
            <div className="text-emerald-400 font-bold tabular-nums">100%</div>
          </div>
        </div>
      </div>
    </div>

    {/* Runtime Status */}
    <div className="bg-zinc-900 border border-zinc-800 rounded p-3 font-mono text-[10px] space-y-1 text-zinc-500">
      <div className="text-emerald-400">eBPF syscall hooks active · Behavioral analysis</div>
      <div className="text-zinc-400">1,452 processes · 150ms response · 98% blocked</div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-4 gap-2 text-xs">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Processes</div>
        <div className="text-white font-bold tabular-nums">1.4K</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Alerts</div>
        <div className="text-white font-bold tabular-nums">2</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Response</div>
        <div className="text-white font-bold tabular-nums">150ms</div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
        <div className="text-zinc-500 text-[10px] mb-0.5">Blocked</div>
        <div className="text-white font-bold tabular-nums">98%</div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
      Syscall monitoring · Process tracing · Container awareness
    </div>
  </div>
</Card>
  </div>
</TabsContent>

          {/* {[
            { id: 'runtime-security', title: 'Runtime Security', icon: Shield },
          ].map((item) => (
            <TabsContent key={item.id} value={item.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                <div className="space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-[#593a6d]/10 text-primary px-4 py-2 rounded-full">
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  
                  <h3 className="text-4xl font-bold">{item.title} with eBPF & AI</h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Advanced {item.title.toLowerCase()} powered by eBPF technology for zero-overhead performance. AI-driven intelligence provides automated optimization, predictive analytics, and intelligent decision-making to ensure your infrastructure runs at peak efficiency.
                  </p>
                  
                  <Button className="bg-[#593a6d] hover:bg-[#593a6d]/90 text-primary-foreground group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border shadow-xl p-12 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <item.icon className="w-24 h-24 mx-auto text-primary" />
                    <h4 className="text-2xl font-bold">{item.title}</h4>
                    <Badge className="bg-[#593a6d]/10 text-primary">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI-Powered • eBPF-Native
                    </Badge>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
          ))} */}
          
        </Tabs>
      </div>
    </section>
  );
};

export default SolutionsSection;
