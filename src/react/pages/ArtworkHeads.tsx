import { A, asset } from "../data/assets";

export default function ArtworkHeads() {
  return (
    <div className="art-page art-page--heads">
      <section className="heads-stage">
        <img className="heads-img heads-img--one" src={asset(A.head1)} alt="Head sculpture" />
        <img className="heads-img heads-img--two" src={asset(A.head2)} alt="Head sculpture with pearls" />
        <img className="heads-img heads-img--three" src={asset(A.head3)} alt="Head sculpture with gold" />
        <img className="heads-img heads-img--four" src={asset(A.head4)} alt="Head sculpture, front" />
      </section>
    </div>
  );
}
