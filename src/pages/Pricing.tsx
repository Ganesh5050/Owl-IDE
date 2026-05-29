import { useState } from 'react'
import { Check, ArrowRight, Sparkles, Flame, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { cn } from "@/lib/utils"

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'Free',
      description: 'Ideal for individuals ready to explore AI and intelligent automation',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        'Basic AI Tools',
        'Limited Automation Features',
        'Real-Time Reporting',
        'Basic Chatbot Integration',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      description: 'Built for companies that want to gain an edge with AI-powered automation',
      monthlyPrice: 9,
      yearlyPrice: 90,
      features: [
        'Advanced AI Tools',
        'Customizable Workflows',
        'AI-Powered Analytics',
        'Premium Chatbot Features',
        'Cross-Platform Integrations',
      ],
      highlighted: true,
    },
    {
      name: 'Team',
      description: 'For businesses aiming to harness AI and automation to lead their industry',
      monthlyPrice: 30,
      yearlyPrice: 300,
      features: [
        'Fully Customized AI Solutions',
        'Unlimited Integrations',
        'Advanced Reporting & Insights',
        'Scalable AI Solutions',
        'Team Collaboration Features',
        'Priority Feature Access',
      ],
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-gray-900 font-sans selection:bg-gray-200">
      <Navigation />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Pricing</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900">
              Simple Price For All
            </h1>

            <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
              Flexible pricing plans that fit your budget & scale with needs.
            </p>

            {/* Custom Neumorphic Toggle */}
            <div className="inline-flex items-center p-1.5 bg-[#F5F5F5] rounded-full mt-8 shadow-[inset_0px_3px_1px_rgba(255,255,255,1),0px_0.7px_0.7px_rgba(0,0,0,0.08)]">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10",
                  billingCycle === 'monthly'
                    ? "bg-white text-gray-900 shadow-[0px_2px_4px_rgba(0,0,0,0.04),0px_4px_8px_rgba(0,0,0,0.04)]"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 relative z-10",
                  billingCycle === 'yearly'
                    ? "bg-white text-gray-900 shadow-[0px_2px_4px_rgba(0,0,0,0.04),0px_4px_8px_rgba(0,0,0,0.04)]"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                Yearly
                <span className="px-2 py-0.5 text-[10px] font-bold tracking-wide text-gray-900 bg-white rounded-full shadow-sm border border-black/5">
                  30% off
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  "relative group p-8 rounded-[24px] transition-all duration-300 flex flex-col h-full",
                  "bg-[#F5F5F5]",
                  // Complex Box Shadow for the "Lifted" look
                  "shadow-[rgba(0,0,0,0.08)_0px_0.7px_0.7px,rgba(0,0,0,0.08)_0px_1.8px_1.8px,rgba(0,0,0,0.07)_0px_3.6px_3.6px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]",
                  plan.highlighted ? "md:-mt-4 md:mb-4 z-10" : "mt-0"
                )}
              >
                {/* Card Header & Badge */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  {plan.highlighted && (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#2C2C2C] text-white text-xs font-medium rounded-full shadow-lg">
                      <Flame className="w-3 h-3 fill-orange-500 text-orange-500" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-medium tracking-tight text-gray-900">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-400 text-base font-medium">
                      /month
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 min-h-[40px]">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <div className="mb-8">
                  <Button
                    className={cn(
                      "w-full h-12 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn",
                      plan.highlighted
                        ? "bg-black text-white hover:bg-gray-800 shadow-[0px_4px_12px_rgba(0,0,0,0.2)]"
                        : "bg-[#F3F5F7] text-gray-900 hover:bg-white border border-transparent hover:border-gray-200 shadow-sm"
                    )}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>

                {/* Dotted Separator */}
                <div className="border-t-[3px] border-dotted border-gray-300/60 mb-8 w-full"></div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3 group/item">
                      <Check className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-20 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/50">
              <Heart className="w-4 h-4 text-gray-400 fill-gray-400" />
              <span className="text-sm font-medium text-gray-600">
                We donate 2% of your membership to pediatric wellbeing
              </span>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
