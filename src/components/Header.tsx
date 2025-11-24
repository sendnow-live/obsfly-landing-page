import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, Server, Database, FileText, BarChart3, Eye, Cpu, TestTube, Container, Sparkles, ChevronDown, Link2, MonitorSmartphone, Search, ShoppingBag, Landmark, Gamepad2, Laptop, Cloud, Network, Menu, X } from "lucide-react";
import ObsFlyLogo from './ObsFlyLogo';

const productCategories = [
  {
    title: "Infrastructure Monitoring",
    icon: Server,
    description: "Real-time host, VM, and system metrics with intelligent alerts",
    link: "/products/infrastructure"
  },
  {
    title: "Database Monitoring",
    icon: Database,
    description: "Deep query performance insights and database optimization guidance",
    link: "/products/database"
  },
  {
    title: "Log Monitoring",
    icon: FileText,
    description: "Centralized log collection, indexing, and lightning-fast search",
    link: "/products/logs"
  },
  {
    title: "APM",
    icon: BarChart3,
    description: "End-to-end application performance monitoring with distributed tracing",
    link: "/products/apm"
  },
  {
    title: "Real User Monitoring",
    icon: Eye,
    description: "Measure real user experiences, page performance, and session flows",
    link: "/products/rum"
  },
  {
    title: "Network Flow",
    icon: Network,
    description: "eBPF-powered network flow monitoring, analytics, and anomaly detection",
    link: "/products/network-flow"
  },
  {
    title: "Container Monitoring",
    icon: Container,
    description: "Live Kubernetes and container-level insights, performance, and health",
    link: "/products/container"
  },
  {
    title: "Runtime Security",
    icon: Sparkles,
    badge: "New",
    description: "Real-time eBPF-based threat detection, policy enforcement, and auto-mitigation",
    link: "/products/runtime-security"
  },
  {
    title: "Ingress Monitoring",
    icon: Cpu,
    description: "Kernel-level ingress traffic analysis with zero instrumentation overhead",
    link: "/products/ingress"
  }
];

const solutionsData = {
  useCases: [
    {
      title: "Frontend to Backend Correlation",
      icon: Link2,
      description: "End-to-end visibility across your entire stack",
      link: "#frontend-backend"
    },
    {
      title: "Digital Experience Monitoring",
      icon: MonitorSmartphone,
      description: "Optimize user experience with real insights",
      link: "#digital-experience"
    },
    {
      title: "Log Analysis and Correlation",
      icon: Search,
      description: "Centralized logging with intelligent correlation",
      link: "#log-analysis"
    }
  ],
  industries: [
    {
      title: "Retail & Commerce",
      icon: ShoppingBag,
      description: "Monitor customer journeys and transactions",
      link: "#retail"
    },
    {
      title: "Finance",
      icon: Landmark,
      description: "Secure and compliant observability solutions",
      link: "#finance"
    },
    {
      title: "Gaming",
      icon: Gamepad2,
      description: "Real-time performance for gaming platforms",
      link: "#gaming"
    },
    {
      title: "Technology",
      icon: Laptop,
      description: "Built for modern tech infrastructure",
      link: "#technology"
    }
  ],
  platforms: [
    {
      title: "AWS Monitoring",
      icon: Cloud,
      description: "Native AWS cloud monitoring and optimization",
      link: "#aws"
    },
    {
      title: "Google Cloud Platform",
      icon: Cloud,
      description: "Complete GCP observability solution",
      link: "#gcp"
    },
    {
      title: "Microsoft Azure",
      icon: Cloud,
      description: "Azure infrastructure monitoring at scale",
      link: "#azure"
    }
  ]
};

