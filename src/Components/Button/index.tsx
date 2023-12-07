interface ButtonProps {
  onClick: () => void;
  title: string;
}

const Button = ({ onClick, title }: ButtonProps) => {
  return (
    <button onClick={onClick} className=" border-2 p-2">
      {title}
    </button>
  );
};

export default Button;
