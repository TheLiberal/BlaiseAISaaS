import * as React from 'react';
import { CubeIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { BookIcon, BookOpenIcon, CuboidIcon, LayoutIcon } from 'lucide-react';

import { LinkedInIcon, XIcon } from '@/components/ui/brand-icons';
import { Routes } from '@/constants/routes';

export const MENU_LINKS = [
  {
    title: 'Product',
    items: [
      {
        title: 'Blaise AI - Customer Support Agent',
        description:
          "Blaise AI is the AI-powered customer success agent that solves your customer's problems and continously learns from your human support.",
        icon: <CubeIcon className="size-5 shrink-0" />,
        href: '#',
        external: false
      }
    ]
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Contact',
        description: 'Reach out for assistance',
        icon: <PaperPlaneIcon className="size-5 shrink-0" />,
        href: Routes.Contact,
        external: false
      },
      {
        title: 'Roadmap',
        description: 'See what is coming next',
        icon: <LayoutIcon className="size-5 shrink-0" />,
        href: Routes.Roadmap,
        external: true
      },
      {
        title: 'Docs',
        description: 'Learn how to use our platform',
        icon: <BookOpenIcon className="size-5 shrink-0" />,
        href: Routes.Docs,
        external: false
      }
    ]
  },
  {
    title: 'Pricing',
    href: Routes.Pricing,
    external: false
  },
  {
    title: 'Blog',
    href: Routes.Blog,
    external: false
  },
  {
    title: 'Story',
    href: Routes.Story,
    external: false
  }
];

export const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [{ name: 'Blaise AI', href: '#', external: false }]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Contact', href: Routes.Contact, external: false },
      { name: 'Roadmap', href: Routes.Roadmap, external: true },
      { name: 'Docs', href: Routes.Docs, external: false }
    ]
  },
  {
    title: 'About',
    links: [
      { name: 'Story', href: Routes.Story, external: false },
      { name: 'Blog', href: Routes.Blog, external: false },
      { name: 'Careers', href: Routes.Careers, external: false }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Use', href: Routes.TermsOfUse, external: false },
      { name: 'Privacy Policy', href: Routes.PrivacyPolicy, external: false },
      { name: 'Cookie Policy', href: Routes.CookiePolicy, external: false }
    ]
  }
];

export const SOCIAL_LINKS = [
  {
    name: 'X (formerly Twitter)',
    href: '#',
    icon: <XIcon className="size-4 shrink-0" />
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: <LinkedInIcon className="size-4 shrink-0" />
  }
];

export const DOCS_LINKS = [
  {
    title: 'Getting Started',
    icon: <CuboidIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: 'Introduction',
        href: '/docs',
        items: []
      },
      {
        title: 'Dependencies',
        href: '/docs/dependencies',
        items: []
      }
    ]
  },
  {
    title: 'Guides',
    icon: <BookIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: 'Using MDX',
        href: '/docs/using-mdx',
        items: []
      }
    ]
  }
];
