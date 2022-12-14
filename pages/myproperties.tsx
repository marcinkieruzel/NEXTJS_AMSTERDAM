import React from "react";

type Props = {};

const Myproperties: React.FC<Props> = ({}): JSX.Element => {
  return (
    <section className="container">
      <ul className="list-group">
        <li className="list-group-item">Property name with link</li>
      </ul>
      <hr />
      <form>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            aria-label="E-mail"
            aria-describedby="basic-addon1"
          />
        </div>
        <button type="button" className="btn btn-primary">
          Send the lead
        </button>
      </form>
    </section>
  );
};

export default Myproperties;
