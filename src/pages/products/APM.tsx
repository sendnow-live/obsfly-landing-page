import { motion } from 'framer-motion';
import { Activity, Zap, Code, TrendingUp, AlertTriangle, Eye, Network, Database, CheckCircle2, GitBranch, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import apmHero from '@/assets/apm-hero.jpg';
import distributedTracing from '@/assets/distributed-tracing.jpg';
import autoInstrumentation from '@/assets/auto-instrumentation.jpg';
import apmPipeline from '@/assets/apm-pipeline.jpg';

const APM = () => {
  const features = [
    {
      icon: Zap,
      title: 'Auto-Instrumentation',
      description: 'Automatic application tracing without code changes using eBPF technology',
    },
    {
      icon: Code,
      title: 'Distributed Tracing',
      description: 'End-to-end request tracing across microservices and distributed systems',
    },
    {
      icon: TrendingUp,
      title: 'Performance Metrics',
      description: 'Real-time application performance monitoring with detailed metrics',
    },
    {
      icon: AlertTriangle,
      title: 'Error Tracking',
      description: 'Comprehensive error detection, tracking, and root cause analysis',
    },
    {
      icon: Eye,
      title: 'Transaction Profiling',
      description: 'Deep visibility into transaction performance and bottlenecks',
    },
    {
      icon: Database,
      title: 'Database Queries',
      description: 'Track and optimize database queries with execution time analysis',
    },
  ];

  const capabilities = [
    {
      title: 'Zero-Code Instrumentation',
      description: 'eBPF-based APM provides complete observability without modifying application code',
      metrics: ['No SDK required', 'Any programming language', 'Instant deployment'],
    },
    {
      title: 'Service Dependency Mapping',
      description: 'Automatically discover and map service dependencies and data flows',
      metrics: ['Visual service maps', 'Dependency tracking', 'Impact analysis'],
    },
    {
      title: 'AI-Powered Insights',
      description: 'Machine learning identifies performance anomalies and optimization opportunities',
      metrics: ['Anomaly detection', 'Predictive alerts', 'Smart recommendations'],
    },
  ];

  const usageSteps = [
    {
      step: '1',
      title: 'Deploy APM Agent',
      description: 'Install our lightweight eBPF-based APM agent on your application servers',
      code: 'curl -s https://install.obsfly/apm.sh | bash',
    },
    {
      step: '2',
      title: 'Auto-Discovery',
      description: 'Agent automatically detects all running applications and services',
      code: 'observo-apm start --auto-detect',
    },
    {
      step: '3',
      title: 'View Traces',
      description: 'Access distributed traces, metrics, and insights in your dashboard',
      code: 'observo-cli apm dashboard',
    },
  ];

  const traceFeatures = [
    {
      title: 'Request Tracing',
      description: 'Track individual requests as they flow through your distributed system',
      items: ['Trace ID propagation', 'Span relationships', 'Timing breakdown'],
    },
    {
      title: 'Service Maps',
      description: 'Visualize service dependencies and communication patterns',
      items: ['Topology discovery', 'Traffic flow', 'Latency visualization'],
    },
    {
      title: 'Error Analysis',
      description: 'Identify errors and exceptions across your application stack',
      items: ['Stack traces', 'Error rates', 'Impact assessment'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src={apmHero}
            alt="APM Dashboard"
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
              <Activity className="w-3 h-3 mr-2" />
              APPLICATION PERFORMANCE MONITORING
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              eBPF-Native{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                APM Platform
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Monitor application performance with automatic instrumentation, distributed tracing,
              and AI-powered insights. No code changes required.
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

      {/* How Auto-Instrumentation Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Zero-Code APM with eBPF</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understand how automatic instrumentation provides complete observability without modifying your code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={autoInstrumentation}
                alt="Auto-Instrumentation Visualization"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Function-Level Tracing</h4>
                    <p className="text-muted-foreground">
                      eBPF probes attach to function entry and exit points in your application, capturing execution time,
                      arguments, and return values without modifying the binary.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Network Call Interception</h4>
                    <p className="text-muted-foreground">
                      HTTP/gRPC calls are automatically intercepted at the socket level, capturing headers,
                      payloads, and timing for complete distributed tracing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Language Agnostic</h4>
                    <p className="text-muted-foreground">
                      Works with any programming language - Python, Java, Go, Node.js, Ruby, C++, and more.
                      No language-specific SDKs or instrumentation libraries required.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distributed Tracing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Distributed Tracing Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track requests across microservices with complete visibility into service dependencies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">How Traces Are Collected</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GitBranch className="w-5 h-5" />
                      Span Generation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Each function call, database query, or network request generates a span with timing,
                      metadata, and context information. Spans are automatically linked to form complete traces.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Network className="w-5 h-5" />
                      Context Propagation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Trace context (trace ID, span ID) is automatically propagated through HTTP headers,
                      gRPC metadata, and message queue attributes to connect distributed operations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Real-Time Collection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Spans are buffered in-process and streamed to our collection backend in batches,
                      with intelligent sampling to balance detail and performance.
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
                src={distributedTracing}
                alt="Distributed Tracing Architecture"
                className="w-full rounded-lg shadow-2xl border border-border"
              />
              <div className="mt-6 grid grid-cols-3 gap-4">
                {traceFeatures.map((feature, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                      {feature.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-green-600 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APM Analytics Pipeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">APM Analytics Pipeline</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From raw traces to actionable performance insights
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <img
              src={apmPipeline}
              alt="APM Analytics Pipeline"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Trace Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Distributed traces from all services are collected, normalized, and stored in our
                  high-performance trace database optimized for fast queries.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>OpenTelemetry compatible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Intelligent sampling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Full-text search</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Performance Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  ML models analyze trace patterns to identify slow transactions, N+1 queries,
                  inefficient code paths, and resource bottlenecks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Bottleneck detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Regression analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>SLO monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Alerting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Intelligent alerts with full trace context, root cause analysis, and
                  recommendations for resolving performance issues.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Context-aware alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Root cause identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Auto-remediation suggestions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage/Getting Started Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get Started in Minutes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deploy APM monitoring across your applications with three simple steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {usageSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-600/10 to-blue-600/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                        <CardDescription className="text-base">{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <code>{step.code}</code>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="inline-block">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Need help with deployment? Check our comprehensive guides.
                </p>
                <Link to="/docs">
                  <Button variant="outline" size="lg">
                    View Full Documentation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Application Visibility</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor every aspect of your application performance
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600/20 to-blue-600/20 flex items-center justify-center mb-4">
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
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Observo APM</h2>

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
      <section className="py-20 bg-gradient-to-r from-green-600/10 via-blue-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Monitoring Your Applications
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant visibility into your application performance with zero-code instrumentation.
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

export default APM;
