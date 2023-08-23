import { React,useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from '../../context/ThemeContext';
function SideBar() {
  const {adminTheme} = useContext(ThemeContext)
  return (
    <>
      <div
        className={`row row-cols-1 bg-${adminTheme} text-black me-2`}
      >
        <ul className="nav flex-column mb-auto gap-2">
          <li className="nav-item">
            <NavLink to= '/admin/dashboard' className="nav-link active" aria-current="page">
              <span className="me-2"><i class="bi bi-house-fill"></i></span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to= '/admin/users' className="nav-link">
               <span className="me-2"><i class="bi bi-house-fill"></i></span>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to= '/admin/products' className="nav-link">
               <span className="me-2"><i class="bi bi-house-fill"></i></span>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to= '/admin/orders' className="nav-link">
               <span className="me-2"><i class="bi bi-house-fill"></i></span>
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
