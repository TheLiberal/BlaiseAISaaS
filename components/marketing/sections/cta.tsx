import * as React from 'react';

import { BlurFade } from '@/components/marketing/fragments/blur-fade';
import { GridSection } from '@/components/marketing/fragments/grid-section';
import { TextGenerateEffect } from '@/components/marketing/fragments/text-generate-effect';

import { CalEmbed } from '../cal';

export function CTA(): React.JSX.Element {
  return (
    <GridSection className="bg-diagonal-lines">
      <div className="container flex flex-col items-center justify-between gap-6 bg-background py-16 text-center">
        <h3 className="m-0 max-w-fit text-3xl font-semibold md:text-4xl">
          <TextGenerateEffect words="Ready to start?" />
        </h3>
        <BlurFade
          inView
          className="w-full"
        >
          <div
            id="book-demo"
            className="w-full max-w-7xl mx-auto bg-background"
          >
            <div className="h-[700px] overflow-hidden bg-background">
              <CalEmbed />
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
