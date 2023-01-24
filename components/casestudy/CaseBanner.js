import { cases } from "../../public/data/casestudy";

function CaseBanner() {
    return ( 

        <>
                        <div id="case_banner">
                    <h1>{cases.title}</h1>

                    <div className="box_wrapper">
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_270_7372)">
                            <rect x="0.333252" y="14.8667" width="14.6667" height="1.8" fill="#141414"/>
                            </g>
                            <rect x="0.833252" y="1.16675" width="13.6667" height="13.6667" rx="1.5" stroke="#141414"/>
                            <defs>
                            <clipPath id="clip0_270_7372">
                            <rect x="0.333252" y="0.666748" width="14.6667" height="14.6667" rx="2" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>

                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_270_7372)">
                                <rect x="0.333252" y="14.8667" width="14.6667" height="1.8" fill="#141414"/>
                                </g>
                                <rect x="0.833252" y="1.16675" width="13.6667" height="13.6667" rx="1.5" stroke="#141414"/>
                                <defs>
                                <clipPath id="clip0_270_7372">
                                <rect x="0.333252" y="0.666748" width="14.6667" height="14.6667" rx="2" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>

                                

                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_270_7372)">
                                    <rect x="0.333252" y="14.8667" width="14.6667" height="1.8" fill="#141414"/>
                                    </g>
                                    <rect x="0.833252" y="1.16675" width="13.6667" height="13.6667" rx="1.5" stroke="#141414"/>
                                    <defs>
                                    <clipPath id="clip0_270_7372">
                                    <rect x="0.333252" y="0.666748" width="14.6667" height="14.6667" rx="2" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    
                    </div>

                    <p>
                        {cases.desc}
                    </p>
                </div>
                <div className="gap_96"></div>

        </>
     );
}

export default CaseBanner;