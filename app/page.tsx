"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Heart,
  Brain,
  Mic,
  PenTool,
  Smile,
  Shield,
  Mail,
  ArrowRight,
  Database,
  Target,
  Smartphone,
  TrendingUp,
  Users,
  AlertTriangle,
} from "lucide-react"

export default function IkuzoAILanding() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".scroll-animate")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      console.log("Waitlist signup:", email)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <style jsx global>{`
        /* Added full-section scroll snap and enhanced animations */
        /* Remove scroll-snap from html to fix footer scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        .section-snap {
          scroll-snap-align: start;
          min-height: 100vh;
        }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scroll-animate:nth-child(2) { transition-delay: 0.1s; }
        .scroll-animate:nth-child(3) { transition-delay: 0.2s; }
        .scroll-animate:nth-child(4) { transition-delay: 0.3s; }
        
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .stagger-6 { transition-delay: 0.6s; }
        
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease-out;
        }
        
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .slide-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: all 0.7s ease-out;
        }
        
        .slide-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .slide-right {
          opacity: 0;
          transform: translateX(40px);
          transition: all 0.7s ease-out;
        }
        
        .slide-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .scale-in {
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.6s ease-out;
        }
        
        .scale-in.animate-in {
          opacity: 1;
          transform: scale(1);
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .float-animation:nth-child(2) {
          animation-delay: -2s;
        }
        
        .float-animation:nth-child(3) {
          animation-delay: -4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(69, 200, 207, 0.3); }
          50% { box-shadow: 0 0 40px rgba(69, 200, 207, 0.6); }
        }

        /* Added mascot floating animation */
        .mascot-float {
          animation: mascot-float 4s ease-in-out infinite;
        }
        
        @keyframes mascot-float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
      `}</style>

      {/* Header */}
      <header className="bg-[#0B2545] text-white sticky top-0 z-50 backdrop-blur-sm scroll-animate">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center relative overflow-hidden">
              <img src="/ikuzo-logo.png" alt="Ikuzo AI Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-2xl font-poppins font-medium tracking-wider">Ikuzo AI</span>
            <Badge variant="secondary" className="text-xs bg-primary/20 text-white border-primary/30">
              Mental Well-being
            </Badge>
          </div>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join Waitlist
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-snap bg-[#0B2545] text-white py-24 relative overflow-hidden flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/modern-tech-workspace-with-ai-elements--neural-net.jpg"
            alt="AI Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#0B2545]/85"></div>
        </div>


        {/* Enhanced 3D floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl float-animation"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg float-animation"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/15 rounded-full blur-xl float-animation"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-8 bg-primary/20 text-white border-primary/30 px-4 py-2 text-sm scroll-animate pulse-glow">
            🧠 Multi-Step AI Agent • Mental Well-being Companion
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance font-poppins scroll-animate stagger-1">
            Turn Your Daily <span className="text-primary">Moods</span>
            <br />
            Into <span className="text-primary">Actionable Steps</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-4xl mx-auto text-pretty leading-relaxed scroll-animate stagger-2">
            Ikuzo AI converts your daily mood + short story into small, doable suggestions via a multi-step AI agent.
            <span className="text-primary font-medium"> Small steps, we're with you.</span>
          </p>

          {/* Multi-modal Input Preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-animate stagger-3">
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <Smile className="h-5 w-5 text-primary" />
              <span className="text-sm">Emoji + Text</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <Mic className="h-5 w-5 text-primary" />
              <span className="text-sm">Voice Input</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <PenTool className="h-5 w-5 text-primary" />
              <span className="text-sm">Doodle/Sketch</span>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6 scroll-animate stagger-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-white/70 flex items-center space-x-2">
                <Heart className="h-4 w-4 text-primary" />
                <span>1,000+ people building better mental well-being</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-10 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                onClick={() => {
                  // Add your app store links here
                  window.open('https://apps.apple.com/app/ikuzo-ai', '_blank');
                }}
              >
                <Smartphone className="mr-3 h-6 w-6" />
                Install App
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-10 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                onClick={() => {
                  // Add your documentation link here
                  window.open('https://www.canva.com/design/DAGy0jNmwbk/cVFdol2O_NvcCsBSFSKAxA/view?utm_content=DAGy0jNmwbk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0bf637bea7', '_blank');
                }}
              >
                <svg className="mr-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Documentation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-10 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                onClick={() => {
                  // Add your Medium link here
                  window.open('https://medium.com/@rafkiyuda/ikuzo-ai-a-multi-step-ai-agent-on-tidb-turning-daily-moods-into-context-aware-actions-cf2e62695282', '_blank');
                }}
              >
                <div className="mr-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-bold">M</span>
                </div>
                Medium
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Mental Health Statistics Section */}
      <section className="section-snap py-20 bg-gradient-to-br from-red-50 to-orange-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate fade-up">
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">📊 Global Mental Health Crisis</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">The Numbers Don't Lie</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mental health challenges affect billions worldwide. Traditional solutions aren't keeping up with the scale
              of need.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-8 border-red-200 bg-white/80 backdrop-blur-sm scroll-animate stagger-1 scale-in hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-red-600 mb-2">1 in 8</h3>
              <p className="text-gray-600 font-medium text-sm">
                People live with a mental disorder, with anxiety and depression the most common
                <br />
                <span className="text-xs text-gray-500 mt-1 block">(WHO, Mental Disorders Fact Sheet, 2019)</span>
              </p>
            </Card>

            <Card className="text-center p-8 border-orange-200 bg-white/80 backdrop-blur-sm scroll-animate stagger-2 scale-in hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-orange-600 mb-2">720K+</h3>
              <p className="text-gray-600 font-medium text-sm">
                Deaths per year: Suicide is the 3rd leading cause of death among ages 15–29
                <br />
                <span className="text-xs text-gray-500 mt-1 block">(WHO, Suicide Fact Sheet, 2025)</span>
              </p>
            </Card>

            <Card className="text-center p-8 border-yellow-200 bg-white/80 backdrop-blur-sm scroll-animate stagger-3 scale-in hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-yellow-600 mb-2">$1T</h3>
              <p className="text-gray-600 font-medium text-sm">
                12 billion workdays lost annually due to depression and anxiety; ~15% of working-age adults affected
                <br />
                <span className="text-xs text-gray-500 mt-1 block">(WHO, Mental Health at Work, 2024)</span>
              </p>
            </Card>

            <Card className="text-center p-8 border-red-200 bg-white/80 backdrop-blur-sm scroll-animate stagger-4 scale-in hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-red-600 mb-2">~2%</h3>
              <p className="text-gray-600 font-medium text-sm">
                Of health budgets: Median government spending on mental health has stalled, services remain underfunded
                <br />
                <span className="text-xs text-gray-500 mt-1 block">(WHO, Mental Health Policy & Financing, 2024–2025)</span>
              </p>
            </Card>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 scroll-animate fade-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Gap in Current Solutions</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-xl">×</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Limited Access</h4>
                <p className="text-gray-600 text-sm">
                  Long wait times, high costs, and geographic barriers prevent millions from getting help
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-xl">×</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">One-Size-Fits-All</h4>
                <p className="text-gray-600 text-sm">
                  Generic advice that doesn't consider individual context, culture, or circumstances
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 font-bold text-xl">×</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Reactive Approach</h4>
                <p className="text-gray-600 text-sm">
                  Most solutions wait until crisis points instead of supporting daily well-being
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Problem-Solution Section */}
      <section className="section-snap py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl float-animation"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/3 rounded-full blur-3xl float-animation"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The Gap Between <span className="text-primary">Feeling</span> and{" "}
              <span className="text-primary">Doing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most mental health apps give generic tips. Ikuzo AI bridges the gap between how you feel and what you can
              actually do next.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Problem Side */}
            <div className="space-y-8 scroll-animate slide-left">
              <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-3xl p-8 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/30 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center mr-4">
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-800">The Current Problem</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-sm font-bold">✕</span>
                      </div>
                      <div>
                        <p className="font-bold text-red-800 mb-1">Generic, one-size-fits-all advice</p>
                        <p className="text-red-600 text-sm">
                          Apps push the same "go for a walk" to everyone, regardless of weather, location, or personal
                          situation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-sm font-bold">✕</span>
                      </div>
                      <div>
                        <p className="font-bold text-red-800 mb-1">No context awareness</p>
                        <p className="text-red-600 text-sm">
                          Ignores weather, location, cultural background, and what actually works in your community
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-sm font-bold">✕</span>
                      </div>
                      <div>
                        <p className="font-bold text-red-800 mb-1">High barrier to entry</p>
                        <p className="text-red-600 text-sm">
                          Complex interfaces and lengthy forms when you're feeling low and need immediate, gentle
                          support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Solution Side */}
            <div className="space-y-8 scroll-animate slide-right">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-3xl p-8 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-4 pulse-glow">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">The Ikuzo AI Solution</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                      <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-primary mb-1">Context-aware AI agent</p>
                        <p className="text-gray-700 text-sm">
                          Considers weather, location, interests, and community patterns to suggest what actually works
                          in your situation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                      <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-primary mb-1">Multi-modal, inclusive input</p>
                        <p className="text-gray-700 text-sm">
                          Express yourself through emoji, voice, text, or doodles - whatever feels natural in the moment
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                      <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-primary mb-1">Actionable, specific suggestions</p>
                        <p className="text-gray-700 text-sm">
                          Not just "go for a walk" - specific places near you, step-by-step guidance, and timing that
                          works
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-snap py-20 bg-background flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate fade-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">✨ Key Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">How Ikuzo AI Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four simple ways Ikuzo AI transforms your daily mood into meaningful, actionable support.
            </p>
          </div>

          <div className="space-y-20">
            {/* Feature 1: Check in, your way */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate slide-left">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Smile className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">Check in, your way</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A 30-second mood check-in that meets you where you are. Tap an emoji, type a line of text, speak a few words (we transcribe), or doodle when words won't come. It's quick, gentle, and non-judgmental—no diagnosis, just a simple way to say how you feel so the app can support you next.
                  </p>
                </div>
              </div>
              <div className="scroll-animate slide-right">
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative">
                    <div className="w-32 h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[1.5rem] p-1.5 shadow-xl float-animation">
                      <div className="w-full h-full bg-white rounded-[1.2rem] overflow-hidden">
                        <img
                          src="/check-in-1.png"
                          alt="Emoji Input"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-32 h-64 bg-gradient-to-br from-primary/20 to-primary/40 rounded-[1.5rem] p-1.5 shadow-xl float-animation" style={{animationDelay: '-1s'}}>
                      <div className="w-full h-full bg-white rounded-[1.2rem] overflow-hidden">
                        <img
                          src="/check-in-2.png"
                          alt="Voice Input"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-32 h-64 bg-gradient-to-br from-green-200 to-green-300 rounded-[1.5rem] p-1.5 shadow-xl float-animation" style={{animationDelay: '-2s'}}>
                      <div className="w-full h-full bg-white rounded-[1.2rem] overflow-hidden">
                        <img
                          src="/check-in-3.png"
                          alt="Text Input"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: One Tap to the Right Place */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate slide-right order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="w-40 h-80 bg-gradient-to-br from-blue-200 to-blue-300 rounded-[1.5rem] p-1.5 shadow-xl float-animation">
                      <div className="w-full h-full bg-white rounded-[1.2rem] overflow-hidden">
                        <img
                          src="/one-tap-1.png"
                          alt="Location Services"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-40 h-80 bg-gradient-to-br from-purple-200 to-purple-300 rounded-[1.5rem] p-1.5 shadow-xl float-animation" style={{animationDelay: '-1s'}}>
                      <div className="w-full h-full bg-white rounded-[1.2rem] overflow-hidden">
                        <img
                          src="/one-tap-2.png"
                          alt="Nearby Places"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scroll-animate slide-left order-1 lg:order-2">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">One Tap to the Right Place</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Not every solution is green parks. Sometimes relief is a quiet café, a library corner, or even a calm indoor walk. With one tap, IKUZO connects feelings to nearby supportive spaces—tailored to interests, weather, and context. Fast, safe, and practical: the shortest path from where you are to where you feel better.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3: See Stories, Feel Less Alone */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate slide-left">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">See Stories, Feel Less Alone</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Reading short, anonymous snippets from others in similar situations shows you're not alone. IKUZO highlights what worked for them—simple, real actions that eased their mood. These shared experiences transform empathy into inspiration, guiding you toward your own next step.
                  </p>
                </div>
              </div>
              <div className="scroll-animate slide-right">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="w-40 h-80 bg-gradient-to-br from-orange-200 to-orange-300 rounded-[1.5rem] p-1.5 shadow-xl float-animation">
                      <div className="w-full h-full bg-white rounded-[1.2rem] overflow-hidden">
                        <img
                          src="/stories-1.png"
                          alt="Community Stories"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-40 h-80 bg-gradient-to-br from-pink-200 to-pink-300 rounded-[1.5rem] p-1.5 shadow-xl float-animation" style={{animationDelay: '-1s'}}>
                      <div className="w-full h-full bg-white rounded-[1.2rem] overflow-hidden">
                        <img
                          src="/stories-2.png"
                          alt="Shared Experiences"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: Buddy AI Consultation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate slide-right order-2 lg:order-1">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-96 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-[2rem] p-2 shadow-2xl float-animation">
                      <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                        <img
                          src="/buddy-ai.jpeg"
                          alt="Buddy AI Chat"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scroll-animate slide-left order-1 lg:order-2">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">Buddy: A Caring AI Consultation</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Buddy is IKUZO's empathetic chat companion that turns what you share into safe, simple next steps—based on WHO Psychological First Aid (Look–Listen–Link). It listens without judgment, gives plain-language support (never medical claims), and if it detects serious risk, it stops and redirects you to the right crisis helpline. Privacy-first, human, and always just one message away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced AI Agent Architecture Section */}
      <section className="section-snap py-20 bg-muted/30 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate fade-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">🤖 Multi-Step AI Agent</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">How Ikuzo AI's AI Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on Dify with TiDB hybrid search, our AI agent doesn't just answer - it reasons, retrieves, and acts.
            </p>
          </div>


          {/* Architecture Flow */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 scroll-animate stagger-1 scale-in">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">1. Context Enrichment</h3>
                  <p className="text-muted-foreground">
                    Automatically fetches weather, analyzes mood patterns, and understands your current situation
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 scroll-animate stagger-2 scale-in">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">2. Hybrid Search</h3>
                  <p className="text-muted-foreground">
                    TiDB vector + full-text search finds relevant places, activities, and community stories
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 scroll-animate stagger-3 scale-in">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">3. Structured Actions</h3>
                  <p className="text-muted-foreground">
                    Kimi AI composes specific suggestions with steps, timing, and map links
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="section-snap py-20 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate fade-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">🏗️ Technical Architecture</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">System Architecture & Flow</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the technical implementation behind Ikuzo AI's multi-step agent system and data flow architecture.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Architecture Diagram */}
            <div className="scroll-animate slide-left">
              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">System Architecture</h3>
                  <p className="text-muted-foreground mb-6">
                    High-level overview of Ikuzo AI's technical stack and component interactions
                  </p>
                </div>
                
                {/* Architecture Image */}
                <div className="mb-6">
                  <img
                    src="/architecture-ikuzo-ai.png"
                    alt="Ikuzo AI System Architecture"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                {/* Architecture Description */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h5 className="font-semibold text-foreground mb-3">System Architecture:</h5>
                  <div className="text-sm text-muted-foreground space-y-3">
                    <div>
                      <strong className="text-foreground">Client (Flutter, Dart, TypeScript)</strong>
                      <p className="mt-1">Multi-platform application for mood check-ins (emoji/text/voice/doodle) and displaying suggestion cards. Deep-link to maps.</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Server (Go + Gin)</strong>
                      <p className="mt-1">Lightweight gateway that manages sessions, preferences, and calls AI orchestration. Handles optional verification (geofence/photo-hash) and minimal logging.</p>
                    </div>
                    <div>
                      <strong className="text-foreground">AI & Orchestration (Dify, Kimi AI, Gemini, Response Parser)</strong>
                      <p className="mt-1">Dify manages multi-step flow: fetch weather → query TiDB → ranking → request Kimi/Gemini to compose structured response (JSON). Response Parser ensures format/guardrails (WHO-tone, not diagnosis).</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Database (TiDB Serverless)</strong>
                      <p className="mt-1">Single place for vector store + full-text: WHO guidance snippets, anonymous stories, and place/activity metadata. Supports filters (language, tags, distance, opening hours).</p>
                    </div>
                    <div>
                      <strong className="text-foreground">External Data & API</strong>
                      <p className="mt-1">OpenWeather (weather context), Google Maps/Places (route links & location details), WHO Public Guidance (source content "dos & don'ts").</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Deployment (AWS Cloud, EC2)</strong>
                      <p className="mt-1">Runs Go services and agent components; secrets stored securely, basic autoscale, observability/log audit.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Flow Diagram */}
            <div className="scroll-animate slide-right">
              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Multi-AI Agents Workflow</h3>
                  <p className="text-muted-foreground mb-6">
                    Orchestrated multi-step AI agents working in sequence for optimal results
                  </p>
                </div>
                
                {/* Multi-AI Agents Image */}
                <div className="mb-6">
                  <img
                    src="/multi-ai-agents.png"
                    alt="Ikuzo AI Multi-AI Agents Workflow"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                {/* Multi-AI Agents Description */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h5 className="font-semibold text-foreground mb-3">AI Agents Workflow:</h5>
                  <div className="text-sm text-muted-foreground space-y-3">
                    <div>
                      <strong className="text-foreground">Input & Enrichment Agent</strong>
                      <p className="mt-1">Receives user stories (emoji/text/voice/doodle→text), then optionally adds context from Weather API and Image Descriptor.</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Embedding Agent</strong>
                      <p className="mt-1">Converts stories & context into vectors and stores/queries them in TiDB (Vector Database).</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Retrieval Agent</strong>
                      <p className="mt-1">Performs Vector Search in TiDB to find the most relevant knowledge/history snippets.</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Places Agent (optional)</strong>
                      <p className="mt-1">Calls Places API for nearby location options that match the context.</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Reasoning/Writer Agent (Kimi)</strong>
                      <p className="mt-1">Combines retrieval results + context, then writes structured brief suggestions (reasoning & small steps).</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Response</strong>
                      <p className="mt-1">IKUZO displays recommendation cards to the user.</p>
                    </div>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-xs text-primary font-medium">
                        <strong>Note:</strong> All steps are orchestrated in sequence—multi-step—so each agent focuses on one task, resulting in fast, measurable, and auditable outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Technical Details */}
          <div className="mt-16 scroll-animate fade-up">
            <Card className="p-8 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Technical Implementation Details</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Vector Search</h4>
                  <p className="text-sm text-muted-foreground">
                    TiDB's hybrid search combines semantic similarity with traditional full-text search for optimal results
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Multi-Step Agent</h4>
                  <p className="text-sm text-muted-foreground">
                    Dify orchestrates complex workflows with context awareness and structured output generation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Context Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time weather and location data enhance suggestion relevance and personalization
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* User Flow Section */}
      <section className="section-snap py-20 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate fade-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">👤 User Experience Flow</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">How Users Interact with Ikuzo AI</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the seamless user journey from mood input to actionable recommendations through our intuitive interface.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="scroll-animate scale-in">
              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Complete User Flow</h3>
                  <p className="text-muted-foreground">
                    From initial mood check-in to receiving personalized, actionable suggestions
                  </p>
                </div>
                
                {/* User Flow Image */}
                <div className="mb-8">
                  <img
                    src="/user-flow-ikuzo-AI.png"
                    alt="Ikuzo AI User Flow Process"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                {/* User Flow Description */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground mb-3">User Journey Steps:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                        <div>
                          <strong className="text-foreground">Mood Input</strong>
                          <p className="text-sm text-muted-foreground">User expresses their current mood through emoji, text, voice, or doodle</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                        <div>
                          <strong className="text-foreground">Story Sharing</strong>
                          <p className="text-sm text-muted-foreground">User shares their story or context about their current situation</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                        <div>
                          <strong className="text-foreground">AI Processing</strong>
                          <p className="text-sm text-muted-foreground">Multi-step AI agents analyze input and context to generate recommendations</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                        <div>
                          <strong className="text-foreground">Personalized Suggestions</strong>
                          <p className="text-sm text-muted-foreground">User receives actionable, context-aware recommendations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Multi-Modal Input</strong>
                          <p className="text-sm text-muted-foreground">Support for various input methods to accommodate different user preferences</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Context Awareness</strong>
                          <p className="text-sm text-muted-foreground">Considers weather, location, and personal history for relevant suggestions</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Actionable Steps</strong>
                          <p className="text-sm text-muted-foreground">Provides specific, doable actions rather than generic advice</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Progress Tracking</strong>
                          <p className="text-sm text-muted-foreground">Helps users track their mental well-being journey over time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Video Section */}
      <section className="section-snap py-20 bg-background flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate fade-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">🎥 See It In Action</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Watch Ikuzo AI in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our multi-step AI agent transforms daily moods into personalized, actionable suggestions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto scroll-animate scale-in">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative group cursor-pointer">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/QMU527O2Pik?autoplay=0&mute=0&controls=1&origin=https://localhost:3000&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                  title="Ikuzo AI Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">From Mood to Action in Seconds</h3>
                <p className="text-white/70">
                  Watch how Ikuzo AI understands context and provides personalized suggestions
                </p>
                <div className="mt-4">
                  <a
                    href="https://youtu.be/QMU527O2Pik?si=eSOaKbPdyyPdG1YE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science-Backed Features */}
      <section className="section-snap py-20 bg-muted/30 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate fade-up">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">🏥 WHO-Aligned • Evidence-Based</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Grounded in Mental Health Science</h2>
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-left scroll-animate scale-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Behavioral Activation</h3>
                  <p className="text-foreground mb-6">
                    Ikuzo AI operationalizes the principle that small, purposeful actions - not just reflections - can
                    shift mood and improve well-being.
                  </p>
                  <h3 className="text-xl font-bold mb-4 text-primary">Environmental Psychology</h3>
                  <p className="text-foreground">
                    Research shows physical and social environments shape how we feel. Ikuzo AI suggests supportive
                    settings based on this evidence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">WHO Guidelines</h3>
                  <p className="text-foreground mb-6">
                    Follows World Health Organization guidance that even short bouts of activity and supportive
                    environments help reduce anxiety and depression.
                  </p>
                  <h3 className="text-xl font-bold mb-4 text-primary">Non-Clinical Approach</h3>
                  <p className="text-foreground">
                    Validates feelings without diagnosing. Focuses on gentle nudges toward action, not clinical
                    intervention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-snap py-20 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto scroll-animate fade-up">
            <div className="flex flex-col items-center space-y-8">
              {/* Mascot */}
              <div className="relative">
                <img
                  src="/ikuzo-logo.png"
                  alt="Ikuzo AI Mascot"
                  className="w-48 h-48 mascot-float drop-shadow-2xl"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-primary/20 rounded-full blur-xl"></div>
              </div>

              {/* Slogan */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Small Steps, <span className="text-primary">We're With You</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Your AI companion for turning daily moods into meaningful actions. Join our community building better
                  mental well-being together.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center">
                <a
                  href="https://medium.com/@rafkiyuda/ikuzo-ai-a-multi-step-ai-agent-on-tidb-turning-daily-moods-into-context-aware-actions-cf2e62695282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-white/80 hover:bg-white border border-gray-200 rounded-full px-8 py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">M</span>
                  </div>
                  <span className="font-medium text-gray-700 text-lg">Read on Medium</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>


        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto scroll-animate fade-up">
            {!isSubmitted ? (
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Daily Moods?</h2>
                <p className="text-xl text-white/90 mb-8">
                  Join thousands building better mental well-being with Ikuzo AI's personalized approach.
                </p>

                <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 backdrop-blur-sm h-14 text-lg"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90 px-8 h-14 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Join Waitlist
                  </Button>
                </form>

                <div className="flex flex-wrap justify-center gap-6 text-white/80">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Unsubscribe anytime</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>Early access benefits</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/10 rounded-2xl p-8 max-w-lg mx-auto backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Welcome to the Ikuzo AI Family!</h3>
                <p className="text-white/90 text-lg">
                  You're now on our priority list. We'll notify you as soon as Ikuzo AI is ready for early access, plus
                  you'll get exclusive founder pricing.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#0B2545] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center pulse-glow">
                  <img src="/ikuzo-logo.png" alt="Ikuzo AI Logo" className="w-8 h-8 object-contain" />
                </div>
                <span className="text-2xl font-poppins font-medium tracking-wider">Ikuzo AI</span>
              </div>
              <p className="text-white/70 text-lg mb-6 max-w-md">
                Small steps, we're with you. Turning daily moods into context-aware actions through AI.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-primary/20 text-white border-primary/30">
                  Multi-Step AI Agent
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-white border-primary/30">
                  WHO-Aligned
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <div className="space-y-3 text-white/70">
                <p>Multi-modal Input</p>
                <p>AI Agent Workflow</p>
                <p>Context Awareness</p>
                <p>Community Stories</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <div className="space-y-3 text-white/70">
                <a href="#" className="block hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block hover:text-primary transition-colors">
                  Contact
                </a>
                <a href="#" className="block hover:text-primary transition-colors">
                  About
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/60">
              &copy; 2025 Ikuzo AI. All rights reserved. Built with care for mental well-being.
            </p>
            <p className="text-white/50 text-sm mt-2">
              Disclaimer: Ikuzo AI provides supportive suggestions, not clinical diagnosis or treatment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
