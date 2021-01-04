interface Props {
  children: string;
}

const Text = ({ children }: Props) => <p className="leading-loose font-body mb-8">{children}</p>;

export default Text;
