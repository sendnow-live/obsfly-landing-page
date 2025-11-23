// Updated React page with Coroot replaced by ObsFly Agent
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Download, Settings, Terminal, CheckCircle, Copy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Docs = () => {
  useEffect(() => {
    document.title = "Documentation - ObsFly Observability Platform";
  }, []);

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sidebarSections = [
    {
      title: 'Getting Started',
      items: ['Quick Start', 'Installation', 'Configuration', 'First Dashboard'],
    },
    {
      title: 'Agent Setup',
      items: ['obsfly-node-agent', 'System Requirements', 'Advanced Configuration'],
    },
    {
      title: 'Integrations',
      items: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'Azure'],
    },
    {
      title: 'API Reference',
      items: ['REST API', 'GraphQL', 'WebSocket'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-[250px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {sidebarSections.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-sm text-foreground mb-3 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl font-bold mb-4">Documentation</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Complete guide to installing and configuring ObsFly
              </p>

              {/* ObsFly Enterprise Edition Install */}
              <section id="enterprise" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">ObsFly Enterprise Edition</h2>
                <p className="text-muted-foreground mb-4">This guide provides a quick overview of launching ObsFly Enterprise Edition with default options.</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{`# Install ObsFly Enterprise
curl -sfL https://raw.githubusercontent.com/obsfly/obsfly/main/deploy/install.sh | \
  LICENSE_KEY="OBSFLY-LICENSE-KEY-HERE" \
  BOOTSTRAP_PROMETHEUS_URL="http://127.0.0.1:9090" \
  BOOTSTRAP_REFRESH_INTERVAL=15s \
  BOOTSTRAP_CLICKHOUSE_ADDRESS=127.0.0.1:9000 \
  sh -

# Install obsfly-node-agent on every node
curl -sfL https://raw.githubusercontent.com/obsfly/obsfly-node-agent/main/install.sh | \
  COLLECTOR_ENDPOINT=http://OBSFLY_NODE_IP:8080 \
  SCRAPE_INTERVAL=15s \
  sh -

# Access ObsFly UI
http://OBSFLY_NODE_IP:8080`}</code></pre>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Helm Installation</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{`helm repo add obsfly https://obsfly.github.io/helm-charts
helm repo update obsfly

helm install -n obsfly --create-namespace obsfly-operator obsfly/obsfly-operator

helm install -n obsfly obsfly obsfly/obsfly-ee \
  --set "licenseKey=OBSFLY-LICENSE-KEY-HERE,clickhouse.shards=2,clickhouse.replicas=2"

kubectl port-forward -n obsfly service/obsfly-obsfly 8080:8080
# Access UI at:
http://localhost:8080`}</code></pre>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Requirements & Supported Environments</h3>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Minimum Linux kernel 5.1+</li>
                  <li>CO-RE based profiling supported on Ubuntu 20.10+, Debian 11+, RHEL 8.2+</li>
                  <li>Supports Kubernetes, Docker, Containerd, CRI-O, Systemd services</li>
                  <li>Not supported: Docker-in-Docker (e.g., Minikube), WSL1</li>
                </ul>
              </section>

              {/* Quick Start */}
              <section id="quick-start" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Book className="w-8 h-8 text-primary" />
                  Quick Start
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get started with ObsFly in less than 5 minutes. Our eBPF-powered agent requires no code changes and minimal configuration.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <Card>
                    <CardHeader>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-2">1</div>
                      <CardTitle className="text-lg">Install Agent</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Deploy obsfly-node-agent on your hosts</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold mb-2">2</div>
                      <CardTitle className="text-lg">Configure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Set up your monitoring targets</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mb-2">3</div>
                      <CardTitle className="text-lg">Monitor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">View real-time insights in your dashboard</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Installation */}
              <section id="installation" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Download className="w-8 h-8 text-primary" />
                  Installing obsfly-node-agent
                </h2>

                <Tabs defaultValue="linux" className="mb-6">
                  <TabsList>
                    <TabsTrigger value="linux">Linux</TabsTrigger>
                    <TabsTrigger value="docker">Docker</TabsTrigger>
                    <TabsTrigger value="kubernetes">Kubernetes</TabsTrigger>
                  </TabsList>

                  <TabsContent value="linux" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>System Requirements</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Linux kernel 4.4+ (5.10+ recommended)</li>
                          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Node.js 16+ or compatible runtime</li>
                          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> 512MB RAM minimum (1GB recommended)</li>
                          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Root or CAP_BPF capabilities</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Terminal className="w-5 h-5" /> Installation via Package</CardTitle>
                        <CardDescription>Install the agent with package</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`# Using curl
curl -sfL https://raw.githubusercontent.com/obsfly/obsfly/main/deploy/install.sh | \
  LICENSE_KEY="OBSFLY-LICENSE-KEY-HERE" \
  BOOTSTRAP_PROMETHEUS_URL="http://127.0.0.1:9090" \
  BOOTSTRAP_REFRESH_INTERVAL=15s \
  BOOTSTRAP_CLICKHOUSE_ADDRESS=127.0.0.1:9000 \
  sh -

# Install obsfly-node-agent on every node
curl -sfL https://raw.githubusercontent.com/obsfly/obsfly-node-agent/main/install.sh | \
  COLLECTOR_ENDPOINT=http://OBSFLY_NODE_IP:8080 \
  SCRAPE_INTERVAL=15s \
  sh -

# Verify installation
obsfly-agent --version`}</code>
                          </pre>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-2 right-2"
                            onClick={() => copyToClipboard('npm install -g obsfly-node-agent')}
                          >
                            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Settings className="w-5 h-5" /> Configuration</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">1. Initialize Configuration</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{`obsfly-agent init`}</code></pre>
                          <p className="text-sm text-muted-foreground mt-2">This creates a config file at <code className="bg-muted px-1 rounded">/etc/obsfly/config.yaml</code></p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">2. Configure API Endpoint</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{`# config.yaml
endpoint: https://api.obsfly.io
api_key: your-api-key-here

tags:
  environment: production
  region: us-east-1`}</code></pre>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">3. Start the Agent</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{`sudo systemctl start obsfly-agent
sudo systemctl enable obsfly-agent

obsfly-agent start --foreground`}</code></pre>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">4. Verify Agent Status</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{`obsfly-agent status`}</code></pre>
                        </div>
                      </CardContent>
                    </Card> */}
                  </TabsContent>

                  <TabsContent value="docker" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Docker Installation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{`docker run -d \
  --name obsfly-agent \
  --privileged \
  --pid=host \
  --network=host \
  -v /sys/kernel/debug:/sys/kernel/debug \
  -e OBSFLY_API_KEY=your-api-key \
  -e OBSFLY_ENDPOINT=https://api.obsfly.io \
  obsfly/node-agent:latest`}</code></pre>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="kubernetes" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Kubernetes DaemonSet</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{`kubectl apply -f https://obsfly.io/k8s/daemonset.yaml

helm repo add obsfly https://charts.obsfly.io
helm install obsfly-agent obsfly/obsfly-agent \
  --set apiKey=your-api-key \
  --set endpoint=https://api.obsfly.io`}</code></pre>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Advanced Configuration */}
              {/* <section id="advanced-configuration" className="mb-16"> */}
              {/* <h2 className="text-3xl font-bold mb-6">Advanced Configuration</h2> */}
              {/* 
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Monitoring Targets</CardTitle>
                    <CardDescription>Configure which services and processes to monitor</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{`monitors:
  - type: process
    name: "nginx"
    enabled: true

  - type: network
    interface: "eth0"
    capture_dns: true

  - type: database
    driver: "postgres"
    connection: "postgresql://localhost:5432"

  - type: custom
    ebpf_program: "/path/to/custom.bpf.o"`}</code></pre>
                  </CardContent>
                </Card> */}

              {/* <Card>
                  <CardHeader>
                    <CardTitle>Performance Tuning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{`performance:
  buffer_size: 8192
  sampling_rate: 100
  batch_size: 100
  flush_interval: 1000`}</code></pre>
                  </CardContent>
                </Card> */}
              {/* </section> */}

              {/* Next Steps */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle>View Dashboard</CardTitle>
                      <CardDescription>Access real-time metrics and visualizations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">Open Dashboard</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle>API Documentation</CardTitle>
                      <CardDescription>Integrate with your existing tools</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">View API Docs</Button>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </motion.div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Docs;
