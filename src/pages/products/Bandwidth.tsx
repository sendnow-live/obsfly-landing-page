import { motion } from 'framer-motion';
import { ActivitySquare, Zap, TrendingUp, CheckCircle2, BarChart3, Network } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Bandwidth = () => {
  const features = [
    {
      icon: ActivitySquare,
      title: 'Real-Time Monitoring',
      description: 'Monitor network bandwidth and latency in real-time with eBPF-based metrics collection',
    },
    {
      icon: Zap,
      title: 'Latency Tracking',
      description: 'Track network latency with microsecond precision across all network paths and services',
    },
    {
      icon: TrendingUp,
      title: 'Bandwidth Analysis',
      description: 'Detailed bandwidth analysis per pod, service, and network interface with historical trends',
    },
    {
      icon: BarChart3,
      title: 'Performance Metrics',
      description: 'Comprehensive network performance metrics including throughput, packet loss, and jitter',
    },
    {
      icon: Network,
      title: 'Flow Visualization',
      description: 'Visualize network flows and traffic patterns with interactive dashboards',
    },
    {
      icon: CheckCircle2,
      title: 'SLA Monitoring',
      description: 'Monitor and enforce network SLAs with automated alerting and reporting',
    },
  ];

  const capabilities = [
    {
      title: 'eBPF-Based Collection',
      description: 'Zero-overhead network metrics collection using eBPF technology',
      metrics: ['< 1% CPU overhead', 'No packet drops', 'Kernel-level accuracy'],
    },
    {
      title: 'Advanced Analytics',
      description: 'AI-powered analytics to identify network bottlenecks and optimization opportunities',
      metrics: ['Anomaly detection', 'Predictive insights', 'Root cause analysis'],
    },
    {
      title: 'Comprehensive Reporting',
      description: 'Detailed reports and dashboards for network performance and capacity planning',
      metrics: ['Custom dashboards', 'Historical analysis', 'Trend forecasting'],
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
              <ActivitySquare className="w-3 h-3 mr-2" />
              BANDWIDTH & LATENCY MONITORING
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Precision{' '}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Network Performance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Monitor and optimize network bandwidth and latency with eBPF-powered real-time
              metrics, advanced analytics, and comprehensive performance insights.
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
            <h2 className="text-4xl font-bold mb-4">Complete Network Performance Visibility</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track and optimize every aspect of network performance
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600/20 to-orange-600/20 flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Optimize Network Performance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start monitoring bandwidth and latency with precision eBPF-powered metrics.
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

export default Bandwidth;
