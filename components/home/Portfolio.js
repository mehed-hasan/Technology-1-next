import { projects } from "../../public/data/home";
import GradientBtn from "../common/GradientBtn";
import Project from "./Project";

function Portfolio() {
    return ( 
        <>
               <div className="gapper">
        <div className="gap"></div>
        <div className="gap"></div>
       </div>



       <section id= "portfolio">
         <div className="container-fluid  container-lg ">
           <h2 className="text-center text-lg-start portfolio_heading">
            View our projects
            <a href="">View More <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938"/>
              </svg>
              </a>
          </h2>

           <div className="row">
             <div className="col-sm-12 col-md-12 col-sm-8 col-lg-8 col-xl-8 col-xxl-8 ">
               <div className="portfolio_left" >
                <div className="overlay" data-aos="left-to-right" data-aos-duration="1000"></div>
                <div className="overlay_contents" data-aos="fade_" data-aos-duration="1200" >
                  <h2 >{projects.title}</h2>
                  <p>{projects.desc}</p>

                  <GradientBtn link={'/'}/>
                </div>

               </div>

                
             </div>

             <div className="col-sm-12 col-md-12 col-sm-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="portfolio_right">
                <div className="row">
                  {
                    projects.project.map((item,index) =>
                    <Project array_key={index} key={item.id} data={item}/>
                    )
                  }
                </div>
              </div>
             </div>
           </div>
         </div>
       </section>
        </>
     );
}

export default Portfolio;