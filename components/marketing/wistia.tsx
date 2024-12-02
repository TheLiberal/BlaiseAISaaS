'use client';

import Script from 'next/script';

interface WistiaVideoProps {
  videoId: string;
}

export default function WistiaVideo({ videoId }: WistiaVideoProps) {
  return (
    <>
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="afterInteractive"
      />
      <Script
        src={`https://fast.wistia.com/embed/medias/${videoId}.jsonp`}
        strategy="afterInteractive"
      />

      <div
        className="wistia_responsive_padding animate-fade-in overflow-hidden rounded-xl"
        style={{ padding: '56.04% 0 0 0', position: 'relative' }}
      >
        <div
          className="wistia_responsive_wrapper rounded-xl overflow-hidden"
          style={{
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100%'
          }}
        >
          <div
            className={`wistia_embed wistia_async_${videoId} videoFoam=true rounded-xl overflow-hidden`}
            style={{ height: '100%', position: 'relative', width: '100%' }}
          >
            <div
              className="wistia_swatch rounded-xl overflow-hidden"
              style={{
                height: '100%',
                left: 0,
                opacity: 0,
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                transition: 'opacity 200ms',
                width: '100%'
              }}
            >
              <img
                src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
                style={{
                  filter: 'blur(5px)',
                  height: '100%',
                  objectFit: 'contain',
                  width: '100%'
                }}
                alt=""
                aria-hidden="true"
                ref={(el) => {
                  if (el && el.complete) {
                    el.parentElement!.style.opacity = '1';
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
