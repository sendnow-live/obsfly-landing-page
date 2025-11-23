import { motion } from 'framer-motion';
import { Users, Network, Eye, CheckCircle2, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ServiceMesh = () => {
  const features = [
    {
      icon: Users,
      title: 'Service-to-Service Communication',
      description: 'Secure and reliable communication between microservices with automatic encryption',
    },
    {
      icon: Network,
      title: 'Traffic Management',
      description: 'Advanced traffic routing, load balancing, and circuit breaking for resilient services',
    },
    {
      icon: Eye,
      title: 'Deep Observability',
      description: 'Comprehensive visibility into service communication with distributed tracing',
    },
    {
      icon: Shield,
      title: 'Zero-Trust Security',
      description: 'Identity-based security with mutual TLS and fine-grained access control',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'eBPF-powered service mesh with minimal latency and maximum throughput',
    },
    {
      icon: CheckCircle2,
      title: 'Sidecar-Free Architecture',
      description: 'Eliminate sidecar proxies with eBPF for reduced complexity and better performance',
    },
  ];

  const capabilities = [
    {
      title: 'eBPF-Native Architecture',
      description: 'Revolutionary sidecar-free service mesh using eBPF for superior performance',
      metrics: ['No sidecar overhead', '10x faster', 'Lower resource usage'],
    },
    {
      title: 'Advanced Traffic Control',
      description: 'Sophisticated traffic management with canary deployments and A/B testing',
      metrics: ['Canary releases', 'Blue-green deployment', 'Traffic splitting'],
    },
    {
      title: 'Enterprise Security',
      description: 'Built-in security with encryption, authentication, and authorization',
      metrics: ['Mutual TLS', 'Identity-based policies', 'Compliance ready'],
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
              <Users className="w-3 h-3 mr-2" />
              SERVICE MESH
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Next-Generation{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Service Mesh
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              eBPF-powered service mesh delivering secure service-to-service communication,
              advanced traffic management, and deep observability without sidecar complexity.
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
            <h2 className="text-4xl font-bold mb-4">Complete Service Mesh Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for modern microservices architecture
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600/20 to-violet-600/20 flex items-center justify-center mb-4">
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
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose ObsFly Service Mesh</h2>

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
      <section className="py-20 bg-gradient-to-r from-indigo-600/10 via-violet-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Deploy a Modern Service Mesh?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with the most advanced eBPF-powered service mesh platform.
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

export default ServiceMesh;
