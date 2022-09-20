import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { UserChoicesContex } from "../../_app";

type Props = {
  property: any
};

const Property: React.FC<Props> = ({property}): JSX.Element => {
  const userContext = useContext(UserChoicesContex)


  return (
    <section className="container">
      <hr />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
            style={{
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: `url(${"https://cvr.com.vn/app/uploads/2022/09/z3704931436576_211281f87c476a4322f3458b3f96453e.jpg"})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: `url(${"https://cvr.com.vn/app/uploads/2022/09/z3704931436576_211281f87c476a4322f3458b3f96453e.jpg"})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: `url(${"https://cvr.com.vn/app/uploads/2022/09/z3704931436576_211281f87c476a4322f3458b3f96453e.jpg"})`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>

      <hr />
      <div className="row">
        <div className="col-9">
          <h1>{property.title}</h1>
          <h2>Price: {property.fields.price}$</h2>

          <p className="lead">
            "The Hyatt Regency Danang Residences is an exclusive lifestyle
            community featuring luxury condominiums and villas situated within a
            5-star resort in"
          </p>

          <ul className="list-group">
            <li className="list-group-item">Bedrooms: 3</li>
            <li className="list-group-item">Baths: 2</li>
            <li className="list-group-item">Space: 100 square meters</li>
          </ul>
        </div>

        <div className="col-3">
          <button onClick={() => {
            userContext.setUserChoices([...userContext.userChoices, property])
          }} type="button" className="btn btn-primary">
            I'm interested in this property
          </button>
        </div>
      </div>
    </section>
  );
};

export default Property;

export async function getStaticPaths() {
  try {
    const res = await fetch("http://localhost:3004/properties");
    const json = await res.json();

    return {
      paths: json.map((x) => {
        return { params: {property: String(x.id)} };
      }),
      // [{ params: { property: "1" } }, { params: { id: "2" } }],
      fallback: false, // can also be true or 'blocking'
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false, // can also be true or 'blocking'
    };
  }
}

export async function getStaticProps(context) {
  console.log("Ok, I'm revalidating the stale content");

  try {
    const res = await fetch(
      `http://localhost:3004/properties/${context.params.property}`
    );
    const json = await res.json();

    return {
      props: {
        property: json,
      },
      revalidate: 10 // this is the only diffrence with ssg strategy | revalidation makes isr working
    };
  } catch (error) {
    return {
      props: {
        property: {},
      },
      revalidate: 10
    };
  }
}
