import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <ul>
        <button>
          <NavLink to='/'>Home</NavLink>
        </button>
        <li>
          <NavLink to='/MakeNote'>MakeNote</NavLink>
        </li>
        <li>
          <NavLink to='/Feed'>Feed</NavLink>
        </li>
        <li>
          <NavLink to='/Register'>Register</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;