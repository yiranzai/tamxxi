import { A, asset } from "../data/assets";

export default function ArtworkCurled() {
  return (
    <div className="art-page art-page--curled">
      <section className="curled-hero">
        <video src={asset(A.curledVideo)} autoPlay muted loop playsInline />
      </section>
      <section className="curled-info">
        <img className="curled-calli" src={asset(A.curledCalligraphy)} alt="E, 2023 clay" />
        <div className="curled-grid">
          {[0, 1, 2, 3].map((index) => (
            <img key={index} src={asset(A.curledDetail)} alt="Sculpture detail" loading="lazy" />
          ))}
        </div>
      </section>
    </div>
  );
}
