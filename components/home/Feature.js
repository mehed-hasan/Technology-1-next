import Image from "next/image";

function Feature({data}) {
    return ( 
        <>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="card text-center text-md-start " data-aos="left-skew" data-aos-duration="1200" >
                      <Image className="img-fluid" src={`/images/icons/${data.icon}`} alt={data.icon} width={100} height={100} srcSet=""/>
                      <h3>{data.title}</h3>
                      <p>
                        {data.desc}
                      </p>
                    </div>
                  </div>
        </>
     );
}

export default Feature;