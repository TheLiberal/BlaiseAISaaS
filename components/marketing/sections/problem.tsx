import * as React from 'react';
import { BarChartIcon, UserPlusIcon, WorkflowIcon } from 'lucide-react';

import { BlurFade } from '@/components/marketing/fragments/blur-fade';
import { GridSection } from '@/components/marketing/fragments/grid-section';
import { TextGenerateWithSelectBoxEffect } from '@/components/marketing/fragments/text-generate-with-select-box-effect';

const DATA = [
  {
    icon: <UserPlusIcon className="size-5 shrink-0" />,
    title: 'Problem 1',
    description:
      'Solving customer problems is a critical part of customer success. But it takes time to provide exceptional support and coaching.'
  },
  {
    icon: <BarChartIcon className="size-5 shrink-0" />,
    title: 'Problem 2',
    description:
      'Hiring talented customer success maangers is expensive and difficult. They need training and support to succeed.'
  },
  {
    icon: <WorkflowIcon className="size-5 shrink-0" />,
    title: 'Problem 3',
    description:
      "Q&A calls are expensive and time-consuming, yet they're rarely put to use and sit in your content library gathering dust."
  }
];

export function Problem(): React.JSX.Element {
  return (
    <GridSection>
      <div className="px-4 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-5xl">
          <TextGenerateWithSelectBoxEffect words="Exceptional Customer Support Is Difficult" />
        </h2>
      </div>
      <div className="grid divide-y border-t border-dashed md:grid-cols-3 md:divide-x md:divide-y-0">
        {DATA.map((statement, index) => (
          <BlurFade
            key={index}
            inView
            delay={0.2 + index * 0.2}
            className="border-dashed px-8 py-12"
          >
            <div className="mb-7 flex size-12 items-center justify-center rounded-2xl border bg-background shadow">
              {statement.icon}
            </div>
            <h3 className="mb-3 text-lg font-semibold">{statement.title}</h3>
            <p className="text-muted-foreground">{statement.description}</p>
          </BlurFade>
        ))}
      </div>
    </GridSection>
  );
}
