import {Link} from "react-router-dom";
import Button from "./Button";
import Search from "./Search";

const NavBar = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Ring</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/upload">Upload</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chat">Chat</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/CMS"}>CMS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/search"}>Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/feedback"}>Feedback</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Dashboard
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                                <li><Link className="dropdown-item" to="/signin">Sign In</Link></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><Link className="dropdown-item" to="/admin">Admin</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;