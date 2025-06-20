import './globals.css';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="en">
      <head>
        <title>Edson&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Edson | Developer | Tester "></meta>
        <link rel="author" href="https://edson-li.vercel.app"></link>
        <meta name="author" content="Edson Li"></meta>
        <meta name="keywords" content="Edson,Portfolio,Resume"></meta>
      </head>
      <body className={inter.className}>{children}</body>
      {googleAnalyticsId && <GoogleAnalytics gaId={googleAnalyticsId} />}
    </html>
  );
}