
import { Bell, Search, Menu } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  return (
    <header className="navbar">
      <button className="mobile-menu" aria-label="Open menu">
        <Menu size={22} />
      </button>

      <div className="navbar-search">
        <Search size={18} />
        <input type="search" placeholder="Search climate information..." />
      </div>

      <div className="navbar-actions">
        <LanguageSwitcher />

        <button className="icon-button" aria-label="Notifications">
          <Bell size={21} />
        </button>

        <div className="user-avatar">IC</div>
      </div>
    </header>
  );
}

export default Navbar;
