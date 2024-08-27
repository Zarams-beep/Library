import { Link } from "react-router-dom";
import { MdCategory,MdLogout} from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import {FaRegHeart} from "react-icons/fa";
import { IoSettingsOutline,IoGameController } from "react-icons/io5";
import { PiCatFill } from "react-icons/pi";
import {IoIosStar } from "react-icons/io";
import { GoBellFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import PropTypes from 'prop-types';

const SideBar = ({notificationNumber=0, number = 0})=>{

    return(
        <>
            <aside className="asidePart">
                <section className="headerPart">
                    <Link to='/' className="linkClick">
                    <p className="vault">BOOKVAULT</p>
                    <p className="hub">HUB</p>
                    </Link>
                </section>
                <section className="list">
                    <ul>
                        <li><Link to ="/category" className="linkClick"><MdCategory className="iconsSide"/>Category</Link></li>

                        <li>
                            <Link to="/" className="linkClick">
                            <GiBookmarklet className="iconsSide"/>My Library</Link></li>

                        <li><FaRegHeart className="iconsSide"/>Donated Books</li>
                        <li><Link to="/games" className="linkClick"> 
                            <IoGameController className="iconsSide"/>Games</Link></li>

                        <li className="relativeLi">
                        <Link to ="/check-out" className="linkClick"><FaShoppingCart className="iconsSide"/><p>{number}</p>View Cart </Link></li>

                        <li className="relativeLi2"><GoBellFill className="iconsSide"/><p>{notificationNumber}</p> Notification</li>
                        <li><IoIosStar className="iconsSide"/>Rated</li>
                    </ul>

                    <ul>
                        <li><IoSettingsOutline className="iconsSide"/>Settings</li>
                        <li><PiCatFill className="iconsSide"/>Buy me a Cat</li>
                        <li><MdLogout className="iconsSide"/>Logout</li>
                    </ul>
                </section>
            </aside>
        </>
    )
}
SideBar.propTypes={
    notificationNumber: PropTypes.number,
    number: PropTypes.number,
}
export default SideBar