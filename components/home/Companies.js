import Slider from "react-slick";
import { clients } from "../../public/data/home";
import CompanyLogo from "./CompanyLogo";

function    Companies() {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed:2000,
    arrows: false,
    centerMode: true,
    autoplaySpeed: 0,
    // autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "40px",

          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <>
      <section id="companies">
        <div className="company_slider   container-md container-lg container-xl container-xxl  ">
          <Slider {...settings}>
            {clients.map((item, index) => (
              <CompanyLogo key={index} data={item} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Companies;
