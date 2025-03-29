import "./nav.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <h3 className="Khwezi">Khwezi<span>Lomso</span></h3>
            <ul className="links">
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/" id="PortfolioLink">Portfolio</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
                <li><Link to="/eduction">Education</Link></li>
            </ul><div className="contactBTN">
                <button className="HireMe">Hire Me</button>
            </div>
        </div>
    );    
}
 
export default Navbar;