import { useState } from "react";
import { pricingPlan } from "../../public/data/service";
import Pricing from "./Pricing";

function PriceSection() {

    const [isYearly, setIsYearly] = useState(false);

    return ( 

        <>
        <div className="gapper">
            <div className="gap"></div>
           </div>

           <section className="pricing">
            <div className="container">

              <div className="pricing_heading text-center">
                <h3>{pricingPlan.title}</h3>

                <div className="toogle">
                  <span>Monthly</span>
                <div onClick={()=>setIsYearly(!isYearly)} className="toogle_btn">
                  <label className={`switch ${isYearly && 'toogle_active'}`}>
                    <span className="slider round ">
                      <div className="ball" data-state="dismiss"></div>
                    </span>
                  </label>
                </div>
                <span>yearly</span>
                </div>
              </div>

              <div className="row">
                {
                    pricingPlan.plans.map((item,index)=>
                    <Pricing key={index} data={item} isYearly={isYearly} />
                    )
                }
              </div>
            </div>
         </section>

         <div className="gapper">
            <div className="gap"></div>
           </div>
        </>
     );
}

export default PriceSection;