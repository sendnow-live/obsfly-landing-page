import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, MessageSquare, Mail, MapPin } from 'lucide-react';
import ObsFlyLogo from './ObsFlyLogo';
import { Badge } from "@/components/ui/badge";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Features", href: "/product" },
      { name: "Pricing", href: "/pricing" },
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/docs/api" },
      { name: "eBPF Monitoring", href: "/product#ebpf" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Getting Started", href: "/docs" },
      { name: "eBPF Guide", href: "/docs/ebpf" },
      { name: "Community", href: "/community" },
      { name: "Support", href: "/support" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Security", href: "/security" },
      { name: "GDPR", href: "/gdpr" },
    ],
  },
};

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/obsfly' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/obsfly' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/obsfly' },
  { name: 'Discord', icon: MessageSquare, href: 'https://discord.gg/obsfly' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/20 pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <ObsFlyLogo size="md" animated={false} />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Observability that flies at eBPF speed. Real-time infrastructure insights with zero overhead.
            </p>

            {/* Contact Information */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:contact@obsfly.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#593a6d] transition-colors group"
              >
                <div className="p-1.5 rounded-md bg-white text-[#593a6d] group-hover:bg-[#593a6d] group-hover:text-white transition-colors">
                  <Mail size={14} />
                </div>
                <span>contact@obsfly.com</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="p-1.5 rounded-md bg-muted/50">
                  <MapPin size={14} />
                </div>
                <span>California, US</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} ObsFly. All rights reserved.
              </p>
            </div>

            {/* Compliance badges */}
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-muted/50 border-border">
                GDPR Compliant
              </Badge>
              <Badge variant="outline" className="bg-muted/50 border-border">
                SOC 2 Certified
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground">
              Built with{' '}
              <span className="text-primary font-semibold">eBPF</span>
              {' '}and{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">observability magic</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;