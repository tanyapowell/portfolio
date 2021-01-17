interface Props {
  children: string;
}

const Text = ({ children }: Props) => <div className="leading-loose font-body mb-8 prose">{children}</div>;

export default Text;
