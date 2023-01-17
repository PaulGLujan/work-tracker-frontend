import classNames from "classnames";

type InputProps = {
  className?: string;
  [x: string]: any;
};

const Input = ({ className, ...rest }: InputProps) => {
  const classes = classNames(
    className,
    "focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
  );
  return <input {...rest} className={classes} />;
};

export default Input;
