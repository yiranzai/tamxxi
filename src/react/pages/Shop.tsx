import { useState } from "react";
import { SiteLink as Link } from "../components/SiteLink";
import ContactModal from "../components/ContactModal";
import { A, asset } from "../data/assets";

const products = [
  { img: A.shop1, to: "/02-cryface", label: "Sorrow Set — pearls" },
  { img: A.shop2, to: "/02日历", label: "Sorrow Set — calendar" },
  { img: A.shop3, to: "/flow", label: "Sorrow Set — motorcycle" },
  { img: A.shop4, to: "/03自画像雕刻", label: "Sorrow Set — red hair" },
];

type BuyKey = "china" | "world" | "contact" | null;

const buyContent: Record<Exclude<BuyKey, null>, { title: string; body: React.ReactNode }> = {
  china: {
    title: "CHINA MAIN LAND",
    body: (
      <>
        <p>Records and zines ship from Shenzhen. DM on 小红书 to check stock, editions and shipping.</p>
        <div className="modal__links">
          <a href="https://www.xiaohongshu.com/search_result?keyword=tamxxi" target="_blank" rel="noreferrer">
            小红书 — tamxxi
          </a>
          <a href="https://www.instagram.com/tamxxi_/" target="_blank" rel="noreferrer">
            Instagram — @tamxxi_
          </a>
        </div>
      </>
    ),
  },
  world: {
    title: "OTHER COUNTRIES",
    body: (
      <>
        <p>International orders are arranged by DM. Tell me the record, your country and the shipping address.</p>
        <div className="modal__links">
          <a href="https://www.instagram.com/tamxxi_/" target="_blank" rel="noreferrer">
            Instagram — @tamxxi_
          </a>
        </div>
      </>
    ),
  },
  contact: {
    title: "CONTACT ME",
    body: (
      <>
        <p>Commissions, wholesale, exhibitions and press: the fastest way is a direct message.</p>
        <div className="modal__links">
          <a href="https://www.instagram.com/tamxxi_/" target="_blank" rel="noreferrer">
            Instagram — @tamxxi_
          </a>
          <a href="https://www.xiaohongshu.com/search_result?keyword=tamxxi" target="_blank" rel="noreferrer">
            小红书 — tamxxi
          </a>
        </div>
      </>
    ),
  },
};

export default function Shop() {
  const [buy, setBuy] = useState<BuyKey>(null);

  return (
    <div className="shop-page">
      <section className="shop-hero">
        <div className="shop-grid">
          {products.map((product) => (
            <Link key={product.img} to={product.to} className="shop-card" aria-label={product.label}>
              <img src={asset(product.img)} alt={product.label} />
            </Link>
          ))}
        </div>
        <div className="shop-hero__blank" />
      </section>
      <section className="shop-buy">
        <img className="shop-buy__title" src={asset(A.howToBuy)} alt="HOW TO BUY" />
        <div className="shop-pills">
          <button type="button" className="shop-pill shop-pill--china" onClick={() => setBuy("china")}>
            <img src={asset(A.pillChina)} alt="CHINA MAIN LAND" />
          </button>
          <button type="button" className="shop-pill shop-pill--world" onClick={() => setBuy("world")}>
            <img src={asset(A.pillOther)} alt="OTHER COUNTRIES" />
          </button>
          <button type="button" className="shop-pill shop-pill--contact" onClick={() => setBuy("contact")}>
            <img src={asset(A.pillContact)} alt="CONTACT ME" />
          </button>
        </div>
      </section>
      <ContactModal open={buy !== null} title={buy ? buyContent[buy].title : ""} onClose={() => setBuy(null)}>
        {buy ? buyContent[buy].body : null}
      </ContactModal>
    </div>
  );
}
