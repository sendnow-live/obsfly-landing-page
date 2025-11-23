import { motion } from 'framer-motion';
import { Server, Network, Zap, CheckCircle2, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CNI = () => {
  const features = [
    {
      icon: Network,
      title: 'Pod-to-Pod Communication',
      description: 'High-performance pod networking with eBPF-based packet processing for ultra-low latency',
    },
    {
      icon: Server,
      title: 'Kubernetes Native',
      description: 'Seamless integration with Kubernetes CNI specification and native network policies',
    },
    {
      icon: Zap,
      title: 'Network Performance',
      description: 'Optimized network datapath with XDP and eBPF for maximum throughput and minimal overhead',
    },
    {
      icon: Globe,
      title: 'IP Address Management',
      description: 'Intelligent IPAM with automatic IP allocation and efficient address space utilization',
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Built-in network security with identity-aware policy enforcement at the kernel level',
    },
    {
      icon: CheckCircle2,
      title: 'Plugin Architecture',
      description: 'Extensible plugin system supporting multiple network backends and overlay networks',
    },
  ];

  const capabilities = [
    {
      title: 'eBPF-Powered Datapath',
      description: 'Revolutionary eBPF technology delivers unprecedented network performance and efficiency',
      metrics: ['10x faster than iptables', 'Sub-microsecond latency', 'Zero packet loss'],
    },
    {
      title: 'Multi-Cluster Networking',
      description: 'Connect pods across multiple Kubernetes clusters with transparent service discovery',
      metrics: ['Cross-cluster routing', 'Global service mesh', 'Unified network policy'],
    },
    {
      title: 'Advanced Observability',
      description: 'Deep network visibility with flow monitoring, metrics, and real-time troubleshooting',
      metrics: ['Flow tracking', 'Network metrics', 'Hubble integration'],
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
            <Badge className="bg-primary/10 text-primary mb-6">
              <Network className="w-3 h-3 mr-2" />
              CONTAINER NETWORK INTERFACE
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              eBPF-Native{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Kubernetes Networking
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Advanced CNI plugin leveraging eBPF and XDP for high-performance pod networking,
              network policies, and multi-cluster connectivity in Kubernetes environments.
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

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Next-Generation Container Networking</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful CNI capabilities built on modern eBPF technology
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-600/20 to-cyan-600/20 flex items-center justify-center mb-4">
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
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose ObsFly CNI</h2>

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
      <section className="py-20 bg-gradient-to-r from-teal-600/10 via-cyan-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Upgrade Your Kubernetes Networking?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deploy the most advanced CNI plugin with eBPF-powered performance and security.
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

export default CNI;
