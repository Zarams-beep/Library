import { IoSearch } from "react-icons/io5";
const Header2 = ()=>{

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
                        <p>Balogun</p>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header2