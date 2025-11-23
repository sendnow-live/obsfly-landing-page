import { motion } from 'framer-motion';
import { Shield, AlertCircle, Eye, CheckCircle2, Lock, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const RuntimeSecurity = () => {
  const features = [
    {
      icon: Shield,
      title: 'Runtime Threat Detection',
      description: 'Real-time detection of malicious activities and security threats at runtime',
    },
    {
      icon: AlertCircle,
      title: 'Anomaly Detection',
      description: 'AI-powered anomaly detection identifies unusual behavior and potential attacks',
    },
    {
      icon: Eye,
      title: 'Process Monitoring',
      description: 'Comprehensive process-level monitoring with execution tracking and lineage',
    },
    {
      icon: Lock,
      title: 'System Call Filtering',
      description: 'Monitor and filter system calls to detect and prevent malicious activities',
    },
    {
      icon: Activity,
      title: 'File Integrity Monitoring',
      description: 'Track file access and modifications to detect unauthorized changes',
    },
    {
      icon: CheckCircle2,
      title: 'Compliance & Auditing',
      description: 'Meet compliance requirements with comprehensive audit trails and reporting',
    },
  ];

  const capabilities = [
    {
      title: 'eBPF-Powered Detection',
      description: 'Kernel-level visibility with eBPF for deep runtime security insights',
      metrics: ['Zero overhead', 'Complete visibility', 'No agent required'],
    },
    {
      title: 'Threat Intelligence',
      description: 'Leverage threat intelligence and behavioral analysis for proactive security',
      metrics: ['Known attack patterns', 'Zero-day detection', 'Automated response'],
    },
    {
      title: 'Incident Response',
      description: 'Rapid incident detection, investigation, and automated remediation',
      metrics: ['Real-time alerts', 'Forensic analysis', 'Auto-remediation'],
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
              <Shield className="w-3 h-3 mr-2" />
              RUNTIME SECURITY
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advanced{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Runtime Protection
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Protect your applications at runtime with eBPF-powered threat detection, process
              monitoring, and AI-driven anomaly detection for comprehensive security.
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
            <h2 className="text-4xl font-bold mb-4">Complete Runtime Security Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Detect and prevent threats in real-time with comprehensive monitoring
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600/20 to-red-600/20 flex items-center justify-center mb-4">
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
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose ObsFly Runtime Security</h2>

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
      <section className="py-20 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your Runtime?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deploy advanced runtime security with eBPF-powered threat detection and monitoring.
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

export default RuntimeSecurity;
