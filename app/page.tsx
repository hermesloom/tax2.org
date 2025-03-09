import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Decorative header accent */}
      <div className="w-full h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"></div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="w-full max-w-2xl mx-auto">
          {/* Official-looking header with colorful accent */}
          <div className="mb-16 flex flex-col items-center relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-primary/5 animate-pulse"></div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight relative z-10 mb-2">
              tax<span className="font-medium">2</span>
              <span className="text-4xl md:text-5xl font-mono text-primary tracking-tighter ml-1">
                .org
              </span>
            </h1>
            <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-violet-500 my-4"></div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Participatory Taxation Initiative
            </p>
          </div>

          {/* Main content with clean card design */}
          <div className="bg-card border border-border/30 rounded-lg shadow-sm p-8 md:p-10 relative overflow-hidden">
            {/* Colorful corner accent */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-green-500/10 rounded-full blur-xl"></div>

            {/* Ultra-simple pitch */}
            <div className="mb-12 relative z-10">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 tracking-tight">
                What if you decided where your taxes go?
              </h2>

              <p className="text-lg text-muted-foreground">
                Direct a portion of your taxes to projects you care about.
              </p>
            </div>

            {/* Modern bullet points with colorful accents */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p>You pay taxes</p>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-950/30 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                </div>
                <p>You choose which projects get funded</p>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-violet-100 dark:bg-violet-950/30 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-violet-500"></div>
                </div>
                <p>Your community improves in ways you value</p>
              </div>
            </div>

            {/* Email contact with official styling and colorful hover */}
            <div className="pt-4 border-t border-border/30">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Contact for inquiries:
                </div>
                <a
                  href="mailto:synergies@tax2.org"
                  className="text-primary font-medium hover:text-primary/80 transition-colors relative group"
                >
                  synergies@tax2.org
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Updated footer with GitHub icon */}
      <footer className="w-full border-t border-border/20 py-6 relative">
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-violet-500/40"></div>
        <div className="container mx-auto flex justify-between items-center px-4 max-w-2xl">
          <p className="text-xs text-muted-foreground">
            ℄ {new Date().getFullYear()} tax2.org
          </p>
          <a
            href="https://github.com/hermesloom/tax2.org"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
