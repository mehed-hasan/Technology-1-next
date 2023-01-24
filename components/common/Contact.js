import ContactBanner from "../home/ContactBanner";
import ContactForm from "../home/ContactForm";

function Contact() {
    return ( 
        <>
               {/* <!-- Contact section has started  --> */}
       <div className="gapper">
        <div className="gap"></div>
        <div className="gap"></div>
       </div>


        <div id="contact">
          <div className="container-fluid  container-lg ">
              <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 ">
                        <ContactBanner/>
                    </div>

                    <div className=" col-12 col-md-6 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 ">

                      <div className="contact_right" data-aos="right-skew" data-aos-duration="1200">
                        <ContactForm/>

                        <div className="get_in_touch  text-center">
                          <a href="">Get in touch with us 
                            <span>
                            <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.7305 6.53033C25.0234 6.23744 25.0234 5.76256 24.7305 5.46967L19.9576 0.696699C19.6647 0.403806 19.1898 0.403806 18.8969 0.696699C18.604 0.989593 18.604 1.46447 18.8969 1.75736L23.1395 6L18.8969 10.2426C18.604 10.5355 18.604 11.0104 18.8969 11.3033C19.1898 11.5962 19.6647 11.5962 19.9576 11.3033L24.7305 6.53033ZM0.200195 6.75H24.2002V5.25H0.200195V6.75Z" fill="#085BD8"></path>
                            </svg>
                            </span>
                          </a>
                        </div>

                      </div>



                    </div>
              </div>
          </div>
        </div>
       {/* <!-- Contact section has ended  --> */}


       <div className="gapper">
        <div className="gap"></div>
       </div>
        </>
     );
}

export default Contact;