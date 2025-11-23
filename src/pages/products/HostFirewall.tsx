import { motion } from 'framer-motion';
import { Shield, Lock, Activity, CheckCircle2, AlertCircle, Network, Zap, Code, Server, FileCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/infrastructure-hero.jpg';
import ebpfArchitecture from '@/assets/ebpf-architecture.jpg';
import instanceMonitoring from '@/assets/instance-monitoring.jpg';

const HostFirewall = () => {
  const features = [
    {
      icon: Shield,
      title: 'Host-Level Protection',
      description: 'Kernel-level firewall protection for hosts with eBPF-based packet filtering',
    },
    {
      icon: Lock,
      title: 'Stateful Filtering',
      description: 'Advanced stateful packet inspection with connection tracking and state management',
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Monitor firewall activity in real-time with detailed packet and connection logs',
    },
    {
      icon: AlertCircle,
      title: 'Threat Detection',
      description: 'Detect and block malicious traffic patterns and known attack signatures',
    },
    {
      icon: Network,
      title: 'Policy Management',
      description: 'Flexible firewall policies with support for IP, port, and protocol-based rules',
    },
    {
      icon: CheckCircle2,
      title: 'Zero-Touch Deployment',
      description: 'Deploy host firewall across your infrastructure without host reboots',
    },
  ];

  const capabilities = [
    {
      title: 'eBPF-Powered Performance',
      description: 'High-performance packet filtering with minimal CPU overhead using eBPF',
      metrics: ['Line-rate filtering', '< 1% CPU overhead', 'No packet drops'],
    },
    {
      title: 'Comprehensive Protection',
      description: 'Protect against network-based attacks with multi-layer security controls',
      metrics: ['DDoS protection', 'Port scanning defense', 'Protocol validation'],
    },
    {
      title: 'Centralized Management',
      description: 'Manage firewall policies across all hosts from a single control plane',
      metrics: ['Unified policies', 'Audit logging', 'Compliance reporting'],
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
            alt="Host Firewall Security Dashboard"
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
              <Shield className="w-3 h-3 mr-2" />
              HOST FIREWALL
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise-Grade{' '}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Host Firewall
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Protect your infrastructure at the host level with eBPF-powered firewall capabilities,
              stateful packet filtering, and centralized security policy management.
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
            <h2 className="text-4xl font-bold mb-4">How eBPF Host Firewall Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding kernel-level packet filtering with zero performance impact
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
                alt="eBPF Firewall Architecture"
                className="w-full rounded-lg shadow-2xl border border-border"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Kernel-Level Packet Filtering</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">eBPF-Powered Security</h4>
                    <p className="text-muted-foreground">
                      Leverage eBPF programs running in the Linux kernel to inspect and filter packets at line rate, providing enterprise-grade security without performance degradation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Line-Rate Performance</h4>
                    <p className="text-muted-foreground">
                      Process millions of packets per second with minimal CPU overhead. eBPF operates directly in the kernel, eliminating context switches and ensuring maximum throughput.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Stateful Inspection</h4>
                    <p className="text-muted-foreground">
                      Advanced connection tracking maintains state for TCP, UDP, and ICMP flows, enabling intelligent filtering based on connection context and application behavior.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real-Time Monitoring Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real-Time Security Monitoring</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive visibility into firewall activity and threat detection
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Advanced Threat Detection</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      AI-Powered Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Machine learning models analyze traffic patterns in real-time to detect anomalies, port scans, DDoS attacks, and zero-day exploits before they impact your infrastructure.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Network className="w-5 h-5" />
                      Connection Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Monitor all network connections in real-time with detailed visibility into source/destination IPs, ports, protocols, and connection states across your entire host infrastructure.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="w-5 h-5" />
                      Compliance & Auditing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comprehensive audit logs of all firewall decisions with tamper-proof storage for regulatory compliance including PCI-DSS, HIPAA, and SOC 2 requirements.
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
                alt="Security Monitoring Dashboard"
                className="w-full rounded-lg shadow-2xl border border-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Host-Level Security</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive firewall protection for your infrastructure hosts
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center mb-4">
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
      <section className="py-20 bg-muted/30">
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
      <section className="py-20 bg-gradient-to-r from-red-600/10 via-orange-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your Hosts?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deploy enterprise-grade host firewall protection with eBPF technology.
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

export default HostFirewall;
