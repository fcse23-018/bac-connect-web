import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] -mt-6 -mx-4 sm:-mx-6">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-background pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
          <img
            src="/images/logo.png"
            alt="BAC"
            className="w-16 h-16 rounded-2xl mx-auto mb-6 shadow-glow"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-3">
            BAC Connect
          </h1>
          <p className="text-lg text-text-secondary max-w-lg mx-auto mb-8 leading-relaxed">
            The official student portal for Botswana Accountancy College. Connect with peers,
            access campus services, and stay informed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/register"
              className="btn-primary text-base px-6 py-2.5 inline-flex items-center gap-2"
            >
              Create account
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/login" className="btn-secondary text-base px-6 py-2.5">
              Sign in
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="card text-center p-6">
              <p className="text-2xl font-bold text-accent">Marketplace</p>
              <p className="text-xs text-text-secondary mt-1">Buy and sell on campus</p>
            </div>
            <div className="card text-center p-6">
              <p className="text-2xl font-bold text-accent">Messages</p>
              <p className="text-xs text-text-secondary mt-1">Chat with students</p>
            </div>
            <div className="card text-center p-6">
              <p className="text-2xl font-bold text-accent">Campus Life</p>
              <p className="text-xs text-text-secondary mt-1">Groups, events, and more</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="font-semibold text-text-primary mb-1">Gaborone Campus</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Plot 50661, Fairgrounds Office Park<br />
                  Private Bag 000319, Gaborone, Botswana<br />
                  Tel: +267 395 3062
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold text-text-primary mb-1">Francistown Campus</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Plot 31403, Moffat Street<br />
                  Private Bag 137, Francistown, Botswana<br />
                  Tel: +267 241 0558
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
