import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CaseStudy from "../../components/casestudy/CaseStudy";
import { cases } from "../../public/data/casestudy";

function DetailsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [blogData, setBlogData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (router.query.details) {
      const id = router.query.details[0];
      const cat = router.query.details[1];

      setData(cases.case.find((item) => id == item.id));
      setBlogData(cases.case.filter((item) => cat === item.cat));
      setIsLoading(false);
    }
  }, [router]);

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <div className="gap_64"></div>
          <div className="container">
            <section
              className="blue_bg"
              style={{ backgroundImage: `url('/images/banner/blue_bg.png')` }}
            >
              <div className="bread_cum">
                <div>
                  <a href="case_study.html">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="17"
                        cy="17"
                        r="17"
                        fill="white"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M20.41 12.41L19 11L13 17L19 23L20.41 21.59L15.83 17L20.41 12.41Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>

                <div className="post_info">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">{data.cat}</li>
                    <li className="list-group-item">{data.date} </li>
                  </ul>
                </div>
              </div>

              <div className="banner_text">
                <h2>{data.title}</h2>
              </div>
            </section>

            <section className="blog_image mt-3">
              <Image
                className="img-fluid w-100"
                src={
                  data.previewImage === ""
                    ? `${`/images/banner/img-placeholder.png`}`
                    : `${`/images/banner/${data.previewImage}`}`
                }
                width={1300}
                height={500}
                alt=""
              />
            </section>

            <section
              dangerouslySetInnerHTML={{ __html: data.desc }}
              className="blog_text para"
            ></section>

            <section className="case_cards intersting">
              <div className="interesting_heading text-center">
                <h2>Other interesting posts</h2>
              </div>
              <div className="gap_64"></div>
              <div className="row">
                {blogData.map((item) => (
                  <CaseStudy key={item.id} data={item} />
                ))}
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default DetailsPage;
