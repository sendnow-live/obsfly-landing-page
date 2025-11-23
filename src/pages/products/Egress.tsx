import { motion } from 'framer-motion';
import { CornerUpRight, Network, Shield, CheckCircle2, Lock, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Egress = () => {
  const features = [
    {
      icon: CornerUpRight,
      title: 'Egress Gateway',
      description: 'Centralized egress gateway for controlled outbound traffic from your cluster',
    },
    {
      icon: Network,
      title: 'NAT Management',
      description: 'Advanced NAT capabilities for consistent source IP addresses and address translation',
    },
    {
      icon: Shield,
      title: 'Policy Enforcement',
      description: 'Enforce egress policies to control which services can access external resources',
    },
    {
      icon: Lock,
      title: 'Traffic Filtering',
      description: 'Filter and inspect outbound traffic with domain-based and IP-based rules',
    },
    {
      icon: Globe,
      title: 'Multi-Exit Points',
      description: 'Configure multiple egress points for different services or namespaces',
    },
    {
      icon: CheckCircle2,
      title: 'High Availability',
      description: 'Redundant egress gateways with automatic failover for uninterrupted connectivity',
    },
  ];

  const capabilities = [
    {
      title: 'Centralized Control',
      description: 'Manage all outbound traffic through centralized egress gateways with unified policies',
      metrics: ['Single exit point', 'Consistent IPs', 'Simplified firewall rules'],
    },
    {
      title: 'Security & Compliance',
      description: 'Meet compliance requirements with controlled egress and comprehensive audit logs',
      metrics: ['Traffic logging', 'Audit trails', 'Compliance reporting'],
    },
    {
      title: 'Performance Optimization',
      description: 'eBPF-based processing ensures minimal latency and maximum throughput',
      metrics: ['Low latency', 'High throughput', 'Connection pooling'],
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
              <CornerUpRight className="w-3 h-3 mr-2" />
              EGRESS GATEWAY
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Secure{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Egress Control
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Control and secure outbound traffic from your Kubernetes cluster with centralized
              egress gateways, NAT management, and comprehensive policy enforcement.
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
            <h2 className="text-4xl font-bold mb-4">Comprehensive Egress Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Control every aspect of outbound traffic from your cluster
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600/20 to-rose-600/20 flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-r from-pink-600/10 via-rose-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your Egress Traffic?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deploy centralized egress gateways for complete control over outbound traffic.
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

export default Egress;
