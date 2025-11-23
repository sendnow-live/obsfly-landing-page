import { motion } from 'framer-motion';
import { Link2, Network, Zap, CheckCircle2, Shield, TrendingUp, Globe, Lock, Server, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/infrastructure-hero.jpg';
import ebpfArchitecture from '@/assets/ebpf-architecture.jpg';
import instanceMonitoring from '@/assets/instance-monitoring.jpg';

const Ingress = () => {
  const features = [
    {
      icon: Link2,
      title: 'HTTP/HTTPS Routing',
      description: 'Advanced Layer 7 routing with host and path-based rules for HTTP and HTTPS traffic',
    },
    {
      icon: Network,
      title: 'Load Balancing',
      description: 'Intelligent load balancing across backend services with health checks and failover',
    },
    {
      icon: Zap,
      title: 'SSL/TLS Termination',
      description: 'High-performance SSL/TLS termination with automatic certificate management',
    },
    {
      icon: Shield,
      title: 'Security Features',
      description: 'Built-in WAF, rate limiting, and DDoS protection for secure ingress traffic',
    },
    {
      icon: TrendingUp,
      title: 'Traffic Management',
      description: 'Advanced traffic splitting, canary deployments, and A/B testing capabilities',
    },
    {
      icon: CheckCircle2,
      title: 'Kubernetes Native',
      description: 'Seamless integration with Kubernetes Ingress resources and annotations',
    },
  ];

  const capabilities = [
    {
      title: 'eBPF-Accelerated Processing',
      description: 'Revolutionary eBPF technology delivers exceptional performance for ingress traffic',
      metrics: ['10x faster routing', 'Sub-millisecond latency', 'Millions of req/sec'],
    },
    {
      title: 'Advanced Features',
      description: 'Enterprise-grade capabilities for modern application delivery',
      metrics: ['WebSocket support', 'gRPC routing', 'HTTP/2 & HTTP/3'],
    },
    {
      title: 'Observability & Monitoring',
      description: 'Comprehensive metrics and tracing for complete visibility into ingress traffic',
      metrics: ['Real-time metrics', 'Distributed tracing', 'Access logging'],
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
            alt="Ingress Controller Dashboard"
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
              <Link2 className="w-3 h-3 mr-2" />
              INGRESS CONTROLLER
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              High-Performance{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                eBPF Ingress Controller
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Revolutionary eBPF-powered ingress controller delivering 10x faster routing, advanced L7 traffic management,
              and enterprise-grade security for your Kubernetes applications.
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
            <h2 className="text-4xl font-bold mb-4">How eBPF Ingress Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding next-generation Layer 7 routing with kernel-level performance
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
                alt="eBPF Ingress Architecture"
                className="w-full rounded-lg shadow-2xl border border-border"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Kernel-Level Traffic Processing</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Ultra-Fast Routing</h4>
                    <p className="text-muted-foreground">
                      eBPF processes HTTP requests directly in the kernel, bypassing user-space overhead for 10x faster routing
                      decisions and sub-millisecond latency compared to traditional ingress controllers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Integrated Security</h4>
                    <p className="text-muted-foreground">
                      Built-in Web Application Firewall (WAF), rate limiting, and DDoS protection operate at line rate,
                      securing your applications without performance impact.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Automatic TLS Management</h4>
                    <p className="text-muted-foreground">
                      Automated certificate provisioning, renewal, and termination with Let's Encrypt integration,
                      supporting modern TLS 1.3 and HTTP/2 protocols.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Traffic Management */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Traffic Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sophisticated routing and deployment strategies for modern applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Intelligent Routing Capabilities</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Canary Deployments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Progressive traffic shifting for safe rollouts. Gradually migrate traffic from stable to canary
                      versions with precise percentage-based control and automatic rollback on errors.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Network className="w-5 h-5" />
                      A/B Testing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Route traffic based on headers, cookies, or user attributes for sophisticated A/B testing
                      and feature flagging without application code changes.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Server className="w-5 h-5" />
                      Blue-Green Deployments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Instant traffic switching between environments with zero downtime. Validate new releases
                      in production before cutting over with single-click rollback capability.
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
                alt="Traffic Management Dashboard"
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
            <h2 className="text-4xl font-bold mb-4">Enterprise-Grade Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for production-ready ingress traffic management
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Accelerate Your Ingress?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deploy the fastest ingress controller powered by eBPF technology.
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

export default Ingress;
