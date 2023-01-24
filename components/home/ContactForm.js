import { inquiry } from "../../public/data/home";

function ContactForm() {
    return ( 
        <>
        <form className="form-contents m-auto">
                          <h5>{inquiry.title}</h5>
                         <p>{inquiry.desc}</p>
                          <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Your Name</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="Email"/>
                            <label htmlFor="floatingEmail">Email</label>
                          </div>
                          <div className="form-floating">
                            <input type="password" className="form-control" id="floatingUrl" placeholder="Paste your Figma design URL"/>
                            <label htmlFor="floatingUrl">Paste your Figma design URL</label>
                          </div>
                          <button type="submit" className="btn btn-primary form-control round" >Send an Inquiry</button>
  
                        </form>
        </>
     );
}

export default ContactForm;