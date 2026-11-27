import { SiteLink as Link } from "../components/SiteLink";
import { A, asset } from "../data/assets";

export default function OldHome() {
  return (
    <div className="oldhome-page">
      <section className="oldhome-stage">
        <img className="oldhome-bg" src={asset(A.oldHomeScene)} alt="" />
        <Link
          to="/02日历"
          className="oldhome-spot"
          style={{ left: "3.89%", top: "54.67%", width: "7.78%" }}
          aria-label="女人雕像"
        >
          <img src={asset(A.cutWoman)} alt="" />
        </Link>
        <Link
          to="/04头像雕刻"
          className="oldhome-spot"
          style={{ left: "31.88%", top: "87%", width: "9.93%" }}
          aria-label="人头"
        >
          <img src={asset(A.cutHead)} alt="" />
        </Link>
        <Link
          to="/01蜷缩雕刻"
          className="oldhome-spot"
          style={{ left: "42.57%", top: "61.17%", width: "20.63%" }}
          aria-label="蜷缩雕像"
        >
          <img src={asset(A.cutCurled)} alt="" />
        </Link>
        <Link
          to="/zi-ne"
          className="oldhome-spot"
          style={{ left: "9.72%", top: "72.83%", width: "22.15%" }}
          aria-label="zine"
        >
          <img src={asset(A.cutZine)} alt="" />
        </Link>
        <img
          className="oldhome-spot oldhome-spot--static"
          src={asset(A.cutPoster)}
          alt=""
          style={{ left: "4.24%", top: "2.67%", width: "15.28%" }}
        />
        <Link
          to="/02日历"
          className="oldhome-spot"
          style={{ left: "73.96%", top: "24.33%", width: "3.96%" }}
          aria-label="蜡烛"
        >
          <img src={asset(A.cutCandle)} alt="" />
        </Link>
        <Link
          to="/03自画像雕刻"
          className="oldhome-spot oldhome-spot--self"
          style={{ left: "64.58%", top: "47.5%", width: "26.39%" }}
          aria-label="自画像雕塑"
        >
          <img src={asset(A.cutSelf)} alt="" />
        </Link>
        <Link
          to="/flow"
          className="oldhome-spot"
          style={{ left: "45.14%", top: "76.67%", width: "15.14%" }}
          aria-label="More works"
        >
          <img src={asset(A.more)} alt="MORE" />
        </Link>
        {[
          { img: A.badge03, left: 7.15, top: 63.5 },
          { img: A.badge05, left: 24.58, top: 77.33 },
          { img: A.badge04, left: 35, top: 87.83 },
          { img: A.badge06, left: 64.17, top: 36 },
          { img: A.badge07, left: 44.65, top: 7.17 },
          { img: A.badge08, left: 18.06, top: 10.33 },
        ].map((badge) => (
          <img
            key={badge.img}
            className="oldhome-badge"
            src={asset(badge.img)}
            alt=""
            style={{ left: `${badge.left}%`, top: `${badge.top}%` }}
          />
        ))}
      </section>
      <section className="oldhome-gray" />
    </div>
  );
}
