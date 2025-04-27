import { useBookStats } from "../../hooks/useBookStats";

const Stats = () => {
  const stats = useBookStats();

  return (
    <div className="stats-page">
      <h1>Statistik Buku</h1>
      <div className="stats-container">
        <div className="stat-card">
          <h2>Dimiliki</h2>
          <p>{stats.owned}</p>
        </div>
        <div className="stat-card">
          <h2>Sedang Dibaca</h2>
          <p>{stats.reading}</p>
        </div>
        <div className="stat-card">
          <h2>Ingin Dibeli</h2>
          <p>{stats.wishlist}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
