import Email from "../icons/Email";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Tiktok from "../icons/Tiktok";
import "../styles/navbar.css"
const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="left">
                <div className="email">
                    <Email /> info@somestore.com
                </div>
                <div className="social">¨
                    <Facebook /> <Instagram /> <Tiktok />
                </div>
            </div>
            <div className="links">
                <span style={{borderRight:"1.5px solid black"}}>join our team</span>
                <span style={{ borderRight: "1.5px solid black" }}>Sponorship</span>
                <span>Our stores</span>
            </div>
        </div>
    );
}
export default Navbar;