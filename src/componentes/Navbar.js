import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <ul>
      <li>
        <NavLink to="/"> Página Home</NavLink>
      </li>
      <li>
        <NavLink to="/otro"> Página otros</NavLink>
      </li>
      <li>
        <NavLink to="/users"> Página users</NavLink>
      </li>
    </ul>
  );
}
