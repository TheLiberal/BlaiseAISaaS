'use client';

import Script from 'next/script';

interface CalendlyProps {
  eventLink: string;
}

export function Calendly({ eventLink }: CalendlyProps) {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <div
        className="calendly-inline-widget size-full"
        data-url={`${eventLink}?hide_gdpr_banner=1&background_color=050505&text_color=ffffff&primary_color=ffffff`}
        style={{ height: '900px', width: '800px' }}
      />
    </>
  );
}
