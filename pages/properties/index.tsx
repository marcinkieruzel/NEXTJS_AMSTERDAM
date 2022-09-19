import React, { useEffect, useState } from "react";
import useSwr from "swr";
import Image from "next/image";
import Link from "next/link"

const fetcher = (url) => fetch(url).then((r) => r.json());

type Props = {};

const index: React.FC<Props> = ({}): JSX.Element => {
  // const [data, setData] = useState([]);

  const { data, error } = useSwr(`http://localhost:3004/properties`, fetcher);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch(`http://localhost:3004/properties`);
  //       const json = await res.json();

  //       setData(json);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  if (error) return <p>Error</p>;
  if (!data) return <p>Loading ...</p>;

  return (
    <section className="container">
      <div className="row">
        {data &&
          data?.map((x, i) => {
            return (
              <div className="col-4">
                <div className="card">
                  {/* <img src={x.thumb} className="card-img-top" alt="..." /> */}

                  <Image width={200} height={200} layout="responsive"  src={x.thumb} />

                  <div className="card-body">
                    <h5 className="card-title">{x.title}</h5>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{ __html: x.excerpt }}
                    ></p>
                    <p className="card-text">
                      <strong>Price:</strong> {x.fields.price}
                    </p>
                    <Link
                      href={`/properties/ssr/${x.id}`}
                      className="btn btn-primary"
                    >
                      Go to the property (ssr)
                    </Link>
                    <Link
                      href={`/properties/isr/${x.id}`}
                      className="btn btn-primary"
                    >
                      Go to the property (isr)
                    </Link>
                    <Link
                      href={`/properties/ssg/${x.id}`}
                      className="btn btn-primary"
                    >
                      Go to the property (ssg)
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
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
