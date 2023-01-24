import Link from "next/link";

function BlueBtn({link,btnText}) {
    return ( 
                      <Link className="blue_btn" href={{link}}>{btnText}</Link>
     );
}

export default BlueBtn;