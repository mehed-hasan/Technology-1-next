import Image from "next/image";

function Project({data,array_key}) {
    return ( 
        <>
                <div className=" col-sm-6 col-md-6 col-lg-12">
                      <div className={`work_sample_content  ${array_key > 0 ? 'second_work_sample': 'first_work_sample'}`}>
                        <div className="overlay">
                          <div className="overlay_contents">
                            <h2>{data.title}</h2>
                            <a className="white_btn" href="">View project 
                              <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#085BD8"/>
                                </svg>
                            </a>
                          </div>
                        </div>
                        <a href="">
                          <Image className="img-fluid" src={`/images/portfolio/${data.image}`} alt={data.image} width={856} height={603} srcSet=""/>
                        </a>  
                      </div>

                    </div>
        </>
     );
}

export default Project;