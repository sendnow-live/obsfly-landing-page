import { motion } from 'framer-motion';
import { FileText, Search, Filter, TrendingUp, AlertCircle, Zap, Clock, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import logsHero from '@/assets/logs-hero.jpg';
import logPipeline from '@/assets/log-pipeline.jpg';

const Logs = () => {
  const features = [
    {
      icon: FileText,
      title: 'Centralized Logging',
      description: 'Collect and aggregate logs from all sources in a single, searchable platform',
    },
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Full-text search with regex support, field filtering, and saved queries',
    },
    {
      icon: Filter,
      title: 'Smart Parsing',
      description: 'Automatic log parsing and field extraction for structured analysis',
    },
    {
      icon: TrendingUp,
      title: 'Log Analytics',
      description: 'Visualize log patterns, trends, and anomalies with interactive charts',
    },
    {
      icon: AlertCircle,
      title: 'Real-Time Alerting',
      description: 'Set up alerts on log patterns and anomalies with AI-powered detection',
    },
    {
      icon: Clock,
      title: 'Historical Analysis',
      description: 'Query and analyze historical logs with time-based filtering',
    },
  ];

  const capabilities = [
    {
      title: 'High-Performance Ingestion',
      description: 'Handle millions of log events per second with sub-second latency',
      metrics: ['100M+ events/sec', 'Sub-second indexing', 'Lossless compression'],
    },
    {
      title: 'Intelligent Compression',
      description: 'Reduce storage costs by up to 90% with AI-powered log compression',
      metrics: ['90% cost reduction', 'Smart deduplication', 'Pattern-based compression'],
    },
    {
      title: 'Multi-Format Support',
      description: 'Support for all major log formats and custom parsing rules',
      metrics: ['JSON, Syslog, CEF', 'Custom parsers', 'Auto-detection'],
    },
  ];

  const usageSteps = [
    {
      step: '1',
      title: 'Install Agent',
      description: 'Deploy our lightweight agent on your instances',
      code: 'curl -s https://install.obsfly.ai/logs.sh | bash',
    },
    {
      step: '2',
      title: 'Configure Sources',
      description: 'Point to your log files or syslog endpoints',
      code: 'observo-logs config --path /var/log --format json',
    },
    {
      step: '3',
      title: 'Start Monitoring',
      description: 'View real-time logs in your dashboard',
      code: 'observo-logs start',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-primary/10 text-primary mb-6">
                <FileText className="w-3 h-3 mr-2" />
                LOG MANAGEMENT & ANALYTICS
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Intelligent{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Log Management
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Centralize, search, and analyze logs from any source with AI-powered insights
                and intelligent compression. Reduce costs while increasing visibility.
              </p>
              <div className="flex gap-4">
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={logsHero}
                alt="Log Management Dashboard"
                className="rounded-lg shadow-2xl border border-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Log Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage logs at scale
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600/20 to-emerald-600/20 flex items-center justify-center mb-4">
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

      {/* Log Pipeline Architecture */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">High-Performance Log Pipeline</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our log pipeline is designed for massive scale, handling millions of events per
                second with intelligent compression and indexing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Real-Time Ingestion</h3>
                    <p className="text-muted-foreground">
                      Collect logs from applications, servers, containers, and cloud services in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Smart Storage</h3>
                    <p className="text-muted-foreground">
                      Compressed storage with tiered architecture for optimal cost and performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Search className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Instant Search</h3>
                    <p className="text-muted-foreground">
                      Full-text search across petabytes of logs with sub-second response times
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={logPipeline}
                alt="Log Pipeline Architecture"
                className="rounded-lg shadow-xl border border-border"
              />
            </motion.div>
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

      {/* Get Started Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get Started in Minutes</h2>
            <p className="text-xl text-muted-foreground">
              Deploy log collection in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {usageSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary font-bold text-xl">
                      {step.step}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Managing Your Logs Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reduce costs by 90% while gaining complete visibility into your log data.
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

export default Logs;
