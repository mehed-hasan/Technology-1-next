import Image from "next/image";
import Link from "next/link";
import { footer } from "../../public/data/home";
import { nav } from "../../public/data/nav";
import FooterContactEl from "./FooterContactEl";

function Footer({route, setRoute}) {
  
  const changePage  = (name) =>{
    setRoute(name);
    window.scrollTo(0,0);

  }

    return ( 
        <>
         {/* <!-- Footer section started   --> */}
       <section id="footer">
         <div className="container-fluid  container-lg ">
           <div className="row big_footer align-items-center">
             <div className="footer_left col-12 col-md-6 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 ">
                <div className="footer_logo text-center text-sm-start">
                  <a href="index.html">
                    <Image src={"/images/logo/light_logo.png"} alt={"Footer logo"} width={57} height={24} />
                  </a>
                </div>

                <p className="about_company text-center text-sm-start" data-aos="fade-up" data-aos-duration="1200">
                {footer.footerText}
                <b>Read More</b>
                </p>

                <div className="footer_contact " data-aos="fade-up" data-aos-duration="1200">
                    <div className="row ">

                        {
                          footer.contact.map((item,index) =>
                          <FooterContactEl key={index} data={item} />
                          )
                        }
    

                    </div>
                </div>

             </div>

             <div className="footer_right col-12 col-md-6 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 ">
                <div className="newsletter_and_socials" data-aos="fade-up" data-aos-duration="1200">

                  <h4>{footer.newsletter.title} </h4>

                  <p className="newsletter_text">
                    {footer.newsletter.desc}
                  </p>


                  <div className="subcription_form">
                    <form className="form-contents m-auto">
                      <div className="">
                        <input className="form-control" type="email" name="subscription" id="" placeholder="Enter your email"/>
    
                        <button type="submit" className="btn_subscription" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-duration="1200">Submit</button>
                      </div>
                    </form>
                  </div>
  
                  <div className="socials d-flex justify-content-start justify-content-md-center align-items-end "> 
                    <ul className="d-flex">
                      {
                        footer.socials.map((item) =>
                        
                      <li key={item.id}>
                      <Link href={item.link}>
                        <div dangerouslySetInnerHTML={{__html:item.icon}}>

                        </div>
                          
                      </Link>
                    </li>
                        )
                      }
                    </ul>
                  </div>
                </div>
            </div>




            <div className="tiny_footer" >
           
              <div className="container-fluid  container-lg ">
                <div className="row">
                  <div className="tiny_footer_left col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <ul className="useful_links">
                    {
                    nav.menus.map((item, index)=>
                    <li key={index}><Link  onClick={() => changePage(item.link)} href={`${item.link}`}> {item.label} </Link></li>
                    )
                  }

                    </ul>
                  </div>
    
    
                  <div className="tiny_footer_right col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <p className="copyright text-center text-end-md">
                      © 2000-2021, All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
         </div>
           </div>



         </div>


       </section>
      {/* <!-- Footer section ended   -->         */}
      </>
     );
}

export default Footer;