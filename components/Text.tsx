interface Props {
  children: any;
  textSize?: string;
}

const Text = ({ children, textSize = 'text-lg' }: Props) => {
  const classnames = `leading-loose ${textSize} font-body prose my-4`;
  return <p className={classnames}>{children}</p>;
};

export default Text;
