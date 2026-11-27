import { A, asset } from "../data/assets";

export default function ArtworkFading() {
  return (
    <div className="art-page art-page--dark">
      <section className="fading-hero">
        <img src={asset(A.fadingHero)} alt="Fading" />
      </section>
      <section className="fading-stage">
        <img className="fading-left" src={asset(A.fadingLeft)} alt="Fading detail" />
        <img className="fading-rabbit" src={asset(A.fadingRabbit)} alt="Fading rabbit" />
        <img className="fading-strip" src={asset(A.fadingStrip)} alt="Fading sketches" />
      </section>
    </div>
  );
}
