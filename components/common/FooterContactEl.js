
function FooterContactEl({data}) {
    return ( 
        <>
        <a href={data.type==='phone'? `tel:${data.info}`:`mailto:${data.info}`} className="footer_contact_elements col-12 col-sm-6 d-flex">
                          <div className="contact_icon ">
                            <div dangerouslySetInnerHTML={{__html:data.icon}}>
                            </div>
                          </div>
    
                          <div className="contact_details ">
                            <p>{data.label}</p>
                            <p>{data.info}</p>
                          </div>
                        </a>
        </>
     );
}

export default FooterContactEl;