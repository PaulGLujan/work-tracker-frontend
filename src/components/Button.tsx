import classNames from "classnames";

type ButtonProps = {
  className?: string;
  [x: string]: any;
};

const Button = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<ButtonProps>) => {
  const classes = classNames(
    className,
    "focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
  );
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
