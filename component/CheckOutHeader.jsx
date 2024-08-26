import PropTypes from "prop-types";
import { useState, useEffect, useContext} from "react";
import { GlobalContext } from "../component/checkSomeThing";
const CheckOutHeader = ({count=0})=>{
    const {SignUpValue} = useContext(GlobalContext)
    const [fullName,setFullName] = useState('')
    useEffect(() => {
      const storedEmail = JSON.parse(localStorage.getItem("email")); 
      const user = SignUpValue[storedEmail];
      setFullName((user.frt).toUpperCase());
  
  }, [SignUpValue]);
    return(
        <>
             <header className="header3">
                <section className="searchHeader">
                    <p>Checkout ({count} Items)</p>
                </section>

                <section className="sectionNotes">
                    <div className="profileContainer">
                        <img src="/profile.jpg" alt="profile" />
                        <p>{fullName}</p>
                    </div>
                </section>
            </header>
        </>
    )
}
CheckOutHeader.propTypes = {
    count: PropTypes.number.isRequired,

}
export default CheckOutHeader