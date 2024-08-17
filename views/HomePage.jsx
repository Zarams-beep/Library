import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { objectImage, shuffleArray } from "../jsonMade/sectionPictures";
import axios from 'axios';
const HomePage = () => {
    const [data,setData]=useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [author, setAuthor] = useState([])
    const [year, setYear] = useState([])
    const [title, setTitle] = useState([])

    
    const fetchData = async () =>{
        try{
            setLoading(true)
            const response = await axios.get("https://freetestapi.com/api/v1/books")
            console.log("Fetched data:", response.data);
            setData(response)
        }
        catch (error) {
            setError(error);
            console.error("Fetch data error: ", error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData()
        console.log(author);
        console.log(year);
        console.log(title);
    },[author,year,title])

    useEffect(()=>{
        if(data.length>0){
            setAuthor(data.map((books) =>{books.author}))
            setYear(data.map((books)=>{books.publication_year}))
            setTitle(data.map((books)=>{books.title}))
        }
    },[])

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
        {btnText==='author'?<><input type="text" placeholder="Enter Name" className="inputPart"/><button>SEARCH {btnText.toUpperCase()}</button></>:''}

        {btnText==='publications'?<>
            <input type="text" placeholder="Enter Year" className="inputPart"/>
            <button>SEARCH {btnText.toUpperCase()}</button>
        </>:''}

        {btnText==='basic'?<><input type="text" placeholder="Name of Book" className="inputPart"/>
            <button>SEARCH {btnText.toUpperCase()}</button></>:''}
        
      </section>

      
    </>
  );
};
export default HomePage;
