import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/"><h1 className="logo">BrightSmile</h1></NavLink>
            <button>Menu</button>
        </div>
    )
}