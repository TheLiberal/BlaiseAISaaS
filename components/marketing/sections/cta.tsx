import * as React from 'react';
import Link from 'next/link';

import { BlurFade } from '@/components/marketing/fragments/blur-fade';
import { GridSection } from '@/components/marketing/fragments/grid-section';
import { TextGenerateEffect } from '@/components/marketing/fragments/text-generate-effect';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CTA(): React.JSX.Element {
  return (
    <GridSection className="bg-diagonal-lines">
      <div className="container flex flex-col items-center justify-between gap-2 bg-background py-8 text-center">
        <h3 className="m-0 max-w-fit text-3xl font-semibold md:text-4xl">
          <TextGenerateEffect words="Ready to start?" />
        </h3>
        <BlurFade
          inView
          className="w-full"
        >
          <div
            id="book-demo"
            className="mx-auto p-0 m-0"
          >
            <div className="h-[100px] bg-background flex items-center justify-center">
              <Link
                href="https://calendly.com/blaise-ai/strategy-call"
                className={cn(
                  buttonVariants({
                    variant: 'default'
                  }),
                  'rounded-xl'
                )}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
