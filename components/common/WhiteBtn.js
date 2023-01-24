import Link from "next/link";

function WhiteBtn({link}) {
    return ( 
        <>
         <Link className="white_btn" href={link}>Contact Us </Link>
        </>
     );
}

export default WhiteBtn;