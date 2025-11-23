import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Cloud, Database, Network, Code, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Solutions = () => {
  useEffect(() => {
    document.title = "Solutions - ObsFly Observability Platform";
  }, []);

  const useCases = [
    {
      icon: Code,
      title: 'Application Performance Monitoring',
      description: 'Monitor application performance with automatic instrumentation',
      features: ['Request tracing', 'Error tracking', 'Performance profiling', 'Dependency mapping'],
    },
    {
      icon: Network,
      title: 'Network Visibility',
      description: 'Deep network insights with eBPF packet capture',
      features: ['Connection tracking', 'Bandwidth monitoring', 'Latency analysis', 'Protocol inspection'],
    },
    {
      icon: Database,
      title: 'Database Monitoring',
      description: 'Query performance and optimization insights',
      features: ['Slow query detection', 'Connection pooling', 'Lock monitoring', 'Query optimization'],
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'Runtime security with eBPF-based threat detection',
      features: ['Process monitoring', 'File integrity', 'Network security', 'Compliance reporting'],
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Complete visibility across multi-cloud environments',
      features: ['AWS monitoring', 'GCP integration', 'Azure support', 'Kubernetes native'],
    },
    {
      icon: Zap,
      title: 'Real-Time Profiling',
      description: 'Continuous profiling with minimal overhead',
      features: ['CPU profiling', 'Memory analysis', 'I/O tracking', 'Lock contention'],
    },
  ];

  const industries = [
    {
      name: 'E-Commerce',
      description: 'Monitor customer experience and transaction performance',
      metrics: ['99.99% uptime', '< 100ms latency', '10M+ transactions/day'],
    },
    {
      name: 'Financial Services',
      description: 'Compliance-ready monitoring for critical systems',
      metrics: ['SOC 2 certified', 'Real-time alerts', 'Audit trails'],
    },
    {
      name: 'SaaS Platforms',
      description: 'Multi-tenant observability at scale',
      metrics: ['Tenant isolation', 'Custom dashboards', 'API monitoring'],
    },
    {
      name: 'Gaming',
      description: 'Low-latency monitoring for gaming infrastructure',
      metrics: ['< 10ms overhead', 'Global coverage', 'Player analytics'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Solutions for Every{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Use Case
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From application monitoring to security, ObsFly provides comprehensive solutions
              for modern infrastructure challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Use Cases</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      <CardDescription>{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {useCase.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Trusted by teams across various sectors
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>{industry.name}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {industry.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the solution that fits your needs and start monitoring in minutes.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </Link>
            <Link to="/docs">
              <Button size="lg" className="shadow-xl">
                Read Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
