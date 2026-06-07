import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center font-bold text-white text-sm">
                B
              </div>
              <span className="font-bold text-lg">
                <span className="text-white">BAC</span>{' '}
                <span className="text-accent">Connect</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm max-w-md">
              The secure student hub for Botswana School of Business Sciences. 
              Connect, collaborate, and thrive in your academic journey.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-text-primary mb-4">Platform</h3>
            <ul className="space-y-2">
              {['Marketplace', 'Groups', 'Chat', 'Events'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-text-secondary hover:text-accent transition-all"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text-primary mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sos" className="text-sm text-text-secondary hover:text-accent transition-all">
                  Emergency SOS
                </Link>
              </li>
              <li>
                <Link href="/wellness" className="text-sm text-text-secondary hover:text-accent transition-all">
                  Wellness Center
                </Link>
              </li>
              <li>
                <span className="text-sm text-text-secondary">
                  Contact: support@bacconnect.ac.bw
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} BAC Connect. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-text-muted hover:text-text-secondary transition-all">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-text-muted hover:text-text-secondary transition-all">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
