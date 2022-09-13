import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <div>
      <ul className="container nav">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/properties">
            Properties
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/myproperties">
            My properties
          </a>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
