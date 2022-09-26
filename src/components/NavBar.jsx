import "../css/navBar.css"

import { NavLink,  } from 'react-router-dom';

const NavBar = () => {

    return(
        <nav class="navMenu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-cars:">Add car</NavLink>
            <div class="dot"></div>
        </nav>
    )
}

export default NavBar