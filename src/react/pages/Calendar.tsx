import { A, asset } from "../data/assets";

export default function CalendarProduct() {
  return (
    <div className="product-page">
      <section className="product-stage">
        <img className="product-stage__bg" src={asset(A.calBg)} alt="" />
        <img className="product-layer product-layer--slip1" src={asset(A.calSlip1)} alt="" />
        <img className="product-layer product-layer--slip2" src={asset(A.calSlip2)} alt="" />
        <img className="product-layer product-layer--card" src={asset(A.calCard)} alt="Calendar card" />
        <img className="product-layer product-layer--disc" src={asset(A.calDisc)} alt="Sorrow set record" />
        <img className="product-layer product-layer--seal" src={asset(A.calSeal)} alt="" />
      </section>
      <section className="product-photos">
        <img className="product-photo product-photo--wide" src={asset(A.calPhotoWide)} alt="" />
        <img className="product-photo product-photo--left" src={asset(A.calPhotoLeft)} alt="" />
        <img className="product-photo product-photo--tall" src={asset(A.calPhotoTall)} alt="" />
      </section>
    </div>
  );
}
