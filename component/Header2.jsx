import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";

const Header2 = ({name='User'})=>{

    return(
        <>
            <header className="header2">
                <section className="searchHeader">
                    <button>
                        <IoSearch/>
                        <input type="text" placeholder="Search for your favorite books"/>
                    </button>
                </section>

                <section className="sectionNotes">
                    <div className="profileContainer">
                        <img src="/profile.jpg" alt="profile" />
                        <p>{name}</p>
                    </div>
                </section>
            </header>
        </>
    )
}

Header2.propTypes = {
    name: PropTypes.string.isRequired,}
export default Header2