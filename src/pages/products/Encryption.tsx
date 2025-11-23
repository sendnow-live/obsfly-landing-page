import { motion } from 'framer-motion';
import { Lock, Shield, Eye, CheckCircle2, Key, Network } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Encryption = () => {
  const features = [
    {
      icon: Lock,
      title: 'Transparent Encryption',
      description: 'Automatic network encryption for all pod-to-pod communication without application changes',
    },
    {
      icon: Shield,
      title: 'IPsec & WireGuard',
      description: 'Industry-standard encryption protocols with support for IPsec and WireGuard',
    },
    {
      icon: Key,
      title: 'Key Management',
      description: 'Automated encryption key rotation and management with secure key distribution',
    },
    {
      icon: Eye,
      title: 'Zero-Trust Security',
      description: 'Implement zero-trust networking with encryption and identity-based policies',
    },
    {
      icon: Network,
      title: 'Node-to-Node Encryption',
      description: 'Secure communication between nodes with transparent encryption tunnels',
    },
    {
      icon: CheckCircle2,
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements with encryption at rest and in transit',
    },
  ];

  const capabilities = [
    {
      title: 'High Performance',
      description: 'eBPF-accelerated encryption with minimal performance overhead',
      metrics: ['Near line-rate speeds', '< 5% overhead', 'Hardware offload support'],
    },
    {
      title: 'Flexible Deployment',
      description: 'Choose encryption scope from cluster-wide to per-namespace granularity',
      metrics: ['Cluster-wide encryption', 'Namespace isolation', 'Service-level control'],
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security with modern cryptographic algorithms',
      metrics: ['AES-256 encryption', 'Perfect forward secrecy', 'FIPS compliance'],
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
              <Lock className="w-3 h-3 mr-2" />
              TRANSPARENT ENCRYPTION
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise-Grade{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Network Encryption
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Secure all network traffic with transparent encryption using IPsec and WireGuard.
              Protect data in transit with zero application changes and minimal overhead.
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
            <h2 className="text-4xl font-bold mb-4">Comprehensive Encryption Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect your data with transparent, high-performance network encryption
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600/20 to-purple-600/20 flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Encrypt Your Network?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Secure all network communication with transparent, high-performance encryption.
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

export default Encryption;
