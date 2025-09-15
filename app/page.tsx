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
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center relative overflow-hidden pulse-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"></div>
              <span className="text-white font-bold text-xl relative z-10">I</span>
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

        <div className="absolute top-20 right-10 z-20">
          <img src="/cute-ai-robot-mascot-transparent.jpg" alt="Ikuzo AI Mascot" className="w-24 h-24 mascot-float" />
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

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-animate stagger-4">
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

          <div className="absolute top-10 left-10 z-20">
            <img
              src="/cute-ai-robot-mascot-transparent.jpg"
              alt="Ikuzo AI Mascot"
              className="w-16 h-16 mascot-float opacity-60"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-8 border-red-200 bg-white/80 backdrop-blur-sm scroll-animate stagger-1 scale-in hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-red-600 mb-2">970M</h3>
              <p className="text-gray-600 font-medium">People with mental health disorders globally (WHO, 2022)</p>
            </Card>

            <Card className="text-center p-8 border-orange-200 bg-white/80 backdrop-blur-sm scroll-animate stagger-2 scale-in hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-orange-600 mb-2">1 in 4</h3>
              <p className="text-gray-600 font-medium">People will experience mental health issues in their lifetime</p>
            </Card>

            <Card className="text-center p-8 border-yellow-200 bg-white/80 backdrop-blur-sm scroll-animate stagger-3 scale-in hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-yellow-600 mb-2">75%</h3>
              <p className="text-gray-600 font-medium">
                Of people in low-income countries receive no treatment for depression
              </p>
            </Card>

            <Card className="text-center p-8 border-red-200 bg-white/80 backdrop-blur-sm scroll-animate stagger-4 scale-in hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-red-600 mb-2">$1T</h3>
              <p className="text-gray-600 font-medium">Annual global cost of depression and anxiety disorders</p>
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

      {/* Enhanced Mobile Experience Section */}
      <section className="section-snap py-20 bg-background flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate fade-up">
            <Badge className="mb-4 bg-primary/10 text-white border-primary/20">📱 Mobile Experience</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Beautiful Mobile Interface</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Express your feelings naturally through our intuitive mobile app designed for moments when you need
              support most.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 scroll-animate slide-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-muted/50 rounded-2xl hover:bg-muted/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center pulse-glow">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Intuitive Design</h3>
                    <p className="text-foreground">
                      Clean, accessible interface that works when you're feeling low - no overwhelming options or
                      complex navigation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-muted/50 rounded-2xl hover:bg-muted/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center pulse-glow">
                    <Smile className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Multi-Modal Input</h3>
                    <p className="text-foreground">
                      Express through emoji, voice, text, or simple doodles - whatever feels right in the moment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-muted/50 rounded-2xl hover:bg-muted/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center pulse-glow">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalized Suggestions</h3>
                    <p className="text-foreground">
                      Context-aware recommendations based on your location, weather, and what works in your community
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-animate slide-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
                {/* Phone 1 - Mood Input */}
                <div className="relative mx-auto">
                  <div className="w-48 h-96 sm:w-52 sm:h-[420px] lg:w-56 lg:h-[450px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-2 shadow-2xl float-animation">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <img
                        src="/mobile-mood-input-screen.jpg"
                        alt="Ikuzo AI Mood Input Interface"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-black rounded-b-lg"></div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-3 font-medium">Mood Input</p>
                </div>

                {/* Phone 2 - AI Processing */}
                <div className="relative mx-auto">
                  <div className="w-48 h-96 sm:w-52 sm:h-[420px] lg:w-56 lg:h-[450px] bg-gradient-to-br from-primary/20 to-primary/40 rounded-[2rem] p-2 shadow-2xl float-animation">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <img
                        src="/mobile-ai-processing-screen.jpg"
                        alt="Ikuzo AI Processing Interface"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-black rounded-b-lg"></div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-3 font-medium">AI Analysis</p>
                </div>

                {/* Phone 3 - Suggestions */}
                <div className="relative mx-auto">
                  <div className="w-48 h-96 sm:w-52 sm:h-[420px] lg:w-56 lg:h-[450px] bg-gradient-to-br from-green-200 to-green-300 rounded-[2rem] p-2 shadow-2xl float-animation">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <img
                        src="/mobile-suggestions-screen.jpg"
                        alt="Ikuzo AI Suggestions Interface"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-black rounded-b-lg"></div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-3 font-medium">Personalized Actions</p>
                </div>

                {/* Phone 4 - Progress Tracking */}
                <div className="relative mx-auto">
                  <div className="w-48 h-96 sm:w-52 sm:h-[420px] lg:w-56 lg:h-[450px] bg-gradient-to-br from-blue-200 to-blue-300 rounded-[2rem] p-2 shadow-2xl float-animation">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <img
                        src="/mobile-progress-tracking-screen.jpg"
                        alt="Ikuzo AI Progress Tracking Interface"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-black rounded-b-lg"></div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-3 font-medium">Progress Tracking</p>
                </div>

                {/* Phone 5 - Community */}
                <div className="relative mx-auto">
                  <div className="w-48 h-96 sm:w-52 sm:h-[420px] lg:w-56 lg:h-[450px] bg-gradient-to-br from-purple-200 to-purple-300 rounded-[2rem] p-2 shadow-2xl float-animation">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <img
                        src="/mobile-community-screen.jpg"
                        alt="Ikuzo AI Community Interface"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-black rounded-b-lg"></div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-3 font-medium">Community Support</p>
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

          <div className="absolute top-20 right-20 z-20">
            <img
              src="/cute-ai-robot-mascot-transparent.jpg"
              alt="Ikuzo AI Mascot"
              className="w-20 h-20 mascot-float opacity-80"
            />
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

            {/* Enhanced Tech Stack with logos */}
            <div className="bg-muted/50 rounded-2xl p-8 scroll-animate stagger-4 fade-up">
              <h3 className="text-2xl font-bold text-center mb-8">Powered by Modern AI Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img src="/logos/dify-logo-transparent.jpg" alt="Dify" className="w-10 h-10 object-contain" />
                  </div>
                  <p className="font-medium text-sm text-foreground">Dify Agent</p>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img src="/logos/tidb-logo-transparent.jpg" alt="TiDB" className="w-10 h-10 object-contain" />
                  </div>
                  <p className="font-medium text-sm text-foreground">TiDB Serverless</p>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img src="/logos/kimi-ai-logo-transparent.jpg" alt="Kimi AI" className="w-10 h-10 object-contain" />
                  </div>
                  <p className="font-medium text-sm text-foreground">Kimi AI</p>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src="/logos/openweather-logo-transparent.jpg"
                      alt="OpenWeather"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <p className="font-medium text-sm text-foreground">OpenWeather</p>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img src="/logos/flutter-logo-transparent.jpg" alt="Flutter" className="w-10 h-10 object-contain" />
                  </div>
                  <p className="font-medium text-sm text-foreground">Flutter App</p>
                </div>
              </div>
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
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=0&controls=1&origin=https://v0.app&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
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
                  src="/cute-ai-robot-mascot-transparent.jpg"
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
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://medium.com/@ikuzoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/80 hover:bg-white border border-gray-200 rounded-full px-6 py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <span className="font-medium text-gray-700">Medium</span>
                </a>

                <a
                  href="https://instagram.com/ikuzoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6 py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="font-medium">Instagram</span>
                </a>

                <a
                  href="https://twitter.com/ikuzoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                  <span className="font-medium">Twitter</span>
                </a>

                <a
                  href="https://linkedin.com/company/ikuzoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full px-6 py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="font-medium">LinkedIn</span>
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

        <div className="absolute bottom-10 right-10 z-20">
          <img src="/cute-ai-robot-mascot-transparent.jpg" alt="Ikuzo AI Mascot" className="w-32 h-32 mascot-float" />
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
                  <span className="text-white font-bold text-xl">I</span>
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
              &copy; 2024 Ikuzo AI. All rights reserved. Built with care for mental well-being.
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
