import { useState } from "react";
import BlueBtn from "../common/BlueBtn";

function Pricing({data,isYearly}) {
   

    return ( 
        <> 
         
        <div className="col-12 col-md-6 col-lg-4">
                  <div className="price_card" data-aos="wake-up" data-aos-duration="1200">
                    <h4>{data.title}</h4>
                    <p>{data.desc}</p>
    
                    <div className="price">
                      <h1><small>$</small>
                      {isYearly ? data.prices[0].price: data.prices[1].price }
                      <small>/{isYearly ? data.prices[0].type: data.prices[1].type }
                      </small></h1>
                    </div>

                    <div className="details">
                        {
                            data.services.map((item, index) =>
                            <p key={index} className={`${item.status}`}> <span><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.875 6.05359L8.125 14.8036L3.75 10.4286" stroke="#c6c6c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </span> {item.label}
                         </p>
                            )
                        } 
                    </div>


                    <div className="text-center">
                    <BlueBtn btnText='Get Started' link='/' />
                    </div>

                    
                  </div>
                </div>
        </>
     );
}

export default Pricing;