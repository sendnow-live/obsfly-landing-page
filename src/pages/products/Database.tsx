import { motion } from 'framer-motion';
import { Database, Activity, Zap, TrendingUp, AlertCircle, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const DatabaseMonitoring = () => {
  const features = [
    {
      icon: Activity,
      title: 'Query Performance',
      description: 'Real-time query execution tracking with detailed performance metrics',
    },
    {
      icon: Zap,
      title: 'Slow Query Detection',
      description: 'Automatic identification and analysis of slow-running queries',
    },
    {
      icon: TrendingUp,
      title: 'Connection Pool Monitoring',
      description: 'Track connection pool usage, saturation, and optimization opportunities',
    },
    {
      icon: AlertCircle,
      title: 'Lock Detection',
      description: 'Identify deadlocks, long-running locks, and blocking queries',
    },
    {
      icon: Eye,
      title: 'Schema Analytics',
      description: 'Monitor table sizes, index usage, and schema performance',
    },
    {
      icon: Database,
      title: 'Multi-Database Support',
      description: 'Support for PostgreSQL, MySQL, MongoDB, Redis, and more',
    },
  ];

  const capabilities = [
    {
      title: 'Zero-Overhead Profiling',
      description: 'eBPF-based monitoring provides deep insights without impacting database performance',
      metrics: ['< 1% overhead', 'No query rewriting', 'Continuous profiling'],
    },
    {
      title: 'Query Optimization',
      description: 'AI-powered recommendations for index creation and query improvements',
      metrics: ['Index suggestions', 'Query rewriting', 'Execution plan analysis'],
    },
    {
      title: 'Performance Trending',
      description: 'Historical analysis and predictive alerts for capacity planning',
      metrics: ['Trend analysis', 'Capacity forecasting', 'Anomaly detection'],
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
              <Database className="w-3 h-3 mr-2" />
              DATABASE MONITORING
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Deep{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Database Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Monitor database performance with zero-overhead eBPF instrumentation. Get query-level
              insights, optimization recommendations, and predictive alerts.
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
            <h2 className="text-4xl font-bold mb-4">Complete Database Visibility</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor every aspect of your database performance
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center mb-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Optimize Your Database Performance
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start monitoring your databases with zero-overhead eBPF instrumentation.
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

export default DatabaseMonitoring;
