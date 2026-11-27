import { SiteLink as Link } from "../components/SiteLink";
import { asset } from "../data/assets";

type FlowItem = { img: string; w: number; h: number; to?: string; bleed?: boolean };

const colOne: FlowItem[] = [
  { img: "hUnnR06ZUkzjPQHuH4QuFIWNi1Y.jpg", w: 320, h: 316 },
  { img: "02VPXc13DYCuiANZ2N0qucLFKkA.jpg", w: 319, h: 314 },
  { img: "NruNZLe8Q0DN9kYa2Eaex0Shc.jpg", w: 320, h: 445, to: "/02-cryface" },
  { img: "bmMGOeRYpZgBZLSMQvkZm7pCDA.jpg", w: 318, h: 441 },
  { img: "k3Q2riMRPX9ISEAuE0VuOi6cA.jpg", w: 325, h: 234 },
  { img: "sQ04zoNIIbR0ZJI61Mrano62eo.jpg", w: 320, h: 448 },
  { img: "k79i88bkeERyeoGQNU2MMxytHyU.jpg", w: 320, h: 327 },
  { img: "BQxIKFPwsAs7CQu3Tb3tn6L9mIg.jpg", w: 320, h: 448 },
  { img: "z9wRHJFp7Tibf4Yga0HX8nSQEro.png", w: 313, h: 209 },
  { img: "7L0GUclf63mtTgS81doQvSA88w8.jpg", w: 322, h: 238 },
  { img: "BRpD8724bJ1ZXlH27RpuFLutwg.jpg", w: 319, h: 448 },
  { img: "yt3xDaostBxTJk7DqLkW07CCS0I.jpg", w: 320, h: 448 },
  { img: "vIKFMvW2dFpcHyTpNJzkbHoV2iQ.jpg", w: 320, h: 448 },
];

const colTwo: FlowItem[] = [
  { img: "mGl1NjX0ov2JkLhA6GaG3FLiM.png", w: 320, h: 448, to: "/01-fading" },
  { img: "ZGOq7KYgTZws1rSL3ftMWTsy0kA.jpg", w: 320, h: 315 },
  { img: "G7LcFGImKDxjy2ACJQGaKWaTAog.jpg", w: 320, h: 448 },
  { img: "rw2tjxXpH84mQ8uFCdXHZPvd4A.png", w: 329, h: 261 },
  { img: "cBxPkKuLJVxi8oIPsSWOkEoFU.jpg", w: 320, h: 254 },
  { img: "RLkZUUG9mTYznDcflhRdsOljcYg.jpg", w: 320, h: 448 },
  { img: "bnboeyePs2swNunhfAcobKyszQ.jpg", w: 320, h: 238 },
  { img: "VWoVnbkIcHMPeD4l3U7KTtafyo.png", w: 318, h: 237 },
  { img: "XErf5phCFgSDlKBrPHupSq7E.jpg", w: 320, h: 448 },
  { img: "qzhWV5Qw8nOSOTx0Qp34v02x4J0.jpg", w: 320, h: 213 },
  { img: "0TSJtIHlRWLQLgL9Sr101ln4Lw.jpg", w: 329, h: 307 },
];

const colThree: FlowItem[] = [
  { img: "q7sBIwoWR7Ossm1nNUEAbfk2r6g.jpg", w: 320, h: 313 },
  { img: "cfVsfRnUIsZkzUGjAMo0OY4DlCY.jpg", w: 356, h: 258, bleed: true },
  { img: "vL9bJdW7vecpAPnhr6Uet9GCv2w.jpg", w: 318, h: 448 },
  { img: "jhOjO5lsyD2P4yGjYcXWJiUCY.jpg", w: 320, h: 230 },
  { img: "qP2M1ygxM7QQaVjhQAFD9EgSw.jpg", w: 320, h: 594 },
  { img: "B5r5Zjvpq2u0lYwNyNlTwF52pg.png", w: 320, h: 484 },
  { img: "YF2a4Yj7SaCbbV8abtss97MJ5YQ.png", w: 323, h: 249 },
  { img: "8sOpCNNLUo7DU4waTibbFcDNeM.jpg", w: 327, h: 366, to: "/03-burning" },
  { img: "NwVg16ejR79RFpUB2YltiIaNYqk.jpg", w: 320, h: 448 },
  { img: "RdzDNu2tU3WxBuIdFYBuBesxEE.jpg", w: 327, h: 366 },
  { img: "sPsUxhJVuWTrIgdVibPr59uj5c.jpg", w: 320, h: 448 },
  { img: "bwrZQbckcC7Ek6AUQqGW6yHP64Q.jpg", w: 320, h: 225 },
];

function Card({ item }: { item: FlowItem }) {
  const image = (
    <img
      src={asset(item.img)}
      alt=""
      loading="lazy"
      style={{ aspectRatio: `${item.w} / ${item.h}` }}
    />
  );
  if (item.to) {
    return (
      <Link to={item.to} className="flow-card flow-card--link">
        {image}
      </Link>
    );
  }
  return <div className={`flow-card${item.bleed ? " flow-card--bleed" : ""}`}>{image}</div>;
}

export default function Flow() {
  return (
    <div className="flow-page">
      <main className="flow">
        <div className="flow-grid">
          <div className="flow-col">
            {colOne.map((item) => (
              <Card key={item.img} item={item} />
            ))}
          </div>
          <div className="flow-col">
            <Card item={colTwo[0]} />
            <Card item={colTwo[1]} />
            <div className="flow-card flow-card--author">
              <img
                src={asset("31Qo2VZWSuMwtqCqsvHu6VQFgkM.jpg")}
                alt=""
                loading="lazy"
                style={{ aspectRatio: "295 / 457" }}
              />
              <div className="flow-author">
                <div className="flow-avatar" />
                <div>
                  <p className="flow-author__name">tamxxi</p>
                  <p className="flow-author__handle">@pixelbeat</p>
                </div>
              </div>
            </div>
            {colTwo.slice(2).map((item) => (
              <Card key={item.img} item={item} />
            ))}
          </div>
          <div className="flow-col">
            <div className="flow-card flow-card--quote">
              <p>New drawings, prints and zines are on the way.</p>
            </div>
            {colThree.map((item) => (
              <Card key={item.img} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
