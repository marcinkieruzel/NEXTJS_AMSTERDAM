import React, { useContext } from "react";
import { UserChoicesContex } from "./_app";

type Props = {};

const Myproperties: React.FC<Props> = ({}): JSX.Element => {

  const context = useContext(UserChoicesContex)

  return (
    <section className="container">
      <ul className="list-group">

          {
            context.userChoices.map((x,i) => {
              return <li key={i} className="list-group-item">{x.title}</li>
            })
          }

        
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
