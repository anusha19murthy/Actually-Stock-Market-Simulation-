export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="icon">🌙</div>
        <h2>Actually</h2>
      </div>

      <div className="nav-right">
        <div>
          <p className="label">Wallet Balance</p>
          <p className="value">₹1,00,000</p>
        </div>

        <div>
          <p className="label">Total P/L</p>
          <p className="profit">+₹58.14 (+0.93%)</p>
        </div>
      </div>
    </div>
  );
}