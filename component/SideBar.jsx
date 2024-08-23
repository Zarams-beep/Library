import { Link } from "react-router-dom";
import { MdCategory,MdLogout} from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
// import { GoBookmark } from "react-icons/go";
import { FaFileDownload,FaRegHeart,FaHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { PiCatFill } from "react-icons/pi";
import { IoIosStarOutline,IoIosStar } from "react-icons/io";
import { GoBellFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import PropTypes from 'prop-types';

const SideBar = ({notificationNumber=0, number = 0})=>{

    return(
        <>
            <aside className="asidePart">
                <section className="headerPart">
                    <p className="vault">BOOKVAULT</p>
                    <p className="hub">HUB</p>
                </section>
                <section className="list">
                    <ul>
                        <li><MdCategory className="iconsSide"/>Category</li>
                        <li><GiBookmarklet className="iconsSide"/>My Library</li>
                        <li><FaRegHeart className="iconsSide"/>Donated Books</li>
                        <li><FaFileDownload className="iconsSide"/>Download</li>
                        <li className="relativeLi"><FaShoppingCart className="iconsSide"/><p>{number}</p>View Cart </li>
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