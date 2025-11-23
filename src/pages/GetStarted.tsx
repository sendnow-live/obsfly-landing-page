import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Github, Mail } from "lucide-react";

const GetStarted = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
            <Header />

            <main className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[100px]" />
                    <div className="absolute bottom-[10%] left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[100px]" />
                </div>

                <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left Column: Value Prop */}
                    <div className="hidden lg:block space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                                Start monitoring your stack in <span className="text-primary">minutes</span>
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Join thousands of developers who trust ObsFly for real-time observability, security, and performance insights.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Full-stack observability with zero config",
                                "eBPF-powered security and networking",
                                "Unlimited logs and metrics retention",
                                "Customizable dashboards and alerts"
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-accent" />
                                    <span className="text-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium">
                                            U{i}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">4.9/5</span> from 1000+ reviews
                                </div>
                            </div>
                            <p className="text-sm italic text-muted-foreground">
                                "ObsFly transformed how we debug production issues. It's like having X-ray vision for our infrastructure."
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Sign Up Form */}
                    <div className="w-full max-w-md mx-auto lg:ml-auto">
                        <div className="bg-card border border-border rounded-2xl shadow-card p-8">
                            <div className="mb-8 text-center lg:text-left">
                                <h2 className="text-2xl font-bold text-foreground">Create your free account</h2>
                                <p className="text-sm text-muted-foreground mt-2">No credit card required. 14-day free trial.</p>
                            </div>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First name</Label>
                                        <Input id="firstName" required placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last name</Label>
                                        <Input id="lastName" required placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Work email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="name@company.com"
                                            className="pl-10"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">Company name</Label>
                                    <Input id="company" required placeholder="Acme Inc." />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        placeholder="Create a strong password"
                                        minLength={8}
                                    />
                                </div>

                                <div className="flex items-start gap-2">
                                    <Checkbox id="terms" className="mt-1" required />
                                    <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight">
                                        I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                                    </label>
                                </div>

                                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>

                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-border" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-card px-2 text-muted-foreground">Or sign up with</span>
                                    </div>
                                </div>

                                <Button variant="outline" className="w-full">
                                    <Github className="mr-2 h-4 w-4" />
                                    Sign up with GitHub
                                </Button>
                            </form>
                        </div>

                        <p className="text-center text-sm text-muted-foreground mt-6">
                            Already have an account?{" "}
                            <Link to="/login" className="font-medium text-primary hover:text-primary/90">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default GetStarted;
