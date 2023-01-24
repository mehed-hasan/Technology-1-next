import Image from "next/image";
import Slider from "react-slick";


function Comments() {

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
         <svg onClick={onClick} role="button" width="44" className="slick-next" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="44" height="44" rx="22" fill="white"/>
         <path d="M25 29.5L17.5 22L25 14.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <svg onClick={onClick} role="button" className="slick-prev" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className="sv" width="44" height="44" rx="22" fill="white"/>
        <path d="M25 29.5L17.5 22L25 14.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> 
    );
  }

const commentSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow:<SampleNextArrow/>,
    nextArrow:<SamplePrevArrow />
  }


    return ( 
        <>

<div className="gapper">
        <div className="gap"></div>
       </div>
       
               <section id="clinet_review">
         <div className="container-fluid  container-lg ">
           <div className="row align-items-center">
             <div className="client_review_left col-12 col-sm-12 col-md-12 col-md-lg-5 col-xl-5 col-xxl-4 text-center text-md-start max-auto" data-aos="fade-right" data-aos-duration="1200">
               <h2 className="text-center text-xl-start"  >
                What our clients say about us
               </h2>
               <p className="text-center text-xl-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
               </p>
             </div>

             <div className="client_review_right col-12 col-sm-12 col-md-12 col-md-lg-7 col-xl-7 col-xxl-8 review_slider">
                  <Slider {...commentSettings}>
                  <div className="review_contents">
                    <p  data-aos="fade-up" data-aos-duration="1200">
                      {                      "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
}
                    </p>
    
                    <div className="reviewer d-flex"  data-aos="fade-right" data-aos-duration="1500">
                      <Image className="img-fluid rounded-circle" src="/images/clients/client.png" width={53} height={53} alt=""/>
                      <div className="reviwer_name ml-2">
                        <h5>CitiMart</h5>
                        <p className="reviwer_rank">Manager </p>
                      </div>
                    </div>
                  </div>

                  <div className="review_contents" >
                    <p data-aos="fade-up" data-aos-duration="1200">
                      {"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."}
                    </p>
    
                    <div className="reviewer d-flex"  >
                      <Image className="img-fluid rounded-circle" src="/images/clients/client.png" width={53} height={53} alt=""/>
                      <div className="reviwer_name ml-2">
                        <h5>CitiMart</h5>
                        <p>Manager </p>
                      </div>
                    </div>
                  </div>

                  <div className="review_contents">
                    <p data-aos="fade-up" data-aos-duration="1200">
                      {"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."}
                    </p>
    
                    <div className="reviewer d-flex" >
                      <Image className="img-fluid rounded-circle" src="/images/clients/client.png" width={53} height={53} alt=""/>
                      <div className="reviwer_name ml-2">
                        <h5>CitiMart</h5>
                        <p>Manager </p>
                      </div>
                    </div>
                  </div>
                  </Slider>
             </div>
           </div>
         </div>
       </section>

       <div className="gapper">
        <div className="gap"></div>
       </div>
        </>
     );
}

export default Comments;