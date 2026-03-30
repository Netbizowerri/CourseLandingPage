import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Copy, 
  Users, 
  Code, 
  Rocket, 
  ShieldCheck, 
  ChevronRight, 
  Smartphone,
  Layout,
  Database,
  Globe,
  Menu,
  X
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '../lib/utils';
import JotFormEmbed from './JotFormEmbed';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hardcoded settings since database is no longer used
  const settings = {
    bankName: "Guaranteed Trust Bank (GTB)",
    accountName: "Kelechi Nwachukwu",
    accountNumber: "0010266833",
    totalLimit: 50,
    confirmedCount: 12,
    promoOpen: true,
    courseLink: "https://course-link.com"
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const modules = [
    { title: "The Developer Mindset in the AI Era", content: "Why AI accelerates you, not replaces you. How to think, prompt, and ship faster.", category: "Foundation", duration: "~7 min", color: "bg-blue-50" },
    { title: "Business Profile & PRD", content: "Define the project with a complete PRD and business profile before writing code.", category: "Foundation", duration: "~6 min", color: "bg-indigo-50" },
    { title: "Logo, Brand Identity & Color System", content: "Create a cohesive visual language with AI tools and a six-color palette.", category: "Brand & Design", duration: "~8 min", color: "bg-green-50" },
    { title: "Scaffolding & UI with Google AI Studio", content: "Generate a React app from your PRD JSON, then refine every component.", category: "Frontend", duration: "~12 min", color: "bg-emerald-50" },
    { title: "Download, Install & Run", content: "Pull the AI build locally, fix assets, and get Vite dev server running.", category: "Setup", duration: "~10 min", color: "bg-purple-50" },
    { title: "AI-Orchestrated Backend", content: "Supabase auth, database, and Express API wired into the React app.", category: "Backend", duration: "~12 min", color: "bg-pink-50" },
    { title: "Install, Run & First Test", content: "Full stack running locally with seeded rooms, roles, and end-to-end booking flow.", category: "Integration", duration: "~10 min", color: "bg-orange-50" },
    { title: "Professional SEO", content: "Titles, descriptions, Open Graph, schema, sitemaps, and performance tweaks.", category: "Growth", duration: "~9 min", color: "bg-red-50" },
    { title: "Pre-Deployment Security Audit", content: "Kilo Code security sweep, RLS checks, and red-flag fixes before launch.", category: "Security", duration: "~8 min", color: "bg-yellow-50" },
    { title: "Deployment", content: "Push frontend and backend live with free hosting, SSL, and final QA.", category: "Launch", duration: "~6 min", color: "bg-slate-50" },
  ];

  const tools = [
    { name: "VS Code", icon: <Code className="w-6 h-6" /> },
    { name: "GitHub", icon: <Globe className="w-6 h-6" /> },
    { name: "Firebase", icon: <Database className="w-6 h-6" /> },
    { name: "Vercel", icon: <Rocket className="w-6 h-6" /> },
    { name: "Claude AI", icon: <Smartphone className="w-6 h-6" /> },
    { name: "Tailwind", icon: <Layout className="w-6 h-6" /> },
  ];

  const remainingSpots = settings.totalLimit - settings.confirmedCount;

  return (
    <div className="font-['Poppins',sans-serif] text-[#0F2A4A]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FAF9F7]/80 backdrop-blur-md z-50 border-b border-[#0F2A4A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0F2A4A] rounded-lg flex items-center justify-center">
                <Rocket className="text-[#C9922A] w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#C9922A]">Zero2Prod</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-[#C9922A] transition-colors">About</a>
              <a href="#curriculum" className="text-sm font-medium hover:text-[#C9922A] transition-colors">Curriculum</a>
              <a href="#pricing" className="text-sm font-medium hover:text-[#C9922A] transition-colors">Pricing</a>
              <button 
                onClick={() => document.getElementById('enrol')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#0F2A4A] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#1a3a5e] transition-all shadow-lg shadow-blue-900/20"
              >
                Claim Your Spot
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-[#0F2A4A]/10 p-4 space-y-4"
            >
              <a href="#about" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#curriculum" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Curriculum</a>
              <a href="#pricing" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <button 
                onClick={() => {
                  document.getElementById('enrol')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="w-full bg-[#0F2A4A] text-white py-3 rounded-xl font-bold"
              >
                Claim Your Spot
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C9922A]/5 -skew-x-12 transform translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9922A]/10 border border-[#C9922A]/20 text-[#C9922A] font-bold text-sm mb-6">
                <Users className="w-4 h-4" />
                <span>Only {remainingSpots} spots remaining!</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-[#C9922A]">Zero To Production:</span> Learn How To Build Real Web Apps With AI Tools For Free!
              </h1>
              <p className="text-xl text-[#0F2A4A]/70 mb-8 max-w-lg leading-relaxed">
                A no fluff web application course created by <span className="text-[#0F2A4A] font-semibold">Kelechi Nwachukwu</span>, a passionate full-stack developer.<br /><br />
                Master full-stack development with React 19, Node.js, and <span className="text-[#C9922A] font-bold">FREE AI tools</span>. Build real-world apps and deploy them like a pro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('enrol')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#0F2A4A] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-blue-900/30"
                >
                  Claim Your Spot <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 rounded-2xl font-bold text-lg border-2 border-[#0F2A4A]/10 hover:bg-[#0F2A4A]/5 transition-colors">
                  View Curriculum
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://i.ibb.co/q3Bs6276/Gemini-Generated-Image-mxk9llmxk9llmxk9-1.png" 
                  alt="Zero to Production Course Preview" 
                  className="w-full h-auto"
                  width={800}
                  height={600}
                  loading="eager"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/course/800/600';
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C9922A] rounded-full -z-10 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0F2A4A]/10 rounded-3xl -z-10 rotate-12" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Build Real Projects</h2>
          <p className="text-[#0F2A4A]/60 mb-16 max-w-2xl mx-auto">
            We don't just teach theory. You'll build a complete, production-ready hotel management system using the latest tech stack.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Layout />, title: "Modern UI", desc: "Responsive design with Tailwind CSS and Framer Motion." },
              { icon: <Database />, title: "Real-time Data", desc: "Live updates and persistence with Firebase Firestore." },
              { icon: <ShieldCheck />, title: "Secure Auth", desc: "Robust authentication and role-based access control." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#FAF9F7] border border-[#0F2A4A]/5 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-[#0F2A4A] text-[#C9922A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#0F2A4A]/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-24 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4">10 Modules to Mastery</h2>
              <p className="text-[#0F2A4A]/60 max-w-xl">
                A comprehensive curriculum designed to take you from zero to a professional full-stack developer.
              </p>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl border border-[#0F2A4A]/10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?u=${i}`} 
                      alt="Student" 
                      width={32}
                      height={32}
                      loading="lazy"
                      referrerPolicy="no-referrer" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Student+${i}&background=random`;
                      }}
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold">Join 450+ students</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {modules.map((m, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={cn("p-6 rounded-3xl border border-[#0F2A4A]/5 flex flex-col justify-between min-h-[220px]", m.color)}
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Module {i + 1}</span>
                    <span className="text-[10px] font-bold bg-white/50 px-2 py-0.5 rounded-full opacity-60">{m.duration}</span>
                  </div>
                  <h3 className="font-bold text-base leading-tight mb-2">{m.title}</h3>
                  <p className="text-xs opacity-70 leading-relaxed">{m.content}</p>
                </div>
                <div className="mt-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#0F2A4A]/30">{m.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Modern Stack</h2>
            <p className="text-[#0F2A4A]/60">Master the tools used by top engineering teams worldwide.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {tools.map((tool, i) => (
              <div key={i} className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default">
                <div className="w-16 h-16 bg-[#FAF9F7] rounded-2xl flex items-center justify-center border border-[#0F2A4A]/5 shadow-sm">
                  {tool.icon}
                </div>
                <span className="text-sm font-bold opacity-40">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#0F2A4A] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9922A] via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 p-8 md:p-16 text-center">
            <h2 className="text-4xl font-bold mb-6">Easter Promo Offer</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <span className="text-xl md:text-2xl line-through opacity-40">₦50,000</span>
              <span className="text-5xl md:text-6xl font-black text-[#C9922A]">₦5,000</span>
            </div>
            <p className="text-xl opacity-80 mb-12">
              Get full access to the course, assets, and private community for a fraction of the price.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left mb-12">
              {[
                "10 Comprehensive Modules",
                "Havenique Project Source Code",
                "WhatsApp Group Access",
                "Weekly Live Q&A Sessions",
                "Portfolio Review"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#C9922A] w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('enrol')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-[#C9922A] text-[#0F2A4A] py-5 rounded-2xl font-black text-xl hover:bg-[#d4a13d] transition-all shadow-2xl shadow-yellow-600/20"
            >
              CLAIM YOUR SPOT NOW
            </button>
            <p className="mt-6 text-sm opacity-50 font-medium tracking-wide uppercase">
              Limited to the first 50 students only
            </p>
          </div>
        </div>
      </section>

      {/* Enrolment Form Section */}
      <section id="enrol" className="py-24 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Secure Your Spot</h2>
              <p className="text-lg text-[#0F2A4A]/70 mb-12 leading-relaxed">
                Follow these simple steps to join the program:
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-[#0F2A4A] text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Make Payment</h3>
                    <p className="text-[#0F2A4A]/60 mb-4">Transfer ₦5,000 to the account details below.</p>
                    <div className="bg-white p-6 rounded-3xl border border-[#0F2A4A]/10 shadow-sm space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium opacity-50 uppercase">Bank Name</span>
                        <span className="font-bold">{settings?.bankName}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium opacity-50 uppercase">Account Name</span>
                        <span className="font-bold">{settings?.accountName}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-[#0F2A4A]/5 rounded-xl">
                        <div>
                          <span className="text-xs font-medium opacity-50 uppercase block">Account Number</span>
                          <span className="font-mono font-bold text-lg">{settings?.accountNumber}</span>
                        </div>
                        <button 
                          onClick={() => copyToClipboard(settings?.accountNumber || '', 'Account number')}
                          className="p-2 hover:bg-[#0F2A4A]/10 rounded-lg transition-colors"
                        >
                          <Copy className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-[#0F2A4A] text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Submit Details</h3>
                    <p className="text-[#0F2A4A]/60">Fill the form with your payment details for verification.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-[#0F2A4A] text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Get Access</h3>
                    <p className="text-[#0F2A4A]/60">Once verified, you'll receive the course link via email within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <JotFormEmbed formId="260863655999075" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-[#0F2A4A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Rocket className="text-[#C9922A] w-6 h-6" />
            <span className="font-bold text-lg text-[#C9922A]">Zero2Prod</span>
          </div>
          <p className="text-sm text-[#0F2A4A]/40 font-medium">
            © 2025 <span className="text-[#C9922A]">Zero to Production</span>. Built with React 19.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#0F2A4A]/40 hover:text-[#0F2A4A] transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-[#0F2A4A]/40 hover:text-[#0F2A4A] transition-colors"><Code className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
