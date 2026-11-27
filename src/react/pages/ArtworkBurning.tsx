import { A, asset } from "../data/assets";

export default function ArtworkBurning() {
  return (
    <div className="art-page art-page--burning">
      <section className="burning-hero">
        <img src={asset(A.burningHero)} alt="Burning" />
      </section>
      <section className="burning-info">
        <div className="burning-info__inner">
          <h1>《Burning》</h1>
          <div className="burning-info__grid">
            <p>
              TAMXXI is a illustrator and designer base in Shenzhen China.Her works have a strong desire to
              express emotions and make extensive use of symbols to express some obscure emotions and stories.
            </p>
            <img src={asset(A.burningPrint)} alt="Burning print in a frame" />
          </div>
        </div>
      </section>
    </div>
  );
}
