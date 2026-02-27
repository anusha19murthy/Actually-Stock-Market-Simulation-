import React from "react";

const stocks = [
  { symbol: "AAPL", price: 189.42, change: 2.31 },
  { symbol: "NVDA", price: 875.63, change: 18.44 },
  { symbol: "TSLA", price: 241.11, change: -6.78 },
  { symbol: "MSFT", price: 415.22, change: 3.91 },
];

const news = [
  { id: 1, title: "NVIDIA stock rises after earnings beat." },
  { id: 2, title: "Tesla deliveries miss expectations." },
  { id: 3, title: "Apple expanding AI partnerships." },
];

export default function App() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Actually Dashboard</h1>

      <div style={styles.container}>
        <div style={styles.stocks}>
          <h2>Market Stocks</h2>
          {stocks.map((stock) => (
            <div key={stock.symbol} style={styles.stockCard}>
              <strong>{stock.symbol}</strong>
              <span>${stock.price}</span>
              <span
                style={{
                  color: stock.change >= 0 ? "#22c55e" : "#ef4444",
                }}
              >
                {stock.change >= 0 ? "+" : ""}
                {stock.change}
              </span>
            </div>
          ))}
        </div>

        <div style={styles.news}>
          <h2>Live Financial News</h2>
          {news.map((item) => (
            <div key={item.id} style={styles.newsCard}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#0f172a",
    minHeight: "100vh",
    width: "100vw",
    margin: 0,
    padding: "60px",
    color: "white",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },

  title: {
    textAlign: "center",
    marginBottom: "50px",
    fontSize: "42px",
  },

  container: {
    display: "flex",
    gap: "40px",
    width: "100%",
  },

  stocks: {
    flex: 2,
    background: "#1e293b",
    padding: "30px",
    borderRadius: "14px",
  },

  stockCard: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    background: "#334155",
    marginTop: "15px",
    borderRadius: "10px",
  },

  news: {
    flex: 1,
    background: "#1e293b",
    padding: "30px",
    borderRadius: "14px",
  },

  newsCard: {
    background: "#334155",
    padding: "16px",
    marginTop: "15px",
    borderRadius: "10px",
  },
};