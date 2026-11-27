import { SiteLink as Link } from "../components/SiteLink";

export default function ComingSoon() {
  return (
    <div className="empty-page">
      <main className="empty-page__main">
        <p className="empty-page__eyebrow">TAMXXI</p>
        <h1>COMING SOON</h1>
        <p>This room is still being drawn.</p>
        <Link to="/flow" className="empty-page__link">
          See the works →
        </Link>
      </main>
    </div>
  );
}
