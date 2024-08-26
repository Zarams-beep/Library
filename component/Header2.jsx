import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useState} from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { MdCategory,MdLogout} from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import {FaRegHeart} from "react-icons/fa";
import { IoSettingsOutline,IoGameController } from "react-icons/io5";
import { PiCatFill } from "react-icons/pi";
import {IoIosStar } from "react-icons/io";
import { GoBellFill } from "react-icons/go";
const Header2 = ({name='User',count= 0, notificationNumber=0})=>{
    const is500 = useMediaQuery({query:'(max-width:500px)'})
    const [isOpen,setOpen] = useState(false)
    const handleOpen = ()=>{
        setOpen(prev=>!prev)
    }
    

    return(
        <>
            <header className="header2">
                {is500?<section className="headerPart"><Link to='/' className="linkClick">
                    <p className="vault">BOOKVAULT</p>
                    <p className="hub">HUB</p>
                    </Link></section>:''}
                <section className="searchHeader">
                    <button>
                        <IoSearch/>
                        <input type="text" placeholder="Search for your favorite books"/>
                    </button>
                </section>

                <section className="sectionNotes">
                    <div className="profileContainer">
                        <img src="/profile.jpg" alt="profile" />
                        <p className="name">{name}</p>
                    </div>

                    {is500?(
          <div className="divContain">
            <div onClick={handleOpen}>
              {isOpen ? <RxCross2 /> : <IoMdMenu />}
              <section className={`list1 ${isOpen?'opacityMenu':''}`}>
                    <ul>
                        <li><Link to ="/category" className="linkClick"><MdCategory className="iconsSide"/>Category</Link></li>

                        <li>
                            <Link to="/" className="linkClick">
                            <GiBookmarklet className="iconsSide"/>My Library</Link></li>

                        <li><FaRegHeart className="iconsSide"/>Donated Books</li>
                        
                        <li><Link to="/games" className="linkClick"> 
                            <IoGameController className="iconsSide"/>Games</Link></li>

                        <div className="notificationValue">
                        <li className="relativeLi2"><GoBellFill className="iconsSide"/><p>{notificationNumber}</p> Notification</li>
                        </div>
                        <li><IoIosStar className="iconsSide"/>Rated</li>
                    </ul>

                    <ul>
                        <li><IoSettingsOutline className="iconsSide"/>Settings</li>
                        <li><PiCatFill className="iconsSide"/>Buy me a Cat</li>
                        <li><MdLogout className="iconsSide"/>Logout</li>
                    </ul>
                </section>
          </div>
                        <div className="shopCart">
                        <Link to ="/CheckOut" className="linkClick"><FaShoppingCart className="iconsSide"/><p>{count}</p></Link>
                        </div>

          </div>
        ) : (
          ""
        )}
                </section>

               
       
            </header>
        </>
    )
}

Header2.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    notificationNumber: PropTypes.number.isRequired,
}
export default Header2