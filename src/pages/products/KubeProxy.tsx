import { motion } from 'framer-motion';
import { Repeat, Network, Cpu, CheckCircle2, Zap, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const KubeProxy = () => {
  const features = [
    {
      icon: Repeat,
      title: 'eBPF Service Routing',
      description: 'Replace kube-proxy with high-performance eBPF-based service load balancing',
    },
    {
      icon: Network,
      title: 'Direct Server Return',
      description: 'Optimize network paths with DSR for improved performance and reduced latency',
    },
    {
      icon: Cpu,
      title: 'Zero CPU Overhead',
      description: 'Kernel-level service routing eliminates CPU overhead of traditional kube-proxy',
    },
    {
      icon: Zap,
      title: 'Socket-Level LB',
      description: 'Socket-level load balancing for superior performance and connection handling',
    },
    {
      icon: TrendingUp,
      title: 'Maglev Hashing',
      description: 'Consistent hashing with Maglev algorithm for optimal backend distribution',
    },
    {
      icon: CheckCircle2,
      title: 'Native Integration',
      description: 'Seamless Kubernetes Service integration with automatic endpoint synchronization',
    },
  ];

  const capabilities = [
    {
      title: 'Superior Performance',
      description: 'eBPF-based replacement delivers 10x better performance than iptables kube-proxy',
      metrics: ['10x faster routing', 'Sub-microsecond latency', 'Millions of req/sec'],
    },
    {
      title: 'Advanced Features',
      description: 'Modern service routing with advanced load balancing algorithms and health checks',
      metrics: ['Maglev hashing', 'Health-based routing', 'Connection affinity'],
    },
    {
      title: 'Operational Excellence',
      description: 'Simplified operations with reduced resource usage and better scalability',
      metrics: ['Lower CPU usage', 'Faster updates', 'Better scalability'],
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
              <Repeat className="w-3 h-3 mr-2" />
              KUBE-PROXY REPLACEMENT
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              eBPF-Powered{' '}
              <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">
                Service Routing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Replace kube-proxy with high-performance eBPF-based service routing for 10x better
              performance, lower latency, and superior scalability in Kubernetes.
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
            <h2 className="text-4xl font-bold mb-4">Next-Generation Service Routing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern service routing that outperforms traditional kube-proxy
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-600/20 to-red-600/20 flex items-center justify-center mb-4">
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
          <h2 className="text-4xl font-bold text-center mb-16">Why Replace Kube-Proxy</h2>

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
      <section className="py-20 bg-gradient-to-r from-rose-600/10 via-red-600/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Upgrade Your Service Routing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Replace kube-proxy with eBPF for 10x better performance and lower resource usage.
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

export default KubeProxy;
