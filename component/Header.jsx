import {
  TiSocialFacebookCircular,
  TiSocialGooglePlus,
  TiSocialLinkedin,
} from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";
import { LuMenuSquare } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { useState} from "react";
import { Link } from "react-router-dom";
Link;
const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const is930 = useMediaQuery({ query: "(max-width:930px)" });
  const is630 = useMediaQuery({query: "(max-width:630px)"})
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleOpen2 = () => {
    setIsOpen2((prev) => !prev);
  };
  return (
    <>
      <header className="header1">
        <section className="firstHeader">
          <Link className={`linkStyle logoLink ${is630 ? "invisble":""}`}>
            <div className="forLogo">
              <div className="smallHeaderLogo">
                <p className="transformP">THE</p>
                <h2>LIBRARY</h2>
              </div>
              <div className="smallHeaderLogo2">
                <p>BIGGEST ONLINE LIBRARY</p>
              </div>
            </div>
          </Link>

          <div className="headerSide">
            <div className="part1">
              <h4 className="title">Welcome to BookVault Hub</h4>

              {is930 ? (
                <div className="divMenu" onClick={handleOpen}>
                  {isOpen ? <LuMenuSquare /> : <FaXmark />}
                </div>
              ) : (
                ""
              )}

              {/* show on click */}
              {is930 && !isOpen ? (
                <div className="navSmall">
                  <nav>
                    <ul>
                      <Link className="linkStyle2">
                        <li>HOME</li>
                      </Link>
                      <Link className="linkStyle2">
                        <li>ABOUT US</li>
                      </Link>
                      <Link className="linkStyle2">
                        <li>OUR BOOKS</li>
                      </Link>
                      <Link className="linkStyle2">
                        <li>BLOG</li>
                      </Link>
                      <Link className="linkStyle2">
                        <li>EVENTS</li>
                      </Link>
                      <Link className="linkStyle2">
                        <li>PAGES</li>
                      </Link>
                      <li onClick={handleOpen2} className={`${is630 ? "invisble" : ""}`}>
                        SOCIALS
                        {isOpen2 ? (
                          <RiArrowDropDownLine className="socialsIcon" />
                        ) : (
                          <RiArrowDropUpLine className="socialsIcon" />
                        )}
                        
                      </li>
                      {!isOpen2 ? (
                          <nav className="socialNav">
                            <ul>
                              <Link className="linkStyle">
                                <li>
                                  <MdAlternateEmail />
                                </li>
                              </Link>
                              <Link className="linkStyle">
                                <li>
                                  <SlSocialYoutube />
                                </li>
                              </Link>
                              <Link className="linkStyle">
                                <li>
                                  <TiSocialFacebookCircular />
                                </li>
                              </Link>
                              <Link className="linkStyle">
                                <li>
                                  <TiSocialGooglePlus />
                                </li>
                              </Link>
                              <Link className="linkStyle">
                                <li>
                                  <TiSocialLinkedin />
                                </li>
                              </Link>
                            </ul>
                          </nav>
                        ) : (
                          ""
                        )}
                    </ul>
                  </nav>
                </div>
              ) : (
                ""
              )}
              <nav className={`${is930 ? "invisble" : ""}`}>
                <ul>
                  <Link className="linkStyle">
                    <li>
                      <MdAlternateEmail />
                    </li>
                  </Link>
                  <Link className="linkStyle">
                    <li>
                      <SlSocialYoutube />
                    </li>
                  </Link>
                  <Link className="linkStyle">
                    <li>
                      <TiSocialFacebookCircular />
                    </li>
                  </Link>
                  <Link className="linkStyle">
                    <li>
                      <TiSocialGooglePlus />
                    </li>
                  </Link>
                  <Link className="linkStyle">
                    <li>
                      <TiSocialLinkedin />
                    </li>
                  </Link>
                </ul>
              </nav>
            </div>

            <div className="part2">
              <nav className={`${is930 ? "invisble" : ""}`}>
                <ul>
                  <Link className="linkStyle2">
                    <li>HOME</li>
                  </Link>
                  <Link className="linkStyle2">
                    <li>ABOUT US</li>
                  </Link>
                  <Link className="linkStyle2">
                    <li>OUR BOOKS</li>
                  </Link>
                  <Link className="linkStyle2">
                    <li>BLOG</li>
                  </Link>
                  <Link className="linkStyle2">
                    <li>EVENTS</li>
                  </Link>
                  <Link className="linkStyle2">
                    <li>PAGES</li>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
          
        </section>
      </header>
    </>
  );
};
export default Header;
