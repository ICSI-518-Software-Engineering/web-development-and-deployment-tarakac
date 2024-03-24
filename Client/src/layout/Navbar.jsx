import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
      <div className=" flex justify-start px-4 p-2">
        <a href="/" className="navbar-brand">
          <i className="fas fa-blog"></i> &nbsp; Profile Website
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarCollapse" className=" md:block hidden">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/numbers" className="nav-link active">
                Add Numbers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/inventory-management" className="nav-link active">
                Inventory Management
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/other-items" className="nav-link active">
                Other Items
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
