import Link from "next/link";

function CompanyLogo({data}) {
    return ( 
        <div className="company_logo_container">
            <Link href={'/'}  >
              <div dangerouslySetInnerHTML={{__html:data}}>
              </div>
            </Link>
          </div>
     );
}

export default CompanyLogo;