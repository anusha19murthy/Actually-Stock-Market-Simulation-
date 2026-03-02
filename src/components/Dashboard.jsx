export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* Left Section */}
      <div className="market-section">
        <h2>Market Stocks</h2>

        <div className="stock-card">
          <span>AAPL</span>
          <span>$189.42</span>
          <span className="positive">+2.31</span>
        </div>

        <div className="stock-card">
          <span>NVDA</span>
          <span>$875.63</span>
          <span className="positive">+18.44</span>
        </div>

        <div className="stock-card">
          <span>TSLA</span>
          <span>$241.11</span>
          <span className="negative">-6.78</span>
        </div>

      </div>

      {/* Right Section */}
      <div className="news-section">
        <h2>Live Financial News</h2>

        <div className="news-card">
          NVIDIA stock rises after earnings beat.
        </div>

        <div className="news-card">
          Tesla deliveries miss expectations.
        </div>

        <div className="news-card">
          Apple expanding AI partnerships.
        </div>

      </div>

    </div>
  );
}