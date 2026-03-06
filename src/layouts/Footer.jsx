export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-light)]/50 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-semibold tracking-wide">
              <span className="text-[var(--text-main)]">Rent</span>
              <span className="text-[var(--accent-primary)]">Ease</span>
            </div>

            <p className="text-sm text-[var(--text-secondary)] mt-5 leading-relaxed max-w-sm">
              Rent premium furniture and home appliances at affordable monthly
              prices. Perfect for students and professionals who move frequently
              and prefer flexible living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-main)]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 mt-5">
              <a className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
                Home
              </a>
              <a className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
                Browse Furniture
              </a>
              <a className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
                How Renting Works
              </a>
              <a className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
                Cart
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-main)]">
              Categories
            </h3>

            <div className="flex flex-col gap-3 mt-5">
              <a className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
                Sofas
              </a>
              <a className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
                Beds & Mattresses
              </a>
              <a className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
                Study Tables
              </a>
              <a className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
                Appliances
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-main)]">
              Get Rental Updates
            </h3>

            <p className="text-sm text-[var(--text-secondary)] mt-3">
              Subscribe to get offers and new furniture arrivals.
            </p>

            <div className="flex items-center mt-5 border border-[var(--border-light)] rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm bg-transparent outline-none text-[var(--text-main)] placeholder-[var(--text-secondary)]"
              />

              <button className="px-4 py-2 bg-[var(--accent-primary)] text-white text-sm hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[var(--border-light)] my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} RentEase. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
              Terms & Conditions
            </a>

            <a className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
              Privacy Policy
            </a>

            <a className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
