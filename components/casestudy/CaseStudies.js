import { useEffect, useState } from "react";
import { cases } from "../../public/data/casestudy";
import CaseStudy from "./CaseStudy";

function CaseStudies() {

  const joint = (text) =>{
    let result = text.replace(" ","-");
    return result;
  }

  const [tabName, setTabName] = useState('All');
  const [isSearched, setIsSearched] = useState(false)
  const [data,setData]= useState(cases.case);
  const [keyWord, setKeyWord] = useState('');

  const search = (text) =>{
    setTabName('All');
    setKeyWord(text);
    setIsSearched(true);

  }

  const tabClicked = (item) =>{
    setIsSearched(false);
    setTabName(item);
    
  }

  useEffect(()=>{
    if(tabName === 'All'){
        if(isSearched){
          // setData(cases.case.filter((item)=>  item.title.includes(keyWord)  ));
          setData(cases.case.filter((item)=>  
          item.title.toLowerCase().includes(keyWord.toLowerCase()) ||
          item.desc.toLowerCase().includes(keyWord.toLowerCase()) ||
          item.cat.toLowerCase().includes(keyWord.toLowerCase()) ||
          item.date.toLowerCase().includes(keyWord.toLowerCase())
           ));

        }else{
          setData(cases.case);
        }
    }else{
      setData(cases.case.filter((item)=> {return tabName == item.cat}));
    }

  },[keyWord,tabName]);


    return ( 

        <>
                        <div className="container">
                  {/* <!-- xxxxx --> */}
                  <div className="tab_wrapper d-flex justify-content-between">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

                        {
                            cases.cats.map((item,index)=>
                            <li key={index} className="nav-item" role="presentation">
                                <button onClick={() => tabClicked(item)} className="nav-link " id={`pills-${joint(item)}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${joint(item)}`} type="button" role="tab" aria-controls={`pills-${joint(item)}`} aria-selected="true">{item}</button>
                            </li>
                            )
                        }
                      

                    </ul>

                    <div className="tab_search">
                      <input onChange={(e) => search(e.target.value)} className="form-control" placeholder="Search" type="text"/>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z" stroke="#A2A2A2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.7031 13.7031L17.5 17.5" stroke="#A2A2A2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        
                    </div>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                  {
                            cases.cats.map((catitem, index)=>
                            <div key={index} className={`tab-pane fade ${tabName === catitem ? 'show active' : ''}`} id={`pills-${joint(catitem)}`} role="tabpanel" aria-labelledby={`pills-${joint(catitem)}-tab`}>
                            <div className="case_cards">
                              <div className="gap_64"></div>
          
                              <div className="row">
                                {

                                  data.length > 0 ?
                                  data.map((item)=>
                                  <CaseStudy key={item.id} data={item} />
                                  )
                                  :<h5 className ="text-center mt-5 text-danger">Opps... No data found !</h5>
                                  
                                }
          
                              </div>
                           </div>
                          </div>
                            )
                        }



                  </div>


            
                </div>
                
                <div className="gap_64"></div>
        </>
     );
}

export default CaseStudies;