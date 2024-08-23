import { useEffect, useState, useContext} from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { objectImage, shuffleArray} from "../jsonMade/sectionPictures";
import { ratingIt, ratingNumber} from "../helpers/Storage";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import { GlobalContext } from "../component/checkSomeThing";
const HomePage = () => {
    const [author, setAuthor] = useState([])
    const [year, setYear] = useState([])
    const [title, setTitle] = useState([])
    const [starIt, setStarIt] = useState([]);

    const {data, originalData,setData} = useContext(GlobalContext)

    useEffect(()=>{
        if(data.length>0){
            setAuthor(data.map((book) => book.author))
            setYear(data.map((book)=> book.publication_year))
            setTitle(data.map((book)=> book.title))
        }
    },[data])

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
    setBtnText(event.target.textContent.toLowerCase())
  }

  const [inputValue,setInputValue] = useState('')
  const searchBar = (valueInput) =>{
    const inputString = valueInput;
    let matchSearch;
    if (btnText==='author'){
      matchSearch = originalData.filter((book) => book.author.toLowerCase() === inputString.toLowerCase().trim());
    }
    else if (btnText==='title'){
      matchSearch = originalData.filter((book)=>book.title.toLowerCase()===inputString.toLowerCase().trim())
    }
    else if (btnText==='publication_year'){
      matchSearch = originalData.filter((book)=>book.publication_year.toString()===inputString.toString().trim())
    }

    if (matchSearch.length>0){
      setData(matchSearch)
      
      console.log("Match found:", matchSearch);
      
      localStorage.setItem('matchSearch', JSON.stringify(matchSearch)||'none')
    }
    else{
        setData([])
            console.log("No match found");
            localStorage.setItem('matchSearch', JSON.stringify(matchSearch)||'none')
    }setInputValue('')
  }

  const handleRestart =()=>{
  setData(originalData)}

    const handleDataStorage = (bookData,img,rating,no) => {
      localStorage.setItem('bookData', JSON.stringify(bookData))
      localStorage.setItem('img', JSON.stringify(img))
      localStorage.setItem('ratingIt',JSON.stringify(rating))
      localStorage.setItem('ratingNumber',JSON.stringify(no))
  };

  return (
    <>
    <Header/>
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
      </main>

      <section className="section2">
        <button className="btnSection" onClick={handleBtn}>TITLE</button>
        <button className="btnSection" onClick={handleBtn}>AUTHOR</button>
        <button className="btnSection" onClick={handleBtn}>PUBLICATION_YEAR</button>
        <button className="btnSection" onClick={handleRestart}>RESTART</button>
      </section>

      <section className="secondPart">
        {btnText==='author'?<><input type="text" value={inputValue} placeholder ="Enter Author" onChange={(e)=>setInputValue(e.target.value)}/><button onClick={()=>{searchBar(inputValue)}}>SEARCH {btnText.toUpperCase()}</button></>:''}

        {btnText==='publication_year'?<>
            <input type="text" value={inputValue} placeholder ="Enter Year" onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={()=>{searchBar(inputValue) }}>SEARCH {btnText.toUpperCase()}</button>
        </>:''}

        {btnText==='title'?<><input type="text" value={inputValue} placeholder ="Enter Title" onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={()=>{searchBar(inputValue)}}>SEARCH {btnText.toUpperCase()}</button></>:''}      
      </section>

          <section className="thirdPart">
            <ul className="imgContainer">
              {data.map((el)=>
                  <li key={el.id}>
                    <Link to={"/viewbook"} className="linkStyle" onClick={() => handleDataStorage(el,el.cover_image,el.id, el.id)}>
                    <div className="imgP"><img src={el.cover_image} alt={el.title} className="image"/></div>
                    <div className="box">
                    <div>{el.title}</div>
                    <div>{el.author}</div>
                    <div>{el.publication_year}</div>
                    <div>{el.genre[0]}, {el.genre[1]}</div>
                    <div className="rating">
                      <p className="rating1">{ratingIt[el.id]}</p>
                      <p>{ratingNumber[el.id]}</p></div>
                    </div>
                    </Link>
                  </li>
              )}
            </ul>
          </section>
    </>
  );
};
export default HomePage;
