import { inquiry } from "../../public/data/home";

function ContactBanner() {
    return ( 
        <>
        <div className="contact_left" data-aos="left_flip" data-aos-duration="1200">
                          <div className="overlay"> 
                            <div className="overlay_contents">
                              <h2>{inquiry.bannerTitle}</h2>
                             <p>{inquiry.bannerDesc}</p>
                            </div>
                          </div>
                        </div>
        </>
     );
}

export default ContactBanner;