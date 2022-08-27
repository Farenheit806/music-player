import { NavLink } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home page</NavLink>
        </li>
        <li>
          <NavLink to="/music">All music</NavLink>
        </li>
        <li>
          <NavLink to="/playlist">Playlist</NavLink>
        </li>
      </ul>
    </nav>
  );
};
