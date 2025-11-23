import { motion } from 'framer-motion';
import { Link2, Network, Eye, CheckCircle2, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ClusterMesh = () => {
  const features = [
    {
      icon: Link2,
      title: 'Multi-Cluster Connectivity',
      description: 'Seamlessly connect multiple Kubernetes clusters with transparent pod-to-pod communication',
    },
    {
      icon: Network,
      title: 'Cross-Cluster Networking',
      description: 'High-performance cross-cluster networking with eBPF-based routing and tunneling',
    },
    {
      icon: Eye,
      title: 'Service Discovery',
      description: 'Global service discovery across all connected clusters with automatic synchronization',
    },
    {
      icon: Globe,
      title: 'Multi-Region Support',
      description: 'Connect clusters across different regions, clouds, and data centers',
    },
    {
      icon: Zap,
      title: 'High Availability',
      description: 'Built-in failover and load balancing across clusters for maximum uptime',
    },
    {
      icon: CheckCircle2,
      title: 'Unified Policy',
      description: 'Apply consistent network and security policies across all connected clusters',
    },
  ];

  const capabilities = [
    {
      title: 'Transparent Connectivity',
      description: 'Connect clusters without complex VPN configurations or network overlays',
      metrics: ['No VPN required', 'Native pod IPs', 'Zero configuration'],
    },
    {
      title: 'Global Load Balancing',
      description: 'Distribute traffic across clusters with intelligent global load balancing',
      metrics: ['Cross-cluster services', 'Automatic failover', 'Geo-aware routing'],
    },
    {
      title: 'Enhanced Security',
      description: 'Secure cross-cluster communication with encryption and identity-based policies',
      metrics: ['Encrypted tunnels', 'Identity verification', 'Policy enforcement'],
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
              <Link2 className="w-3 h-3 mr-2" />
              CLUSTER MESH
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Seamless{' '}
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Multi-Cluster Networking
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect and manage multiple Kubernetes clusters as a single unified network with
              global service discovery, cross-cluster communication, and unified policies.
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
            <h2 className="text-4xl font-bold mb-4">Unified Multi-Cluster Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Break down cluster boundaries with seamless cross-cluster connectivity
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-600/20 to-blue-600/20 flex items-center justify-center mb-4">
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
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Cluster Mesh</h2>

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
      <section className="py-20 bg-gradient-to-r from-sky-600/10 via-blue-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Connect Your Clusters?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Build a unified multi-cluster platform with seamless cross-cluster networking.
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

export default ClusterMesh;
