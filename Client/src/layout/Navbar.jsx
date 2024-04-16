import { Link } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
    // Remove token and user details from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Redirect to login page
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
      <div className="flex justify-start px-4 p-2">
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

        <div id="navbarCollapse" className="md:block hidden">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/user-card" className="nav-link active">
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
            <li className="nav-item">
              <Link to="/user" className="nav-link active">
                User Details
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
