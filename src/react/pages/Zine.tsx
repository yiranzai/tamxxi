import { A, asset } from "../data/assets";

export default function Zine() {
  return (
    <div className="zine-page">
      <section className="zine-hero">
        <div className="zine-photo">
          <img src={asset(A.zinePhoto)} alt="Sorrow Set comic and sketch zine, open" />
        </div>
        <div className="zine-panel">
          <h1>SOREOW SET</h1>
          <p className="zine-sub">comic &amp; sketch</p>
          <img className="zine-cover" src={asset(A.zineCover)} alt="Sorrow Set zine cover" />
          <a className="zine-cta" href="https://www.instagram.com/tamxxi_/" target="_blank" rel="noreferrer">
            BUY · CONTACT
          </a>
        </div>
      </section>
      <section className="zine-dark">
        <div className="zine-dark__inner">
          <div className="zine-dark__head">
            <h2>comic &amp; sketch</h2>
            <p>36 pages of pencil comics, sketches and tiny sorrows. Self published, 2024.</p>
          </div>
          <img className="zine-spread" src={asset(A.zineSpread)} alt="Inside the zine" />
        </div>
      </section>
    </div>
  );
}
