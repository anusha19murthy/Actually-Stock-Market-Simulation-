import {
  FiGrid,
  FiBriefcase,
  FiFileText,
  FiUser,
  FiDollarSign,
  FiLogOut
} from "react-icons/fi";
import logo from "../assets/actually-final-pfp.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <img src={logo} alt="Actually Logo" className="sidebar-logo" />
        <div className="logo">Actually</div>

        <div className="nav">
          <div className="nav-item active">
            <FiGrid className="nav-icon" />
            Dashboard
          </div>

          <div className="nav-item">
            <FiBriefcase className="nav-icon" />
            Portfolio
          </div>

          <div className="nav-item">
            <FiFileText className="nav-icon" />
            News
          </div>

          <div className="nav-item">
            <FiUser className="nav-icon" />
            Profile
          </div>

          <div className="nav-item">
            <FiDollarSign className="nav-icon" />
            Transactions
          </div>
        </div>
      </div>


      <div className="logout">
        <FiLogOut className='nav-icon' />
        Logout
      </div>
    </div>
  );
}

export default Sidebar;