import { A, asset } from "../data/assets";

export default function ArtworkSelfPortrait() {
  return (
    <div className="art-page art-page--blue">
      <section className="self-hero">
        <video src={asset(A.selfVideo)} autoPlay muted loop playsInline />
      </section>
    </div>
  );
}
