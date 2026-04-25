import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found | The Dragon News",
};

export default function NotFound() {
  return (

    <>
    <div className="min-h-screen bg-base-100 flex flex-col items-center px-4 pb-12 relative overflow-hidden">

      {/* Red top bar */}
      <div className="w-full h-1 bg-error absolute top-0 left-0" />

      {/* Line texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(0,0,0,0.05) 28px, rgba(0,0,0,0.05) 29px)"
        }}
      />

      {/* Masthead */}
      <header className="w-full max-w-2xl text-center border-b-2 border-double border-base-content pt-6 pb-4 mt-1">
        <h1 className="text-5xl font-black tracking-wide font-serif">The Dragon News</h1>
        <p className="text-xs tracking-widest uppercase text-base-content/50 mt-1">
          Journalism Without Fear or Favour
        </p>
        <div className="flex justify-center items-center gap-3 text-xs tracking-widest uppercase text-base-content/40 mt-2 flex-wrap">
          <span>Est. 2024</span>
          <span className="text-base-content/20">|</span>
          <span>Special Error Edition</span>
          <span className="text-base-content/20">|</span>
          <span>Page Not Found</span>
        </div>
      </header>

      {/* Content */}
      <main className="w-full max-w-2xl mt-8 relative z-10">

        {/* Badge */}
        <div className="text-center mb-4">
          <span className="badge badge-error text-white tracking-widest uppercase text-xs px-4 py-3 rounded-none">
            Breaking Report
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-5xl font-black font-serif text-center border-t-2 border-b border-base-content py-3 mb-2 leading-tight">
          Page <em className="text-error not-italic">Vanishes</em>
          <br />Without a Trace
        </h2>

        {/* Subheadline */}
        <p className="text-center italic font-serif text-lg text-base-content/60 border-b-2 border-double border-base-content/30 pb-4 mb-5">
          Error 404 — Authorities confirm the requested page is nowhere to be found
        </p>

        {/* Byline */}
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-base-content/30 mb-5">
          <span>By Our Digital Correspondent · Dragon News Desk</span>
          <div className="flex-1 h-px bg-base-content/10" />
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-x-6 mb-6">
          <div className="space-y-3 text-base-content/70 text-base leading-relaxed text-justify">
            <p>
              In a shocking turn of events, the page you were seeking has gone entirely
              missing from our archives. Investigations by our editorial team have confirmed
              that no such article, section, or resource currently resides at the address
              you provided.
            </p>
            <p>
              Witnesses at the server reported seeing the URL enter the newsroom moments
              before the incident, though no one can confirm what became of it afterward.
              Search parties have been dispatched.
            </p>
          </div>

          <div className="hidden md:block bg-base-content/20 w-px" />

          <div className="space-y-3 text-base-content/70 text-base leading-relaxed text-justify mt-4 md:mt-0">
            <p>
              Officials suspect the disappearance may be due to a mistyped address, an
              outdated link, or content that has since been removed from our records. The
              Dragon News takes full responsibility for keeping our readers informed.
            </p>
            <p>
              We urge all readers to return to the homepage, where the latest and most
              reliable reporting continues uninterrupted. Our editors remain on the case
              and will report any developments as they arise.
            </p>
          </div>
        </div>

        {/* Ornament */}
        <p className="text-center text-base-content/20 tracking-[14px] text-lg mb-4">— ✦ —</p>

        {/* Action buttons */}
        <nav className="flex items-center justify-center flex-wrap gap-3 border-t-2 border-b-2 border-base-content py-4">
          <Link href="/" className="btn btn-error btn-sm rounded-none text-white tracking-widest uppercase text-xs">
            Return Home
          </Link>
          <span className="text-base-content/20 text-xl">·</span>
          <Link href="/" className="btn btn-outline btn-sm rounded-none tracking-widest uppercase text-xs">
            Latest News
          </Link>
          <span className="text-base-content/20 text-xl">·</span>
          <Link href="/" className="btn btn-outline btn-sm rounded-none tracking-widest uppercase text-xs">
            All Categories
          </Link>
        </nav>

        {/* Footer note */}
        <p className="text-center text-xs tracking-widest uppercase text-base-content/30 mt-5">
          The Dragon News — All stories verified · Error code: 404
        </p>

      </main>
    </div>
    </>
  );
}