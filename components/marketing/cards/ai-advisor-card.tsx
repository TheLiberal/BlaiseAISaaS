import * as React from 'react';
import Link from 'next/link';
import {
  CalendarIcon,
  DollarSignIcon,
  GlobeIcon,
  LineChartIcon,
  MapPinIcon,
  User2Icon
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardFooter,
  type CardProps
} from '@/components/ui/card';

function VercelLogo(): React.JSX.Element {
  return (
    <svg
      height="20"
      width="20"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      aria-label="Vercel Logo"
      className="text-black dark:text-white"
    >
      <g clipPath="url(#clip0_872_3186)">
        <circle
          cx="8"
          cy="8"
          r="7.25"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4.5L11.5 10.625H4.5L8 4.5Z"
          fill="currentColor"
          className="text-white dark:text-black"
        />
      </g>
      <defs>
        <clipPath id="clip0_872_3186">
          <rect
            width="16"
            height="16"
            fill="currentColor"
            className="text-white dark:text-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function AiAdvisorCard(props: CardProps): React.JSX.Element {
  return (
    <Card {...props}>
      <CardContent className="pt-6">
        <div className="mb-3 flex items-center gap-2">
          <VercelLogo />
          <h2 className="text-xl font-semibold">Blaise AI</h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <GlobeIcon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">Domain</span>
            <Link
              href="https://blaiseai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500"
            >
              https://blaiseai.com
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <User2Icon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">
              Job Title
            </span>
            <span className="text-sm">AI Customer Success Manager</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">Founded</span>
            <span className="text-sm">2024</span>
          </div>
          <div className="flex items-center gap-2">
            <LineChartIcon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">
              Problems Solved
            </span>
            <span className="text-sm">9369</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">Location</span>
            <span className="text-sm">Internet</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSignIcon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">
              Ready To Work?
            </span>
            <span className="text-sm">Same Day</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start space-y-4 rounded-b-xl bg-neutral-50 pt-6 dark:bg-neutral-900">
        <h3 className="text-base font-semibold sm:text-lg">AI Advisor</h3>
        <div className="min-h-10 max-w-md text-sm text-muted-foreground">
          Blaise AI currently solves an average of 749 customer problems per
          day.
        </div>
      </CardFooter>
    </Card>
  );
}
