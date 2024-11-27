import * as React from 'react';

import { GridSection } from '@/components/marketing/fragments/grid-section';

const DATA = [
  {
    date: '2024, October 20th',
    title: 'Initial Test Cohort',
    description:
      'Launched Blaise AI to a test cohort of ~40 customers and received overwhelmingly positive feedback after the first 2 weeks.'
  },
  {
    date: '2024, November 6th',
    title: 'First Official Roll-out',
    description:
      'Launched Blaise AI to our first community of over 526 customers.'
  },
  {
    date: '2024, January 20th',
    title: 'Growth Acceleration',
    description:
      'By now we’ve solved over 10,015 customer problems, setting new standards for intelligent, scalable support.'
  }
];

export function StoryTimeline(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container max-w-6xl py-20">
        <h2 className="mb-16 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          The road so far
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />
          <div className="space-y-16">
            {DATA.map((milestone, index) => (
              <div
                key={index}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 flex size-8 items-center justify-center rounded-full border bg-background">
                  <div className="size-2.5 rounded-full bg-primary" />
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {milestone.date}
                </div>
                <h3 className="mb-4 text-xl font-medium">{milestone.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GridSection>
  );
}
