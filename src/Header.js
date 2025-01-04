import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <nav>
                <ul className="Nav-ul">
                    <li><Link className="head-link" to="/">Home</Link></li>
                    <li><Link className="head-link" to="/about">About</Link></li>
                    <li><Link className="head-link" to="/projects">Projects</Link></li>
                    <li><Link className="head-link" to="/education">Education</Link></li>
                </ul>
            </nav>
        </>
    );
}
export default Header;