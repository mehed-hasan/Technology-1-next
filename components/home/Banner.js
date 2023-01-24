import Image from "next/image";
import { heroBanner } from "../../public/data/home";

function Banner() {
  return (
    <>
      <section id="banner">
        <div className="container-fluid container-lg" style={{ border: "1px" }}>
          <div className="row banners_content align-items-center">
            <div className="banners_left_content col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center text-md-start">
              <h1 data-aos="fade-right" data-aos-duration="1200">
                <span
                  dangerouslySetInnerHTML={{ __html: heroBanner.heroTitle }}
                ></span>
              </h1>

              <p data-aos="fade-up">{heroBanner.heroDesc}</p>

              <div
                className="banner_buttons"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <a className="white_btn" href="">
                  Get Started
                </a>
                <a className="blue_btn ml-2" href="">
                  Explore
                </a>
              </div>
            </div>

            <div className="banner_right_content col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center align-items-start ">
              <Image
                className="img-fluid"
                src={`/images/banner/${heroBanner.heroImage}`}
                alt="Banner Image"
                height={412}
                width={522}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
