import React from "react";
import { Property } from "../../interfaces";
import Link from "next/link";
import Image from "next/image";

const index = ({ properties }: { properties: Property[] }): JSX.Element => {
  return (
    <section className="container">
      <div className="row">
        {properties.map((property: Property) => {
          return (
            <div className="col-4">
              <div className="card">
                {typeof property.thumb === "string" && (
                  <figure style={{position: "relative", width: "100%", height: "200px"}}>
                    <Image src={property.thumb} layout="fill" objectFit="cover" />
                  </figure>
                )}

                <div className="card-body">
                  <h5 className="card-title">{property.title}</h5>
                  <div
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: property.excerpt }}
                  ></div>
                  <p className="card-text">
                    <strong>Price:</strong> $ {property.fields.price} $
                  </p>
                  <Link href={`/properties/ssr/${property.id}`}>
                    <a
                      href={`/properties/ssr/${property.id}`}
                      className="btn btn-primary"
                    >
                      Go to the property (ssr)
                    </a>
                  </Link>
                  <Link href={`/properties/isr/${property.id}`}>
                    <a
                      href={`/properties/isr/${property.id}`}
                      className="btn btn-primary"
                    >
                      Go to the property (isr)
                    </a>
                  </Link>
                  <Link href={`/properties/ssg/${property.id}`}>
                    <a
                      href={`/properties/ssg/${property.id}`}
                      className="btn btn-primary"
                    >
                      Go to the property (ssg)
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default index;

export async function getServerSideProps() {
  try {
    const res = fetch(`http://localhost:3004/properties`);
    const json = (await res).json();

    return {
      props: {
        properties: await json,
      },
    };
  } catch (error) {
    return {
      props: {
        properties: [],
      },
    };
  }
}
