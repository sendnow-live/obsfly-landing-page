import { motion } from 'framer-motion';
import { Layers, Network, Activity, Eye, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const NetworkFlow = () => {
  const features = [
    {
      icon: Network,
      title: 'Flow Monitoring',
      description: 'Real-time network flow analysis with sub-second granularity',
    },
    {
      icon: Activity,
      title: 'Traffic Analysis',
      description: 'Deep packet inspection and traffic pattern recognition',
    },
    {
      icon: Eye,
      title: 'Connection Tracking',
      description: 'Track all network connections with detailed metadata',
    },
    {
      icon: TrendingUp,
      title: 'Bandwidth Analytics',
      description: 'Monitor bandwidth usage across services and endpoints',
    },
    {
      icon: Zap,
      title: 'Latency Measurement',
      description: 'Sub-millisecond network latency tracking',
    },
    {
      icon: Layers,
      title: 'Layer 3/4 Visibility',
      description: 'Complete visibility into network and transport layers',
    },
  ];

  const capabilities = [
    {
      title: 'eBPF-Based Capture',
      description: 'Kernel-level packet capture without performance impact',
      metrics: ['Zero packet loss', '< 1% CPU overhead', 'Line-rate capture'],
    },
    {
      title: 'Service Dependencies',
      description: 'Automatically map service-to-service communication patterns',
      metrics: ['Dependency graphs', 'Traffic flows', 'Service mesh integration'],
    },
    {
      title: 'Network Insights',
      description: 'AI-powered anomaly detection and capacity planning',
      metrics: ['Traffic anomalies', 'Capacity forecasting', 'Smart alerting'],
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
              <Layers className="w-3 h-3 mr-2" />
              NETWORK FLOW
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real-Time{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Network Flow Analysis
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Monitor network flows with eBPF-powered deep packet inspection. Get complete visibility
              into your network traffic patterns and service dependencies.
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
            <h2 className="text-4xl font-bold mb-4">Complete Network Visibility</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor every network flow across your infrastructure
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center mb-4">
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

      <section className="py-20 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Monitoring Network Flows
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant visibility into network traffic with eBPF-powered flow analysis.
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

export default NetworkFlow;
