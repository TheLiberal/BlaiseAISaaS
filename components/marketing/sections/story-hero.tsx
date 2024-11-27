import * as React from 'react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';

export function StoryHero(): React.JSX.Element {
  return (
    <GridSection hideVerticalGridLines>
      <div className="container py-24 md:py-32">
        <SiteHeading
          badge="Our Story"
          title="Reinventing Customer Support in the AI era"
          description="By combining AI-powered assistance with human expertise, we've helped hundreds of businesses increase satisfaction while reducing costs. Today, we process over 9,000 customer inquiries daily, setting new standards for intelligent, scalable support."
        />
      </div>
    </GridSection>
  );
}
