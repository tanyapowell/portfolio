interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Title = ({ children }: Props) => (
  <h1 className="font-display leading-loose font-bold text-3xl md:text-5xl mb-4 text-gray-800 prose lg:prose-x">
    {children}
  </h1>
);

export default Title;
