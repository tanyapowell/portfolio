interface Props {
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  marginBottom?: string;
}

const ExternalLink = ({ href, children, marginBottom = 'mb-4' }: Props) => {
  const classnames = `flex transition ${marginBottom} w-full justify-center`;
  return (
    <a className={classnames} target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
};

export default ExternalLink;
