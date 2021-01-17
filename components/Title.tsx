interface Props {
  children: string;
}

const Title = ({ children }: Props) => (
  <h1 className="font-display leading-loose font-bold text-3xl md:text-5xl mb-4 text-gray-800 prose lg:prose-x">
    {children}
  </h1>
);

export default Title;
