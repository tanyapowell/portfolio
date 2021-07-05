import NextLink from 'next/link';

interface Props {
  link: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  isNav?: boolean;
}

const Link = ({ link, children, isNav }: Props) => (
  <NextLink href={link}>
    {isNav ? (
      <a className="p-1 sm:p-4 text-gray-900 mx:8 font-body text-xl">{children}</a>
    ) : (
      <a className="text-gray-900 font-body">{children}</a>
    )}
  </NextLink>
);

export default Link;
