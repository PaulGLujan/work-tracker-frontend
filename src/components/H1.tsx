import classNames from "classnames";

type PropTypes = {
  className?: string;
};

const H1 = ({ children, className }: React.PropsWithChildren<PropTypes>) => {
  const classes = classNames(
    className,
    "mt-0 mb-2 text-5xl font-medium leading-tight"
  );

  return <h1 className={classes}>{children}</h1>;
};

export default H1;
