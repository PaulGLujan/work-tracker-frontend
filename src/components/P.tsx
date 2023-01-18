import classNames from "classnames";

type PropTypes = {
  className?: string;
};

const P = ({ children, className }: React.PropsWithChildren<PropTypes>) => {
  const classes = classNames(
    className,
    "text-base font-light leading-relaxed mt-0 mb-4 text-gray-800"
  );

  return <p className={classes}>{children}</p>;
};

export default P;
