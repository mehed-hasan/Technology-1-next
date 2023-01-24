function FaqItem({data}) {
    return ( 
        <>
        <div className="accordion-item">
                  <h2 className="accordion-header" id={`heading${data.id}`}>
                    <button className={`accordion-button ${data.id == 1 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${data.id}`} aria-expanded="true" aria-controls={`collapse${data.id}`} >
                     <span> {data.id} </span> {data.question}
                    </button>
                  </h2>
                  <div id={`collapse${data.id}`}  className={`accordion-collapse collapse ${data.id == 1 ? 'show':'collapse'}`}  aria-labelledby={`heading${data.id}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>{data.answer}</p>
                    </div>
                  </div>
                </div>
        </>
     );
}

export default FaqItem;