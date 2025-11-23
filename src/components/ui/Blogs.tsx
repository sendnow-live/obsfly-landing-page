import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding eBPF: The Future of Linux Kernel Programming",
    excerpt: "Explore how eBPF technology is revolutionizing system observability and security by enabling safe, efficient programs to run in the kernel space.",
    category: "eBPF Fundamentals",
    date: "Nov 20, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    author: {
      name: "Sarah Chen",
      role: "Platform Engineering Lead"
    }
  },
  {
    id: 2,
    title: "Building Real-Time Network Monitoring with XDP",
    excerpt: "Learn how to leverage XDP for high-performance packet processing and create powerful network monitoring solutions at line rate.",
    category: "Network Monitoring",
    date: "Nov 18, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    author: {
      name: "Michael Zhang",
      role: "Network Architect"
    }
  },
  {
    id: 3,
    title: "Implementing Zero-Trust Security in Kubernetes",
    excerpt: "Discover practical approaches to implementing zero-trust security models in Kubernetes using eBPF-based runtime policies and continuous verification.",
    category: "Security",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    author: {
      name: "David Kumar",
      role: "Security Engineer"
    }
  },
  {
    id: 4,
    title: "Database Query Optimization with Kernel Tracing",
    excerpt: "Master database performance optimization by using kernel-level tracing to identify bottlenecks and optimize query execution paths.",
    category: "Database Performance",
    date: "Nov 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    author: {
      name: "Emily Rodriguez",
      role: "Database Architect"
    }
  },
  {
    id: 5,
    title: "Service Mesh Observability Without Sidecars",
    excerpt: "Achieve comprehensive service mesh observability using eBPF without the overhead and complexity of traditional sidecar proxies.",
    category: "Service Mesh",
    date: "Nov 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    author: {
      name: "Alex Thompson",
      role: "Cloud Native Architect"
    }
  },
  {
    id: 6,
    title: "Distributed Tracing at Scale with eBPF",
    excerpt: "Implement high-performance distributed tracing across your microservices architecture using eBPF-based instrumentation techniques.",
    category: "Distributed Systems",
    date: "Nov 8, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    author: {
      name: "James Wilson",
      role: "SRE Lead"
    }
  },
  {
    id: 7,
    title: "Container Runtime Security Best Practices",
    excerpt: "Learn essential security practices for container runtimes, from image scanning to runtime threat detection using kernel-level monitoring.",
    category: "Container Security",
    date: "Nov 5, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    author: {
      name: "Rachel Kim",
      role: "Security Researcher"
    }
  },
  {
    id: 8,
    title: "Performance Tuning Linux Networks for High Throughput",
    excerpt: "Optimize your Linux network stack for maximum throughput and minimum latency using advanced kernel tuning and eBPF acceleration.",
    category: "Performance",
    date: "Nov 3, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
    author: {
      name: "Tom Anderson",
      role: "Performance Engineer"
    }
  }
];

const BlogSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (blogId: number) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <>
    <Header/>
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#593a6d]/10 text-[#593a6d] mb-6 border-[#593a6d]/20 text-sm px-4 py-2">
            LATEST INSIGHTS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From the <span className="text-[#593a6d]">ObsFly</span> Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical deep dives, best practices, and insights from our engineering team
          </p>
        </div>

        {/* Blog Cards Grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group bg-card border border-border hover:shadow-2xl hover:border-[#593a6d]/50 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-[#593a6d]/90 backdrop-blur-sm text-white text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-[#593a6d] transition-colors line-clamp-2 min-h-[3rem]">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <div>
                    <p className="text-xs font-semibold text-foreground">{post.author.name}</p>
                    <p className="text-[10px] text-muted-foreground">{post.author.role}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#593a6d] hover:text-[#593a6d] hover:bg-[#593a6d]/10 gap-1 text-xs h-8 px-3"
                    onClick={() => handleReadMore(post.id)}
                  >
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-[#593a6d]/50 text-[#593a6d] hover:bg-[#593a6d] hover:text-white hover:border-[#593a6d]"
            onClick={() => navigate('/blog')}
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default BlogSection;