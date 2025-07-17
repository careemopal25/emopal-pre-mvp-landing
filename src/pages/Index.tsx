import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThreeBackground } from "@/components/ThreeBackground";
import { DyadVisual } from "@/components/DyadVisual";
import { SectionCard } from "@/components/SectionCard";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast({
        title: "Thank you! 💛",
        description: "We'll notify you when EmoPalAI is ready to help your family.",
      });
      setEmail('');
    } else {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <ThemeToggle />
      <ThreeBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 py-20">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-warm-glow bg-clip-text text-transparent"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.3), -1px -1px 2px rgba(255,255,255,0.1)'
              }}>
              We hold the bond together...Even when cancer tries to break it!!
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl dynamic-text mb-12 max-w-3xl mx-auto font-light">
            An emotional OS for families who choose to stay — even when it's hard.
          </p>

          <Button
            onClick={scrollToWaitlist}
            size="lg"
            className="magical-button embossed-button floating-glow text-white font-semibold text-lg px-8 py-6 
                       rounded-full"
          >
            <span className="relative z-10 flex items-center gap-3 text-embossed">
              <span className="text-xl">💛</span>
              Notify Me First
            </span>
          </Button>
        </div>
      </section>

      {/* Why This Exists Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionCard>
            <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light dynamic-text 
                                   max-w-4xl mx-auto italic relative">
              <span className="text-4xl md:text-6xl text-warm-glow absolute -top-4 -left-8 font-light floating-glow">"</span>
              We've seen how caregiving gets mechanical. And how survivors feel invisible.
              <br /><br />
              EmoPalAI isn't another app. It's a multi-agent OS designed to help you both remember who you are —
              to each other.
              <span className="text-4xl md:text-6xl text-warm-glow absolute -bottom-8 -right-8 font-light floating-glow">"</span>
            </blockquote>

            <DyadVisual />
          </SectionCard>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-16 text-foreground"
            style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.4), -1px -1px 1px rgba(255,255,255,0.1)'
            }}>
            Beyond Cancer
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Alzheimer's Support", emoji: "🧠" },
              { title: "Diabetes Families", emoji: "💉" },
              { title: "Senior Care", emoji: "👴" }
            ].map((item, index) => (
              <div key={index}
                className="gradient-card rounded-2xl p-8 embossed-button
                              transition-all duration-500 hover:-translate-y-1 
                              relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-warm-glow to-warm-glow-hover 
                                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="text-3xl mb-4 floating-glow">{item.emoji}</div>
                <h3 className="text-xl font-semibold mb-2 dynamic-text">{item.title}</h3>
                <div className="text-warm-glow text-sm font-medium opacity-80 text-embossed">Coming Soon</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionCard className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground"
              style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.4), -1px -1px 1px rgba(255,255,255,0.1)'
              }}>
              Join the Waitlist
            </h2>

            <p className="text-lg md:text-xl dynamic-text mb-12 italic">
              We'll invite you to our very first emotional experience — one moment at a time.
            </p>

            <form onSubmit={handleWaitlist} className="max-w-md mx-auto space-y-6">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-6 px-6 pr-16 text-lg rounded-full glass-input embossed-button
                           focus:border-warm-glow focus:ring-4 focus:ring-glow-warm/20 
                           transition-all duration-300 text-embossed 
                           placeholder:text-muted-foreground/70 border-none"
                  required
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-warm-glow pointer-events-none floating-glow">
                  💌
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full magical-button embossed-button text-white font-semibold text-lg py-6 
                           rounded-full text-embossed"
              >
                Notify Me First
              </Button>
            </form>
          </SectionCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-border/50 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="dynamic-text text-sm opacity-80 mb-4">
            EmoPalAI is a project of Sanjeevani AI LLC
          </p>

          <div className="flex justify-center gap-8 text-sm">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a key={link}
                href={`#${link.toLowerCase()}`}
                className="dynamic-text hover:text-warm-glow transition-colors duration-300 text-embossed">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;