import { useState } from "react";
import { SiteLink as Link } from "../components/SiteLink";
import { A, asset } from "../data/assets";

type Spot = {
  key: string;
  to: string;
  label: string;
  img: string;
  left: number;
  top: number;
  width: number;
  preview?: { img: string; left: number; top: number; width: number };
};

const spots: Spot[] = [
  {
    key: "poster",
    to: "/02日历",
    label: "周边标签",
    img: A.cutPoster,
    left: 3.333,
    top: 5.158,
    width: 18.333,
    preview: { img: A.prevPoster, left: 22.333, top: -8.485, width: 19.5 },
  },
  {
    key: "woman",
    to: "/02日历",
    label: "女人雕像",
    img: A.cutWoman,
    left: 2.083,
    top: 55.241,
    width: 9.333,
  },
  {
    key: "zine",
    to: "/zi-ne",
    label: "zine",
    img: A.cutZine,
    left: 3.583,
    top: 74.626,
    width: 29.833,
    preview: { img: A.prevZine, left: 21.333, top: 26.289, width: 19.5 },
  },
  {
    key: "curled",
    to: "/01蜷缩雕刻",
    label: "蜷缩雕像",
    img: A.cutCurled,
    left: 40.667,
    top: 61.065,
    width: 24.75,
    preview: { img: A.prevCurled, left: 67.5, top: 40.931, width: 26.75 },
  },
  {
    key: "self",
    to: "/03自画像雕刻",
    label: "自画像雕塑",
    img: A.cutSelf,
    left: 75.417,
    top: 48.586,
    width: 11.667,
    preview: { img: A.prevSelf, left: 56.5, top: 14.975, width: 18.833 },
  },
  {
    key: "candle",
    to: "/02日历",
    label: "蜡烛",
    img: A.cutCandle,
    left: 73.083,
    top: 24.293,
    width: 4.75,
    preview: { img: A.prevCandle, left: 49.583, top: 3.661, width: 22.167 },
  },
  {
    key: "head",
    to: "/04头像雕刻",
    label: "人头",
    img: A.cutHead,
    left: 33.167,
    top: 85.358,
    width: 11.917,
  },
];

const badges = [
  { img: A.badge04, left: 20.5, top: 1.497 },
  { img: A.badge07, left: 51.333, top: 6.156 },
  { img: A.badge06, left: 72.917, top: 18.469 },
  { img: A.badge08, left: 87.75, top: 51.581 },
  { img: A.badge03, left: 9.917, top: 60.566 },
  { img: A.badge05, left: 40.667, top: 79.867 },
];

const mobileSpots: Spot[] = [
  {
    key: "woman",
    to: "/02日历",
    label: "女人雕像",
    img: A.cutWoman,
    left: 26,
    top: 25.5,
    width: 17,
  },
  {
    key: "candle",
    to: "/02日历",
    label: "蜡烛",
    img: A.cutCandle,
    left: 51,
    top: 26,
    width: 11,
  },
  {
    key: "curled",
    to: "/01蜷缩雕刻",
    label: "蜷缩雕像",
    img: A.cutCurled,
    left: 7,
    top: 59,
    width: 51,
  },
  {
    key: "head",
    to: "/04头像雕刻",
    label: "人头",
    img: A.cutHead,
    left: 58,
    top: 61,
    width: 35,
  },
];

const mobileBadges = [
  { img: A.badge07, left: 51, top: 11.5 },
  { img: A.badge04, left: 64, top: 12 },
  { img: A.badge05, left: 80.5, top: 27.5 },
  { img: A.badge03, left: 32, top: 53.5 },
];

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="home-page">
      <section className="home-hero">
        <img className="home-hero__bg" src={asset(A.homeWide)} alt="" />
        <div className="home-canvas home-canvas--desktop">
          <img className="home-canvas__scene" src={asset(A.homeScene)} alt="" />
          {badges.map((badge) => (
            <img
              key={badge.img}
              className="spot-badge"
              src={asset(badge.img)}
              alt=""
              style={{ left: `${badge.left}%`, top: `${badge.top}%` }}
            />
          ))}
          {spots.map((spot) => (
            <Link
              key={spot.key}
              to={spot.to}
              className="spot"
              style={{ left: `${spot.left}%`, top: `${spot.top}%`, width: `${spot.width}%` }}
              aria-label={spot.label}
              onMouseEnter={() => setHovered(spot.key)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(spot.key)}
              onBlur={() => setHovered(null)}
            >
              <img src={asset(spot.img)} alt={spot.label} />
            </Link>
          ))}
          <Link
            to="/flow"
            className="spot spot--more"
            style={{ left: "40.917%", top: "41.597%", width: "18.167%" }}
            aria-label="More works"
          >
            <img src={asset(A.more)} alt="MORE" />
          </Link>
          {spots.map(
            (spot) =>
              spot.preview && (
                <div
                  key={`preview-${spot.key}`}
                  className={`spot-preview${hovered === spot.key ? " is-visible" : ""}`}
                  style={{
                    left: `${spot.preview.left}%`,
                    top: `${spot.preview.top}%`,
                    width: `${spot.preview.width}%`,
                  }}
                >
                  <img src={asset(spot.preview.img)} alt="" />
                </div>
              )
          )}
        </div>
        <div className="home-canvas--mobile">
          {mobileSpots.map((spot) => (
            <Link
              key={spot.key}
              to={spot.to}
              className="spot spot--mobile"
              style={{ left: `${spot.left}%`, top: `${spot.top}%`, width: `${spot.width}%` }}
              aria-label={spot.label}
            >
              <img src={asset(spot.img)} alt="" />
            </Link>
          ))}
          {mobileBadges.map((badge) => (
            <img
              key={badge.img}
              className="spot-badge"
              src={asset(badge.img)}
              alt=""
              style={{ left: `${badge.left}%`, top: `${badge.top}%`, width: "7.5%" }}
            />
          ))}
          <Link
            to="/flow"
            className="spot spot--mobile spot--more"
            style={{ left: "23%", top: "42.5%", width: "51%" }}
            aria-label="More works"
          >
            <img src={asset(A.more)} alt="MORE" />
          </Link>
        </div>
      </section>
    </div>
  );
}
