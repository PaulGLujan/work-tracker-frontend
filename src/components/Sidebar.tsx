import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { label: "Time Form", path: "/" },
    { label: "Working Page", path: "/working" },
  ];

  const renderedLinks = links.map((link) => {
    const classes = classNames(
      "text-blue-500 mb-3",
      location.pathname === link.path &&
        "font-bold border-l-4 border-blue-500 pl-2"
    );

    return (
      <Link key={link.label} to={link.path} className={classes}>
        {link.label}
      </Link>
    );
  });
  return (
    <div className="time-start sticky top-0 flex flex-col overflow-y-scroll">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
