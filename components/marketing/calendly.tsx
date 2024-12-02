import Script from 'next/script';

interface CalendlyProps {
  eventLink?: string;
  backgroundColor?: string;
  textColor?: string;
  primaryColor?: string;
  height?: number;
  hideGdprBanner?: boolean;
}

export function Calendly({
  eventLink = 'https://calendly.com/blaise-ai/strategy-call',
  backgroundColor = 'ffffff',
  textColor = 'ffffff',
  primaryColor = 'ffffff',
  height = 700,
  hideGdprBanner = true
}: CalendlyProps) {
  const calendlyUrl = `${eventLink}?hide_gdpr_banner=${hideGdprBanner}&background_color=${backgroundColor}&text_color=${textColor}&primary_color=${primaryColor}`;

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget w-full"
        data-url={calendlyUrl}
        style={{
          minWidth: '320px',
          height: `${height}px`
        }}
      />
    </>
  );
}
