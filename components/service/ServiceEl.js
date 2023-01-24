import CountUp from 'react-countup';


function ServiceEl({data}) {
    return ( 

        <>
        <div className="col-6 col-lg-3">
                              <div className="award_el text-center">
                                <div dangerouslySetInnerHTML={{__html:data.icon}}>

                                </div>
                                  <h4>
                                    <CountUp start={0} end={data.number} delay={0}>
                                    {({ countUpRef }) => (
                                          <div>
                                              <span ref={countUpRef}></span> +
                                          </div>
                                        )}
                                    </CountUp>
                                  </h4>
                                  <p>{data.label}</p>
                              </div>
                            </div>
        </>
     );
}

export default ServiceEl;