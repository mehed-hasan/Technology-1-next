import { faq } from "../../public/data/home";
import FaqItem from "../home/FaqItem";

function FAQ() {
    return ( 
        <>
       <div className="gapper">
        <div className="gap"></div>
       </div>

       <section id="faq">
         <div className="container-fluid  container-lg ">
           <div className="row">
             <div className="faq_left col-12 col-sm-12 col-md-12 col-md-lg-5 col-xl-5 col-xxl-4  "  data-aos="fade-right" data-aos-duration="1500">
                    <h2 className="heading text-center text-xl-start">{faq.title}</h2>
                    <div className="get_in_touch  text-center text-xl-start">
                      <a href="">Contact us for more info </a>
                    </div>

             </div>

             <div className="faq_right col-12 col-sm-12 col-md-12 col-md-lg-7 col-xl-7 col-xxl-8   ">
              <div className="accordion" id="accordionExample">
                {
                  faq.qa.map((item)=>
                  <FaqItem key={item.id} data={item} />
                  )
                }
              </div>
            </div>
             
           </div>
         </div>
       </section>

        </>
     );
}

export default FAQ;