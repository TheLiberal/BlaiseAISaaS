import * as React from 'react';
import Link from 'next/link';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { AppInfo } from '@/constants/app-info';
import { Routes } from '@/constants/routes';

const DATA = [
  {
    question: `What does ${AppInfo.APP_NAME} do?`,
    answer: `${AppInfo.APP_NAME} is your AI-powered Slack assistant for enhanced customer support and team collaboration. It provides instant answers to common questions, freeing up your team to focus on higher-value tasks.`
  },
  {
    question: 'How will this benefit my business?',
    answer: `By automating responses to repetitive inquiries, ${AppInfo.APP_NAME} drastically reduces CSM time spent on Slack, boosting productivity and allowing for more meaningful client interactions. It also saves you money by reducing the need for additional support staff.`
  },
  {
    question: 'Is my data safe?',
    answer: `Absolutely.  ${AppInfo.APP_NAME} only uses data from your approved sources (e.g., course content, call recordings, Slack conversations). We prioritize your data security and follow industry best practices to keep your information protected.`
  },
  {
    question: 'What kind of integrations are available?',
    answer: `${AppInfo.APP_NAME} integrates directly with Slack and can pull information from a variety of sources, such as Notion, Google Docs, and more. We are also exploring integration with CRM platforms like Kajabi.`
  },
  {
    question: 'How easy is it to onboard my team?',
    answer: `We've designed ${AppInfo.APP_NAME} for easy onboarding. Blaise provides quick setup, intuitive prompts, and customized training to ensure a smooth transition for your team. `
  },
  {
    question: 'What types of businesses can use this?',
    answer: `Any business that uses Slack for internal communications or customer support can benefit from ${AppInfo.APP_NAME}. It's particularly valuable for online courses, coaching programs, and other membership communities.`
  },
  {
    question: 'Can I customize this to fit my business needs?',
    answer: `Yes, ${AppInfo.APP_NAME} can be tailored to your specific requirements. We can work with you to define custom prompts, integrate with your specific data sources, and create a truly personalized experience.`
  }
];

export function FAQ(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 hidden text-muted-foreground md:block lg:max-w-[75%]">
              Haven't found what you're looking for? Try{' '}
              <Link
                href={Routes.Contact}
                className="font-normal text-inherit underline hover:text-foreground"
              >
                contacting
              </Link>{' '}
              us, we are glad to help.
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-xl flex-col">
            <Accordion
              type="single"
              collapsible
            >
              {DATA.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={index.toString()}
                >
                  <AccordionTrigger className="text-left text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
