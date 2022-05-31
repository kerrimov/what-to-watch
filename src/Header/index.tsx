import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import "./style.scss";
import logo from "./logo.svg";

export default function Header() {
  const displayDesktop = () => {
    return (
      <Toolbar className="header">
        <div className="menu-container">
          <a href="/">
            <img className="logo" src={logo} alt="" />
          </a>
          <ul className="menu">
            <li className="menu-item">
              <a href="/">Movies</a>
            </li>
            <li className="menu-item">
              <a href="/">TV Shows</a>
            </li>
            <li className="menu-item">
              <a href="/">People</a>
            </li>
            <li className="menu-item">
              <a href="/">More</a>
            </li>
          </ul>
        </div>
        <div className="right-container">
          <a href="/">Login</a>
          <a href="/" className="search-btn">
            <SearchIcon />
          </a>
        </div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