const Header = () => {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="mx-auto pl-4 md:pl-8 pr-4 md:pr-8 w-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <ObsFlyLogo size="md" animated={false} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProductDropdown(true)}
              onMouseLeave={() => setShowProductDropdown(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-[#593a6d] transition-colors">
                Product
                <ChevronDown className={`w-4 h-4 transition-transform ${showProductDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {showProductDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-muted-foreground mb-2">OBSERVABILITY PLATFORM</h3>
                      <p className="text-xs text-muted-foreground">Unified monitoring across your entire stack</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {productCategories.map((product, index) => (
                        <a
                          key={index}
                          href={product.link}
                          className="group p-4 rounded-lg hover:bg-muted/50 transition-all duration-200 border border-transparent hover:border-border"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-white text-[#593a6d] group-hover:bg-[#593a6d] group-hover:text-white transition-colors">
                              <product.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-sm font-semibold text-foreground group-hover:text-[#593a6d] transition-colors">
                                  {product.title}
                                </h4>
                                {product.badge && (
                                  <span className="px-2 py-0.5 text-[10px] font-medium bg-[#593a6d] text-white rounded-full">
                                    {product.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Observability Without Borders</h4>
                          <p className="text-xs text-muted-foreground">Boost productivity with unified monitoring</p>
                        </div>
                        <Button size="sm" className="bg-[#593a6d] hover:bg-[#593a6d] text-primary-foreground">
                          View All Features
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowSolutionsDropdown(true)}
              onMouseLeave={() => setShowSolutionsDropdown(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${showSolutionsDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Solutions Dropdown Menu */}
              {showSolutionsDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {/* Use Cases Column */}
                      <div>
                        <h3 className="text-xs font-semibold text-muted-foreground mb-4">USE CASES</h3>
                        <div className="space-y-2">
                          {solutionsData.useCases.map((useCase, index) => (
                            <a
                              key={index}
                              href={useCase.link}
                              className="group block p-3 rounded-lg hover:bg-muted/50 transition-all duration-200"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                  <useCase.icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors mb-0.5">
                                    {useCase.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground line-clamp-2">
                                    {useCase.description}
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Industries Column */}
                      <div>
                        <h3 className="text-xs font-semibold text-muted-foreground mb-4">INDUSTRIES</h3>
                        <div className="space-y-2">
                          {solutionsData.industries.map((industry, index) => (
                            <a
                              key={index}
                              href={industry.link}
                              className="group block p-3 rounded-lg hover:bg-muted/50 transition-all duration-200"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                  <industry.icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors mb-0.5">
                                    {industry.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground line-clamp-2">
                                    {industry.description}
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Cloud Platforms Column */}
                      <div>
                        <h3 className="text-xs font-semibold text-muted-foreground mb-4">CLOUD PLATFORMS</h3>
                        <div className="space-y-2">
                          {solutionsData.platforms.map((platform, index) => (
                            <a
                              key={index}
                              href={platform.link}
                              className="group block p-3 rounded-lg hover:bg-muted/50 transition-all duration-200"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-1.5 rounded-md bg-green-500/10 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                  <platform.icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors mb-0.5">
                                    {platform.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground line-clamp-2">
                                    {platform.description}
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Solutions for Every Team</h4>
                          <p className="text-xs text-muted-foreground">Tailored observability for your industry</p>
                        </div>
                        <Button size="sm" variant="outline" className="border-border hover:bg-muted">
                          Explore All Solutions
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="docs" className="text-foreground hover:text-primary transition-colors">
              Docs
            </a>
            <a href="/blogs" className="text-foreground hover:text-primary transition-colors">
              Blogs
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button style={{backgroundColor:'white', color:'black', border:'1px solid black'}}>
                Log In
              </Button>
            </Link>
            <Link to="/get-started">
              <Button className="bg-[#522b6c] text-primary-foreground">
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="px-4 py-4 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Product Section */}
            <div>
              <button
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
                className="flex items-center justify-between w-full text-left text-foreground font-medium py-2"
              >
                Product
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProductOpen && (
                <div className="pl-4 mt-2 space-y-3">
                  {productCategories.map((product, index) => (
                    <a
                      key={index}
                      href={product.link}
                      className="block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[#593a6d]/10 text-[#593a6d]">
                          <product.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-foreground">{product.title}</h4>
                            {product.badge && (
                              <span className="px-2 py-0.5 text-[10px] font-medium bg-[#593a6d] text-white rounded-full">
                                {product.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{product.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Section */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="flex items-center justify-between w-full text-left text-foreground font-medium py-2"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-4 mt-2 space-y-4">
                  <div>
                    <h3 className="text-xs font-semibold text-muted-foreground mb-2">USE CASES</h3>
                    {solutionsData.useCases.map((useCase, index) => (
                      <a
                        key={index}
                        href={useCase.link}
                        className="block py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-start gap-2">
                          <useCase.icon className="w-4 h-4 text-blue-600 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-foreground">{useCase.title}</h4>
                            <p className="text-xs text-muted-foreground">{useCase.description}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-muted-foreground mb-2">INDUSTRIES</h3>
                    {solutionsData.industries.map((industry, index) => (
                      <a
                        key={index}
                        href={industry.link}
                        className="block py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-start gap-2">
                          <industry.icon className="w-4 h-4 text-purple-600 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-foreground">{industry.title}</h4>
                            <p className="text-xs text-muted-foreground">{industry.description}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            <a
              href="/pricing"
              className="block text-foreground font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="/docs"
              className="block text-foreground font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </a>
            <a
              href="/blogs"
              className="block text-foreground font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </a>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-border">
              <Link to="/login" className="block" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full" style={{backgroundColor:'white', color:'black', border:'1px solid black'}}>
                  Log In
                </Button>
              </Link>
              <Link to="/get-started" className="block" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#522b6c] text-primary-foreground">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
