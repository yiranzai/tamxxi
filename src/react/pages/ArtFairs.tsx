import { SiteLink as Link } from "../components/SiteLink";
import { A, asset } from "../data/assets";

const newsRows = [A.newsRow1, A.newsRow2, A.newsRow3, A.newsRow4, A.newsRow5];

const history = [
  { img: A.fairPoster1, alt: "Bigger Artbook Fair", to: null },
  { img: A.fairPoster2, alt: "Art fair poster", to: null },
  { img: A.fairPoster3, alt: "Shanghai booth", to: "/Art-fairs/上海" },
  { img: A.fairPoster4, alt: "Art fair poster", to: null },
  { img: A.fairPoster5, alt: "Art fair poster", to: null },
  { img: A.fairPoster6, alt: "Art fair poster", to: null },
];

export default function ArtFairs() {
  return (
    <div className="fairs-page">
      <div className="fairs">
        <section className="fairs-news">
          <img className="fairs-news__title" src={asset(A.newsTitle)} alt="NEWS" />
          <div className="fairs-ticker" aria-hidden="true">
            {newsRows.map((row) => (
              <img key={row} src={asset(row)} alt="" />
            ))}
          </div>
          <img className="fairs-news__sorry" src={asset(A.sorry)} alt="SORRY! I'M IN HIBERNATING" />
        </section>
        <section className="fairs-history">
          <img className="fairs-history__title" src={asset(A.historyTitle)} alt="HISTORY" />
        </section>
        <section className="fairs-row fairs-row--one">
          {history.slice(0, 3).map((item) =>
            item.to ? (
              <Link key={item.img} to={item.to} className="fairs-poster fairs-poster--one" aria-label={item.alt}>
                <img src={asset(item.img)} alt={item.alt} />
              </Link>
            ) : (
              <div key={item.img} className="fairs-poster fairs-poster--one">
                <img src={asset(item.img)} alt={item.alt} />
              </div>
            )
          )}
        </section>
        <section className="fairs-row fairs-row--two">
          {history.slice(3).map((item) => (
            <div key={item.img} className="fairs-poster fairs-poster--two">
              <img src={asset(item.img)} alt={item.alt} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
