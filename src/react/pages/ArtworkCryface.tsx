import { A, asset } from "../data/assets";

export default function ArtworkCryface() {
  return (
    <div className="art-page art-page--dark">
      <section className="cry-stage">
        <figure className="cry-item cry-item--one">
          <img src={asset(A.cry1)} alt="Cryface painting" />
          <figcaption>DRAW<br />2024</figcaption>
        </figure>
        <figure className="cry-item cry-item--two">
          <img src={asset(A.cry3)} alt="Cryface painting detail" />
        </figure>
        <figure className="cry-item cry-item--three">
          <img src={asset(A.cry2)} alt="Cryface painting with pearls" />
        </figure>
        <div className="cry-foot">
          <span>DRAW<br />2024</span>
          <span className="cry-foot__no">#01</span>
        </div>
      </section>
    </div>
  );
}
