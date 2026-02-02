import logo from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";

function Header () {
        return (
            <header className="site-header">
      <div className="container header-inner">
        <img className="logo" src={logo} alt="Discord" />

        <button className="menu-btn" aria-label="Open menu">
          <img className="menu-icon" src={menuIcon} alt="" />
        </button>
      </div>
    </header>
  );



    }

    export default Header