import { motion } from 'framer-motion';
import { Search, Network, Eye, Code, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ProtocolVisibility = () => {
  const features = [
    {
      icon: Search,
      title: 'Protocol Detection',
      description: 'Automatically identify and decode application protocols',
    },
    {
      icon: Code,
      title: 'HTTP/HTTPS Tracking',
      description: 'Monitor HTTP requests, responses, and headers without TLS termination',
    },
    {
      icon: Network,
      title: 'gRPC & GraphQL',
      description: 'Native support for modern API protocols',
    },
    {
      icon: Shield,
      title: 'Database Protocols',
      description: 'Monitor MySQL, PostgreSQL, MongoDB, and Redis protocols',
    },
    {
      icon: Eye,
      title: 'Custom Protocols',
      description: 'Define and monitor proprietary application protocols',
    },
    {
      icon: Zap,
      title: 'Real-Time Decoding',
      description: 'Stream protocol data with minimal latency',
    },
  ];

  const capabilities = [
    {
      title: 'Zero-Instrumentation',
      description: 'Monitor protocols without modifying applications or terminating encryption',
      metrics: ['No code changes', 'eBPF-based', 'Transparent monitoring'],
    },
    {
      title: 'API Observability',
      description: 'Track API calls, errors, and performance across your services',
      metrics: ['Request/response tracking', 'Error analysis', 'Latency metrics'],
    },
    {
      title: 'Security Insights',
      description: 'Detect protocol anomalies and security threats',
      metrics: ['Anomaly detection', 'Threat identification', 'Compliance monitoring'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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
              <Search className="w-3 h-3 mr-2" />
              PROTOCOL VISIBILITY
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Deep{' '}
              <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                Protocol Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Monitor and decode application protocols with eBPF technology. Get visibility into
              HTTP, gRPC, database protocols, and more without code changes.
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

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Protocol Monitoring Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor all your application protocols in one place
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center mb-4">
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Advanced Capabilities</h2>

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
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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

      <section className="py-20 bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Gain Protocol-Level Visibility
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Monitor all your application protocols with zero-instrumentation eBPF technology.
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

export default ProtocolVisibility;
