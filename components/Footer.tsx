import React from 'react';

import ExternalLink from '@/components/ExternalLink';
import Link from '@/components/Link';
import { email, github, linkedin, twitter } from '@/components/svgs';

const footerItems = [
  { platform: 'twitter', user: 'tanya_powell', svg: twitter },
  { platform: 'github', user: 'tanyapowell', svg: github },
  { platform: 'linkedin', user: 'in/tanyapowell', svg: linkedin },
];

const Footer = () => (
  <footer className="flex flex-col items-center my-8">
    <div className="flex space-x-4">
      {footerItems.map((item) => (
        <React.Fragment key={item.platform}>
          <span className="sr-only">{item.platform}</span>
          <Link link={`https://${item.platform}.com/${item.user}`}>{item.svg}</Link>
        </React.Fragment>
      ))}
      <span className="sr-only">Email</span>
      <ExternalLink href="mailto:hello@tanyapowell.co.uk" marginBottom="0">
        {email}
      </ExternalLink>
    </div>

    {/* <div className="flex space-x-4 mb-4">
      <Link link="/appearances">/appearances</Link>
      <Link link="/uses">/uses</Link>
      <Link link="/tweets">/tweets</Link>
    </div> */}
  </footer>
);

export default Footer;
