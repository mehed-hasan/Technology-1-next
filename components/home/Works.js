function Works({data}) {
    return ( 
        <>
        <div className="col-6 " >
                      <div className="card"  data-aos="wake-up" data-aos-duration="1200">
                       <div dangerouslySetInnerHTML={{__html:data.image}}>
                        
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

export default Works;