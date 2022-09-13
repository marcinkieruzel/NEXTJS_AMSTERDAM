import React from "react";

type Props = {};

const index: React.FC<Props> = ({}): JSX.Element => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <img
              src="https://cvr.com.vn/app/uploads/2022/09/z3704931436576_211281f87c476a4322f3458b3f96453e.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                HYATT DA NANG BLOCK D 3 BEDROOM APARTMENT FOR RENT
              </h5>
              <p className="card-text">
                The Hyatt Regency Danang Residences is an exclusive lifestyle
                community featuring luxury condominiums and villas situated
                within a 5-star resort in
              </p>
              <p className="card-text">
                <strong>Price:</strong> 2000$
              </p>
              <a href="/properties/ssr/test" className="btn btn-primary">
                Go to the property (ssr)
              </a>
              <a href="/properties/isr/test" className="btn btn-primary">
                Go to the property (isr)
              </a>
              <a href="/properties/ssg/test" className="btn btn-primary">
                Go to the property (ssg)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
