import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
const AuthHeader = ()=>{

    return(
        <>
            <header className="header2">
                <section className="searchHeader">
                    <button>
                        <IoSearch/>
                        <input type="text" placeholder="Search for your favorite books"/>
                    </button>
                </section>

                <section className="sectionNotes1">
                    <button><Link style={{textDecoration:'none'}} to="/SignIn">Login</Link></button>
                    <button><Link style={{textDecoration:'none'}}to="/SignUp1">SignUp</Link></button>
                </section>
            </header>
        </>
    )
}

export default AuthHeader