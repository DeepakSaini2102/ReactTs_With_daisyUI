import { Outlet, Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const MainLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-200 p-4 justify-between">
          <span className="text-xl font-bold">🧩 My App</span>
          <ThemeToggle />
        </div>
        <div className="p-4">
          <Outlet /> {/* This will render the page content */}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="main-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 bg-base-100 text-base-content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;
