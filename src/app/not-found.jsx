
import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found | The Dragon News",
};

export default function NotFound() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Crimson+Text:ital@0;1&display=swap');

        .dn-404-page {
          font-family: 'Crimson Text', Georgia, serif;
          background: #faf9f6;
          color: #1a1a1a;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem 3rem;
          position: relative;
          overflow: hidden;
        }

        .dn-404-page::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: #c0392b;
        }

        .dn-paper-texture {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 28px,
            rgba(0,0,0,0.03) 28px,
            rgba(0,0,0,0.03) 29px
          );
          pointer-events: none;
        }

        .dn-header {
          text-align: center;
          border-bottom: 3px double #1a1a1a;
          padding: 1.4rem 2rem 0.9rem;
          width: 100%;
          max-width: 680px;
        }

        .dn-masthead {
          font-family: 'UnifrakturMaguntia', 'Palatino Linotype', serif;
          font-size: clamp(32px, 6vw, 48px);
          color: #1a1a1a;
          line-height: 1;
          letter-spacing: 1px;
        }

        .dn-tagline {
          font-family: 'Crimson Text', serif;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #666;
          margin-top: 4px;
        }

        .dn-date-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #888;
          margin-top: 6px;
          font-family: 'Crimson Text', serif;
          flex-wrap: wrap;
        }

        .dn-date-bar span { color: #ccc; }

        .dn-content {
          width: 100%;
          max-width: 680px;
          margin-top: 2rem;
          position: relative;
          z-index: 1;
        }

        .dn-badge-wrap {
          text-align: center;
          margin-bottom: 1rem;
        }

        .dn-edition-badge {
          display: inline-block;
          background: #c0392b;
          color: #fff;
          font-family: 'Crimson Text', serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 3px 12px;
        }

        .dn-headline {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(34px, 6vw, 52px);
          font-weight: 700;
          line-height: 1.05;
          text-align: center;
          border-top: 2px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
          padding: 0.6rem 0;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
          color: #1a1a1a;
        }

        .dn-headline em {
          color: #c0392b;
          font-style: italic;
        }

        .dn-subheadline {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-style: italic;
          text-align: center;
          color: #555;
          border-bottom: 3px double #bbb;
          padding-bottom: 0.9rem;
          margin-bottom: 1.2rem;
        }

        .dn-byline {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 0.9rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dn-byline::after {
          content: '';
          flex: 1;
          height: 0.5px;
          background: #ddd;
        }

        .dn-columns {
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          gap: 0 1.4rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 540px) {
          .dn-columns {
            grid-template-columns: 1fr;
          }
          .dn-col-divider { display: none; }
        }

        .dn-col-divider {
          background: #ccc;
          width: 1px;
          margin: 0 auto;
        }

        .dn-col p {
          font-size: 16px;
          line-height: 1.78;
          color: #444;
          text-align: justify;
          margin-bottom: 0.9rem;
        }

        .dn-col p:first-child::first-letter {
          float: left;
          font-family: 'Playfair Display', serif;
          font-size: 56px;
          font-weight: 700;
          line-height: 0.75;
          margin: 6px 6px 0 0;
          color: #1a1a1a;
        }

        .dn-ornament {
          text-align: center;
          font-size: 20px;
          color: #bbb;
          margin: 0.4rem 0 1rem;
          letter-spacing: 14px;
        }

        .dn-action-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 2px solid #1a1a1a;
          border-bottom: 2px solid #1a1a1a;
          padding: 0.9rem 0;
        }

        .dn-btn {
          font-family: 'Crimson Text', serif;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 7px 22px;
          border: 1.5px solid #1a1a1a;
          background: transparent;
          color: #1a1a1a;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.18s, color 0.18s;
        }

        .dn-btn:hover {
          background: #1a1a1a;
          color: #faf9f6;
        }

        .dn-btn-primary {
          background: #c0392b;
          color: #fff !important;
          border-color: #c0392b;
        }

        .dn-btn-primary:hover {
          background: #922b21;
          border-color: #922b21;
          color: #fff !important;
        }

        .dn-sep {
          color: #ccc;
          font-size: 20px;
          line-height: 1;
        }

        .dn-footer-note {
          text-align: center;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #aaa;
          margin-top: 1.4rem;
          font-family: 'Crimson Text', serif;
        }
      `}</style>

      <div className="dn-404-page">
        <div className="dn-paper-texture" aria-hidden="true" />

        {/* Header / Masthead */}
        <header className="dn-header">
          <h1 className="dn-masthead">The Dragon News</h1>
          <p className="dn-tagline">Journalism Without Fear or Favour</p>
          <div className="dn-date-bar">
            <span>Est. 2024</span>
            <span>|</span>
            <span>Special Error Edition</span>
            <span>|</span>
            <span>Page Not Found</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="dn-content">
          <div className="dn-badge-wrap">
            <span className="dn-edition-badge">Breaking Report</span>
          </div>

          <h2 className="dn-headline">
            Page <em>Vanishes</em>
            <br />
            Without a Trace
          </h2>

          <p className="dn-subheadline">
            Error 404 — Authorities confirm the requested page is nowhere to be found
          </p>

          <p className="dn-byline">
            By Our Digital Correspondent &nbsp;&middot;&nbsp; Dragon News Desk
          </p>

          <div className="dn-columns">
            <div className="dn-col">
              <p>
                In a shocking turn of events, the page you were seeking has gone entirely
                missing from our archives. Investigations by our editorial team have
                confirmed that no such article, section, or resource currently resides at
                the address you provided.
              </p>
              <p>
                Witnesses at the server reported seeing the URL enter the newsroom moments
                before the incident, though no one can confirm what became of it afterward.
                Search parties have been dispatched.
              </p>
            </div>

            <div className="dn-col-divider" aria-hidden="true" />

            <div className="dn-col">
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

          <div className="dn-ornament" aria-hidden="true">
            — ✦ —
          </div>

          <nav className="dn-action-bar" aria-label="Recovery options">
            <Link href="/" className="dn-btn dn-btn-primary">
              Return Home
            </Link>
            <span className="dn-sep" aria-hidden="true">&middot;</span>
            <Link href="/" className="dn-btn">
              Latest News
            </Link>
            <span className="dn-sep" aria-hidden="true">&middot;</span>
            <Link href="/" className="dn-btn">
              All Categories
            </Link>
          </nav>

          <p className="dn-footer-note">
            The Dragon News — All stories verified &nbsp;&middot;&nbsp; Error code: 404
          </p>
        </main>
      </div>
    </>
  );
}