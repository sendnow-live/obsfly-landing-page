import React, { useState, Fragment, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Switch } from './switch';
import Header from '../Header';
import Footer from '../Footer';

const PricingPage = () => {
  useEffect(() => {
    document.title = "Pricing - ObsFly Observability Platform";
  }, []);

  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: 'Free',
      monthlyPrice: 0,
      yearlyPrice: 0,
      subtitle: 'Start exploring for free',
      deploymentMode: 'Self-managed',
      buttonText: 'Start Free',
      buttonVariant: 'outline',
      features: [
        'One cluster limit',
        'Up to 3 users',
        'Slack community support'
      ]
    },
    {
      name: 'Team',
      monthlyPrice: 20,
      yearlyPrice: 16,
      priceUnit: '/ host / month',
      subtitle: 'For small teams who like to move fast',
      deploymentMode: 'Self-managed',
      buttonText: 'Get started',
      buttonVariant: 'default',
      popular: true,
      features: [
        'Unlimited clusters',
        'Unlimited users',
        'Up to 100 hosts',
        'Standard support →'
      ]
    },
    {
      name: 'Enterprise',
      monthlyPrice: 30,
      yearlyPrice: 24,
      priceUnit: '/ host / month',
      subtitle: 'For orgs in need of reliability at scale',
      deploymentMode: 'BYOC (Bring Your Own Cloud)',
      buttonText: 'Get in touch',
      buttonVariant: 'default',
      features: [
        'Everything in Team plan, plus:',
        'Guaranteed uptime SLA',
        'SSO & RBAC',
        'Unlimited hosts',
        'All available integrations',
        'Multi-cluster view',
        'Premium support →'
      ]
    },
    {
      name: 'On-Premise',
      monthlyPrice: 50,
      yearlyPrice: 40,
      priceUnit: '/ host / month',
      subtitle: 'Designed for high-compliance or regulated environments',
      deploymentMode: 'Full On-Prem',
      buttonText: 'Contact Us',
      buttonVariant: 'outline',
      features: [
        'Everything in Enterprise plan, plus:',
        'Self-hosted backend',
        'Self-hosted UI',
        'Isolated authentication'
      ]
    }
  ];

  const comparisonFeatures = [
    {
      category: 'Core Features',
      items: [
        {
          feature: 'Clusters',
          free: '1',
          team: 'Unlimited',
          enterprise: 'Unlimited',
          onPrem: 'Unlimited'
        },
        {
          feature: 'Users',
          free: '3',
          team: 'Unlimited',
          enterprise: 'Unlimited',
          onPrem: 'Unlimited'
        },
        {
          feature: 'Data Retention',
          free: '7 days',
          team: '30 days',
          enterprise: '90 days',
          onPrem: 'Custom'
        },
        {
          feature: 'Metrics Ingestion',
          free: '1M/day',
          team: '100M/day',
          enterprise: 'Unlimited',
          onPrem: 'Unlimited'
        },
      ]
    },
    {
      category: 'Deployment & Infrastructure',
      items: [
        {
          feature: 'Deployment Type',
          free: 'Self-managed',
          team: 'Self-managed',
          enterprise: 'BYOC',
          onPrem: 'Full On-Prem'
        },
        {
          feature: 'High Availability',
          free: '—',
          team: '✓',
          enterprise: '✓',
          onPrem: '✓'
        },
        {
          feature: 'Multi-region',
          free: '—',
          team: '—',
          enterprise: '✓',
          onPrem: '✓'
        },
        {
          feature: 'Custom Backup',
          free: '—',
          team: '—',
          enterprise: '✓',
          onPrem: '✓'
        },
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        {
          feature: 'SSO Integration',
          free: '—',
          team: '—',
          enterprise: '✓',
          onPrem: '✓'
        },
        {
          feature: 'RBAC',
          free: 'Basic',
          team: 'Advanced',
          enterprise: 'Enterprise',
          onPrem: 'Enterprise'
        },
        {
          feature: 'Audit Logs',
          free: '—',
          team: '30 days',
          enterprise: '1 year',
          onPrem: 'Unlimited'
        },
        {
          feature: 'SOC 2 Compliance',
          free: '—',
          team: '—',
          enterprise: '✓',
          onPrem: '✓'
        },
      ]
    },
    {
      category: 'Support & SLA',
      items: [
        {
          feature: 'Support Level',
          free: 'Community',
          team: 'Standard',
          enterprise: 'Premium',
          onPrem: 'Dedicated'
        },
        {
          feature: 'Response Time',
          free: 'Best effort',
          team: '24 hours',
          enterprise: '4 hours',
          onPrem: '1 hour'
        },
        {
          feature: 'Uptime SLA',
          free: '—',
          team: '99%',
          enterprise: '99.9%',
          onPrem: '99.99%'
        },
        {
          feature: 'Dedicated CSM',
          free: '—',
          team: '—',
          enterprise: '✓',
          onPrem: '✓'
        },
      ]
    },
  ];

  // Animation variants for smooth transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Helper function to get plan data for card view
  const getPlanFeatures = (planName) => {
    const planData = {
      free: [],
      team: [],
      enterprise: [],
      onPrem: []
    };

    comparisonFeatures.forEach(category => {
      category.items.forEach(item => {
        planData.free.push({ feature: item.feature, value: item.free, category: category.category });
        planData.team.push({ feature: item.feature, value: item.team, category: category.category });
        planData.enterprise.push({ feature: item.feature, value: item.enterprise, category: category.category });
        planData.onPrem.push({ feature: item.feature, value: item.onPrem, category: category.category });
      });
    });

    return planData[planName.toLowerCase().replace('-', '')];
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Component */}
      <Header />

      {/* Hero Section with animated elements */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-[#593a6d] border border-[#593a6d] px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white  font-semibold text-sm">Transparent Pricing</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">
            Simple, Transparent Pricing
          </span>
          <br />
          <span className="text-[#593a6d]">
            for Modern Observability
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          ObsFly gives you full-stack observability with flexible deployment options that scale with your infrastructure.
        </motion.p>

        {/* Billing Toggle Switch */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <span className={`text-lg font-semibold transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <div >
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:!bg-[##593a6d] bg-[##593a6d]"
            />
          </div>
          <span className={`text-lg font-semibold transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            Yearly
          </span>
          {isYearly && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-3 py-1 rounded-full text-green-500 text-sm font-bold shadow-lg"
            >
              Save 20%
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Pricing Cards Section */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 pb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pricingPlans.map((plan, idx) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div
                  variants={cardVariants}
                  className="relative h-full"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-[#593a6d] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <Card className={`
                    relative overflow-hidden h-full flex flex-col
                    bg-card/50 backdrop-blur-xl
                    border-2 transition-all duration-300
                    ${plan.popular
                      ? 'border-[#593a6d] shadow-[0_0_30px_-5px_rgba(89,58,109,0.3)] hover:shadow-[0_0_40px_-5px_rgba(89,58,109,0.5)]'
                      : 'border-border hover:border-[#593a6d] hover:shadow-[0_0_20px_-5px_rgba(89,58,109,0.2)]'
                    }
                    group
                  `}>
                    {/* Solid color glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#593a6d]/5"></div>

                    {/* Glowing border for popular plan */}
                    {plan.popular && (
                      <div className="absolute -inset-[1px] bg-[#593a6d]/20 rounded-lg opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                    )}

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">{plan.subtitle}</CardDescription>

                      {/* Deployment Mode Badge */}
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 bg-muted/50 border border-border rounded-full text-xs text-muted-foreground font-medium">
                          {plan.deploymentMode}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 flex-1">
                      {/* Price Display */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className={`text-5xl font-bold ${plan.popular
                              ? 'text-[#593a6d]'
                              : 'text-foreground'
                            }`}>
                            ${price}
                          </span>
                          {plan.priceUnit && (
                            <span className="text-muted-foreground text-sm font-medium">{plan.priceUnit}</span>
                          )}
                        </div>
                        {isYearly && price > 0 && (
                          <p className="text-[#593a6d] text-sm mt-2 font-semibold flex items-center gap-1">
                            <span className="text-lg">💰</span> Save ${plan.monthlyPrice - plan.yearlyPrice}/host/month
                          </p>
                        )}
                      </div>

                      {/* Features List */}
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#593a6d]/10 border border-[#593a6d]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-[#593a6d]" strokeWidth={3} />
                            </div>
                            <span className="text-foreground/90 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="relative z-10">
                      <Button
                        variant={plan.buttonVariant}
                        className={`w-full font-semibold transition-all duration-300 ${plan.buttonVariant === 'default'
                          ? 'bg-[#593a6d] hover:bg-[#6b4a7f] text-white border-0 shadow-lg shadow-[#593a6d]/30 hover:shadow-xl hover:shadow-[#593a6d]/45'
                          : 'border-[#593a6d] text-[#593a6d] hover:bg-[#593a6d] hover:!text-white'
                        }`}
                      >
                        {plan.buttonText}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Spacer between pricing cards and comparison table - reduced spacing */}
        <div className="relative py-12 my-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-border/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-6 py-2 rounded-full border border-border/30 text-sm text-muted-foreground font-medium">
              Compare Plans
            </span>
          </div>
        </div>

        {/* Feature Comparison Section - Responsive Table/Cards */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-[#593a6d]">
                Feature Comparison
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Compare all features across our plans to find the perfect fit for your team
            </p>
          </div>

          {/* Mobile/Tablet View - Cards (shows on all screen sizes now) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {pricingPlans.map((plan, planIdx) => {
              const planFeatures = getPlanFeatures(plan.name);
              const isPopular = plan.popular;

              return (
                <motion.div
                  key={planIdx}
                  variants={itemVariants}
                  className="relative"
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-[#593a6d] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg " style={{ marginTop: '-10%' }}>
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <Card className={`
                    relative overflow-hidden
                    bg-card/50 backdrop-blur-xl
                    border-2 transition-all duration-300
                    ${isPopular
                      ? 'border-[#593a6d] shadow-[0_0_30px_-5px_rgba(89,58,109,0.3)]'
                      : 'border-border'
                    }
                  `}>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-bold text-foreground flex items-center justify-between">
                        <span>{plan.name}</span>
                        {isPopular && (
                          <span className="text-xs font-normal text-[#593a6d]"></span>
                        )}
                      </CardTitle>
                      <CardDescription className="text-sm">{plan.subtitle}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Group features by category */}
                      {comparisonFeatures.map((category, catIdx) => (
                        <div key={catIdx} className="space-y-3">
                          <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                            <div className="h-0.5 w-8 bg-[#593a6d] rounded-full"></div>
                            <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">
                              {category.category}
                            </h4>
                          </div>

                          <div className="space-y-2 pl-2">
                            {category.items.map((item, itemIdx) => {
                              const value = item[plan.name.toLowerCase().replace('-', '')];
                              const isCheckmark = value === '✓';
                              const isEmptyDash = value === '—';

                              return (
                                <div key={itemIdx} className="flex items-start justify-between gap-3 py-1.5">
                                  <span className="text-xs text-muted-foreground font-medium flex-1">
                                    {item.feature}
                                  </span>
                                  <span className={`text-xs font-semibold flex-shrink-0 ${isPopular ? 'text-foreground' : 'text-muted-foreground'
                                    } ${isCheckmark ? 'text-green-500' : ''} ${isEmptyDash ? 'text-muted-foreground/50' : ''}`}>
                                    {value}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </CardContent>

                    <CardFooter className="pt-4">
                      <Button
                        variant={plan.buttonVariant}
                        className={`w-full text-sm font-semibold transition-all duration-300 ${plan.buttonVariant === 'default'
                            ? 'bg-[#593a6d] hover:bg-[#6b4a7f] text-white border-0 shadow-lg shadow-[#593a6d]/25'
                            : 'border-[#593a6d] text-[#593a6d] hover:bg-[#593a6d] hover:!text-white'
                          }`}
                      >
                        {plan.buttonText}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Spacer between comparison and footer */}
        <div className="py-8"></div>
      </motion.div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default PricingPage;