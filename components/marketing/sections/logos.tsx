import * as React from 'react';
import Image from 'next/image';
import FEGP from 'public/marketing/logos/fegp.webp';
import TGP from 'public/marketing/logos/tgp.webp';

import { BlurFade } from '@/components/marketing/fragments/blur-fade';
import { GridSection } from '@/components/marketing/fragments/grid-section';

const DATA = [{ icon: FEGP }, { icon: TGP }];

export function Logos(): React.JSX.Element {
  return (
    <GridSection className="bg-diagonal-lines">
      <div className="flex flex-col items-center justify-between gap-2 bg-background p-8 sm:flex-row sm:py-4">
        <BlurFade className="mb-6 sm:mb-0">
          <p className="max-w-[220px] text-center text-sm text-muted-foreground sm:text-left">
            Trusted by the fastest-growing education companies in the world
          </p>
        </BlurFade>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:max-w-4xl lg:gap-10">
          {DATA.map(({ icon: Icon }, index) => (
            <BlurFade
              key={index}
              delay={0.2 + index * 0.2}
              className="flex items-center justify-center text-neutral-700 dark:text-neutral-300"
            >
              <Image
                src={Icon}
                alt="logo"
                className="h-10 w-auto"
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}
