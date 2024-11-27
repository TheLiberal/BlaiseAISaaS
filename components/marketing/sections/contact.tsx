// 'use client';

import * as React from 'react';
import { MailIcon } from 'lucide-react';

// import { toast } from 'sonner';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';

// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';

export function Contact(): React.JSX.Element {
  // const handleSendMessage = (): void => {
  //   toast.error("I'm not implemented yet.");
  // };
  return (
    <GridSection>
      <div className="container space-y-20 py-20">
        <SiteHeading
          badge="Contact"
          title={
            <>
              We&apos;d love to hear
              <br /> from you!
            </>
          }
        />
        <div className="lg:container lg:max-w-6xl">
          <div className="grid place-items-center">
            <div className="max-w-xl space-y-8 text-center">
              <h3 className="text-4xl font-semibold">Get in touch</h3>
              <p className="text-muted-foreground">
                If you have any questions, don't hesitate to contact our team.
                We'll get back to you within 48 hours.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-medium">Contact details</h4>
                <div className="flex justify-center gap-3">
                  <ContactInfo
                    icon={MailIcon}
                    text={
                      <a href="mailto:support@blaiseai.com">
                        support@blaiseai.com
                      </a>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}

type ContactInfoProps = {
  icon: React.ElementType;
  text: string | JSX.Element;
};

function ContactInfo({
  icon: Icon,
  text
}: ContactInfoProps): React.JSX.Element {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="size-4 shrink-0 text-muted-foreground" />
      <span>{text}</span>
    </div>
  );
}
