import { A, asset } from "../data/assets";

export default function ArtFairsShanghai() {
  return (
    <div className="booth-page">
      <section className="booth">
        <img src={asset(A.boothLeft)} alt="TAMXXI booth artwork, left panel" />
        <img src={asset(A.boothMid)} alt="TAMXXI Shanghai booth" />
        <img src={asset(A.boothRight)} alt="TAMXXI booth artwork, right panel" />
      </section>
    </div>
  );
}
