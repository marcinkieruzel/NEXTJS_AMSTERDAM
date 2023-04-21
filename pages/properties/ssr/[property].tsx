import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Property } from "../../../interfaces";

type Props = {
  property: Property;
};

const Property: React.FC<Props> = ({ property }): JSX.Element => {
  return (
    <section className="container">
      <hr />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {(property?.fields?.gallery || []).map((p: string) => {
          return (
            <SwiperSlide key={p}>
              <div
                style={{
                  height: "400px",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundImage: `url(${p})`,
                }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <hr />
      <div className="row">
        <div className="col-9">
          <h1>{property.title}</h1>
          <h2>Price: {property.fields.price}$</h2>

          <p className="lead">{property.excerpt}</p>

          <ul className="list-group">
            <li className="list-group-item">Bedrooms: 3</li>
            <li className="list-group-item">Baths: 2</li>
            <li className="list-group-item">Space: 100 square meters</li>
          </ul>
        </div>

        <div className="col-3">
          <button type="button" className="btn btn-primary">
            I'm interested in this property
          </button>
        </div>
      </div>
    </section>
  );
};

export default Property;

export async function getServerSideProps(context) {
  console.log("SSR Fetch DATA");

  try {
    const res = fetch(
      `http://localhost:3004/properties/${context.params.property}`
    );
    const json = (await res).json();

    return {
      props: {
        property: await json,
      },
    };
  } catch (error) {
    return {
      props: {
        property: [],
      },
    };
  }
}

