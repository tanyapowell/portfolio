interface Props {
  marginTop?: string;
}

const HorizontalRule = ({ marginTop }: Props) => (
  <hr
    style={{
      width: '80%',
      borderColor: 'var(--main-accent-color)',
      margin: 'auto',
      marginBottom: '40px',
      marginTop: `${marginTop ?? '40px'}`,
    }}
  />
);

export default HorizontalRule;
