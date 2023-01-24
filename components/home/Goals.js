import Image from "next/image";
import { goal } from "../../public/data/home";

function Goals() {
    return ( 

        <>
      <div className="gapper">
        <div className="gap"></div>
        <div className="gap"></div>
       </div>
       
        <section id="goal_section" >
         <div className="container-fluid  container-lg ">
           <div className="row">
              <div className="goal_section_left col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 " >
                
                  <div className="goal_floating_images_left" data-aos="laying-left-spring" data-aos-duration="1000" >
                    <Image className="parent_image img-fluid" src={`/images/goal_section/${goal.section1.images.image1}`} width={477} height={358} alt="" srcSet=""/>
                    <Image  className="left_children_image " src={`/images/goal_section/${goal.section1.images.image2}`} width={197} height={136} alt="" srcSet=""/>
                    <Image className="right_children_image " src={`/images/goal_section/${goal.section1.images.image3}`} width={197} height={136} alt="" srcSet=""/>
                  </div>


                
              </div>

              <div className="goal_section_right col-sm-12 col-md-6 col-lg-6 col-xxl-6 text-center text-md-start ">
                <h2 data-aos="fade-up" data-aos-duration="400">{goal.section1.title}</h2>
                <p data-aos="fade-up"data-aos-duration="800">
                  {goal.section2.desc}
                </p>
              </div>

           </div>

           <div className="gapper">
            <div className="gap"></div>
            <div className="gap"></div>
           </div>
    

           <div className="row">
            <div className="goal_section_right col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 text-center text-md-start order-2  order-sm-2 order-md-1 order-lg-1 order-xl-1 order-xx1-1">
              <h2 data-aos="fade-up" data-aos-duration="400" >{goal.section2.title}</h2>
              <p data-aos="fade-up" data-aos-duration="800">
                {goal.section2.desc}
                 </p>
            </div>

            <div className="goal_section_right col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 order-1  order-sm-1 order-md-2 order-lg-2 order-xl-2 order-xx1-2">
                <div className="goal_floating_images_right " data-aos="laying-left" data-aos-duration="2000" >
                  <Image className="img-fluid parent_image" src={`/images/goal_section/${goal.section2.images.image1}`} alt="" width={564} height={393}/>
                  <Image className="gear img-fluid" src={`/images/goal_section/${goal.section2.images.image2}`} alt="" srcSet="" width={90} height={80}/>
                </div>
            </div>
         </div>
         </div>
       </section>


       <div className="gapper">
        <div className="gap"></div>
        <div className="gap"></div>
       </div>
        </>
     );
}

export default Goals;