import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { nav } from "../../public/data/nav";

function NavBar({ route, setRoute }) {
  const router = useRouter();
  const get_path = router.pathname;

  return (
    <>
      {/* <!-- Header section started  --> */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light  shadow-md fixed-top">
          <div className="container-fluid  container-lg ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <svg
                  className="border-none"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 4.1875H20.25C20.625 4.1875 21 3.85938 21 3.4375V1.5625C21 1.1875 20.625 0.8125 20.25 0.8125H0.75C0.328125 0.8125 0 1.1875 0 1.5625V3.4375C0 3.85938 0.328125 4.1875 0.75 4.1875ZM0.75 11.6875H20.25C20.625 11.6875 21 11.3594 21 10.9375V9.0625C21 8.6875 20.625 8.3125 20.25 8.3125H0.75C0.328125 8.3125 0 8.6875 0 9.0625V10.9375C0 11.3594 0.328125 11.6875 0.75 11.6875ZM0.75 19.1875H20.25C20.625 19.1875 21 18.8594 21 18.4375V16.5625C21 16.1875 20.625 15.8125 20.25 15.8125H0.75C0.328125 15.8125 0 16.1875 0 16.5625V18.4375C0 18.8594 0.328125 19.1875 0.75 19.1875Z"
                    fill="url(#paint0_linear_258_6838)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_258_6838"
                      x1="1.17347e-07"
                      y1="10"
                      x2="21"
                      y2="10"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#182A44" />
                      <stop offset="1" stopColor="#3C5271" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </button>

            {/* <!-- Logo for mobile screen  --> */}
            <Link
              className="navbar-brand m-auto  m-md-auto m-sm-auto "
              href="/"
            >
              <Image
                className="img-fluid"
                src={`/images/logo/dark_logo.png`}
                alt=""
                width={119}
                height={25}
              />
            </Link>
            {/* <!-- Logo for mobile screen  ended--> */}

            {/* <!-- Mobile screen log in  btn --> */}
            <ul className="navbar-nav mb-2  mb-lg-0 d-block d-lg-none">
              <li className="nav-item user-nav-item  ">
                <a className="nav-link" href="#">
                  <span>
                    <svg
                      className="mt--2"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 20.8462V19.8462C5 15.9802 8.13401 12.8462 12 12.8462V12.8462C15.866 12.8462 19 15.9802 19 19.8462V20.8462"
                        stroke="#BCBCBC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 12.8462C14.2091 12.8462 16 11.0553 16 8.84619C16 6.63705 14.2091 4.84619 12 4.84619C9.79086 4.84619 8 6.63705 8 8.84619C8 11.0553 9.79086 12.8462 12 12.8462Z"
                        stroke="#BCBCBC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  <span>Log In</span>
                </a>
              </li>
            </ul>
            {/* <!-- Mobile screen log in  btn ended  --> */}
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2  mb-lg-0 mt-0">
                {nav.menus.map((item, index) => (
                  <li key={index} className="nav-item">
                    <Link
                      className={`nav-link ${
                        get_path === item.link ? "active" : ""
                      }`}
                      href={`${item.link}`}
                    >
                      {" "}
                      {item.label}{" "}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="navbar-nav mb-2  mb-lg-0">
                <li className="nav-item user-nav-item  d-none d-lg-block ">
                  <a className="nav-link" href="#">
                    <span>
                      <svg
                        className="mt--2"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 20.8462V19.8462C5 15.9802 8.13401 12.8462 12 12.8462V12.8462C15.866 12.8462 19 15.9802 19 19.8462V20.8462"
                          stroke="#BCBCBC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12.8462C14.2091 12.8462 16 11.0553 16 8.84619C16 6.63705 14.2091 4.84619 12 4.84619C9.79086 4.84619 8 6.63705 8 8.84619C8 11.0553 9.79086 12.8462 12 12.8462Z"
                          stroke="#BCBCBC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>{" "}
                    <span>Log In</span>
                  </a>
                </li>

                <li>
                  <button className="btn btn-outline d-block" type="submit">
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* <!-- Header section ended  --> */}
    </>
  );
}

export default NavBar;
