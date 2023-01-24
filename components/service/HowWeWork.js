import { services } from "../../public/data/service";
import HowWeWorkEl from "./HowWeWorkEl";

function HowWeWork({hasTitle}) {
    return ( 
        <>
                    <div className="gap_96"></div>
            <section id="how_we_work">
              {
                hasTitle && 
                (

                  <h2 className="text-center">   
                 {services.title}
              </h2>
                )
              }
              <div className="container-fluid  container-lg ">
                <div className="row how_we_work_contents" style={{padding:'0px'}}>
                  <div className="col-12">
                      <div className="row">
                        {
                            services.service.map((item, index)=>
                            <HowWeWorkEl key={index} data={item} />
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

export default HowWeWork;