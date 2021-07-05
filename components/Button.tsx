interface Props {
  children: string;
}

const Button = ({ children }: Props) => (
  <button className="border-solid border-4 border-light-blue-500 w-52 h-20 text-2xl font-display text-center my-8">
    {children}
  </button>
);

export default Button;
