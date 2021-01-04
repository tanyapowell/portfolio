interface Props {
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const ExternalLink = ({ href, children }: Props) => (
  <a
    className="flex text-sm text-gray-500 hover:text-gray-600 transition mb-4"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default ExternalLink;
