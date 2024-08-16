import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { objectImage, shuffleArray } from "../jsonMade/sectionPictures";
const HomePage = () => {
  const imageArray = Object.values(objectImage);
  const [shuffledImages, setShuffledImages] = useState(
    shuffleArray(imageArray)
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shuffledImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [btnText, setBtnText] = useState('')
  const handleBtn = (event) =>{
    setBtnText(event.target.textContent)
  }

  return (
    <>
      <main style={{ backgroundImage: `url(${shuffledImages[currentIndex]})` }}>
        <div className="divArrows">
          <IoIosArrowBack onClick={handlePrevious} className="iconsArrow"/>

          <IoIosArrowForward onClick={handleNext} className="iconsArrow"/>
        </div>

        <div className="notes">
            <h4>ARE YOU SEARCHING FOR A BOOK</h4>
            <h1>BIGGEST LIBRARY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis numquam nobis iste.</p>
        </div>

        <section className="section2">
        <button className="btnSection" onClick={handleBtn}>BASIC</button>
        <button className="btnSection" onClick={handleBtn}>AUTHOR</button>
        <button className="btnSection" onClick={handleBtn}>PUBLICATIONS</button>
      </section>
      </main>

      <section className="secondPart">
        <input type="text" placeholder="First Name" className="inputPart"/>
        <input type="text" placeholder="Middle Name" className="inputPart"/>
        <input type="text" placeholder="Last Name" className="inputPart"/>
        <button>SEARCH {btnText}</button>
      </section>

      
    </>
  );
};
export default HomePage;
