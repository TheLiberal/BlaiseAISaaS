import './globals.css';

import * as React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/app/providers';
import { Toaster } from '@/components/ui/sonner';
import { AppInfo } from '@/constants/app-info';
import { getBaseUrl } from '@/lib/urls/get-base-url';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: AppInfo.APP_NAME,
  description: AppInfo.APP_DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `${getBaseUrl()}/manifest`,
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    title: AppInfo.APP_NAME,
    description: AppInfo.APP_DESCRIPTION,
    siteName: AppInfo.APP_NAME,
    images: [
      {
        url: `${getBaseUrl()}/og-image.png`,
        width: 1200,
        height: 630,
        alt: AppInfo.APP_NAME
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: AppInfo.APP_NAME,
    description: AppInfo.APP_DESCRIPTION,
    images: [`${getBaseUrl()}/og-image.png`]
  }
};

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children
}: React.PropsWithChildren): Promise<React.JSX.Element> {
  return (
    <html
      lang="en"
      className="size-full min-h-screen"
      suppressHydrationWarning
    >
      <body className={`${inter.className} size-full`}>
        <Providers>
          {children}
          <React.Suspense>
            <Toaster />
          </React.Suspense>
        </Providers>
      </body>
    </html>
  );
}
