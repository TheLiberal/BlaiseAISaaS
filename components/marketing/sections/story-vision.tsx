import * as React from 'react';

import { GridSection } from '@/components/marketing/fragments/grid-section';

export function StoryVision(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container max-w-6xl py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Our vision
            </h2>
            <p className="text-2xl font-medium leading-relaxed md:text-3xl">
              "Customer support shouldn't just answer questions — it should
              actively solve problems and drive student success."
            </p>
          </div>
          <div className="space-y-6 text-base text-muted-foreground md:text-lg">
            <p>
              Traditional customer support was built for a different era. We're
              creating the first true AI customer success agent that goes beyond
              basic Q&A to deliver personalized, proactive support at scale for
              education companies.
            </p>
            <p>
              By combining advanced AI technology with deep education industry
              expertise, we've created an intelligent agent that enhances your
              support team's capabilities—solving routine problems
              automatically, reducing response times, and empowering human
              agents to focus on complex cases that truly need their expertise.
              The result? Higher student satisfaction, lower support costs, and
              better learning outcomes.
            </p>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
