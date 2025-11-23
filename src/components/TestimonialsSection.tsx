import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import sendnowLogo from '@/assets/sendnow-logo.png';

const testimonials = [
  {
    quote:
      "ObsFly's eBPF-powered observability completely changed how we track system performance. Zero-overhead monitoring is a game changer for our fast-growing platform.",
    author: "David Miller",
    role: "VP of Engineering",
    company: "CloudForge",
    logo: "https://static.cdnlogo.com/logos/p/26/podcloud_800.png",
  },
  {
    quote:
      "The AI-driven insights helped us detect infrastructure bottlenecks before release. ObsFly has become an essential part of our deployment pipeline.",
    author: "Emily Chen",
    role: "Head of Platform Engineering",
    company: "DeployKit",
    logo: "https://static.cdnlogo.com/logos/o/67/omagari-akita.svg",
  },
  {
    quote:
      "Flawless integration with our AWS-based stack. Real-time metrics and automated root-cause analysis easily saved our team dozens of hours every month.",
    author: "Alex Cartner",
    role: "CEO & Co-Founder",
    company: "SendNow",
    logo:sendnowLogo ,
  },
  {
    quote:
      "ObsFly's unified metrics, logs, and traces approach gives us full visibility across our microservices. The dashboards are clean, powerful, and incredibly intuitive.",
    author: "Sarah Rodriguez",
    role: "SRE Lead",
    company: "PulseOps",
    logo:"https://static.cdnlogo.com/logos/p/99/pluseight.svg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-[#593a6d]  hover:bg-[#593a6d] text-white mb-6 border-primary/20 p-2">
            TRUSTED BY INDUSTRY LEADERS
          </Badge> 
         <h2 className="text-4xl md:text-5xl font-bold mb-4">
  Why <span className="bg-gradient-to-r from-[#593a6d] to-[#593a6f] bg-clip-text text-transparent">Top Companies</span> Choose ObsFly
</h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of engineering teams who trust ObsFly for their observability needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                {/* Company Logo */}
                <div className="mb-4 flex items-center justify-between">
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    className="h-8 w-auto object-contain"
                  />
                  <Quote className="w-8 h-8 text-[#593a6d]" />
                </div>

                {/* Quote */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-[#593a6d] font-medium mt-0.5">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>10,000+ Engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;