import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <div>
      <ul className="container nav">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link active">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/properties">
            <a className="nav-link" href="/properties">
              Properties
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/myproperties">
            <a className="nav-link" href="/myproperties">
              My properties
            </a>
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
