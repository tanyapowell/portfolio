interface Props {
  children: string;
}

const Title = ({ children }: Props) => (
  <h1 className="font-display leading-relaxed font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
    {children}
  </h1>
);

export default Title;
