import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://akshad-dhole.vercel.app"),

  title: {
    default: "Akshad Dhole — Software Developer",
    template: "%s | Akshad Dhole",
  },

  description:
    "Portfolio of Akshad Dhole — Software Developer specializing in React, Next.js, Node.js, MongoDB, WebSockets, and scalable web applications.",

  keywords: [
    "Akshad Dhole",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "MERN Developer",
    "Portfolio",
  ],

  authors: [{ name: "Akshad Dhole" }],
  creator: "Akshad Dhole",

  alternates: {
    canonical: "https://akshad-dhole.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://akshad-dhole.vercel.app",
    siteName: "Akshad Dhole Portfolio",
    title: "Akshad Dhole — Software Developer",
    description:
      "I build modern, scalable applications using React, Next.js, TypeScript, Node.js, MongoDB, and cloud-native architectures.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akshad Dhole Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Akshad Dhole — Software Developer",
    description:
      "Portfolio of Software Developer specializing in full-stack development, React, Next.js, and scalable cloud architectures.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="googled266750753bb2782"
        />
      </head>

      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akshad Dhole",
              jobTitle: "Software Developer",
              url: "https://akshad-dhole.vercel.app",
              sameAs: [
                "https://github.com/akshad11",
                "https://www.linkedin.com/in/akshad-/",
              ],
              description:
                "Software Developer experienced in React, Next.js, Node.js, MongoDB, Tailwind, and real-time applications.",
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
