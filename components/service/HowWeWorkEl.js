function HowWeWorkEl({data}) {
    return ( 

        <>
         <div className="col-12 col-md-6 col-lg-4">
                          <div className="card"  data-aos="wake-up" data-aos-duration="1200">
                            <div dangerouslySetInnerHTML={{__html:data.icon}}>

                            </div>
                              
        
                            <h3>{data.title}</h3>
        
                            <p>
                                {data.desc}
                            </p>
                              
                          </div>
                        </div>
        </>
     );
}

export default HowWeWorkEl;