import { motion } from 'framer-motion';
import { RefreshCcw, Network, TrendingUp, CheckCircle2, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const BGP = () => {
  const features = [
    {
      icon: RefreshCcw,
      title: 'BGP Routing',
      description: 'Full BGP support for dynamic route advertisement and network peering',
    },
    {
      icon: Network,
      title: 'Multi-Protocol BGP',
      description: 'Support for IPv4, IPv6, and multi-protocol extensions for comprehensive routing',
    },
    {
      icon: TrendingUp,
      title: 'Route Control',
      description: 'Advanced route filtering, policies, and path selection for optimal traffic routing',
    },
    {
      icon: Globe,
      title: 'Peer Management',
      description: 'Automated BGP peer discovery and management with health monitoring',
    },
    {
      icon: Shield,
      title: 'Secure Peering',
      description: 'Secure BGP sessions with authentication and encryption support',
    },
    {
      icon: CheckCircle2,
      title: 'Load Balancer Integration',
      description: 'Seamless integration with load balancers for service IP advertisement',
    },
  ];

  const capabilities = [
    {
      title: 'Cloud-Native BGP',
      description: 'Modern BGP implementation designed for Kubernetes and cloud-native environments',
      metrics: ['Kubernetes native', 'Dynamic updates', 'Automatic failover'],
    },
    {
      title: 'High Availability',
      description: 'Built-in high availability with fast convergence and automatic route updates',
      metrics: ['Sub-second convergence', 'Graceful restart', 'Route redundancy'],
    },
    {
      title: 'Observability',
      description: 'Comprehensive BGP metrics, monitoring, and troubleshooting capabilities',
      metrics: ['Route analytics', 'Peer monitoring', 'Event logging'],
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
              <RefreshCcw className="w-3 h-3 mr-2" />
              BGP SUPPORT
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud-Native{' '}
              <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                BGP Routing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Enterprise-grade BGP support for Kubernetes with dynamic route advertisement,
              multi-protocol support, and seamless integration with your network infrastructure.
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
            <h2 className="text-4xl font-bold mb-4">Enterprise BGP Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-featured BGP implementation for modern infrastructure
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 flex items-center justify-center mb-4">
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
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose ObsFly BGP</h2>

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
      <section className="py-20 bg-gradient-to-r from-fuchsia-600/10 via-purple-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Enable BGP Routing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Implement enterprise-grade BGP routing for your Kubernetes infrastructure.
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

export default BGP;
