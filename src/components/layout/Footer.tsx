export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/images/logo.png" alt="BAC" className="w-6 h-6 rounded" />
              <span className="font-bold text-sm">BAC Connect</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed max-w-xs">
              The official student portal for Botswana Accountancy College. Connect with peers, access campus services, and stay informed.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-3">Gaborone Campus</h4>
            <ul className="space-y-1.5 text-xs text-text-secondary">
              <li>Plot 50661, Fairgrounds Office Park</li>
              <li>Private Bag 000319, Gaborone</li>
              <li>Tel: +267 395 3062</li>
              <li>Fax: +267 390 4103</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-3">Francistown Campus</h4>
            <ul className="space-y-1.5 text-xs text-text-secondary">
              <li>Plot 31403, Moffat Street</li>
              <li>Private Bag 137, Francistown</li>
              <li>Tel: +267 241 0558</li>
              <li>Fax: +267 241 0534</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Botswana Accountancy College. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-muted">Admissions: admissions@bac.ac.bw</span>
            <span className="text-xs text-text-muted">Tel: +267 398 0661</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
