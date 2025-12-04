import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Phase 7: Contingency Planning',
  description:
    'Practical strategies for AI image/video workflows when tools fail: alternatives, salvage plans, and when to ask for help.',
  openGraph: {
    title: 'Phase 7: Contingency Planning',
    description:
      'Practical strategies for AI image/video workflows when tools fail: alternatives, salvage plans, and when to ask for help.',
    url: 'https://agentic-524b3c47.vercel.app',
    siteName: 'Phase 7: Contingency Planning',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phase 7: Contingency Planning',
    description:
      'Practical strategies for AI image/video workflows when tools fail: alternatives, salvage plans, and when to ask for help.'
  },
  metadataBase: new URL('https://agentic-524b3c47.vercel.app')
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
        <footer className="footer">
          <span>? {new Date().getFullYear()} Contingency Planning</span>
          <a
            className="link"
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
          >
            Deployed on Vercel
          </a>
        </footer>
      </body>
    </html>
  );
}

