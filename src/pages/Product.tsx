import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Shield, Zap, Eye, Network, Server, Database, Activity, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Product = () => {
  useEffect(() => {
    document.title = "Product - ObsFly Observability Platform";
  }, []);

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
      description: 'Lightweight obsfly-node-agent deployed on each host, collects kernel-level metrics',
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
          <Link to="/docs">
            <Button size="lg" className="shadow-xl">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
