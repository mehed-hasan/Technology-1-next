import BlueBtn from '../common/BlueBtn';

function SolutionBanner() {
    return ( 
        <div style={{backgroundImage:`url(${'../../images/banner/solution_banner.jpg'})`}} className="solution_banner p-2 p-lg-0">
                
                <div className="banner_content text-center">
                    <p>One of the key benefits of partnering with Remote IT Solutions is our security expertise.</p>

                    <div className="banner_heading">
                        <h1>Digital Solutions</h1>
                    </div>

                    <div className="gap_64"></div>
                    <div className="btn_wrapper banner_btn">
                        <BlueBtn btnText={'Get Started'}/>
                        <a href="">
                            <svg  width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="white"/>
                                <path d="M55.6403 38.9376L33.1559 25.1876C32.9667 25.0708 32.7497 25.0067 32.5273 25.0018C32.305 24.9969 32.0854 25.0513 31.8911 25.1596C31.6969 25.2679 31.535 25.426 31.4223 25.6177C31.3095 25.8094 31.2499 26.0277 31.2497 26.2501V53.7501C31.2499 53.9725 31.3095 54.1908 31.4223 54.3825C31.535 54.5742 31.6969 54.7323 31.8911 54.8406C32.0854 54.9488 32.305 55.0033 32.5273 54.9984C32.7497 54.9935 32.9667 54.9293 33.1559 54.8126L55.6403 41.0626C55.8249 40.9534 55.9779 40.798 56.0842 40.6117C56.1905 40.4254 56.2464 40.2146 56.2464 40.0001C56.2464 39.7856 56.1905 39.5748 56.0842 39.3885C55.9779 39.2022 55.8249 39.0468 55.6403 38.9376V38.9376Z" stroke="url(#paint0_linear_265_9498)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_265_9498" x1="31.2497" y1="38.9582" x2="56.2476" y2="38.9178" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#085BD8"/>
                                <stop offset="1" stopColor="#052D68"/>
                                </linearGradient>
                                </defs>
                                </svg>
                                <span className='ms-2'>How Does It Work</span>
                        </a>
                    </div>
                </div>
            </div>
     );
}

export default SolutionBanner;