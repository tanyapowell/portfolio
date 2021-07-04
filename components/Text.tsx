interface Props {
  children: string;
  textSize?: string;
}

const Text = ({ children, textSize = 'text-lg' }: Props) => {
  const classnames = `leading-loose ${textSize} font-body prose`;
  return <p className={classnames}>{children}</p>;
};

export default Text;
