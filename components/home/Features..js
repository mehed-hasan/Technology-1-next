import { features } from "../../public/data/home";
import Feature from "./Feature";

function Features() {
    return ( 
        <>
               {/* <!-- Featues section has started  --> */}
               <section id="features">
            <div className="container-fluid  container-lg ">
               <div className="features_header text-center" data-aos="fade-up" data-aos-duration="1200" >
                 <p >Features</p>

                 <h2 className="m-auto">
                 {features.title}
                 </h2>
               </div>


               <div className="feature_cards">
                 <div className="row">
                    {
                      features.feature.map((item)=>
                      <Feature key={item.id} data={item} />
                      )
                    }
                 </div>
               </div>
            </div>
        </section>
       {/* <!-- Features section has ended  --> */}
        </>
     );
}

export default Features;