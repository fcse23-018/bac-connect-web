import Link from 'next/link';
import { ArrowRight, Shield, Zap, Users, Globe } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent mb-8">
            <Zap size={14} />
            Botswana School of Business Sciences
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Your Campus{' '}
            <span className="gradient-text">Connected</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            The secure all-in-one hub for BSBS students. Market, chat, learn, 
            and stay safe — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group"
            >
              Get Started Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/login"
              className="btn-secondary text-lg px-8 py-4"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Secure by Design', desc: 'End-to-end encryption, secure authentication, and privacy-first architecture built for student safety.' },
              { icon: Zap, title: 'All-in-One Platform', desc: 'Marketplace, messaging, groups, academics, career hub, wellness — everything in one place.' },
              { icon: Users, title: 'Student-First Community', desc: 'Built specifically for BSBS students. Connect with peers, alumni, and campus services.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-hover text-center p-8">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
