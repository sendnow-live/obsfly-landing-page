# ObsFly Final Implementation Guide

## ✅ Completed

1. **Theme System Updated** - Tetragon-inspired light theme as primary
   - Light theme: Purple (#7C3AED), Blue (#3B82F6), Green (#059669)
   - Dark theme: Matching colors with dark background
   - Located in: `src/index.css`

2. **Logo Enhanced** - Butterfly with observability details
   - Added data flow dots on wings
   - Metric lines in body
   - Signal indicators on antennae
   - Updated gradients for new theme
   - Located in: `src/components/ObsFlyLogo.tsx`

3. **Navigation & Footer** - Already created with ObsFly branding
   - `src/components/Navigation.tsx`
   - `src/components/Footer.tsx`

## 📋 Remaining Tasks

### Task 1: Create Complete Product Page

Create file: `src/pages/Product.tsx`

```tsx
import { motion } from 'framer-motion';
import { Shield, Zap, Eye, Network, Server, Database, Activity, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Product = () => {
  const features = [
    {
      icon: Shield,
      title: 'eBPF-Powered Monitoring',
      description: 'Kernel-level observability with zero instrumentation overhead',
    },
    {
      icon: Zap,
      title: 'Real-Time Insights',
      description: 'Sub-second latency for instant visibility into your infrastructure',
    },
    {
      icon: Eye,
      title: 'Full-Stack Visibility',
      description: 'Complete observability from kernel to application layer',
    },
    {
      icon: Network,
      title: 'Network Monitoring',
      description: 'Deep packet inspection and connection tracking',
    },
    {
      icon: Server,
      title: 'Infrastructure Metrics',
      description: 'CPU, memory, disk, and network metrics in real-time',
    },
    {
      icon: Database,
      title: 'Database Profiling',
      description: 'Query performance and slow query detection',
    },
    {
      icon: Activity,
      title: 'Application Tracing',
      description: 'Distributed tracing without code changes',
    },
    {
      icon: Code,
      title: 'Developer-Friendly APIs',
      description: 'REST, GraphQL, and WebSocket APIs for custom integrations',
    },
  ];

  const architecture = [
    {
      step: '1',
      title: 'eBPF Agent',
      description: 'Lightweight agent deployed on each host, collects kernel-level metrics',
    },
    {
      step: '2',
      title: 'Data Collector',
      description: 'Aggregates and processes data from all agents in real-time',
    },
    {
      step: '3',
      title: 'Storage Backend',
      description: 'Time-series database optimized for observability data',
    },
    {
      step: '4',
      title: 'Visualization Dashboard',
      description: 'Beautiful, intuitive interface for monitoring and alerting',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              eBPF-Powered{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Observability Platform
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Deep visibility into your infrastructure with zero overhead. ObsFly leverages eBPF technology
              to provide real-time insights without modifying your code.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="shadow-lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How ObsFly Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern observability architecture built on eBPF technology
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {architecture.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {item.step}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for complete infrastructure observability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Observability?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start monitoring your infrastructure with eBPF-powered insights in minutes.
          </p>
          <Button size="lg" className="shadow-xl">
            Get Started Free
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
```

### Task 2: Create Solutions Page

Create file: `src/pages/Solutions.tsx`

```tsx
import { motion } from 'framer-motion';
import { Cloud, Database, Network, Code, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Solutions = () => {
  const useCases = [
    {
      icon: Code,
      title: 'Application Performance Monitoring',
      description: 'Monitor application performance with automatic instrumentation',
      features: ['Request tracing', 'Error tracking', 'Performance profiling', 'Dependency mapping'],
    },
    {
      icon: Network,
      title: 'Network Visibility',
      description: 'Deep network insights with eBPF packet capture',
      features: ['Connection tracking', 'Bandwidth monitoring', 'Latency analysis', 'Protocol inspection'],
    },
    {
      icon: Database,
      title: 'Database Monitoring',
      description: 'Query performance and optimization insights',
      features: ['Slow query detection', 'Connection pooling', 'Lock monitoring', 'Query optimization'],
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'Runtime security with eBPF-based threat detection',
      features: ['Process monitoring', 'File integrity', 'Network security', 'Compliance reporting'],
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Complete visibility across multi-cloud environments',
      features: ['AWS monitoring', 'GCP integration', 'Azure support', 'Kubernetes native'],
    },
    {
      icon: Zap,
      title: 'Real-Time Profiling',
      description: 'Continuous profiling with minimal overhead',
      features: ['CPU profiling', 'Memory analysis', 'I/O tracking', 'Lock contention'],
    },
  ];

  const industries = [
    {
      name: 'E-Commerce',
      description: 'Monitor customer experience and transaction performance',
      metrics: ['99.99% uptime', '< 100ms latency', '10M+ transactions/day'],
    },
    {
      name: 'Financial Services',
      description: 'Compliance-ready monitoring for critical systems',
      metrics: ['SOC 2 certified', 'Real-time alerts', 'Audit trails'],
    },
    {
      name: 'SaaS Platforms',
      description: 'Multi-tenant observability at scale',
      metrics: ['Tenant isolation', 'Custom dashboards', 'API monitoring'],
    },
    {
      name: 'Gaming',
      description: 'Low-latency monitoring for gaming infrastructure',
      metrics: ['< 10ms overhead', 'Global coverage', 'Player analytics'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Solutions for Every{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Use Case
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From application monitoring to security, ObsFly provides comprehensive solutions
              for modern infrastructure challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Use Cases</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      <CardDescription>{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {useCase.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Trusted by teams across various sectors
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>{industry.name}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {industry.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
```

### Task 3: Create Docs Page with obsfly-node-agent Installation

Create file: `src/pages/Docs.tsx`

```tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Download, Settings, Terminal, CheckCircle, Copy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Docs = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sidebarSections = [
    {
      title: 'Getting Started',
      items: ['Quick Start', 'Installation', 'Configuration', 'First Dashboard'],
    },
    {
      title: 'Agent Setup',
      items: ['obsfly-node-agent', 'System Requirements', 'Advanced Configuration'],
    },
    {
      title: 'Integrations',
      items: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'Azure'],
    },
    {
      title: 'API Reference',
      items: ['REST API', 'GraphQL', 'WebSocket'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-[250px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {sidebarSections.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-sm text-foreground mb-3 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-4">Documentation</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Complete guide to installing and configuring ObsFly
              </p>

              {/* Quick Start */}
              <section id="quick-start" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Book className="w-8 h-8 text-primary" />
                  Quick Start
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get started with ObsFly in less than 5 minutes. Our eBPF-powered agent requires
                  no code changes and minimal configuration.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <Card>
                    <CardHeader>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-2">
                        1
                      </div>
                      <CardTitle className="text-lg">Install Agent</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Deploy obsfly-node-agent on your hosts
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold mb-2">
                        2
                      </div>
                      <CardTitle className="text-lg">Configure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Set up your monitoring targets
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mb-2">
                        3
                      </div>
                      <CardTitle className="text-lg">Monitor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        View real-time insights in your dashboard
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Installation */}
              <section id="installation" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Download className="w-8 h-8 text-primary" />
                  Installing obsfly-node-agent
                </h2>

                <Tabs defaultValue="linux" className="mb-6">
                  <TabsList>
                    <TabsTrigger value="linux">Linux</TabsTrigger>
                    <TabsTrigger value="docker">Docker</TabsTrigger>
                    <TabsTrigger value="kubernetes">Kubernetes</TabsTrigger>
                  </TabsList>

                  <TabsContent value="linux" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>System Requirements</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            Linux kernel 4.4+ (5.10+ recommended)
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            Node.js 16+ or compatible runtime
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            512MB RAM minimum (1GB recommended)
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            Root or CAP_BPF capabilities
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Terminal className="w-5 h-5" />
                          Installation via npm
                        </CardTitle>
                        <CardDescription>
                          Install the agent globally using npm or yarn
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`# Using npm
npm install -g obsfly-node-agent

# Using yarn
yarn global add obsfly-node-agent

# Verify installation
obsfly-agent --version`}</code>
                          </pre>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-2 right-2"
                            onClick={() => copyToClipboard('npm install -g obsfly-node-agent')}
                          >
                            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Settings className="w-5 h-5" />
                          Configuration
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">1. Initialize Configuration</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`obsfly-agent init`}</code>
                          </pre>
                          <p className="text-sm text-muted-foreground mt-2">
                            This creates a config file at <code>/etc/obsfly/config.yaml</code>
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">2. Configure API Endpoint</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`# config.yaml
endpoint: https://api.obsfly.io
api_key: your-api-key-here

# Optional: Custom tags
tags:
  environment: production
  region: us-east-1`}</code>
                          </pre>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">3. Start the Agent</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`# Start as systemd service
sudo systemctl start obsfly-agent
sudo systemctl enable obsfly-agent

# Or run in foreground
obsfly-agent start --foreground`}</code>
                          </pre>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">4. Verify Agent Status</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`obsfly-agent status`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="docker" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Docker Installation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{`docker run -d \\
  --name obsfly-agent \\
  --privileged \\
  --pid=host \\
  --network=host \\
  -v /sys/kernel/debug:/sys/kernel/debug \\
  -e OBSFLY_API_KEY=your-api-key \\
  -e OBSFLY_ENDPOINT=https://api.obsfly.io \\
  obsfly/node-agent:latest`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="kubernetes" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Kubernetes DaemonSet</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{`kubectl apply -f https://obsfly.io/k8s/daemonset.yaml

# Or using Helm
helm repo add obsfly https://charts.obsfly.io
helm install obsfly-agent obsfly/obsfly-agent \\
  --set apiKey=your-api-key \\
  --set endpoint=https://api.obsfly.io`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Advanced Configuration */}
              <section id="advanced-configuration" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Advanced Configuration</h2>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Monitoring Targets</CardTitle>
                    <CardDescription>
                      Configure which services and processes to monitor
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`# config.yaml
monitors:
  - type: process
    name: "nginx"
    enabled: true

  - type: network
    interface: "eth0"
    capture_dns: true

  - type: database
    driver: "postgres"
    connection: "postgresql://localhost:5432"

  - type: custom
    ebpf_program: "/path/to/custom.bpf.o"`}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Tuning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`# config.yaml
performance:
  buffer_size: 8192      # eBPF ring buffer size
  sampling_rate: 100     # Hz
  batch_size: 100        # Events per batch
  flush_interval: 1000   # ms`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </section>

              {/* Next Steps */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle>View Dashboard</CardTitle>
                      <CardDescription>
                        Access real-time metrics and visualizations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Open Dashboard
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle>API Documentation</CardTitle>
                      <CardDescription>
                        Integrate with your existing tools
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        View API Docs
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </motion.div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Docs;
```

### Task 4: Update Navigation to Link Logo to Homepage

In `src/components/Navigation.tsx`, the logo already links to "/" (homepage). No changes needed!

### Task 5: Update App.tsx with All Routes

Update `src/App.tsx`:

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PricingPage from './components/ui/PricingPage';
import Product from './pages/Product';
import Solutions from './pages/Solutions';
import Docs from './pages/Docs';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/docs" element={<Docs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

### Task 6: Update Navigation Menu

Update `src/components/Navigation.tsx` to include Solutions:

```tsx
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/product' },
  { name: 'Solutions', path: '/solutions' },  // Add this
  { name: 'Pricing', path: '/pricing' },
  { name: 'Docs', path: '/docs' },
  // Remove 'About' and 'Contact' if not needed
];
```

## 🎨 Theme Toggle (Optional)

To add theme switching, install and use `next-themes`:

```bash
npm install next-themes
```

Then create `src/components/ThemeProvider.tsx` and wrap your app.

## ✅ Final Checklist

- [x] Light theme as primary (Tetragon colors)
- [x] Dark theme available
- [x] Logo enhanced with observability details
- [ ] Create Product page
- [ ] Create Solutions page
- [ ] Create Docs page with obsfly-node-agent
- [ ] Update App.tsx routes
- [ ] Test all navigation links

## 🚀 Ready to Deploy!

Once you create the three page files (Product.tsx, Solutions.tsx, Docs.tsx) and update App.tsx with the routes, your ObsFly website will be complete with:

- Beautiful Tetragon-inspired light/dark themes
- Enhanced butterfly logo with observability details
- Complete product and solutions pages
- Comprehensive documentation for obsfly-node-agent
- Full navigation and routing

Run `npm run dev` to see your complete ObsFly website!
