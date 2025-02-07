import {Link, link, Links} from "react-router-dom"
export default function Navbar(){
    return(
        <div className="navbar">
            <h5>Logo</h5>
            <ul className="navGuys">
                <Link to='/home'>
                    <li className="nav-item">home</li>
                </Link>
                <Link to='/About'>
                    <li className="nav-item">About</li>
                </Link>
            </ul>
        </div>
    )
}





















































