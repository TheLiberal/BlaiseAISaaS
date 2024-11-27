import * as React from 'react';

// import { ClockIcon, MapPinIcon } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';

// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';

// const DATA = [
//   {
//     title: 'Senior Software Engineer',
//     department: 'Engineering',
//     description:
//       'You will be responsible for the development of new and existing software products.',
//     type: 'Full-time',
//     location: 'Remote'
//   },
//   {
//     title: 'Product Manager',
//     department: 'Engineering',
//     description: 'Help us build the next generation of Acme products.',
//     type: 'Full-time',
//     location: 'Remote'
//   },
//   {
//     title: 'Content Writer',
//     department: 'Marketing',
//     description:
//       'Create engaging content for our blog, website, and social media channels.',
//     type: 'Full-time',
//     location: 'Remote'
//   },
//   {
//     title: 'Social Media Manager',
//     department: 'Marketing',
//     description:
//       'Manage our social media presence and engage with our followers.',
//     type: 'Full-time',
//     location: 'Remote'
//   }
// ];

export function CareersPositions(): React.JSX.Element {
  return (
    <GridSection>
      <div className="space-y-12 py-20">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">
          Open Positions
        </h2>
        <div className="container mx-auto max-w-4xl text-center text-muted-foreground">
          <p>There are no open positions at the moment.</p>
          <p className="mt-2">
            Please check back later for future opportunities.
          </p>
        </div>
      </div>
    </GridSection>
  );
}
