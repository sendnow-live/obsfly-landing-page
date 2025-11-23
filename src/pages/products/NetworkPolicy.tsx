import { motion } from 'framer-motion';
import { Shield, Network, CheckCircle2, Lock, Eye, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const NetworkPolicy = () => {
  const features = [
    {
      icon: Shield,
      title: 'Kubernetes Network Policies',
      description: 'Full support for Kubernetes NetworkPolicy resources with extended capabilities',
    },
    {
      icon: Network,
      title: 'Layer 3/4 Enforcement',
      description: 'Enforce network policies at Layer 3 and Layer 4 with IP and port-based rules',
    },
    {
      icon: Lock,
      title: 'Layer 7 Policies',
      description: 'Advanced Layer 7 policies for HTTP, DNS, and application-level filtering',
    },
    {
      icon: Eye,
      title: 'Policy Visualization',
      description: 'Visualize network policies and their effects on traffic flows',
    },
    {
      icon: CheckCircle2,
      title: 'Identity-Based Security',
      description: 'Enforce policies based on pod identity, labels, and service accounts',
    },
    {
      icon: AlertCircle,
      title: 'Policy Auditing',
      description: 'Comprehensive audit logs for policy violations and enforcement actions',
    },
  ];

  const capabilities = [
    {
      title: 'eBPF-Based Enforcement',
      description: 'High-performance policy enforcement at the kernel level with eBPF',
      metrics: ['Sub-microsecond latency', 'Zero packet drops', 'Millions of rules'],
    },
    {
      title: 'Advanced Features',
      description: 'Go beyond basic NetworkPolicy with extended capabilities and protocols',
      metrics: ['DNS-aware policies', 'HTTP filtering', 'Service mesh integration'],
    },
    {
      title: 'Operational Excellence',
      description: 'Simplified policy management with validation, testing, and troubleshooting',
      metrics: ['Policy validation', 'Dry-run mode', 'Impact analysis'],
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
              <Shield className="w-3 h-3 mr-2" />
              NETWORK POLICY
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advanced{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Network Security
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Enforce comprehensive network security policies with eBPF-powered implementation.
              Control traffic at Layer 3/4/7 with identity-based rules and advanced filtering.
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
            <h2 className="text-4xl font-bold mb-4">Comprehensive Policy Enforcement</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Control network traffic with powerful, flexible security policies
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600/20 to-emerald-600/20 flex items-center justify-center mb-4">
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
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose ObsFly Network Policy</h2>

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
      <section className="py-20 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Enforce Network Policies?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Secure your Kubernetes cluster with advanced network policy enforcement.
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

export default NetworkPolicy;
