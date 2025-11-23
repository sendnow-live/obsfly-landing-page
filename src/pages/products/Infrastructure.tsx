import { motion } from 'framer-motion';
import { Cpu, Server, HardDrive, Activity, TrendingUp, AlertCircle, CheckCircle2, Zap, Code, Database, Network, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/infrastructure-hero.jpg';
import ebpfArchitecture from '@/assets/ebpf-architecture.jpg';
import instanceMonitoring from '@/assets/instance-monitoring.jpg';
import analyticsPipeline from '@/assets/analytics-pipeline.jpg';

const Infrastructure = () => {
  const features = [
    {
      icon: Cpu,
      title: 'CPU Monitoring',
      description: 'Real-time CPU utilization, load averages, and process-level metrics with eBPF precision',
    },
    {
      icon: Server,
      title: 'Memory Analytics',
      description: 'Deep memory insights including usage, cache, buffers, and OOM detection',
    },
    {
      icon: HardDrive,
      title: 'Disk I/O Tracking',
      description: 'IOPS, throughput, latency tracking at block and file system levels',
    },
    {
      icon: Activity,
      title: 'Network Metrics',
      description: 'Bandwidth, packet rates, connection tracking, and TCP/UDP statistics',
    },
    {
      icon: TrendingUp,
      title: 'Performance Profiling',
      description: 'Continuous profiling with flame graphs and resource attribution',
    },
    {
      icon: AlertCircle,
      title: 'AI-Powered Anomaly Detection',
      description: 'Machine learning models identify unusual patterns before they impact production',
    },
  ];

  const capabilities = [
    {
      title: 'Zero-Overhead Monitoring',
      description: 'eBPF-based instrumentation provides kernel-level visibility with sub-1% overhead',
      metrics: ['< 1% CPU impact', 'Sub-millisecond latency', 'No code changes required'],
    },
    {
      title: 'Multi-Cloud Support',
      description: 'Monitor infrastructure across AWS, GCP, Azure, and on-premises environments',
      metrics: ['Cloud-agnostic', 'Hybrid infrastructure', 'Kubernetes native'],
    },
    {
      title: 'Real-Time Alerting',
      description: 'Intelligent alerting with contextual insights and automated remediation suggestions',
      metrics: ['Smart thresholds', 'Alert correlation', 'Integration with PagerDuty, Slack'],
    },
  ];

  const usageSteps = [
    {
      step: '1',
      title: 'Install Agent',
      description: 'Deploy our lightweight eBPF agent to your servers with a single command',
      code: 'curl -s https://install.obsfly.ai/agent.sh | bash',
    },
    {
      step: '2',
      title: 'Automatic Discovery',
      description: 'The agent automatically discovers all running processes, containers, and services',
      code: 'observo-agent start --auto-discover',
    },
    {
      step: '3',
      title: 'Start Monitoring',
      description: 'Instant visibility into CPU, memory, disk, network, and application metrics',
      code: 'observo-cli dashboard open',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Infrastructure Monitoring Dashboard" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-primary/10 text-primary mb-6">
              <Cpu className="w-3 h-3 mr-2" />
              INFRASTRUCTURE MONITORING
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              eBPF-Powered{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Infrastructure Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Leverage kernel-level eBPF instrumentation for zero-overhead monitoring of CPU, memory,
              disk, network, and system metrics across your entire cloud-native infrastructure.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/docs">
                <Button size="lg" className="shadow-lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/docs">
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How eBPF Monitoring Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the technology that makes zero-overhead monitoring possible
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={ebpfArchitecture} 
                alt="eBPF Architecture Diagram" 
                className="w-full rounded-lg shadow-2xl border border-border"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Kernel-Level Instrumentation</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Safe & Sandboxed</h4>
                    <p className="text-muted-foreground">
                      eBPF programs run in a verified sandbox within the kernel, ensuring safety while providing deep visibility into system operations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Ultra-Low Overhead</h4>
                    <p className="text-muted-foreground">
                      By operating at the kernel level, eBPF bypasses traditional monitoring overhead, consuming less than 1% of CPU resources.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">No Code Changes</h4>
                    <p className="text-muted-foreground">
                      Monitor applications without modifying code, recompiling, or restarting services. Works with any language or framework.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instance Monitoring Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real-Time Instance Monitoring</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get comprehensive visibility into every server instance across your infrastructure
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">How Data is Collected</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Kernel-Level Hooks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our agent attaches eBPF probes to kernel tracepoints, kprobes, and uprobes to capture system calls, 
                      network events, and resource usage with microsecond precision.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Network className="w-5 h-5" />
                      Efficient Aggregation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Metrics are aggregated in kernel space using eBPF maps, then streamed to our collection pipeline 
                      in batches to minimize network overhead.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Continuous Streaming
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Data streams continuously from your instances to our analytics engine where it's processed, 
                      analyzed, and made available in your dashboard in real-time.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={instanceMonitoring} 
                alt="Instance Monitoring Visualization" 
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Monitored Metrics Include:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    CPU utilization & load
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Memory usage & swaps
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Disk I/O & latency
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Network bandwidth
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Process-level stats
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Container metrics
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Pipeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI-Powered Analytics Pipeline</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From raw metrics to actionable insights powered by machine learning
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <img 
              src={analyticsPipeline} 
              alt="Analytics Pipeline Visualization" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Data Ingestion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Metrics from all your instances are ingested into our high-performance time-series database, 
                  optimized for billions of data points per second.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>High-cardinality support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Automatic downsampling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Long-term retention</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>ML Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our machine learning models continuously analyze patterns, detect anomalies, 
                  and predict potential issues before they occur.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Anomaly detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Predictive alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Root cause analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Actionable Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get intelligent alerts with context, automated remediation suggestions, 
                  and deep-dive capabilities for rapid troubleshooting.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Smart alerting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Auto-remediation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Performance recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage/Getting Started Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get Started in Minutes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deploy infrastructure monitoring across your fleet with three simple steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {usageSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                        <CardDescription className="text-base">{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <code>{step.code}</code>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="inline-block">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Need help with deployment? Our team is here to assist.
                </p>
                <Link to="/docs">
                  <Button variant="outline" size="lg">
                    View Full Documentation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Infrastructure Visibility</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor every layer of your infrastructure with unprecedented detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Key Capabilities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{capability.title}</CardTitle>
                    <CardDescription>{capability.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {capability.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          <span className="text-sm font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Monitor Your Infrastructure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start gaining deep infrastructure insights with eBPF-powered monitoring in minutes.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </Link>
            <Link to="/docs">
              <Button size="lg" className="shadow-xl">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Infrastructure;
