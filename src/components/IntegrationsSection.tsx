import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ObsFlyLogo from "./ObsFlyLogo";

const integrations = [
  {
    name: "AWS",
    category: "Cloud Provider",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6UuWb2GtonTAVAZ3NBuMTHIPTg1DLtSL3LlfFoeNFw94cJJiRFz-38E&s",
  },
  {
    name: "Kubernetes",
    category: "Orchestration",
    logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
  },
  {
    name: "Docker",
    category: "Container",
    logo: "https://cdn.simpleicons.org/docker/2496ED",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    logo: "https://cdn.simpleicons.org/postgresql/4169E1",
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    name: "Redis",
    category: "Cache",
    logo: "https://cdn.simpleicons.org/redis/DC382D",
  },
  {
    name: "Nginx",
    category: "Web Server",
    logo: "https://cdn.simpleicons.org/nginx/009639",
  },
  {
    name: "Apache",
    category: "Web Server",
    logo: "https://cdn.simpleicons.org/apache/D22128",
  },
  {
    name: "Jenkins",
    category: "CI/CD",
    logo: "https://cdn.simpleicons.org/jenkins/D24939",
  },
  {
    name: "GitHub",
    category: "Version Control",
    logo: "https://cdn.simpleicons.org/github/181717",
  },
  {
    name: "Node.js",
    category: "Runtime",
    logo: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "Python",
    category: "Language",
    logo: "https://cdn.simpleicons.org/python/3776AB",
  },
  {
    name: "Java",
    category: "Language",
    logo: "https://cdn.simpleicons.org/openjdk/000000",
  },
  {
    name: "Go",
    category: "Language",
    logo: "https://cdn.simpleicons.org/go/00ADD8",
  },
  {
    name: "Prometheus",
    category: "Monitoring",
    logo: "https://cdn.simpleicons.org/prometheus/E6522C",
  },
  {
    name: "Grafana",
    category: "Visualization",
    logo: "https://cdn.simpleicons.org/grafana/F46800",
  },
  {
    name: "Elasticsearch",
    category: "Search Engine",
    logo: "https://cdn.simpleicons.org/elasticsearch/005571",
  },
  {
    name: "MySQL",
    category: "Database",
    logo: "https://cdn.simpleicons.org/mysql/4479A1",
  },
  {
    name: "RabbitMQ",
    category: "Message Queue",
    logo: "https://cdn.simpleicons.org/rabbitmq/FF6600",
  },
  {
    name: "Kafka",
    category: "Streaming",
    logo: "https://cdn.simpleicons.org/apachekafka/231F20",
  },
  {
    name: "Azure",
    category: "Cloud Provider",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVTSDUI6ORj63sfV3zT4mst4DpZA9fRqsiM3UMq4qijxiN8KpLD4Cb4Fnw1b3b7HvHtQ&usqp=CAU",
  },
  {
    name: "GCP",
    category: "Cloud Provider",
    logo: "https://cdn.simpleicons.org/googlecloud/4285F4",
  },
  {
    name: "Terraform",
    category: "IaC",
    logo: "https://cdn.simpleicons.org/terraform/7B42BC",
  },
  {
    name: "Ansible",
    category: "Automation",
    logo: "https://cdn.simpleicons.org/ansible/EE0000",
  },
  {
    name: "Datadog",
    category: "Monitoring",
    logo: "https://cdn.simpleicons.org/datadog/632CA6",
  },
  {
    name: "New Relic",
    category: "APM",
    logo: "https://cdn.simpleicons.org/newrelic/008C99",
  },
  {
    name: "Splunk",
    category: "Analytics",
    logo: "https://cdn.simpleicons.org/splunk/000000",
  },
  {
    name: "OpenTelemetry",
    category: "Observability",
    logo: "https://cdn.simpleicons.org/opentelemetry/000000",
  },
  {
    name: "GitLab",
    category: "CI/CD",
    logo: "https://cdn.simpleicons.org/gitlab/FC6D26",
  },
  {
    name: "React",
    category: "Frontend",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Angular",
    category: "Frontend",
    logo: "https://cdn.simpleicons.org/angular/DD0031",
  },
  {
    name: "Vue.js",
    category: "Frontend",
    logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
  },
  {
    name: "Django",
    category: "Framework",
    logo: "https://cdn.simpleicons.org/django/092E20",
  },
  {
    name: "Flask",
    category: "Framework",
    logo: "https://cdn.simpleicons.org/flask/000000",
  },
  {
    name: "Spring Boot",
    category: "Framework",
    logo: "https://cdn.simpleicons.org/springboot/6DB33F",
  },
  {
    name: ".NET",
    category: "Framework",
    logo: "https://cdn.simpleicons.org/dotnet/512BD4",
  },
];

export default function IntegrationsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100">
            200+ Integrations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seamless Integration with Your Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with your existing tools and infrastructure in minutes.
            Native OpenTelemetry support ensures compatibility with your entire ecosystem.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white group shadow-lg"
          >
            Explore All Integrations
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Integration Cards Grid */}
       {/* Central Hub Design */}
        {/* Central Hub Design */}
      {/* Central Hub Design */}
       {/* Central Hub Design */}
       {/* Central Hub Design */}
        <div className="relative flex items-center justify-center mb-16 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          {/* Center Logo */}
          <div className="absolute z-10 flex items-center justify-center">
            <ObsFlyLogo className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24" />
          </div>

          {/* Language Integrations in Circular Layout */}
          {integrations
            .filter((i) => i.category === "Language" || i.category === "Runtime" || i.category === "Frontend" || i.category === "Framework")
            .map((integration, index, arr) => {
              const angle = (index * 360) / arr.length;
              // Responsive radius - smaller on mobile
              const radius = 120; // Fixed smaller radius for mobile
              const arrowLength = 70;
              
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className="absolute group"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {/* Arrow pointing to center */}
                  <div
                    className="absolute left-1/2 top-1/2 h-0.5 origin-left"
                    style={{
                      width: `${arrowLength}px`,
                      transform: `rotate(${angle + 180}deg) translateY(-50%)`,
                      background: 'linear-gradient(to left, #593a6d, transparent)',
                    }}
                  />

                  {/* Integration Logo */}
                  <img
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 object-contain hover:scale-125 transition-transform cursor-pointer"
                  />
                </div>
              );
            })}
        </div>
        {/* Features Section */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">OpenTelemetry Native</h3>
                <p className="text-sm text-gray-600">
                  Built on open standards for maximum compatibility and flexibility.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Zero Code Changes</h3>
                <p className="text-sm text-gray-600">
                  Auto-instrumentation means you can start monitoring without modifying your code.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Auto-Discovery</h3>
                <p className="text-sm text-gray-600">
                  Automatically detect and configure integrations in your environment.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              Can't find your tool? We add new integrations every week.{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Request a custom integration
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
