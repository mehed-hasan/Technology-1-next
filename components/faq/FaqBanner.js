import { faqBanner } from '../../public/data/faq';

function FaqBanner() {
    return ( 
        <>
        
<div  style={{backgroundImage:`url(${'/images/banner/faq_banner.jpg'})`}}  className="faq_banner">

<div className="banner_content text-center">
    <h2>FAQ</h2>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.08301" y="9.16675" width="2.125" height="5.66667" fill="#282938"/>
<rect x="5.625" y="9.16675" width="2.125" height="5.66667" fill="#282938"/>
<rect x="9.1665" y="9.16675" width="2.125" height="5.66667" fill="#282938"/>
<rect x="12.708" y="9.16675" width="2.125" height="5.66667" fill="#282938"/>
<rect x="16.25" y="9.16675" width="2.125" height="5.66667" fill="#282938"/>
<rect x="19.7915" y="9.16675" width="2.125" height="5.66667" fill="#282938"/>
</svg>

        

    
    <h1>{faqBanner.title}</h1>

    <p>
        {faqBanner.desc}
    </p>
</div>
</div>

      {/* <!-- Contact section has started  --> */}
      <div className="gapper">
        <div className="gap"></div> 
       </div>

        </>
     );
}

export default FaqBanner;