import Typography from "@mui/material/Typography";
import { TbBooks } from "react-icons/tb";
import { useState } from "react";
const Footer2 = () =>{
    const [inputValue, setInputValue] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setValidationMessage(''); 
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleClick = () => {
        if (isValidEmail(inputValue)) {
            setValidationMessage('Submitted! Thank You!');
            setInputValue('')
        } else {
            setValidationMessage('Please enter a valid email address.');
        }
    };

    return(
        <>
            <footer className="footerIt"style={{
          backgroundImage: `url('/henry-be--Pg63JThyCg-unsplash.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          height: '100vh' 
        }}>
            <section className="newsLetter">
                <Typography variant="h3">Newsletter</Typography>
                <Typography>Subscribe to our mailing list and get interesting news to your email inbox.</Typography>

                <div className="subs">
                    <Typography>{validationMessage}</Typography>
                    <input type="text" placeholder="Enter E-mail" value={inputValue}
                    onChange={handleInputChange} required/>
                    <button onClick={handleClick}>SUBSCRIBE</button>
                </div>
            </section>
            </footer>

            <footer className="footerIt2" style={{backgroundColor:'#212121'}}>
                <section className="footer">
                <div className="logoFooter">
                    <TbBooks/>
                    <Typography>BOOKVAULT HUB</Typography>
                </div>
                <Typography>A new book exchange service has been launched, aimed at enhancing community engagement and broadening access to diverse reading materials.</Typography></section>
            </footer>
        </>
    )
}
export default Footer2